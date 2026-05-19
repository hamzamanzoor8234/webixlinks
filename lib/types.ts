export type ProjectType =
  | "agentic-ai"
  | "full-stack"
  | "cloud-devops"
  | "ui-ux";

export type ArticleCategory = "AI Engineering" | "Cloud Architecture" | "Backend Engineering";

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectType: ProjectType | null;
  message: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface CapabilityCard {
  title: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface ServiceBlock {
  title: string;
  description: string;
  capabilities: string[];
  icon: string;
}

export interface Pillar {
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  techStack: string[];
  challenge: string;
  solution: string;
  metric: string;
  metricLabel: string;
  icon: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  category: ArticleCategory;
  content: string;
}

export interface EngagementStep {
  step: string;
  title: string;
  description: string;
}

export interface SecurityStandard {
  title: string;
  description: string;
  icon: string;
}
