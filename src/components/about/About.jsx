import { useReveal, Counter } from '../../hooks/useReveal';

export default function About() {
  const ref = useReveal();
  return (
    <section id="nosotros" className="band band-white" ref={ref}>
      <div className="wrap wrap-wide">
        <div className="about-grid">

          {/* Left — heading + stats */}
          <div className="about-left">
            <span className="eyebrow reveal" style={{ marginBottom: 32, display: 'inline-flex' }}>
              <span className="num">02</span> · Quiénes somos
            </span>
            <h2 className="about-quote reveal">
              Somos un equipo de <strong>expertos</strong> en sistemas financieros,
              ciberseguridad y continuidad del negocio. Más de <strong>50 clientes</strong> en
              Argentina y Latinoamérica confían en nuestras soluciones tecnológicas para
              proteger y optimizar sus operaciones críticas.
            </h2>
            <p className="about-secondary reveal">
              En <strong>YAFO Consultora</strong>, combinamos experiencia técnica y visión
              estratégica para ofrecer soluciones integrales en gestión de riesgos,
              ciberseguridad y cumplimiento normativo.
            </p>
            <p className="lead reveal" style={{ marginBottom: 8 }}>
              Desde startups hasta grandes empresas, ayudamos a nuestros clientes a navegar
              entornos complejos con herramientas innovadoras y un compromiso inquebrantable
              con la calidad.
            </p>
            <div className="about-stats-row">
              <div className="pair reveal">
                <strong><Counter to={50} suffix="+" /></strong>
                <span>Clientes activos</span>
              </div>
              <div className="pair reveal">
                <strong><Counter to={7} /></strong>
                <span>Países LATAM</span>
              </div>
              <div className="pair reveal">
                <strong><Counter to={10} suffix="+" /></strong>
                <span>Años</span>
              </div>
            </div>
          </div>

          {/* Right — card stack */}
          <div className="about-card-stack">
            <div className="about-card reveal">
              <div className="ix">A · MISIÓN</div>
              <h4>Transformar la gestión de compliance y seguridad con tecnología.</h4>
              <p>Combinando experiencia técnica y visión estratégica para entornos financieros regulados.</p>
            </div>
            <div className="about-card blue offset reveal">
              <div className="ix">B · EXPERTISE</div>
              <h4>Sistemas financieros, ciberseguridad y continuidad del negocio.</h4>
              <p>Trabajamos como extensión de tus equipos de Riesgos, Seguridad y TI.</p>
            </div>
            <div className="about-card deep reveal">
              <div className="ix">C · ALCANCE</div>
              <h4>LATAM · desde startups hasta grandes empresas.</h4>
              <p>Bancos públicos, privados, mayoristas, cooperativas, fintechs y plataformas digitales.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
