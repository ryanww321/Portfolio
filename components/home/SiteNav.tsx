import Link from "next/link";
import { siteConfig } from "@/lib/site";

const sectionLinks = [
  { href: "/#engagements", label: "Engagements" },
  { href: "/#experience", label: "Experience" },
  { href: "/#certifications", label: "Certifications" },
];

export function SiteNav() {
  return (
    <nav aria-label="Primary" className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-6 text-sm">
      <Link className="font-display text-lg font-bold tracking-tight text-foreground" href="/">
        {siteConfig.name}
      </Link>
      <div className="flex items-center gap-5 text-muted">
        {sectionLinks.map((link) => (
          <a key={link.href} className="hidden transition hover:text-foreground sm:inline" href={link.href}>
            {link.label}
          </a>
        ))}
        <a className="font-medium text-foreground transition hover:text-brand" href={siteConfig.resumeUrl} target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
    </nav>
  );
}
