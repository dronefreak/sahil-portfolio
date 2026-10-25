// From Sahil's brief. Years and the bachelor's institution were not given, so they are left out.
export type Degree = { level: string; title: string; school?: string; place?: string };

export const education: Degree[] = [
  {
    level: 'Master’s degree',
    title: 'Sports Management with Digital Transformation',
    school: 'AMOS Sports Business School',
    place: 'Paris, France',
  },
  {
    level: 'Bachelor’s degree',
    title: 'Engineering',
  },
];
