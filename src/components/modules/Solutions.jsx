import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import alephLogoGif from '../../assets/Gif-Aleph-una-vez.gif';
import ModulosPopup from './ModulosPopup';
import { modulesData } from './data/modulesData';

const tabs = [
  'Auditoría',
  'Net Discovery',
  'GRC',
  'Continuidad de Negocio',
  'Pérdida Crediticia Esperada',
  'PLAFT',
  'Legajo Clientes',
];

const tabMapping = {
  'Auditoría':                   'Auditoría',
  'Net Discovery':               'Net Discovery',
  'GRC':                         'GRC (Gobierno, Riesgo y Cumplimiento)',
  'Continuidad de Negocio':      'Continuidad de Negocio',
  'Pérdida Crediticia Esperada': 'Pérdida Crediticia Esperada',
  'PLAFT':                       'PLAFT (Prevención de Lavado de Activos y Financiamiento del Terrorismo)',
  'Legajo Clientes':             'Legajo Clientes',
};

const Solutions = () => {
  const [showPopup,       setShowPopup]       = useState(false);
  const [currentPopupTab, setCurrentPopupTab] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: tabs.map((tab, i) => ({
        '@type': 'SoftwareApplication',
        position: i + 1,
        name: tabMapping[tab] || tab,
        description: `Solución ${tabMapping[tab] || tab} de YAFO Consultora`,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web-based',
        offers: { '@type': 'Offer', category: 'SoftwareAsAService' },
      })),
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  useEffect(() => {
    document.body.style.overflow    = showPopup ? 'hidden' : '';
    document.body.style.touchAction = showPopup ? 'none'   : '';
    return () => {
      document.body.style.overflow    = '';
      document.body.style.touchAction = '';
    };
  }, [showPopup]);

  const handleTabClick = (tab) => {
    setCurrentPopupTab(tabMapping[tab] || tab);
    setShowPopup(true);
  };

  return (
    <section
      id="soluciones"
      className="band band-deep"
      style={{ position: 'relative', overflow: 'hidden' }}
      aria-labelledby="solutions-heading"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <meta itemProp="name"        content="Aleph Manager — Plataforma GRC integral" />
      <meta itemProp="description" content="Plataformas especializadas en GRC, continuidad de negocio y compliance financiero" />

      {/* Ambient blobs — dentro de los límites de la sección */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }} aria-hidden="true">
        <div style={{
          position: 'absolute', top: '4rem', right: '-8rem',
          width: 500, height: 500, borderRadius: '50%',
          background: 'rgba(0,68,129,0.40)', filter: 'blur(90px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-6rem', left: '-6rem',
          width: 420, height: 420, borderRadius: '50%',
          background: 'rgba(45,204,205,0.07)', filter: 'blur(80px)',
        }} />
      </div>

      <div className="wrap wrap-wide" style={{ position: 'relative', zIndex: 2 }}>

        {/* Cabecera */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: 32 }}
        >
          <span className="eyebrow" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span className="num">04</span> · Nuestra plataforma
          </span>
          <h2
            id="solutions-heading"
            className="display bold"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', marginTop: 16, color: 'white' }}
          >
            Soluciones de <span style={{ color: 'var(--aqua)' }}>software</span>
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: 'clamp(15px, 1.1vw, 17px)',
            lineHeight: 1.55,
            maxWidth: '44ch',
            margin: '16px auto 0',
          }}>
            Solución SaaS modular para la gestión integrada de GRC, PLAFT, continuidad
            de negocio y compliance regulatorio.
          </p>
        </motion.div>

        {/* Logo Aleph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: 36 }}
        >
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 'var(--r-xl)',
            padding: '28px 40px',
            backdropFilter: 'blur(8px)',
          }}>
            <img
              src={alephLogoGif}
              alt="Aleph Manager — Plataforma de gestión GRC y riesgos"
              style={{ height: 'clamp(60px, 7vw, 108px)', width: 'auto' }}
              loading="lazy"
              decoding="async"
              itemProp="image"
            />
          </div>
        </motion.div>

        {/* Tabs de módulos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}
          role="tablist"
          aria-label="Módulos de Aleph Manager"
        >
          {tabs.map((tab, i) => (
            <motion.button
              key={tab}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
              onClick={() => handleTabClick(tab)}
              role="tab"
              aria-label={`Explorar módulo ${tab}`}
              className="sol-tab-btn"
            >
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.35)',
            fontSize: 11,
            marginTop: 24,
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          // Hacé clic en cualquier módulo para ver sus funcionalidades
        </motion.p>

      </div>

      {showPopup && currentPopupTab && (
        <ModulosPopup
          tabLabel={currentPopupTab}
          categoryKey={currentPopupTab}
          modulesData={modulesData}
          lang="es"
          onClose={() => { setShowPopup(false); setCurrentPopupTab(null); }}
        />
      )}
    </section>
  );
};

export default Solutions;
