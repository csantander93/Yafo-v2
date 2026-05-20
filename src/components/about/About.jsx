import { useEffect, useRef } from 'react';
import { useReveal, staggerChildren } from '../../hooks/useReveal';

const VALUES = [
  { num: '01', title: 'A medida',           desc: 'Adaptado a la operatoria y normativa específica de cada entidad.' },
  { num: '02', title: 'Multidisciplinario', desc: 'Sistemas financieros, ciberseguridad, riesgos y compliance en un mismo equipo.' },
  { num: '03', title: 'Metodología probada', desc: 'Procesos validados con más de 50 clientes en Argentina y LATAM.' },
  { num: '04', title: 'Soporte continuo',   desc: 'Acompañamiento en implementación, operación y evolución regulatoria.' },
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
              el <span className="grad-text">compliance</span><br />
              y la <span className="grad-text">seguridad</span><br />
              con tecnología.
            </h2>
          </div>

          {/* Right column — copy + values */}
          <div>
            <p className="lead reveal" style={{ marginTop: 18 }}>
              Somos un equipo de <strong>especialistas en sistemas financieros</strong>,
              ciberseguridad y continuidad del negocio. Construimos <strong>Aleph Manager</strong>,
              la plataforma sobre la que más de 50 entidades operan sus procesos críticos
              de gestión de riesgos, PLAFT, auditoría normativa y reporte regulatorio.
            </p>
            <p className="lead reveal" style={{ marginTop: 18 }}>
              Combinamos profundidad técnica con visión estratégica para acompañar a
              bancos, fintechs, cooperativas, compañías financieras y aseguradoras
              en entornos altamente regulados.
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
