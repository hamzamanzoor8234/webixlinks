import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { getAllArticles } from "@/lib/articles";
import type { ArticleCategory } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const CATEGORIES: ArticleCategory[] = [
  "AI Engineering",
  "Cloud Architecture",
  "Backend Engineering",
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function CategoryChip({
  category,
  active,
}: {
  category: ArticleCategory;
  active?: boolean;
}) {
  return (
    <span
      className={cn(
        "rounded-full border px-3 py-1 font-mono text-xs transition-colors",
        active
          ? "border-red-500/50 bg-red-500/10 text-red-400"
          : "border-zinc-800 text-zinc-500"
      )}
    >
      {category}
    </span>
  );
}

export function ArticleFeed() {
  const articles = getAllArticles();
  const [featured, ...rest] = articles;

  if (!featured) return null;

  return (
    <Section>
      <Container>
        <div className="mb-10 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <CategoryChip
              key={cat}
              category={cat}
              active={featured.category === cat}
            />
          ))}
        </div>

        <Link
          href={`/articles/${featured.slug}`}
          className="group block overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 transition-all hover:border-red-500/30"
        >
          <div className="grid md:grid-cols-2">
            <div className="border-b border-zinc-800 bg-gradient-to-br from-red-500/10 to-transparent p-8 md:border-b-0 md:border-r">
              <span className="font-mono text-xs uppercase tracking-widest text-red-400">
                Latest Insight
              </span>
              <CategoryChip category={featured.category} active />
              <h2 className="mt-4 text-2xl font-semibold text-white transition-colors group-hover:text-red-300 md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-zinc-400 leading-relaxed">
                {featured.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-red-400">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
            <div className="flex flex-col justify-end p-8">
              <div className="flex items-center gap-4 text-sm text-zinc-500">
                <time dateTime={featured.publishedAt}>
                  {formatDate(featured.publishedAt)}
                </time>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {featured.readTime}
                </span>
              </div>
            </div>
          </div>
        </Link>

        <div className="mt-12">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-zinc-500">
            More Articles
          </h3>
          <ul className="divide-y divide-zinc-800 rounded-xl border border-zinc-800">
            {rest.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/articles/${article.slug}`}
                  className="group flex flex-col gap-3 p-6 transition-colors hover:bg-zinc-900/50 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <CategoryChip category={article.category} />
                      <time
                        className="text-xs text-zinc-600"
                        dateTime={article.publishedAt}
                      >
                        {formatDate(article.publishedAt)}
                      </time>
                    </div>
                    <h4 className="font-semibold text-white transition-colors group-hover:text-red-300">
                      {article.title}
                    </h4>
                    <p className="mt-1 line-clamp-2 text-sm text-zinc-500">
                      {article.description}
                    </p>
                  </div>
                  <span className="flex shrink-0 items-center gap-2 text-sm text-zinc-500">
                    <Clock className="h-3.5 w-3.5" />
                    {article.readTime}
                    <ArrowRight className="h-4 w-4 text-red-400 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
