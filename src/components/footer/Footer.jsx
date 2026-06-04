import { useState } from 'react';
import logo from '../../assets/Logo-Yafo-JPG_grises-150dpi.webp';
import { smoothScrollTo } from '../../hooks/useReveal';
import PrivacyModal from '../privacy/PrivacyModal';

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      {privacyOpen && <PrivacyModal onClose={() => setPrivacyOpen(false)} />}
      <footer className="site-footer" role="contentinfo">
        <div className="wrap">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '16px 0 8px' }}>
            <a
              href="#inicio"
              aria-label="YAFO Consultora"
              onClick={(e) => { e.preventDefault(); smoothScrollTo('#inicio'); }}
            >
              <img src={logo} alt="YAFO Consultora" style={{ height: 72, width: 'auto', filter: 'invert(1)', mixBlendMode: 'screen', opacity: 0.85 }} />
            </a>
            <p style={{ marginTop: 16, fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, maxWidth: 340 }}>
              Consultoría especializada en sistemas financieros, ciberseguridad y
              compliance regulatorio para LATAM.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <p style={{ margin: 0, fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)' }}>
              &copy; {new Date().getFullYear()} YAFO CONSULTORA S.R.L. Todos los derechos reservados.
            </p>
            <p style={{ margin: 0, fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)' }}>
              Buenos Aires, Argentina
            </p>
            <button
              onClick={() => setPrivacyOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                margin: 0,
                cursor: 'pointer',
                fontSize: '0.8125rem',
                color: 'rgba(255,255,255,0.4)',
                transition: 'color 0.2s',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.08em',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--aqua)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
            >
              Aviso de Privacidad
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
