// rig.js - the engine group and shared model data
import * as THREE from 'three';
import { scene } from '../scene.js';

// Crankshaft centre in CAD coordinates (mm)
export const CX = 250, CY = 1.1;

// "root" shakes a little when the engine runs; "eng" holds the CAD engine
export const root = new THREE.Group();
scene.add(root);

export const eng = new THREE.Group();
eng.matrixAutoUpdate = false;
// CAD is in mm, the scene is in cm: turn it around, shrink to 0.1 and centre it
eng.matrix.copy(
  new THREE.Matrix4().makeRotationY(Math.PI)
    .multiply(new THREE.Matrix4().makeScale(0.1, 0.1, 0.1))
    .multiply(new THREE.Matrix4().makeTranslation(-CX, -CY, 360))
);
root.add(eng);

// Height of the floor under the engine
export const FLOOR_Y = -(94 + CY) * 0.1 - 0.4;

// Animation data filled in by loader.js
export const A = {
  ready: false,   // true when the model has loaded
  pistons: [],    // one record per cylinder (piston, rod, pin, geometry)
  rot: [],        // spinning parts (crank, cams, gears, pulleys)
};

// Points where hot air wisps start (filled in by procedural.js)
export const EMIT = { pipes: [], colls: [] };

// Exploded view state
export const EX = {
  e: 0,                          // explode amount, 0 to 1
  recs: [],                      // one record per part instance
  lin: new THREE.Matrix3(),      // engine rotation/scale (no position)
  zMid: -359,                    // middle of the engine along Z
  floor: null,                   // floor mesh (moves down when exploded)
  dolly: 1,                      // how far the camera was pulled back
  ty: 0,                         // how far the camera target was lowered
};
// Convert an explode offset (CAD mm) into a world offset for the current amount
EX.w = v => v.clone().applyMatrix3(EX.lin).multiplyScalar(EX.e);
