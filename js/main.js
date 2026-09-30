// main.js - starts the app and runs the animation loop
import * as THREE from 'three';
import { renderer, camera, controls } from './scene.js';
import { IDLE, MAXR, VIS, S, state } from './config.js';
import { HEAT, glowMat } from './materials.js';
import { root, A, EX } from './model/rig.js';
import { loadEngine } from './model/loader.js';
import { updateKinematics } from './model/kinematics.js';
import { setCutaway } from './model/cutaway.js';
import { updateParticles, heatLights, pointMat } from './effects/particles.js';
import { renderPost, resizePost } from './effects/postprocessing.js';
import { initPanel, setRev, setExplodeUI, togglePanel, panelWidth, updateReadouts } from './ui/panel.js';
import { initInteraction, select, flyTo, hiMat } from './ui/interaction.js';
import { updateTip } from './ui/tooltip.js';

// ---- window size ----
function resize() {
  state.W = window.innerWidth;
  state.H = window.innerHeight;
  renderer.setSize(state.W, state.H, false);
  camera.aspect = state.W / state.H;
  camera.updateProjectionMatrix();
  resizePost();
  // tell the particle shader how big a pixel is
  pointMat.uniforms.uScale.value = renderer.domElement.height / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
}
window.addEventListener('resize', resize);
resize();

// ---- small math helpers ----
const smooth = (a, b, x) => { const t = THREE.MathUtils.clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };   // smooth 0..1 ramp
const easeIO = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;                                          // ease in and out

let last = performance.now();   // time of the previous frame
let uiAcc = 0;                  // time since the numbers were updated
let viewShift = 0;              // sideways camera shift when the panel is open

// ---- one frame ----
function frame() {
  const now = performance.now();
  const dt = Math.min((now - last) / 1000, 0.05);   // seconds since last frame (max 0.05)
  last = now;
  state.time += dt;

  // engine speed follows the slider slowly (like real inertia), idle wobbles a bit
  S.rpm += (S.target - S.rpm) * (1 - Math.exp(-dt * 2.6));
  const wobble = S.target < 1000 ? Math.sin(state.time * 9) * 14 + Math.sin(state.time * 23) * 7 : 0;
  const rpmShown = S.rpm + wobble;
  const n = THREE.MathUtils.clamp((S.rpm - IDLE) / (MAXR - IDLE), 0, 1);   // 0 = idle, 1 = redline

  // turn the crank and move pistons, rods, cams
  S.crank += rpmShown * Math.PI * 2 / 60 * VIS * dt;
  updateKinematics(S.crank);

  // exhaust heat: builds up and cools down slowly
  const heatTarget = smooth(0.28, 0.95, n);
  S.heat += (heatTarget - S.heat) * (1 - Math.exp(-dt * (heatTarget > S.heat ? 0.55 : 0.32)));
  HEAT.value = S.heat;
  glowMat.uniforms.uAmt.value = Math.pow(S.heat, 1.5);
  heatLights.forEach(l => { l.intensity = 380 * Math.pow(S.heat, 1.8); });
  updateParticles(dt);

  // engine shake grows with rpm
  const amp = 0.012 + 0.11 * Math.pow(n, 1.6);
  root.position.set((Math.random() - 0.5) * amp * 2, (Math.random() - 0.5) * amp * 2, 0);
  root.rotation.z = (Math.random() - 0.5) * amp * 0.004;

  // running camera move (zoom to part, view change)
  if (state.fly) {
    const f = state.fly;
    f.t = Math.min(1, f.t + dt / 0.9);
    const e = easeIO(f.t);
    controls.target.lerpVectors(f.fromT, f.toT, e);
    camera.position.lerpVectors(f.fromP, f.toP, e);
    if (f.t >= 1) state.fly = null;
  }

  // blue highlight pulses
  hiMat.opacity = 0.2 + 0.12 * Math.sin(state.time * 4.5);

  // shift the view so the engine is centred in the free area beside the panel
  viewShift += (panelWidth() / 2 - viewShift) * (1 - Math.exp(-dt * 8));
  camera.setViewOffset(state.W, state.H, viewShift, 0, state.W, state.H);

  // update the text numbers about 16 times per second
  uiAcc += dt;
  if (uiAcc > 0.06) {
    uiAcc = 0;
    updateReadouts(rpmShown);
  }

  controls.update();
  updateTip();   // keep the hover label on its part
  renderPost();
  requestAnimationFrame(frame);
}

// ---- start ----
initPanel({ onSelect: select, onZoom: flyTo });
initInteraction();
loadEngine().catch(err => {
  console.error(err);
  const ld = document.getElementById('loading');
  if (ld) ld.textContent = 'Could not load the engine data: ' + err.message;
});
frame();

// ---- hooks for testing in the browser console ----
window.__ready = true;
Object.assign(window, {
  __cam: camera, __controls: controls, __S: S, __A: A, __EX: EX,
  __select: select, __getSel: () => state.selected, __setRev: setRev,
  __togglePanel: togglePanel, __cut: setCutaway, __setExplode: setExplodeUI,
});
