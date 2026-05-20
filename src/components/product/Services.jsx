import { useEffect, useRef } from 'react';
import { useReveal, staggerChildren } from '../../hooks/useReveal';

const SERVICES = [
  {
    num: '01',
    tag: 'Consultoría',
    title: 'Consultoría especializada',
    desc: 'Acompañamos a la entidad en la gestión de riesgos, continuidad operativa y la relación con el regulador.',
    features: [
      'Gestión de Riesgos', 'Seguridad de la Información',
      'Continuidad del Negocio', 'Gestión de Ciberincidentes',
      'Servicios Financieros Digitales', 'Relación con terceros',
    ],
  },
  {
    num: '02',
    tag: 'Cybersecurity',
    title: 'Cybersecurity Assessment',
    desc: 'Evaluaciones exhaustivas para identificar vulnerabilidades y fortalecer la postura defensiva.',
    features: [
      'OSINT + Discovery', 'Test de Intrusión Externo',
      'Web App Assessment', 'Test de Intrusión Interno',
      'Seguridad apps móviles', 'Vulnerability Management',
    ],
  },
  {
    num: '03',
    tag: 'Software',
    title: 'Desarrollo a medida',
    desc: 'Soluciones tecnológicas personalizadas, escalables e integradas a la arquitectura de la entidad.',
    features: [
      'Aplicaciones web', 'Apps móviles',
      'Sistemas empresariales', 'Integraciones core',
      'Soluciones escalables', 'Tecnologías modernas',
    ],
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const revealRef  = useReveal();
  const setRef = (el) => { sectionRef.current = el; revealRef.current = el; };

  useEffect(() => { staggerChildren(sectionRef.current, 60, 110); }, []);

  return (
    <section id="servicios" className="services-section" ref={setRef}>
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Servicios</span>
          <h2 className="display display-lg bold">
            Tres frentes,<br />una sola <span className="grad-text">disciplina</span>.
          </h2>
          <p className="lead">
            Consultoría regulatoria, cybersecurity y desarrollo de software para entidades
            financieras. Trabajamos como extensión de tus equipos de Riesgos, Seguridad y TI.
          </p>
        </div>

        <div className="svc-grid">
          {SERVICES.map((s) => (
            <article className="svc-card reveal" key={s.num}>
              <span className="svc-num">{s.num}</span>
              <span className="svc-tag">{s.tag}</span>
              <h3 className="svc-title">{s.title}</h3>
              <p className="svc-desc">{s.desc}</p>
              <div className="svc-features">
                {s.features.map((f) => (
                  <span className="svc-feat" key={f}>{f}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
