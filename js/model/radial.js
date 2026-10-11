// radial.js - the nine-cylinder radial engine (settings for radial-core.js)
// The mesh comes from radial-engine/source/hw5_fix.fbx (see tools/convert-engine.mjs radial).
import * as THREE from 'three';
import { M, heatMaterial } from '../materials.js';
import { createRadial } from './radial-core.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const mk = (base, color, extra = {}) => Object.assign(base.clone(), { color: new THREE.Color(color) }, extra);

// direction of each cylinder, as the converter numbered them (degrees)
const ANGLES = [170, 290, 330, 210, 10, 250, 50, 130, 90];

const mats = () => ({
  'crankcase': mk(M.castAlu, 0x9a9da3, { bumpScale: 0.25 }),
  'cylinder': heatMaterial(mk(M.darkSteel, 0x5f636a, { side: THREE.FrontSide })),
  'head': heatMaterial(mk(M.alu, 0xb7bac0, { roughness: 0.4 })),
  'valvegear': mk(M.steel, 0xc3c6cb, { roughness: 0.35 }),
  'intake': mk(M.copper, 0xb87333),
  'hub': mk(M.steel, 0xd0d3d8, { roughness: 0.3 }),
  'bolt': mk(M.steel, 0xb5b8bd, { roughness: 0.35 }),
});
const uvK = { 'crankcase': 0.04 };

// ---- how far each group moves (model units) in the exploded view; every cylinder moves out along its own direction ----
function offsetFor(group, ang) {
  const out = k => V(Math.cos(ang) * k, Math.sin(ang) * k, 0);
  switch (group) {
    case 'crankcase': return V(0, 0, 0);
    case 'cylinder': return out(16);
    case 'head': return out(34);
    case 'valvegear': return out(22).add(V(0, 0, 8));
    case 'intake': return out(8).add(V(0, 0, -26));
    case 'hub': return V(0, 0, 34);
    default: return V(0, 0, 0);
  }
}

const radial = createRadial({
  key: 'radial',
  data: { global: 'RADIAL_DATA', file: 'data/radial-data.js' },
  scale: 1, cen: V(0, 0, -0.5), bottom: -31,
  mats, uvK, angles: ANGLES, offsetFor,
  // cylinders glow from the head down the fins
  heat: {
    head: (x, y) => 0.55 + 0.45 * THREE.MathUtils.clamp((Math.hypot(x, y) - 25) / 6, 0, 1),
    cylinder: (x, y) => 0.15 + 0.5 * THREE.MathUtils.clamp((Math.hypot(x, y) - 12) / 14, 0, 1),
  },
  shell: ['crankcase', 'cylinder', 'head'],
  wisps: 'head',
  light: sg => V(sg * 22, 24, 0),
  internals: { rc: 5, rl: 16.8, boreR: 3.1, pistonH: 4.5, crown: 2.7, z: -0.5, len: 18, crankLift: 14, pistonLift: 14 },
  cam: {
    pos: V(70, 38, 100), target: V(0, 0, 0),
    cutPos: V(26, 18, 110), cutTarget: V(0, 0, 0),
    cutNormal: V(0, 0, -1),
  },
});

export const { root, lin, D, floorY } = radial;
export const loadRadial = radial.load, updateRadial = radial.update, setExplodeRadial = radial.setExplode, RADIAL_CAM = radial.CAM;
