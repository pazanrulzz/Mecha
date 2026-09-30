// interaction.js - clicking parts, highlighting, camera fly-to and the solid/cutaway buttons
import * as THREE from 'three';
import { canvas, camera, controls } from '../scene.js';
import { state } from '../config.js';
import { root } from '../model/rig.js';
import { partMeshes } from '../geometry.js';
import { cutPlane, setCutaway } from '../model/cutaway.js';
import { renderInfo, markChip, openPanel } from './panel.js';

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
  markChip(key);
  if (key) {
    controls.autoRotate = false;
    if (fly) flyTo(key);
    if (!state.panelOpen && window.innerWidth > 720) openPanel();
  }
}

// Smoothly move the camera so the part fills the view
export function flyTo(key) {
  root.updateMatrixWorld(true);
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

// Find which part is under the mouse
const ray = new THREE.Raycaster(), mouse = new THREE.Vector2();
function pick(ev) {
  const r = canvas.getBoundingClientRect();
  mouse.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
  ray.setFromCamera(mouse, camera);
  const hits = ray.intersectObject(root, true);
  for (const h of hits) {
    if (state.cutOn && cutPlane.distanceToPoint(h.point) < 0) continue;   // ignore the cut-away half
    const o = h.object;
    if (o.userData && o.userData.part) return o.userData.part;
  }
  return null;
}

// Connect mouse clicks and the view buttons. Call once at start.
export function initInteraction() {
  // a click = mouse down and up close together in time and place (not a drag)
  let down = null;
  canvas.addEventListener('pointerdown', e => { down = { x: e.clientX, y: e.clientY, t: performance.now() }; });
  canvas.addEventListener('pointerup', e => {
    if (!down) return;
    const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
    const dt = performance.now() - down.t;
    down = null;
    if (moved < 5 && dt < 500) {
      const k = pick(e);
      select(k === state.selected ? null : k);   // click again to deselect
    }
  });

  // Solid / Cutaway buttons
  document.querySelectorAll('[data-view]').forEach(b => b.addEventListener('click', () => {
    const on = b.dataset.view === 'cut';
    document.querySelectorAll('[data-view]').forEach(x => x.classList.toggle('on', x === b));
    setCutaway(on);
    controls.autoRotate = false;
    // move the camera to a good spot for each view
    state.fly = {
      t: 0,
      fromT: controls.target.clone(), fromP: camera.position.clone(),
      toT: on ? new THREE.Vector3(-12, 12, 0) : new THREE.Vector3(0, 14, 0),
      toP: on ? new THREE.Vector3(-100, 2, 80) : new THREE.Vector3(80, 50, 110),
    };
  }));
}
