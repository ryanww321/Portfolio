import { LinkButton } from "@/components/ui/LinkButton";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const contact = siteConfig.email
    ? { href: `mailto:${siteConfig.email}`, label: "Email me", external: false }
    : { href: siteConfig.linkedinUrl, label: "Message me on LinkedIn", external: true };

  return (
    <section className="hero-enter flex max-w-3xl flex-col gap-6 pt-6 sm:pt-10">
      <p className="inline-flex items-center gap-2 text-sm text-muted">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-500" />
        Currently freelancing on SwiftPass with Protopixel
      </p>
      <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-[3.25rem]">
        Six years delivering <span className="text-brand">Salesforce and Omnistudio</span> solutions, now building modern web apps with
        AI-assisted workflows.
      </h1>
      <p className="max-w-2xl text-lg leading-relaxed text-muted text-pretty">
        Senior Salesforce Consultant and Omnistudio Solution Architect. I design guided Omniscripts, Experience Cloud portals, and the data
        architecture under them, and I ship production features in Next.js and Supabase.
      </p>
      <div className="flex flex-wrap gap-3">
        <LinkButton external={contact.external} href={contact.href} variant="primary">
          {contact.label}
        </LinkButton>
        <LinkButton external href={siteConfig.resumeUrl}>
          Resume (PDF)
        </LinkButton>
        <LinkButton external href={siteConfig.githubUrl}>
          GitHub
        </LinkButton>
      </div>
    </section>
  );
}
