// geometry.js - small helpers to build shapes (used for the gaskets and exhaust)
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { state } from './config.js';

// Meshes grouped by part name (used for highlighting and zoom)
export const partMeshes = {};

// Short helper for a 3D point
export const V = (x, y, z) => new THREE.Vector3(x, y, z);

// Make UV coordinates from the vertex positions so textures never stretch. k = texture scale.
export function tri(geo, k = 0.1) {
  const p = geo.attributes.position, n = geo.attributes.normal;
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i));
    let u, v;
    // project from the axis the face points along most
    if (ax >= ay && ax >= az) { u = p.getZ(i); v = p.getY(i); }
    else if (ay >= az) { u = p.getX(i); v = p.getZ(i); }
    else { u = p.getX(i); v = p.getY(i); }
    uv[i * 2] = u * k;
    uv[i * 2 + 1] = v * k;
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return geo;
}

// Box with rounded edges
export const rbox = (w, h, d, r = 0.5, seg = 3, k = 0.1) =>
  tri(new RoundedBoxGeometry(w, h, d, seg, Math.max(0.01, Math.min(r, Math.min(w, h, d) / 2 - 0.01))), k);

// Cylinder lying along the Z axis
export const cylZ = (r0, r1, h, seg = 40) => {
  const g = new THREE.CylinderGeometry(r0, r1, h, seg);
  g.rotateX(Math.PI / 2);
  return g;
};

// Add a mesh to a parent. It is tagged with state.part so it can be picked and highlighted.
export function add(parent, geo, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, mat);
  if (state.part) {
    m.userData.part = state.part;
    (partMeshes[state.part] ||= []).push(m);
  }
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

// A curved tube that follows a list of points.
// radiusFn(t) gives the radius along the tube, colorFn(t) the colour, heatFn(t) the heat (all t = 0..1).
export function tube(points, radiusFn, { segs = 80, radial = 20, colorFn = null, heatFn = null } = {}) {
  const curve = new THREE.CatmullRomCurve3(points, false, 'centripetal');
  const geo = new THREE.TubeGeometry(curve, segs, 1, radial, false);
  const pos = geo.attributes.position;
  const ring = radial + 1;                         // vertices per ring
  const cols = colorFn ? new Float32Array(pos.count * 3) : null;
  for (let i = 0; i < pos.count; i++) {
    const t = Math.floor(i / ring) / segs;         // how far along the tube
    const c = curve.getPointAt(t);
    const r = radiusFn(t);
    // push each vertex to the wanted radius
    pos.setXYZ(i, c.x + (pos.getX(i) - c.x) * r, c.y + (pos.getY(i) - c.y) * r, c.z + (pos.getZ(i) - c.z) * r);
    if (cols) {
      const col = colorFn(t);
      cols[i * 3] = col.r; cols[i * 3 + 1] = col.g; cols[i * 3 + 2] = col.b;
    }
  }
  if (cols) geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
  if (heatFn) {
    const h = new Float32Array(pos.count);
    for (let i = 0; i < pos.count; i++) h[i] = heatFn(Math.floor(i / ring) / segs);
    geo.setAttribute('aHeat', new THREE.BufferAttribute(h, 1));
  }
  geo.computeVertexNormals();
  return geo;
}
