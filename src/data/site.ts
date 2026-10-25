export const site = {
  name: 'Sahil Kolhe',
  tagline: 'Sports event specialist.',
  headline: { lead: 'Let’s make something', accent: 'worth cheering for.' },
  // Shown in the pill above the headline
  badge: ['Sports Events', 'Season 2026', 'Asian Games'],
  // Cycled by the typewriter line (roles from his project list)
  roles: [
    'Broadcast Manager',
    'VIP Transport Coordinator',
    'Ticketing & Hospitality',
    'Media & Communications',
  ],
  // Nav links. Only sections that exist are listed; add the rest as each step lands.
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],
  focus: ['Broadcasting', 'Technology', 'Transport', 'Ticketing', 'Media'],
  links: {
    topmate: 'https://topmate.io/sahil_kolhe10',
    linkedin: 'https://www.linkedin.com/in/sahil-kolhe10',
    instagram: 'https://www.instagram.com/sahil_kolhe10',
    email: 'mailto:sahilmkolhe@gmail.com',
    // Replace public/resume.pdf with Sahil's real resume (keep the same file name)
    resume: '/resume.pdf',
  },
  // Hand-entered for now; update when projects are added.
  // 12 distinct events (Tchoukball Nations Cup counted once); 8 countries excludes Octa League (location unknown).
  statGroups: [
    {
      title: 'Career',
      items: [
        { value: '12', label: 'Events' },
        { value: '8+', label: 'Countries' },
        { value: '2+', label: 'Years' },
      ],
    },
    {
      title: 'Big stages',
      items: [
        { value: '2023', label: 'Formula 1' },
        { value: '2024', label: 'Olympics' },
        { value: '2026', label: 'Asian Games' },
      ],
    },
  ],
};
