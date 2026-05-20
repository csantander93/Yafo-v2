import { useEffect, useRef } from 'react';
import { useReveal, staggerChildren } from '../../hooks/useReveal';

const FEATURES = [
  {
    title: 'Construido para entidades reguladas.',
    desc: 'Pensado desde el día uno para los procesos críticos de bancos, fintechs, financieras y aseguradoras.',
    bullets: ['Marcos BCRA, CNV, UIF, GAFI', 'NIIF 9 y normativas locales', 'Integración con el core bancario'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3 4 6v6c0 4.6 3.4 8.4 8 9 4.6-.6 8-4.4 8-9V6l-8-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Trazabilidad punta a punta.',
    desc: 'Cada evaluación, evidencia, hallazgo y decisión queda registrada con versionado, responsables y fechas.',
    bullets: ['Versionado y auditoría', 'Workflows configurables', 'Reportería al regulador'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12h4l3-7 4 14 3-7h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Listo para producción.',
    desc: 'Probado en bancos públicos, privados, mayoristas, cooperativas y plataformas digitales en LATAM.',
    bullets: ['Configurable sin desarrollo', 'SSO, RBAC y multi-entidad', 'On-premise o cloud'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 9h18M7 14h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Features() {
  const sectionRef = useRef(null);
  const revealRef  = useReveal();
  const setRef = (el) => { sectionRef.current = el; revealRef.current = el; };

  useEffect(() => { staggerChildren(sectionRef.current, 80, 130); }, []);

  return (
    <section className="features-section" ref={setRef}>
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Por qué Aleph</span>
          <h2 className="display display-lg bold">
            Construido como un<br />
            <span className="grad-text">sistema crítico</span>, no como un dashboard.
          </h2>
        </div>

        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <div className="feature-item reveal" key={i}>
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <ul>
                {f.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
