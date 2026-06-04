import { SERVICES } from "@/lib/constants";
import { getIcon } from "@/lib/icons";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function ServiceGrid() {
  return (
    <Section>
      <Container>
        <div className="space-y-12">
          {SERVICES.map((service, index) => {
            const Icon = getIcon(service.icon);
            return (
              <article
                key={service.title}
                className="rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/30 p-8 transition-colors hover:border-zinc-300 dark:hover:border-zinc-700 md:p-10"
              >
                <div className="flex flex-col gap-6 md:flex-row md:gap-10">
                  <div className="flex shrink-0 items-start gap-4 md:w-72">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 dark:text-red-400"
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-zinc-500 dark:text-zinc-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="mt-1 text-xl font-semibold text-zinc-900 dark:text-white md:text-2xl">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {service.description}
                    </p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {service.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-500" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
