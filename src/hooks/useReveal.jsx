import { useRef, useEffect, useState } from 'react';

/** Observes all reveal-class elements inside ref and adds the `in` class when visible */
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const targets = ref.current.querySelectorAll(
      '.reveal, .reveal-mask, .reveal-clip, .reveal-blur, .reveal-words, .reveal-chars'
    );
    if (!targets.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (e.target.classList.contains('reveal-words') || e.target.classList.contains('reveal-chars')) {
              const kids = e.target.querySelectorAll('.word, .char');
              kids.forEach((k, i) => {
                k.style.transitionDelay = (i * 35) + 'ms';
                setTimeout(() => k.classList.add('in'), 10);
              });
              e.target.classList.add('in');
            } else {
              e.target.classList.add('in');
            }
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    targets.forEach((t, i) => {
      if (!t.style.getPropertyValue('--reveal-delay') &&
          !t.classList.contains('reveal-words') &&
          !t.classList.contains('reveal-chars')) {
        t.style.setProperty('--reveal-delay', (i % 6) * 80 + 'ms');
      }
      io.observe(t);
    });
    // Safety: reveal anything still hidden after 1.6s
    const fallback = setTimeout(() => {
      targets.forEach((t) => {
        if (!t.classList.contains('in')) {
          if (t.classList.contains('reveal-words') || t.classList.contains('reveal-chars')) {
            t.querySelectorAll('.word, .char').forEach((k) => k.classList.add('in'));
          }
          t.classList.add('in');
        }
      });
    }, 1600);
    return () => { io.disconnect(); clearTimeout(fallback); };
  });
  return ref;
}

/** Animates from 0 → `to` when the element scrolls into view */
export function Counter({ to, suffix = '', duration = 1800 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    let started = false;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const t0 = performance.now();
          const tick = (now) => {
            const p = Math.min(1, (now - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val}<span className="suf">{suffix}</span></span>;
}

/** Splits string children into word/char spans for staggered reveal animations */
export function SplitText({ as: As = 'span', mode = 'word', children, className = '' }) {
  if (typeof children !== 'string') return <As className={className}>{children}</As>;
  const parts = mode === 'char'
    ? Array.from(children).map((c, i) => (
        <span key={i} className="char" style={{ whiteSpace: c === ' ' ? 'pre' : 'normal' }}>{c}</span>
      ))
    : children.split(/(\s+)/).map((w, i) => (
        /\s+/.test(w)
          ? <span key={i} style={{ whiteSpace: 'pre' }}>{w}</span>
          : <span key={i} className="word">{w}</span>
      ));
  const cls = `${className} ${mode === 'char' ? 'reveal-chars' : 'reveal-words'}`;
  return <As className={cls}>{parts}</As>;
}

/** Smooth scroll with 80px header offset */
export function smoothScrollTo(target) {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: 'smooth' });
}

/** Sets --reveal-delay CSS variable on each .reveal child for staggered entrance */
export function staggerChildren(parent, base = 60, step = 80) {
  if (!parent) return;
  parent.querySelectorAll('.reveal').forEach((el, i) => {
    if (!el.style.getPropertyValue('--reveal-delay')) {
      el.style.setProperty('--reveal-delay', `${base + i * step}ms`);
    }
  });
}
