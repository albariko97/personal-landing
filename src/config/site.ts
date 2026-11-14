export interface SiteConfig {
  name: string;
  initials: string;
  roles: string[];
  email: string;
  socials: {
    github: string;
    linkedin: string;
    spotify?: string;
    soundcloud?: string;
    youtube?: string;
  };
  divingCredentials: {
    agency: string;
    level: string;
    maxDepth: string;
    specialties: string[];
  };
  navLinks: { key: string; href: string }[];
  coreTech: { category: string; skills: string[] }[];
}

export const siteConfig: SiteConfig = {
  name: "Álvaro Yepes Bonilla",
  initials: "AYB",
  roles: ["Full Stack Engineer", "Platform Engineer", "PADI Open Water Diver", "Sound Designer"],
  email: "alvaroyepes97@gmail.com",
  socials: {
    github: "https://github.com/alvaroyepes97",
    linkedin: "https://www.linkedin.com/in/alvaro-alfonso-yepes-bonilla-3033a417a/",
    spotify: "https://open.spotify.com",
    soundcloud: "https://soundcloud.com",
    youtube: "https://youtube.com"
  },
  divingCredentials: {
    agency: "PADI",
    level: "Open Water Diver",
    maxDepth: "18m / 60ft",
    specialties: ["Buoyancy Control", "Coral Reef Navigation", "Gas Management"]
  },
  navLinks: [
    { key: "nav.about", href: "#about" },
    { key: "nav.ai", href: "#ai" },
    { key: "nav.tools", href: "#tools" },
    { key: "nav.music", href: "#music" },
    { key: "nav.diving", href: "#diving" },
    { key: "nav.events", href: "#events" },
    { key: "nav.contact", href: "#contact" }
  ],
  coreTech: [
    {
      category: "Full Stack Engineering",
      skills: ["Angular", "TypeScript", ".NET Core", "Java Spring Boot", "Node.js", "SQL"]
    },
    {
      category: "Platform & Cloud Architecture",
      skills: ["Azure", "Kubernetes", "OpenShift", "Terraform", "API Gateway", "OpenTelemetry"]
    },
    {
      category: "AI & Explorations",
      skills: ["AI Agents / MCP", "Deep Learning", "Music Recording", "Acoustics", "PADI Open Water"]
    }
  ]
};
