module.exports = {
  siteTitle: 'Uditi Arora',
  siteDescription:
    'Uditi Arora is a software engineer who specializes in coding websites and learning new things. She also loves to work with Machine Learning in her free time.',
  siteKeywords:
    'Uditi Arora, Uditi, Arora, uditiarora, software engineer, front-end engineer, web developer, javascript, MNIT',
  siteUrl: 'https://uditiarora.github.io',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Uditi Arora',
  location: 'Bangalore, India',
  email: 'uditiarora@gmail.com',
  github: 'https://github.com/uditiarora',
  twitterHandle: '@uditiarora',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/uditiarora',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/uditi-arora',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/uditiarora',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/uditiarora',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/uditiarora',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
