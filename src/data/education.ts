// From Sahil's LinkedIn details. Newest first.
export type Degree = {
  level: string;
  title: string;
  /** Extra line under the title, e.g. minors */
  detail?: string;
  school: string;
  place?: string;
  dates: string;
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
    activities: ['Marketing', 'Business Analytics', 'Data Analysis', 'Business Strategy'],
  },
  {
    level: 'Bachelor’s degree',
    title: 'Mechanical Engineering',
    school: 'Vellore Institute of Technology',
    dates: 'Jul 2018 – Jun 2022',
    activities: ['AIESEC', 'Team Anant', 'ASME', 'Sports Coordinator at Rivera'],
  },
];
