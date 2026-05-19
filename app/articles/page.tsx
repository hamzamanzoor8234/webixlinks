import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ArticleFeed } from "@/components/articles/ArticleFeed";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Technical articles on autonomous agent networks, cloud security, and enterprise backend architecture.",
};

export default function ArticlesPage() {
  return (
    <>
      <PageHeader
        title="Engineering insights"
        description="Deep technical writing from our architects—covering AI systems, cloud infrastructure, and backend engineering at scale."
      />
      <ArticleFeed />
    </>
  );
}
