export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  link?: string;
  github?: string;
  devpost?: string;
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
    id: "4",
    title: "LizardKohn",
    description: "Scale Counter CLI — counts lizard scales from images and outputs to a specified directory. Python command-line tool with split count select for dorsal scale analysis, used in herpetology research.",
    tech: ["Python", "argparse"],
    github: "https://github.com/Quantara/LizardKohn",
  },
  {
    id: "3",
    title: "Quantara",
    description: "Organization and platform for research tools and portfolio projects — Wildloop, PetPulse, LizardKohn, and more. Hosts applications and utilities under the quantara.co domain.",
    tech: ["DNS", "Hosting", "Research"],
    link: "https://quantara.co",
  },
  {
    id: "2",
    title: "PetPulse",
    description: "AI-driven pet monitoring that translates motion, sound, and visuals into meaningful events. Features breed finder, audio analysis, health insights, vet history, and community — built for Hacklahoma 2026.",
    tech: ["React", "FastAPI", "Python", "PostgreSQL", "Gemini", "Arduino"],
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=320&fit=crop",
    link: "https://petpulse.quantara.co",
    devpost: "https://devpost.com/software/petpulse-l4obma",
    github: "https://github.com/Chimp56",
  },
];
