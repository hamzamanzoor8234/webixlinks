import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import type { Article } from "@/lib/types";
import { ArticleCallout } from "./ArticleCallout";
import { Container } from "@/components/ui/Container";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface ArticleBodyProps {
  article: Article;
}

export function ArticleBody({ article }: ArticleBodyProps) {
  return (
    <article>
      <Container className="max-w-3xl py-12 md:py-16">
        <Link
          href="/articles"
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-red-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Insights
        </Link>

        <header className="border-b border-zinc-800 pb-8">
          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 font-mono text-xs text-red-400">
            {article.category}
          </span>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            {article.description}
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-zinc-500">
            <time dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {article.readTime}
            </span>
          </div>
        </header>

        <div
          className="prose-article mt-10"
          dangerouslySetInnerHTML={{ __html: article.content.trim() }}
        />

        <ArticleCallout />
      </Container>
    </article>
  );
}
