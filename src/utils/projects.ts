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
      images: ['https://alkyhora.sirv.com/portfolio/talewears_logo.png', 'https://alkyhora.sirv.com/portfolio/bodh-news.png', 'https://alkyhora.sirv.com/portfolio/talewears_logo.png'],
      inDepth: [
        {
          title: "There was no way to find out if the news we were reading was biased or not.",
          description: `
            In an era of widespread misinformation and media polarization, it's essential for readers to understand the perspectives that shape the news
            they consume. By identifying potential biases, the app empowers users to critically assess the information,
            fostering a more balanced view of current events. This approach encourages media literacy and helps reduce the influence of echo chambers.
            Ultimately, our goal is to promote a more informed and engaged public. Hence we created a news application that highlights political biases to
            provide users with a more transparent and informed reading experience.
          `,
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
      summary: `
        Ghar Phela is a comprehensive real estate platform in Nepal designed to simplify the process of buying and selling properties.
        The app features an intuitive interface that allows users to easily browse and list properties, compare prices, and view detailed
        property information, including location, amenities, and photos. It also offers search filters to help users find properties that
        meet their specific needs, and direct messaging for secure communication between buyers and sellers. With its focus on transparency,
        efficiency, and user convenience, Ghar Phela aims to revolutionize the real estate market in Nepal.
      `,
      images: [
        "https://alkyhora.sirv.com/portfolio/gharphela_cover.png",
        "https://alkyhora.sirv.com/portfolio/talewears_logo.png",
      ],
      inDepth: [
        {
          title: "Finding new properties has never been easier",
          description: `
            We created Ghar Phela, a real estate platform for buying and selling properties in Nepal, to streamline and
            simplify the property market. The platform addresses the need for a reliable, user-friendly service that connects
            buyers and sellers directly, making the process more transparent and efficient. With Ghar Phela, users can easily
            browse listings, compare prices, and access essential property details. Our goal is to make real estate transactions
            more accessible and trustworthy in Nepal, catering to the growing demand for a modern, digital approach to property dealings.
          `,
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
