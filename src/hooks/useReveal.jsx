import { useRef, useEffect, useState, useCallback } from 'react';

/** Observes `.reveal` elements inside `ref` and adds the `in` class when visible */
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    if (el.classList.contains('reveal')) io.observe(el);
    el.querySelectorAll('.reveal').forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

/** Sets `--reveal-delay` CSS variable on each `.reveal` child for staggered entrance */
export function staggerChildren(parent, base = 60, step = 80) {
  if (!parent) return;
  parent.querySelectorAll('.reveal').forEach((el, i) => {
    if (!el.style.getPropertyValue('--reveal-delay')) {
      el.style.setProperty('--reveal-delay', `${base + i * step}ms`);
    }
  });
}

/** Animates from 0 → `to` when the element scrolls into view */
export function Counter({ to, suffix = '', duration = 1600, decimals = 0 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const t0 = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(to * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  const formatted = decimals > 0
    ? val.toFixed(decimals)
    : Math.round(val).toLocaleString('es-AR');

  return (
    <span ref={ref}>
      {formatted}
      {suffix && <span className="suf">{suffix}</span>}
    </span>
  );
}

/** Typewriter effect — DOM-direct, zero React re-renders per keystroke */
export function Typewriter({ words, typeSpeed = 70, eraseSpeed = 38, hold = 1500 }) {
  const textRef = useRef(null);

  useEffect(() => {
    let wordIdx = 0;
    let charIdx = 0;
    let phase = 'typing';
    let timer;

    const tick = () => {
      const current = words[wordIdx % words.length];
      const el = textRef.current;
      if (!el) return;

      if (phase === 'typing') {
        charIdx++;
        el.textContent = current.slice(0, charIdx);
        if (charIdx >= current.length) {
          phase = 'erasing';
          timer = setTimeout(tick, hold);
        } else {
          timer = setTimeout(tick, typeSpeed);
        }
      } else {
        charIdx--;
        el.textContent = current.slice(0, charIdx);
        if (charIdx <= 0) {
          wordIdx = (wordIdx + 1) % words.length;
          phase = 'typing';
          timer = setTimeout(tick, typeSpeed);
        } else {
          timer = setTimeout(tick, eraseSpeed);
        }
      }
    };

    timer = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timer);
  }, [words, typeSpeed, eraseSpeed, hold]);

  return (
    <span className="hero-typewriter">
      <span className="tw-text" ref={textRef} />
      <span className="tw-caret" aria-hidden="true" />
    </span>
  );
}

/** Smooth scroll with header offset */
export function smoothScrollTo(target) {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return;
  const headerH = (document.querySelector('.site-header') || {}).offsetHeight || 0;
  const start = window.scrollY;
  const end = el.getBoundingClientRect().top + window.scrollY - headerH - 16;
  const dist = end - start;
  const duration = Math.min(1400, Math.max(600, Math.abs(dist) * 0.7));
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  let t0 = null;
  function tick(t) {
    if (t0 === null) t0 = t;
    const p = Math.min(1, (t - t0) / duration);
    window.scrollTo(0, start + dist * ease(p));
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
