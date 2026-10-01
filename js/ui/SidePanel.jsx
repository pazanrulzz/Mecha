// SidePanel.jsx - the right side panel (shadcn/ui): rev slider, live numbers and the info card
import React from 'react';
import { useUI } from './store.js';
import { setRev, handlers } from './panel.js';
import { INFO } from './info.js';
import './info-db605.js';   // adds the DB 605 texts to INFO
import { fmt } from '../config.js';
import { Slider } from '../components/ui/slider.jsx';
import { Button } from '../components/ui/button.jsx';
import { Card, CardContent } from '../components/ui/card.jsx';
import { Progress } from '../components/ui/progress.jsx';
import { Badge } from '../components/ui/badge.jsx';
import { Separator } from '../components/ui/separator.jsx';

export const PANEL_W = 'min(360px, 88vw)';

const Eyebrow = ({ children }) => <p className="mb-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">{children}</p>;

// Engine speed, presets and live numbers
function Revs() {
  const engine = useUI(s => s.engine);
  const rev = useUI(s => s.rev);
  const read = useUI(s => s.read);
  const heatText = read.heat > 0.6 ? 'Glowing' : read.heat > 0.15 ? 'Warming' : 'Cold';
  return (
    <section className="p-4">
      <Eyebrow>Engine speed</Eyebrow>
      <div className="flex items-baseline gap-2 tabular-nums">
        <span className="text-5xl font-light leading-none">{fmt(read.rpm)}</span>
        <small className="text-xs uppercase tracking-widest text-muted-foreground">rpm</small>
      </div>
      <Slider className="mt-5" aria-label="Engine speed" min={engine.idle} max={engine.max} step={10} value={[rev]} onValueChange={([v]) => setRev(v)} />
      <div className="mt-2 flex justify-between text-[10px] uppercase tracking-widest text-muted-foreground"><span>Idle</span><span>Redline</span></div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {['Idle', 'Cruise', 'Max'].map((label, i) => (
          <Button key={label} variant="outline" size="sm" onClick={() => setRev(engine.presets[i])}>{label}</Button>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[[fmt(read.temp), 'Exhaust °C'], [fmt(read.spark), 'Sparks / s'], [fmt(read.piston, 1), 'Piston m/s']].map(([v, l]) => (
          <Card key={l}><CardContent>
            <b className="block text-xl font-medium tabular-nums">{v}</b>
            <span className="text-[10px] uppercase tracking-wide text-muted-foreground">{l}</span>
          </CardContent></Card>
        ))}
      </div>
      <div className="mt-4 flex justify-between text-xs"><span className="text-muted-foreground">Exhaust heat</span><span>{heatText}</span></div>
      <Progress className="mt-2 h-1.5" value={Math.round(read.heat * 100)} indicatorClassName="bg-gradient-to-r from-orange-900 via-orange-500 to-amber-200" />
    </section>
  );
}

// Details of the selected part
function InfoCard() {
  const key = useUI(s => s.selected);
  const note = useUI(s => s.engine.note);
  useUI(s => s.read);   // numbers that depend on the rpm refresh with the readouts
  if (!key || !INFO[key]) {
    return (
      <section className="p-4">
        <p className="text-sm leading-relaxed text-muted-foreground"><b className="text-foreground">Hover any component</b> to see its name, then click the label (or the part) to read about it here. Raise the revs to watch the exhaust heat up.</p>
      </section>
    );
  }
  const d = INFO[key];
  return (
    <section className="p-4">
      <Badge variant="outline" className="border-red-500/60 uppercase tracking-widest text-red-400">{d.tag}</Badge>
      <h2 className="mb-2 mt-3 text-xl font-semibold tracking-tight">{d.name}</h2>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
      <div className="text-sm">
        {d.specs.map(([label, v]) => (
          <div key={label} className="flex justify-between gap-3 border-t py-2">
            <span className="text-muted-foreground">{label}</span>
            <b className="text-right font-medium tabular-nums">{typeof v === 'function' ? v() : v}</b>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <Button size="sm" className="flex-1" onClick={() => handlers.onZoom(key)}>Zoom to part</Button>
        <Button size="sm" variant="secondary" className="flex-1" onClick={() => handlers.onSelect(null)}>Clear</Button>
      </div>
      <p className="mt-3 text-[11px] leading-snug text-muted-foreground/70">{note}</p>
    </section>
  );
}

export default function SidePanel() {
  const open = useUI(s => s.panelOpen);
  const engine = useUI(s => s.engine);
  return (
    <aside id="panel" aria-hidden={!open}
      className={'fixed bottom-0 right-0 top-12 z-20 overflow-y-auto border-l bg-background/95 backdrop-blur transition-transform duration-300 ' + (open ? '' : 'translate-x-full')}
      style={{ width: PANEL_W }}>
      <header className="px-4 pb-3 pt-4">
        <h1 className="text-sm font-semibold uppercase tracking-[0.16em]">{engine.brand}</h1>
        <p className="mt-0.5 text-xs text-muted-foreground">{engine.sub}</p>
      </header>
      <Separator />
      <Revs />
      <Separator />
      <InfoCard />
    </aside>
  );
}
