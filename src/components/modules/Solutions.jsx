import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import alephLogoGif from "../../assets/Gif-Aleph-una-vez.gif";
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
  'Auditoría':                      'Auditoría',
  'Net Discovery':                  'Net Discovery',
  'GRC':                            'GRC (Gobierno, Riesgo y Cumplimiento)',
  'Continuidad de Negocio':         'Continuidad de Negocio',
  'Pérdida Crediticia Esperada':    'Pérdida Crediticia Esperada',
  'PLAFT':                          'PLAFT (Prevención de Lavado de Activos y Financiamiento del Terrorismo)',
  'Legajo Clientes':                'Legajo Clientes',
};

const Solutions = () => {
  const [showPopup,        setShowPopup]        = useState(false);
  const [selectedModule,   setSelectedModule]   = useState(null);
  const [currentPopupTab,  setCurrentPopupTab]  = useState(null);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Schema markup SEO
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": tabs.map((tab, i) => ({
        "@type": "SoftwareApplication",
        "position": i + 1,
        "name": tabMapping[tab] || tab,
        "description": `Solución ${tabMapping[tab] || tab} de YAFO Consultora`,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web-based",
        "offers": { "@type": "Offer", "category": "SoftwareAsAService" },
      })),
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  // Bloquear scroll de body mientras el popup está abierto
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
    setSelectedModule(null);
    setShowPopup(true);
  };

  return (
    <section
      id="soluciones"
      className="relative py-24 bg-slate-900 overflow-hidden"
      aria-labelledby="solutions-heading"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <meta itemProp="name"        content="Aleph Manager — Plataforma GRC integral" />
      <meta itemProp="description" content="Plataformas especializadas en GRC, continuidad de negocio y compliance financiero" />

      {/* Fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-amber-400/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Cabecera */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8"
        >
          <span className="text-xs font-display font-bold text-blue-400 uppercase tracking-widest">
            Nuestra plataforma
          </span>
          <h2
            id="solutions-heading"
            className="font-display font-bold text-white mt-3 leading-tight"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
          >
            SOLUCIONES DE SOFTWARE
          </h2>
          <p className="text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
            Solución SaaS modular para la gestión integrada de GRC, PLAFT, continuidad
            de negocio y compliance regulatorio.
          </p>
        </motion.div>

        {/* Logo Aleph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white/5 border border-white/10 rounded-3xl px-10 py-8 backdrop-blur-sm">
            <img
              src={alephLogoGif}
              alt="Aleph Manager — Plataforma de gestión GRC y riesgos"
              className="h-20 md:h-28 w-auto"
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
          className="flex flex-wrap justify-center gap-3"
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
              className="group flex items-center gap-2.5 bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-500 text-slate-300 hover:text-white font-display font-medium text-sm px-5 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/20 hover:-translate-y-0.5"
            >
              <svg
                className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Call-to-action hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center text-slate-500 text-sm mt-8 font-display"
        >
          Hacé clic en cualquier módulo para ver sus funcionalidades
        </motion.p>
      </div>

      {/* Popup de módulos — lógica sin cambios */}
      {showPopup && currentPopupTab && (
        <ModulosPopup
          initialCategory={currentPopupTab}
          selectedModule={selectedModule}
          onModuleSelect={setSelectedModule}
          onClose={() => { setShowPopup(false); setSelectedModule(null); setCurrentPopupTab(null); }}
          onBack={() => setSelectedModule(null)}
          modulesData={modulesData}
          categoryMapping={tabMapping}
        />
      )}
    </section>
  );
};

export default Solutions;
