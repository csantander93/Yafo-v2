import { useEffect, useRef } from 'react';

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

/** Fixed dot-grid with subtle parallax + fixed gradient blobs */
export function BackgroundLayer() {
  const dotsRef = useRef(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const y = window.scrollY * 0.12;
      if (dotsRef.current) dotsRef.current.style.backgroundPosition = `0 ${-y}px`;
      raf = 0;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <>
      <div className="bg-glow" aria-hidden="true" />
      <div className="bg-dots" ref={dotsRef} aria-hidden="true" />
    </>
  );
}

/** Attaches mouse-follow glow to every `.svc-card` on the page */
export function GlowCards() {
  useEffect(() => {
    const onMove = (e) => {
      const card = e.target.closest('.svc-card, .glow-card');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    document.addEventListener('mousemove', onMove);
    return () => document.removeEventListener('mousemove', onMove);
  }, []);
  return null;
}
