import {
  Bot,
  Brain,
  Calendar,
  Cloud,
  CloudUpload,
  Code2,
  Compass,
  Eye,
  Gauge,
  GitBranch,
  Key,
  Layers,
  Lock,
  Palette,
  Rocket,
  Server,
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
  bot: Bot,
  "cloud-upload": CloudUpload,
  calendar: Calendar,
  gauge: Gauge,
  key: Key,
  "git-branch": GitBranch,
  compass: Compass,
  rocket: Rocket,
  server: Server,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Code2;
}
