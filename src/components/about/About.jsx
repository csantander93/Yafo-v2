import { useEffect, useRef } from 'react';
import { useReveal, staggerChildren } from '../../hooks/useReveal';

const VALUES = [
  { num: '01', title: 'Enfoque personalizado',    desc: 'Soluciones adaptadas a las necesidades específicas de cada cliente.' },
  { num: '02', title: 'Tecnología de vanguardia', desc: 'Implementamos herramientas líderes del mercado para máxima eficacia.' },
  { num: '03', title: 'Equipo multidisciplinario', desc: 'Expertos en seguridad, fintech y gestión de riesgos trabajando en conjunto.' },
  { num: '04', title: 'Metodología probada',       desc: 'Procesos validados con más de 50 clientes en Latinoamérica.' },
  { num: '05', title: 'Soporte continuo',          desc: 'Acompañamiento en todas las etapas de implementación y operación.' },
  { num: '06', title: 'Visión estratégica',        desc: 'Soluciones alineadas con los objetivos de negocio de cada organización.' },
];

export default function About() {
  const sectionRef = useRef(null);
  const revealRef  = useReveal();
  const setRef = (el) => { sectionRef.current = el; revealRef.current = el; };

  useEffect(() => { staggerChildren(sectionRef.current, 60, 100); }, []);

  return (
    <section id="nosotros" className="about-section" ref={setRef}>
      <div className="wrap">
        <div className="about-grid">

          {/* Left column — heading */}
          <div>
            <div className="reveal" style={{ marginBottom: 24 }}>
              <span className="eyebrow">Quiénes somos</span>
            </div>
            <h2 className="display display-lg bold reveal">
              Transformamos<br />
              la <span className="grad-text">gestión de compliance</span><br />
              y <span className="grad-text">seguridad</span><br />
              con tecnología.
            </h2>
          </div>

          {/* Right column — copy + values */}
          <div>
            <p className="lead reveal" style={{ marginTop: 18 }}>
              Somos un equipo de <strong>expertos en sistemas financieros</strong>,{' '}
              <strong>ciberseguridad</strong> y <strong>continuidad del negocio</strong>.
              Más de 50 clientes en <strong>Argentina y Latinoamérica</strong> confían
              en nuestras <strong>soluciones tecnológicas</strong> para proteger y optimizar
              sus operaciones críticas.
            </p>
            <p className="lead reveal" style={{ marginTop: 18 }}>
              En <strong>YAFO Consultora</strong>, combinamos <strong>experiencia técnica</strong>{' '}
              y <strong>visión estratégica</strong> para ofrecer soluciones integrales en{' '}
              gestión de riesgos, ciberseguridad y cumplimiento normativo.
            </p>
            <p className="lead reveal" style={{ marginTop: 18 }}>
              Desde startups hasta grandes empresas, ayudamos a nuestros clientes a navegar
              entornos complejos con herramientas innovadoras y un compromiso inquebrantable
              con la calidad.
            </p>

            <div className="about-values reveal">
              {VALUES.map((v) => (
                <div className="value-block" key={v.num}>
                  <div className="value-num">{v.num}</div>
                  <div className="value-title">{v.title}</div>
                  <div className="value-desc">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
