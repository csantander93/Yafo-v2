import { Helmet } from 'react-helmet-async';

const BASE_URL = "https://yafoconsultora.com";

const Seo = ({ 
  title = "YAFO Consultora", 
  description = "Servicios profesionales de consultoría en ciberseguridad, gestión de riesgos y desarrollo de software para instituciones financieras", 
  keywords = "Consultoría en Ciberseguridad, Gestión de Riesgos, Soluciones GRC, Continuidad del Negocio, Desarrollo de Software, Seguridad Financiera, Cumplimiento Normativo", 
  path = "/",
  image = `${BASE_URL}/assets/Logo-Yafo-JPG_grises-300-dpi.jpg`,
  type = "website"
}) => {
  const canonicalUrl = BASE_URL;
  
  return (
    <Helmet>
      {/* Meta Tags Primarios */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      
      {/* Canonical y alternates */}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" href={`${BASE_URL}/es`} hreflang="es" />
      <link rel="alternate" href={BASE_URL} hreflang="x-default" />
      
      {/* Open Graph */}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="YAFO Consultora" />
      <meta property="og:locale" content="es_AR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "YAFO Consultora",
          "url": BASE_URL,
          "logo": `${BASE_URL}/logo.png`,
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "AR"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "contacto@yafoconsultora.com"
          }
        })}
      </script>
    </Helmet>
  );
};

export default Seo;