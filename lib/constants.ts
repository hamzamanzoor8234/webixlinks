import type {
  CapabilityCard,
  EngagementStep,
  NavLink,
  Pillar,
  ProjectType,
  SecurityStandard,
  ServiceBlock,
  FaqItem,
} from "./types";

export const NAV_LINKS: NavLink[] = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/articles", label: "Insights" },
  { href: "/faq", label: "FAQ" },
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
      "Architecting autonomous agent networks and semantic retrieval pipelines using state-of-the-art open-source and proprietary foundation models.",
    capabilities: [
      "Fine-tuning models using QLoRA, LoRA, and PEFT techniques",
      "Orchestration via LangGraph, LangChain, and LlamaIndex frameworks",
      "Vector database engineering (Pinecone, Milvus, Qdrant, pgvector)",
      "Advanced hybrid RAG (Retrieval-Augmented Generation) pipelines",
      "Evaluations, safety frameworks, and model guardrails (Guardrails AI)",
    ],
    icon: "sparkles",
  },
  {
    title: "Custom Development Stacks",
    description:
      "Engineering production-grade backend APIs, microservices architectures, and full-stack web platforms optimized for high throughput and sub-second latency.",
    capabilities: [
      "Modular NestJS architectures with strict dependency injection",
      "MERN (MongoDB, Express, React, Node.js) & MEAN (Angular) stacks",
      "Modernizing legacy PHP and monolithic systems into TypeScript microservices",
      "High-performance RESTful, GraphQL, and gRPC API designs",
      "Transactional schema designs (PostgreSQL RLS, MongoDB atomic sessions)",
    ],
    icon: "code",
  },
  {
    title: "UI/UX Design Studio",
    description:
      "Designing scalable, WCAG-compliant design systems and high-fidelity interactive wireframes verified against user workflows.",
    capabilities: [
      "Figma design system creation and cross-team token governance",
      "WCAG 2.2 accessibility auditing and semantic HTML layouts",
      "Complex dashboard visual designs and real-time canvas UX",
      "Rapid interactive prototyping and low-friction user flows",
      "Smooth micro-interactions and Framer Motion transitions",
    ],
    icon: "palette",
  },
];

export const ENGAGEMENT_STEPS: EngagementStep[] = [
  {
    step: "01",
    title: "Architectural Discovery & Spec Definition",
    description:
      "We map system boundaries, data flows, threat models, and success metrics into a signed technical specification before implementation begins.",
  },
  {
    step: "02",
    title: "Rapid Component Prototyping & Schema Design",
    description:
      "High-fidelity prototypes and database schemas are validated against real workloads—eliminating architectural surprises in production.",
  },
  {
    step: "03",
    title: "Cloud Infrastructure Hardening & Multi-Region Deploy",
    description:
      "IAM policies, isolated environments, CI/CD pipelines, and multi-region failover are configured with infrastructure-as-code discipline.",
  },
  {
    step: "04",
    title: "Continuous Evaluation & Agentic Optimization",
    description:
      "Post-launch telemetry, LLM evaluation harnesses, and performance regression gates keep systems improving under production load.",
  },
];

export const SECURITY_STANDARDS: SecurityStandard[] = [
  {
    title: "Automated Rate-Limiting",
    description:
      "Edge and application-layer throttling protect APIs from abuse, credential stuffing, and burst traffic without degrading legitimate users.",
    icon: "gauge",
  },
  {
    title: "Strict Data Isolation Boundaries",
    description:
      "Tenant-scoped storage, row-level access controls, and environment separation ensure no cross-client data leakage at rest or in transit.",
    icon: "shield",
  },
  {
    title: "Secure Tokenization",
    description:
      "Short-lived JWTs, rotated API keys, and vault-backed secrets replace hardcoded credentials across every service boundary.",
    icon: "key",
  },
  {
    title: "Pre-commit Husky Code Security",
    description:
      "Git hooks enforce linting, secret scanning, and dependency audits before code reaches shared branches or production pipelines.",
    icon: "git-branch",
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

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is an autonomous AI agent network and how does it improve operations?",
    answer: "An autonomous AI agent network is a system where multiple role-specific AI agents (such as planners, researchers, executors, and critics) collaborate to execute multi-step workflows. Unlike single-shot chatbot prompts that suffer from context loss and memory degradation, agent networks operate under strict tool-calling contracts, maintain a persistent external state (using Redis or PostgreSQL), and execute self-correcting logic loops to validate outputs against business rules before committing changes.",
    category: "Generative AI & LLMs",
  },
  {
    question: "Why choose NestJS over standard Express.js for enterprise backend development?",
    answer: "We choose NestJS because it provides a highly structured, modular architecture out-of-the-box, leveraging Dependency Injection (DI) as a first-class primitive. This structure enforces clean, maintainable boundaries between modules, unlike raw Express projects that frequently suffer from messy dependency graphs. Additionally, NestJS has native integration with TypeScript and official ecosystem packages for queues, microservices, and WebSockets, making it ideal for scaling development teams.",
    category: "Custom Development Stacks",
  },
  {
    question: "What are the benefits of direct-to-S3 presigned uploads in cloud architectures?",
    answer: "Direct-to-S3 uploads bypass application servers by allowing clients to ingest binary files directly into object storage. This reduces compute overhead (CPU/bandwidth) on EC2 instances or serverless containers by 60%+ and eliminates upload bottlenecks. Security is maintained by having the NestJS backend issue short-lived, tenant-scoped presigned URLs with strict IAM least-privilege policies, preventing unauthorized bucket mutations.",
    category: "Cloud DevOps & Security",
  },
  {
    question: "How does Webixlinks ensure isolated data boundaries in multi-tenant SaaS systems?",
    answer: "We implement defense-in-depth data isolation across all stack layers. This includes tenant-scoped database schemas, row-level access controls (RLS) in PostgreSQL, tenant-prefixed S3 keys, and JWT verification inside NestJS controllers that validate the client's tenant authorization at every API boundary. This architecture ensures no cross-client data leakage at rest or in transit.",
    category: "Cloud DevOps & Security",
  },
  {
    question: "Which cloud platforms do you support and how do you manage deployments?",
    answer: "Webixlinks architects and deploys enterprise systems across AWS, Google Cloud Platform (GCP), and Microsoft Azure. We use Infrastructure as Code (IaC) principles with Terraform and GitHub Actions CI/CD pipelines. This ensures environment consistency, automated testing, isolated staging and production boundaries, and multi-region failover configurations.",
    category: "Cloud DevOps & Security",
  },
];
