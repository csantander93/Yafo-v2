import { useState, useEffect } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { sendContactEmail } from '../../services/emailServices';

const EMPTY = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const ref = useReveal();
  const [form,       setForm]       = useState(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [success,    setSuccess]    = useState(false);
  const [error,      setError]      = useState('');

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
    <section id="contacto" className="band band-deep" ref={ref}>
      <div className="wrap wrap-wide">
        <div className="contact-grid">

          {/* Left — heading */}
          <div className="contact-left">
            <span className="eyebrow reveal">
              <span className="num">08</span> · Contacto
            </span>
            <h2 className="display display-lg bold reveal-mask" style={{ marginTop: 24 }}>
              <span>CONTACTO</span>
            </h2>
            <p className="lead reveal" style={{ marginTop: 24, color: 'rgba(255,255,255,0.75)' }}>
              Completa el formulario y nos pondremos en contacto contigo.
            </p>
          </div>

          {/* Right — form card */}
          <div className="contact-card reveal">
            <h3>Envianos un mensaje y nos pondremos en contacto.</h3>

            {success ? (
              <div style={{ padding: '40px 8px', textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: 999, background: 'var(--blue-700)', color: 'white', display: 'grid', placeItems: 'center', margin: '0 auto 18px' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h4 style={{ fontSize: 22, fontWeight: 600, marginBottom: 8, letterSpacing: '-0.02em' }}>¡Mensaje enviado!</h4>
                <p style={{ fontSize: 14, color: 'var(--ink-4)' }}>Nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {error && (
                  <p style={{ color: '#e53e3e', fontSize: 14, marginBottom: 16 }}>{error}</p>
                )}
                <div className="field-row">
                  <div className="field">
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
                  <div className="field">
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
                <div className="field">
                  <input
                    type="text"
                    name="subject"
                    id="c-subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder=" "
                    required
                  />
                  <label htmlFor="c-subject">Asunto</label>
                </div>
                <div className="field">
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
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={submitting}
                  style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}
                >
                  {submitting ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="spin" aria-hidden="true">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <>
                      Enviar mensaje
                      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                        <path d="M2 7h10m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
