import { useEffect, useRef, useState } from 'react';
import { smoothScrollTo } from '../../hooks/useReveal';

/** Thin gradient bar at the top of the viewport showing scroll progress */
export function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max <= 0 ? 0 : (window.scrollY / max) * 100;
      if (ref.current) ref.current.style.width = pct + '%';
      raf = 0;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div ref={ref} className="scroll-progress" aria-hidden="true" />;
}

const SECTION_MARKS = [
  { id: 'inicio',     label: 'Inicio',     num: '01' },
  { id: 'nosotros',   label: 'Nosotros',   num: '02' },
  { id: 'servicios',  label: 'Servicios',  num: '03' },
  { id: 'soluciones', label: 'Plataforma', num: '04' },
  { id: 'features',   label: 'Pilares',    num: '05' },
  { id: 'stats',      label: 'Métricas',   num: '06' },
  { id: 'clientes',   label: 'Clientes',   num: '07' },
  { id: 'contacto',   label: 'Contacto',   num: '08' },
];

/** Fixed right-side section navigation rail with scroll progress indicator */
export function SideRail() {
  const [active, setActive] = useState('inicio');
  const lineRef = useRef(null);
  useEffect(() => {
    const update = () => {
      const trigger = window.scrollY + window.innerHeight * 0.35;
      let current = SECTION_MARKS[0].id;
      for (const m of SECTION_MARKS) {
        const el = document.getElementById(m.id);
        if (el && el.offsetTop <= trigger) current = m.id;
      }
      setActive(current);
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const p = total > 0 ? (window.scrollY / total) * 100 : 0;
      if (lineRef.current) lineRef.current.style.setProperty('--rail-progress', p + '%');
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return (
    <div className="side-rail" aria-hidden="true">
      <div className="side-rail-line" ref={lineRef} />
      <div className="side-rail-marks">
        {SECTION_MARKS.map((m) => (
          <button
            key={m.id}
            className={`side-rail-mark${active === m.id ? ' active' : ''}`}
            onClick={() => smoothScrollTo('#' + m.id)}
            aria-label={`Ir a ${m.label}`}
          >
            <span className="label">{m.num} · {m.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/** Curved SVG transition between two band colors */
export function SectionConnector({ from = 'white', to = 'soft' }) {
  const colors = {
    white: 'var(--bg)',
    soft:  'var(--bg-soft)',
    blue:  'var(--blue-700)',
    deep:  'var(--blue-900)',
  };
  return (
    <div className="section-connector" style={{ background: colors[from] }} aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,0 C 360,120 1080,120 1440,0 L 1440,120 L 0,120 Z" style={{ fill: colors[to] }} />
      </svg>
    </div>
  );
}

/** Animated marquee strip used as a section divider */
export function MarqueeDivider({ items, italicEvery = 3 }) {
  const star = (
    <span className="star" aria-hidden="true">
      <svg viewBox="0 0 22 22" width="18" height="18" fill="currentColor">
        <circle cx="11" cy="11" r="3" />
        <circle cx="11" cy="11" r="9" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    </span>
  );
  return (
    <div className="divider-marquee">
      <div className="divider-track">
        {[0, 1].map((k) => (
          <span key={k}>
            {items.map((it, i) => (
              <span key={i} className={i % italicEvery === italicEvery - 1 ? 'mono' : ''}>{it}</span>
            )).reduce((acc, el, i) => [...acc, el, <span key={`s${i}`}>{star}</span>], [])}
          </span>
        ))}
      </div>
    </div>
  );
}
