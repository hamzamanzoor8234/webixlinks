import { Hero } from "@/components/home/Hero";
import { TechMarquee } from "@/components/home/TechMarquee";
import { CapabilityMatrix } from "@/components/home/CapabilityMatrix";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <CapabilityMatrix />
    </>
  );
}
