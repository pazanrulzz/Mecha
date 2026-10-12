// sbc.js - the Chevrolet small-block V8 (settings for sbc-core.js)
// The mesh comes from sbc.fbx (see tools/convert-sbc.mjs).
import * as THREE from 'three';
import { M, heatMaterial } from '../materials.js';
import { createSbc, mk, paint } from './sbc-core.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

// ---- materials ----
export const baseMats = () => ({
  'block': paint(0xd2561a),                        // Chevy orange
  'head': mk(M.castAlu, 0x7b7e84, { bumpScale: 0.2 }),
  'valve-cover': mk(M.steel, 0xe4e6ea, { roughness: 0.3 }),
  'intake': mk(M.castAlu, 0xb4b7bd, { bumpScale: 0.2 }),
  'carb': mk(M.alu, 0xc9ccd2),
  'air-cleaner': mk(M.steel, 0xe4e6ea, { roughness: 0.3 }),
  'air-filter': mk(M.black, 0xd9d2c0, { metalness: 0, roughness: 0.9 }),
  'headers': heatMaterial(mk(M.steel, 0xb8bbc1, { roughness: 0.34 })),
  'exhaust': heatMaterial(mk(M.steel, 0x8f9298, { roughness: 0.4 })),
  'trans': mk(M.darkAlu, 0x6a6d73, { bumpScale: 0.12 }),
  'driveline': mk(M.steel, 0xa9acb2),
  'oil-pan': mk(M.darkSteel, 0x232427, { side: THREE.FrontSide }),
  'timing-cover': mk(M.darkSteel, 0x2d2e32, { side: THREE.FrontSide }),
  'balancer': mk(M.darkSteel, 0x34363a, { side: THREE.FrontSide }),
  'pulleys': mk(M.alu, 0xb2b5bb),
  'belt': mk(M.black, 0x0d0d0e, { roughness: 0.8 }),
  'alternator': mk(M.alu, 0xaeb1b7),
  'cooling': mk(M.castAlu, 0xa9acb2, { bumpScale: 0.2 }),
  'distributor': mk(M.black, 0x16171a, { roughness: 0.45 }),
  'plug-wires': mk(M.black, 0x101113, { roughness: 0.55 }),
  'starter': mk(M.darkAlu, 0x6a6d73),
  'brackets': mk(M.steel, 0x585b61, { roughness: 0.45 }),
  'lines': mk(M.brass, 0xc08a3a),
  'bolt': mk(M.steel, 0xb5b8bd, { roughness: 0.35 }),
});

const uvK = { 'block': 0.03, 'head': 0.03, 'intake': 0.03, 'trans': 0.03, 'cooling': 0.04, 'timing-cover': 0.03 };

// ---- how far each group moves (model units) in the exploded view ----
function offsetFor(group, sg, sd) {
  const dir = k => V(sg * 0.7071 * k, 0.7071 * k, 0);   // along the bank the piece sits on
  switch (group) {
    case 'block': return V(0, 0, 0);
    case 'head': return dir(26);
    case 'valve-cover': return dir(52);
    case 'intake': return V(0, 34, 0);
    case 'carb': return V(0, 56, 0);
    case 'air-filter': return V(0, 78, 0);
    case 'air-cleaner': return V(0, 94, 0);
    case 'distributor': return V(0, 44, 10);
    case 'plug-wires': return sd ? dir(44) : V(0, 44, 0);
    case 'oil-pan': return V(0, -34, 0);
    case 'timing-cover': return V(0, 0, -22);
    case 'balancer': return V(0, 0, -46);
    case 'pulleys': case 'belt': return V(0, 0, -62);
    case 'alternator': return V(sg * 12, 6, -40);
    case 'cooling': return V(0, 14, -30);
    case 'starter': return V(sg * 22, -20, 0);
    case 'brackets': return V(sg * 14, -8, -10);
    case 'lines': return V(sg * 8, 26, 0);
    case 'headers': return V(sg * 30, -8, 0);
    case 'exhaust': return V(sg * 38, -14, 16);
    case 'trans': return V(0, -8, 26);
    case 'driveline': return V(0, -8, 58);
    default: return V(0, 0, 0);
  }
}


const sbc = createSbc({
  key: 'sbc',
  data: { global: 'SBC_DATA', file: 'data/sbc-data.js' },
  cen: V(0, -12, -135),     // centre of the engine in model units (the FBX is about 60 units long)
  scale: 1.1,
  bottom: -22.1,
  mats: baseMats, uvK, offsetFor,
  // pipes: hottest at the cylinder head, cooler toward the collector and muffler
  heat: { headers: (x, y) => 0.55 + 0.45 * THREE.MathUtils.clamp((y + 17) / 9, 0, 1), exhaust: () => 0.3 },
  shell: ['block', 'head', 'valve-cover', 'oil-pan', 'timing-cover'],
  wisps: 'headers',
  light: sg => V(sg * 13, -15, -126),
  crank: { ax: [0, -14.5], k: 1, boreK: 1, zt: -152.3, zp: 5.07, zoff: 0.45, camDy: 5.2 },
  cam: {
    pos: V(-82, 44, 98), target: V(0, 0, 0),
    cutPos: V(88, 20, 62), cutTarget: V(0, -2, 0),
    cutNormal: V(-1, 0, 0),
  },
});

export const { root, lin, D, floorY } = sbc;
export const loadSBC = sbc.load, updateSBC = sbc.update, setExplodeSBC = sbc.setExplode, SBC_CAM = sbc.CAM;
