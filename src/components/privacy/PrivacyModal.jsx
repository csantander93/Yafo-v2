import { useEffect } from 'react';

export default function PrivacyModal({ onClose }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      className="privacy-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="privacy-modal">
        <div className="privacy-modal-header">
          <h2 id="privacy-title" className="privacy-modal-title">Aviso de Privacidad</h2>
          <button
            className="privacy-modal-close"
            onClick={onClose}
            aria-label="Cerrar aviso de privacidad"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="privacy-modal-body">
          <p>
            Yafo Consultora S.R.L. reconoce la importancia de proteger los datos personales y la
            información confidencial de sus clientes, usuarios y terceros relacionados.
          </p>

          <p>
            La información recopilada podrá incluir datos de contacto, información comercial,
            contractual, técnica y operativa necesaria para la prestación de servicios tecnológicos,
            de gestión de riesgo, cumplimiento normativo, continuidad de negocio y soluciones de
            software provistas por Yafo Consultora S.R.L. y/o la plataforma Aleph Manager.
          </p>

          <p>La información será utilizada únicamente para:</p>
          <ul>
            <li>Prestación de servicios contratados;</li>
            <li>Soporte técnico y operativo;</li>
            <li>Cumplimiento de obligaciones legales y regulatorias;</li>
            <li>Gestión comercial y contractual;</li>
            <li>Seguridad de la información y auditoría.</li>
          </ul>

          <p>
            Yafo Consultora S.R.L. implementa medidas razonables de seguridad técnicas y
            organizativas para proteger la confidencialidad, integridad y disponibilidad de la
            información.
          </p>

          <p>La información podrá ser compartida únicamente:</p>
          <ul>
            <li>Con proveedores tecnológicos vinculados a la prestación del servicio;</li>
            <li>Por requerimiento legal o regulatorio;</li>
            <li>O con autorización del titular correspondiente.</li>
          </ul>

          <p>
            Los titulares de los datos podrán solicitar acceso, rectificación, actualización o
            eliminación de su información escribiendo a:{' '}
            <a href="mailto:azariel.yomal@yafoconsultora.com" className="privacy-email-link">
              azariel.yomal@yafoconsultora.com
            </a>
          </p>

          <p>
            Yafo Consultora S.R.L. podrá actualizar el presente Aviso de Privacidad periódicamente.
            Las modificaciones serán publicadas en esta misma sección.
          </p>

          <p className="privacy-last-update">Última actualización: Mayo 2026.</p>
        </div>
      </div>
    </div>
  );
}
