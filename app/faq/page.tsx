import type { Metadata } from "next";
import { FAQ_ITEMS } from "@/lib/constants";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FaqAccordion } from "@/components/faq/FaqAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Direct technical answers on AI agents, NestJS backend architecture, multi-cloud setups, and data isolation strategies.",
};

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title="Technical specifications index"
        description="Granular Q&A regarding our execution models, frameworks, and system compliance baselines—frequently reviewed by engineering teams."
      />
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </Container>
      </Section>
    </>
  );
}
