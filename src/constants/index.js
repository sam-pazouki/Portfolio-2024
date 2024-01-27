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
  figma,
  docker,
  tech1,
  shop,
  newsapp,
  threejs,
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
    title: "Front-end Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Responsive layout",
    icon: creator,
  },
];

//Technologies
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

//Experience part
const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Disaster Accountability Project(volunteer)",
    date: "Jul 2023 - Nov 2023",
    points: [
      "Worked with an agile team of 10 members and provided end-to-end solutions for customers.",
      "Daily code maintenance, debugging problems and resolving problems. (fixed duration project as a volunteer)",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Main activities and technologies: CSS, HTML, Angular14, Git and Github, AWS, Storybook, tests."
    ],
  },
  {
    title: "Front-End stack Developer",
    company_name: "JExperts",
    date: "Dec 2021 - Sept 2023",
    points: [
      "Developing and Worked with a team dedicated to developing solutions for LATAM. Specifically, in the SIGA project",
      "Collaborating with cross-functional teams Comprehensive Airport Management System, which is responsible for airport operations, flights, aircraft, take-off",
      "Implementing landing and other services that complement the management of an airport.",

      "The objective of SIGA is to provide a robust and efficient solution for LATAM in order to manage all activities.",
      "elated to airport management around the world. As part of my work, I had the opportunity to be present in meetings with LATAM to understand the demands and needs regarding operations.",
      " I also led the migration of the entire system frontend from AngularJS to Angular 14 and provided guidance to other members of the development team, according to prior alignment with the Product Owner (PO).",
      "Designed and Implemented interfaces and classes using Object Oriented Programming features.Daily maintenance of code, debugging issues and solving clients problems.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "SOA TECNOLOGIA ",
    date: "Aug 2021 - Dec 2021",
    points: [
      "I worked in startup with advanced web development technologies Development and maintenance of Santa Catarina's Integrated Fiscal Planning and Management System - SIGEF with a focus on improvements and updates technologies in legacy systems (fixed duration project*).",
      "Main technologies: CSS, HTML, Bootstrap 5, React, .NET, MySQL, Angular 12 miogration,",
      "The tests used multi-state management like Redux, Context.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: " Electronic services counter office",
    date: "Feb 2014 - Dec 2017",
    points: [
      "Daily code maintenance, debugging problems and resolving customers problems. Visual Studio code used.",
      "experience by 20%. Daily maintenance of code, debugging issues and solving clients problems.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "implement Rest API using ASP net Web API used SQL server as database.",
    ],
  },
];




//Projects
const projects = [
  {
    name: "Tech-Education",
    description:
      "Web-based platform This site allows you to choose and use the online course you want by purchasing an annual subscription.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tech1,
    source_code_link: "https://https://github.com/sam-pazouki/Tech-Education-platform.com/",
  },
  {
    name: "shopping-card",
    description:
      "Web application that enables users to search for any product, this site has price and you can add your product in card then directly you can go the payment method.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: shop,
    source_code_link: "https://https://github.com/sam-pazouki/React-shopping-card.com/",
  },
  {
    name: "News-App",
    description:
      "A cool website to search news about developing and tech stuff.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: newsapp,
    source_code_link: "https://https://github.com/sam-pazouki/News-App?tab=readme-ov-file.com/",
  },
];

export { services, technologies, experiences, projects };
