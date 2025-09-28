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
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
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
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
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
    icon: eduskill,
    iconBg: "#161329",
    date: "Aug 2022 – Present",
    points: [
      "Led performance tuning across Rule Engine, Device Data, and Telemetry Management services by optimizing database queries and workflows, improving API latency and throughput by 30%+.",
      "Designed and developed telemetry processing and user management microservices, achieving 99% test coverage and improving stability.",
      "Drove JavaScript-to-TypeScript migration using GitHub Copilot, improving code quality and developer efficiency.",
      "Promoted secure development after Security Champion training; mentored juniors and guided architecture decisions in Agile teams.",
      "Tech: TypeScript, Node.js, Nest.js, Express, AWS, Azure, PostgreSQL, MongoDB, Splunk",
    ],
  },
  {
    title: "Software Backend Developer",
    company_name: "Reliance Jio, Mumbai, India",
    icon: mathwork,
    iconBg: "#161329",
    date: "Jul 2019 – Aug 2022",
    points: [
      "Built core features for IoT platform supporting 1M+ devices and 10K+ users; shipped 100+ scalable APIs.",
      "Reduced API response time by 40% via Redis caching and asynchronous tasks (Celery).",
      "Implemented asynchronous notification service with Celery and Redis for reliable, real-time messaging.",
      "Introduced URL-based API versioning for backward compatibility and seamless upgrades.",
      "Improved read performance and reduced replication lag with MySQL master-slave and custom pinning.",
      "Led weekly releases and cross-functional collaboration with product, UI, and Android teams.",
      "Tech: Python, Django, Flask, MySQL, MongoDB, Redis, Celery, JMeter, Grafana",
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
    image: weatherpedia,
    source_code_link: "https://github.com/upen-123969/movie-application",
  },
  {
    name: "API Performance Tuning Playbook",
    description:
      "Patterns and reference snippets for caching, async jobs, and DB query tuning used to double API throughput.",
    tags: [
      { name: "Redis", color: "blue-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
      { name: "Celery", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/upen-123969",
  },
  {
    name: "IoT Platform Components",
    description:
      "Curated examples of telemetry pipelines, user services, and API versioning from large-scale IoT work.",
    tags: [
      { name: "Django", color: "blue-text-gradient" },
      { name: "FastAPI", color: "green-text-gradient" },
      { name: "NestJS", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/upen-123969",
  },
];
