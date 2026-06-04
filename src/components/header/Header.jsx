import { useState, useEffect } from 'react';
import { smoothScrollTo } from '../../hooks/useReveal';
import logo from '../../assets/Logo-Yafo-JPG_grises-150dpi.webp';

const NAV_ITEMS = [
  { id: 'inicio',     label: 'Inicio'     },
  { id: 'nosotros',   label: 'Nosotros'   },
  { id: 'servicios',  label: 'Servicios'  },
  { id: 'soluciones', label: 'Soluciones' },
  { id: 'clientes',   label: 'Clientes'   },
];

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false);
  const [active,    setActive]    = useState('inicio');
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id).concat('contacto');
    const update = () => {
      const trigger = window.scrollY + window.innerHeight * 0.3;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= trigger) current = id;
      }
      setActive(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    smoothScrollTo('#' + id);
  };

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="wrap wrap-wide header-inner">
        {/* Brand */}
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
            className="btn btn-primary btn-mono"
            onClick={(e) => go(e, 'contacto')}
          >
            Contacto
            <svg className="arr" width="12" height="12" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M2 7h10m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span style={menuOpen ? { transform: 'rotate(45deg) translate(0,5px)' }  : {}} />
          <span style={menuOpen ? { opacity: 0 }                                    : {}} />
          <span style={menuOpen ? { transform: 'rotate(-45deg) translate(0,-5px)' } : {}} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="mobile-menu" aria-label="Menú móvil">
          {[...NAV_ITEMS, { id: 'contacto', label: 'Contacto' }].map((n) => (
            <a
              key={n.id}
              href={'#' + n.id}
              className={active === n.id ? 'active' : ''}
              onClick={(e) => go(e, n.id)}
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
