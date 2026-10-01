// nav.js - the navigation bar at the top: switch between the engines
import { camera, controls } from '../scene.js';
import { state, S, R } from '../config.js';
import { engines, cur, EMIT } from '../engines.js';
import { setCutaway, setCutNormal, CUT_N } from '../model/cutaway.js';
import { setEngineUI, setExplodeUI } from './panel.js';
import { select } from './interaction.js';

const buttons = () => document.querySelectorAll('[data-engine]');
let busy = false;

// Change the engine that is shown
async function switchTo(id) {
  const next = engines[id];
  if (!next || next === cur.e || busy) return;
  busy = true;
  buttons().forEach(b => b.classList.toggle('on', b.dataset.engine === id));

  // put the current engine back together and clear everything chosen on it
  setExplodeUI(0);
  select(null);
  setCutaway(false);
  document.querySelectorAll('[data-view]').forEach(x => x.classList.toggle('on', x.dataset.view === 'solid'));
  state.fly = null;

  // load the new engine's data the first time
  const ld = document.createElement('div');
  if (next.load) {
    ld.id = 'loading';
    ld.textContent = 'Loading ' + next.label + '…';
    document.body.appendChild(ld);
    try { await next.load(); }
    catch (err) {
      console.error(err);
      ld.textContent = 'Could not load ' + next.label + ': ' + err.message;
      buttons().forEach(b => b.classList.toggle('on', b.dataset.engine === cur.e.id));
      busy = false;
      return;
    }
    ld.remove();
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
  const credit = document.getElementById('credit');
  credit.innerHTML = next.credit;
  credit.hidden = !next.credit;

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
  buttons().forEach(b => b.addEventListener('click', () => switchTo(b.dataset.engine)));
  window.__switch = switchTo;
}
