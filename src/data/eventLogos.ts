import type { ImageMetadata } from 'astro';
import olympics from '../assets/logos/paris-2024-olympics.png';
import paralympics from '../assets/logos/paris-2024-paralympics.png';
import uefaWomen from '../assets/logos/uefa-womens-champions-league.png';
import paraEuro from '../assets/logos/european-para-championships-2023.png';
import formulaE from '../assets/logos/formula-e.png';
import formula1 from '../assets/logos/formula-1.png';
import athletics from '../assets/logos/european-athletics-rome-2024.png';
import tchoukball from '../assets/logos/tchoukball-nations-cup.png';

// Logos shown in the hero strip. Add more as Sahil supplies them.
export const eventLogos: { name: string; src: ImageMetadata }[] = [
  { name: 'Paris 2024 Olympic Games', src: olympics },
  { name: 'Paris 2024 Paralympic Games', src: paralympics },
  { name: 'Formula 1', src: formula1 },
  { name: 'UEFA Women’s Champions League', src: uefaWomen },
  { name: 'European Para Championships 2023', src: paraEuro },
  { name: 'Formula E', src: formulaE },
  { name: 'European Athletics Championships Rome 2024', src: athletics },
  { name: 'Tchoukball Nations Cup', src: tchoukball },
];
