// sbcs.js - the supercharged Chevrolet small-block V8 (settings for sbc-core.js)
// The mesh comes from "Supercharged sbc v8 engine (revised).fbx" (see tools/convert-sbc.mjs sbcs).
import * as THREE from 'three';
import { M } from '../materials.js';
import { createSbc, mk, paint } from './sbc-core.js';
import { baseMats } from './sbc.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

// the plain engine's materials, plus the new parts
const mats = () => ({
  ...baseMats(),
  'blower': mk(M.alu, 0xd3d6db, { roughness: 0.3 }),
  'scoop': paint(0x16171c),
  'radiator': mk(M.alu, 0xaeb1b7, { roughness: 0.5 }),
  'fan': mk(M.black, 0x1c1d20, { roughness: 0.5 }),
  'cooling': mk(M.black, 0x141517, { roughness: 0.55 }),
});
const uvK = { 'block': 0.03, 'head': 0.03, 'intake': 0.03, 'trans': 0.03, 'radiator': 0.2 };

// ---- how far each group moves (model units) in the exploded view ----
function offsetFor(group, sg, sd) {
  const dir = k => V(sg * 0.7071 * k, 0.7071 * k, 0);   // along the bank the piece sits on
  switch (group) {
    case 'block': return V(0, 0, 0);
    case 'head': return dir(26);
    case 'valve-cover': return dir(52);
    case 'intake': return V(0, 30, 0);
    case 'blower': return V(0, 50, 0);
    case 'carb': return V(0, 70, 0);
    case 'scoop': return V(0, 90, 0);
    case 'distributor': return V(0, 44, 10);
    case 'plug-wires': return sd ? dir(44) : V(0, 44, 0);
    case 'lines': return V(sg * 8, 40, 0);
    case 'oil-pan': return V(0, -34, 0);
    case 'timing-cover': return V(0, 0, -22);
    case 'balancer': return V(0, 0, -46);
    case 'pulleys': case 'belt': return V(0, 0, -58);
    case 'fan': return V(0, 0, -72);
    case 'alternator': return V(sg * 14, 6, -40);
    case 'cooling': return V(0, 10, -30);
    case 'radiator': return V(0, 0, -96);
    case 'starter': return V(sg * 22, -20, 0);
    case 'headers': return V(sg * 30, -8, 0);
    case 'trans': return V(0, -8, 26);
    case 'driveline': return V(0, -8, 58);
    default: return V(0, 0, 0);
  }
}

const sbcs = createSbc({
  key: 'sbcs',
  data: { global: 'SBCS_DATA', file: 'data/sbcs-data.js' },
  cen: V(0, 58, -131),
  scale: 1.0,
  bottom: 35.3,
  mats, uvK, offsetFor,
  heat: { headers: (x, y) => 0.55 + 0.45 * THREE.MathUtils.clamp((y - 38) / 12, 0, 1) },
  shell: ['block', 'head', 'valve-cover', 'oil-pan', 'timing-cover'],
  wisps: 'headers',
  light: sg => V(sg * 11, 39, -123),
  crank: { ax: [0, 42.74], k: 0.937, boreK: 1, zt: -146.33, zp: 4.75, zoff: 0.3, camDy: 4.9 },
  cam: {
    pos: V(-92, 40, 112), target: V(0, 2, 0),
    cutPos: V(98, 22, 66), cutTarget: V(0, -8, 0),
    cutNormal: V(-1, 0, 0),
  },
});

export const { root, lin, D, floorY } = sbcs;
export const loadSBCS = sbcs.load, updateSBCS = sbcs.update, setExplodeSBCS = sbcs.setExplode, SBCS_CAM = sbcs.CAM;
