// store.js - small shared state for the React interface (the 3D code writes to it, React reads it)
import { useSyncExternalStore } from 'react';

// Everything the interface shows
export const ui = {
  panelOpen: window.innerWidth > 720,   // side panel open or closed
  engine: { id: 'ferrari', label: 'Ferrari V12', brand: 'V12 Engine', sub: '', note: '', idle: 800, max: 8900, presets: [800, 4500, 8900], credit: false },
  view: 'solid',                        // 'solid' or 'cut'
  rev: 800,                             // speed the slider asks for
  explode: 0,                           // 0..1
  selected: null,                       // part picked by the user
  read: { rpm: 800, temp: 240, spark: 0, piston: 0, heat: 0 },   // live numbers
  loading: { text: 'Loading engine…', status: 'active' },        // or null
};

let snap = { ...ui };
const listeners = new Set();

// Change values and tell React
export function setUI(patch) {
  Object.assign(ui, patch);
  snap = { ...ui };
  listeners.forEach(f => f());
}

// React hook: read one value from the store (select = function of the state)
export function useUI(select) {
  return useSyncExternalStore(
    f => { listeners.add(f); return () => listeners.delete(f); },
    () => select(snap)
  );
}
