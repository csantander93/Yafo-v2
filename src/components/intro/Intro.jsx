import { useEffect, useRef, useState } from 'react';
import { useReveal, staggerChildren, smoothScrollTo } from '../../hooks/useReveal';

export default function Hero() {
  const sectionRef = useRef(null);
  const titleRef   = useRef(null);
  const [email, setEmail] = useState('');
  const revealRef  = useReveal();

  const setRef = (el) => { sectionRef.current = el; revealRef.current = el; };

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
