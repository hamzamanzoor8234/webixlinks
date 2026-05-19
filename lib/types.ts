export type ProjectType =
  | "agentic-ai"
  | "full-stack"
  | "cloud-devops"
  | "ui-ux";

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
