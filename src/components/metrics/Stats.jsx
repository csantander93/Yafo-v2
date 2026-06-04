import { useReveal, Counter } from '../../hooks/useReveal';

const STATS = [
  { num: 50,  suf: '+', label: 'Entidades en producción · bancos, fintechs y financieras' },
  { num: 7,   suf: '',  label: 'Países LATAM · AR, PA, CO, CR, HN, MX, NI' },
  { num: 40,  suf: '+', label: 'Módulos · GRC, BCP, PLAFT, NIIF 9, audit y legajo' },
  { num: 100, suf: '%', label: 'Configurable · cada módulo sin desarrollo a medida' },
];

export default function Stats() {
  const ref = useReveal();
  return (
    <section id="stats" className="band band-deep stats-band" ref={ref}>
      <div className="wrap wrap-wide">
        <div className="stats-head reveal">
          <span className="eyebrow">
            <span className="num">06</span> · Por los números
          </span>
          <h2 className="display display-lg bold reveal-mask" style={{ marginTop: 24 }}>
            <span>Adiós al <span className="accent-text">desarrollo a medida</span>.</span>
          </h2>
        </div>
        <div className="stats-grid reveal">
          {STATS.map((s, i) => (
            <div className="stat-cell" key={i}>
              <span className="ix">{String(i + 1).padStart(2, '0')} / 04</span>
              <div className="num">
                <Counter to={s.num} suffix={s.suf} duration={1800 + i * 150} />
              </div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
