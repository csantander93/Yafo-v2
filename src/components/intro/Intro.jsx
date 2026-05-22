import { useEffect, useRef, useState } from 'react';
import { useReveal, staggerChildren, smoothScrollTo } from '../../hooks/useReveal';
import './Intro.css';

export default function Hero() {
  const sectionRef = useRef(null);
  const titleRef   = useRef(null);
  const canvasRef  = useRef(null);
  const [email, setEmail] = useState('');
  const revealRef  = useReveal();

  const setRef = (el) => { sectionRef.current = el; revealRef.current = el; };

  // Parallax/fade en scroll
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = titleRef.current;
      if (!el) return;
      const p = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.6)));
      el.style.transform = `scale(${1 - 0.08 * p})`;
      el.style.opacity   = String(1 - 0.45 * p);
      raf = 0;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { staggerChildren(sectionRef.current, 100, 110); }, []);

  // Red de partículas animada
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const setSize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setSize();

    const ro = new ResizeObserver(setSize);
    ro.observe(canvas);

    const makeParticles = () => {
      const n = Math.min(90, Math.floor((canvas.width * canvas.height) / 11000));
      return Array.from({ length: n }, () => ({
        x:  Math.random() * canvas.width,
        y:  Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.42,
        vy: (Math.random() - 0.5) * 0.42,
      }));
    };

    let pts = makeParticles();
    const MAX = 165;

    const frame = () => {
      const W = canvas.width, H = canvas.height;
      const isPaper = document.documentElement.dataset.theme === 'paper';

      ctx.clearRect(0, 0, W, H);

      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d  = Math.hypot(dx, dy);
          if (d < MAX) {
            const a = (1 - d / MAX) * (isPaper ? 0.22 : 0.18);
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = isPaper
              ? `rgba(65,90,160,${a})`
              : `rgba(140,170,255,${a})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      pts.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = isPaper
          ? 'rgba(65,90,160,0.28)'
          : 'rgba(140,170,255,0.32)';
        ctx.fill();
      });

      animId = requestAnimationFrame(frame);
    };

    frame();

    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    smoothScrollTo('#contacto');
    setTimeout(() => {
      const el = document.querySelector('#contacto input[type="email"]');
      if (el) { el.focus(); el.value = email; }
    }, 800);
  };

  return (
    <section id="inicio" className="hero-section" ref={setRef}>
      <div className="hero-bg" aria-hidden="true" />
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-content">

          <h1 className="hero-title reveal" ref={titleRef}>
            Protección Avanzada<br />
            para tus Activos{' '}
            <span className="grad-text">Digitales</span>.
          </h1>

          <p className="hero-sub reveal">
            Soluciones proactivas de identidad y prevención de ciberamenazas
          </p>

          <form className="hero-form reveal" onSubmit={onSubmit}>
            <input
              type="email"
              placeholder="tu@entidad.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email corporativo"
            />
            <button type="submit" className="btn btn-primary">
              Conoce Nuestros Servicios
              <svg className="arr" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path d="M2 7h10m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
