// radial-core.js - builds an engine with its cylinders in a star around the crankshaft (the shaft runs along z).
// Used for the nine-cylinder radial (static cylinders) and the Oberursel rotary (the whole engine turns with the propeller).
// The mesh comes from an FBX (see tools/convert-engine.mjs). The crankshaft, pistons and rods are simple stand-ins built here.
import * as THREE from 'three';
import { scene } from '../scene.js';
import { tri, partMeshes } from '../geometry.js';
import { M, heatAttr } from '../materials.js';
import { installCut, installClip, cutMats, cutHooks } from './cutaway.js';
import { makeFloor } from './procedural.js';
import { explodeCommon } from './explode.js';
import { EX } from './rig.js';
import { heatLights } from '../effects/particles.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

/*
 cfg = {
   key, data { global, file }, scale, cen, bottom
   mats()                        { group: material }
   uvK                           texture scale per group
   angles                        direction of each cylinder sector, in degrees (the converter numbers the sectors)
   offsetFor(group, ang, sec)    explode offset (model units); ang = the sector's angle in radians (0 for shared pieces)
   heat                          { group: (x, y, z) => 0..1 }
   shell                         groups that turn see-through in the cutaway
   wisps                         group that hot air wisps start on
   light(sg)                     model-space spot of the heat light on side sg
   spinGroups                    { group: ratio } groups that turn with the crankshaft (the rotary engine turns everything)
   rotary                        true if the cylinders turn around a fixed crankshaft
   internals                     { rc, rl, boreR, pistonH, crown, z, camLift... } or null
   cam                           { pos, target, cutPos, cutTarget, cutNormal }
 }
*/
export function createRadial(cfg) {
  const FLOOR_Y = (cfg.bottom - cfg.cen.y) * cfg.scale - 0.6;
  const root = new THREE.Group();
  root.visible = false;
  scene.add(root);
  const eng = new THREE.Group();
  eng.matrixAutoUpdate = false;
  eng.matrix.copy(new THREE.Matrix4().makeScale(cfg.scale, cfg.scale, cfg.scale).multiply(new THREE.Matrix4().makeTranslation(-cfg.cen.x, -cfg.cen.y, -cfg.cen.z)));
  root.add(eng);
  const lin = new THREE.Matrix3().setFromMatrix4(eng.matrix);
  const D = { ready: false, floor: null, recs: [], kin: null, spin: [], wisps: [], rot: new THREE.Group() };
  eng.add(D.rot);   // parts that turn with a rotary engine live in here
  const mats = cfg.mats();
  const I = cfg.internals;

  async function readData() {
    const b64 = window[cfg.data.global];
    if (!b64) throw new Error(cfg.data.file + ' was not loaded');
    const bin = Uint8Array.from(atob(b64), ch => ch.charCodeAt(0));
    const stream = new Blob([bin]).stream().pipeThrough(new DecompressionStream('gzip'));
    return new Response(stream).arrayBuffer();
  }
  function loadScript() {
    return new Promise((ok, fail) => {
      if (window[cfg.data.global]) return ok();
      const s = document.createElement('script');
      s.src = cfg.data.file;
      s.onload = ok;
      s.onerror = () => fail(new Error(cfg.data.file + ' was not found'));
      document.head.appendChild(s);
    });
  }

  async function load() {
    if (D.ready) return;
    await loadScript();
    const buf = await readData();
    const jsonLen = new DataView(buf).getUint32(0, true);
    const man = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, 4, jsonLen)));
    const base = 4 + jsonLen;
    const pipes = [];

    man.prods.forEach(pr => {
      const nv = pr.nv;
      const q = new Uint16Array(buf, base + pr.op, nv * 3);
      const nn = new Int8Array(buf, base + pr.on, nv * 3);
      const pos = new Float32Array(nv * 3), nor = new Float32Array(nv * 3);
      for (let i = 0; i < nv; i++) {
        for (let a = 0; a < 3; a++) {
          pos[i * 3 + a] = pr.bmin[a] + q[i * 3 + a] * pr.sc[a];
          nor[i * 3 + a] = nn[i * 3 + a] / 127;
        }
      }
      const idx = pr.idx16 ? new Uint16Array(buf, base + pr.oi, pr.nt * 3) : new Uint32Array(buf, base + pr.oi, pr.nt * 3);
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
      geo.setIndex(new THREE.BufferAttribute(pr.idx16 ? new Uint16Array(idx) : new Uint32Array(idx), 1));
      tri(geo, cfg.uvK[pr.g] ?? 0.06);
      if (cfg.heat[pr.g]) heatAttr(geo, cfg.heat[pr.g]);

      const mesh = new THREE.Mesh(geo, pr.sm ? mats.bolt : mats[pr.g]);
      if (pr.pivot) {
        geo.translate(-pr.pivot[0], -pr.pivot[1], 0);
        mesh.position.set(pr.pivot[0], pr.pivot[1], 0);
        D.spin.push({ mesh, ratio: pr.ratio });
      }
      geo.computeBoundingBox();
      geo.computeBoundingSphere();
      const key = cfg.key + '-' + pr.g;
      mesh.userData.part = key;
      mesh.castShadow = mesh.userData.cs = pr.nt > 300;
      mesh.receiveShadow = true;
      const ang = pr.sec === undefined ? 0 : THREE.MathUtils.degToRad(cfg.angles[pr.sec]);
      const off = cfg.offsetFor(pr.g, ang, pr.sec);
      mesh.userData.ex = { base: mesh.position.clone(), off };
      // parts of a rotary engine turn together
      (cfg.spinGroups && cfg.spinGroups[pr.g] !== undefined ? D.rot : eng).add(mesh);
      (partMeshes[key] ||= []).push(mesh);
      D.recs.push(mesh);

      // hot air wisps start on the hottest parts
      if (pr.g === cfg.wisps && !pr.sm) {
        const pts = [];
        const step = Math.max(1, Math.floor(nv / 60));
        for (let i = 0; i < nv; i += step) pts.push(new THREE.Vector3(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]).applyMatrix4(eng.matrix));
        pts.ex = off;
        pipes.push(pts);
      }
    });
    D.wisps.push(...pipes);

    if (I) buildInternals();

    Object.entries(mats).forEach(([name, m]) => {
      if (cutMats.has(m)) return;
      if (cfg.shell.includes(name)) installClip(m); else installCut(m);
    });
    cutHooks.push(on => {
      cfg.shell.forEach(g => {
        const m = mats[g];
        if (!m) return;
        m.transparent = on;
        m.opacity = on ? 0.18 : 1;
        m.depthWrite = !on;
        m.needsUpdate = true;
      });
      D.recs.forEach(r => { if (cfg.shell.includes(r.userData.part.slice(cfg.key.length + 1))) r.castShadow = !on && r.userData.cs; });
    });
    D.floor = makeFloor(FLOOR_Y);
    D.floor.visible = false;
    D.ready = true;
    window['__' + cfg.key] = { D, eng };   // handy for debugging
  }

  // ---- moving parts inside: crankshaft, pistons and rods ----
  const N = cfg.angles.length;
  const dirs = cfg.angles.map(a => THREE.MathUtils.degToRad(a));
  function buildInternals() {
    const mCrank = Object.assign(M.darkSteel.clone(), { color: new THREE.Color(0x8a8e95) });
    const mPist = Object.assign(M.pistonAlu.clone(), { color: new THREE.Color(0xdfe2e8) });
    const mRod = Object.assign(M.steel.clone(), { color: new THREE.Color(0xb8bcc4) });
    mats.crank = mCrank; mats.pistons = mPist; mats.rods = mRod;
    const add = (geo, mat, part, parent) => {
      const m = new THREE.Mesh(geo, mat);
      m.userData.part = cfg.key + '-' + part;
      m.castShadow = true;
      parent.add(m);
      (partMeshes[cfg.key + '-' + part] ||= []).push(m);
      return m;
    };
    const K = D.kin = { crank: new THREE.Group(), pistons: [], rodsRoot: cfg.rotary ? D.rot : eng };
    K.crank.position.set(0, 0, I.z);
    eng.add(K.crank);

    // crankshaft: a journal along z, a web and the crank pin the rods hang on
    const jr = new THREE.CylinderGeometry(I.rc * 0.42, I.rc * 0.42, I.len, 24); jr.rotateX(Math.PI / 2);
    add(jr, mCrank, 'crank', K.crank);
    const web = new THREE.BoxGeometry(I.rc * 2.6, I.rc * 0.9, I.rc * 0.35);
    [-1, 1].forEach(s => add(web, mCrank, 'crank', K.crank).position.set(I.rc * 0.3, 0, s * I.rc * 0.5));
    const cw = new THREE.CylinderGeometry(I.rc * 0.95, I.rc * 0.95, I.rc * 0.35, 24); cw.rotateX(Math.PI / 2);
    [-1, 1].forEach(s => add(cw, mCrank, 'crank', K.crank).position.set(-I.rc * 0.9, 0, s * I.rc * 0.5));
    const pin = new THREE.CylinderGeometry(I.rc * 0.38, I.rc * 0.38, I.rc * 1.6, 20); pin.rotateX(Math.PI / 2);
    add(pin, mCrank, 'crank', K.crank).position.set(I.rc, 0, 0);
    K.pin = pin;

    // pistons, wrist pins and connecting rods, one set per cylinder
    const pg = new THREE.CylinderGeometry(I.boreR, I.boreR, I.pistonH, 28), gp = new THREE.CylinderGeometry(I.boreR * 0.18, I.boreR * 0.18, I.boreR * 1.8, 12); gp.rotateX(Math.PI / 2);
    const rg = new THREE.BoxGeometry(I.rc * 0.34, 1, I.rc * 0.22);
    const parent = cfg.rotary ? D.rot : eng;
    for (let k = 0; k < N; k++) {
      const p = add(pg, mPist, 'pistons', parent), n = add(gp, mPist, 'pistons', parent), r = add(rg, mRod, 'rods', parent);
      p.rotation.z = dirs[k] - Math.PI / 2;
      K.pistons.push({ p, n, r, a: dirs[k], zr: I.z + (k - (N - 1) / 2) * I.rc * 0.07 });
    }
  }

  const UP = V(0, 1, 0), tmpA = new THREE.Vector3(), tmpB = new THREE.Vector3(), tmpD = new THREE.Vector3();

  // Move crank, pistons, rods and the turning parts for crank angle th (radians)
  function update(th) {
    D.spin.forEach(s => { s.mesh.rotation.z = th * s.ratio; });
    D.rot.rotation.z = cfg.rotary ? th : 0;
    const K = D.kin;
    if (!K) return;
    const e = EX.e;
    // crank angle as the cylinders see it: a rotary engine has a fixed crank, so it appears to turn the other way
    const ph = cfg.rotary ? -th : th;
    K.crank.rotation.z = cfg.rotary ? 0 : th;
    K.crank.position.set(0, 0, I.z - I.crankLift * e);
    K.pistons.forEach(o => {
      const wx = I.rc * Math.cos(ph), wy = I.rc * Math.sin(ph);
      const ca = Math.cos(o.a), sa = Math.sin(o.a);
      const u = wx * ca + wy * sa, w = -wx * sa + wy * ca;           // pin along / across the cylinder
      const s = u + Math.sqrt(I.rl * I.rl - w * w);                 // piston pin distance from the axis
      const lift = I.pistonLift * e;
      const z = o.zr;
      o.p.position.set(ca * (s + I.crown - I.pistonH / 2 + lift) , sa * (s + I.crown - I.pistonH / 2 + lift), z);
      o.n.position.set(ca * (s + lift), sa * (s + lift), z);
      tmpA.set(wx, wy, z); tmpB.set(ca * s, sa * s, z);
      tmpD.subVectors(tmpB, tmpA);
      const len = tmpD.length();
      o.r.position.copy(tmpA).addScaledVector(tmpD, 0.5);
      o.r.position.x += ca * I.pistonLift * 0.5 * e; o.r.position.y += sa * I.pistonLift * 0.5 * e;
      o.r.quaternion.setFromUnitVectors(UP, tmpD.divideScalar(len));
      o.r.scale.set(1, len, 1);
    });
  }

  function setExplode(e) {
    e = THREE.MathUtils.clamp(e, 0, 1);
    EX.e = e;
    D.recs.forEach(m => {
      const x = m.userData.ex;
      m.position.copy(x.base).addScaledVector(x.off, e);
    });
    explodeCommon(e, D.floor, FLOOR_Y);
    heatLights.forEach((l, i) => {
      const sg = i ? 1 : -1;
      l.position.copy(cfg.light(sg)).sub(cfg.cen).multiplyScalar(cfg.scale);
    });
  }

  return { root, eng, lin, D, load, update, setExplode, CAM: cfg.cam, floorY: FLOOR_Y };
}
