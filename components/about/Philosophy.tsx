import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function Philosophy() {
  return (
    <Section>
      <Container>
        <div
          className="mx-auto max-w-3xl"
        >
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Engineering Philosophy
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-400">
            <p>
              Webixlinks is not a generic marketing agency—we are an elite
              collective of technical leads, full-stack software architects, and
              cloud engineers who ship production systems under real constraints.
            </p>
            <p>
              Every engagement begins with architecture: understanding your data
              boundaries, threat model, and performance requirements before a
              single line of application code is written. We partner with CTOs
              and founders who demand precision, not platitudes.
            </p>
            <p>
              Our culture is built on deep craft—code reviews that matter,
              documentation that survives handoffs, and honest assessments when
              the right answer is to refactor rather than rush.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
