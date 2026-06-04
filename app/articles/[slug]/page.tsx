import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/articles/ArticleBody";
import {
  getArticleBySlug,
  getArticleSlugs,
} from "@/lib/articles";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": article.title,
    "description": article.description,
    "datePublished": article.publishedAt,
    "author": {
      "@type": "Organization",
      "name": "Webixlinks",
      "url": "https://webixlinks.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Webixlinks",
      "logo": {
        "@type": "ImageObject",
        "url": "https://webixlinks.com/logo/webixlinks.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://webixlinks.com/articles/${article.slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleBody article={article} />
    </>
  );
}
