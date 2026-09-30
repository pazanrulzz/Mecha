// parts.js - which CAD part belongs to which named group, and its material
import { M } from '../materials.js';

// Turn a CAD part name into one of our part names (used by the info panel)
export function partOf(n) {
  if (n === 'FERRARI_ENGINE_BLOCK') return 'block';
  if (n === 'FERRARI_CRANKSHAFT') return 'crankshaft';
  if (n.startsWith('FERRARI_CRANKSHAFT_CAP')) return 'crank-caps';
  if (n.startsWith('FERRARI_GEAR_FOR')) return 'timing-gears';
  if (n === 'FERRARI_PISTON' || n === 'FERRARI_GUDGEON_PIN') return 'piston';
  if (n === 'FERRARI_CONROD') return 'conrod';
  if (n.startsWith('FERRARI_VALVE_BLOCK')) return 'head';
  if (n.endsWith('VALVEB_CAP')) return 'valve-cover';
  if (n === 'FERRARI_SPARKPLUG') return 'spark-plug';
  if (n === 'FERRARI_VALVE') return 'valve';
  if (n === 'FERRAR_VALVE_SPRING' || n === 'VALVE_WASHER' || n === 'FERRARI_VALVES_PLATES') return 'valve-spring';
  if (n.startsWith('FERRARI_CAMSHAFT_L') || n.startsWith('FERRARI_CAMSHAFT_R')) return 'camshaft';
  if (n === 'FERRARI_CAMSHAFT_CAPS' || n === 'FERRARI_CAM_CAP_SIDE' || n.includes('CAM_CAP') || n === 'FERRARI_SCREW_CAP_SIDE') return 'cam-caps';
  if (n === 'FERRARI_OIL_CAP_CARTER') return 'oil-pan';
  if (n === 'FERRARI_INJECTION_PIPES') return 'runners';
  if (n === 'FERRARI_MAININJECTION_CAP' || n === 'FERRARI_INJECTION_SIDE_CAPS') return 'plenum';
  if (n === 'FERRARI_INTAKE_SYSTEM') return 'throttle';
  if (n.startsWith('FERRARI_BELT_DRIVER')) return 'pulleys';
  if (n === 'FERRARI_MEBLOCK_VBLOCK_DRIVER' || n === 'FERRARI_NUT_10' || n === 'FERRARI_DRIVERS_FOR_BLOCK_CCAPS') return 'head-studs';
  return 'fasteners';   // everything else is a small screw or nut
}

// Texture scale per part (default is used when a part is not listed)
export const uvK = { 'valve-cover': 0.03, plenum: 0.016, 'throttle': 0.02 };

// Material for each part
export const partMat = {
  'block': M.castAlu, 'oil-pan': M.darkAlu, 'head': M.alu, 'valve-cover': M.red,
  'crankshaft': M.darkSteel, 'crank-caps': M.castAlu, 'timing-gears': M.darkSteel,
  'piston': M.pistonAlu, 'conrod': M.steel, 'valve': M.steel, 'valve-spring': M.brass,
  'camshaft': M.steel, 'cam-caps': M.alu, 'spark-plug': M.alu, 'runners': M.alu,
  'plenum': M.plenumRed, 'throttle': M.alu, 'pulleys': M.darkAlu, 'head-studs': M.steel, 'fasteners': M.steel,
};

// Tiny parts that do not cast shadows (saves time)
export const noShadow = new Set(['valve-spring', 'fasteners', 'head-studs', 'cam-caps']);

// Every material that must support the cutaway
export function distinctMats() {
  return new Set([...Object.values(partMat), M.copper, M.gasket, M.inox, M.steelHot, M.black]);
}
