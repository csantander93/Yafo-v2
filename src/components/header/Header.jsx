import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { smoothScrollTo } from '../../hooks/useReveal';
import logo from '../../assets/Logo-Yafo-JPG_grises-150dpi.webp';

const NAV_ITEMS = [
  { id: 'inicio',     label: 'Inicio'     },
  { id: 'servicios',  label: 'Servicios'  },
  { id: 'soluciones', label: 'Plataforma' },
  { id: 'clientes',   label: 'Clientes'   },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['inicio', ...NAV_ITEMS.map((n) => n.id), 'contacto'];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-15% 0px -60% 0px', threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    smoothScrollTo('#' + id);
  };

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="wrap header-inner">
        {/* Logo */}
        <a href="#inicio" aria-label="YAFO Consultora" onClick={(e) => go(e, 'inicio')}
          style={{ display: 'inline-flex', alignItems: 'center' }}>
          <img src={logo} alt="YAFO Consultora" style={{ height: 40, width: 'auto' }} />
        </a>

        {/* Desktop nav */}
        <nav className="site-nav" aria-label="Navegación principal">
          {NAV_ITEMS.map((n) => (
            <a
              key={n.id}
              href={'#' + n.id}
              className={`nav-link${active === n.id ? ' active' : ''}`}
              aria-current={active === n.id ? 'page' : undefined}
              onClick={(e) => go(e, n.id)}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={(e) => go(e, 'contacto')}
            className="btn btn-primary"
            style={{ fontSize: 13, padding: '10px 18px' }}
          >
            Contacto
            <svg className="arr" width="12" height="12" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M2 7h10m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          id="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 8, background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: 'block', width: 22, height: 1.5,
              background: 'var(--fg-2)', borderRadius: 2,
              transition: 'transform .2s, opacity .2s',
              ...(i === 0 && menuOpen ? { transform: 'rotate(45deg) translate(0,5px)' }  : {}),
              ...(i === 1 && menuOpen ? { opacity: 0 }                                    : {}),
              ...(i === 2 && menuOpen ? { transform: 'rotate(-45deg) translate(0,-5px)' } : {}),
            }} />
          ))}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            style={{
              background: 'color-mix(in srgb, var(--bg-1) 90%, transparent)',
              backdropFilter: 'blur(16px)',
              borderTop: '1px solid var(--line)',
              padding: '16px var(--gutter)',
              display: 'flex', flexDirection: 'column',
            }}
          >
            {[...NAV_ITEMS, { id: 'contacto', label: 'Contacto' }].map((n) => (
              <a
                key={n.id}
                href={'#' + n.id}
                style={{
                  fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 500,
                  color: active === n.id ? 'var(--fg)' : 'var(--fg-3)',
                  padding: '12px 0',
                  borderBottom: '1px solid var(--line)',
                  transition: 'color .2s',
                }}
                onClick={(e) => go(e, n.id)}
              >
                {n.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <style>{`@media (max-width: 880px) { #mobile-toggle { display: flex !important; } }`}</style>
    </header>
  );
}
