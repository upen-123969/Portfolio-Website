import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  moviepedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  CompileVortex,
  jio, 
  telstra,
  typescript,
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

export const services = [
  // { title: "C", icon: c },
  { title: "C/C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Javascript", icon: javascript },
  { title: "Typescript", icon: typescript },

];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Software Backend Developer",
    company_name: "Telstra, Bengaluru, India",
    icon: telstra,
    iconBg: "#161329",
    date: "Aug 2022 – Jul 2025",
    points: [
      "Led performance tuning across Rule Engine, Device Data, and Telemetry Management services by optimizing database queries and workflows, improving API latency and system throughput by over 30%.",
      "Designed and developed telemetry processing and user management microservices, achieving 99% test coverage and improving system stability.",
      "Led code reviews, guiding architecture choices, and mentoring juniors in a fast-paced Agile environment.",
      "Improved backend code quality and developer efficiency by using GitHub Copilot to drive JavaScript-to-TypeScript migration across core services.",
      "Promoted secure development culture across teams after completing Security Champion training on secure coding practices at Telstra.",
      "Tech stack: Javascript, TypeScript, Node.js, Express.js, Nest.js, AWS, AZURE, MongoDB, PostgreSQL, Splunk",
    ],
  },
  {
    title: "Software Backend Developer",
    company_name: "Reliance Jio, Mumbai, India",
    icon: jio,
    iconBg: "#161329",
    date: "Jul 2019 – Aug 2022",
    points: [
      "Led development of core features for Jio’s IoT platform, supporting 1M+ IoT Devices and 10K+ users, and helped deliver 100+ scalable APIs.",
      "Reduced API response time by 40% through Redis caching and asynchronous task handling with Celery.",
      "Integrated an asynchronous notification service using Celery and Redis in Django, ensuring reliable, real-time message delivery and improving customer engagement.",
      "Implemented language localization in the Jio Cattle app, improving accessibility for farmers in multiple Indian languages.",
      "Boosted database read efficiency and reduced replication lag by implementing a MySQL master-slave setup with a custom pinning strategy.",
      "Led weekly releases and code reviews while working closely with product managers, UI, and Android teams to ship customer-impacting features in a distributed, cross-functional environment.",
      "Introduced URL-based API versioning to maintain backward compatibility for existing consumers, enabling seamless feature upgrades and minimizing service disruption.",
      "Tech stack: Python, Django, Flask, MySQL, MongoDB, Postman, Redis, Celery, Jmeter, Grafana",
    ],
  },
];

export const projects = [
  {
    name: "Movie Discovery Platform (MERN)",
    description:
      "React app with real-time search, trending listings, and responsive UI using TMDB API. Deployed on GitHub Pages.",
    tags: [
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Express", color: "blue-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
      { name: "Node.js", color: "yellow-text-gradient" },
    ],
    image: moviepedia,
    source_code_link: "https://github.com/upen-123969/movie-application",
  }
];
