// nav.js - switching between the engines (the buttons are in the React header, see App.jsx)
import { camera, controls } from '../scene.js';
import { state, S, R } from '../config.js';
import { engines, cur, EMIT } from '../engines.js';
import { setCutaway, setCutNormal, CUT_N } from '../model/cutaway.js';
import { setEngineUI, setExplodeUI } from './panel.js';
import { select } from './interaction.js';
import { setUI } from './store.js';

let busy = false;

// Change the engine that is shown
export async function switchTo(id) {
  const next = engines[id];
  if (!next || next === cur.e || busy) return;
  busy = true;

  // put the current engine back together and clear everything chosen on it
  setExplodeUI(0);
  select(null);
  setCutaway(false);
  setUI({ view: 'solid' });
  state.fly = null;

  // load the new engine's data the first time
  if (next.load) {
    setUI({ loading: { text: 'Loading ' + next.label + '…', status: 'active' } });
    try { await next.load(); }
    catch (err) {
      console.error(err);
      setUI({ loading: { text: 'Could not load ' + next.label + ': ' + err.message, status: 'error' } });
      busy = false;
      return;
    }
    setUI({ loading: null });
  }

  // hide the old engine, show the new one
  const old = cur.e;
  old.emit = { pipes: EMIT.pipes, colls: EMIT.colls };
  old.root.visible = false;
  old.root.position.set(0, 0, 0);
  if (old.floor()) old.floor().visible = false;
  cur.e = next;
  next.root.visible = true;
  if (next.floor()) next.floor().visible = true;
  EMIT.pipes = next.emit.pipes;
  EMIT.colls = next.emit.colls;

  // use the new engine's settings
  setCutNormal(next.cam.cutNormal || CUT_N);
  R.idle = next.idle;
  R.max = next.max;
  setEngineUI(next);
  S.heat = 0;
  next.setExplode(0);
  document.title = next.title;

  // fly the camera to the new engine
  controls.autoRotate = true;
  state.fly = {
    t: 0,
    fromT: controls.target.clone(), fromP: camera.position.clone(),
    toT: next.cam.target.clone(), toP: next.cam.pos.clone(),
  };
  busy = false;
}

export function initNav() {
  window.__switch = switchTo;
}
