export const projectsList: (ProjectModel & { colSpan: number })[] = [
  {
    id: '1',
    name: 'Exam Samaya',
    slug: 'exam-samaya',
    description: 'E learning platform for students of engineering and medical to prepare for their license examination in nepal.',
    thumbnail: 'https://alkyhora.sirv.com/portfolio/exam_samaya_cover.png',
    logo: 'https://alkyhora.sirv.com/portfolio/logo.png',
    liveLink: 'https://examsamaya.com/',
    journey: {
      scopes: ["mobile", "web app"],
      status: "live",
    },
    colSpan: 3,
    details: {
      summary: 'E learning platform for students of engineering and medical to prepare for their license examination in nepal.',
      inDepth: [
        {
          title: "Problem",
          description: "Students in Nepal have to go through a lot of hassle to prepare for their license examination and there are very few resources available online to help them prepare for their exams."
        },
      ],
    },
  },
  {
    id: '2',
    name: 'Bodh News Application',
    slug: 'bodh-news-application',
    description: 'News application for people in nepal to get latest news and updates with political biases.',
    thumbnail: 'https://alkyhora.sirv.com/portfolio/bodh-news.png',
    liveLink: null,
    logo: 'https://alkyhora.sirv.com/portfolio/talewears_logo.png',
    journey: {
      scopes: ["mobile", "web app"],
      status: "ongoing",
    },
    colSpan: 1,

    details: {
      summary: 'Bodh news application is a news application for people in nepal to get latest news and updates alongside the political biases that might be present in the news.',
      inDepth: [
        {
          title: "Problem",
          description: "News these days have become very baised and people are not able to get the real news. This application aims to provide the news with the political biases that might be present in the news."
        },
      ],
    },
  },
  {
    id: '3',
    name: 'Talewears',
    slug: 'talewears',
    description: 'E commerce site for selling anything related to clothing and fashion.',
    thumbnail: 'https://alkyhora.sirv.com/portfolio/talewears-cover.png',
    liveLink: null,
    logo: 'https://alkyhora.sirv.com/portfolio/talewears_logo.png',
    journey: {
      scopes: ["web"],
      status: "ongoing",
    },
    colSpan: 2,

    details: {
      summary: 'E commerce site for selling anything related to clothing and fashion.',
      inDepth: [
        {
          title: "Problem",
          description: "People in Nepal have to go through a lot of hassle to buy clothes and fashion items. This platform aims to provide a platform where people can buy and sell clothes and fashion items easily."
        },
      ],
    },
  },
  {
    id: '4',
    name: 'Ghar Phela',
    slug: 'ghar-phela',
    description: 'Real estate platform for buying and selling properties in nepal.',
    thumbnail: 'https://alkyhora.sirv.com/portfolio/gharphela_cover.png',
    liveLink: 'https://gharphela.netlify.app/',
    logo: 'https://alkyhora.sirv.com/portfolio/gharphela_logo.png',
    journey: {
      scopes: ["web"],
      status: "live",
    },
    colSpan: 2,

    details: {
      summary: 'Real estate platform for buying and selling properties in nepal.',
      inDepth: [
        {
          title: "Problem",
          description: "People in Nepal have to go through a lot of hassle to buy and sell properties. This platform aims to provide a platform where people can buy and sell properties easily."
        },
      ],
    },
  },
  // {
  //   id: '5',
  //   name: 'HISSAN Exam management system',
  //   description: 'Exam management system for HISSAN Kaski, digitalizing the examination process for schools and colleges.',
  //   thumbnail: 'https://alkyhora.sirv.com/portfolio/b.png',
  //   liveLink: null,
  //   logo: 'https://alkyhora.sirv.com/portfolio/talewears_logo.png',
  //   journey: {
  //     scopes: ["web app"],
  //     status: "ongoing",
  //   },
  //   colSpan: 1,
  // },
];
