// loader.js - reads the CAD engine data and builds the 3D meshes
import * as THREE from 'three';
import { tri, partMeshes } from '../geometry.js';
import { partOf, partMat, uvK, noShadow, distinctMats } from './parts.js';
import { installCut, cutMats } from './cutaway.js';
import { eng, A, CX, CY } from './rig.js';
import { buildProcedural } from './procedural.js';
import { buildExplode } from './explode.js';

// Read the packed data: gzip + base64 -> binary buffer
async function readData() {
  const b64 = window.ENGINE_DATA;
  if (!b64) throw new Error('data/engine-data.js was not loaded');
  const bin = Uint8Array.from(atob(b64), c => c.charCodeAt(0));
  const stream = new Blob([bin]).stream().pipeThrough(new DecompressionStream('gzip'));
  return new Response(stream).arrayBuffer();
}

export async function loadEngine() {
  const buf = await readData();

  // First 4 bytes = size of the JSON list that describes every part
  const jsonLen = new DataView(buf).getUint32(0, true);
  const man = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, 4, jsonLen)));
  const base = 4 + jsonLen;   // where the binary mesh data starts

  // Group the instances (copies of a part) by product
  const byKey = {};
  man.insts.forEach(it => { (byKey[it.key] ||= []).push(it); });

  // ---- build one InstancedMesh for every product ----
  const meshes = [];
  man.prods.forEach(pr => {
    const insts = byKey[pr.key];
    if (!insts) return;
    const nv = pr.nv;

    // positions are stored as 16-bit numbers and normals as 8-bit: unpack them
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

    // pick the part group, texture coordinates and material
    const part = partOf(pr.name);
    tri(geo, uvK[part] ?? 0.012);
    geo.computeBoundingBox();
    geo.computeBoundingSphere();

    const im = new THREE.InstancedMesh(geo, partMat[part], insts.length);
    im.userData.part = part;
    im.userData.name = pr.name;
    im.castShadow = !noShadow.has(part);
    im.receiveShadow = true;
    im.frustumCulled = false;

    // place every copy using its 3x4 matrix from the CAD file
    const list = [];
    insts.forEach((it, i) => {
      const m = it.m;
      const M0 = new THREE.Matrix4().set(m[0], m[3], m[6], m[9], m[1], m[4], m[7], m[10], m[2], m[5], m[8], m[11], 0, 0, 0, 1);
      im.setMatrixAt(i, M0);
      list.push({ i, M0, path: it.path });
    });
    im.instanceMatrix.needsUpdate = true;
    im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);   // matrices change every frame

    eng.add(im);
    (partMeshes[part] ||= []).push(im);
    meshes.push({ name: pr.name, im, list, geo });
  });

  // make every material cut-able
  distinctMats().forEach(m => { if (!cutMats.has(m)) installCut(m); });

  setupKinematics(meshes);
  buildProcedural();      // gaskets and exhaust (not in the CAD file)
  buildExplode(meshes);   // remember where each part goes when exploded
  A.ready = true;

  const ld = document.getElementById('loading');
  if (ld) ld.remove();
  window.__anim = A;      // handy for debugging
}

// Find each piston's rod and pin, and work out the crank geometry
function setupKinematics(meshes) {
  const by = n => meshes.find(m => m.name === n);
  const P3 = M0 => new THREE.Vector3().setFromMatrixPosition(M0);          // position of a matrix
  const col = (M0, c) => new THREE.Vector3().setFromMatrixColumn(M0, c);   // one axis of a matrix
  const pist = by('FERRARI_PISTON'), rod = by('FERRARI_CONROD'), pin = by('FERRARI_GUDGEON_PIN');
  const YB = 24.1;   // distance from the rod origin to its big end

  pist.list.forEach(pi => {
    const P0 = P3(pi.M0);
    const ay = col(pi.M0, 1);
    const a = new THREE.Vector2(ay.x, ay.y).normalize();   // direction the piston moves
    const b = new THREE.Vector2(-a.y, a.x);                // sideways direction

    // find the connecting rod whose small end sits on this piston
    let best = null, bd = 1e9;
    rod.list.forEach(ri => {
      const O = P3(ri.M0), y0 = col(ri.M0, 1);
      const d = Math.hypot(O.x + y0.x * (YB + 136.8) - P0.x, O.y + y0.y * (YB + 136.8) - P0.y, O.z - P0.z);
      if (d < bd) { bd = d; best = ri; }
    });
    const y0 = col(best.M0, 1), O0 = P3(best.M0);
    const Q0 = new THREE.Vector2(O0.x + y0.x * YB, O0.y + y0.y * YB);   // big end centre
    const rel = new THREE.Vector2(P0.x - CX, P0.y - CY);

    // find the gudgeon pin closest to this piston
    const pinM = pin.list.reduce((m, c) => (P3(c.M0).distanceTo(P0) < P3(m.M0).distanceTo(P0) ? c : m));

    A.pistons.push({
      pi, ri: best, ni: pinM, a, b, P0, O0, Q0,
      r: Math.hypot(Q0.x - CX, Q0.y - CY),             // crank throw radius
      l: Math.hypot(P0.x - Q0.x, P0.y - Q0.y),         // rod length
      th0: Math.atan2(Q0.y - CY, Q0.x - CX),           // start angle of the crank pin
      off: rel.dot(b), s0: rel.dot(a),
      phi0: Math.atan2(y0.y, y0.x),                    // start angle of the rod
      oq: new THREE.Vector3(O0.x - Q0.x, O0.y - Q0.y, 0),
    });
  });
  A.pmesh = pist.im; A.rmesh = rod.im; A.nmesh = pin.im;

  // Parts that only spin around the crank axis. ratio = speed compared with the crank.
  const centreOf = (mesh, M0) => mesh.geo.boundingBox.getCenter(new THREE.Vector3()).applyMatrix4(M0);
  const rot = (name, ratio) => {
    const mm = by(name);
    if (!mm) return;
    mm.list.forEach(it => {
      const c = centreOf(mm, it.M0);
      A.rot.push({ mesh: mm.im, it, ratio, cx: c.x, cy: c.y });
    });
  };
  rot('FERRARI_CRANKSHAFT', 1);
  rot('FERRARI_GEAR_FOR_CRANKSHAFT', 1);
  rot('FERRARI_CAMSHAFT_LEFT', 0.5);     // cams turn at half speed
  rot('FERRARI_CAMSHAFT_RIGHT', 0.5);
  rot('FERRARI_GEAR_FOR_CAMSHAFT', 0.5);
  rot('FERRARI_BELT_DRIVER', 2.0);       // belt pulleys turn faster

  // screws on the pulleys spin with their pulley
  const scr = by('FERRARI_BELT_DRIVER_SCREW');
  if (scr) scr.list.forEach(it => {
    const p = P3(it.M0);
    let bestP = null, bd = 1e9;
    A.rot.filter(r => r.mesh.userData.name === 'FERRARI_BELT_DRIVER').forEach(r => {
      const d = Math.hypot(r.cx - p.x, r.cy - p.y);
      if (d < bd) { bd = d; bestP = r; }
    });
    if (bestP) A.rot.push({ mesh: scr.im, it, ratio: 2.0, cx: bestP.cx, cy: bestP.cy });
  });
}
