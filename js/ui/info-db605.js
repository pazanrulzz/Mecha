// info-db605.js - side panel text for the Mercedes-Benz DB 605 parts.
// The model is a 3D-print kit, so its parts are grouped loosely; the figures are for the real engine.
import { S, fmt } from '../config.js';
import { INFO } from './info.js';

Object.assign(INFO, {
  'db-block': { name: 'Crankcase & cylinder banks', tag: 'Structure',
    desc: 'One large casting that holds the whole engine together: the crankcase, the two banks of six cylinders and the heads sit in a 60° V. The DB 605 is an inverted V12, meaning the crankshaft is on top and the cylinders hang below it. That keeps the propeller shaft high, gives the pilot a better view over the nose, and lets a cannon fire through the hollow shaft.',
    specs: [['Layout', '60° inverted V12'], ['Bore × stroke', '154 × 160 mm'], ['Displacement', '35.7 L'], ['Cooling', 'Liquid (glycol)'], ['Dry weight', '≈ 750 kg']] },
  'db-gear': { name: 'Propeller reduction gear', tag: 'Drivetrain',
    desc: 'A propeller turns best at much lower speed than a crankshaft, so a gear train in the nose slows it down. The crankshaft spins about 1.55 times for every turn of the propeller, which keeps the blade tips below the speed of sound.',
    specs: [['Reduction ratio', '≈ 1 : 1.55'], ['Crankshaft speed', () => fmt(S.rpm) + ' rpm'], ['Propeller speed', () => fmt(S.rpm / 1.55) + ' rpm'], ['Type', 'Spur gears']] },
  'db-shaft': { name: 'Propeller shaft', tag: 'Drivetrain',
    desc: 'The output shaft that carries the propeller hub. It is hollow so a 30 mm cannon could fire straight through the centre of the spinner (the Motorkanone fitted to some Bf 109s). It turns whenever the engine is running.',
    specs: [['Speed', () => fmt(S.rpm / 1.55) + ' rpm'], ['Construction', 'Hollow steel'], ['Fits', 'Variable-pitch propeller']] },
  'db-frame': { name: 'Mounting frame', tag: 'Structure',
    desc: 'The tubular cradle and feet that carry the engine. In the aircraft the engine is bolted to a pair of bearers on the fuselage; this frame stands in for them and keeps the model upright on a table.',
    specs: [['Type', 'Tubular cradle'], ['Purpose', 'Carries the engine weight and thrust'], ['In the aircraft', 'Bolted to the fuselage bearers']] },
  'db-stacks': { name: 'Exhaust stacks', tag: 'Exhaust',
    desc: 'Short ejector stubs on each side that carry the burnt gas out of the cylinders. They sit in the open airflow, and at high power they get hot enough to glow dull red; at night the pilot could see the glow. Raise the revs to see them heat up.',
    specs: [['Fitted', '5 per side (paired cylinders)'], ['Exhaust temp', () => fmt(240 + S.heat * 720) + ' °C'], ['Thrust bonus', '≈ 40 kgf at full power'], ['Material', 'Heat-resistant steel']] },
  'db-top': { name: 'Top covers & breather', tag: 'Auxiliary',
    desc: 'Covers on the upper crankcase and the round fittings fixed to them. They give access to the oil system and let crankcase vapour escape through a breather.',
    specs: [['Position', 'Top of the crankcase'], ['Contains', 'Oil breather, filler access'], ['Material', 'Aluminium alloy']] },
  'db-housing': { name: 'Accessory housings', tag: 'Auxiliary',
    desc: 'Gear-driven housings on each side of the crankcase that carry the engine accessories: pumps and, on the real engine, the magnetos for the two spark plugs in each cylinder. Dual ignition meant the engine would keep running if one system failed.',
    specs: [['Fitted', '2 (one per side)'], ['Ignition', '2 plugs per cylinder (24)'], ['Sparks / s', () => fmt(S.rpm / 120 * 24)]] },
  'db-crank': { name: 'Crankshaft', tag: 'Rotating assembly',
    desc: 'Turns the push of the pistons into rotation. Six throws carry two connecting rods each, one from each bank. The counterweights opposite each throw balance the moving parts. Switch to Cutaway to watch it turn.',
    specs: [['Throws', '6 (two rods each)'], ['Stroke', '160 mm'], ['Speed', () => fmt(S.rpm) + ' rpm'], ['Power pulses / s', () => fmt(S.rpm / 60 * 6)]] },
  'db-pistons': { name: 'Pistons & gudgeon pins', tag: 'Rotating assembly',
    desc: 'Twelve aluminium pistons, 154 mm across, slide in the cylinders and take the pressure of each combustion. Each is joined to its connecting rod by a hollow steel gudgeon pin.',
    specs: [['Quantity', '12 (6 per bank)'], ['Bore', '154 mm'], ['Mean piston speed', () => fmt(2 * 0.16 * S.rpm / 60, 1) + ' m/s'], ['Material', 'Forged aluminium']] },
  'db-rods': { name: 'Connecting rods', tag: 'Rotating assembly',
    desc: 'Steel rods link each piston to the crankshaft. Two rods share every crank pin, one from the left bank and one from the right, so the banks sit side by side along the crank.',
    specs: [['Quantity', '12'], ['Shared pins', '6 (one rod per bank)'], ['Material', 'Forged steel']] },
  'db-fittings': { name: 'Pipes, fittings & bolts', tag: 'Auxiliary',
    desc: 'Everything small: coolant and oil connections, plug leads, bolts and brackets. The kit models them as separate pieces, so they can fly apart in the exploded view.',
    specs: [['Pieces', '≈ 90'], ['Includes', 'Coolant, oil and fuel fittings'], ['Material', 'Steel and brass']] },
});

export const DB605_NOTE = 'Real engine figures are for the DB 605 family. The 3D model groups the kit parts loosely, so its part names are approximate.';
