import { TECH_STACK } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function TechMarquee() {
  const items = [...TECH_STACK, ...TECH_STACK];

  return (
    <Section id="tech-stack" className="scroll-mt-24 border-y border-zinc-200 bg-zinc-50/80 py-12 dark:border-zinc-800 dark:bg-zinc-950/50">
      <Container>
        <p className="mb-8 text-center font-mono text-xs uppercase tracking-widest text-zinc-500">
          Technical Stack
        </p>
      </Container>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-zinc-50 to-transparent dark:from-black" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-zinc-50 to-transparent dark:from-black" />
        <div className="flex w-max animate-marquee gap-4">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="shrink-0 rounded-lg border border-zinc-200 bg-white px-5 py-2.5 font-mono text-sm text-zinc-700 transition-colors hover:border-red-500/50 hover:text-red-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
