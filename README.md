# Mecha

Interactive 3D engines in the browser (Three.js / WebGL). The interface is React with shadcn/ui components (Tailwind CSS) in dark mode. Use the menus at the top to pick an engine: Auto > Ferrari V12, Chevrolet SBC V8 or Supercharged SBC V8; Aircraft > Mercedes-Benz DB 605, Nine-cylinder radial, Oberursel UR.II rotary or Turbofan jet engine.

## Run it
Double-click `index.html`. No server is needed.

## Folder map
```
index.html            page shell (canvas + the place React draws into)
css/style.css         Tailwind input: shadcn dark theme colours + hover label styles
tailwind.config.js    Tailwind setup (shadcn colour tokens)
data/engine-data.js   the Ferrari V12 mesh (packed data, do not edit)
data/db605-data.js    the Mercedes DB 605 mesh (loaded when you first pick it)
data/sbc-data.js      the Chevrolet small-block V8 mesh (loaded when you first pick it; made by tools/convert-engine.mjs)
data/sbcs-data.js     the supercharged small-block V8 mesh
data/radial-data.js   the nine-cylinder radial mesh
data/fokker-data.js   the Oberursel UR.II rotary and propeller mesh
data/turbofan-data.js the turbofan jet engine mesh
assets/logos/         brand logos (SVG) shown in the side panel
tools/                converter that turns the FBX / OBJ files into data/*.js (npm run convert:sbc, convert:sbcs, convert:radial, convert:fokker or convert:turbofan); *-groups.mjs says which mesh is which part
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
    sbc-core.js       small-block V8 builder shared by the two engines below: loads the mesh, builds crank, pistons, rods, cam and moves them
    sbc.js            Chevrolet small-block V8: its settings (materials, explode offsets, camera)
    sbcs.js           supercharged small-block V8: its settings
    radial-core.js    builder for engines with parts around a shaft: the radial, the rotary and the turbofan (spinning parts, pistons on one crank pin, explode, cutaway)
    radial.js         nine-cylinder radial: its settings
    fokker.js         Oberursel UR.II rotary: its settings (the whole engine turns)
    turbofan.js       turbofan jet engine: its settings
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
    info-sbc.js       text for each small-block V8 part
    info-sbcs.js      text for the supercharged one (reuses most of the above)
    info-radial.js    text for the radial parts
    info-fokker.js    text for the rotary parts and propeller
    info-turbofan.js  text for the turbofan parts
    nav.js            switching between engines
```

## Change the code
`index.html` loads `dist/app.js`, which is built from `js/`. After editing a file in `js/`:

```
npm install     (first time only: Three.js, React, Radix/shadcn, Tailwind, esbuild)
npm run build   (or: npm run watch)
```
Then reload `index.html`.

The engine meshes are made from 3D files kept next to this folder (`sbc-v8-engine/`, `supercharged-sbc-v8-engine-revised/`, `radial-engine/`, `focker-eiii-engine-oberursel-ui/` and `turbine-turbofan-engine-jet-engine/`). To rebuild one `data/*-data.js` after changing its `tools/*-groups.mjs` (which mesh belongs to which part): `npm run convert:sbc`, `convert:sbcs`, `convert:radial`, `convert:fokker` or `convert:turbofan`.

## Credits
The Mercedes-Benz DB 605D model is "Mercedes-Benz engine DB 605D - Messerschmitt Bf109" by HQUARTAROLO on Thingiverse (https://www.thingiverse.com/thing:6028826), based on the work of Josep Calvo, licensed CC BY. It was converted to a compact mesh for this viewer (parts split and grouped, normals recomputed).

The Chevrolet small-block V8 meshes (`sbc.fbx` and `Supercharged sbc v8 engine (revised).fbx`) were supplied with the project. Add the author's name and licence here. Their unnamed meshes (440 and 545) were baked, welded and sorted into the part groups listed in `tools/sbc-groups.mjs` and `tools/sbcs-groups.mjs`. The crankshaft, pistons, rods and camshaft in the cutaway are simple stand-ins, because the FBX has no moving parts.

The radial engine (`hw5_fix.fbx`), the Oberursel UR.II rotary with propeller (`Engine_1.fbx`) and the turbofan (`turbine-01.obj`) were also supplied with the project. Add their authors and licences here. The radial file is one single mesh, so it was split into 1,439 pieces (nine cylinders of 158 pieces and 17 shared ones); the rotary's cylinder mesh was split into 369 pieces (nine cylinders of 41).
