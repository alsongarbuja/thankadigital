type dynamicObject = {
  [key: string]: any;
}

type CareerModel = {
  _id: string;
  title: string;
  description: string;
  salary: string;
  location: 'Remote' | 'On-site' | 'Hybrid';
  type: 'Full Time' | 'Part Time';
  experience: string;
  skills: string[];
  time: string;
};


type TeamModel = {
  _id: string;
  name: string;
  position: string;
  team: 'Core' | 'Members';
  imageUrl: string;
};

type ProjectModel = {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  logo: string;
  liveLink: string | null;
  detailLink: string;
  journey: dynamicObject;
};

// TODO: Change the blog model schema
type BlogModel = {
  title: string;
  description: string;
  user: {
    name: string;
    profile_image: string;
    website_url: string;
    github_username: string;
  };
  created_at: Date;
  edited_at: Date;
  tag_list: string[];
  url: string;
  slug: string;
  cover_image: string;
  social_image: string;
  canonical_url: string;
  reading_time_minutes: number;
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