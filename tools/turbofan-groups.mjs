// turbofan-groups.mjs - part groups for the turbofan jet engine (turbine-01.obj).
// The OBJ has 9 named meshes. 'blades' holds every blade of every stage as separate pieces (1123), which are told apart by
// where they sit along the axis. The model is turned so the air intake is at +z, and scaled up 20 times.
export const MODEL = {
  src: ['turbine-turbofan-engine-jet-engine', 'source', 'turbine-01', 'turbine-01.obj'], out: 'turbofan-data.js', global: 'TURBOFAN_DATA', label: 'Turbofan jet engine',
  split: m => /blades/.test(m.name), weld: 800,
  transform: (box, T) => new T.Matrix4().makeScale(20, 20, 20).multiply(new T.Matrix4().makeRotationY(-Math.PI / 2)).multiply(new T.Matrix4().makeTranslation(-(box.min.x + box.max.x) / 2, 0, 0)),
  side: () => 0,
};

// Pieces that turn: the fan on the low-pressure shaft, and the compressor and turbine on the high-pressure one
export const SPIN = {
  fan: { ratio: 1, pivot: [0, 0] },
  compressor: { ratio: 1.6, pivot: [0, 0] },
  turbine: { ratio: 1.6, pivot: [0, 0] },
};

const NAMES = { hull: 'casing', grid: 'grid', pipes: 'pipes', mount: 'mount', plates: 'plates', canister: 'canister', screws: 'fasteners', 'blades-dividers': 'stator' };

export function classify(info) {
  const { name, c } = info;
  const base = name.replace(/_turbine.*/, '');
  if (base === 'blades') {
    if (c.z > 31) return { group: 'fan', small: false, spin: 'fan' };
    if (c.z > 5) return { group: 'compressor', small: false, spin: 'compressor' };
    return { group: 'turbine', small: false, spin: 'turbine' };
  }
  return { group: NAMES[base] || base, small: false };
}
