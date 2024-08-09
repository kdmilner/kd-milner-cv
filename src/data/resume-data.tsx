import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "KD Milner",
  initials: "KM",
  location: "Arlington, TX, USA",
  locationLink: "https://www.google.com/maps/place/Arlington,+TX",
  about:
    "Multi-talented content creator who strives to create high-quality and entertaining visuals for viewers",
  summary:
    "I am dedicated to developing software and products for businesses to ensure client engagement and easygoing navigation",
  avatarUrl: "/Users/kdeezy/Downloads/photo.svg",
  personalWebsiteUrl: "[YOUR_WEBSITE_URL]",
  contact: {
    email: "kaliyahmilner@ymail.com",
    tel: "+19185519703",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/kdmilner",
        icon: "GitHubIcon",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kd-milner/",
        icon: "LinkedInIcon",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/kdeezybaby03",
        icon: "TwitterIcon",
      },
    ],
  },
  education: [
    {
      school: "Tarrant County College",
      degree: "Associates Degree of Arts",
      start: "2022",
      end: "2024",
    },
  ],
  work: [
    {
      company: "YouTube",
      link: "https://www.youtube.com/@KDEEZYBABY",
      badges: ["Remote"],
      title: "Content Creator",
      logo: "YouTubeLogo",
      start: "2016",
      end: "current",
      description:
        "Creating visually appealing videos for the entertainment of viewers.",
    },
    {
      company: "Walmart",
      link: "https://www.walmart.com/",
      badges: ["Arlington, TX"],
      title: "Personal Shopper",
      logo: "WalmartLogo",
      start: "2021",
      end: "2022",
      description:
        "Grocery shopping for customers.",
    },
    {
      company: "Six Flags Over Texas",
      link: "https://www.sixflags.com",
      badges: ["Arlington, TX"],
      title: "Food Handler/Cashier",
      logo: "SixFlagsLogo",
      start: "2017",
      end: "2021",
      description:
        "Handled food and operated cash register at Six Flags Over Texas.",
    },
  ],
  skills: [
    "Graphic Design",
    "Content Creation",
    "Content Editing",
    "Communication",
    "Software Design",
  ],
  projects: [
    {
      title: "YouTube Channel",
      techStack: [
        "Content Creation",
        "Content Editing",
        "Videography",
      ],
      description:
        "A channel to create entertainment for viewers.",
      logo: "YouTubeLogo",
      link: {
        label: "Youtube.com",
        href: "https://www.youtube.com/@KDEEZYBABY",
      },
    },
    {
      title: "Personal Website",
      techStack: [
        "Software Development",
      ],
      description:
        "A personal website to showcase my resume.",
      logo: "PersonalWebsiteLogo",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "E-Commerce Website",
      techStack: [
        "Software Design",
        "Software Development",
      ],
      description:
        "Website designed to showcase products.",
      logo: "E-CommerceLogo",
      link: {
        label: "",
        href: "",
      },
    },
    // ... You can add more projects following this structure
  ],
} as const;
