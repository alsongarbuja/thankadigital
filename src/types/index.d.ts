type dynamicObject = {
  [key: string]: any;
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
  journey: dynamicObject;
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
  id: number;
  name: string;
  position: string;
  portfolio: string | null;
  image: string;
  linkedin: string;
  github: string;
}

type Team = {
  coreTeams: TeamModel[];
  developers: TeamModel[];
  designers: TeamModel[];
  marketers: TeamModel[];
  testers: TeamModel[];
  others: TeamModel[];
}