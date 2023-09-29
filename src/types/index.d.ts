type dynamicObject = {
  [key: string]: string;
}

type CareerModel = {
  id: string;
  title: string;
  description: string;
  salary: string;
  location: 'Remote' | 'On-site' | 'Hybrid';
  type: 'Full Time' | 'Part Time';
  experience: string;
  skills: string[];
};

type ProjectModel = {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  liveLink: string;
  detailLink: string;
  caseStudy: dynamicObject;
};