export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Wildloop",
    description: "Production full-stack platform for species recognition from user-uploaded images, audio, and video — improving data accessibility by 60%. Deployed ML inference services behind a REST API with Nginx, reducing prediction latency by 35%.",
    tech: ["Python", "Django Ninja", "PyTorch", "PostgreSQL", "React", "Nginx"],
    link: "https://wildloop.quantara.co",
    github: "https://github.com/Chimp56",
  },
  {
    id: "2",
    title: "Devpost Hackathon Project",
    description: "Hackathon-winning project showcasing innovative use of APIs and modern frontend design.",
    tech: ["React", "Node.js"],
    link: "https://devpost.com/Chimp56",
  },
  {
    id: "3",
    title: "Portfolio Website",
    description: "This very portfolio — built with React, Vite, and a clean design system with dark mode.",
    tech: ["React", "TypeScript", "Vite"],
    github: "https://github.com/Chimp56",
  },
  {
    id: "4",
    title: "API Integration Tool",
    description: "A utility for testing and integrating third-party APIs with a clean CLI and dashboard.",
    tech: ["Node.js", "TypeScript"],
    github: "https://github.com/Chimp56",
  },
  {
    id: "5",
    title: "Real-time Dashboard",
    description: "Live data visualization dashboard with WebSocket connections and responsive charts.",
    tech: ["React", "Firebase", "TypeScript"],
  },
  {
    id: "6",
    title: "Mobile-First Web App",
    description: "Progressive web app with offline support and push notifications.",
    tech: ["React", "Firebase"],
  },
  {
    id: "7",
    title: "Automation Scripts",
    description: "Collection of Node.js scripts for workflow automation and CI/CD helpers.",
    tech: ["Node.js", "TypeScript"],
    github: "https://github.com/Chimp56",
  },
  {
    id: "8",
    title: "Developer Toolkit",
    description: "Chrome extension and CLI tools to streamline development workflows.",
    tech: ["TypeScript", "React"],
  },
];
