// turbofan.js - the turbofan jet engine (settings for radial-core.js, which also handles engines with no cylinders)
// The mesh comes from turbine-turbofan-engine-jet-engine/source/turbine-01/turbine-01.obj (see tools/convert-engine.mjs turbofan).
import * as THREE from 'three';
import { M, heatMaterial } from '../materials.js';
import { createRadial } from './radial-core.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const mk = (base, color, extra = {}) => Object.assign(base.clone(), { color: new THREE.Color(color) }, extra);

const mats = () => ({
  'casing': heatMaterial(mk(M.steel, 0xb4b7bd, { roughness: 0.4 })),
  'grid': heatMaterial(mk(M.darkSteel, 0x70747b)),
  'pipes': mk(M.copper, 0xb87333),
  'mount': mk(M.darkSteel, 0x4e5157),
  'plates': heatMaterial(mk(M.alu, 0xc2c5cb)),
  'canister': new THREE.MeshStandardMaterial({ color: 0xb23a3a, metalness: 0.6, roughness: 0.35 }),
  'stator': heatMaterial(new THREE.MeshStandardMaterial({ color: 0xd9b24a, metalness: 0.7, roughness: 0.4 })),
  'fan': mk(M.steel, 0xd5d8dd, { roughness: 0.28 }),
  'compressor': mk(M.steel, 0xc3c6cb, { roughness: 0.3 }),
  'turbine': heatMaterial(mk(M.darkSteel, 0x6b6e75)),
  'fasteners': mk(M.steel, 0xb5b8bd, { roughness: 0.35 }),
  'bolt': mk(M.steel, 0xb5b8bd, { roughness: 0.35 }),
});

// ---- how far each group moves (model units) in the exploded view, mostly along the axis ----
function offsetFor(group) {
  switch (group) {
    case 'casing': return V(0, 0, 0);
    case 'fan': return V(0, 0, 70);
    case 'compressor': return V(0, 0, 46);
    case 'grid': return V(0, 0, 24);
    case 'canister': return V(0, 26, 0);
    case 'pipes': return V(0, 34, 0);
    case 'mount': return V(0, -26, 0);
    case 'plates': return V(0, 0, -30);
    case 'turbine': return V(0, 0, -60);
    case 'stator': return V(0, 0, -84);
    case 'fasteners': return V(0, 0, 0);
    default: return V(0, 0, 0);
  }
}

// the rear of the engine is the hottest: heat grows toward the nozzle (z = -41)
const hot = (a, b) => (x, y, z) => a + (b - a) * THREE.MathUtils.clamp((8 - z) / 49, 0, 1);

const turbofan = createRadial({
  key: 'turbofan',
  data: { global: 'TURBOFAN_DATA', file: 'data/turbofan-data.js' },
  scale: 1, cen: V(0, 0, 0), bottom: -16.4,
  mats, uvK: {}, angles: [], offsetFor,
  heat: { casing: hot(0.1, 0.95), grid: hot(0.2, 0.8), plates: hot(0.4, 0.9), stator: () => 0.95, turbine: () => 0.95 },
  shell: ['casing', 'grid', 'mount'],
  wisps: 'stator',
  light: sg => V(sg * 11, 4, -41),
  internals: null,
  cam: {
    pos: V(96, 34, 120), target: V(0, 0, 0),
    cutPos: V(110, 20, 60), cutTarget: V(0, 0, 0),
    cutNormal: V(-1, 0, 0),
  },
});

export const { root, lin, D, floorY } = turbofan;
export const loadTurbofan = turbofan.load, updateTurbofan = turbofan.update, setExplodeTurbofan = turbofan.setExplode, TURBOFAN_CAM = turbofan.CAM;
