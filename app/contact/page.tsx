import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a technical consultation with Webixlinks engineering leads.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Technical consultation"
        description="Share your architecture requirements. Our engineering leads work directly with CTOs and founders on high-stakes systems."
      />
      <Section>
        <Container className="max-w-2xl">
          <ContactForm />
        </Container>
      </Section>
    </>
  );
}
