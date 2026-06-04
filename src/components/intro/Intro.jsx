import { useEffect, useRef } from 'react';
import { useReveal, Counter, SplitText, smoothScrollTo } from '../../hooks/useReveal';

function HeroCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    const setSize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();
    const ro = new ResizeObserver(setSize);
    ro.observe(canvas);

    const N = 70;
    let pts = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: 0.6 + Math.random() * 1.4,
      depth: Math.random(),
    }));
    let mouse = { x: -9999, y: -9999 };
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouse = { x: -9999, y: -9999 }; };
    const parent = canvas.parentElement;
    parent.addEventListener('mousemove', onMove);
    parent.addEventListener('mouseleave', onLeave);

    const blueLine = '10, 92, 174';
    const aquaLine = '45, 204, 205';

    const frame = () => {
      const W = canvas.offsetWidth, H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 140) {
            const a = (1 - d / 140) * 0.20;
            ctx.strokeStyle = `rgba(${blueLine}, ${a})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      pts.forEach((p) => {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const md = Math.hypot(dx, dy);
        if (md < 110 && md > 0) {
          const f = (110 - md) / 110;
          p.x += (dx / md) * f * 2.2;
          p.y += (dy / md) * f * 2.2;
        }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        const isAqua = p.depth > 0.75;
        ctx.fillStyle = isAqua
          ? `rgba(${aquaLine}, 0.85)`
          : `rgba(${blueLine}, ${0.30 + p.depth * 0.35})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(frame);
    };
    frame();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      parent.removeEventListener('mousemove', onMove);
      parent.removeEventListener('mouseleave', onLeave);
    };
  }, []);
  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />;
}

export default function Hero() {
  const ref = useReveal();
  return (
    <section id="inicio" className="hero band band-white" ref={ref}>
      <HeroCanvas />
      <div className="hero-top">
        <div className="wrap wrap-wide hero-inner">
          <h1 className="hero-title">
            <span className="ln reveal-mask">
              <SplitText mode="word">Protección</SplitText>
            </span>
            <span className="ln reveal-mask">
              <span>
                <SplitText mode="word" className="light">Avanzada </SplitText>
                <SplitText mode="word">para tus</SplitText>
              </span>
            </span>
            <span className="ln reveal-mask">
              <span>Activos <SplitText mode="word" className="grad">Digitales.</SplitText></span>
            </span>
          </h1>
        </div>
      </div>
      <div className="wrap wrap-wide">
        <div className="hero-bottom reveal">
          <p className="sub">
            Soluciones <strong>proactivas</strong> de identidad y prevención de ciberamenazas
          </p>
          <div className="num-stack">
            <div className="pair">
              <strong><Counter to={50} suffix="+" /></strong>
              <span>entidades</span>
            </div>
            <div className="pair">
              <strong><Counter to={7} /></strong>
              <span>países LATAM</span>
            </div>
            <div className="pair">
              <strong><Counter to={40} suffix="+" /></strong>
              <span>módulos</span>
            </div>
          </div>
          <a
            href="#servicios"
            className="btn btn-primary"
            onClick={(e) => { e.preventDefault(); smoothScrollTo('#servicios'); }}
          >
            Conoce Nuestros Servicios
            <svg className="arr" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M2 7h10m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
