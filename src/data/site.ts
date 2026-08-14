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
  email: 'hello@example.com', // TODO: replace with your real email
  // Path (in /public) to your CV/portfolio PDF for the download button.
  cv: '/Portfolio-Nayla-Aqila-Argia.pdf',

  // Short hero tagline (supports the highlighted word via {highlight}).
  tagline: 'I build impactful digital experiences, where technology, design, and a love for astronomy meet.',
  heroHighlight: 'astronomy',

  quote: {
    text: 'Astronomy compels the soul to look upwards and leads us from this world to another.',
    author: 'Plato',
  },

  about: {
    intro:
      "Hi, I'm Nayla Aqila Argia, passionate about technology, machine learning, and astronomy.",
    body: [
      'Currently pursuing a degree in Software Engineering Technology at IPB University, I am driven by curiosity and a desire to create impactful digital experiences through continuous learning and collaboration.',
      'I love combining what I learn with what I am curious about, from building responsive websites and designing intuitive interfaces, to tinkering with robotics and capturing the night sky through astrophotography.',
    ],
    facts: [
      { label: 'University', value: 'IPB University' },
      { label: 'Major', value: 'Software Engineering Tech' },
      { label: 'Based in', value: 'Bogor, Indonesia' },
      { label: 'Interests', value: 'Tech · ML · Astronomy' },
    ],
    // Portrait shown in the About section (place the file in /public/images).
    portrait: '/images/portrait.png',
  },

  // Quick top-line stats for the hero / about strip.
  stats: [
    { value: '10+', label: 'Projects built' },
    { value: '3', label: 'Internships' },
    { value: '5+', label: 'Communities & events' },
  ],

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
      group: 'Talents Mapping',
      items: ['Research', 'Creative Design', 'Analyzing & Sorting', 'Persuading', 'Cost Estimation', 'Recognizing'],
    },
  ],

  // Social links. Empty string hides the icon. Fill these in.
  socials: {
    email: 'mailto:hello@example.com', // TODO
    instagram: 'https://instagram.com/', // TODO
    youtube: 'https://youtube.com/', // TODO
    linkedin: 'https://linkedin.com/in/', // TODO
    github: 'https://github.com/', // TODO
  },

  // Project filter categories (must match `category` in project files).
  projectCategories: ['All', 'Web', 'UI/UX', 'Hardware', 'Creative'],

  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Community', href: '#community' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ],
};

export type Site = typeof site;
