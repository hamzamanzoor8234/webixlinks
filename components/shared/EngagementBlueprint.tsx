import { ENGAGEMENT_STEPS } from "@/lib/constants";
import { Compass, Rocket, Server, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const stepIcons = [Compass, Sparkles, Server, Rocket];

export function EngagementBlueprint() {
  return (
    <Section className="border-t border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-950/30">
      <Container>
        <div
          className="mb-12 text-center md:mb-16"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-red-400">
            Execution Model
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
            The Engagement Blueprint
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
            A disciplined four-phase path from architectural discovery to
            continuous agentic optimization—designed for CTOs who need
            predictable delivery.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ENGAGEMENT_STEPS.map((step, index) => {
            const Icon = stepIcons[index] ?? Compass;
            return (
              <div
                key={step.step}
                className="relative rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-red-500/20 dark:border-zinc-800 dark:bg-zinc-900/40"
              >
                {index < ENGAGEMENT_STEPS.length - 1 && (
                  <span
                    className="absolute -right-3 top-1/2 hidden h-px w-6 bg-zinc-800 lg:block"
                    aria-hidden
                  />
                )}
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-red-400">
                    {step.step}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="text-sm font-semibold leading-snug text-zinc-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
