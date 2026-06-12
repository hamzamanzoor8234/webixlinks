import type { CaseStudy } from "./types";

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "autonomous-lead-engine",
    title: "Autonomous Agent Networks for Automated Lead Engine",
    industry: "B2B Sales & Revenue Operations",
    techStack: [
      "OpenAI GPT-4",
      "LangGraph",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "HubSpot API",
      "TypeScript",
    ],
    challenge:
      "A high-growth B2B enterprise required automation for processing 10,000+ unstructured inbound leads monthly, eliminating manual HubSpot qualification and updating CRM pipeline state without API rate-limiting bottlenecks or conversational state hallucinations.",
    solution:
      "We engineered a hierarchical multi-agent orchestration layer using LangGraph and OpenAI GPT-4. The network coordinates role-specific agents (Planner, Researcher, and CRM Executor) bounded by strict JSON schema contracts. Redis manages transient session states, while PostgreSQL persists transactional records. Dynamic HubSpot updates are executed via idempotent webhooks, resulting in a 99.8% database sync accuracy rate.",
    metric: "+40%",
    metricLabel: "operations efficiency improvement",
    icon: "bot",
  },
  {
    id: "secure-s3-delivery",
    title: "Secure Cloud-Native Object Delivery Architecture",
    industry: "Media & Digital Asset Management",
    techStack: [
      "AWS S3",
      "CloudFront",
      "NestJS",
      "IAM Policies",
      "AWS SDK v3",
      "TypeScript",
      "Presigned URLs",
    ],
    challenge:
      "A digital asset management platform routing media payloads up to 5GB through Express application servers suffered from high network latency, memory starvation, elevated EC2 compute bills, and a lack of tenant-scoped network boundaries.",
    solution:
      "We implemented a direct-to-S3 secure ingestion module using NestJS and the AWS SDK v3 to generate short-lived, client-specific presigned PUT URLs with a 300-second TTL. Network ingress was offloaded directly to AWS S3, while AWS CloudFront delivered content globally. Tenant-prefixed S3 keys were secured via strict IAM policies and monitored by AWS CloudTrail, reducing compute overhead and enhancing overall security.",
    metric: "65%",
    metricLabel: "reduction in compute overhead",
    icon: "cloud-upload",
  },
  {
    id: "salonx-platform",
    title: "SalonX: Enterprise Resource & Booking Platform",
    industry: "Beauty & Wellness SaaS",
    techStack: [
      "React",
      "NestJS",
      "MongoDB",
      "Redis",
      "Docker",
      "Microservices",
      "REST & WebSockets",
    ],
    challenge:
      "An enterprise beauty SaaS franchise managing 500+ brick-and-mortar locations experienced concurrency booking locks, database write deadlocks, and stale analytics during peak marketing campaigns.",
    solution:
      "We delivered an event-driven microservices architecture using NestJS and React. The system utilizes atomic MongoDB transactions to ensure race-free seat allocations, paired with Redis caching layers to enable sub-10ms dashboard data updates. The entire infrastructure is containerized via Docker and scales automatically to handle 50,000+ concurrent monthly reservations.",
    metric: "10k+",
    metricLabel: "active appointments scaled",
    icon: "calendar",
  },
];
