// config.js - shared constants, live engine values and small helpers
import * as THREE from 'three';

export const IDLE = 800;    // idle speed (rpm)
export const MAXR = 8900;   // redline (rpm)
export const VIS = 0.012;   // slows the crank down so the motion is easy to watch

// Live engine values. Other files read and change these.
export const S = {
  rpm: IDLE,      // speed shown right now
  target: IDLE,   // speed the slider asks for
  heat: 0,        // exhaust heat, 0 to 1
  crank: 0,       // crankshaft angle in radians
};

// Other values that change while the app runs
export const state = {
  cutOn: false,                        // cutaway view on or off
  part: null,                          // part name given to newly built meshes
  fly: null,                           // running camera move (or null)
  selected: null,                      // part picked by the user
  panelOpen: window.innerWidth > 720,  // side panel open or closed
  time: 0,                             // seconds since start
  W: window.innerWidth,                // canvas width
  H: window.innerHeight,               // canvas height
};

// 0 at idle, 1 at redline
export const rpmN = () => THREE.MathUtils.clamp((S.rpm - IDLE) / (MAXR - IDLE), 0, 1);

// Format a number with commas, e.g. 8900 -> "8,900"
export const fmt = (n, d = 0) => n.toLocaleString('en-US', { maximumFractionDigits: d, minimumFractionDigits: d });

// Estimated exhaust gas temperature in Celsius
export const gasTemp = () => Math.round(240 + S.heat * 720);
