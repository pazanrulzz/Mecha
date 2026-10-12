// info-sbcs.js - side panel text for the supercharged small-block V8 parts.
// Most parts are the same as the plain small-block, so they reuse its texts under the 'sbcs-' key.
import { S, fmt } from '../config.js';
import { INFO } from './info.js';
import './info-sbc.js';

export const SBCS_NOTE = 'Figures are for a typical Chevrolet 350 small-block (5.7 L) with a belt-driven blower. The model is a complete engine with radiator, fan, transmission and headers; the crankshaft, pistons, rods and camshaft in the cutaway are simplified stand-ins.';

// parts that are the same as on the plain engine
['block', 'head', 'valve-cover', 'intake', 'carb', 'distributor', 'plug-wires', 'headers', 'oil-pan', 'timing-cover', 'balancer', 'pulleys', 'belt',
  'alternator', 'starter', 'lines', 'trans', 'driveline', 'crank', 'pistons', 'rods', 'cam'].forEach(k => { INFO['sbcs-' + k] = INFO['sbc-' + k]; });

Object.assign(INFO, {
  'sbcs-carb': { name: 'Carburettors', tag: 'Intake',
    desc: 'Two carburettors side by side on top of the blower. Air drawn past each throttle pulls petrol out of its float bowl through small jets. With a blower the mixture is mixed before the supercharger, so the blower squeezes air and fuel together.',
    specs: [['Fitted', '2, on top of the blower'], ['Mixture', 'Air + petrol, metered by jets'], ['Throttle', 'Linkage from the pedal']] },
  'sbcs-blower': { name: 'Supercharger (blower)', tag: 'Intake',
    desc: 'A belt-driven air pump on top of the engine. It squeezes the air-fuel mixture from the carburettors and pushes it into the intake at more than atmospheric pressure, so each cylinder gets more mixture and makes more power. A belt from the crank pulley drives it, so it spins faster as the engine speeds up.',
    specs: [['Drive', 'Belt from the crankshaft'], ['Crank speed', () => fmt(S.rpm) + ' rpm'], ['Boost', 'Typically 5–10 psi'], ['Feeds', 'Intake manifold']] },
  'sbcs-scoop': { name: 'Air scoop', tag: 'Intake',
    desc: 'The tall hood scoop with three inlets sits above the carburettors and feeds them air from the airflow at the front. It also stands in for the air cleaner on this engine.',
    specs: [['Inlets', '3'], ['Position', 'Above the carburettors'], ['Job', 'Feeds cool air to the blower']] },
  'sbcs-radiator': { name: 'Radiator', tag: 'Cooling',
    desc: 'A finned core with a tank on each side. Hot coolant flows through thin tubes while air passes over the fins and carries the heat away. The fan pulls air through it when the car is slow.',
    specs: [['Type', 'Cross-flow, finned core'], ['Coolant', 'Water and antifreeze'], ['Position', 'In front of the engine']] },
  'sbcs-fan': { name: 'Cooling fan', tag: 'Cooling',
    desc: 'A five-blade fan on the water pump pulley. It pulls air through the radiator, most useful at idle or in slow traffic when little air flows through by itself.',
    specs: [['Blades', '5'], ['Speed', () => fmt(S.rpm * 1.35) + ' rpm'], ['Drive', 'Belt, on the water pump']] },
  'sbcs-cooling': { name: 'Water pump & hoses', tag: 'Cooling',
    desc: 'The pump on the front of the block pushes coolant through the water jackets, and rubber hoses carry it to and from the radiator.',
    specs: [['Pump speed', () => fmt(S.rpm * 1.35) + ' rpm'], ['Hoses', 'Upper and lower'], ['Coolant', 'Water and antifreeze']] },
});
