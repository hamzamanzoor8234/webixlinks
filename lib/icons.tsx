import {
  Brain,
  Cloud,
  Code2,
  Eye,
  Layers,
  Lock,
  Palette,
  Shield,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  layers: Layers,
  shield: Shield,
  zap: Zap,
  lock: Lock,
  eye: Eye,
  sparkles: Sparkles,
  code: Code2,
  palette: Palette,
  cloud: Cloud,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Code2;
}
