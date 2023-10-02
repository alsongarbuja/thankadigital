type dynamicObject = {
  [key: string]: string;
}

type CareerModel = {
  identifier: string;
  title: string;
  description: string;
  salary: string;
  location: 'Remote' | 'On-site' | 'Hybrid';
  type: 'Full Time' | 'Part Time';
  experience: string;
  skills: string[];
  time: string;
};

type ProjectModel = {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  logo: string;
  liveLink: string;
  detailLink: string;
  caseStudy: dynamicObject;
};

type BlogModel = {
  id: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  description: string;
  tags: string[];
};

type TeamModel = {
  id: string;
  name: string;
  position: string;
  portfolio: string;
  imageUrl: string;
  linkedin: string;
  github: string;
  teamCategory: "Owners" | "Programmers" | "Designers" | "Marketers" | "Testers" | "Others";
}