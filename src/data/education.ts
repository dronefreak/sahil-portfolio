// From Sahil's LinkedIn details. Newest first.
export type Degree = {
  level: string;
  title: string;
  /** Extra line under the title, e.g. minors */
  detail?: string;
  school: string;
  place?: string;
  dates: string;
  grade?: string;
  activities?: string[];
};

export const education: Degree[] = [
  {
    level: 'Master’s degree',
    title: 'Global Sport Business Masters',
    detail: 'Minors in Digital Transformation',
    school: 'AMOS Sport Business School',
    place: 'Paris, France',
    dates: 'Sep 2022 – Dec 2024',
  },
  {
    level: 'Bachelor’s degree',
    title: 'B.Tech, Mechanical Engineering',
    school: 'Vellore Institute of Technology',
    dates: 'Jul 2018 – Jun 2022',
    grade: '8.63',
    activities: ['AIESEC', 'Team Anant', 'ASME', 'Sports Coordinator at Rivera'],
  },
];
