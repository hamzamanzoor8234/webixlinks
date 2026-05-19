import { CAPABILITIES } from "@/lib/constants";
import { getIcon } from "@/lib/icons";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function CapabilityMatrix() {
  return (
    <Section>
      <Container>
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-red-400">
            Core Capabilities
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
            The Capability Matrix
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Three engineering pillars that power every engagement—from autonomous
            AI to hardened cloud infrastructure.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CAPABILITIES.map((cap) => {
            const Icon = getIcon(cap.icon);
            return (
              <Card
                key={cap.title}
                className="group flex flex-col hover:border-red-500/30"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-400 transition-colors group-hover:bg-red-500/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {cap.description}
                </p>
                <ul className="mt-4 flex-1 space-y-2 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                  {cap.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-300"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
