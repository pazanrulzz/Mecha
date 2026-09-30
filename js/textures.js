// textures.js - small textures drawn with code (no image files needed)
import * as THREE from 'three';
import { renderer } from './scene.js';

// Make a canvas full of random grey noise. octaves = [[size, strength], ...]
function noiseCanvas(size, octaves) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const x = c.getContext('2d');
  x.fillStyle = '#808080';
  x.fillRect(0, 0, size, size);
  x.imageSmoothingEnabled = true;
  x.imageSmoothingQuality = 'high';
  octaves.forEach(([n, a]) => {
    // one small noise image, stretched over the big canvas
    const t = document.createElement('canvas');
    t.width = t.height = n;
    const tx = t.getContext('2d');
    const d = tx.createImageData(n, n);
    for (let i = 0; i < n * n; i++) {
      const v = Math.random() * 255;
      d.data[i * 4] = d.data[i * 4 + 1] = d.data[i * 4 + 2] = v;
      d.data[i * 4 + 3] = 255;
    }
    tx.putImageData(d, 0, 0);
    x.globalAlpha = a;
    x.drawImage(t, 0, 0, size, size);
  });
  x.globalAlpha = 1;
  return c;
}

// Turn a canvas into a repeating texture
function texFrom(canvas) {
  const t = new THREE.CanvasTexture(canvas);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return t;
}

// Grey base colour plus noise, used as a roughness map
function roughCanvas(base, amp) {
  const n = noiseCanvas(256, [[64, 0.6], [128, 0.5], [256, 0.4]]);
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const x = c.getContext('2d');
  const g = Math.round(base * 255);
  x.fillStyle = `rgb(${g},${g},${g})`;
  x.fillRect(0, 0, 256, 256);
  x.globalAlpha = amp;
  x.drawImage(n, 0, 0);
  return c;
}

// Wrinkle bump for the red crackle paint on the valve covers
export const crackleTex = texFrom(noiseCanvas(512, [[128, 0.8], [256, 0.6], [64, 0.5], [512, 0.35]]));
// Fine roughness for polished aluminium
export const roughAlu = texFrom(roughCanvas(0.22, 0.28));
// Rougher surface for cast aluminium
export const roughCast = texFrom(roughCanvas(0.42, 0.40));
// Small bumps for cast aluminium
export const bumpCast = texFrom(noiseCanvas(256, [[64, 0.7], [128, 0.6], [256, 0.5]]));
