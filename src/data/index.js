import {
  bootstrap,
  css,
  foodbrain,
  git,
  html,
  javascript,
  mongodb,
  mui,
  nodejs,
  reactjs,
  redux,
  tailwind,
  trippassage,
  workoutpal,
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

const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "MUI",
    icon: mui,
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
    name: "Git",
    icon: git,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
];

const projects = [
  {
    name: "Trip Passage",
    description:
      "Full-stack project for booking tours, built using Node.js with Express for the backend, MongoDB as the database, and HTML Pug for the frontend. The application also includes JWT authentication and Stripe for payment processing.",
    tags: [
      {
        name: "bootstrap",
        color: "text-purple-600",
      },
      {
        name: "express",
        color: "text-stone-600",
      },
      {
        name: "mongodb",
        color: "text-green-600",
      },
    ],
    image: trippassage,
    source_code_link: "https://github.com/krishandeep17/trippassage",
    website_link: "https://github.com/krishandeep17/trippassage",
  },

  {
    name: "Workout Pal",
    description:
      "Web application built using React that allows users to view workouts, exercises targeting the same muscle group, exercises using the same equipment, and related YouTube videos. The application fetches data from a third-party API.",
    tags: [
      {
        name: "mui",
        color: "text-sky-600",
      },
      {
        name: "react",
        color: "text-cyan-600",
      },
      {
        name: "api",
        color: "text-red-600",
      },
    ],
    image: workoutpal,
    source_code_link: "https://github.com/krishandeep17/workoutpal",
    website_link: "https://workoutpal.netlify.app",
  },
  {
    name: "Food Brain",
    description:
      "Frontend project for a website that utilizes artificial intelligence to provide personalized food recommendations, recipes, and nutritional advice based on individual preferences and dietary needs. The website is built using HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "html",
        color: "text-orange-600",
      },
      {
        name: "css",
        color: "text-blue-600",
      },
      {
        name: "javascript",
        color: "text-yellow-600",
      },
    ],
    image: foodbrain,
    source_code_link: "https://github.com/krishandeep17/foodbrain",
    website_link: "https://foodbrain.netlify.app",
  },
];

export { technologies, projects };
