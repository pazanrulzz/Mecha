// tooltip.js - hover label: a dot on the part, a line, and a clickable popover with the name
import * as THREE from 'three';
import { camera } from '../scene.js';
import { state } from '../config.js';
import { INFO } from './info.js';
import { panelWidth } from './panel.js';

const box = document.getElementById('tipbox');     // the popover button
const line = document.getElementById('tipline');   // line from the part to the popover
const dot = document.getElementById('tipdot');     // small dot on the part

let current = null;      // { key, point } of the label being shown
let hideTimer = 0;       // timer that hides the label after the mouse leaves
let onClick = () => {};  // called with the part name when the popover is clicked
const v = new THREE.Vector3();
let zone = null;         // screen box that covers the dot, the line and the popover

// Show the label for a part. point = 3D spot on the part (world space).
export function showTip(key, point) {
  clearTimeout(hideTimer);
  if (!current || current.key !== key) {
    box.innerHTML = `${INFO[key].name}<small>Click for details</small>`;
  }
  current = { key, point: point.clone() };
  box.hidden = false;
  updateTip();
}

// Hide the label after a short delay (so the mouse can reach the popover)
export function hideTip(delay = 350) {
  clearTimeout(hideTimer);
  hideTimer = setTimeout(hideNow, delay);
}

function hideNow() {
  current = null;
  zone = null;
  box.hidden = true;
  line.setAttribute('points', '');
  dot.setAttribute('cx', -10);
  dot.setAttribute('cy', -10);
}

// Keep the label on the part while the camera moves. Call every frame.
export function updateTip() {
  if (!current) return;
  v.copy(current.point).project(camera);                  // 3D -> screen (-1..1)
  if (v.z > 1) { hideNow(); return; }                     // behind the camera
  const ax = (v.x + 1) / 2 * state.W, ay = (1 - v.y) / 2 * state.H;   // anchor in pixels

  // place the popover up and to the right; flip it if there is no room
  const bw = box.offsetWidth, bh = box.offsetHeight;
  const right = state.W - panelWidth();                   // free space beside the panel
  let dx = 72, dy = -72;
  if (ax + dx + bw > right - 10) dx = -72 - bw;
  if (ay + dy - bh < 10) dy = 72 + bh;
  const bx = ax + dx, by = ay + dy - bh / 2;
  box.style.transform = `translate(${Math.round(bx)}px, ${Math.round(by)}px)`;

  // line: from the dot, diagonally, to the popover edge
  const ex = dx > 0 ? bx : bx + bw, ey = by + bh / 2;
  line.setAttribute('points', `${ax},${ay} ${ex - Math.sign(dx) * 14},${ey} ${ex},${ey}`);
  dot.setAttribute('cx', ax);
  dot.setAttribute('cy', ay);
  zone = { x0: Math.min(ax, bx) - 24, x1: Math.max(ax, bx + bw) + 24, y0: Math.min(ay, by) - 24, y1: Math.max(ay, by + bh) + 24 };
}

// True when the mouse is between the part and its popover.
// Then the label stays, so the mouse can travel to it without the label changing.
export function inTipZone(x, y) {
  return !!zone && x > zone.x0 && x < zone.x1 && y > zone.y0 && y < zone.y1;
}

// Connect the popover. handler(key) runs when it is clicked.
export function initTooltip(handler) {
  onClick = handler;
  box.addEventListener('click', () => {
    if (!current) return;
    const key = current.key;
    hideNow();
    onClick(key);
  });
  // keep the label while the mouse is on the popover
  box.addEventListener('pointerenter', () => clearTimeout(hideTimer));
  box.addEventListener('pointerleave', () => hideTip(250));
}
