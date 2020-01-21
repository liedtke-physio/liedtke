const jsonLd = {
  "@context": "http://schema.org",
  "@type": "LocalBusiness",
  "name": "Physiotherapie Liedtke",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bernauer Straße 97",
    "addressLocality": "Oranienburg",
    "addressRegion": "",
    "postalCode": "16515",
    "addressCountry": "Germany"
  },
  "email": "physio-oranienburg@gmx.de",
  "faxNumber": "",
  "telephone": "03301 423464",
  "description": "",
  "logo": "https://www.physio-oranienburg.de/public/logo.png",
  "image": "https://www.physio-oranienburg.de/public/logo.png",
  "url": "https://www.physio-oranienburg.de/",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "http://schema.org/Monday",
      "opens": "08:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "http://schema.org/Tuesday",
      "opens": "08:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "http://schema.org/Wednesday",
      "opens": "08:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "http://schema.org/Thursday",
      "opens": "08:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "http://schema.org/Friday",
      "opens": "08:00",
      "closes": "13:00"
    }
  ]
};

module.exports = {
  title: 'Physiotherapie Liedtke - Oranienburg',
  description: 'Physiotherapie Oranienburg | Liedtke | Bernauer Straße 97 | 16515 Oranienburg | ✆ +49 03301 423464 | Hausbesuche, Krankengymnastik, Rückenschule, Massagetherapie, Osteophatische Verfahren',
  themeConfig: {
    head: [ ['script', {}, JSON.stringify(jsonLd)]],
    nav: [
      { text: 'Startseite', link: '/' },
      { text: 'Team', link: '/team' },
      { text: 'Angebote', link: '/angebote' },
      { text: 'Anwendungen', link: '/anwendungen' },
      { text: 'Philosophie', link: '/philosophie' },
      { text: 'Praxis', link: '/praxis' },
      { text: 'Kontakt', link: '/kontakt' }
    ]
  }
};
