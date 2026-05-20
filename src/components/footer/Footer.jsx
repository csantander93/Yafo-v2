import logo from '../../assets/Logo-Yafo-JPG_grises-150dpi.webp';
import { smoothScrollTo } from '../../hooks/useReveal';

const NAV = [
  { label: 'Inicio',      href: '#inicio'     },
  { label: 'Servicios',   href: '#servicios'  },
  { label: 'Plataforma',  href: '#soluciones' },
  { label: 'Clientes',    href: '#clientes'   },
  { label: 'Contacto',    href: '#contacto'   },
];

const PLATFORM = [
  'GRC · Gestión de Riesgos',
  'PLAFT · Prevención de lavado',
  'BCP · Continuidad operativa',
  'NIIF 9 · Provisiones',
  'Auditoría normativa',
  'Legajo de clientes',
];

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="wrap">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <a
              href="#inicio"
              aria-label="YAFO Consultora"
              onClick={(e) => { e.preventDefault(); smoothScrollTo('#inicio'); }}
            >
              <img src={logo} alt="YAFO Consultora" style={{ height: 90, width: 'auto' }} />
            </a>
            <p style={{ marginTop: 16, fontSize: '0.875rem', color: 'var(--fg-3)', lineHeight: 1.6, maxWidth: 260 }}>
              Consultoría especializada en sistemas financieros, ciberseguridad y
              compliance regulatorio para LATAM.
            </p>
            <a
              href="https://www.linkedin.com/company/yafo-consultora"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ display: 'inline-flex', marginTop: 20, color: 'var(--fg-3)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--fg)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--fg-3)'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Nav */}
          <div className="footer-col">
            <div className="footer-col-title">Navegación</div>
            <nav aria-label="Footer navigation">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {NAV.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="footer-link"
                      onClick={(e) => { e.preventDefault(); smoothScrollTo(item.href); }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Platform */}
          <div className="footer-col">
            <div className="footer-col-title">Aleph Manager</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {PLATFORM.map((item) => (
                <li key={item} style={{ fontSize: '0.875rem', color: 'var(--fg-3)' }}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <p style={{ margin: 0, fontSize: '0.8125rem', color: 'var(--fg-4)' }}>
            &copy; {new Date().getFullYear()} YAFO CONSULTORA S.R.L. Todos los derechos reservados.
          </p>
          <p style={{ margin: 0, fontSize: '0.8125rem', color: 'var(--fg-4)' }}>
            Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
