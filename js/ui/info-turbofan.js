// info-turbofan.js - side panel text for the turbofan jet engine parts.
// The model is a visual one, so the text is general. The meshes of the model carry no real part names for most pieces.
import { S, fmt } from '../config.js';
import { INFO } from './info.js';

export const TURBOFAN_NOTE = 'A turbofan jet engine. The text is general: the model has only a few named groups, so some parts are named by where they sit along the engine.';

Object.assign(INFO, {
  'turbofan-casing': { name: 'Outer casing', tag: 'Structure',
    desc: 'The long drum around the engine. It guides the air, carries the loads of thrust and holds every other part in line. It gets hotter toward the nozzle at the back.',
    specs: [['Position', 'Whole length of the engine'], ['Exhaust temp', () => fmt(240 + S.heat * 720) + ' °C'], ['Material', 'Steel and titanium alloys']] },
  'turbofan-fan': { name: 'Fan', tag: 'Rotating assembly',
    desc: 'The big wide blades at the front pull air into the engine. Most of that air never goes through the core: it is pushed round it and out the back, and that bypass air gives most of the thrust of a turbofan.',
    specs: [['Blades', '16'], ['Speed', () => fmt(S.rpm) + ' rpm'], ['Job', 'Pulls air in and makes bypass thrust']] },
  'turbofan-compressor': { name: 'Compressor', tag: 'Rotating assembly',
    desc: 'Rows of small blades that squeeze the air that goes into the core to many times the atmospheric pressure before fuel is added. Each row works with a fixed row of vanes beside it.',
    specs: [['Speed', () => fmt(S.rpm * 1.6) + ' rpm'], ['Job', 'Squeezes the air'], ['Spool', 'High-pressure shaft']] },
  'turbofan-turbine': { name: 'Turbine', tag: 'Rotating assembly',
    desc: 'Behind the combustor, hot gas rushes through several rows of blades and spins them. This turns the shafts that drive the compressor and the fan at the front. It glows at high power.',
    specs: [['Speed', () => fmt(S.rpm * 1.6) + ' rpm'], ['Gas temp', () => fmt(240 + S.heat * 720) + ' °C'], ['Job', 'Drives the compressor and fan']] },
  'turbofan-stator': { name: 'Stator vanes', tag: 'Flow path',
    desc: 'Fixed rings of vanes in the rear of the engine. They straighten the gas that leaves the spinning turbine and send it on toward the nozzle.',
    specs: [['Rings', '5'], ['Moves?', 'No, fixed'], ['Exhaust temp', () => fmt(240 + S.heat * 720) + ' °C']] },
  'turbofan-grid': { name: 'Compressor casing', tag: 'Flow path',
    desc: 'The grid-like inner housing around the compressor. It holds the fixed vanes and keeps a tight gap round the tips of the spinning blades so little air escapes past them.',
    specs: [['Position', 'Around the compressor'], ['Material', 'Steel']] },
  'turbofan-plates': { name: 'Combustor plates', tag: 'Flow path',
    desc: 'Plates in the middle of the engine where the compressed air meets the fuel. The mixture burns here and the hot gas leaves at the rear to spin the turbine.',
    specs: [['Position', 'Between compressor and turbine'], ['Job', 'Holds the burning mix'], ['Material', 'Heat-resistant alloy']] },
  'turbofan-canister': { name: 'Canisters', tag: 'Auxiliary',
    desc: 'Cylinders on the side of the engine that hold the fluids and equipment it needs, such as oil and fuel handling. Pipes connect them to the engine.',
    specs: [['Fitted', 'Side of the engine'], ['Holds', 'Fluids and accessories']] },
  'turbofan-pipes': { name: 'Pipes & manifolds', tag: 'Auxiliary',
    desc: 'External pipes that carry air, fuel and oil around the engine, with the rings that spread them evenly.',
    specs: [['Carries', 'Air, fuel, oil'], ['Material', 'Steel and copper tube']] },
  'turbofan-mount': { name: 'Mounts & brackets', tag: 'Structure',
    desc: 'The frame that holds the pipes and fittings to the casing and, in an aircraft, joins the engine to the wing or fuselage.',
    specs: [['Job', 'Hold and carry'], ['Material', 'Steel']] },
  'turbofan-fasteners': { name: 'Bolts & screws', tag: 'Auxiliary',
    desc: 'The many small fasteners that clamp the casing sections and fittings together.',
    specs: [['Fitted', 'All over the engine'], ['Material', 'Steel']] },
});
