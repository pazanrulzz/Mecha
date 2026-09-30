# V12 Engine Viewer

An interactive 3D V12 engine in the browser using Three js and WebGL

## Run it

Double click `index.html`. No server is needed.

## Folder map

```
index.html            page markup (canvas, side panel, sliders)
css/style.css         all styles
data/engine-data.js   the CAD engine mesh (packed data, do not edit)
dist/app.js           built app (made from js)
js/
  main.js             starts the app + animation loop
  config.js           shared constants and live values (rpm, heat...)
  scene.js            renderer, camera, mouse controls, lights
  textures.js         small textures drawn with code
  materials.js        materials + glow shader
  geometry.js         helpers to build shapes and tubes
  model/
    rig.js            engine group and shared model data
    loader.js         reads the CAD data, builds the meshes
    parts.js          part names and materials
    procedural.js     hand-made gaskets, exhaust and floor
    kinematics.js     piston / rod / crank movement
    explode.js        exploded view
    cutaway.js        cutaway view
  effects/
    particles.js      hot air wisps + heat lights
    postprocessing.js ambient occlusion, bloom, final image
  ui/
    panel.js          side panel, sliders, info card
    interaction.js    click to select, highlight, camera moves
    info.js           text for each engine part
```

## Change the code

`index.html` loads `dist/app.js`, which is built from `js/`. After editing a file in `js/`:

```
npm install     (first time running)
npm run build   (npm run watch)
```

Then reload `index.html`.
