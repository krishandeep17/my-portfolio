import {
  bootstrap,
  css,
  dalleClone,
  git,
  html,
  javascript,
  mongodb,
  movieHub,
  mui,
  nodejs,
  portfolioWebsite,
  reactjs,
  reactQuizApp,
  redux,
  smartEats,
  tailwind,
  workoutApp,
} from "../assets";

export const technologies = [
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

export const projects = [
  {
    id: 1,
    name: "DALL-E Clone",
    description:
      "MERN stack web application that converts a given prompt into an image using OpenAI API. The resulting image can then be downloaded by the user. Tailwind CSS is used for styling and Cloudinary is used for image storage and management.",
    tags: [
      {
        name: "cloudinary",
        color: "text-indigo-600",
      },
      {
        name: "express",
        color: "text-neutral-600",
      },
      {
        name: "mongodb",
        color: "text-emerald-600",
      },
      {
        name: "nodejs",
        color: "text-slate-600",
      },
      {
        name: "openai",
        color: "text-purple-600",
      },
      {
        name: "react",
        color: "text-cyan-600",
      },
    ],
    image: dalleClone,
    source_code_link: "https://github.com/krishandeep17/dall-e-clone",
    website_link: "https://text2image-ai.netlify.app",
  },
  {
    id: 2,
    name: "Workout App",
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
        name: "react-router",
        color: "text-red-600",
      },
      {
        name: "swiper",
        color: "text-blue-600",
      },
      {
        name: "rapidAPI",
        color: "text-violet-600",
      },
    ],
    image: workoutApp,
    source_code_link: "https://github.com/krishandeep17/workout-app",
    website_link: "https://workoutpal.netlify.app",
  },
  {
    name: "Portfolio Website",
    description:
      "Web application that designed to showcase my work and provide information about my skills, experience, and background. Features stunning 3D graphics, animations, email sending, and top performance with Suspense and Preload.",
    tags: [
      {
        name: "emailjs",
        color: "text-amber-600",
      },
      {
        name: "react-three",
        color: "text-teal-600",
      },
      {
        name: "framer-motion",
        color: "text-pink-600",
      },
      {
        name: "react",
        color: "text-cyan-600",
      },
      {
        name: "react-tilt",
        color: "text-rose-600",
      },
    ],
    image: portfolioWebsite,
    source_code_link: "https://github.com/krishandeep17/my-portfolio",
    website_link: "https://krishandeep.netlify.app",
  },
  {
    name: "React Quiz App",
    description:
      "A dynamic quiz web application developed using the power of React. Challenge yourself with React Framework quizzes, track your scores, and enjoy a seamless user experience. Learn, play, and explore new horizons through interactive quizzes!",
    tags: [
      {
        name: "css",
        color: "text-blue-600",
      },
      {
        name: "json-server",
        color: "text-rose-600",
      },
      {
        name: "react",
        color: "text-cyan-600",
      },
    ],
    image: reactQuizApp,
    source_code_link: "https://github.com/krishandeep17/react-quiz-app",
    website_link: "https://react-quizzler.netlify.app",
  },
  {
    name: "MovieHub",
    description:
      "MovieHub is a web application built with React that allows users to search for movies, rate them, and create a personalized watched list. It provides a seamless and user-friendly experience for movie enthusiasts to discover, track, and manage their favorite films.",
    tags: [
      {
        name: "css",
        color: "text-blue-600",
      },
      {
        name: "react",
        color: "text-cyan-600",
      },
      {
        name: "omdbAPI",
        color: "text-amber-600",
      },
    ],
    image: movieHub,
    source_code_link:
      "https://github.com/krishandeep17/practicing-react/tree/main/05-movies-hub",
    website_link: "https://moviehubbb.netlify.app",
  },
  {
    name: "Smart Eats",
    description:
      "Frontend project for a website that utilizes artificial intelligence to provide personalized food recommendations, recipes, and nutritional advice based on individual preferences and dietary needs. The website is built using HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "css",
        color: "text-blue-600",
      },
      {
        name: "html",
        color: "text-orange-600",
      },
      {
        name: "javascript",
        color: "text-yellow-600",
      },
    ],
    image: smartEats,
    source_code_link: "https://github.com/krishandeep17/smart-eats",
    website_link: "https://smarteats.netlify.app",
  },
];
