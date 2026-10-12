// sbc-core.js - builds a small-block V8 from packed mesh data. Shared by the plain engine (sbc.js) and the
// supercharged one (sbcs.js); each passes its own settings (cfg). The mesh comes from an FBX (see tools/convert-engine.mjs).
// The crankshaft, pistons, rods and camshaft are simple stand-ins built here, because the FBX is only the outside.
import * as THREE from 'three';
import { scene } from '../scene.js';
import { tri, partMeshes } from '../geometry.js';
import { M, heatMaterial, heatAttr } from '../materials.js';
import { installCut, installClip, cutMats, cutHooks } from './cutaway.js';
import { makeFloor } from './procedural.js';
import { explodeCommon } from './explode.js';
import { EX } from './rig.js';
import { heatLights } from '../effects/particles.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const UP = V(0, 1, 0);

export const mk = (base, color, extra = {}) => Object.assign(base.clone(), { color: new THREE.Color(color) }, extra);
export const paint = (color) => new THREE.MeshPhysicalMaterial({ color, metalness: 0.25, roughness: 0.42, clearcoat: 0.7, clearcoatRoughness: 0.25 });

/*
 cfg = {
   key            part-name prefix, e.g. 'sbc' (parts are called 'sbc-block', ...)
   data           { global: 'SBC_DATA', file: 'data/sbc-data.js' }
   cen, scale     centre of the engine in model units, and the scale into the scene
   bottom         lowest y of the model (the floor goes below it)
   mats()         returns { group: material } (heat materials for the exhaust groups)
   uvK            texture scale per group
   offsetFor(group, sg, sd)   explode offset of a group (model units)
   heat           { group: (x, y, z) => 0..1 } glow of the exhaust parts
   shell          groups that turn see-through in the cutaway
   wisps          group the hot-air wisps start on
   light(sg)      model-space position of the heat light on side sg
   crank          { ax: [x, y], k, zt, zp, zoff, camY } - crank axis, size factor (1 = 350 cu in), first throw z, throw spacing
   cam            { pos, target, cutPos, cutTarget, cutNormal }
 }
*/
export function createSbc(cfg) {
  const FLOOR_Y = (cfg.bottom - cfg.cen.y) * cfg.scale - 0.6;

  const root = new THREE.Group();   // shakes when the engine runs
  root.visible = false;
  scene.add(root);

  const eng = new THREE.Group();    // holds the meshes (model units)
  eng.matrixAutoUpdate = false;
  eng.matrix.copy(new THREE.Matrix4().makeScale(cfg.scale, cfg.scale, cfg.scale).multiply(new THREE.Matrix4().makeTranslation(-cfg.cen.x, -cfg.cen.y, -cfg.cen.z)));
  root.add(eng);

  const lin = new THREE.Matrix3().setFromMatrix4(eng.matrix);   // for exploded offsets
  const D = { ready: false, floor: null, recs: [], kin: null, spin: [], wisps: [] };
  const mats = cfg.mats();

  // ---- internals geometry (sizes follow the crank size factor k) ----
  const C = cfg.crank, k = C.k;
  const AX = V(C.ax[0], C.ax[1], 0);
  const RC = 2.0 * k, RL = 6.6 * k;                 // crank radius, rod length
  const PHASE = [0, 90, 270, 180].map(d => d * Math.PI / 180);   // cross-plane crank throw angles, front to rear
  const CAM_Y = AX.y + C.camDy;

  async function readData() {
    const b64 = window[cfg.data.global];
    if (!b64) throw new Error(cfg.data.file + ' was not loaded');
    const bin = Uint8Array.from(atob(b64), ch => ch.charCodeAt(0));
    const stream = new Blob([bin]).stream().pipeThrough(new DecompressionStream('gzip'));
    return new Response(stream).arrayBuffer();
  }

  // Load the script file with the packed mesh data (only when first needed)
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

      // exhaust parts glow when hot
      if (cfg.heat[pr.g]) heatAttr(geo, cfg.heat[pr.g]);

      const c = new THREE.Vector3(...pr.c);
      const sg = pr.sd || (c.x < 0 ? -1 : 1);
      const mesh = new THREE.Mesh(geo, pr.sm ? mats.bolt : mats[pr.g]);
      // parts that turn get a pivot on their axis (the axis runs along z)
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
      const off = cfg.offsetFor(pr.g, sg, pr.sd);
      mesh.userData.ex = { base: mesh.position.clone(), off };
      eng.add(mesh);
      (partMeshes[key] ||= []).push(mesh);
      D.recs.push(mesh);

      // hot air wisps start along the pipes
      if (pr.g === cfg.wisps && !pr.sm) {
        const pts = [];
        const step = Math.max(1, Math.floor(nv / 90));
        for (let i = 0; i < nv; i += step) pts.push(new THREE.Vector3(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]).applyMatrix4(eng.matrix));
        pts.ex = off;
        pipes.push(pts);
      }
    });
    D.wisps.push(...pipes);   // engines.js holds this same array

    buildInternals();

    // the outer shell turns see-through in the cutaway so the moving parts show; the rest is cut normally
    Object.entries(mats).forEach(([name, m]) => {
      if (cutMats.has(m)) return;
      if (cfg.shell.includes(name)) installClip(m); else installCut(m);
    });
    cutHooks.push(on => {
      cfg.shell.forEach(g => {
        const m = mats[g];
        if (!m) return;
        m.transparent = on;
        m.opacity = on ? 0.16 : 1;
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

  const internalMat = (base, color) => { const m = base.clone(); m.color = new THREE.Color(color); return m; };

  // ---- moving parts inside the shell: crankshaft, pistons, rods and camshaft ----
  // 350 cubic inch: 4.00 in bore, 3.48 in stroke, 5.7 in rods.
  function buildInternals() {
    const mCrank = internalMat(M.darkSteel, 0x8a8e95), mPist = internalMat(M.pistonAlu, 0xdfe2e8), mRod = internalMat(M.steel, 0xb8bcc4), mCam = internalMat(M.steel, 0xa5a9b0);
    mats.crank = mCrank; mats.pistons = mPist; mats.rods = mRod; mats.cam = mCam;
    const add = (geo, mat, part, parent = eng) => {
      const m = new THREE.Mesh(geo, mat);
      m.userData.part = cfg.key + '-' + part;
      m.castShadow = true;
      parent.add(m);
      (partMeshes[cfg.key + '-' + part] ||= []).push(m);
      return m;
    };
    const K = D.kin = { crank: new THREE.Group(), cam: new THREE.Group(), pistons: [] };
    K.crank.position.set(AX.x, AX.y, 0);
    K.cam.position.set(0, CAM_Y, 0);
    eng.add(K.crank, K.cam);
    const zMid = C.zt + 1.5 * C.zp;

    // crankshaft: main journal, and a pair of webs + a counterweight + a pin for every throw
    const jr = new THREE.CylinderGeometry(1.4 * k, 1.4 * k, 5.3 * C.zp, 24); jr.rotateX(Math.PI / 2);
    add(jr, mCrank, 'crank', K.crank).position.z = zMid;
    const web = new THREE.BoxGeometry(RC + 3.6 * k, 2.6 * k, 0.7 * k), cw = new THREE.CylinderGeometry(2.3 * k, 2.3 * k, 0.7 * k, 24); cw.rotateX(Math.PI / 2);
    const pin = new THREE.CylinderGeometry(1.05 * k, 1.05 * k, 2.9 * k, 20); pin.rotateX(Math.PI / 2);
    for (let t = 0; t < 4; t++) {
      const g = new THREE.Group();
      g.rotation.z = PHASE[t]; g.position.z = C.zt + C.zp * t;
      K.crank.add(g);
      [-1.1, 1.1].forEach(dz => {
        add(web, mCrank, 'crank', g).position.set(((RC - 3.6 * k + 1.6 * k) / 2) + 0.2 * k, 0, dz * k);
        add(cw, mCrank, 'crank', g).position.set(-1.6 * k, 0, dz * k);
      });
      add(pin, mCrank, 'crank', g).position.set(RC, 0, 0);
    }

    // camshaft: a journal with a pair of lobes for every cylinder (turns at half speed)
    const cj = new THREE.CylinderGeometry(0.85 * k, 0.85 * k, 4.3 * C.zp, 18); cj.rotateX(Math.PI / 2);
    add(cj, mCam, 'cam', K.cam).position.z = zMid;
    const lobe = new THREE.CylinderGeometry(0.7 * k, 0.7 * k, 0.55 * k, 16); lobe.rotateX(Math.PI / 2);
    for (let n = 0; n < 8; n++) {
      const z = C.zt + C.zp * 0.5 * n + (n % 2 ? -0.2 : 0.2) * k;
      [0, 1].forEach(j => {
        const l = add(lobe, mCam, 'cam', K.cam);
        l.position.set(0, 0, z + (j ? 0.5 : -0.5) * k);
        l.scale.set(1.5, 1, 1);
        l.rotation.z = n * 2.4 + j * 0.9;
      });
    }

    // pistons, wrist pins and connecting rods: 4 per bank, one rod from each bank on every throw
    const pg = new THREE.CylinderGeometry(2.28 * k * C.boreK, 2.28 * k * C.boreK, 3.0 * k, 28), gp = new THREE.CylinderGeometry(0.5 * k, 0.5 * k, 3.8 * k, 14); gp.rotateX(Math.PI / 2);
    const rg = new THREE.BoxGeometry(0.9 * k, 1, 0.5 * k);
    [-1, 1].forEach(sg => {
      const d = new THREE.Vector2(sg * Math.SQRT1_2, Math.SQRT1_2);
      for (let t = 0; t < 4; t++) {
        const zc = C.zt + C.zp * t + sg * C.zoff;
        const p = add(pg, mPist, 'pistons'), n = add(gp, mPist, 'pistons'), r = add(rg, mRod, 'rods');
        p.quaternion.setFromUnitVectors(UP, new THREE.Vector3(d.x, d.y, 0));
        K.pistons.push({ p, n, r, d, zc, k: t });
      }
    });
  }

  const tmpA = new THREE.Vector3(), tmpB = new THREE.Vector3(), tmpD = new THREE.Vector3();

  // Move crank, pistons, rods and the turning parts for crank angle th (radians)
  function update(th) {
    const K = D.kin;
    if (!K) return;
    const e = EX.e;
    K.crank.rotation.z = th;
    K.crank.position.set(AX.x, AX.y - 24 * e, 0);
    K.cam.rotation.z = th / 2;
    K.cam.position.set(0, CAM_Y + 16 * e, 0);
    D.spin.forEach(s => { s.mesh.rotation.z = th * s.ratio; });
    K.pistons.forEach(o => {
      const a = th + PHASE[o.k];
      const wx = RC * Math.cos(a), wy = RC * Math.sin(a);                  // crank pin, measured from the crank axis
      const wn = wx * -o.d.y + wy * o.d.x;                                 // sideways distance of the pin
      const s = wx * o.d.x + wy * o.d.y + Math.sqrt(RL * RL - wn * wn);    // piston pin distance along the bank
      const ex = o.d.x * 30 * e, ey = o.d.y * 30 * e;                      // pistons lift out of the bores
      o.p.position.set(AX.x + o.d.x * (s + 0.3 * k) + ex, AX.y + o.d.y * (s + 0.3 * k) + ey, o.zc);
      o.n.position.set(AX.x + o.d.x * s + ex, AX.y + o.d.y * s + ey, o.zc);
      // rod from the crank pin to the piston pin (it sits halfway between the lowered crank and the lifted piston)
      tmpA.set(AX.x + wx, AX.y + wy, o.zc);
      tmpB.set(AX.x + o.d.x * s, AX.y + o.d.y * s, o.zc);
      tmpD.subVectors(tmpB, tmpA);
      const len = tmpD.length();
      o.r.position.copy(tmpA).addScaledVector(tmpD, 0.5);
      o.r.position.x += o.d.x * 15 * e; o.r.position.y += o.d.y * 15 * e - 12 * e;
      o.r.quaternion.setFromUnitVectors(UP, tmpD.divideScalar(len));
      o.r.scale.set(1, len, 1);
    });
  }

  // Explode amount 0..1
  function setExplode(e) {
    e = THREE.MathUtils.clamp(e, 0, 1);
    EX.e = e;
    D.recs.forEach(m => {
      const x = m.userData.ex;
      m.position.copy(x.base).addScaledVector(x.off, e);
    });
    explodeCommon(e, D.floor, FLOOR_Y);
    // heat lights follow the pipes
    heatLights.forEach((l, i) => {
      const sg = i ? 1 : -1;
      l.position.copy(cfg.light(sg)).sub(cfg.cen).multiplyScalar(cfg.scale).addScaledVector(cfg.offsetFor(cfg.wisps, sg, sg).multiplyScalar(cfg.scale), e);
    });
  }

  return { root, eng, lin, D, load, update, setExplode, CAM: cfg.cam, floorY: FLOOR_Y };
}
