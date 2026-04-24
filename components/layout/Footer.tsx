import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between" size="wide">
        <div className="max-w-md">
          <p className="font-display text-lg font-semibold text-foreground">Ryan Whitcomb</p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Systems-minded engineer building toward AI tools, developer platforms, automation, and crypto product
            workflows.
          </p>
        </div>
        <div className="grid gap-6 text-sm sm:grid-cols-2">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-muted">Explore</p>
            <div className="flex flex-col gap-2">
              {siteConfig.navItems.map((item) => (
                <Link key={item.href} className="text-muted transition hover:text-foreground" href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-muted">Contact</p>
            <div className="flex flex-col gap-2">
              <a className="text-muted transition hover:text-foreground" href={siteConfig.githubUrl} rel="noreferrer" target="_blank">
                GitHub
              </a>
              <a className="text-muted transition hover:text-foreground" href={siteConfig.linkedinUrl} rel="noreferrer" target="_blank">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
