// panel.js - the right side panel: rev slider, exploded slider, parts list and info card
import * as THREE from 'three';
import { controls } from '../scene.js';
import { IDLE, MAXR, S, state, fmt, gasTemp } from '../config.js';
import { setExplode } from '../model/explode.js';
import { INFO } from './info.js';

const $ = id => document.getElementById(id);   // short way to find an element
const panel = $('panel'), tog = $('tog'), rev = $('rev'), exp = $('exp');

// Functions given by interaction.js (select a part / zoom to it)
let onSelect = () => {}, onZoom = () => {};

// ---- open / close the panel ----
export function applyPanel() {
  panel.classList.toggle('closed', !state.panelOpen);
  tog.classList.toggle('closed', !state.panelOpen);
  tog.setAttribute('aria-expanded', String(state.panelOpen));
  document.body.classList.toggle('pc', !state.panelOpen);   // moves the exploded slider
}
export function openPanel() {
  state.panelOpen = true;
  applyPanel();
}
export const togglePanel = () => tog.click();
// Width of the panel in pixels (0 when closed or on small screens)
export function panelWidth() {
  return (state.panelOpen && state.W > 720) ? Math.min(panel.offsetWidth, state.W * 0.5) : 0;
}

// ---- rev slider ----
export function setRev(v) {
  S.target = THREE.MathUtils.clamp(v, IDLE, MAXR);
  rev.value = S.target;
  rev.style.setProperty('--p', ((S.target - IDLE) / (MAXR - IDLE) * 100) + '%');   // red fill
}

// ---- exploded slider (v = 0..1) ----
export function setExplodeUI(v) {
  exp.value = v * 100;
  setExplode(v);
  exp.style.setProperty('--p', (v * 100) + '%');
  $('expv').textContent = Math.round(v * 100) + '%';
}

// ---- info card ----
let liveFns = [];   // values that change with the rpm
export function renderInfo(key) {
  const box = $('info');
  liveFns = [];
  if (!key) {
    box.innerHTML = '<div class="hint"><b>Hover any component</b> to see its name, then click the label (or the part) to read about it here. Raise the revs to watch the exhaust heat up.</div>';
    return;
  }
  const d = INFO[key];
  // one row per spec; function values are live
  let rows = '';
  d.specs.forEach(([label, v], i) => {
    if (typeof v === 'function') {
      liveFns.push([`lv${i}`, v]);
      rows += `<div class="row"><span>${label}</span><b id="lv${i}" class="live">${v()}</b></div>`;
    } else {
      rows += `<div class="row"><span>${label}</span><b>${v}</b></div>`;
    }
  });
  box.innerHTML = `<div class="card"><div class="tag">${d.tag}</div><h2>${d.name}</h2><p>${d.desc}</p><div class="specs">${rows}</div>
    <div class="actions"><button id="zoomBtn">Zoom to part</button><button id="clrBtn">Clear</button></div>
    <div class="note">Figures are approximate reference values for a modern 6.5 L V12; the model is stylised.</div></div>`;
  $('zoomBtn').addEventListener('click', () => onZoom(key));
  $('clrBtn').addEventListener('click', () => onSelect(null));
}

// Refresh the live numbers in the info card
function updateLive() {
  liveFns.forEach(([id, fn]) => {
    const el = $(id);
    if (el) el.textContent = fn();
  });
}

// Update the numbers next to the rev slider (called a few times per second)
export function updateReadouts(rpmShown) {
  $('rpmv').textContent = fmt(Math.round(rpmShown / 10) * 10);
  $('s-temp').textContent = fmt(gasTemp());
  $('s-spark').textContent = fmt(rpmShown / 120 * 12);
  $('s-piston').textContent = fmt(2 * 0.0752 * rpmShown / 60, 1);
  $('heatbar').style.width = (S.heat * 100) + '%';
  updateLive();
}

// Connect all buttons and sliders. Call once at start.
export function initPanel(handlers) {
  onSelect = handlers.onSelect;
  onZoom = handlers.onZoom;

  tog.addEventListener('click', () => { state.panelOpen = !state.panelOpen; applyPanel(); });
  applyPanel();

  rev.addEventListener('input', () => setRev(+rev.value));
  document.querySelectorAll('[data-r]').forEach(b => b.addEventListener('click', () => setRev(+b.dataset.r)));
  setRev(IDLE);

  exp.addEventListener('input', () => {
    controls.autoRotate = false;
    setExplodeUI(exp.value / 100);
  });

  renderInfo(null);
}
