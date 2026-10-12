// db605.js - the Mercedes-Benz DB 605 engine: loads its mesh data and builds the 3D model
import * as THREE from 'three';
import { scene } from '../scene.js';
import { tri, partMeshes } from '../geometry.js';
import { M, heatMaterial, heatAttr } from '../materials.js';
import { installCut, installClip, cutMats, cutHooks } from './cutaway.js';
import { makeFloor } from './procedural.js';
import { explodeCommon } from './explode.js';
import { EX } from './rig.js';
import { heatLights } from '../effects/particles.js';

// Centre of the engine in model units (mm) and the scale into the scene
const CEN = new THREE.Vector3(-14, -15, -60);
const SCALE = 0.2;
const FLOOR_Y = (-86 - CEN.y) * SCALE - 0.6;

export const root = new THREE.Group();   // shakes when the engine runs
root.visible = false;
scene.add(root);

export const eng = new THREE.Group();    // holds the meshes (model units)
eng.matrixAutoUpdate = false;
// turn so the propeller points right, then shrink and centre
eng.matrix.copy(new THREE.Matrix4().makeRotationY(Math.PI / 2)
  .multiply(new THREE.Matrix4().makeScale(SCALE, SCALE, SCALE))
  .multiply(new THREE.Matrix4().makeTranslation(-CEN.x, -CEN.y, -CEN.z)));
root.add(eng);

export const lin = new THREE.Matrix3().setFromMatrix4(eng.matrix);   // for exploded offsets
export const D = { ready: false, shaft: null, floor: null, wisps: [], recs: [], kin: null };

// ---- which kit piece belongs to which part group ----
const BY_ID = {};
const put = (key, ids) => ids.forEach(i => { BY_ID[i] = key; });
put('db-block', [4]);
put('db-gear', [38]);
put('db-shaft', [54]);
put('db-frame', [0, 102, 3, 114]);
put('db-stacks', [19, 20, 21, 22, 23, 94, 95, 96, 97, 98]);
put('db-top', [49, 60, 53, 31, 75]);
put('db-housing', [5, 86]);
const groupOf = id => BY_ID[id] || 'db-fittings';

// ---- materials ----
const mk = (base, color, extra = {}) => Object.assign(base.clone(), { color: new THREE.Color(color) }, extra);
const mats = {
  'db-block': mk(M.castAlu, 0x7d8189),
  'db-gear': mk(M.darkAlu, 0x62666d),
  'db-shaft': M.steel.clone(),
  'db-frame': mk(M.steel, 0x8c9096),
  'db-stacks': heatMaterial(new THREE.MeshStandardMaterial({ color: 0x5a5c61, metalness: 1, roughness: 0.42, vertexColors: false })),
  'db-top': mk(M.alu, 0xb9bcc2),
  'db-housing': mk(M.darkAlu, 0x55595f),
  'db-fittings': M.brass.clone(),
};
const uvK = { 'db-block': 0.02, 'db-top': 0.03, 'db-housing': 0.03, 'db-gear': 0.03 };

// How far (model mm) each piece moves when exploded
function offsetFor(group, c) {
  const sg = c.x < CEN.x ? -1 : 1;
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  switch (group) {
    case 'db-block': return V(0, 0, 0);
    case 'db-gear': return V(0, 0, 70);
    case 'db-shaft': return V(0, 0, 190);
    case 'db-frame': return V(sg * 95, -25, 0);
    case 'db-stacks': return V(sg * 120, 0, 0);
    case 'db-top': return V(0, 95, 0);
    case 'db-housing': return V(sg * 75, 55, 0);
    default: {   // small parts drift outward from the crank axis
      const d = new THREE.Vector2(c.x - CEN.x, c.y + 13).normalize();
      return V(d.x * 85 + sg * 15, d.y * 85, (c.z + 60) * 0.12);
    }
  }
}

async function readData() {
  const b64 = window.DB605_DATA;
  if (!b64) throw new Error('data/db605-data.js was not loaded');
  const bin = Uint8Array.from(atob(b64), ch => ch.charCodeAt(0));
  const stream = new Blob([bin]).stream().pipeThrough(new DecompressionStream('gzip'));
  return new Response(stream).arrayBuffer();
}

// Load the script file with the packed mesh data (only when first needed)
function loadScript() {
  return new Promise((ok, fail) => {
    if (window.DB605_DATA) return ok();
    const s = document.createElement('script');
    s.src = 'data/db605-data.js';
    s.onload = ok;
    s.onerror = () => fail(new Error('data/db605-data.js was not found'));
    document.head.appendChild(s);
  });
}

export async function loadDB605() {
  if (D.ready) return;
  await loadScript();
  const buf = await readData();
  const jsonLen = new DataView(buf).getUint32(0, true);
  const man = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, 4, jsonLen)));
  const base = 4 + jsonLen;

  man.prods.forEach(pr => {
    const group = groupOf(pr.id);
    const nv = pr.nv;
    const q = new Uint16Array(buf, base + pr.op, nv * 3);
    const nn = new Int8Array(buf, base + pr.on, nv * 3);
    const pos = new Float32Array(nv * 3), nor = new Float32Array(nv * 3);
    for (let i = 0; i < nv; i++) {
      for (let k = 0; k < 3; k++) {
        pos[i * 3 + k] = pr.bmin[k] + q[i * 3 + k] * pr.sc[k];
        nor[i * 3 + k] = nn[i * 3 + k] / 127;
      }
    }
    const idx = pr.idx16 ? new Uint16Array(buf, base + pr.oi, pr.nt * 3) : new Uint32Array(buf, base + pr.oi, pr.nt * 3);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    geo.setIndex(new THREE.BufferAttribute(pr.idx16 ? new Uint16Array(idx) : new Uint32Array(idx), 1));
    tri(geo, uvK[group] ?? 0.05);

    // exhaust stacks: hotter toward the top
    if (group === 'db-stacks') {
      const y0 = pr.bb[1], y1 = pr.bb[4];
      heatAttr(geo, (x, y) => 0.7 + 0.3 * (y - y0) / Math.max(0.01, y1 - y0));
    }

    const c = new THREE.Vector3(...pr.c);
    // the propeller shaft turns about its own axis, so it gets a pivot
    let pivot = null;
    if (group === 'db-shaft') {
      pivot = new THREE.Vector2((pr.bb[0] + pr.bb[3]) / 2, (pr.bb[1] + pr.bb[4]) / 2);
      geo.translate(-pivot.x, -pivot.y, 0);
    }
    geo.computeBoundingBox();
    geo.computeBoundingSphere();

    const mesh = new THREE.Mesh(geo, mats[group]);
    mesh.userData.part = group;
    mesh.castShadow = pr.nt > 300;
    mesh.receiveShadow = true;
    if (pivot) { mesh.position.set(pivot.x, pivot.y, 0); D.shaft = mesh; }
    const off = offsetFor(group, c);
    mesh.userData.ex = { base: mesh.position.clone(), off };
    eng.add(mesh);
    (partMeshes[group] ||= []).push(mesh);
    D.recs.push(mesh);
    // wisps start at the top of each exhaust stack
    if (group === 'db-stacks') {
      const top = new THREE.Vector3((pr.bb[0] + pr.bb[3]) / 2, pr.bb[4], (pr.bb[2] + pr.bb[5]) / 2).applyMatrix4(eng.matrix);
      const a = [top.clone(), top.clone().add(new THREE.Vector3(0, 0, 1.4)), top.clone().add(new THREE.Vector3(0, 0, -1.4))];
      a.ex = off;
      D.wisps.push(a);
    }
  });

  buildInternals();

  // the outer shell turns see-through in the cutaway so the moving parts show; the rest is cut normally
  const SHELL = ['db-block', 'db-gear', 'db-housing', 'db-top'];
  Object.entries(mats).forEach(([k, m]) => {
    if (cutMats.has(m)) return;
    if (SHELL.includes(k)) installClip(m); else installCut(m);
  });
  cutHooks.push(on => {
    SHELL.forEach(k => {
      const m = mats[k];
      m.transparent = on;
      m.opacity = on ? 0.16 : 1;
      m.depthWrite = !on;
      m.needsUpdate = true;
    });
    D.recs.forEach(r => { if (SHELL.includes(r.userData.part)) r.castShadow = !on; });
  });
  D.floor = makeFloor(FLOOR_Y);
  D.floor.visible = false;
  D.ready = true;
}

// ---- moving parts inside the shell: crankshaft, pistons and rods ----
const AX = new THREE.Vector2(-14, -12.5);            // crankshaft axis (x, y)
const RC = 10.5, RL = 36;                            // crank radius, rod length
const ZS = -150, ZP = 29.1;                          // first cylinder and cylinder spacing (z)
const ANG = 41 * Math.PI / 180;                      // each bank leans this far from straight down
const PHASE = [0, 240, 120, 120, 240, 0].map(d => d * Math.PI / 180);   // crank throw angles
const UP = new THREE.Vector3(0, 1, 0);

function internalMat(base, color) {
  const m = base.clone();
  m.color = new THREE.Color(color);
  return m;
}

function buildInternals() {
  const mCrank = internalMat(M.darkSteel, 0x8a8e95), mPist = internalMat(M.pistonAlu, 0xdfe2e8), mRod = internalMat(M.steel, 0xb8bcc4);
  mats['db-crank'] = mCrank; mats['db-pistons'] = mPist; mats['db-rods'] = mRod;
  const add = (geo, mat, part, parent = eng) => {
    const m = new THREE.Mesh(geo, mat);
    m.userData.part = part;
    parent.add(m);
    (partMeshes[part] ||= []).push(m);
    return m;
  };
  const K = D.kin = { crank: new THREE.Group(), pistons: [], pins: [], rods: [] };
  K.crank.position.set(AX.x, AX.y, 0);
  eng.add(K.crank);

  // crankshaft: main journal, and a pair of webs + a pin for every throw
  const jr = new THREE.CylinderGeometry(5, 5, 175, 24); jr.rotateX(Math.PI / 2);
  add(jr, mCrank, 'db-crank', K.crank).position.z = -78;
  const web = new THREE.BoxGeometry(RC + 20, 12, 3), pin = new THREE.CylinderGeometry(4, 4, 15, 20); pin.rotateX(Math.PI / 2);
  for (let k = 0; k < 6; k++) {
    const zc = ZS + ZP * k, g = new THREE.Group();
    g.rotation.z = PHASE[k]; g.position.z = zc;
    K.crank.add(g);
    [-6.5, 6.5].forEach(dz => { add(web, mCrank, 'db-crank', g).position.set((RC - 12) / 2 , 0, dz); });
    add(pin, mCrank, 'db-crank', g).position.set(RC, 0, 0);
  }

  // pistons, gudgeon pins and connecting rods: 6 per bank
  const pg = new THREE.CylinderGeometry(11, 11, 18, 28), gp = new THREE.CylinderGeometry(2.4, 2.4, 21, 14); gp.rotateX(Math.PI / 2);
  const rg = new THREE.BoxGeometry(5, 1, 3.4);
  [-1, 1].forEach(sg => {
    const d = new THREE.Vector2(sg * Math.sin(ANG), -Math.cos(ANG));
    for (let k = 0; k < 6; k++) {
      const zc = ZS + ZP * k;
      const p = add(pg, mPist, 'db-pistons'), n = add(gp, mPist, 'db-pistons'), r = add(rg, mRod, 'db-rods');
      p.quaternion.setFromUnitVectors(UP, new THREE.Vector3(d.x, d.y, 0));
      K.pistons.push({ p, n, r, d, zc, zr: zc + sg * 3.5, k });
    }
  });
}

const tmpA = new THREE.Vector3(), tmpB = new THREE.Vector3(), tmpD = new THREE.Vector3();

// Move crank, pistons and rods for crank angle th (radians)
export function updateDB(th) {
  const K = D.kin;
  if (!K) return;
  const e = EX.e;
  K.crank.rotation.z = th;
  K.crank.position.set(AX.x, AX.y + 90 * e, 0);
  K.pistons.forEach(o => {
    const a = th + PHASE[o.k];
    const px = AX.x + RC * Math.cos(a), py = AX.y + RC * Math.sin(a);   // crank pin
    const wx = px - AX.x, wy = py - AX.y;
    const wn = wx * -o.d.y + wy * o.d.x;                                 // sideways distance of the pin
    const s = wx * o.d.x + wy * o.d.y + Math.sqrt(RL * RL - wn * wn);    // piston pin distance along the bank
    // piston
    const ox = o.d.x * 55 * e, oy = o.d.y * 55 * e;
    o.p.position.set(AX.x + o.d.x * (s - 1) + ox, AX.y + o.d.y * (s - 1) + oy, o.zc);
    o.n.position.set(AX.x + o.d.x * s + ox, AX.y + o.d.y * s + oy, o.zc);
    // rod from the crank pin to the piston pin (moves as one piece when exploded)
    tmpA.set(px, py, o.zr);
    tmpB.set(AX.x + o.d.x * s, AX.y + o.d.y * s, o.zc);
    tmpD.subVectors(tmpB, tmpA);
    const len = tmpD.length();
    o.r.position.copy(tmpA).addScaledVector(tmpD, 0.5);
    o.r.position.x += o.d.x * 28 * e; o.r.position.y += o.d.y * 28 * e;
    o.r.quaternion.setFromUnitVectors(UP, tmpD.divideScalar(len));
    o.r.scale.set(1, len, 1);
  });
}

// Explode amount 0..1
export function setExplodeDB(e) {
  e = THREE.MathUtils.clamp(e, 0, 1);
  EX.e = e;
  D.recs.forEach(m => {
    const x = m.userData.ex;
    m.position.copy(x.base).addScaledVector(x.off, e);
  });
  explodeCommon(e, D.floor, FLOOR_Y);
  // heat lights follow the stacks
  heatLights.forEach((l, k) => {
    l.position.set(0, -1, (k ? 1 : -1) * 15).addScaledVector(new THREE.Vector3(0, 0, k ? 1 : -1), 55 * e * SCALE);
  });
}

// Turn the propeller shaft (angle in radians)
export function spinShaft(a) { if (D.shaft) D.shaft.rotation.z = a; }
export const floorY = FLOOR_Y;
export const DB_CAM = {
  pos: new THREE.Vector3(68, 38, 92), target: new THREE.Vector3(2, 3, 0),
  cutPos: new THREE.Vector3(50, 14, 78), cutTarget: new THREE.Vector3(0, 2, 0),
  cutNormal: new THREE.Vector3(0, 0, -1),
};
