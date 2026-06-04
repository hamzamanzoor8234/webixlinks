import { PILLARS } from "@/lib/constants";
import { getIcon } from "@/lib/icons";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function CorePillars() {
  return (
    <Section className="border-t border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-950/30">
      <Container>
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-red-400">
            Core Pillars
          </p>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white md:text-3xl">
            How we engineer every system
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = getIcon(pillar.icon);
            return (
              <Card key={pillar.title} className="hover:border-red-500/20">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {pillar.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
