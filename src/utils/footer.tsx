import { Facebook, Linkedin, MessageCircle } from "react-feather";

export const footerConnect = [
  {
    location: [
      {
        id: 0,
        location: "Ranipauwa",
      },
      {
        id: 1,
        location: "Pokhara, Kaski",
      },
      {
        id: 2,
        location: "Nepal",
      },
    ],
  },

  {
    connect: [
      {
        id: 0,
        contact: "+977 9825140802",
        link: "tel:9825140802",
      },
      {
        id: 1,
        contact: "+977 9866011579",
        link: "tel:9866011579",
      },
      {
        id: 2,
        contact: "thankadigital@gmail.com",
        link: "mailto:thankadigital@gmail.com",
      },
    ],
  },
];

export const footerLinks = [
  {
    menuTitle: "Company",
    links: [
      {
        name: "Privacy Policy",
        link: "#",
      },
      {
        name: "Terms of Service",
        link: "#",
      },
    ],
  },
  {
    menuTitle: "Website Links",
    links: [
      {
        name: "About us",
        link: "/about",
      },
      {
        name: "Careers",
        link: "/careers",
      },
      {
        name: "Blogs",
        link: "/blogs",
      },
    ],
  },
  {
    menuTitle: "Important Links",
    links: [
      {
        name: "Youtube",
        link: "https://www.youtube.com/channel/UCoAxJVPdJ3Dx3P_PL_fesXw",
      },
      // {
      //   name: "Discord",
      //   link: "#",
      // },
      {
        name: "Dev.to",
        link: "https://dev.to/thankadigital",
      },
    ],
  },
];

export const footerContacts = [
  {
    id: 0,
    icon: <Linkedin />,
    link: "https://www.linkedin.com/company/96073578/admin/dashboard/",
    name: "link to thanka digital linkedin",
  },
  {
    id: 1,
    icon: <Facebook />,
    link: "https://www.facebook.com/thankadigital1",
    name: "link to thanka digital facebook",
  },
  {
    id: 2,
    icon: <MessageCircle />,
    link: "https://wa.me/9808449001",
    name: "link to thanka digital whatsapp",
  },
];
