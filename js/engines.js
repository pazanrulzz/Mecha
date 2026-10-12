// engines.js - the list of engines in the app and which one is shown now
import * as THREE from 'three';
import { root as fRoot, eng as fEng, EMIT, EX as FEX } from './model/rig.js';
import { updateKinematics } from './model/kinematics.js';
import { setExplode as setExplodeFerrari } from './model/explode.js';
import { loadDB605, root as dRoot, D, lin as dLin, setExplodeDB, spinShaft, updateDB, DB_CAM } from './model/db605.js';
import { DB605_NOTE } from './ui/info-db605.js';
import { loadSBC, root as sRoot, D as SD, lin as sLin, setExplodeSBC, updateSBC, SBC_CAM } from './model/sbc.js';
import { SBC_NOTE } from './ui/info-sbc.js';
import { loadSBCS, root as ssRoot, D as SSD, lin as ssLin, setExplodeSBCS, updateSBCS, SBCS_CAM } from './model/sbcs.js';
import { SBCS_NOTE } from './ui/info-sbcs.js';
import { loadRadial, root as raRoot, D as RAD, lin as raLin, setExplodeRadial, updateRadial, RADIAL_CAM } from './model/radial.js';
import { RADIAL_NOTE } from './ui/info-radial.js';
import { loadFokker, root as foRoot, D as FOD, lin as foLin, setExplodeFokker, updateFokker, FOKKER_CAM } from './model/fokker.js';
import { FOKKER_NOTE } from './ui/info-fokker.js';
import { loadTurbofan, root as tfRoot, D as TFD, lin as tfLin, setExplodeTurbofan, updateTurbofan, TURBOFAN_CAM } from './model/turbofan.js';
import { TURBOFAN_NOTE } from './ui/info-turbofan.js';
import { S } from './config.js';
import ferrariLogo from '../assets/logos/ferrari.svg';
import mercedesLogo from '../assets/logos/mercedes.svg';
import chevroletLogo from '../assets/logos/chevrolet.svg';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

export const engines = {
  // ---- Ferrari V12 (loaded at start) ----
  ferrari: {
    id: 'ferrari', label: 'Ferrari V12',
    logo: ferrariLogo,
    brand: 'V12 Engine', sub: 'Interactive 3D model',
    title: 'Ferrari V12 Engine',
    root: fRoot,
    idle: 800, max: 8900, presets: [800, 4500, 8900],
    vis: 0.012, sparkK: 12, stroke: 0.0752,
    note: 'Figures are approximate reference values for a modern 6.5 L V12; the model is stylised.',
    cam: { pos: V(80, 50, 110), target: V(0, 14, 0), cutPos: V(-100, 2, 80), cutTarget: V(-12, 12, 0), cutNormal: null },
    lin: new THREE.Matrix3().setFromMatrix4(fEng.matrix),
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
    logo: mercedesLogo,
    brand: 'DB 605 Engine', sub: 'Mercedes-Benz · 1942 · Bf 109',
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
  // ---- Chevrolet small-block V8 (loaded the first time it is chosen) ----
  sbc: {
    id: 'sbc', label: 'Chevrolet SBC V8',
    logo: chevroletLogo,
    brand: 'SBC V8 Engine', sub: 'Chevrolet · 350 cu in · Small-block',
    title: 'Chevrolet Small-Block V8 Engine',
    root: sRoot,
    idle: 700, max: 6000, presets: [700, 3000, 6000],
    vis: 0.018, sparkK: 8, stroke: 0.0884,
    note: SBC_NOTE,
    cam: { pos: SBC_CAM.pos, target: SBC_CAM.target, cutPos: SBC_CAM.cutPos, cutTarget: SBC_CAM.cutTarget, cutNormal: SBC_CAM.cutNormal },
    lin: sLin,
    credit: '',
    load: loadSBC,
    frame: () => updateSBC(S.crank),
    setExplode: setExplodeSBC,
    floor: () => SD.floor,
    emit: { pipes: SD.wisps, colls: [] },
  },
  // ---- Supercharged Chevrolet small-block V8 (loaded the first time it is chosen) ----
  sbcs: {
    id: 'sbcs', label: 'Supercharged SBC V8',
    logo: chevroletLogo,
    brand: 'Blown SBC V8', sub: 'Chevrolet · 350 cu in · Supercharged',
    title: 'Supercharged Chevrolet Small-Block V8 Engine',
    root: ssRoot,
    idle: 800, max: 6500, presets: [800, 3200, 6500],
    vis: 0.017, sparkK: 8, stroke: 0.0884,
    note: SBCS_NOTE,
    cam: { pos: SBCS_CAM.pos, target: SBCS_CAM.target, cutPos: SBCS_CAM.cutPos, cutTarget: SBCS_CAM.cutTarget, cutNormal: SBCS_CAM.cutNormal },
    lin: ssLin,
    credit: '',
    load: loadSBCS,
    frame: () => updateSBCS(S.crank),
    setExplode: setExplodeSBCS,
    floor: () => SSD.floor,
    emit: { pipes: SSD.wisps, colls: [] },
  },
  // ---- Nine-cylinder radial (loaded the first time it is chosen) ----
  radial: {
    id: 'radial', label: 'Nine-cylinder radial',
    brand: 'Radial 9', sub: 'Single-row radial · 9 cylinders',
    title: 'Nine-Cylinder Radial Engine',
    root: raRoot,
    idle: 500, max: 2400, presets: [500, 1600, 2400],
    vis: 0.04, sparkK: 9, stroke: 0.16,
    note: RADIAL_NOTE,
    cam: { pos: RADIAL_CAM.pos, target: RADIAL_CAM.target, cutPos: RADIAL_CAM.cutPos, cutTarget: RADIAL_CAM.cutTarget, cutNormal: RADIAL_CAM.cutNormal },
    lin: raLin,
    credit: '',
    load: loadRadial,
    frame: () => updateRadial(S.crank),
    setExplode: setExplodeRadial,
    floor: () => RAD.floor,
    emit: { pipes: RAD.wisps, colls: [] },
  },
  // ---- Oberursel UR.II rotary of the Fokker E.III (loaded the first time it is chosen) ----
  fokker: {
    id: 'fokker', label: 'Oberursel UR.II rotary',
    brand: 'UR.II Rotary', sub: 'Oberursel · 1915 · Fokker E.III',
    title: 'Oberursel UR.II Rotary Engine',
    root: foRoot,
    idle: 400, max: 1400, presets: [400, 1000, 1400],
    vis: 0.06, sparkK: 9, stroke: 0.12,
    note: FOKKER_NOTE,
    cam: { pos: FOKKER_CAM.pos, target: FOKKER_CAM.target, cutPos: FOKKER_CAM.cutPos, cutTarget: FOKKER_CAM.cutTarget, cutNormal: FOKKER_CAM.cutNormal },
    lin: foLin,
    credit: '',
    load: loadFokker,
    frame: () => updateFokker(S.crank),
    setExplode: setExplodeFokker,
    floor: () => FOD.floor,
    emit: { pipes: FOD.wisps, colls: [] },
  },
  // ---- Turbofan jet engine (loaded the first time it is chosen) ----
  turbofan: {
    id: 'turbofan', label: 'Turbofan jet engine',
    brand: 'Turbofan', sub: 'Jet engine · axial flow',
    title: 'Turbofan Jet Engine',
    root: tfRoot,
    idle: 2500, max: 10000, presets: [2500, 6500, 10000],
    vis: 0.011, sparkK: 0, stroke: 0,
    labels: ['Blade passes / s', 'Core speed rpm'],
    calc: { a: rpm => rpm / 60 * 16, b: rpm => rpm * 1.6 },
    note: TURBOFAN_NOTE,
    cam: { pos: TURBOFAN_CAM.pos, target: TURBOFAN_CAM.target, cutPos: TURBOFAN_CAM.cutPos, cutTarget: TURBOFAN_CAM.cutTarget, cutNormal: TURBOFAN_CAM.cutNormal },
    lin: tfLin,
    credit: '',
    load: loadTurbofan,
    frame: () => updateTurbofan(S.crank),
    setExplode: setExplodeTurbofan,
    floor: () => TFD.floor,
    emit: { pipes: TFD.wisps, colls: [] },
  },
};

// The engine on screen right now
export const cur = { e: engines.ferrari };
export { EMIT };
