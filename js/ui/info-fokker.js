// info-fokker.js - side panel text for the Oberursel UR.II rotary engine and propeller (Fokker E.III).
import { S, fmt } from '../config.js';
import { INFO } from './info.js';

export const FOKKER_NOTE = 'Figures are for the Oberursel UR.II, a copy of the Gnome rotary used in the Fokker E.III of 1915. In this viewer the cylinders stay still and only the propeller turns (the real engine turned as one with it). The crankshaft, pistons and rods in the cutaway are simplified stand-ins.';

Object.assign(INFO, {
  'fokker-crankcase': { name: 'Crankcase', tag: 'Structure',
    desc: 'The round housing at the centre that carries the nine cylinders. In the real rotary engine it is not bolted to the airframe: it turns around a crankshaft that stays still, taking the cylinders and propeller with it. Here it is shown fixed.',
    specs: [['Layout', 'Rotary, 9 cylinders'], ['Real engine turns at', () => fmt(S.rpm) + ' rpm'], ['Material', 'Steel (machined from a solid forging)']] },
  'fokker-cylinder': { name: 'Cylinders & cooling fins', tag: 'Structure',
    desc: 'Each cylinder is a steel barrel with fins cut into it. In the real engine the whole engine spins, so the cylinders sweep through the air at high speed and cool themselves, with no radiator needed.',
    specs: [['Cylinders', '9'], ['Bore × stroke', '100 × 120 mm'], ['Displacement', '≈ 8.5 L'], ['Cooling', 'Air, from the spinning']] },
  'fokker-head': { name: 'Cylinder heads & valves', tag: 'Valvetrain',
    desc: 'The top of each cylinder holds the valves and spark plug. There is no exhaust pipe: burnt gas leaves straight from the head, and the castor oil used as lubricant is thrown out with it.',
    specs: [['Valves', '2 per cylinder'], ['Ignition', 'One magneto'], ['Sparks / s', () => fmt(S.rpm / 120 * 9)]] },
  'fokker-hub': { name: 'Propeller hub', tag: 'Drivetrain',
    desc: 'The brass hub that fixes the propeller to the front of the crankcase. There is no gearbox, so the propeller turns at exactly the speed of the engine.',
    specs: [['Speed', () => fmt(S.rpm) + ' rpm'], ['Drive', 'Direct'], ['Material', 'Brass']] },
  'fokker-propeller': { name: 'Propeller', tag: 'Drivetrain',
    desc: 'A two-blade wooden propeller, laminated from layers of wood glued together. It spins together with the engine, and the spinning engine acts like a gyroscope, which made these aircraft tricky to turn.',
    specs: [['Blades', '2'], ['Speed', () => fmt(S.rpm) + ' rpm'], ['Material', 'Laminated wood']] },
  'fokker-crank': { name: 'Crankshaft', tag: 'Rotating assembly',
    desc: 'Turns the push of the nine pistons into rotation and drives the propeller. (In the real rotary the crankshaft was fixed and the cylinders turned around it.) Switch to Cutaway to watch it turn.',
    specs: [['Turns?', 'Yes, in this view'], ['Throws', '1'], ['Power pulses / s', () => fmt(S.rpm / 120 * 9)]] },
  'fokker-pistons': { name: 'Pistons & wrist pins', tag: 'Rotating assembly',
    desc: 'Nine aluminium pistons slide in the barrels. Each piston slides in its cylinder and pushes the crank pin round.',
    specs: [['Quantity', '9'], ['Bore', '100 mm'], ['Stroke', '120 mm'], ['Material', 'Aluminium alloy']] },
  'fokker-rods': { name: 'Connecting rods', tag: 'Rotating assembly',
    desc: 'Rods link each piston to the single fixed crank pin. In the real engine one master rod carries the pin and the others are attached to it; here every rod is shown joined straight to the pin.',
    specs: [['Quantity', '9'], ['Real layout', '1 master rod + 8 articulated'], ['Material', 'Forged steel']] },
});
