const jsonLd = require('./json-ld.json');

module.exports = {
  title: 'Physiotherapie Liedtke - Oranienburg',
  description: 'Physiotherapie Oranienburg | Liedtke | Bernauer Straße 97 | 16515 Oranienburg | ✆ +49 03301 423464 | Hausbesuche, Krankengymnastik, Rückenschule, Massagetherapie, Osteophatische Verfahren',
  head: [
    ['script', {type: 'application/ld+json'}, JSON.stringify(jsonLd)],
    ['link', {rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-touch-icon.png'}],
    ['link', {rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicon-32x32.png'}],
    ['link', {rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicon-16x16.png'}],
    ['link', {rel: 'manifest', href: '/site.webmanifest'}],
    ['link', {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5'}],
    ['meta', {name: 'msapplication-TileColor', content: '#da532c'}],
    ['meta', {name: 'theme-color', content: '#ff9940'} ],
  ],
  themeConfig: {
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
