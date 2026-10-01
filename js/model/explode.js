// explode.js - exploded view: every part slides away from the block along its own direction
import * as THREE from 'three';
import { camera, controls, key } from '../scene.js';
import { state } from '../config.js';
import { eng, A, EMIT, EX, CX, FLOOR_Y } from './rig.js';
import { heatLights, heatLightBase } from '../effects/particles.js';

// How far (in CAD mm) each part moves when fully exploded.
// "al(k)" = k mm along the cylinder bank direction. "sg" = which bank (+1 right, -1 left).
function offsetFor(name, c, sg0) {
  const V3 = (x, y, z) => new THREE.Vector3(x, y, z);
  const sg = sg0 || (Math.sign(c.x - CX) || 1);
  const al = k => V3(sg * 0.7071 * k, 0.7071 * k, 0);

  switch (name) {
    case 'FERRARI_ENGINE_BLOCK': return V3(0, 0, 0);   // the block stays in place

    // pistons, pins and rods lift out of the bores
    case 'FERRARI_PISTON': case 'FERRARI_GUDGEON_PIN': case 'FERRARI_CONROD': return al(110);

    // bottom end drops down: crank, bearing caps, oil pan and their screws
    case 'FERRARI_CRANKSHAFT': return V3(0, -90, 0);
    case 'FERRARI_GEAR_FOR_CRANKSHAFT': return V3(0, -90, -170);   // also moves to the front
    case 'FERRARI_CRANKSHAFT_CAP2': case 'FERRARI_CRANKSHAFT_CAP5': return V3(0, -170, 0);
    case 'FERRARI_DRIVERS_FOR_BLOCK_CCAPS': return V3(0, -235, 0);
    case 'FERRARI_OIL_CAP_CARTER': return V3(0, -290, 0);
    case 'FERRARI_SCREW_MEBLOCK_CARTER': return V3(0, -350, 0);
    case 'FERRARI_NUT_7': return V3(0, -410, 0);
    case 'FERRARI_SCREW_BLOCK_CARTER': return V3(0, -120, -60);

    // top end lifts off in layers (bigger number = further away)
    case 'FERRARI_MEBLOCK_VBLOCK_DRIVER': return al(150);   // head studs
    case 'FERRARI_VALVE': return al(175);
    case 'FERRARI_VALVE_BLOCK_LEFTFG': case 'FERRARI_VALVE_BLOCK_RIGHTFG': return al(240);   // cylinder heads
    case 'FERRAR_VALVE_SPRING': case 'VALVE_WASHER': case 'FERRARI_VALVES_PLATES': return al(305);
    case 'FERRARI_NUT_10': return al(330);
    case 'FERRARI_SPARKPLUG': return al(350);
    case 'FERRARI_CAMSHAFT_LEFT': case 'FERRARI_CAMSHAFT_RIGHT': return al(400);
    case 'FERRARI_GEAR_FOR_CAMSHAFT': return al(400).add(V3(0, 0, -170));
    case 'FERRARI_CAMSHAFT_CAPS': case 'FERRARI_CAM_CAP_SIDE': return al(450);
    case 'FERRARI_SCREW_CAM_CAP': case 'FERRARI_SCREW_CAP_SIDE': case 'FERRARI_SCREW_HEAD_CAM_CAP': return al(510);
    case 'FERRARI_LEFTVALVEB_CAP': case 'FERRARI_RIGHTVALVEB_CAP': return al(560);   // valve covers

    // intake goes up (the two ends also move sideways)
    case 'FERRARI_INJECTION_PIPES': return V3(0, 150, 0);
    case 'FERRARI_MAININJECTION_CAP': return V3(0, 330, 0);
    case 'FERRARI_INJECTION_SIDE_CAPS': return V3(sg * 150, 330, 0);
    case 'FERRARI_INTAKE_SYSTEM': return V3(sg * 260, 330, 0);
    case 'FERRARI_SCREW_INJECTION_BLOCK': return V3(0, 230, 0);

    // front of the engine: pulleys move forward
    case 'FERRARI_BELT_DRIVER': return V3(0, 0, -300);
    case 'FERRARI_BELT_DRIVER_SCREW': return V3(0, 0, -370);

    default: return V3(0, 0, 0);
  }
}

// Called once after loading: store an explode offset for every part instance
export function buildExplode(meshes) {
  EX.lin.setFromMatrix4(eng.matrix);

  // which instances move every frame (pistons, rods, pins, spinning parts)
  const kin = new Set();
  A.pistons.forEach(p => {
    kin.add(A.pmesh.uuid + ':' + p.pi.i);
    kin.add(A.nmesh.uuid + ':' + p.ni.i);
    kin.add(A.rmesh.uuid + ':' + p.ri.i);
  });
  A.rot.forEach(r => kin.add(r.mesh.uuid + ':' + r.it.i));

  // which bank each piston, pin and rod belongs to
  const bankOf = new Map();
  A.pistons.forEach(p => {
    const sg = Math.sign(p.a.x) || 1;
    bankOf.set(A.pmesh.uuid + ':' + p.pi.i, sg);
    bankOf.set(A.nmesh.uuid + ':' + p.ni.i, sg);
    bankOf.set(A.rmesh.uuid + ':' + p.ri.i, sg);
  });

  meshes.forEach(mm => {
    mm.list.forEach(it => {
      const id = mm.im.uuid + ':' + it.i;
      const c = mm.geo.boundingBox.getCenter(new THREE.Vector3()).applyMatrix4(it.M0);   // centre of this copy
      EX.recs.push({ im: mm.im, i: it.i, M0: it.M0, off: offsetFor(mm.name, c, bankOf.get(id)), kin: kin.has(id), name: mm.name, c });
    });
  });
}

const tmp = new THREE.Matrix4();

// Move all parts that stay still (also the hand-made gaskets and exhaust)
export function applyExplodeStatic() {
  const e = EX.e, touched = new Set();
  EX.recs.forEach(r => {
    if (r.kin) return;
    tmp.copy(r.M0);
    const t = tmp.elements;              // t[12..14] = position
    t[12] += r.off.x * e; t[13] += r.off.y * e; t[14] += r.off.z * e;
    r.im.setMatrixAt(r.i, tmp);
    touched.add(r.im);
  });
  touched.forEach(m => { m.instanceMatrix.needsUpdate = true; });
  eng.children.forEach(o => {
    const x = o.userData.ex;
    if (x) o.position.copy(x.base).addScaledVector(x.off, e);
  });
}

// Move the parts that animate. Called every frame after the kinematics.
export function applyExplodeKin() {
  const e = EX.e, touched = new Set();
  EX.recs.forEach(r => {
    if (!r.kin) return;
    r.im.getMatrixAt(r.i, tmp);
    const t = tmp.elements;
    t[12] += r.off.x * e; t[13] += r.off.y * e; t[14] += r.off.z * e;
    r.im.setMatrixAt(r.i, tmp);
    touched.add(r.im);
  });
  touched.forEach(m => { m.instanceMatrix.needsUpdate = true; });
}

// Set the explode amount (0 = assembled, 1 = fully exploded)
export function setExplode(e) {
  e = THREE.MathUtils.clamp(e, 0, 1);
  EX.e = e;
  applyExplodeStatic();

  // lower the floor so parts do not sink into it
  explodeCommon(e, EX.floor, FLOOR_Y);

  // move the orange heat lights with the exhaust collectors
  heatLights.forEach((l, k) => {
    l.position.copy(heatLightBase[k]);
    const c = EMIT.colls.find(c => Math.sign(c[0].x) === Math.sign(heatLightBase[k].x));
    if (c && c.ex) l.position.add(EX.w(c.ex));
  });
}

// Parts every engine needs when exploded: floor, shadow size and camera distance
export function explodeCommon(e, floor, floorY) {
  if (floor) floor.position.y = floorY - 42 * e;

  // make the shadow area bigger
  const sc = key.shadow.camera, ext = 62 + 60 * e;
  Object.assign(sc, { left: -ext, right: ext, top: ext, bottom: -ext, far: 420 + 200 * e });
  sc.updateProjectionMatrix();

  // pull the camera back and down so everything stays in view
  const kd = 1 + 1.05 * e, f = kd / EX.dolly;
  EX.dolly = kd;
  const dy = -6 * (e - EX.ty);
  EX.ty = e;
  camera.position.sub(controls.target).multiplyScalar(f).add(controls.target);
  controls.target.y += dy;
  camera.position.y += dy;
  if (state.fly) state.fly.toP.sub(state.fly.toT).multiplyScalar(f).add(state.fly.toT);
}
