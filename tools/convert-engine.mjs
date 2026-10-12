// convert-engine.mjs - turns an engine FBX/OBJ into data/<name>-data.js (packed mesh data read by the engine builders in js/model/)
//   node tools/convert-engine.mjs <model> [--debug]
// <model> is the name of a tools/<model>-groups.mjs file, which says where the 3D file is and which mesh is which part.
// Meshes are baked into world space (optionally turned/scaled by MODEL.transform), optionally split into connected pieces,
// welded, grouped by part and quantised like the other engines.
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

const modelName = process.argv.find((a, i) => i > 1 && !a.startsWith('--'));
if (!modelName) { console.log('usage: node tools/convert-engine.mjs <model>   (sbc, sbcs, fokker, radial, turbofan)'); process.exit(1); }
const { classify, SPIN = {}, MODEL, STUB = null } = await import(`./${modelName}-groups.mjs`);

// ---- read the file ----
const src = path.resolve('..', ...MODEL.src);
const file = fs.readFileSync(src);
let root;
if (src.toLowerCase().endsWith('.obj')) {
  root = new OBJLoader().parse(file.toString('utf8'));
} else {
  // textured FBX files try to load images through the DOM; we only want the shapes
  if (!globalThis.document) globalThis.document = { createElementNS: () => ({ addEventListener() {}, removeEventListener() {}, set src(v) {} }) };
  root = new FBXLoader().parse(file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength), '');
}
root.updateMatrixWorld(true);
const rawMeshes = [];
root.traverse(o => { if (o.isMesh) rawMeshes.push(o); });

// ---- bake every mesh into world space: { name, mat, pos, nor, tris } (tris = 3 vertex numbers per triangle) ----
const nmat = new THREE.Matrix3();
let baked = rawMeshes.map((o, i) => {
  const P = o.geometry.attributes.position, N = o.geometry.attributes.normal, I = o.geometry.index;
  const pos = new Float32Array(P.count * 3), nor = new Float32Array(P.count * 3);
  nmat.getNormalMatrix(o.matrixWorld);
  const v = new THREE.Vector3();
  for (let k = 0; k < P.count; k++) {
    v.fromBufferAttribute(P, k).applyMatrix4(o.matrixWorld).toArray(pos, k * 3);
    if (N) v.fromBufferAttribute(N, k).applyMatrix3(nmat).normalize().toArray(nor, k * 3);
  }
  const nT = I ? I.count / 3 : P.count / 3;
  const tris = new Uint32Array(nT * 3);
  const flip = o.matrixWorld.determinant() < 0;
  for (let t = 0; t < nT; t++) {
    const a = I ? I.getX(t * 3) : t * 3, b = I ? I.getX(t * 3 + 1) : t * 3 + 1, c = I ? I.getX(t * 3 + 2) : t * 3 + 2;
    tris[t * 3] = a; tris[t * 3 + 1] = flip ? c : b; tris[t * 3 + 2] = flip ? b : c;
  }
  const m = Array.isArray(o.material) ? o.material[0] : o.material;
  return { i, name: o.name || (o.parent && o.parent.name) || '', mat: (m && m.name) || '', pos, nor, tris, hasN: !!N };
}).filter(m => m.tris.length > 0);

// ---- turn / scale / centre the whole model ----
if (MODEL.transform) {
  const box = new THREE.Box3();
  baked.forEach(m => { const v = new THREE.Vector3(); for (let k = 0; k < m.pos.length; k += 3) box.expandByPoint(v.fromArray(m.pos, k)); });
  const T = MODEL.transform(box, THREE);
  const nT = new THREE.Matrix3().getNormalMatrix(T);
  const flip = T.determinant() < 0;
  const v = new THREE.Vector3();
  baked.forEach(m => {
    for (let k = 0; k < m.pos.length; k += 3) v.fromArray(m.pos, k).applyMatrix4(T).toArray(m.pos, k);
    for (let k = 0; k < m.nor.length; k += 3) v.fromArray(m.nor, k).applyMatrix3(nT).normalize().toArray(m.nor, k);
    if (flip) for (let t = 0; t < m.tris.length; t += 3) { const b = m.tris[t + 1]; m.tris[t + 1] = m.tris[t + 2]; m.tris[t + 2] = b; }
  });
}

// ---- connected pieces of a mesh (vertices at the same place count as one) ----
function components(m) {
  const key = new Map(), id = new Int32Array(m.pos.length / 3);
  let n = 0;
  for (let k = 0; k < id.length; k++) {
    const s = Math.round(m.pos[k * 3] * 1000) + ',' + Math.round(m.pos[k * 3 + 1] * 1000) + ',' + Math.round(m.pos[k * 3 + 2] * 1000);
    let j = key.get(s);
    if (j === undefined) { j = n++; key.set(s, j); }
    id[k] = j;
  }
  const par = new Int32Array(n).map((_, i) => i);
  const find = a => { while (par[a] !== a) { par[a] = par[par[a]]; a = par[a]; } return a; };
  const nT = m.tris.length / 3;
  for (let t = 0; t < nT; t++) {
    const a = id[m.tris[t * 3]], b = id[m.tris[t * 3 + 1]], c = id[m.tris[t * 3 + 2]];
    par[find(a)] = find(b); par[find(b)] = find(c);
  }
  const root = new Int32Array(nT);
  for (let t = 0; t < nT; t++) root[t] = find(id[m.tris[t * 3]]);
  return root;   // one number per triangle: which piece it belongs to
}

// ---- drop pieces that are left-overs of the author (e.g. stub cylinders inside the block) ----
if (STUB) {
  const m = baked.find(b => b.i === STUB.mesh);
  const comp = components(m), box = new Map(), v = new THREE.Vector3();
  comp.forEach((r, t) => {
    let b = box.get(r);
    if (!b) box.set(r, b = new THREE.Box3());
    for (let k = 0; k < 3; k++) b.expandByPoint(v.fromArray(m.pos, m.tris[t * 3 + k] * 3));
  });
  const bad = new Set();
  box.forEach((b, r) => {
    const sz = b.getSize(new THREE.Vector3());
    if (STUB.size.every((s, a) => Math.abs(sz.getComponent(a) - s) < 0.4)) bad.add(r);
  });
  const keep = [];
  comp.forEach((r, t) => { if (!bad.has(r)) keep.push(m.tris[t * 3], m.tris[t * 3 + 1], m.tris[t * 3 + 2]); });
  console.log('dropped', (m.tris.length - keep.length) / 3, 'stub triangles');
  m.tris = Uint32Array.from(keep);
}

// ---- optionally split the meshes into their connected pieces ----
if (MODEL.split) {
  const out = [];
  baked.forEach(m => {
    if (!MODEL.split(m)) { out.push(m); return; }
    const comp = components(m), lists = new Map();
    comp.forEach((r, t) => {
      let l = lists.get(r);
      if (!l) lists.set(r, l = []);
      l.push(m.tris[t * 3], m.tris[t * 3 + 1], m.tris[t * 3 + 2]);
    });
    lists.forEach(l => out.push({ ...m, tris: Uint32Array.from(l) }));
  });
  baked = out;
  baked.forEach((m, i) => { m.i = i; });
}

// ---- describe every mesh: size, centre, box ----
const infos = baked.map(m => {
  const bb = new THREE.Box3(), v = new THREE.Vector3();
  for (let k = 0; k < m.tris.length; k++) bb.expandByPoint(v.fromArray(m.pos, m.tris[k] * 3));
  return { ...m, nv: m.tris.length, c: bb.getCenter(new THREE.Vector3()), s: bb.getSize(new THREE.Vector3()), min: bb.min.clone(), max: bb.max.clone() };
}).filter(m => m.s.lengthSq() > 0);

// ---- group them ----
if (process.env.ENGINE_DUMP) {   // table of every piece, for working out the part groups
  const f = v => v.toArray().map(x => x.toFixed(1)).join(',');
  fs.writeFileSync(process.env.ENGINE_DUMP, infos.map(m => `${m.i} ${m.name} ${m.nv / 3} c ${f(m.c)} s ${f(m.s)} ${m.mat}`).join('\n'));
}
infos.forEach(m => Object.assign(m, classify(m)));
const boxDist = (a, b) => {   // gap between two boxes (0 when they touch)
  const dx = Math.max(0, a.min.x - b.max.x, b.min.x - a.max.x), dy = Math.max(0, a.min.y - b.max.y, b.min.y - a.max.y), dz = Math.max(0, a.min.z - b.max.z, b.min.z - a.max.z);
  return Math.hypot(dx, dy, dz);
};
// pieces without a group take the group of the nearest named piece
const anchors = infos.filter(m => m.group);
infos.filter(m => !m.group).forEach(m => {
  let best = null, bd = 1e9;
  anchors.forEach(a => { const d = boxDist(m, a); if (d < bd) { bd = d; best = a; } });
  m.group = best ? best.group : 'other';
  if (best && best.sec !== undefined && m.sec === undefined) m.sec = best.sec;
});
if (process.argv.includes('--debug')) {
  const cnt = {};
  infos.forEach(m => { const k = m.group + (m.sec !== undefined ? '#' + m.sec : ''); cnt[k] = (cnt[k] || 0) + 1; });
  console.log(cnt);
  fs.writeFileSync(process.env.ENGINE_DEBUG || modelName + '-groups.json', JSON.stringify(infos.map(m => ({ i: m.i, g: m.group, small: m.small, spin: m.spin, sec: m.sec }))));
  process.exit(0);
}

// ---- merge the meshes of one piece: same group, side, size class, spin and sector ----
const sideOf = c => (c.x < -0.6 ? -1 : c.x > 0.6 ? 1 : 0);
const pieces = new Map();
infos.forEach(m => {
  const sd = MODEL.side ? MODEL.side(m.c) : sideOf(m.c);
  const key = [m.group, sd, m.small ? 1 : 0, m.spin || '', m.sec ?? ''].join('|');
  if (!pieces.has(key)) pieces.set(key, { g: m.group, sd, sm: m.small ? 1 : 0, sp: m.spin || '', sec: m.sec, list: [] });
  pieces.get(key).list.push(m);
});

const Q = MODEL.weld || 2000;   // welding grid
const prods = [];
const chunks = [];
let off = 0;
const push = (typed) => {   // append a typed array to the binary part, aligned to 4 bytes
  while (off % 4) { chunks.push(Buffer.alloc(1)); off += 1; }
  const at = off;
  const b = Buffer.from(typed.buffer, typed.byteOffset, typed.byteLength);
  chunks.push(b); off += b.length;
  return at;
};

let totV = 0, totT = 0;
for (const pc of pieces.values()) {
  const pos = [], nor = [], idx = [];
  const weld = new Map();
  const bb = new THREE.Box3(), v = new THREE.Vector3(), n = new THREE.Vector3();
  for (const m of pc.list) {
    const map = new Map();   // old vertex number -> new vertex number
    for (let t = 0; t < m.tris.length; t += 3) {
      // flat normal for meshes without normals
      let fn = null;
      if (!m.hasN) {
        const a = new THREE.Vector3().fromArray(m.pos, m.tris[t] * 3), b = new THREE.Vector3().fromArray(m.pos, m.tris[t + 1] * 3), c = new THREE.Vector3().fromArray(m.pos, m.tris[t + 2] * 3);
        fn = b.sub(a).cross(c.sub(a)).normalize();
      }
      const ids = [0, 1, 2].map(k => {
        const vi = m.tris[t + k];
        v.fromArray(m.pos, vi * 3);
        if (fn) n.copy(fn); else n.fromArray(m.nor, vi * 3);
        const nx = Math.round(n.x * 127), ny = Math.round(n.y * 127), nz = Math.round(n.z * 127);
        const key = Math.round(v.x * Q) + ',' + Math.round(v.y * Q) + ',' + Math.round(v.z * Q) + ',' + nx + ',' + ny + ',' + nz;
        let id = weld.get(key);
        if (id === undefined) { id = pos.length / 3; weld.set(key, id); pos.push(v.x, v.y, v.z); nor.push(nx, ny, nz); bb.expandByPoint(v); }
        return id;
      });
      if (ids[0] === ids[1] || ids[1] === ids[2] || ids[0] === ids[2]) continue;   // collapsed by welding
      idx.push(ids[0], ids[1], ids[2]);
    }
  }
  const nv = pos.length / 3, nt = idx.length / 3;
  if (!nt) continue;
  // 16-bit positions inside the piece's own box
  const bmin = bb.min.toArray(), size = bb.getSize(new THREE.Vector3()).toArray();
  const sc = size.map(s => (s > 0 ? s / 65535 : 1));
  const q = new Uint16Array(nv * 3);
  for (let k = 0; k < nv; k++) for (let a = 0; a < 3; a++) q[k * 3 + a] = Math.round((pos[k * 3 + a] - bmin[a]) / sc[a]);
  const nn = new Int8Array(nor);
  const idx16 = nv < 65536;
  const ii = idx16 ? new Uint16Array(idx) : new Uint32Array(idx);
  const c = bb.getCenter(new THREE.Vector3()).toArray();
  const pr = { g: pc.g, sd: pc.sd, sm: pc.sm, sp: pc.sp, nv, nt, idx16, bmin, sc, bb: [...bb.min.toArray(), ...bb.max.toArray()], c };
  if (pc.sec !== undefined) pr.sec = pc.sec;
  pr.op = push(q); pr.on = push(nn); pr.oi = push(ii);
  if (pc.sp) {   // the part turns about a line along z through (cx, cy)
    const sp = SPIN[pc.sp];
    pr.pivot = sp.pivot || [c[0], c[1]];
    pr.ratio = sp.ratio;
  }
  prods.push(pr);
  totV += nv; totT += nt;
}

// ---- write: [4-byte JSON length][JSON][binary], gzip, base64 ----
let json = JSON.stringify({ prods });
while ((4 + Buffer.byteLength(json)) % 4) json += ' ';
const head = Buffer.alloc(4); head.writeUInt32LE(Buffer.byteLength(json));
const all = Buffer.concat([head, Buffer.from(json), ...chunks]);
const gz = zlib.gzipSync(all, { level: 9 });
const out = path.resolve('data', MODEL.out);
fs.writeFileSync(out, `// ${MODEL.out} - ${MODEL.label} mesh (gzip + base64), made by tools/convert-engine.mjs. Do not edit.\nwindow.${MODEL.global} = "` + gz.toString('base64') + '";\n');
console.log(`pieces ${prods.length}, vertices ${totV}, triangles ${totT}, raw ${(all.length / 1e6).toFixed(2)} MB, file ${(fs.statSync(out).size / 1e6).toFixed(2)} MB`);
