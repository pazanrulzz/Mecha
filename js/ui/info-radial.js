// info-radial.js - side panel text for the nine-cylinder radial engine parts.
// The model is a visual one, so the text is general; the crankshaft, pistons and rods in the cutaway are stand-ins.
import { S, fmt } from '../config.js';
import { INFO } from './info.js';

export const RADIAL_NOTE = 'A nine-cylinder radial engine. The mesh is one piece in the source file, so the parts were sorted by position; the crankshaft, pistons and rods in the cutaway are simplified stand-ins and the figures are general.';

Object.assign(INFO, {
  'radial-crankcase': { name: 'Crankcase', tag: 'Structure',
    desc: 'The round housing at the centre that holds the crankshaft and carries all nine cylinders like spokes of a wheel. The rods from every piston meet on one crank pin inside it.',
    specs: [['Layout', 'Radial, 9 cylinders, single row'], ['Cylinder spacing', '40°'], ['Material', 'Cast aluminium alloy']] },
  'radial-cylinder': { name: 'Cylinders & cooling fins', tag: 'Structure',
    desc: 'Each barrel is covered in thin fins that give the heat a large surface to leave from. A radial has no radiator: air flows straight over the fins, so every cylinder sits out in the open.',
    specs: [['Cylinders', '9'], ['Cooling', 'Air, over the fins'], ['Material', 'Steel barrel with machined fins']] },
  'radial-head': { name: 'Cylinder heads & valves', tag: 'Valvetrain',
    desc: 'The top of each cylinder holds the valves, their rocker arms and the spark plugs. This is the hottest part of the engine and, at high power, glows dull red.',
    specs: [['Valves', '2 per cylinder'], ['Valve events / s (all)', () => fmt(S.rpm / 120 * 18, 0)], ['Sparks / s', () => fmt(S.rpm / 120 * 9)]] },
  'radial-valvegear': { name: 'Push rods & valve gear', tag: 'Valvetrain',
    desc: 'Long thin rods run from the cam gear at the front or back of the crankcase out to the rocker arms on each head. They turn the rotation of the cam into the push that opens the valves.',
    specs: [['Rods', '2 per cylinder'], ['Cam speed', 'A fraction of crank speed'], ['Shown speed', () => fmt(S.rpm) + ' rpm (crank)']] },
  'radial-intake': { name: 'Induction ring & pipes', tag: 'Intake',
    desc: 'A ring pipe collects the air-fuel mixture from the carburettor and a short pipe leads from it to each cylinder, so every cylinder gets an equal share.',
    specs: [['Pipes', '9, one per cylinder'], ['Feeds from', 'A single carburettor'], ['Material', 'Copper or brass tube']] },
  'radial-hub': { name: 'Propeller shaft & flange', tag: 'Drivetrain',
    desc: 'The nose of the crankshaft with the flange the propeller bolts to. It turns at crankshaft speed because there is no reduction gear.',
    specs: [['Speed', () => fmt(S.rpm) + ' rpm'], ['Drive', 'Direct, no reduction'], ['Material', 'Steel']] },
  'radial-crank': { name: 'Crankshaft', tag: 'Rotating assembly',
    desc: 'Turns the pushes of nine pistons into rotation. One crank pin carries all nine connecting rods. Switch to Cutaway to watch it turn.',
    specs: [['Crank pins', '1'], ['Speed', () => fmt(S.rpm) + ' rpm'], ['Power pulses / s', () => fmt(S.rpm / 120 * 9)]] },
  'radial-pistons': { name: 'Pistons & wrist pins', tag: 'Rotating assembly',
    desc: 'Nine pistons slide in the barrels. Only the cylinders that point straight down could hold oil, so a radial needs rings that keep it from pooling in the lower cylinders.',
    specs: [['Quantity', '9'], ['Firing order', 'Every second cylinder in turn'], ['Material', 'Aluminium alloy']] },
  'radial-rods': { name: 'Connecting rods', tag: 'Rotating assembly',
    desc: 'The rods link the pistons to the single crank pin. In the real engine one master rod holds the pin and the other eight hang from it on small pins; here every rod is shown joined straight to the pin.',
    specs: [['Quantity', '9'], ['Real layout', '1 master rod + 8 articulated'], ['Material', 'Forged steel']] },
});
