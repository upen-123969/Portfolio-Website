import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const techCategories = {
  languages: {
    title: "Programming Languages",
    technologies: [
      { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
      { name: "TypeScript", icon: "https://skillicons.dev/icons?i=typescript" },
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=javascript" },
      { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
      { name: "SQL", icon: "https://skillicons.dev/icons?i=mysql" },
    ]
  },
  frameworks: {
    title: "Frameworks & Libraries",
    technologies: [
      { name: "React", icon: "https://skillicons.dev/icons?i=react" },
      { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Django", icon: "https://skillicons.dev/icons?i=django" },
      { name: "FastAPI", icon: "https://skillicons.dev/icons?i=fastapi" },
      { name: "Express.js", icon: "https://skillicons.dev/icons?i=express" },
    ]
  },
  databases: {
    title: "Databases & Storage",
    technologies: [
      { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgresql" },
      { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
      { name: "Redis", icon: "https://skillicons.dev/icons?i=redis" },
      { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
    ]
  },
  cloud: {
    title: "Cloud & DevOps",
    technologies: [
      { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" },
      { name: "Azure", icon: "https://skillicons.dev/icons?i=azure" },
      { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
      { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
      { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
    ]
  },
  monitoring: {
    title: "Monitoring & Observability",
    technologies: [
      { name: "Grafana", icon: "https://skillicons.dev/icons?i=grafana" },
      { name: "Prometheus", icon: "https://skillicons.dev/icons?i=prometheus" },
      { name: "Splunk", icon: "https://skillicons.dev/icons?i=splunk" },
    ]
  }
};

const TechCard = ({ name, icon }) => (
  <div className="w-24 h-24 flex flex-col items-center justify-center bg-tertiary rounded-lg p-3 hover:bg-opacity-80 transition-all duration-300">
    <img 
      src={icon} 
      alt={name}
      className="w-12 h-12 object-contain mb-2"
      loading="lazy"
    />
    <span className="text-white text-xs font-medium text-center">{name}</span>
  </div>
);

const TechCategory = ({ title, technologies }) => (
  <div className="mb-12">
    <h3 className={`${styles.sectionSubText} text-center mb-6`}>{title}</h3>
    <div className="flex flex-wrap justify-center gap-4">
      {technologies.map((tech) => (
        <TechCard key={tech.name} {...tech} />
      ))}
    </div>
  </div>
);

const Tech = () => (
  <div className="w-full">
    {Object.entries(techCategories).map(([key, category]) => (
      <TechCategory key={key} {...category} />
    ))}
  </div>
);

export default SectionWrapper(Tech, "");
