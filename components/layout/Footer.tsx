import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: siteConfig.linkedinUrl, label: "LinkedIn" },
  { href: siteConfig.githubUrl, label: "GitHub" },
  { href: siteConfig.resumeUrl, label: "Resume (PDF)" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between" size="page">
        <p className="text-muted">
          {siteConfig.name} · Salesforce, Omnistudio, and modern web
        </p>
        <nav aria-label="Elsewhere" className="flex flex-wrap gap-x-5 gap-y-2">
          {siteConfig.email ? (
            <a className="font-medium text-foreground transition hover:text-brand" href={`mailto:${siteConfig.email}`}>
              Email
            </a>
          ) : null}
          {footerLinks.map((link) => (
            <a key={link.label} className="font-medium text-foreground transition hover:text-brand" href={link.href} rel="noreferrer" target="_blank">
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
