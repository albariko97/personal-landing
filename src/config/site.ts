export interface SiteConfig {
  name: string;
  initials: string;
  roles: string[];
  headline: string;
  subheadline: string;
  bio: string[];
  email: string;
  socials: {
    github: string;
    linkedin: string;
    spotify?: string;
    soundcloud?: string;
    youtube?: string;
  };
  navLinks: { label: string; href: string }[];
  bentoPillars: {
    title: string;
    subtitle: string;
    description: string;
    skills: string[];
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Álvaro Yepes Bonilla",
  initials: "AYB",
  roles: ["Full Stack Engineer", "Platform Engineer", "Sound Designer"],
  headline: "Full Stack & Platform Engineer building resilient cloud architecture, AI-driven tools, and original music.",
  subheadline: "Bridging end-to-end product development (Angular, .NET, Java, Node.js) with high-scale cloud platform engineering (Azure, Kubernetes, Terraform). Outside enterprise systems, I build AI automation tools and produce music.",
  bio: [
    "I’m a Systems & Computer Engineer and Industrial Engineer from Universidad de los Andes, with a minor in Music Recording Techniques.",
    "Over the past 6+ years, I’ve designed and shipped software across the entire stack—from consumer-facing Angular apps, Java Spring Boot microservices, and .NET APIs to mission-critical airline platforms at Amadeus. Today, as a Specialist Platform Engineer, I focus on cloud edge capabilities (API Gateway, custom hosting, CIAM), Infrastructure as Code with Terraform, Kubernetes, and OpenTelemetry observability.",
    "My curiosity sits at the intersection of systems engineering and creativity: from my early thesis using deep learning to compose musical melodies (RAItmo) to building CLI-driven AI agents, open-source developer utilities, and recording original demos."
  ],
  email: "alvaroyepes97@gmail.com",
  socials: {
    github: "https://github.com/alvaroyepes97",
    linkedin: "https://www.linkedin.com/in/alvaro-alfonso-yepes-bonilla-3033a417a/",
    spotify: "https://open.spotify.com",
    soundcloud: "https://soundcloud.com",
    youtube: "https://youtube.com"
  },
  navLinks: [
    { label: "About", href: "#about" },
    { label: "AI Projects", href: "#ai" },
    { label: "Tools", href: "#tools" },
    { label: "Music", href: "#music" },
    { label: "Contact", href: "#contact" }
  ],
  bentoPillars: [
    {
      title: "Full Stack Engineering",
      subtitle: "End-to-End Enterprise Systems",
      description: "Building responsive frontends and resilient backend services capable of scaling to millions of transactions. Deep experience in enterprise patterns and domain-driven design.",
      skills: ["Angular", "TypeScript", ".NET Core", "Java Spring Boot", "Node.js", "SQL", "REST / gRPC"]
    },
    {
      title: "Platform & Cloud Architecture",
      subtitle: "Cloud Edge, IaC & High Reliability",
      description: "Architecting cloud-native platforms, container orchestration, and automated delivery pipelines with zero downtime, robust telemetry, and rigorous security boundaries.",
      skills: ["Azure", "Kubernetes", "OpenShift", "Terraform", "API Gateway", "CIAM", "OpenTelemetry"]
    },
    {
      title: "AI Systems & Sound Engineering",
      subtitle: "Generative Workflows & Audio Production",
      description: "Exploring algorithmic composition, Model Context Protocol (MCP) agents, and multi-track audio production with studio-grade signal processing and mix engineering.",
      skills: ["AI Agents / MCP", "Deep Learning", "Python", "Music Recording", "Audio Mixing", "Acoustics"]
    }
  ]
};
