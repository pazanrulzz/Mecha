// procedural.js - parts that are NOT in the CAD file: head gaskets, exhaust pipes and the floor
import * as THREE from 'three';
import { scene } from '../scene.js';
import { state } from '../config.js';
import { M, glowMat, heatAttr } from '../materials.js';
import { add, tube, rbox, cylZ, V } from '../geometry.js';
import { eng, A, EMIT, CX, CY, EX, FLOOR_Y } from './rig.js';

export function buildProcedural() {
  // cylinder positions along the crank (Z)
  const zc = A.pistons.map(p => p.P0.z);
  const zMin = Math.min(...zc), zMax = Math.max(...zc);

  // do the same for both banks (sg = +1 right bank, -1 left bank)
  [1, -1].forEach(sg => {
    const a = new THREE.Vector2(sg * 0.7071, 0.7071);    // direction up the cylinder bank
    const bo = new THREE.Vector2(sg * 0.7071, -0.7071);  // direction across the bank
    const at = (s, t) => new THREE.Vector2(CX + a.x * s + bo.x * t, CY + a.y * s + bo.y * t);

    // ---- head gasket: steel sheet with a copper edge, sits on the block deck ----
    state.part = 'head-gasket';
    const gc = at(203, -2);
    const gm = add(eng, rbox(150, 3.0, 668, 1.0, 2, 0.01), M.gasket, gc.x, gc.y, -360);
    gm.rotation.z = -sg * Math.PI / 4;
    const gm2 = add(eng, rbox(153, 1.1, 671, 0.5, 2, 0.01), M.copper, gc.x, gc.y, -360);
    gm2.rotation.z = -sg * Math.PI / 4;

    // where these parts move to in the exploded view
    [gm, gm2].forEach(m => { m.userData.ex = { base: m.position.clone(), off: new THREE.Vector3(a.x * 30, a.y * 30, 0) }; });
    const headOff = new THREE.Vector3(a.x * 240, a.y * 240, 0);
    const primOff = headOff.clone().add(new THREE.Vector3(bo.x * 110, bo.y * 110, 0));
    const collOff = headOff.clone().add(new THREE.Vector3(bo.x * 270, bo.y * 270, 110));
    // give every mesh added since index n0 an explode offset
    const tagEx = (n0, offv) => {
      for (let i = n0; i < eng.children.length; i++) {
        const m = eng.children[i];
        m.userData.ex = { base: m.position.clone(), off: offv };
      }
    };

    // ---- exhaust primary pipes: one per cylinder, from the head down to the collector ----
    state.part = 'exhaust-primaries';
    const bankPist = A.pistons.filter(p => Math.sign(p.a.x) === sg);
    const zoff = sg > 0 ? 8.75 : -9.0;   // small sideways shift to line up with the exhaust port
    const heatColor = new THREE.Color();
    // colours of heat-tinted stainless steel
    const steel = new THREE.Color(0xcfd2d8), blue = new THREE.Color(0x3a4c96), gold = new THREE.Color(0xd2a545), plum = new THREE.Color(0x5b3b73);
    const tint = t => {
      if (t < 0.12) return heatColor.copy(plum).lerp(blue, t / 0.12).clone();
      if (t < 0.3) return heatColor.copy(blue).lerp(gold, (t - 0.12) / 0.18).clone();
      return heatColor.copy(gold).lerp(steel, Math.min(1, (t - 0.3) / 0.25)).clone();
    };
    const collX = CX + sg * 262, collY = -52;   // centre of the collector pipe

    bankPist.forEach(p => {
      const z = p.P0.z + zoff;
      const n0 = eng.children.length;
      // points the pipe passes through
      const p0 = at(225, 92), p1 = at(225, 132);
      const pts = [
        V(p0.x, p0.y, z), V(p1.x, p1.y, z),
        V(CX + sg * 292, 46, z), V(CX + sg * 288, -8, z), V(collX + sg * 3, collY + 14, z),
      ];
      // flange bolted to the exhaust port
      add(eng, rbox(20, 56, 52, 3, 2, 0.01), M.steel, at(225, 87).x, at(225, 87).y, z).rotation.z = -sg * Math.PI / 4;
      // the pipe itself (heat value gets lower along the pipe)
      add(eng, tube(pts, () => 14.5, { segs: 60, radial: 20, colorFn: t => tint(t), heatFn: t => 1.0 - 0.32 * t }), M.inox);
      // soft glow shell around the pipe
      const shell = new THREE.Mesh(tube(pts, () => 24, { segs: 40, radial: 16 }), glowMat);
      shell.renderOrder = 5;
      eng.add(shell);
      tagEx(n0, primOff);
      // remember the pipe path so hot air wisps can start on it
      const pl = new THREE.CatmullRomCurve3(pts, false, 'centripetal');
      const pa = pl.getSpacedPoints(24).map(q => q.clone().applyMatrix4(eng.matrix));
      pa.ex = primOff;
      EMIT.pipes.push(pa);
    });

    // ---- exhaust collector: joins the six pipes of one bank into one big pipe ----
    state.part = 'exhaust-collector';
    const zA = zMin - 70, zB = zMax + 60;   // front and rear end (exits at the rear, +Z)
    const H = zB - zA + 60;
    const nC = eng.children.length;
    add(eng, heatAttr(cylZ(30, 30, H, 40), (x, y, zz) => 0.55 + 0.3 * (zz + H / 2) / H), M.steelHot, collX, collY, (zA + zB) / 2);   // main pipe
    add(eng, heatAttr(new THREE.SphereGeometry(30, 32, 16), () => 0.5), M.steelHot, collX, collY, zA - 30);                           // rounded front cap
    add(eng, heatAttr(cylZ(38, 38, 12, 40), () => 0.7), M.steelHot, collX, collY, zB + 36);                                          // rear flange
    add(eng, heatAttr(cylZ(30, 30, 120, 40), () => 0.6), M.steelHot, collX, collY, zB + 102);                                        // tail pipe
    // three clamp rings
    [zA + 120, zA + 260, zB - 200].forEach((zz, i) => add(eng, new THREE.TorusGeometry(31, 2.2, 10, 40), i % 2 ? M.brass : M.darkSteel, collX, collY, zz));
    // glow shells around the collector and the tail pipe
    const gsh = new THREE.Mesh(cylZ(46, 46, H, 32), glowMat);
    gsh.position.set(collX, collY, (zA + zB) / 2);
    gsh.renderOrder = 5;
    eng.add(gsh);
    const gsh2 = new THREE.Mesh(cylZ(46, 46, 130, 32), glowMat);
    gsh2.position.set(collX, collY, zB + 100);
    gsh2.renderOrder = 5;
    eng.add(gsh2);
    tagEx(nC, collOff);
    // start line for hot air wisps along the collector
    const ca = [V(collX, collY + 24, zA).applyMatrix4(eng.matrix), V(collX, collY + 24, zB + 110).applyMatrix4(eng.matrix)];
    ca.ex = collOff;
    EMIT.colls.push(ca);
  });
  state.part = null;

  buildFloor();
}

// Dark glossy floor that fades to pure black at the edges
function buildFloor() {
  // radial fade texture used as an alpha map (white centre, black edge)
  const c = document.createElement('canvas');
  c.width = c.height = 512;
  const x = c.getContext('2d');
  const gr = x.createRadialGradient(256, 256, 0, 256, 256, 256);
  gr.addColorStop(0, '#ffffff');
  gr.addColorStop(0.3, '#505050');
  gr.addColorStop(0.65, '#101010');
  gr.addColorStop(1, '#000000');
  x.fillStyle = gr;
  x.fillRect(0, 0, 512, 512);

  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(120, 96),
    new THREE.MeshStandardMaterial({ color: 0x0b0b0d, metalness: 0.55, roughness: 0.3, transparent: true, alphaMap: new THREE.CanvasTexture(c), envMapIntensity: 0.4 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = FLOOR_Y;
  floor.receiveShadow = true;
  scene.add(floor);
  EX.floor = floor;   // moved down in the exploded view
}
