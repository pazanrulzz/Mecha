// panel.js - connects the 3D code to the side panel (the panel itself is React, see SidePanel.jsx)
import * as THREE from 'three';
import { R, S, state, fmt, gasTemp } from '../config.js';
import { cur } from '../engines.js';
import { setUI } from './store.js';

// Functions given by interaction.js (select a part / zoom to it)
export const handlers = { onSelect: () => {}, onZoom: () => {} };

// ---- open / close the panel ----
export function openPanel() {
  state.panelOpen = true;
  setUI({ panelOpen: true });
}
export function togglePanel() {
  state.panelOpen = !state.panelOpen;
  setUI({ panelOpen: state.panelOpen });
}
// Width of the panel in pixels (0 when closed or on small screens)
export function panelWidth() {
  const el = document.getElementById('panel');
  return (state.panelOpen && state.W > 720 && el) ? Math.min(el.offsetWidth, state.W * 0.5) : 0;
}

// ---- rev slider ----
export function setRev(v) {
  S.target = THREE.MathUtils.clamp(v, R.idle, R.max);
  setUI({ rev: S.target });
}

// ---- exploded slider (v = 0..1) ----
export function setExplodeUI(v) {
  cur.e.setExplode(v);
  setUI({ explode: v });
}

// ---- info card: React shows the part chosen here ----
export function renderInfo(key) {
  setUI({ selected: key });
}

// Update the numbers next to the rev slider (called a few times per second)
export function updateReadouts(rpmShown) {
  setUI({ read: {
    rpm: Math.round(rpmShown / 10) * 10,
    temp: gasTemp(),
    spark: rpmShown / 120 * cur.e.sparkK,
    piston: 2 * cur.e.stroke * rpmShown / 60,
    heat: S.heat,
  } });
}

// Show the settings of an engine in the panel: title, rev range and presets
export function setEngineUI(e) {
  S.rpm = S.target = e.idle;
  setUI({
    engine: { id: e.id, label: e.label, brand: e.brand, sub: e.sub, note: e.note, idle: e.idle, max: e.max, presets: e.presets, credit: !!e.credit },
    rev: e.idle,
    selected: null,
  });
}

// Start. Call once.
export function initPanel(h) {
  handlers.onSelect = h.onSelect;
  handlers.onZoom = h.onZoom;
  setEngineUI(cur.e);
}
export { fmt };
