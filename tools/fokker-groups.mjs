// fokker-groups.mjs - part groups for the Oberursel UR.II rotary engine and propeller from the Fokker E.III (Engine_1.fbx).
// The file has 6 meshes. The big one, 'Engine', is split into 369 connected pieces: 9 cylinders of 41 pieces each,
// in the order of the angles below. Frame: z along the crankshaft, propeller at +z. The model is scaled up 30 times.

export const MODEL = {
  src: ['focker-eiii-engine-oberursel-ui', 'source', 'Engine_1.fbx'], out: 'fokker-data.js', global: 'FOKKER_DATA', label: 'Oberursel UR.II rotary engine',
  split: m => m.name === 'Engine', weld: 1500,
  transform: (box, T) => new T.Matrix4().makeScale(30, 30, 30),
  side: () => 0,
};

// Only the propeller and its hub turn (the real engine turns completely, but here the cylinders stay still)
export const SPIN = { prop: { ratio: 1, pivot: [0, 0] } };

const PER = 41, FIRST = 2, N = 9;   // pieces 2 .. 370 are the cylinders

export function classify(info) {
  const { i, name, nv, c, s } = info;
  if (name === 'Propeller') return { group: 'propeller', small: false, spin: 'prop' };
  if (name === 'Engine_1' || name === 'Cylinder003') return { group: 'crankcase', small: false };
  if (name === 'Cylinder004' || name === 'Cylinder006') return { group: 'hub', small: false, spin: 'prop' };
  if (name !== 'Engine' || i < FIRST || i >= FIRST + PER * N) return { group: 'crankcase', small: false };

  const sec = Math.floor((i - FIRST) / PER), j = (i - FIRST) % PER;
  if (j <= 20) return { group: 'cylinder', small: false, sec };            // barrel, 19 cooling fins and the cap
  if (j >= 38) return { group: 'crankcase', small: false, sec };           // the stubs next to the crankcase
  return { group: j >= 29 ? 'head' : 'head', small: false, sec };          // bolts, valve gear and the head itself
}
