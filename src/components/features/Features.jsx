import { useReveal } from '../../hooks/useReveal';

const FEATURES = [
  {
    rom: 'i',
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
    rom: 'ii',
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
    rom: 'iii',
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
  const ref = useReveal();
  return (
    <section id="features" className="band band-soft" ref={ref}>
      <div className="wrap wrap-wide">
        <div className="features-head">
          <div>
            <span className="eyebrow reveal">
              <span className="num">05</span> · Por qué Aleph
            </span>
            <h2 className="display display-lg bold reveal-mask" style={{ marginTop: 24 }}>
              <span>Construido como un<br /><span className="gradient-text">sistema crítico</span>, no como un dashboard.</span>
            </h2>
          </div>
          <p className="lead reveal">
            Pensado desde el día uno para procesos críticos de entidades financieras.
            Trazabilidad punta a punta, listo para producción, sin desarrollo a medida.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <div className="feature-card reveal" key={i}>
              <div className="big-num">
                <span>Pilar {String(i + 1).padStart(2, '0')}</span>
                <span className="roman">{f.rom}</span>
              </div>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <ul>
                {f.bullets.map((b) => (
                  <li key={b}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6l3 3 5-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
