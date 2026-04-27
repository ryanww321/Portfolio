import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="sticky bottom-0 z-40 bg-gradient-to-b from-background/0 via-background/95 to-background">
      <Container className="flex flex-col gap-5 pb-5 pt-12 text-sm md:flex-row md:items-center md:justify-between" size="index">
        <div className="text-muted">
          <span>Ryan Whitcomb</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {siteConfig.navItems.map((item) => (
            <Link key={item.href} className="text-muted transition hover:text-foreground" href={item.href}>
              {item.label}
            </Link>
          ))}
          <a className="text-muted transition hover:text-foreground" href={siteConfig.githubUrl} rel="noreferrer" target="_blank">
            GitHub
          </a>
          <a className="text-muted transition hover:text-foreground" href={siteConfig.linkedinUrl} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
        </div>
      </Container>
    </footer>
  );
}
