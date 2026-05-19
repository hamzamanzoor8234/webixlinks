import type {
  CapabilityCard,
  NavLink,
  Pillar,
  ProjectType,
  ServiceBlock,
} from "./types";

export const NAV_LINKS: NavLink[] = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const TECH_STACK = [
  "React",
  "Node.js",
  "NestJS",
  "Angular",
  "PHP",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "GCP",
  "Azure",
  "OpenAI / LLMs",
] as const;

export const CAPABILITIES: CapabilityCard[] = [
  {
    title: "GenAI & Agentic Workflows",
    description:
      "Autonomous systems that reason, plan, and execute across your enterprise stack.",
    highlights: [
      "Autonomous goal-driven agents",
      "Proprietary LLM tuning & evaluation",
      "Custom RAG pipelines",
      "Vector database engineering",
    ],
    icon: "brain",
  },
  {
    title: "Full-Stack & Mobile Engineering",
    description:
      "Production-grade applications engineered for scale, security, and maintainability.",
    highlights: [
      "MERN & MEAN architectures",
      "Secure NestJS microservices",
      "Enterprise PHP modernization",
      "Cross-platform native mobile",
    ],
    icon: "layers",
  },
  {
    title: "Cloud DevOps & Security",
    description:
      "Multi-cloud infrastructure with rigorous isolation and audit-ready boundaries.",
    highlights: [
      "AWS S3 private modules, EC2, CloudFront",
      "GCP & Azure multi-region deploys",
      "System auditing & hardening",
      "Isolated data boundaries",
    ],
    icon: "shield",
  },
];

export const PILLARS: Pillar[] = [
  {
    title: "Performance First",
    description:
      "We engineer for minimal overhead—optimized serverless workflows, edge caching strategies, and sub-second perceived load times. Every architectural decision is measured against real-world latency and throughput benchmarks.",
    icon: "zap",
  },
  {
    title: "Ironclad Security",
    description:
      "Deep system audits, rate-limiting, secure object storage modules, and strict data isolation are non-negotiable. We implement Helmet.js hardening, secure API gateways, and defense-in-depth patterns across every layer.",
    icon: "lock",
  },
  {
    title: "Accountability",
    description:
      "No vague promises—absolute architectural transparency. You receive clear documentation, decision logs, and honest trade-off analysis so your engineering leadership stays in control.",
    icon: "eye",
  },
];

export const SERVICES: ServiceBlock[] = [
  {
    title: "Generative AI & LLMs",
    description:
      "End-to-end AI systems from model selection to production inference pipelines.",
    capabilities: [
      "Model optimization & fine-tuning",
      "Custom API pipelines for LLM orchestration",
      "Conversational AI architecture",
      "Agentic workflow design & deployment",
      "RAG and embedding strategy",
    ],
    icon: "sparkles",
  },
  {
    title: "Custom Development Stacks",
    description:
      "Specialized expertise across modern and legacy stacks with clean migration paths.",
    capabilities: [
      "NestJS framework architecture & modules",
      "MERN & MEAN full-stack systems",
      "Legacy PHP & monolith modernization",
      "REST & GraphQL API design",
      "Database schema evolution & migrations",
    ],
    icon: "code",
  },
  {
    title: "UI/UX Design Studio",
    description:
      "Component-driven interfaces that make complex data flows feel effortless.",
    capabilities: [
      "Rapid wireframing & prototyping",
      "Design system creation & governance",
      "Complex dashboard & data visualization UX",
      "Accessibility-first component libraries",
      "Design-to-engineering handoff workflows",
    ],
    icon: "palette",
  },
];

export const PROJECT_TYPES: {
  id: ProjectType;
  label: string;
  description: string;
}[] = [
  {
    id: "agentic-ai",
    label: "Agentic AI / LLMs",
    description: "Autonomous agents, RAG, and custom model pipelines",
  },
  {
    id: "full-stack",
    label: "Full-Stack App Development",
    description: "MERN, MEAN, NestJS, and mobile applications",
  },
  {
    id: "cloud-devops",
    label: "Cloud Infrastructure & DevOps",
    description: "AWS, GCP, Azure deployment and security",
  },
  {
    id: "ui-ux",
    label: "UI/UX Product Design",
    description: "Design systems, wireframes, and product UX",
  },
];
