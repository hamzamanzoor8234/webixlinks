import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Deep technical capabilities: Generative AI, custom development stacks, and UI/UX design studio services.",
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": SERVICES.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "ProfessionalService",
          "name": "Webixlinks",
          "url": "https://webixlinks.com"
        }
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title="Technical capabilities index"
        description="Granular engineering services across AI, full-stack development, and product design—built for production environments."
      />
      <ServiceGrid />
    </>
  );
}

