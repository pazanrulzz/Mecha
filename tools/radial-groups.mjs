// radial-groups.mjs - part groups for the nine-cylinder radial engine (hw5_fix.fbx).
// The file is ONE mesh, so the converter splits it into 1439 connected pieces. The pieces come in the order
// [cylinder 0: 158 pieces][17 shared pieces: crankcase, shaft, propeller flange][cylinders 1 to 8: 158 pieces each],
// so the number of a piece tells which cylinder it belongs to. Frame: z along the crankshaft, propeller end at +z.

export const MODEL = {
  src: ['radial-engine', 'source', 'hw5_fix.fbx'], out: 'radial-data.js', global: 'RADIAL_DATA', label: 'Nine-cylinder radial engine',
  split: () => true, weld: 1500,
  // scale the 88-unit wide engine down a little
  transform: (box, T) => new T.Matrix4().makeScale(0.7, 0.7, 0.7),
  // no left / right split: parts move by their cylinder
  side: () => 0,
};

// Pieces that turn: the propeller shaft and flange (speed 1 = crankshaft)
export const SPIN = { hub: { ids: [], ratio: 1, pivot: [0, 0] } };

const PER = 158, FIRST_SHARED = 158, SHARED = 17;
function sectorOf(i) {
  if (i < FIRST_SHARED) return 0;
  if (i < FIRST_SHARED + SHARED) return -1;
  return Math.floor((i - FIRST_SHARED - SHARED) / PER) + 1;
}

// info = { i, nv, c, s } in scene units (already scaled by 0.7)
export function classify(info) {
  const { i, nv, c, s } = info;
  const sec = sectorOf(i);
  const r = Math.hypot(c.x, c.y), z = c.z / 0.7;   // z in the original units
  const dim = Math.max(s.x, s.y, s.z) / 0.7;
  const out = g => ({ group: g, small: false, sec: sec < 0 ? undefined : sec });

  // propeller shaft and flange plates turn with the crankshaft
  if (z > 18 && r < 14 / 0.7 * 0.7 + 4) return { group: 'hub', small: false, spin: 'hub', sec: undefined };
  // the shared pieces form the crankcase
  if (sec < 0) return { group: 'crankcase', small: false };

  // bolts, nuts and tiny fittings follow the big part they sit next to
  if (dim <= 1.7 || (dim <= 3.2 && nv <= 520)) return { group: null, small: true, sec };

  const fin = Math.abs(z) < 0.4 && s.z / 0.7 > 9.5 && s.z / 0.7 < 14.8 && nv >= 100;   // cooling fin rings and the barrel
  if (fin) return out('cylinder');
  if (z < -8 && r > 5) return out('intake');                                        // ring pipe and the branches to the heads
  if (z > 5 && dim >= 18 && s.z / 0.7 < 4) return out('valvegear');                 // push rods
  if (z > 5 && r > 8) return out('valvegear');                                      // push rod guides and followers
  if (r / 0.7 >= 36) return out('head');                                            // cylinder head, rockers and valves
  return { group: null, small: false, sec };
}
