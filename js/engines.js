// engines.js - the list of engines in the app and which one is shown now
import * as THREE from 'three';
import { root as fRoot, EMIT, EX as FEX } from './model/rig.js';
import { updateKinematics } from './model/kinematics.js';
import { setExplode as setExplodeFerrari } from './model/explode.js';
import { loadDB605, root as dRoot, D, lin as dLin, setExplodeDB, spinShaft, updateDB, DB_CAM } from './model/db605.js';
import { DB605_NOTE } from './ui/info-db605.js';
import { S } from './config.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

export const engines = {
  // ---- Ferrari V12 (loaded at start) ----
  ferrari: {
    id: 'ferrari', label: 'Ferrari V12',
    brand: 'V12 <i>●</i> ENGINE', sub: 'Interactive 3D model',
    title: 'Ferrari V12 Engine',
    root: fRoot,
    idle: 800, max: 8900, presets: [800, 4500, 8900],
    vis: 0.012, sparkK: 12, stroke: 0.0752,
    note: 'Figures are approximate reference values for a modern 6.5 L V12; the model is stylised.',
    cam: { pos: V(80, 50, 110), target: V(0, 14, 0), cutPos: V(-100, 2, 80), cutTarget: V(-12, 12, 0), cutNormal: null },
    lin: FEX.lin,
    credit: '',
    load: null,
    frame: () => updateKinematics(S.crank),
    setExplode: setExplodeFerrari,
    floor: () => FEX.floor,
    emit: null,   // filled in when we switch away
  },
  // ---- Mercedes-Benz DB 605 (loaded the first time it is chosen) ----
  db605: {
    id: 'db605', label: 'Mercedes DB 605',
    brand: 'DB 605 <i>●</i> ENGINE', sub: 'Mercedes-Benz · 1942 · Bf 109',
    title: 'Mercedes-Benz DB 605 Engine',
    root: dRoot,
    idle: 600, max: 2800, presets: [600, 2300, 2800],
    vis: 0.038, sparkK: 24, stroke: 0.16,
    note: DB605_NOTE,
    cam: DB_CAM && { pos: DB_CAM.pos, target: DB_CAM.target, cutPos: DB_CAM.cutPos, cutTarget: DB_CAM.cutTarget, cutNormal: DB_CAM.cutNormal },
    lin: dLin,
    credit: 'Model: <a href="https://www.thingiverse.com/thing:6028826" target="_blank" rel="noopener">DB 605D by HQUARTAROLO</a> (Josep Calvo) · <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY</a>',
    load: loadDB605,
    frame: () => { spinShaft(S.crank / 1.55); updateDB(S.crank); },
    setExplode: setExplodeDB,
    floor: () => D.floor,
    emit: { pipes: D.wisps, colls: [] },
  },
};

// The engine on screen right now
export const cur = { e: engines.ferrari };
export { EMIT };
