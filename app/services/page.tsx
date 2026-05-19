import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServiceGrid } from "@/components/services/ServiceGrid";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Deep technical capabilities: Generative AI, custom development stacks, and UI/UX design studio services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Technical capabilities index"
        description="Granular engineering services across AI, full-stack development, and product design—built for production environments."
      />
      <ServiceGrid />
    </>
  );
}
