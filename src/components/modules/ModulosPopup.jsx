import { useState, useEffect, useRef } from 'react';
import './ModulosPopup.css';

const Arrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const shortCategory = (cat) => (cat.includes('(') ? cat.split('(')[0].trim() : cat);

const ModulosPopup = ({ tabLabel, categoryKey, modulesData, lang = 'es', onClose }) => {
  const [selected,   setSelected]   = useState(null);
  const [panelOpen,  setPanelOpen]  = useState(false);
  const [mobileView, setMobileView] = useState('list');
  const panelEverOpened = useRef(false);
  const detailRef       = useRef(null);

  const modules     = modulesData[categoryKey] || {};
  const moduleNames = Object.keys(modules);

  // Bloquear scroll del body
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow    = 'hidden';
    document.body.style.touchAction = 'none';
    return () => {
      document.body.style.overflow    = prev;
      document.body.style.touchAction = '';
    };
  }, []);

  // Cerrar con Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Resetear scroll del panel de detalle al cambiar módulo
  useEffect(() => {
    if (detailRef.current) detailRef.current.scrollTop = 0;
  }, [selected]);

  // Animar apertura del panel derecho la primera vez
  useEffect(() => {
    if (selected) {
      if (!panelEverOpened.current) {
        panelEverOpened.current = true;
        const id = setTimeout(() => setPanelOpen(true), 40);
        return () => clearTimeout(id);
      }
    } else {
      setPanelOpen(false);
      panelEverOpened.current = false;
    }
  }, [selected]);

  const handleModuleClick = (name) => {
    setSelected(name);
    setMobileView('detail');
  };

  const detail    = selected ? modules[selected] : null;
  const bodyClass = [
    'mp-body',
    panelOpen           ? 'panel-open' : '',
    mobileView === 'detail' ? 'mob-detail' : '',
  ].filter(Boolean).join(' ');

  return (
    <>
      <div className="mp-overlay" onClick={onClose} aria-hidden="true" />
      <div className="mp-container" role="dialog" aria-modal="true" aria-label={tabLabel}>

        {/* ── Header ── */}
        <div className="mp-header">
          <div className="mp-crumbs">
            <span>{lang === 'es' ? 'Plataforma' : 'Platform'}</span>
            <span className="mp-sep">·</span>
            <strong>{tabLabel}</strong>
            {selected && (
              <>
                <span className="mp-sep">/</span>
                <span className="mp-crumb-mod">{selected}</span>
              </>
            )}
          </div>
          <button className="mp-close" onClick={onClose} aria-label={lang === 'es' ? 'Cerrar' : 'Close'}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ── Body ── */}
        <div className={bodyClass}>

          {/* Panel izquierdo: lista de módulos */}
          <div className="mp-list">
            <div className="mp-list-head">
              <span className="mp-list-title">{lang === 'es' ? 'Módulos' : 'Modules'}</span>
              <span className="mp-list-count">{moduleNames.length}</span>
            </div>
            <div className="mp-list-items">
              {moduleNames.map((name, i) => (
                <button
                  key={name}
                  className={`mp-item${selected === name ? ' active' : ''}`}
                  style={{ '--delay': `${i * 0.04 + 0.06}s` }}
                  onClick={() => handleModuleClick(name)}
                >
                  <span className="mp-item-arrow"><Arrow /></span>
                  <span className="mp-item-name">{name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Panel derecho: detalle del módulo */}
          <div className="mp-detail" ref={detailRef}>
            {detail ? (
              <>
                <button
                  className="mp-back"
                  onClick={() => setMobileView('list')}
                  aria-label={lang === 'es' ? 'Volver a módulos' : 'Back to modules'}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 5l-7 7 7 7" />
                  </svg>
                  {lang === 'es' ? 'Módulos' : 'Modules'}
                </button>

                <div className="mp-detail-head">
                  <div className="mp-cat">{shortCategory(categoryKey)}</div>
                  <h3>{selected}</h3>
                </div>

                {detail.description && (
                  <p className="mp-desc">{detail.description}</p>
                )}

                {detail.features?.length > 0 && (
                  <>
                    <div className="mp-feat-title">
                      {lang === 'es' ? 'Funcionalidades principales' : 'Key features'}
                    </div>
                    <ul className="mp-feat-list">
                      {detail.features.map((f, i) => (
                        <li key={i}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12.5l4.5 4.5L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </>
            ) : (
              <div className="mp-empty">
                <div className="mp-empty-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                </div>
                <p>{lang === 'es' ? 'Seleccioná un módulo para ver los detalles.' : 'Select a module to view details.'}</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default ModulosPopup;
