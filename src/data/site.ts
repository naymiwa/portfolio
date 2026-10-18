// ─────────────────────────────────────────────────────────────
//  EDIT YOUR PORTFOLIO HERE
//  This file holds the "one-off" content (hero, about, skills,
//  contact, socials). Projects / experience / education / etc.
//  live as individual files in src/content/*, add a file there
//  and it shows up automatically.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Nayla Aqila Argia',
  shortName: 'Nayla',
  monogram: 'NA',
  role: 'Software Engineering Technology Student',
  location: 'IPB University · Bogor, Indonesia',
  email: 'naylaargia@gmail.com',
  // Path (in /public) to your CV/portfolio PDF for the download button.
  cv: '/Portfolio-Nayla-Aqila-Argia.pdf',

  quote: {
    text: 'Astronomy compels the soul to look upwards and leads us from this world to another.',
    author: 'Plato',
  },

  about: {
    intro:
      'Software Engineering Technology student at IPB University with hands-on experience in web development, robotics, and astronomy outreach.',
    body: [
      'I have interned as a Planetarium Guide & Moderator at SkyWorld TMII, a Robotics Assistant at Robotickidz, and a Digital Content Creator at MUNASAIN.',
      'I enjoy building responsive websites, prototyping interfaces, and turning curiosity about space into practical digital experiences.',
    ],
    facts: [
      { label: 'University', value: 'IPB University' },
      { label: 'Major', value: 'Software Engineering Tech' },
      { label: 'Based in', value: 'Bogor, Indonesia' },
    ],
  },

  // Grouped skills. Add/remove freely.
  skills: [
    {
      group: 'Development',
      items: ['HTML / CSS', 'JavaScript', 'Responsive Web', 'Arduino / IoT', 'Git & GitHub'],
    },
    {
      group: 'Design & Tools',
      items: ['UI / UX Design', 'Figma', 'Thunkable', 'Netlify', 'Canva'],
    },
    {
      group: 'Robotics & Hardware',
      items: ['Arduino / IoT', 'Robotics', 'Hardware Prototyping'],
    },
  ],

  // Social links. Empty string hides the icon. Fill these in.
  socials: {
    email: 'mailto:naylaargia@gmail.com',
    whatsapp: 'https://wa.me/6282299925225',
    instagram: 'https://instagram.com/naylargia',
    youtube: 'https://www.youtube.com/@naylaargia',
    linkedin: 'https://www.linkedin.com/in/naylaargia/',
    github: 'https://github.com/naymiwa',
  },

  // Project filter categories (must match `category` in project files).
  projectCategories: ['All', 'Web', 'UI/UX', 'Hardware', 'Creative'],

  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
};

export type Site = typeof site;
