// Nodes for the hero constellation. x/y are 0-1 positions inside the box.
// `proof` is shown on hover and only names events from Sahil's own project list.
export type Skill = { name: string; x: number; y: number; color: string; proof: string };

export const skills: Skill[] = [
  // Broadcast & media (top left)
  { name: 'Broadcasting', x: 0.2, y: 0.2, color: '#ea3a3a', proof: 'Asian Games · Tchoukball Nations Cup' },
  { name: 'Media & Comms', x: 0.4, y: 0.1, color: '#ea3a3a', proof: 'European Para Championships · Tchoukball Nations Cup' },
  { name: 'Social Media', x: 0.14, y: 0.42, color: '#ea3a3a', proof: 'Tchoukball Nations Cup' },
  // Technology (centre)
  { name: 'Technology', x: 0.46, y: 0.34, color: '#8e9bf0', proof: 'Formula E · UEFA Super Cup' },
  // Guests (right)
  { name: 'Ticketing', x: 0.78, y: 0.18, color: '#e1811f', proof: 'Formula 1 Dutch GP · UEFA Super Cup' },
  { name: 'Hospitality', x: 0.86, y: 0.42, color: '#e1811f', proof: 'Formula 1 Dutch GP' },
  // Transport (bottom)
  { name: 'Event Transport', x: 0.3, y: 0.7, color: '#8e9bf0', proof: 'UEFA Women’s Champions League Final' },
  { name: 'VIP Transport', x: 0.14, y: 0.88, color: '#8e9bf0', proof: 'Paris 2024 Olympics' },
  // Operations (bottom right)
  { name: 'Volunteer Mgmt', x: 0.62, y: 0.62, color: '#eeeded', proof: 'Paris 2024 · Asian Games' },
  { name: 'Venue Mgmt', x: 0.82, y: 0.72, color: '#eeeded', proof: 'Tchoukball Nations Cup · Asian Games' },
  { name: 'Stakeholders', x: 0.5, y: 0.86, color: '#eeeded', proof: 'Every event' },
];

export const links: [string, string][] = [
  ['Broadcasting', 'Media & Comms'], ['Broadcasting', 'Social Media'], ['Media & Comms', 'Social Media'],
  ['Broadcasting', 'Technology'], ['Media & Comms', 'Technology'], ['Technology', 'Ticketing'],
  ['Ticketing', 'Hospitality'], ['Technology', 'Event Transport'], ['Event Transport', 'VIP Transport'],
  ['Hospitality', 'Venue Mgmt'], ['Venue Mgmt', 'Volunteer Mgmt'], ['Volunteer Mgmt', 'Technology'],
  ['Volunteer Mgmt', 'Stakeholders'], ['Event Transport', 'Stakeholders'], ['Stakeholders', 'VIP Transport'],
  ['Venue Mgmt', 'Stakeholders'], ['Ticketing', 'Volunteer Mgmt'],
];
