# Engine Viewer

Interactive 3D engines in the browser (Three.js / WebGL). The interface is React with shadcn/ui components (Tailwind CSS) in dark mode. Use the bar at the top to switch between the Ferrari V12 and the Mercedes-Benz DB 605.

## Run it
Double-click `index.html`. No server is needed.

## Folder map
```
index.html            page shell (canvas + the place React draws into)
css/style.css         Tailwind input: shadcn dark theme colours + hover label styles
tailwind.config.js    Tailwind setup (shadcn colour tokens)
data/engine-data.js   the Ferrari V12 mesh (packed data, do not edit)
data/db605-data.js    the Mercedes DB 605 mesh (loaded when you first pick it)
dist/app.js           built app (made from js/ - do not edit)
dist/app.css          built styles (Tailwind, from css/style.css)
js/
  main.js             starts the app + animation loop
  engines.js          the list of engines and which one is shown
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
    db605.js          Mercedes DB 605: loads and builds the model
  effects/
    particles.js      hot air wisps + heat lights
    postprocessing.js ambient occlusion, bloom, final image
  components/ui/      shadcn/ui components (button, slider, tabs, badge, card, progress, separator)
  lib/utils.js        shadcn helper (cn)
  ui/
    store.js          shared state read by the React interface
    App.jsx           React interface: top bar, view switch, explode slider, credit
    SidePanel.jsx     React side panel: rev slider, numbers, info card
    mount.jsx         draws the React interface into the page
    panel.js          links the 3D code to the side panel state
    interaction.js    hover, click to select, highlight, camera moves
    tooltip.js        hover label (line + popover with the part name)
    info.js           text for each Ferrari part
    info-db605.js     text for each DB 605 part
    nav.js            switching between engines
```

## Change the code
`index.html` loads `dist/app.js`, which is built from `js/`. After editing a file in `js/`:

```
npm install     (first time only: Three.js, React, Radix/shadcn, Tailwind, esbuild)
npm run build   (or: npm run watch)
```
Then reload `index.html`.

## Credits
The Mercedes-Benz DB 605D model is "Mercedes-Benz engine DB 605D - Messerschmitt Bf109" by HQUARTAROLO on Thingiverse (https://www.thingiverse.com/thing:6028826), based on the work of Josep Calvo, licensed CC BY. It was converted to a compact mesh for this viewer (parts split and grouped, normals recomputed).
