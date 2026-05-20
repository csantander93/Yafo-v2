import { useEffect, useRef } from 'react';
import { useReveal, staggerChildren, Counter } from '../../hooks/useReveal';

const STATS = [
  { num: 50,  suf: '+',  label: 'entidades en producción · bancos, fintechs y financieras' },
  { num: 7,   suf: '',  label: 'países LATAM · AR, PA, CO, CR, HN, MX, NI' },
  { num: 40,  suf: '+', label: 'módulos · GRC, BCP, PLAFT, NIIF 9, audit y legajo' },
  { num: 100, suf: '%', label: 'configurable · cada módulo sin desarrollo a medida' },
];

export default function Stats() {
  const sectionRef = useRef(null);
  const revealRef  = useReveal();
  const setRef = (el) => { sectionRef.current = el; revealRef.current = el; };

  useEffect(() => { staggerChildren(sectionRef.current, 60, 110); }, []);

  return (
    <section className="stats-section" ref={setRef}>
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow">Por los números</span>
          <h2 className="display display-lg bold">
            Adiós al <span className="grad-text">desarrollo a medida</span>.
          </h2>
        </div>

        <div className="stats-grid">
          {STATS.map((s, i) => (
            <div className="stat-item reveal" key={i}>
              <div className="stat-num">
                <Counter to={s.num} suffix={s.suf} duration={1600 + i * 200} />
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
