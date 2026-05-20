import { useState, useEffect, useRef, useCallback } from 'react';

const DEFAULTS = { theme: 'ink', accent: 'violet', motion: 'medium' };

const TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:260px;
    display:flex;flex-direction:column;
    background:rgba(10,12,18,.82);color:var(--fg);
    backdrop-filter:blur(24px) saturate(160%);-webkit-backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid var(--line-2);border-radius:14px;
    box-shadow:0 12px 40px rgba(0,0,0,.45);
    font:11.5px/1.4 var(--font-sans,system-ui,sans-serif);overflow:hidden}
  [data-theme="paper"] .twk-panel{background:rgba(245,244,238,.82);color:var(--ink-paper)}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none;border-bottom:.5px solid var(--line)}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:var(--fg-3);
    width:22px;height:22px;border-radius:6px;cursor:pointer;font-size:13px;line-height:1}
  .twk-x:hover{background:var(--line-2);color:var(--fg)}
  .twk-body{padding:12px 14px 14px;display:flex;flex-direction:column;gap:10px}
  .twk-sect{font-size:9.5px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;
    color:var(--fg-4);padding-top:8px}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{font-size:11.5px;font-weight:500;color:var(--fg-2)}
  .twk-seg{position:relative;display:flex;padding:2px;border-radius:7px;
    background:var(--line);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:5px;
    background:var(--bg-card-2);box-shadow:0 1px 3px rgba(0,0,0,.3);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg button{position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:var(--fg-3);font:inherit;font-size:11px;font-weight:500;
    min-height:22px;border-radius:5px;cursor:pointer;padding:4px 6px;line-height:1.2}
  .twk-seg button[aria-checked="true"]{color:var(--fg)}
  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:var(--line-strong);transition:background .15s;cursor:pointer;padding:0}
  .twk-toggle[data-on="1"]{background:var(--accent)}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}
  .twk-chips{display:flex;gap:6px;flex-wrap:wrap}
  .twk-chip{appearance:none;width:22px;height:22px;padding:0;border:2px solid transparent;
    border-radius:6px;cursor:pointer;transition:transform .12s,border-color .12s}
  .twk-chip[data-on="1"]{border-color:var(--fg);transform:scale(1.15)}
  .twk-chip:hover{transform:scale(1.1)}
`;

const ACCENT_OPTIONS = [
  { value: 'violet',   bg: 'linear-gradient(135deg,#7c4dff,#22d3ee)' },
  { value: 'electric', bg: 'linear-gradient(135deg,#4f8dff,#22d3ee)' },
  { value: 'cyan',     bg: 'linear-gradient(135deg,#22d3ee,#7c4dff)' },
  { value: 'pink',     bg: 'linear-gradient(135deg,#ec4899,#7c4dff)' },
];

function Seg({ label, value, options, onChange }) {
  const n = options.length;
  const idx = Math.max(0, options.findIndex((o) => o.value === value));
  return (
    <div className="twk-row">
      <div className="twk-lbl">{label}</div>
      <div className="twk-seg" role="radiogroup">
        <div
          className="twk-seg-thumb"
          style={{ left: `calc(2px + ${idx} * (100% - 4px) / ${n})`, width: `calc((100% - 4px) / ${n})` }}
        />
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={o.value === value}
            onClick={() => onChange(o.value)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Tweaks() {
  const [open, setOpen] = useState(false);
  const [t, setT] = useState(DEFAULTS);
  const dragRef = useRef(null);
  const offsetRef = useRef({ x: 16, y: 16 });

  const set = useCallback((key, val) => setT((prev) => ({ ...prev, [key]: val })), []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme',  t.theme  || 'ink');
    root.setAttribute('data-accent', t.accent || 'violet');
    root.setAttribute('data-motion', t.motion || 'medium');
  }, [t.theme, t.accent, t.motion]);

  const onDragStart = (e) => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX, sy = e.clientY;
    const startRight  = window.innerWidth  - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = (ev) => {
      offsetRef.current = {
        x: startRight  - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy),
      };
      panel.style.right  = offsetRef.current.x + 'px';
      panel.style.bottom = offsetRef.current.y + 'px';
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup',  up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup',   up);
  };

  return (
    <>
      <style>{TWEAKS_STYLE}</style>
      {/* Trigger button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          title="Abrir panel de tweaks"
          style={{
            position: 'fixed', right: 16, bottom: 16,
            zIndex: 2147483645,
            width: 40, height: 40,
            borderRadius: '50%',
            background: 'var(--bg-card-2)',
            border: '1px solid var(--line-2)',
            color: 'var(--fg-3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            transition: 'color .2s, border-color .2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--fg)'; e.currentTarget.style.borderColor = 'var(--accent-line)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg-3)'; e.currentTarget.style.borderColor = 'var(--line-2)'; }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8"/>
            <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>
      )}

      {open && (
        <div
          ref={dragRef}
          className="twk-panel"
          style={{ right: offsetRef.current.x, bottom: offsetRef.current.y }}
        >
          <div className="twk-hd" onMouseDown={onDragStart}>
            <b>Tweaks</b>
            <button className="twk-x" aria-label="Cerrar" onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="twk-body">
            <div className="twk-sect">Apariencia</div>

            <Seg
              label="Tema"
              value={t.theme}
              options={[{ value: 'ink', label: 'Ink' }, { value: 'paper', label: 'Paper' }]}
              onChange={(v) => set('theme', v)}
            />

            <div className="twk-row">
              <div className="twk-lbl">Acento</div>
              <div className="twk-chips">
                {ACCENT_OPTIONS.map((o) => (
                  <button
                    key={o.value}
                    type="button"
                    className="twk-chip"
                    data-on={t.accent === o.value ? '1' : '0'}
                    aria-label={o.value}
                    style={{ background: o.bg }}
                    onClick={() => set('accent', o.value)}
                  />
                ))}
              </div>
            </div>

            <div className="twk-sect">Movimiento</div>

            <Seg
              label="Intensidad"
              value={t.motion}
              options={[
                { value: 'subtle',  label: 'Sutil'  },
                { value: 'medium',  label: 'Medio'  },
                { value: 'intense', label: 'Intenso' },
              ]}
              onChange={(v) => set('motion', v)}
            />
          </div>
        </div>
      )}
    </>
  );
}
