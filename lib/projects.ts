export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  org?: string;
};

export const projects: Project[] = [
  {
    slug: "runtimewall",
    title: "RuntimeWall",
    description:
      "Security-first runtime and governance platform for autonomous AI agents — isolated sandboxes, runtime firewall, MCP security, session replay, and observability.",
    tags: ["AI Agents", "Security", "Go", "Docker", "Open Source"],
    github: "https://github.com/RuntimeWall/RuntimeWall",
    org: "RuntimeWall",
  },
  {
    slug: "graphos",
    title: "GraphOS",
    description:
      "AI-native engineering intelligence platform that turns codebases, runtimes, and developer workflows into a live knowledge graph for developers and AI agents.",
    tags: ["AI", "Knowledge Graph", "Developer Tools", "Open Source"],
    github: "https://github.com/RuntimeWall/GraphOS",
    org: "RuntimeWall",
  },
  {
    slug: "neuralverse",
    title: "NeuralVerse",
    description:
      "My personal blog website — a cyberpunk-neon Next.js site showcasing 800+ blogs on AI, DevRel, cloud, and open source.",
    tags: ["Next.js", "Blog", "TypeScript", "Tailwind"],
    github: "https://github.com/Ayush7614/NeuralVerse",
  },
  {
    slug: "ayushbuilds-dev",
    title: "ayushbuilds.dev",
    description:
      "Personal portfolio site — DevRel, AI agents, open source, security, and the projects I ship in public.",
    tags: ["Next.js", "Portfolio", "Framer Motion", "TypeScript"],
    github: "https://github.com/Ayush7614/ayushbuilds.dev",
    live: "https://ayushbuilds-dev.vercel.app",
  },
];
