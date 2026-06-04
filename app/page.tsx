import { Hero } from "@/components/home/Hero";
import { TechMarquee } from "@/components/home/TechMarquee";
import { CapabilityMatrix } from "@/components/home/CapabilityMatrix";
import { EngagementBlueprint } from "@/components/shared/EngagementBlueprint";
import { SecurityMatrix } from "@/components/shared/SecurityMatrix";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Webixlinks",
    "image": "https://webixlinks.com/logo/webixlinks.png",
    "description": "Engineering intelligent AI agents and enterprise cloud infrastructure. Specialized in NestJS, MERN, MEAN, and multi-cloud solutions across AWS, GCP, and Azure.",
    "url": "https://webixlinks.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://github.com/webixlinks",
      "https://linkedin.com/company/webixlinks"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TechMarquee />
      <CapabilityMatrix />
      <EngagementBlueprint />
      <SecurityMatrix />
    </>
  );
}

