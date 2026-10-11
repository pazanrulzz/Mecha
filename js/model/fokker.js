// fokker.js - the Oberursel UR.II rotary engine of the Fokker E.III (settings for radial-core.js)
// The mesh comes from focker-eiii-engine-oberursel-ui/source/Engine_1.fbx (see tools/convert-engine.mjs fokker).
// Here the cylinders stay still: only the propeller and its hub turn, driven by the crankshaft.
import * as THREE from 'three';
import { M, heatMaterial } from '../materials.js';
import { createRadial } from './radial-core.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const mk = (base, color, extra = {}) => Object.assign(base.clone(), { color: new THREE.Color(color) }, extra);

const ANGLES = [90, 130, 170, 210, 250, 290, 330, 10, 50];

const mats = () => ({
  'crankcase': mk(M.castAlu, 0xa3a6ac, { bumpScale: 0.2 }),
  'cylinder': heatMaterial(mk(M.darkSteel, 0x4c525c, { side: THREE.FrontSide })),
  'head': heatMaterial(mk(M.steel, 0x9aa0a8, { roughness: 0.4 })),
  'hub': mk(M.brass, 0xc9a44b),
  'propeller': new THREE.MeshStandardMaterial({ color: 0x8b5a2b, metalness: 0.05, roughness: 0.55 }),
  'bolt': mk(M.steel, 0xb5b8bd, { roughness: 0.35 }),
});

function offsetFor(group, ang) {
  const out = k => V(Math.cos(ang) * k, Math.sin(ang) * k, 0);
  switch (group) {
    case 'crankcase': return V(0, 0, 0);
    case 'cylinder': return out(14);
    case 'head': return out(30);
    case 'hub': return V(0, 0, 22);
    case 'propeller': return V(0, 0, 40);
    default: return V(0, 0, 0);
  }
}

const fokker = createRadial({
  key: 'fokker',
  data: { global: 'FOKKER_DATA', file: 'data/fokker-data.js' },
  scale: 1, cen: V(0, 0, -3.5), bottom: -37,
  mats, uvK: { crankcase: 0.1 }, angles: ANGLES, offsetFor,
  heat: {
    head: (x, y) => 0.6 + 0.4 * THREE.MathUtils.clamp((Math.hypot(x, y) - 21) / 3, 0, 1),
    cylinder: (x, y) => 0.1 + 0.5 * THREE.MathUtils.clamp((Math.hypot(x, y) - 11) / 10, 0, 1),
  },
  shell: ['crankcase', 'cylinder', 'head'],
  wisps: 'head',
  light: sg => V(sg * 20, 20, 0),
  internals: { rc: 3.3, rl: 12.7, boreR: 2.7, pistonH: 4.5, crown: 4, z: -3.5, len: 12, crankLift: 8, pistonLift: 10 },
  cam: {
    pos: V(48, 30, 70), target: V(0, 0, 0),
    cutPos: V(20, 14, 78), cutTarget: V(0, 0, 0),
    cutNormal: V(0, 0, -1),
  },
});

export const { root, lin, D, floorY } = fokker;
export const loadFokker = fokker.load, updateFokker = fokker.update, setExplodeFokker = fokker.setExplode, FOKKER_CAM = fokker.CAM;
