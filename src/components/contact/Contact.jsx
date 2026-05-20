import { useState, useEffect, useRef } from 'react';
import { useReveal, staggerChildren } from '../../hooks/useReveal';
import { sendContactEmail } from '../../services/emailServices';

const EMPTY = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form,       setForm]       = useState(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [success,    setSuccess]    = useState(false);
  const [error,      setError]      = useState('');

  const sectionRef = useRef(null);
  const revealRef  = useReveal();
  const setRef = (el) => { sectionRef.current = el; revealRef.current = el; };

  useEffect(() => { staggerChildren(sectionRef.current, 60, 100); }, []);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const result = await sendContactEmail(form);
      if (result?.status === 1) {
        setSuccess(true);
        setForm(EMPTY);
        setTimeout(() => setSuccess(false), 6000);
      } else {
        setError('Hubo un error al enviar. Por favor, intentá de nuevo.');
      }
    } catch {
      setError('Error de conexión. Verificá tu conexión e intentá de nuevo.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="contact-section" ref={setRef}>
      <div className="wrap">
        <div className="contact-grid">

          {/* Left — info */}
          <div>
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span className="eyebrow">Contacto</span>
            </div>
            <h2 className="display display-lg bold reveal">
              Contacte a<br />
              nuestro <span className="grad-text">equipo</span>.
            </h2>
            <p className="lead reveal" style={{ marginTop: 20, marginBottom: 40 }}>
              Cuéntenos sobre su organización y evaluaremos la mejor solución
              para sus procesos de riesgo, compliance y control operativo.
            </p>

            <div className="contact-info reveal">
              <a href="mailto:info@yafoconsultora.com" className="contact-info-row">
                <span className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/>
                    <path d="M2 8l10 6 10-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                </span>
                <span>info@yafoconsultora.com</span>
              </a>
              <a
                href="https://www.linkedin.com/company/yafo-consultora"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-row"
              >
                <span className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </span>
                <span>linkedin.com/company/yafo-consultora</span>
              </a>
              <div className="contact-info-row">
                <span className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" stroke="currentColor" strokeWidth="1.6"/>
                    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
                  </svg>
                </span>
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          {/* Right — form card */}
          <div className="reveal">
            <div className="contact-form-card">
              {success ? (
                <div className="contact-success">
                  <div className="contact-success-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4>¡Mensaje enviado!</h4>
                  <p>Te contactaremos a la brevedad.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 style={{ marginBottom: 24, fontSize: '1.1rem', fontWeight: 600 }}>
                    Envianos un mensaje
                  </h3>

                  {error && (
                    <p className="contact-error">{error}</p>
                  )}

                  <div className="form-field-row">
                    <div className="form-field">
                      <input
                        type="text"
                        name="name"
                        id="c-name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder=" "
                        required
                        autoComplete="name"
                      />
                      <label htmlFor="c-name">Nombre y Apellido</label>
                    </div>
                    <div className="form-field">
                      <input
                        type="email"
                        name="email"
                        id="c-email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder=" "
                        required
                        autoComplete="email"
                      />
                      <label htmlFor="c-email">Email</label>
                    </div>
                  </div>

                  <div className="form-field">
                    <input
                      type="text"
                      name="subject"
                      id="c-subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder=" "
                      required
                    />
                    <label htmlFor="c-subject">Organización / Asunto</label>
                  </div>

                  <div className="form-field">
                    <textarea
                      name="message"
                      id="c-message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder=" "
                      rows={4}
                      required
                    />
                    <label htmlFor="c-message">Mensaje</label>
                  </div>

                  <button type="submit" className="btn btn-primary" disabled={submitting} style={{ width: '100%', justifyContent: 'center' }}>
                    {submitting ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="spin" aria-hidden="true">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                          strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      <>
                        Enviar mensaje
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                          <path d="M5 12h14M13 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
