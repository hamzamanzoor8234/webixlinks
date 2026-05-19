import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { CaseStudyGrid } from "@/components/portfolio/CaseStudyGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Engineering case studies in autonomous AI, secure cloud delivery, and enterprise booking platforms.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        title="Engineering case studies"
        description="Production systems we've architected—documented with the technical depth your engineering team expects."
      />
      <CaseStudyGrid />
    </>
  );
}
