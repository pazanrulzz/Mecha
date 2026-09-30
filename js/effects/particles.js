// particles.js - hot air wisps rising from the exhaust, plus the orange heat lights
import * as THREE from 'three';
import { scene } from '../scene.js';
import { S, state } from '../config.js';
import { EMIT, EX } from '../model/rig.js';

const NP = 1500;   // number of particles

// Per-particle data
const pPos = new Float32Array(NP * 3);                     // position
const pVel = new Float32Array(NP * 3);                     // velocity
const pAge = new Float32Array(NP).fill(99);                // age in seconds (99 = dead)
const pLife = new Float32Array(NP).fill(1);                // life time in seconds
const pSz = new Float32Array(NP);                          // start size
// Data sent to the GPU
const aSize = new Float32Array(NP), aAlpha = new Float32Array(NP), aAge = new Float32Array(NP);

const pGeo = new THREE.BufferGeometry();
pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3).setUsage(THREE.DynamicDrawUsage));
pGeo.setAttribute('aSize', new THREE.BufferAttribute(aSize, 1).setUsage(THREE.DynamicDrawUsage));
pGeo.setAttribute('aAlpha', new THREE.BufferAttribute(aAlpha, 1).setUsage(THREE.DynamicDrawUsage));
pGeo.setAttribute('aAge', new THREE.BufferAttribute(aAge, 1).setUsage(THREE.DynamicDrawUsage));

// Soft round dots: orange when young, grey smoke when old
export const pointMat = new THREE.ShaderMaterial({
  uniforms: { uScale: { value: 500 } },
  transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  vertexShader: `attribute float aSize; attribute float aAlpha; attribute float aAge; uniform float uScale;
    varying float vA; varying float vAge;
    void main(){ vA=aAlpha; vAge=aAge; vec4 mv=modelViewMatrix*vec4(position,1.0);
      gl_PointSize=aSize*uScale/max(-mv.z,1.0); gl_Position=projectionMatrix*mv; }`,
  fragmentShader: `varying float vA; varying float vAge;
    void main(){ float d=length(gl_PointCoord-0.5); float a=smoothstep(0.5,0.0,d); a*=a;
      vec3 hot=vec3(1.0,0.42,0.10); vec3 cool=vec3(0.34,0.30,0.28);
      vec3 c=mix(hot,cool,smoothstep(0.0,0.8,vAge));
      float k=clamp(vA,0.0,1.0); gl_FragColor=vec4(c*a*k,a*k); }`,
});

const points = new THREE.Points(pGeo, pointMat);
points.frustumCulled = false;
scene.add(points);

let pPtr = 0;        // next particle to reuse
let spawnAcc = 0;    // spawn counter

// Start one new particle on a random pipe or collector
function emit() {
  if (!EMIT.pipes.length) return;
  const i = pPtr;
  pPtr = (pPtr + 1) % NP;

  let p, pex = null;
  if (Math.random() < 0.65) {
    // most wisps start on the primary pipes
    const pipe = EMIT.pipes[(Math.random() * EMIT.pipes.length) | 0];
    p = pipe[(Math.random() * pipe.length) | 0];
    pex = pipe.ex;
  } else {
    // the rest start along the collectors
    const c = EMIT.colls[(Math.random() * EMIT.colls.length) | 0];
    p = c[0].clone().lerp(c[1], Math.random());
    pex = c.ex;
  }
  // follow the pipes when the engine is exploded
  if (EX.e > 0 && pex) p = p.clone().add(EX.w(pex));

  const out = Math.sign(p.x) || 1;   // drift away from the engine
  pPos[i * 3] = p.x + (Math.random() - 0.5) * 1.5;
  pPos[i * 3 + 1] = p.y + Math.random() * 1.2;
  pPos[i * 3 + 2] = p.z + (Math.random() - 0.5) * 1.5;
  pVel[i * 3] = out * (0.5 + Math.random() * 3);
  pVel[i * 3 + 1] = 7 + Math.random() * 11;
  pVel[i * 3 + 2] = (Math.random() - 0.5) * 3;
  pAge[i] = 0;
  pLife[i] = 1.6 + Math.random() * 1.8;
  pSz[i] = 1.4 + Math.random() * 1.6;
}

// Move all particles. dt = seconds since the last frame.
export function updateParticles(dt) {
  const h = S.heat;
  // spawn more wisps when the exhaust is hotter
  if (h > 0.06) {
    spawnAcc += dt * 380 * Math.pow(h, 1.5);
    while (spawnAcc >= 1) { spawnAcc -= 1; emit(); }
  }
  const amp = 0.06 * Math.min(1, h * 1.3);   // overall brightness

  for (let i = 0; i < NP; i++) {
    if (pAge[i] >= pLife[i]) { aAlpha[i] = 0; continue; }   // dead
    pAge[i] += dt;
    const a = Math.min(pAge[i] / pLife[i], 1);              // 0 = born, 1 = gone
    pVel[i * 3 + 1] += 3.5 * dt;                            // hot air rises
    pVel[i * 3] += Math.sin(state.time * 2.1 + i) * 6 * dt;             // sway
    pVel[i * 3 + 2] += Math.cos(state.time * 1.7 + i * 1.3) * 5 * dt;
    const drag = 1 - 0.55 * dt;                             // slow down
    pVel[i * 3] *= drag; pVel[i * 3 + 1] *= drag; pVel[i * 3 + 2] *= drag;
    pPos[i * 3] += pVel[i * 3] * dt;
    pPos[i * 3 + 1] += pVel[i * 3 + 1] * dt;
    pPos[i * 3 + 2] += pVel[i * 3 + 2] * dt;
    aSize[i] = pSz[i] * (1 + 1.8 * a);                      // grow while ageing
    aAge[i] = a;
    aAlpha[i] = amp * Math.pow(Math.max(0, 1 - a), 1.6) * Math.min(1, a / 0.08);   // fade in and out
  }
  pGeo.attributes.position.needsUpdate = true;
  pGeo.attributes.aSize.needsUpdate = true;
  pGeo.attributes.aAlpha.needsUpdate = true;
  pGeo.attributes.aAge.needsUpdate = true;
}

// Two orange lights, one at each exhaust collector
export const heatLights = [-1, 1].map(sg => {
  const l = new THREE.PointLight(0xff5a18, 0, 0, 2);
  l.position.set(sg * 44, -3, 0);
  scene.add(l);
  return l;
});
// Their start positions (used by the exploded view)
export const heatLightBase = heatLights.map(l => l.position.clone());
