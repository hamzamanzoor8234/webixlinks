import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ArticleCallout() {
  return (
    <aside className="mt-16 rounded-xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-zinc-900/50 p-8">
      <p className="font-mono text-xs uppercase tracking-widest text-red-400">
        Work With Us
      </p>
      <h3 className="mt-3 text-xl font-semibold text-white">
        Ready to architect your next system?
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
        Our engineering leads partner directly with CTOs on agentic AI, cloud
        infrastructure, and full-stack platforms. Submit a technical brief to
        begin discovery.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <Button href="/contact" variant="primary">
          Request Consultation
        </Button>
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
        >
          All insights
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  );
}
