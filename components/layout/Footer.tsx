import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-black">
      <Container className="py-12 md:py-16">
        <div
          className="grid gap-10 md:grid-cols-3"
        >
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo/webixlinks.png"
                alt="Webixlinks"
                width={140}
                height={36}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              Elite AI agents and enterprise cloud infrastructure for
              forward-thinking organizations.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-red-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-zinc-400 transition-colors hover:text-red-400"
                >
                  Request Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
              Get in Touch
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              Ready to architect your next system? Submit a technical brief and
              our engineering leads will respond within one business day.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block text-sm font-medium text-red-400 transition-colors hover:text-red-300"
            >
              Start a project →
            </Link>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col gap-4 border-t border-zinc-800 pt-8 md:flex-row md:items-center md:justify-between"
        >
          <p className="text-sm text-zinc-500">
            © {year} Webixlinks. All rights reserved.
          </p>
          <p className="max-w-xl text-sm leading-relaxed text-zinc-500">
            Your IP and data safety matter. All project specifications are
            handled under strict confidentiality.
          </p>
        </div>
      </Container>
    </footer>
  );
}
