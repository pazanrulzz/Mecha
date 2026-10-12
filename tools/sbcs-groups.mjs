// sbcs-groups.mjs - part groups for the supercharged small-block V8 (a second, re-made FBX of the same engine
// with a blower, two carburettors, a radiator and fan). The 545 meshes are unnamed, so the big pieces are listed by index
// and the rest follow position rules. Frame of the FBX: x sideways, y up (crank axis at x = 0, y = 42.74),
// z along the crank (radiator at z = -166, transmission at z > -128). The model is mirror-symmetric in x.

export const MODEL = { src: ['supercharged-sbc-v8-engine-revised', 'Supercharged sbc v8 engine (revised).fbx'], out: 'sbcs-data.js', global: 'SBCS_DATA', label: 'Supercharged Chevrolet small-block V8' };
export const STUB = null;   // set once the stub size is known

export const BY_INDEX = {
  84: 'block', 17: 'head', 76: 'head', 353: 'head', 14: 'head', 467: 'head',
  306: 'valve-cover', 509: 'valve-cover', 0: 'valve-cover', 507: 'valve-cover', 156: 'valve-cover',
  513: 'intake', 161: 'intake', 68: 'intake', 388: 'intake',
  146: 'blower', 128: 'blower', 117: 'blower', 508: 'blower',
  468: 'scoop', 459: 'scoop', 477: 'scoop', 138: 'scoop',
  55: 'carb', 478: 'carb',
  130: 'headers', 206: 'headers',
  179: 'oil-pan', 264: 'oil-pan',
  99: 'plug-wires', 497: 'plug-wires', 113: 'plug-wires', 537: 'plug-wires', 11: 'plug-wires', 112: 'plug-wires',
  75: 'plug-wires', 544: 'plug-wires', 382: 'plug-wires', 31: 'plug-wires',
  249: 'distributor',
  319: 'lines', 119: 'lines', 188: 'lines', 416: 'lines', 439: 'lines', 263: 'lines', 387: 'lines', 22: 'lines', 226: 'lines', 167: 'lines', 446: 'lines',
  2: 'cooling', 502: 'cooling', 293: 'cooling', 323: 'cooling', 269: 'cooling',
  338: 'alternator', 133: 'alternator',
  360: 'radiator', 370: 'radiator', 465: 'radiator', 231: 'radiator',
  328: 'belt', 47: 'belt',
  419: 'timing-cover',
  362: 'starter', 303: 'starter',
  153: 'trans', 77: 'trans', 136: 'trans', 137: 'trans', 375: 'trans', 296: 'trans', 97: 'trans',
};

// Pieces that turn: name -> { ids, ratio (speed compared with the crank), pivot (x, y) or null = centre of the part }
export const SPIN = {
  balancer: { ids: [395, 183, 536], ratio: 1, pivot: [0, 42.74] },
  fan: { ids: [298, 165, 499, 187, 425, 258, 45], ratio: 1.35, pivot: [-0.1, 49.0] },
  'pulley-blower': { ids: [177, 332, 222, 480, 13], ratio: 1.4, pivot: null },
  'pulley-idler': { ids: [212, 501], ratio: 1.2, pivot: null },
  'pulley-alt': { ids: [281, 369], ratio: 2.1, pivot: [-7.2, 55.1] },
  yoke: { ids: [287, 70], ratio: 1, pivot: [-0.35, 42.8] },
};
export const SPIN_GROUP = { balancer: 'balancer', fan: 'fan', 'pulley-blower': 'pulleys', 'pulley-idler': 'pulleys', 'pulley-alt': 'alternator', yoke: 'driveline' };

const spinOf = {};
Object.entries(SPIN).forEach(([k, v]) => v.ids.forEach(i => { spinOf[i] = k; }));

// Returns { group, small, spin } for one mesh. info = { i, nv, c, s, mat }
export function classify(info) {
  const { i, nv, c, s, mat } = info;
  const dim = Math.max(s.x, s.y, s.z);
  const m = mat.replace('__Instance_', '');
  if (spinOf[i]) return { group: SPIN_GROUP[spinOf[i]], small: false, spin: spinOf[i] };
  if (BY_INDEX[i] !== undefined) return { group: BY_INDEX[i], small: false };

  // bolts, nuts and tiny fittings follow the big part they sit next to
  if (dim <= 1.5 || (dim <= 2.3 && nv <= 520)) return { group: null, small: true };

  // plug terminals on the heads, distributor cap terminals, boots
  if (m === 'mat0' && nv === 2028) return { group: Math.abs(c.x) > 8 ? 'plug-wires' : 'distributor', small: false };
  if (nv === 3414) return { group: 'plug-wires', small: false };

  // rear: gearbox and driveshaft
  if (c.z > -128.5 && c.y < 46) return { group: 'trans', small: false };
  // front: the radiator and its fins
  if (c.z < -159) return { group: 'radiator', small: false };
  // top of the engine: carburettor linkage and fuel bowls
  if (c.y > 66.5 && Math.abs(c.x) < 8.5) return { group: 'carb', small: false };
  return { group: null, small: false };
}
