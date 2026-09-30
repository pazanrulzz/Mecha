// kinematics.js - moves pistons, rods and spinning parts from the crank angle
import * as THREE from 'three';
import { A, EX, CX, CY } from './rig.js';
import { applyExplodeKin } from './explode.js';

// Temporary matrices (re-used to avoid creating garbage every frame)
const tmpM = new THREE.Matrix4(), tmpR = new THREE.Matrix4(), tmpT = new THREE.Matrix4();

// th = crank angle in radians
export function updateKinematics(th) {
  if (!A.ready) return;

  // ---- slider-crank: crank pin -> connecting rod -> piston ----
  A.pistons.forEach(p => {
    const ang = p.th0 + th;                                          // crank pin angle
    const ux = p.r * Math.cos(ang), uy = p.r * Math.sin(ang);        // crank pin offset from the centre
    const qx = CX + ux, qy = CY + uy;                                // crank pin position
    const ua = ux * p.a.x + uy * p.a.y, ub = ux * p.b.x + uy * p.b.y;   // along / across the bore
    // piston height from the rod length (Pythagoras)
    const s = ua + Math.sqrt(Math.max(p.l * p.l - (p.off - ub) * (p.off - ub), 0));
    const Px = CX + p.a.x * s + p.b.x * p.off, Py = CY + p.a.y * s + p.b.y * p.off;   // piston position

    // piston and pin: slide to the new place
    tmpT.makeTranslation(Px - p.P0.x, Py - p.P0.y, 0);
    tmpM.multiplyMatrices(tmpT, p.pi.M0);
    A.pmesh.setMatrixAt(p.pi.i, tmpM);
    tmpM.multiplyMatrices(tmpT, p.ni.M0);
    A.nmesh.setMatrixAt(p.ni.i, tmpM);

    // rod: rotate around its big end, then move the big end to the crank pin
    const dphi = Math.atan2(Py - qy, Px - qx) - p.phi0;
    tmpT.makeTranslation(-p.Q0.x, -p.Q0.y, 0);
    tmpM.multiplyMatrices(tmpT, p.ri.M0);
    tmpR.makeRotationZ(dphi);
    tmpM.premultiply(tmpR);
    tmpT.makeTranslation(qx, qy, 0);
    tmpM.premultiply(tmpT);
    A.rmesh.setMatrixAt(p.ri.i, tmpM);
  });
  A.pmesh.instanceMatrix.needsUpdate = A.rmesh.instanceMatrix.needsUpdate = A.nmesh.instanceMatrix.needsUpdate = true;

  // ---- parts that just spin (crank, cams, gears, pulleys) ----
  const touched = new Set();
  A.rot.forEach(r => {
    tmpT.makeTranslation(-r.cx, -r.cy, 0);       // move the centre to the origin
    tmpM.multiplyMatrices(tmpT, r.it.M0);
    tmpR.makeRotationZ(th * r.ratio);            // spin
    tmpM.premultiply(tmpR);
    tmpT.makeTranslation(r.cx, r.cy, 0);         // move back
    tmpM.premultiply(tmpT);
    r.mesh.setMatrixAt(r.it.i, tmpM);
    touched.add(r.mesh);
  });
  touched.forEach(m => { m.instanceMatrix.needsUpdate = true; });

  // keep the exploded offsets on top of the animation
  if (EX.e > 0) applyExplodeKin();
}
