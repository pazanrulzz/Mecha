// postprocessing.js - final image: contact shadows (SSAO), selective bloom and tone mapping
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { renderer, scene, camera } from '../scene.js';
import { S, state } from '../config.js';
import { HEAT, glowMat } from '../materials.js';
import { cutPlane } from '../model/cutaway.js';
import { pointMat } from './particles.js';

// ---- special materials used only for the extra passes ----

// Black material: hides an object in the bloom pass
const darkMat = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide });
darkMat.clippingPlanes = [cutPlane];

// Depth material: draws distance from the camera (input for the ambient occlusion)
const depthMat = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, side: THREE.DoubleSide });
depthMat.clippingPlanes = [cutPlane];

// Bloom-only look of a hot pipe: just the glow colour, nothing else
const pipeEmitMat = new THREE.ShaderMaterial({
  uniforms: { uHeat: HEAT },
  clipping: true,
  vertexShader: `attribute float aHeat; varying float vHeat;
    #include <common>
    #include <clipping_planes_pars_vertex>
    void main(){ vHeat = aHeat; vec4 mvPosition = modelViewMatrix * vec4(position,1.0);
      gl_Position = projectionMatrix * mvPosition;
      #include <clipping_planes_vertex>
    }`,
  fragmentShader: `uniform float uHeat; varying float vHeat;
    #include <common>
    #include <clipping_planes_pars_fragment>
    void main(){
      #include <clipping_planes_fragment>
      float hh = clamp(uHeat * vHeat * 1.1 - 0.08, 0.0, 1.0);
      vec3 hc = mix(vec3(0.42, 0.02, 0.0), vec3(1.0, 0.16, 0.01), smoothstep(0.0, 0.6, hh));
      hc = mix(hc, vec3(1.0, 0.34, 0.05), smoothstep(0.6, 1.0, hh));
      gl_FragColor = vec4(hc * pow(max(hh, 0.0001), 1.4) * 1.3, 1.0);
    }`,
});

// ---- ambient occlusion (SSAO): darkens tight corners ----
// Half-size render targets keep it fast
const depthRT = new THREE.WebGLRenderTarget(4, 4, { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter });
const aoRT = [0, 1].map(() => new THREE.WebGLRenderTarget(4, 4, { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, depthBuffer: false }));

// 14 random sample directions in a half sphere (more samples close to the centre)
const kernel = [];
for (let i = 0; i < 14; i++) {
  const v = new THREE.Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random()).normalize();
  const sc = (i + 1) / 14;
  v.multiplyScalar(0.15 + 0.85 * sc * sc);
  kernel.push(v);
}

// Shader that measures how hidden each pixel is
const aoMat = new THREE.ShaderMaterial({
  uniforms: {
    tDepth: { value: depthRT.texture }, uProj: { value: new THREE.Matrix4() }, uProjInv: { value: new THREE.Matrix4() },
    uKernel: { value: kernel }, uRadius: { value: 3.0 }, uInt: { value: 1.5 }, uRes: { value: new THREE.Vector2(1, 1) },
  },
  depthTest: false, depthWrite: false,
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
  fragmentShader: `uniform sampler2D tDepth; uniform mat4 uProj, uProjInv; uniform vec3 uKernel[14];
    uniform float uRadius, uInt; uniform vec2 uRes; varying vec2 vUv;
    #include <packing>
    float rawDepth(vec2 uv){ return unpackRGBAToDepth(texture2D(tDepth, uv)); }
    vec3 viewPos(vec2 uv, float d){ vec4 p = uProjInv * vec4(uv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0); return p.xyz / p.w; }
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main(){
      float d = rawDepth(vUv);
      if (d > 0.9999) { gl_FragColor = vec4(1.0); return; }
      vec3 P = viewPos(vUv, d);
      // find the surface direction from the neighbouring pixels
      vec3 px = viewPos(vUv + vec2(1.0/uRes.x, 0.0), rawDepth(vUv + vec2(1.0/uRes.x, 0.0)));
      vec3 nx = viewPos(vUv - vec2(1.0/uRes.x, 0.0), rawDepth(vUv - vec2(1.0/uRes.x, 0.0)));
      vec3 py = viewPos(vUv + vec2(0.0, 1.0/uRes.y), rawDepth(vUv + vec2(0.0, 1.0/uRes.y)));
      vec3 ny = viewPos(vUv - vec2(0.0, 1.0/uRes.y), rawDepth(vUv - vec2(0.0, 1.0/uRes.y)));
      vec3 dx = abs(px.z - P.z) < abs(nx.z - P.z) ? px - P : P - nx;
      vec3 dy = abs(py.z - P.z) < abs(ny.z - P.z) ? py - P : P - ny;
      vec3 N = normalize(cross(dx, dy)); if (dot(N, -P) < 0.0) N = -N;
      // random rotation per pixel (hides banding)
      float a = hash(gl_FragCoord.xy) * 6.2831853;
      vec3 rv = vec3(cos(a), sin(a), 0.0);
      vec3 T = normalize(rv - N * dot(rv, N)); vec3 B = cross(N, T);
      // count how many sample points are inside other geometry
      float occ = 0.0;
      for (int i = 0; i < 14; i++) {
        vec3 k = uKernel[i];
        vec3 sp = P + (T * k.x + B * k.y + N * k.z) * uRadius;
        vec4 pp = uProj * vec4(sp, 1.0); vec2 suv = pp.xy / pp.w * 0.5 + 0.5;
        float sd = rawDepth(suv);
        if (sd > 0.9999) continue;
        float sz = viewPos(suv, sd).z;
        float diff = sz - sp.z;
        occ += step(0.03 * uRadius, diff) * smoothstep(0.0, 1.0, uRadius / max(abs(P.z - sz), 0.0001));
      }
      float ao = 1.0 - clamp(occ / 14.0 * uInt, 0.0, 1.0);
      gl_FragColor = vec4(vec3(ao), 1.0);
    }`,
});

// Blur that smooths the AO noise but keeps edges sharp
const blurMat = new THREE.ShaderMaterial({
  uniforms: { tAO: { value: null }, tDepth: { value: depthRT.texture }, uDir: { value: new THREE.Vector2() } },
  depthTest: false, depthWrite: false,
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
  fragmentShader: `uniform sampler2D tAO, tDepth; uniform vec2 uDir; varying vec2 vUv;
    #include <packing>
    void main(){
      float d0 = unpackRGBAToDepth(texture2D(tDepth, vUv));
      float sum = 0.0, w = 0.0;
      for (int i = -3; i <= 3; i++) {
        vec2 uv = vUv + uDir * float(i);
        float d = unpackRGBAToDepth(texture2D(tDepth, uv));
        float wt = (1.0 - abs(float(i)) / 4.0) * (abs(d - d0) < 0.0006 ? 1.0 : 0.0);
        sum += texture2D(tAO, uv).r * wt; w += wt;
      }
      gl_FragColor = vec4(vec3(sum / max(w, 0.0001)), 1.0);
    }`,
});
const fsq = new FullScreenQuad(aoMat);   // draws a shader over the whole screen

// ---- selective bloom: only the hot pipes glow ----
const bloomComposer = new EffectComposer(renderer, new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType }));
bloomComposer.renderToScreen = false;
bloomComposer.addPass(new RenderPass(scene, camera));
bloomComposer.addPass(new UnrealBloomPass(new THREE.Vector2(256, 256), 0.5, 0.35, 0.05));   // strength, radius, threshold

// ---- final image ----
// Mix pass: multiply by AO, then add the bloom
const mixPass = new ShaderPass(new THREE.ShaderMaterial({
  uniforms: { tDiffuse: { value: null }, tAO: { value: aoRT[0].texture }, tBloom: { value: bloomComposer.renderTarget2.texture }, uAO: { value: 1 }, uBloom: { value: 0 } },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: `uniform sampler2D tDiffuse, tAO, tBloom; uniform float uAO, uBloom; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float ao = texture2D(tAO, vUv).r;
      c.rgb *= mix(1.0, ao, uAO);
      c.rgb += texture2D(tBloom, vUv).rgb * uBloom;
      gl_FragColor = c;
    }`,
}), 'tDiffuse');

// 4x anti-aliasing, 16-bit colour so bright glow is not clipped
const finalRT = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: 4 });
const finalComposer = new EffectComposer(renderer, finalRT);
finalComposer.addPass(new RenderPass(scene, camera));
finalComposer.addPass(mixPass);
finalComposer.addPass(new OutputPass());   // tone mapping + colour space

// Draw one frame with all effects
export function renderPost() {
  const doBloom = S.heat > 0.02;            // no bloom needed when the engine is cold
  const bg = scene.background;
  renderer.shadowMap.autoUpdate = false;    // shadows are only drawn in the final pass

  // 1) depth pass (particles and glow shells are hidden)
  const hidden = [];
  scene.traverse(o => {
    if ((o.isPoints || (o.isMesh && o.material === glowMat)) && o.visible) { o.visible = false; hidden.push(o); }
  });
  scene.background = null;
  scene.overrideMaterial = depthMat;
  const cc = new THREE.Color();
  renderer.getClearColor(cc);
  const ca = renderer.getClearAlpha();
  renderer.setClearColor(0xffffff, 1);      // white = far away
  renderer.setRenderTarget(depthRT);
  renderer.clear();
  renderer.render(scene, camera);
  scene.overrideMaterial = null;
  hidden.forEach(o => { o.visible = true; });

  // 2) ambient occlusion, then blur it in two directions
  aoMat.uniforms.uProj.value.copy(camera.projectionMatrix);
  aoMat.uniforms.uProjInv.value.copy(camera.projectionMatrixInverse);
  fsq.material = aoMat;
  renderer.setRenderTarget(aoRT[0]);
  fsq.render(renderer);
  blurMat.uniforms.tAO.value = aoRT[0].texture;
  blurMat.uniforms.uDir.value.set(1 / aoRT[1].width, 0);
  fsq.material = blurMat;
  renderer.setRenderTarget(aoRT[1]);
  fsq.render(renderer);
  blurMat.uniforms.tAO.value = aoRT[1].texture;
  blurMat.uniforms.uDir.value.set(0, 1 / aoRT[0].height);
  renderer.setRenderTarget(aoRT[0]);
  fsq.render(renderer);
  renderer.setClearColor(cc, ca);

  // 3) bloom pass: hot pipes keep their glow, everything else turns black
  if (doBloom) {
    const swaps = [];
    scene.traverse(o => {
      if (!(o.isMesh || o.isPoints) || !o.visible) return;
      if (o.material === pointMat) return;   // heat wisps glow as they are
      swaps.push([o, o.material]);
      o.material = (o.geometry && o.geometry.attributes.aHeat && !o.isInstancedMesh) ? pipeEmitMat : darkMat;
    });
    scene.background = null;
    bloomComposer.render();
    swaps.forEach(([o, m]) => { o.material = m; });   // put the real materials back
  }
  mixPass.uniforms.uBloom.value = doBloom ? 1.0 : 0.0;

  // 4) final image
  scene.background = bg;
  renderer.shadowMap.autoUpdate = true;
  renderer.setRenderTarget(null);
  finalComposer.render();
}

// Call when the window size changes
export function resizePost() {
  const dpr = renderer.getPixelRatio();
  const bw = Math.max(2, Math.floor(state.W * dpr / 2));
  const bh = Math.max(2, Math.floor(state.H * dpr / 2));
  depthRT.setSize(bw, bh);
  aoRT.forEach(r => r.setSize(bw, bh));
  aoMat.uniforms.uRes.value.set(bw, bh);
  bloomComposer.setPixelRatio(dpr * 0.5);   // bloom at half size
  bloomComposer.setSize(state.W, state.H);
  finalComposer.setPixelRatio(dpr);
  finalComposer.setSize(state.W, state.H);
}
