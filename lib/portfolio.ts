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
    ],
    challenge:
      "A high-growth sales organization needed to replace manual lead qualification and CRM updates with an autonomous system capable of reasoning across fragmented data sources without hallucinating pipeline state.",
    solution:
      "We engineered a multi-agent orchestration layer with dedicated planner, researcher, and executor agents. Each agent operates within strict tool-calling contracts, syncing CRM state in real time via idempotent webhooks and maintaining a shared memory graph for cross-session continuity.",
    metric: "+40%",
    metricLabel: "operations efficiency",
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
      "IAM",
      "TypeScript",
      "Presigned URLs",
    ],
    challenge:
      "Legacy upload flows routed all binary traffic through application servers, creating bandwidth bottlenecks, elevated EC2 costs, and expanded attack surfaces for unauthenticated file ingestion.",
    solution:
      "We implemented direct-to-S3 presigned URL modules with short TTL signatures, offloading upload bandwidth entirely from compute. CloudFront distributions stream media globally while IAM policies enforce least-privilege access per tenant prefix with audit logging on every object mutation.",
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
    ],
    challenge:
      "A national salon franchise required a unified platform to manage appointments, staff scheduling, inventory, and real-time analytics across hundreds of locations—with zero tolerance for double-bookings or stale dashboard data.",
    solution:
      "We delivered a modular MERN/NestJS architecture with event-driven microservices tracking booking lifecycle events. Robust MongoDB schemas enforce atomic slot reservations, while responsive React dashboards surface live occupancy metrics and staff utilization across regions.",
    metric: "10k+",
    metricLabel: "active appointments scaled",
    icon: "calendar",
  },
];
