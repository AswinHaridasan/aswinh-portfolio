/**
- ╔══════════════════════════════════════════════════════════════╗
- ║  THE ONLY FILE YOU NEED TO EDIT FOR TEXT CONTENT             ║
- ║  (images live in /public – see README.md)                    ║
- ╚══════════════════════════════════════════════════════════════╝
 */

/* ───────────── 1. BASIC INFO ───────────── */
export const SITE = {
  name: 'ASWIN HARIDASAN', // shown in navbar, footer, hero, about
  pageTitle: 'ASWIN HARIDASAN – Software Engineer', // browser tab title
  role: 'SOFTWARE ENGINEER • PYTHON & REACT SPECIALIST', // footer subtitle
  email: 'aswinharidasan6777@gmail.com',
  // digits only, with country code, no + or spaces (e.g. 919876543210)
  phone: '919447646570',
  whatsappMessage: 'Hi Aswin, I visited your portfolio and would like to get in touch.',
  available: true,
};

/* ───────────── 2. HERO (top of page) ───────────── */
export const HERO = {
  eyebrow: 'SOFTWARE ENGINEER • PYTHON & REACT SPECIALIST',
  headline: 'ASWIN HARIDASAN', // big text, use CAPS
  roles: ['Software Engineer', 'Python & React Specialist'] as [string, string],
  tagline: 'Engineering reliable full-stack web applications with scalable Python backends and modern React interfaces.',
  primaryButton: 'EXPLORE MY WORK',
  secondaryButton: 'Get In Touch',
  image: '/assets/hero-red-bg.jpg', // 1920x1080, subject on the RIGHT side
  imageAlt: 'Portrait of ASWIN HARIDASAN',
  imagePosition: '69% center', // CSS object-position fallback
};

/* ───────────── 3. LOADING SCREEN ───────────── */
export const LOADER = {
  statement: 'ENGINEERING CLEAN CODE FROM PYTHON BACKENDS TO REACT INTERFACES',
  redWords: ['PYTHON', 'REACT'], // words highlighted in red
};

/* ───────────── 4. ABOUT ───────────── */
export const ABOUT = {
  eyebrow: 'Software Engineer · Python & React · Full Stack Builder',
  portrait: '/media/profile.webp', // 4:5 portrait photo
  portraitAlt: 'Portrait of ASWIN HARIDASAN',
  portraitCaption: 'Software Engineer', // small red text under the name on the photo
  paragraphs: [
    'I am a Software Engineer specializing in Python and React, focused on building end-to-end web applications that are fast, maintainable, and intuitive. With a strong foundation in Computer Science, I bridge robust backend logic with responsive, mobile-first frontend design.',
    'From architecting clean REST APIs and SQL databases to crafting seamless component-driven user interfaces, I enjoy solving practical engineering problems and shipping production-ready software.',
  ],
  technologies: ['Python', 'React JS', 'Django', 'JavaScript (ES6+)', 'SQL / PostgreSQL', 'HTML5 & CSS3'],
  focus: ['Full Stack Software Engineering', 'React UI Architecture', 'Python Backend & API Systems'],
};

/* ───────────── 5. SOCIAL LINKS (footer) ───────────── */
export const SOCIALS = [
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/aswin-haridasan/' },
  { id: 'x', label: 'X', href: 'https://x.com/aswin_haridasan' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/aswinharidasan.exe/' },
] as const;

/* ───────────── 6. TECHNICAL SKILLS (6 cards look best) ───────────── */
export const SKILL_CARDS: { name: string; category: string; level: string }[] = [
  { name: 'Python & Backend', category: 'Python · Django · REST APIs', level: 'Advanced' },
  { name: 'React & Frontend', category: 'React JS · Vite · JavaScript', level: 'Advanced' },
  { name: 'Database Design', category: 'SQL · PostgreSQL · SQLite', level: 'Proficient' },
  { name: 'Modern UI Styling', category: 'HTML5 · CSS3 · Responsive Design', level: 'Advanced' },
  { name: 'Client State & Routing', category: 'React Hooks · Router · LocalStorage', level: 'Proficient' },
  { name: 'Tools & Deployment', category: 'Git · GitHub · Docker · Netlify', level: 'Proficient' },
];

/* ───────────── 6b. TECH STACK STRIP (logos under the skills) ─────────────
- Use names with a built-in logo: React, JavaScript, Python, FastAPI, PostgreSQL,
- Supabase, SQLite, Three.js, GSAP. Any other name still shows as a lettered badge. */
export const TECH_STACK: string[] = [
  'Python',
  'React',
  'JavaScript',
  'Django',
  'PostgreSQL',
  'SQLite',
  'OpenAI',
  'TensorFlow',
  'FastAPI'
];

/* ───────────── 7. PROJECTS ─────────────
- Thumbnails: put project-<n>-1.jpg, -2.jpg, -3.jpg in /public/assets/thumbnails/
- (card cycles through 1-3). Set poster to the "-1.jpg" file.
- Add liveUrl / repoUrl to show "View Live" / "View Code" buttons.
- 6 or 9 projects fill the 3D grid best. */
export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  videoUrl?: string;
  embedUrl?: string;
  driveUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  kind?: 'video' | 'software';
  poster?: string;
  description?: string;
  tags?: string[];
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'tt-phoneplanet',
    kind: 'software',
    title: 'T&T - PhonePlanet',
    subtitle: 'Mobile Shop Web Application',
    category: 'Python & Django',
    poster: '/assets/thumbnails/project-1-1.jpg',
    description:
      'T&T PhonePlanet is a Django-based mobile shop web application that allows customers to browse smartphones, view offers, and make online purchases or inquiries.',
    tags: ['Python', 'Django', 'HTML/CSS', 'JavaScript', 'SQL'],
    repoUrl: 'https://github.com/AswinHaridasan',
  },
  {
    id: 'iweddings-palakkad',
    kind: 'software',
    title: 'iWeddings Palakkad',
    subtitle: 'Wedding Studio Web Application',
    category: 'Python & Django',
    poster: '/assets/thumbnails/project-2-1.jpg',
    description:
      'iWeddings Palakkad is a Django-based wedding studio web application that allows clients to explore services, view portfolios, and book photography and videography services online.',
    tags: ['Python', 'Django', 'HTML/CSS', 'JavaScript', 'SQL'],
    repoUrl: 'https://github.com/AswinHaridasan',
  },
  {
    id: 'lumora-events',
    kind: 'software',
    title: 'Lumora Events',
    subtitle: 'Event Management Web Application',
    category: 'Python & Django',
    poster: '/assets/thumbnails/project-3-1.jpg',
    description:
      'Lumora Events is a Django-based event management web application that allows clients to explore event packages, view galleries, and book weddings, corporate events, and parties online.',
    tags: ['Python', 'Django', 'HTML/CSS', 'JavaScript', 'SQL'],
    repoUrl: 'https://github.com/AswinHaridasan',
  },
  {
    id: 'selfie-weddings',
    kind: 'software',
    title: 'Selfie Weddings',
    subtitle: 'Wedding Studio Web Application',
    category: 'Python & Django',
    poster: '/assets/thumbnails/project-4-1.jpg',
    description:
      'Selfie Weddings is a Django-based wedding studio web application that allows clients to explore services, view portfolios, and book photography and videography services online.',
    tags: ['Python', 'Django', 'HTML/CSS', 'JavaScript', 'SQL'],
    repoUrl: 'https://github.com/AswinHaridasan',
  },
  {
    id: 'craftman-interiors',
    kind: 'software',
    title: 'Craftman Interiors',
    subtitle: 'Interior Design Studio Web Application',
    category: 'Python & Django',
    poster: '/assets/thumbnails/project-5-1.png',
    description:
      'Craftman Interiors is a Django-based interior design web application that allows clients to explore design portfolios, browse room packages, and submit consultation or quotation inquiries online.',
    tags: ['Python', 'Django', 'HTML/CSS', 'JavaScript', 'SQL'],
    repoUrl: 'https://github.com/AswinHaridasan',
  },
  {
    id: 'foliodesk-bookshop',
    kind: 'software',
    title: 'FolioDesk',
    subtitle: 'Book Shop Management System',
    category: 'Python & Django',
    poster: '/assets/thumbnails/project-6-1.png',
    description:
      'FolioDesk is a React.js-based bookstore management system that streamlines inventory management, billing, supplier tracking, stock alerts, and sales reporting.',
    tags: ['Python', 'Django', 'HTML/CSS', 'JavaScript', 'SQL'],
    repoUrl: 'https://github.com/AswinHaridasan',
  },
];

/* ───────────── 8. SERVICES & PRICING ───────────── */
export const SERVICES_PRICING = [
  { id: 'service-1', title: 'Full Stack Web Application', priceLabel: 'Starts from', price: '₹15,000', featured: true },
  { id: 'service-2', title: 'React Frontend Development', priceLabel: 'Starts from', price: '₹8,000', featured: false },
  { id: 'service-3', title: 'Python Backend & API Integration', priceLabel: 'From – to', price: '₹7,000 – ₹20,000', featured: false },
  { id: 'service-4', title: 'Business Website & Portfolio', priceLabel: 'From – to', price: '₹5,000 – ₹12,000', featured: false },
  { id: 'service-5', title: 'Code Optimization & Bug Fixes', priceLabel: 'From – to', price: '₹2,000 – ₹6,000', featured: false },
] as const;

/* ───────────── 9. HEADLINE NUMBERS (under hero) ───────────── */
export const CLIENT_STATS = [
  { id: 'stat-1', value: 10, suffix: '+', label: 'Projects Engineered' },
  { id: 'stat-2', value: 8, suffix: '+', label: 'Core Technologies' },
  { id: 'stat-3', value: 100, suffix: '%', label: 'Clean & Responsive Code' },
] as const;

/* Derived – do not edit */
export const WHATSAPP_URL = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMessage)}`;