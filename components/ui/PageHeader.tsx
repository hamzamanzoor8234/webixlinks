import { Container } from "./Container";

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-zinc-800 bg-zinc-950/50">
      <Container className="py-16 md:py-20">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-red-400">
          Webixlinks
        </p>
        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
          {description}
        </p>
      </Container>
    </div>
  );
}
