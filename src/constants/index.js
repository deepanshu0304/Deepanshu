import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  firebase,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  flutter,
  angular,
  flask,
  next,
  aws,
  postgre,
  oracle,
  qest,
  gdsc,
  samudra
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular JS",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Flask",
    icon: flask,
  },

  {
    name: "PostgreSQL",
    icon: postgre,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "firebase",
    icon: firebase,
  },
    {
    name: "AWS",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Server Technology Intern",
    company_name: "Oracle",
    icon: oracle,
    iconBg: "#383E56",
    date: "May 2024 - July 2024",
    points: [
      "Contributed to the OCI Networking team, working on cloud-based networking solutions.",
      "Gained in-depth understanding of OCI architecture and its core networking components.",
      "Enhanced knowledge of cloud networking protocols, troubleshooting techniques, and issue escalation processes.",
      "Analyzed customer-reported issues related to OCI networking",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Qest",
    icon: qest,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - May 2024",
    points: [
      "Developed and maintained web applications using AngularJs enhancing user interface and performance.",
      "Assisted in backend development with NodeJs and ExpressJs, contributing to the creation of RESTful APIs",
      "Participated in code reviews, contributing to cleaner, more maintainable code.",
      "Actively participated in daily stand-up meetings to discuss project progress.",
    ],
  },
  {
    title: "ML and Backend Developer",
    company_name: "COEAI",
    icon: samudra,
    iconBg: "#383E56",
    date: "Jul 2024 - Sep 2024",
    points: [
      "Developed an app that suggests safe routes to users using KNN for safety score calculations.",
      "Built and maintained the backend using Flask and machine learning techniques to analyze crime data and accident data",
      "Several other feature like chatbot, live location sharing and SOS were implemented ",
      "Presented the app under Project SAMUDRA to the IIT Delhi panel, earning high appreciation.",
    ],
  },
  {
    title: "App Developer Lead",
    company_name: "GDSC",
    icon: gdsc,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - May 2024",
    points: [
      "Led the development and deployment of mobile application as part of GDSC.",
      "Organized workshops on app development, teaching others about new tools and techniques.",
      "Used Google tools like Firebase, Flutter, and Cloud in app development to add more features.",
      "Helped with GDSC events and hackathons, guiding younger developers and promoting teamwork.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Find Loved Ones",
    description:
      "Mobile application that enables community based lost person locator which aimed at assisting users in locating lost friends and family members.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/orgs/EnigmaEnforcers/repositories",
  },
  {
    name: "Streamify",
    description:
      "Web application for interactive video streaming which uses RTMP/WHIP protocoles and other features such as real time chat, user authentication folow/unfollow user.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/deepanshu0304/Streamify",
  },
  {
    name: "Exam Invigilation",
    description:
      "Mobile application that uses face-recognition model for efficient exam invigilation such as student verification, attendance tracking.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/orgs/Exam-Face-Verifier/repositories",
  },
];

export { services, technologies, experiences, testimonials, projects };
