import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Philosophy } from "@/components/about/Philosophy";
import { CorePillars } from "@/components/about/CorePillars";
import { EngagementBlueprint } from "@/components/shared/EngagementBlueprint";
import { SecurityMatrix } from "@/components/shared/SecurityMatrix";

export const metadata: Metadata = {
  title: "About",
  description:
    "Our engineering philosophy, security standards, and high-performance culture at Webixlinks.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Built by architects, not account managers"
        description="We are an elite engineering studio focused on performance, security, and absolute architectural transparency."
      />
      <Philosophy />
      <CorePillars />
      <EngagementBlueprint />
      <SecurityMatrix />
    </>
  );
}
