// cutaway.js - slices the engine open so the inside can be seen
import * as THREE from 'three';
import { state } from '../config.js';
import { eng } from './rig.js';

// The cutting plane. Far away (1e6) means "off".
export const cutPlane = new THREE.Plane(new THREE.Vector3(0.7071, 0.7071, 0), 1e6);

// Direction of the cut (turned into world space)
export const CUT_N = new THREE.Vector3(-0.7071, 0.7071, 0)
  .transformDirection(new THREE.Matrix4().extractRotation(eng.matrix));

// Direction of the cut now in use (each engine sets its own)
const cutDir = CUT_N.clone();
export function setCutNormal(n) { cutDir.copy(n); }

// Materials that can be cut
export const cutMats = new Set();

// Functions called when the cutaway is switched on or off
export const cutHooks = [];

// Make a material cut-able without painting the inside red (used for see-through shells)
export function installClip(m) {
  m.clippingPlanes = [cutPlane];
  m.clipShadows = true;
  cutMats.add(m);
}

// Make a material cut-able. The inside faces are painted dark red.
export function installCut(m) {
  const prev = m.onBeforeCompile;
  const baseKey = m.customProgramCacheKey ? m.customProgramCacheKey() : '';
  m.onBeforeCompile = (sh, r) => {
    if (prev) prev(sh, r);
    // back faces (the hollow inside) get a flat red colour
    sh.fragmentShader = sh.fragmentShader.replace('#include <dithering_fragment>',
      '#include <dithering_fragment>\n  if (!gl_FrontFacing) { gl_FragColor = vec4(0.55, 0.035, 0.03, 1.0); }');
  };
  m.customProgramCacheKey = () => baseKey + '|cut';
  m.clippingPlanes = [cutPlane];
  m.clipShadows = true;
  cutMats.add(m);
}

// Turn the cutaway on or off
export function setCutaway(on) {
  state.cutOn = on;
  cutPlane.normal.copy(cutDir);
  cutPlane.constant = on ? 0 : 1e6;
  // show both sides of the surface only while cutting
  cutHooks.forEach(f => f(on));
  cutMats.forEach(m => { m.side = on ? THREE.DoubleSide : THREE.FrontSide; m.needsUpdate = true; });
}
