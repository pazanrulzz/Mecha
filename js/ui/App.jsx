// App.jsx - the whole interface, built with React and shadcn/ui (dark mode)
import React from 'react';
import { PanelRightClose, PanelRightOpen, Loader2 } from 'lucide-react';
import { useUI } from './store.js';
import { togglePanel, setExplodeUI } from './panel.js';
import { setView } from './interaction.js';
import { switchTo } from './nav.js';
import SidePanel, { PANEL_W } from './SidePanel.jsx';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs.jsx';
import { Button, buttonVariants } from '../components/ui/button.jsx';
import { Slider } from '../components/ui/slider.jsx';
import { cn } from '../lib/utils.js';

const ENGINES = [['ferrari', 'Ferrari V12'], ['db605', 'Mercedes DB 605']];

// Top bar: title, engine switch and the panel button
function TopBar() {
  const id = useUI(s => s.engine.id);
  const open = useUI(s => s.panelOpen);
  return (
    <header className="fixed inset-x-0 top-0 z-30 flex h-12 items-center gap-4 border-b bg-background/90 px-4 backdrop-blur">
      <span className="text-sm font-semibold tracking-tight"><span className="text-muted-foreground">3D</span> Engine Viewer</span>
      <Tabs value={id} onValueChange={switchTo}>
        <TabsList className="h-8">
          {ENGINES.map(([k, label]) => <TabsTrigger key={k} value={k} className="h-6">{label}</TabsTrigger>)}
        </TabsList>
      </Tabs>
      <Button variant="ghost" size="icon" className="ml-auto" aria-label={open ? 'Hide details panel' : 'Show details panel'} title={open ? 'Hide details panel' : 'Show details panel'} onClick={togglePanel}>
        {open ? <PanelRightClose /> : <PanelRightOpen />}
      </Button>
    </header>
  );
}

// A row that floats over the 3D view and moves aside for the panel
function Float({ className, children }) {
  const open = useUI(s => s.panelOpen);
  return (
    <div className={cn('pointer-events-none fixed left-0 z-10 flex justify-center transition-[right] duration-300', className)} style={{ right: open ? PANEL_W : 0 }}>
      {children}
    </div>
  );
}

// Solid / Cutaway switch
function ViewSwitch() {
  const view = useUI(s => s.view);
  return (
    <Float className="top-[4.25rem]">
      <Tabs value={view} onValueChange={setView} className="pointer-events-auto">
        <TabsList className="border bg-background/90 backdrop-blur">
          <TabsTrigger value="solid" className="w-24">Solid</TabsTrigger>
          <TabsTrigger value="cut" className="w-24">Cutaway</TabsTrigger>
        </TabsList>
      </Tabs>
    </Float>
  );
}

// Exploded view slider (bottom)
function ExplodeBar() {
  const v = useUI(s => s.explode);
  return (
    <Float className="bottom-6">
      <div className="pointer-events-auto w-[min(520px,calc(100%-2rem))] rounded-xl border bg-background/90 px-4 py-3 backdrop-blur">
        <div className="mb-3 flex justify-between text-xs uppercase tracking-widest text-muted-foreground">
          <span>Exploded view</span><span className="tabular-nums text-foreground">{Math.round(v * 100)}%</span>
        </div>
        <Slider aria-label="Exploded view" min={0} max={100} step={0.5} value={[v * 100]} onValueChange={([x]) => setExplodeUI(x / 100)} />
        <div className="mt-2 flex justify-between text-[10px] uppercase tracking-widest text-muted-foreground"><span>Assembled</span><span>Exploded</span></div>
      </div>
    </Float>
  );
}

// Model credit (CC BY needs the author named)
function Credit() {
  const id = useUI(s => s.engine.id);
  if (id !== 'db605') return null;
  const link = cn(buttonVariants({ variant: 'link' }), 'h-auto p-0 text-xs');
  return (
    <p className="fixed left-4 top-[4.25rem] z-10 max-w-[220px] text-xs leading-relaxed text-muted-foreground">
      Model: <a className={link} href="https://www.thingiverse.com/thing:6028826" target="_blank" rel="noopener">DB 605D by HQUARTAROLO</a> (Josep Calvo) ·{' '}
      <a className={link} href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY</a>
    </p>
  );
}

// "Loading…" message in the middle
function Loading() {
  const l = useUI(s => s.loading);
  const open = useUI(s => s.panelOpen);
  if (!l) return null;
  return (
    <Float className="inset-y-0 items-center">
      <div className={cn('flex items-center gap-2 text-sm', l.status === 'error' ? 'text-red-400' : 'text-muted-foreground')}>
        {l.status !== 'error' && <Loader2 className="size-4 animate-spin" />}{l.text}
      </div>
    </Float>
  );
}

// Hover label: a dot on the part, a line and a button with its name (moved by tooltip.js)
const HoverLabel = React.memo(function HoverLabel() {
  return (
    <>
      <svg id="tipsvg" aria-hidden="true"><polyline id="tipline" points="" /><circle id="tipdot" r="4" cx="-10" cy="-10" /></svg>
      <button id="tipbox" type="button" className={buttonVariants({ variant: 'default' })} hidden />
    </>
  );
});

export default function App() {
  return (
    <>
      <TopBar />
      <ViewSwitch />
      <Credit />
      <Loading />
      <HoverLabel />
      <ExplodeBar />
      <SidePanel />
    </>
  );
}
