import type { ImageMetadata } from 'astro:assets';
import olympics from '../assets/logos/paris-2024-olympics.png';
import paralympics from '../assets/logos/paris-2024-paralympics.png';
import uefaWomen from '../assets/logos/uefa-womens-champions-league.png';
import paraEuro from '../assets/logos/european-para-championships-2023.png';
import formulaE from '../assets/logos/formula-e.png';
import formula1 from '../assets/logos/formula-1.png';
import athletics from '../assets/logos/european-athletics-rome-2024.png';
import tchoukball from '../assets/logos/tchoukball-nations-cup.png';
import dutchGp from '../assets/events/f1-dutch-gp.jpg';
import footballSummit from '../assets/events/world-football-summit.jpg';
import olympicsPhoto from '../assets/events/paris-2024-olympics.jpg';
import paralympicsPhoto from '../assets/events/paris-2024-paralympics.jpg';
import tchoukballPhoto from '../assets/events/tchoukball-geneva.jpg';
import formulaEPhoto from '../assets/events/formula-e.jpg';
import paraEuroPhoto from '../assets/events/european-para-championships.jpg';
import athleticsPhoto from '../assets/events/european-athletics-rome.jpg';

// Filter chips above the grid. Each project lists the themes it belongs to.
export const themes = {
  broadcast: 'Broadcast & Media',
  transport: 'Transport',
  guest: 'Ticketing & Hospitality',
  tech: 'Technology',
  ops: 'Operations',
} as const;
export type Theme = keyof typeof themes;

export type Project = {
  name: string;
  year: number;
  /** Shown on the card, e.g. "Jan – Oct 2026" */
  date: string;
  /** Leave out when the role is not confirmed yet */
  role?: string;
  place: string;
  tags: Theme[];
  logo?: ImageMetadata;
  photo?: ImageMetadata;
  /** Where the photo's subject sits, for object-position */
  focus?: string;
};

// Newest first. Dates, roles and countries come from Sahil's brief.
export const projects: Project[] = [
  { name: 'Asian Games', year: 2026, date: 'Jan – Oct 2026', role: 'Broadcasting Manager', place: 'Japan', tags: ['broadcast'] },

  { name: 'Tchoukball Nations Cup', year: 2025, date: 'Nov – Dec 2025', role: 'Media & Broadcasting Manager', place: 'Switzerland', tags: ['broadcast'], logo: tchoukball },
  { name: 'Premier Padel', year: 2025, date: 'Oct 2025', role: 'Fan Service Coordinator', place: 'Germany', tags: ['guest', 'ops'] },

  { name: 'Tchoukball Nations Cup', year: 2024, date: 'Nov 2024 – Apr 2025', role: 'Social Media Production Coordinator', place: 'Switzerland', tags: ['broadcast'], logo: tchoukball },
  { name: 'Paris 2024 Olympic Games', year: 2024, date: 'Jul – Sep 2024', role: 'VIP Transport Coordinator', place: 'France', tags: ['transport', 'ops'], logo: olympics, photo: olympicsPhoto, focus: '50% 30%' },
  { name: 'Paris 2024 Paralympic Games', year: 2024, date: '2024', place: 'France', tags: ['ops'], logo: paralympics, photo: paralympicsPhoto, focus: '50% 85%' },
  { name: 'European Athletics Championships', year: 2024, date: 'Jun 2024', role: 'TV Graphics Operator', place: 'Italy', tags: ['broadcast', 'tech'], logo: athletics, photo: athleticsPhoto, focus: '50% 40%' },
  { name: 'UEFA Women’s Champions League Final', year: 2024, date: 'May 2024', role: 'Event Transport', place: 'Spain', tags: ['transport'], logo: uefaWomen },
  { name: 'Formula E', year: 2024, date: 'May 2024', role: 'Gaming Arena Technology Volunteer', place: 'Germany', tags: ['tech'], logo: formulaE, photo: formulaEPhoto, focus: '50% 40%' },

  { name: 'Tchoukball Nations Cup', year: 2023, date: 'Dec 2023', role: 'Media & Broadcast Volunteer', place: 'Switzerland', tags: ['broadcast'], logo: tchoukball, photo: tchoukballPhoto, focus: '50% 70%' },
  { name: 'World Football Summit', year: 2023, date: 'Sep 2023', role: 'Volunteer Staff', place: 'Spain', tags: ['ops'], photo: footballSummit, focus: '50% 50%' },
  { name: 'UEFA Super Cup Final', year: 2023, date: 'Aug 2023', role: 'Ticketing Technology Volunteer', place: 'Greece', tags: ['guest', 'tech'] },
  { name: 'Formula 1 Dutch Grand Prix', year: 2023, date: 'Aug 2023', role: 'Ticketing & Hospitality Volunteer', place: 'Netherlands', tags: ['guest'], logo: formula1, photo: dutchGp, focus: '50% 75%' },
  { name: 'European Para Championships', year: 2023, date: 'Aug 2023', role: 'Media & Communication Volunteer', place: 'Netherlands', tags: ['broadcast'], logo: paraEuro, photo: paraEuroPhoto, focus: '50% 90%' },

  { name: 'Octa League', year: 2022, date: '2022', role: 'Event Organizer', place: '', tags: ['ops'] },
];
