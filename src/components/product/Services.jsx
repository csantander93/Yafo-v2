import { useRef, useState } from 'react';
import { useReveal } from '../../hooks/useReveal';

const SERVICES = [
  {
    num: '01',
    tag: '/ Consultoría',
    title: 'Consultoría especializada',
    desc: 'Servicios expertos para gestionar riesgos, asegurar la continuidad del negocio y optimizar tu infraestructura tecnológica.',
    features: [
      'Gestión de Riesgos', 'Seguridad de la Información',
      'Continuidad del Negocio', 'Infraestructura tecnológica',
      'Gestión de Ciberincidentes', 'Relación con terceros',
      'Servicios Financieros Digitales',
    ],
  },
  {
    num: '02',
    tag: '/ Cybersecurity',
    title: 'Cybersecurity Assessment',
    desc: 'Evaluaciones exhaustivas para identificar vulnerabilidades y fortalecer tus defensas contra amenazas cibernéticas.',
    features: [
      'OSINT + Discovery', 'Test de Intrusión Externo',
      'Web Application Assessment', 'Test de Intrusión Interno',
      'Seguridad apps móviles', 'Vulnerability Management',
    ],
  },
  {
    num: '03',
    tag: '/ Software',
    title: 'Desarrollo de Software',
    desc: 'Soluciones tecnológicas personalizadas diseñadas para satisfacer las necesidades específicas de tu organización.',
    features: [
      'Aplicaciones web', 'Apps móviles',
      'Sistemas empresariales', 'Integraciones',
      'Soluciones escalables', 'Tecnologías modernas',
    ],
  },
];

export default function Services() {
  const [open, setOpen] = useState(-1);
  const revealRef = useReveal();

  const toggle = (i) => setOpen((prev) => (prev === i ? -1 : i));

  return (
    <section
      id="servicios"
      className="band band-blue"
      ref={revealRef}
    >
      <div className="wrap wrap-wide">
        <div className="services-head">
          <div>
            <span className="eyebrow reveal" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <span className="num">03</span> · Servicios
            </span>
            <h2 className="display display-lg bold reveal-mask" style={{ marginTop: 24 }}>
              <span>Tres frentes,<br />una sola <span className="accent-text">disciplina</span>.</span>
            </h2>
          </div>
          <p className="lead reveal" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Consultoría regulatoria, cybersecurity y desarrollo de software para entidades
            financieras. Trabajamos como extensión de tus equipos de Riesgos, Seguridad y TI.
          </p>
        </div>

        <div className="services-list reveal">
          {SERVICES.map((s, i) => (
            <div key={s.num} className={`svc-card${open === i ? ' open' : ''}`}>
              <button className="svc-row" onClick={() => toggle(i)} aria-expanded={open === i}>
                <span className="num">{s.num}</span>
                <h3>{s.title}</h3>
                <span className="svc-tag">{s.tag}</span>
                <span className="svc-toggle">
                  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              <div className="svc-body">
                <div className="svc-body-inner">
                  <div className="svc-body-grid">
                    <p className="desc">{s.desc}</p>
                    <ul>
                      {s.features.map((f) => (
                        <li key={f}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M2 6l3 3 5-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
