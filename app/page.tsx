import { Hero } from "@/components/home/Hero";
import { TechMarquee } from "@/components/home/TechMarquee";
import { CapabilityMatrix } from "@/components/home/CapabilityMatrix";
import { EngagementBlueprint } from "@/components/shared/EngagementBlueprint";
import { SecurityMatrix } from "@/components/shared/SecurityMatrix";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <CapabilityMatrix />
      <EngagementBlueprint />
      <SecurityMatrix />
    </>
  );
}
