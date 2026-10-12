// sbc-groups.mjs - decides which part group every mesh of sbc.fbx belongs to.
// The FBX has 440 unnamed meshes, so the big pieces are listed by index and the rest follow simple position rules.
export const MODEL = { src: ['sbc-v8-engine', 'sbc.fbx'], out: 'sbc-data.js', global: 'SBC_DATA', label: 'Chevrolet small-block V8' };
// Stub cylinders left inside the block: connected pieces of mesh 106 of this size are removed
export const STUB = { mesh: 106, size: [7.1, 6.6, 3.2] };
// Frame of the FBX: x sideways, y up, z along the crank (front of the engine at z = -161, transmission at z > -131).

// index -> group for the pieces that were named by looking at their size and place
export const BY_INDEX = {
  106: 'block', 311: 'timing-cover',
  24: 'head', 382: 'head',
  310: 'valve-cover', 353: 'valve-cover',
  376: 'intake', 34: 'intake', 246: 'intake', 419: 'intake', 308: 'intake', 182: 'intake', 341: 'intake',
  298: 'air-filter', 16: 'air-cleaner', 294: 'air-cleaner', 144: 'air-cleaner',
  201: 'headers', 366: 'headers',
  317: 'oil-pan', 244: 'oil-pan', 130: 'oil-pan',
  74: 'cooling', 214: 'cooling',
  181: 'alternator', 393: 'alternator', 40: 'alternator', 99: 'alternator', 114: 'alternator',
  204: 'starter', 261: 'starter',
  326: 'distributor', 330: 'distributor', 141: 'distributor',
  31: 'lines', 91: 'lines', 397: 'lines', 173: 'lines', 425: 'lines',
  387: 'brackets', 176: 'brackets', 277: 'brackets', 299: 'brackets', 36: 'brackets', 48: 'brackets', 350: 'brackets',
  438: 'belt', 198: 'belt', 124: 'pulleys', 142: 'pulleys',
  82: 'trans', 188: 'trans', 251: 'trans',
};

// Pieces that turn: name -> { ids, ratio (speed compared with the crank), pivot (x, y) or null = centre of the part }
export const SPIN = {
  balancer: { ids: [123, 220, 213], ratio: 1, pivot: [0, -14.5] },
  'pulley-pump': { ids: [253, 187, 81, 165], ratio: 1.45, pivot: null },
  'pulley-alt': { ids: [393], ratio: 2.1, pivot: null },
  yoke: { ids: [420, 215], ratio: 1, pivot: [-0.4, -14.2] },
};

// The group a spinning piece is listed under
export const SPIN_GROUP = { balancer: 'balancer', 'pulley-pump': 'pulleys', 'pulley-alt': 'alternator', yoke: 'driveline' };

const spinOf = {};
Object.entries(SPIN).forEach(([k, v]) => v.ids.forEach(i => { spinOf[i] = k; }));

// Returns { group, small, spin } for one mesh. info = { i, nv, c, s, mat }
export function classify(info) {
  const { i, nv, c, s, mat } = info;
  const dim = Math.max(s.x, s.y, s.z);
  const m = mat.replace('__Instance_', '');
  if (spinOf[i]) return { group: SPIN_GROUP[spinOf[i]], small: false, spin: spinOf[i] };
  if (BY_INDEX[i]) return { group: BY_INDEX[i], small: false };

  // bolts, nuts and tiny fittings follow the big part they sit next to
  if (dim <= 1.5 || (dim <= 2.3 && nv <= 520)) return { group: null, small: true };

  // rear of the engine: exhaust pipes, gearbox and driveshaft
  if (c.z > -131) {
    if (Math.abs(c.x) > 8) return { group: 'exhaust', small: false };
    return { group: 'trans', small: false };
  }
  if (c.z > -134.5 && c.y < -9 && dim > 10) return { group: 'trans', small: false };   // bellhousing plate

  // ignition: plug wires, boots, terminals and the distributor cap
  if (m === 'mat20') return { group: 'plug-wires', small: false };
  if (m === 'mat19') return { group: Math.abs(c.x) > 9 ? 'plug-wires' : 'distributor', small: false };
  if (s.x < 2.5 && s.y < 1 && s.z < 0.8 && Math.abs(c.x) > 9) return { group: 'plug-wires', small: false };   // plug boots

  // top of the engine: carburettor parts and its linkage
  if (c.y > 2.8 && Math.abs(c.x) < 8.5) return { group: 'carb', small: false };

  // valve cover fittings (oil cap, breather, hold-down clips)
  if (c.y > -3 && c.y < 2.2 && Math.abs(c.x) > 8) return { group: 'valve-cover', small: false };
  return { group: null, small: false };
}
