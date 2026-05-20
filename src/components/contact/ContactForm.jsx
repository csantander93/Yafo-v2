import React, { useState, useEffect } from 'react';
import './ContactForm.css';
import { sendContactEmail } from '../../services/emailServices';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const result = await sendContactEmail(formData);

      if (result && result.status === 1) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setErrorMessage('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
        console.error('Error al enviar el formulario:', result?.message || 'Error desconocido');
      }
    } catch (error) {
      setErrorMessage('Error de conexión. Por favor, verifica tu conexión e inténtalo de nuevo.');
      console.error('Error en la petición:', error);
    } finally {
      setIsSubmitting(false);
      
      if (submitSuccess) {
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    }
  };

  return (
    <section id='contacto' className={`contact-section ${isLoaded ? 'loaded' : ''}`}>
      <div className="contact-background">
        <div className="contact-gradient"></div>
        <div className="contact-particle contact-particle-1"></div>
        <div className="contact-particle contact-particle-2"></div>
        <div className="contact-particle contact-particle-3"></div>
        <div className="contact-particle contact-particle-4"></div>
      </div>
      
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">CONTACTO</h2>
          <p className="contact-subtitle">Completa el formulario y nos pondremos en contacto contigo</p>
        </div>

        <div className="contact-row">
          <div className="form-container full-width">
            {submitSuccess ? (
              <div className="success-message">
                <svg className="success-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M22 4 12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h4>¡Mensaje enviado!</h4>
                <p>Nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {errorMessage && (
                  <div className="error-message">
                    <p>{errorMessage}</p>
                  </div>
                )}
                <div className="form-row">
                  <div className="floating-input">
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder=" "
                      required 
                    />
                    <label htmlFor="name">Nombre y Apellido</label>
                  </div>
                  
                  <div className="floating-input">
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      required 
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                
                <div className="floating-input">
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder=" "
                    required 
                  />
                    <label htmlFor="subject">Asunto</label>
                </div>
                
                <div className="floating-input textarea-input">
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="3" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    required
                  ></textarea>
                  <label htmlFor="message">Mensaje</label>
                </div>
                
                <button 
                  type="submit" 
                  className={`form-submit ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="spinner"></span>
                  ) : (
                    <>
                      Enviar Mensaje
                      <svg className="submit-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                        <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
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
};

export default ContactForm;