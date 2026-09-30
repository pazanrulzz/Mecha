// materials.js - all materials, plus the shader code that makes hot metal glow
import * as THREE from 'three';
import { crackleTex, roughAlu, roughCast, bumpCast } from './textures.js';

// Shared heat value (0 to 1). Shaders read it, main.js updates it every frame.
export const HEAT = { value: 0 };

// Add a glow to a material. Vertices with a higher "aHeat" get hotter.
export function heatMaterial(m) {
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uHeat = HEAT;
    // vertex shader: pass the per-vertex heat on
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float aHeat;\nvarying float vHeat;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvHeat = aHeat;');
    // fragment shader: dark red -> orange glow, and darken the normal colour
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uHeat;\nvarying float vHeat;')
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        float hh = clamp(uHeat * vHeat * 1.1 - 0.08, 0.0, 1.0);
        vec3 hc = mix(vec3(0.42, 0.02, 0.0), vec3(1.0, 0.16, 0.01), smoothstep(0.0, 0.6, hh));
        hc = mix(hc, vec3(1.0, 0.34, 0.05), smoothstep(0.6, 1.0, hh));
        diffuseColor.rgb *= (1.0 - 0.9 * smoothstep(0.05, 0.8, hh));
        totalEmissiveRadiance += hc * pow(max(hh, 0.0001), 1.4) * 2.0;`);
  };
  m.customProgramCacheKey = () => 'heat';
  return m;
}

// Give every vertex of a geometry a heat value: fn(x, y, z) -> 0..1
export function heatAttr(geo, fn) {
  const p = geo.attributes.position;
  const a = new Float32Array(p.count);
  for (let i = 0; i < p.count; i++) a[i] = fn(p.getX(i), p.getY(i), p.getZ(i));
  geo.setAttribute('aHeat', new THREE.BufferAttribute(a, 1));
  return geo;
}

// ---- the materials ----
export const M = {
  alu: new THREE.MeshStandardMaterial({ color: 0xdadde2, metalness: 1, roughness: 1, roughnessMap: roughAlu, envMapIntensity: 1.1 }),          // polished aluminium
  castAlu: new THREE.MeshStandardMaterial({ color: 0x9c9fa5, metalness: 0.92, roughness: 1, roughnessMap: roughCast, bumpMap: bumpCast, bumpScale: 0.6 }), // engine block
  darkAlu: new THREE.MeshStandardMaterial({ color: 0x4a4d52, metalness: 0.9, roughness: 1, roughnessMap: roughCast, bumpMap: bumpCast, bumpScale: 0.5 }), // oil pan, pulleys
  red: new THREE.MeshPhysicalMaterial({ color: 0xa80709, metalness: 0.15, roughness: 0.5, bumpMap: crackleTex, bumpScale: 2.2, clearcoat: 0.5, clearcoatRoughness: 0.45 }), // crackle paint
  plenumRed: new THREE.MeshPhysicalMaterial({ color: 0xa50a0c, metalness: 0.2, roughness: 0.32, clearcoat: 0.8, clearcoatRoughness: 0.12 }),  // glossy red intake
  pistonAlu: new THREE.MeshStandardMaterial({ color: 0xe6e8ec, metalness: 1, roughness: 0.22 }),
  black: new THREE.MeshStandardMaterial({ color: 0x0b0b0c, metalness: 0.2, roughness: 0.55 }),
  steel: new THREE.MeshStandardMaterial({ color: 0xc7cacf, metalness: 1, roughness: 0.28 }),
  darkSteel: new THREE.MeshStandardMaterial({ color: 0x55585e, metalness: 1, roughness: 0.38, side: THREE.DoubleSide }),
  inox: new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, metalness: 1, roughness: 0.3 }),   // exhaust pipes (colour per vertex)
  brass: new THREE.MeshStandardMaterial({ color: 0xc9a44b, metalness: 1, roughness: 0.35 }),
  gasket: new THREE.MeshStandardMaterial({ color: 0x3c3d42, metalness: 0.85, roughness: 0.42 }),
  copper: new THREE.MeshStandardMaterial({ color: 0xb87333, metalness: 1, roughness: 0.3 }),
};
heatMaterial(M.inox);                                 // exhaust pipes can glow
M.steelHot = heatMaterial(M.steel.clone());           // exhaust collectors can glow

// Soft orange shell around hot pipes (brighter at the edges)
export const glowMat = new THREE.ShaderMaterial({
  uniforms: { uAmt: { value: 0 }, uColor: { value: new THREE.Color(1.0, 0.34, 0.06) } },
  transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  vertexShader: `varying vec3 vN; varying vec3 vV;
    void main(){ vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position,1.0); vV = -mv.xyz; gl_Position = projectionMatrix * mv; }`,
  fragmentShader: `uniform float uAmt; uniform vec3 uColor; varying vec3 vN; varying vec3 vV;
    void main(){ float f = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.2);
      gl_FragColor = vec4(uColor * f * uAmt * 1.0, 1.0); }`,
});
