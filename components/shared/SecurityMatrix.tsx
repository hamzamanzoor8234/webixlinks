import { SECURITY_STANDARDS } from "@/lib/constants";
import { getIcon } from "@/lib/icons";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function SecurityMatrix() {
  return (
    <Section className="border-t border-zinc-200 dark:border-zinc-800">
      <Container>
        <div
          className="mb-12 text-center md:mb-16"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-red-400">
            Security Posture
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
            System Hardening & Compliance Matrix
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Every Webixlinks deployment is engineered against a non-negotiable
            security baseline—applied from API gateways to commit hooks.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {SECURITY_STANDARDS.map((standard) => {
            const Icon = getIcon(standard.icon);
            return (
              <div
                key={standard.title}
                className="flex gap-4 rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-red-500/20 dark:border-zinc-800 dark:bg-zinc-900/40"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">{standard.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {standard.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
