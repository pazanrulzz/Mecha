// interaction.js - clicking parts, highlighting, camera fly-to and the solid/cutaway buttons
import * as THREE from 'three';
import { canvas, camera, controls } from '../scene.js';
import { state } from '../config.js';
import { cur } from '../engines.js';
import { partMeshes } from '../geometry.js';
import { cutPlane, setCutaway } from '../model/cutaway.js';
import { renderInfo, openPanel } from './panel.js';
import { showTip, hideTip, initTooltip, inTipZone } from './tooltip.js';
import { setUI } from './store.js';

// ---- blue glow drawn over the selected part ----
export const hiMat = new THREE.MeshBasicMaterial({
  color: 0x2f8cff, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending,
  depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
});
hiMat.clippingPlanes = [cutPlane];
let hiMeshes = [];

function setHighlight(key) {
  // remove the old overlay
  hiMeshes.forEach(h => h.parent && h.parent.remove(h));
  hiMeshes = [];
  if (!key) return;
  // add a copy of every mesh of this part, with the glow material
  (partMeshes[key] || []).forEach(m => {
    let h;
    if (m.isInstancedMesh) {
      h = new THREE.InstancedMesh(m.geometry, hiMat, m.count);
      h.instanceMatrix = m.instanceMatrix;   // share the matrices so it follows the animation
    } else {
      h = new THREE.Mesh(m.geometry, hiMat);
    }
    h.raycast = () => {};    // clicks go through the overlay
    h.frustumCulled = false;
    m.add(h);
    hiMeshes.push(h);
  });
}

// Select a part (or null to clear). fly = also move the camera to it.
export function select(key, fly = false) {
  state.selected = key;
  setHighlight(key);
  renderInfo(key);
  if (key) {
    controls.autoRotate = false;
    if (fly) flyTo(key);
    if (!state.panelOpen && window.innerWidth > 720) openPanel();
  }
}

// Smoothly move the camera so the part fills the view
export function flyTo(key) {
  cur.e.root.updateMatrixWorld(true);
  const box = new THREE.Box3();
  (partMeshes[key] || []).forEach(m => box.expandByObject(m));
  if (box.isEmpty()) return;
  const c = box.getCenter(new THREE.Vector3());
  const sz = box.getSize(new THREE.Vector3());
  const dist = THREE.MathUtils.clamp(sz.length() * 1.15, 55, 230);
  const dir = camera.position.clone().sub(controls.target).normalize();
  state.fly = {
    t: 0,
    fromT: controls.target.clone(), fromP: camera.position.clone(),
    toT: c, toP: c.clone().addScaledVector(dir, dist),
  };
  controls.autoRotate = false;
}

// Find which part is under the mouse. Returns { key, point } or null.
const ray = new THREE.Raycaster(), mouse = new THREE.Vector2();
function pick(ev) {
  const r = canvas.getBoundingClientRect();
  mouse.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
  ray.setFromCamera(mouse, camera);
  const hits = ray.intersectObject(cur.e.root, true);
  for (const h of hits) {
    if (state.cutOn && cutPlane.distanceToPoint(h.point) < 0) continue;   // ignore the cut-away half
    const o = h.object;
    if (o.userData && o.userData.part) return { key: o.userData.part, point: h.point };
  }
  return null;
}

// Connect mouse clicks and the view buttons. Call once at start.
export function initInteraction() {
  initTooltip(key => select(key));   // clicking the popover shows the details

  // hover: show the name of the part under the mouse (checked at most every 70 ms)
  let lastHover = 0;
  canvas.addEventListener('pointermove', e => {
    if (e.buttons || state.fly) return;              // ignore while dragging or moving the camera
    if (inTipZone(e.clientX, e.clientY)) return;     // on the way to the popover: keep the label
    const now = performance.now();
    if (now - lastHover < 70) return;
    lastHover = now;
    const hit = pick(e);
    if (hit) showTip(hit.key, hit.point);
    else hideTip();
  });
  canvas.addEventListener('pointerleave', () => hideTip());

  // a click = mouse down and up close together in time and place (not a drag)
  let down = null;
  canvas.addEventListener('pointerdown', e => { hideTip(0); down = { x: e.clientX, y: e.clientY, t: performance.now() }; });
  canvas.addEventListener('pointerup', e => {
    if (!down) return;
    const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
    const dt = performance.now() - down.t;
    down = null;
    if (moved < 5 && dt < 500) {
      const hit = pick(e);
      const k = hit ? hit.key : null;
      hideTip(0);
      select(k === state.selected ? null : k);   // click again to deselect
    }
  });
}

// Switch between Solid and Cutaway ('solid' or 'cut') and move the camera to a good spot
export function setView(name) {
  const on = name === 'cut';
  setUI({ view: on ? 'cut' : 'solid' });
  setCutaway(on);
  controls.autoRotate = false;
  state.fly = {
    t: 0,
    fromT: controls.target.clone(), fromP: camera.position.clone(),
    toT: (on ? cur.e.cam.cutTarget : cur.e.cam.target).clone(),
    toP: (on ? cur.e.cam.cutPos : cur.e.cam.pos).clone(),
  };
}
