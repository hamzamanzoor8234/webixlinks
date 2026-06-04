import { CASE_STUDIES } from "@/lib/portfolio";
import { getIcon } from "@/lib/icons";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function CaseStudyGrid() {
  return (
    <Section>
      <Container>
        <div className="grid gap-8 lg:grid-cols-1">
          {CASE_STUDIES.map((study, index) => {
            const Icon = getIcon(study.icon);
            return (
              <article
                key={study.id}
                className="overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/30 transition-colors hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <div className="grid lg:grid-cols-3">
                  <div className="border-b border-zinc-200 bg-zinc-50/50 p-8 lg:border-b-0 lg:border-r lg:border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950/50 dark:lg:border-zinc-800">
                    <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                      Case {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 dark:text-red-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-white lg:text-2xl">
                      {study.title}
                    </h2>
                    <p className="mt-2 font-mono text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-500">
                      {study.industry}
                    </p>
                    <div className="mt-6 rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-3">
                      <p className="text-2xl font-semibold text-red-500 dark:text-red-400">
                        {study.metric}
                      </p>
                      <p className="text-xs text-zinc-600 dark:text-zinc-500">{study.metricLabel}</p>
                    </div>
                  </div>
                  <div
                    className="space-y-6 p-8 lg:col-span-2"
                  >
                    <div>
                      <h3 className="font-mono text-xs uppercase tracking-widest text-red-500 dark:text-red-400">
                        Tech Stack
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {study.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1 font-mono text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                        The Challenge
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                        The Architectural Solution
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {study.solution}
                      </p>
                    </div>
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
