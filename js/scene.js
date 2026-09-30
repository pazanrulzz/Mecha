// scene.js - renderer, scene, camera, orbit controls and lights
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// ---- renderer ----
export const canvas = document.getElementById('c');
export const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setClearColor(0x000000, 1);                  // pure black background
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;     // soft shadow edges
renderer.toneMapping = THREE.ACESFilmicToneMapping;   // film-like colours
renderer.toneMappingExposure = 1.0;
renderer.localClippingEnabled = true;                 // needed for the cutaway

// ---- scene ----
export const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// Small "photo studio" made of bright panels. Metal reflects it.
function makeStudioEnv() {
  const e = new THREE.Scene();
  // dark room around everything
  e.add(new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100), new THREE.MeshBasicMaterial({ color: 0x050506, side: THREE.BackSide })));
  // add one glowing panel (width, height, colour, brightness, position)
  const panel = (w, h, col, k, pos) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(col).multiplyScalar(k), side: THREE.DoubleSide }));
    m.position.set(...pos);
    m.lookAt(0, 0, 0);
    e.add(m);
  };
  panel(46, 30, 0xffffff, 7, [0, 44, 0]);       // big top light
  panel(10, 60, 0xbfd6ff, 5, [-46, 8, 6]);      // cool strip on the left
  panel(10, 60, 0xffd9b0, 4, [46, 8, -6]);      // warm strip on the right
  panel(50, 8, 0xffffff, 3, [0, 14, -46]);      // strip at the back
  panel(40, 6, 0xffb27a, 1.4, [0, -10, 46]);    // low warm light at the front
  return e;
}
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(makeStudioEnv(), 0.035).texture;
scene.environmentIntensity = 1.0;
scene.add(new THREE.HemisphereLight(0xbfd0ff, 0x1a1008, 0.25));   // soft sky light

// ---- camera ----
export const camera = new THREE.PerspectiveCamera(34, 1, 1, 2500);
camera.position.set(80, 50, 110);

// ---- mouse controls (drag = rotate, wheel = zoom) ----
export const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 14, 0);
controls.enableDamping = true;      // smooth stop
controls.dampingFactor = 0.07;
controls.minDistance = 35;
controls.maxDistance = 640;
controls.rotateSpeed = 0.8;
controls.zoomSpeed = 0.9;
controls.autoRotate = true;         // slow spin until the user touches it
controls.autoRotateSpeed = 0.9;
controls.addEventListener('start', () => { controls.autoRotate = false; });
controls.update();

// ---- lights ----
// Main light: casts the shadows
export const key = new THREE.DirectionalLight(0xfff1e0, 1.9);
key.position.set(90, 170, 110);
key.castShadow = true;
key.shadow.mapSize.set(4096, 4096);
Object.assign(key.shadow.camera, { left: -62, right: 62, top: 62, bottom: -62, near: 20, far: 420 });
key.shadow.bias = -0.0004;
key.shadow.normalBias = 0.25;
key.shadow.radius = 2.5;
scene.add(key);

// Blue light from behind (rim light)
const rim = new THREE.DirectionalLight(0x9fc4ff, 1.7);
rim.position.set(-130, 70, -120);
scene.add(rim);

// Soft warm fill from the front-left
const fill = new THREE.DirectionalLight(0xffe6d0, 0.7);
fill.position.set(-120, 30, 120);
scene.add(fill);

// Weak red light from below
const under = new THREE.DirectionalLight(0xff5a3c, 0.45);
under.position.set(20, -80, 60);
scene.add(under);
