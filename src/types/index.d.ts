type dynamicObject = {
  [key: string]: unknown;
}

type CareerModel = {
  id: string;
  title: string;
  description: string;
  salary: string;
  location: 'Remote' | 'On-site' | 'Hybrid';
  type: 'Full Time' | 'Part Time' | 'Internship' | 'Contract Based';
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
  // id: string;
  name: string;
  slug: string;
  description: string;
  thumbnail: string;
  // logo: string;
  liveLink: string | null;
  journey: dynamicObject;

  details: {
    summary: string;
    images?: string[];
    inDepth: {
      title: string;
      image?: string;
      description: string;
    }[];
  };
};

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

type ApiResponse = {
  status: number;
  message?: string;
  data?: dynamicObject;
};

interface IActionState {
  message: string;
  isOk: boolean;
}
