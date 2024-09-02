export const projectsList: (ProjectModel & { colSpan: number })[] = [
  {
    name: 'Exam Samaya',
    slug: 'exam-samaya',
    description: 'E learning platform for students of engineering and medical to prepare for their license examination in nepal.',
    thumbnail: 'https://alkyhora.sirv.com/portfolio/exam_samaya_cover.png',
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
    name: 'Bodh News Application',
    slug: 'bodh-news-application',
    description: 'News application for people in nepal to get latest news and updates with political biases.',
    thumbnail: 'https://alkyhora.sirv.com/portfolio/bodh_news/bodh_news_cover.gif',
    liveLink: null,
    journey: {
      scopes: ["mobile", "web app"],
      status: "ongoing",
    },
    colSpan: 1,

    details: {
      summary: `
        In Nepal, accessing the latest news is relatively easy due to the large number of publishers disseminating news across various platforms. However, consuming news in a way that is informed by an understanding of the political biases behind each news source is a more challenging task.
        <br /><br />
        Currently, there are almost no reliable sources in Nepal that guarantee unbiased news. The vast majority of news outlets have affiliations or inclinations that can color their reporting, making it difficult for readers to differentiate between factual reporting and opinionated content.
        <br /><br />
        To address this gap, we decided to create Bodh News, an innovative news application designed to provide readers with a clearer picture of the biases inherent in the news they consume. The goal of Bodh News is to empower readers by highlighting the potential political leanings of each news source, allowing them to make more informed decisions and understand the broader context behind the news stories.
      `,
      images: ['https://alkyhora.sirv.com/portfolio/bodh_news/bodh-news-design-showcase.png', 'https://alkyhora.sirv.com/portfolio/bodh_news/bodh-news-design-showcase-2.png', 'https://alkyhora.sirv.com/portfolio/bodh_news/bodh-news-design-system.png',],
      inDepth: [
        {
          title: "There was no way to find out if the news we were reading was biased or not.",
          description: `
            Before bodh news there was no way to find out if news were biased or not in Nepal, but now with bodh news users can read the news from the sources they want with knowledge of biases in the news.
            They are the masters of their own news consumption. They can choose the news sources based on their political biases and can read the news from the sources they trust.
          `,
        },

        {
          title: "Design System",
          description: `
            For the design system of bodh news we used a more minimalistic color scheme with a focus on typography and readability. We also used a lot of white space to make the app feel more open and less cluttered.
          `,
        },

        {
          title: "Core of the system, the algorithm",
          description: `
            Currently being developed the core algorithm of the system is what will make bodh news unique. The algorithm will scrape and analyze news from more than 50 news sources in Nepal and rank them based on their political biases.
            The algorithm will also categorize the news based on their topics and provide users with a better way of consuming news. On top of those deduplication and summarization of news will also be added to the system in near future.
          `,
        },
      ],
    },
  },
  {
    name: 'Talewears',
    slug: 'talewears',
    description: 'E commerce site for selling anything related to clothing and fashion.',
    thumbnail: 'https://alkyhora.sirv.com/portfolio/talewears/talewears_cover.png',
    liveLink: null,
    journey: {
      scopes: ["web"],
      status: "ongoing",
    },
    colSpan: 2,

    details: {
      summary: `
        Talewears is an e-commerce platform that aims to provide a convenient and user-friendly shopping experience for people in Nepal. The platform offers a wide range of clothing and fashion items, including traditional wear, modern fashion, and accessories, all available for purchase online.
        <br /><br />
        With its intuitive interface and secure payment system, Talewears makes it easy for users to browse, select, and order products from the comfort of their homes. The platform also features a rating and review system, allowing customers to share their feedback and experiences with others.
        <br /><br />
        Talewears is designed to cater to the diverse needs and preferences of customers in Nepal, offering a curated selection of high-quality products at competitive prices. Whether you're looking for the latest fashion trends or traditional attire, Talewears has something for everyone
      `,
      images: [
        "https://alkyhora.sirv.com/portfolio/talewears/talewears-design-showcase.png",
        "https://alkyhora.sirv.com/portfolio/talewears/talewears-logo-showcase.png",
        "https://alkyhora.sirv.com/portfolio/talewears/talewears-design-system.png",
      ],
      inDepth: [
        {
          title: "One place for all fashion needs",
          description: "One of the main goals of Talewears is to provide a one-stop shop for all fashion needs in Nepal. By enlisting shops from all over Nepal, Talewears aims to provide a wide range of products to its customers."
        },
        {
          title: "Design System",
          description: `
            One of the challenges of Talewears is to make the design system flexible enough to accommodate the wide range of products that will be available on the platform while maintaining a consistent look and feel.
            We decided to go with a minimalistic design with focus more on the products rather than their surroundings. Instead of throughing bunch of random details at the users, they are presented with range of products in minimal and clean way.
          `,
        },
      ],
    },
  },
  {
    name: 'Himalayan heating & cooling inc',
    description: 'HVAC company based in USA.',
    thumbnail: 'https://alkyhora.sirv.com/portfolio/himalayan_heating_cooling/himalayan_heating_cooling_cover.png',
    liveLink: null,
    journey: {
      scopes: ["web app", "logo"],
      status: "ongoing",
    },
    colSpan: 2,

    slug: 'himalayan-heating-cooling-inc',
    details: {
      summary: `
        HVAC(Heating, Ventilation, and Air Conditioning) system is a combination of technologies used to provide thermal comfort and acceptable indoor air quality. <b>Himalayan Heating & Cooling Inc</b>
        is a HVAC company based in USA. Although based in USA the founders of the company are originally from Nepal. They needed a website and logo in order to promote their company.`,
      images: [
        "https://alkyhora.sirv.com/portfolio/himalayan_heating_cooling/himalayan-heating-cooling-design-showcase.png",
        "https://alkyhora.sirv.com/portfolio/himalayan_heating_cooling/himalayan-heating-cooling-logo-showcase.png",
        "https://alkyhora.sirv.com/portfolio/himalayan_heating_cooling/himalayan-heating-cooling-design-system.png",
      ],
      inDepth: [
        {
          title: "Need for website and logo",
          description: `
            Our clients needed a website and logo to promote their company but has very little knowledge about how to go about it.
            They wanted website that could showcase their services and features to their customers and contact information for their clients to reach out to them.
            <br /><br />
            They also wanted a logo that could represent their company as a HVAC company but also represented the Himalayan range of Nepal.
            <br /><br />
            We went on multiple iterations of logo and website design to come up with final design that they loved.
          `,
        }
      ],
    }
  },
  {
    name: "Bal Kashi Gurung",
    slug: "bal-kashi-gurung",
    description: "Personal portfolio website for Bal Kashi Gurung.",
    thumbnail: "https://alkyhora.sirv.com/portfolio/balkashi_gurung/balkashi_cover.png",
    liveLink: null,
    colSpan: 1,
    journey: {
      scopes: ["web"],
      status: "ongoing",
    },
    details: {
      summary: `
        Bal Kashi Gurung is a renowned artist and golf player in Nepal. She needed a personal portfolio website to showcase her works and awards.
      `,
      images: [
        // "https://alkyhora.sirv.com/portfolio/balkashi_gurung/balkashi-design-showcase.png",
        "https://alkyhora.sirv.com/portfolio/balkashi_gurung/balkashi-logo-showcase.png",
        "https://alkyhora.sirv.com/portfolio/balkashi_gurung/balkashi-design-system.png",
      ],
      inDepth: [
        {
          title: "Minimalisim and elegance",
          description: `
            One of the request made from the client was for the website to be minimalistic and elegant. After multiple disucssions and iterations of ideas we decided to go with minimal black and white color scheme with focus on typography and images.
            <br /><br />
            We also decided to make the logo a monogram of her initials to make it more elegant and minimalistic. After few iterations we decided to go with <b><i>Cinzel Decorative</i></b> font using her initials for the logo.
          `,
        }
      ],
    },
  },
  {
    name: 'Ghar Phela',
    slug: 'ghar-phela',
    description: 'Real estate platform for buying and selling properties in nepal.',
    thumbnail: 'https://alkyhora.sirv.com/portfolio/ghar_phela/gharphela_cover.png',
    liveLink: 'https://gharphela.netlify.app/',
    journey: {
      scopes: ["web"],
      status: "live",
    },
    colSpan: 3,

    details: {
      summary: `
        Ghar Phela is a comprehensive real estate platform designed to simplify the process of buying and selling properties.
        <b>It is a showcase project created in order to show our skills and flexibility in different genre of projects.</b>
        <br /> <br />
        The app features an intuitive interface that allows users to easily browse and list properties, compare prices, and view detailed
        property information, including location, amenities, and photos. It also offers search filters to help users find properties that
        meet their specific needs, and direct messaging for secure communication between buyers and sellers. With its focus on transparency,
        efficiency, and user convenience, Ghar Phela aims to revolutionize the real estate market in Nepal.
      `,
      images: [
        "https://alkyhora.sirv.com/portfolio/ghar_phela/ghar-phela-design-showcase-1.png",
        "https://alkyhora.sirv.com/portfolio/ghar_phela/ghar-phela-logo-showcase.png",
        "https://alkyhora.sirv.com/portfolio/ghar_phela/ghar-phela-design-showcase-2.png",
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
];
