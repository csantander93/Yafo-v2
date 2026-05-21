import { useEffect, useRef } from 'react';
import { useReveal, staggerChildren } from '../../hooks/useReveal';

const SERVICES = [
  {
    num: '01',
    tag: 'Consultoría',
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
    tag: 'Cybersecurity',
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
    tag: 'Software',
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
