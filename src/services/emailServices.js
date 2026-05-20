export const sendContactEmail = async (formData) => {
  const to = import.meta.env.VITE_EMAIL_TO;
  
  const content = `
    <p><strong>Nombre:</strong> ${formData.name}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Asunto:</strong> ${formData.subject}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${formData.message}</p>
    <p><small>Este mensaje fue enviado desde ${window.location.origin}</small></p>
  `;

  try {
    const response = await fetch('https://panel.alephmanager.com/API/send_email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        to,
        content,
        subject: formData.subject || 'Nuevo mensaje de contacto',
        base_url: window.location.origin,
        recaptcha_token: formData.recaptchaToken // Añadimos el token al request
      })
    });

    return await response.json();
  } catch (error) {
    console.error('Error en la petición:', error);
    return { 
      status: 0, 
      message: 'Error de conexión. Por favor, inténtalo de nuevo más tarde.' 
    };
  }
};