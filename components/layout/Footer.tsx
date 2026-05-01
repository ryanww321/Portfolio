import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";
import type { ReactNode } from "react";

type FooterLinkProps = {
  href: string;
  label: string;
  icon: ReactNode;
  text?: string;
  external?: boolean;
  dimmed?: boolean;
};

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" className="icon-size" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.85">
      <path d="M8 11v5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 8v.01" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 16v-5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 16v-3a2 2 0 1 0-4 0" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" className="icon-size" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.85">
      <path
        d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PdfIcon() {
  return (
    <svg aria-hidden="true" className="icon-size" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.85">
      <path d="M14 3v4a1 1 0 0 0 1 1h4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 18h1.5a1.5 1.5 0 0 0 0-3H5v6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 18h2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 15h-3v6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 15v6h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg aria-hidden="true" className="icon-size" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.85">
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 9h.01" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 12h1v4h1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg aria-hidden="true" className="icon-size" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.85">
      <path d="M21 10.7C21 6.4 17 3 12 3s-9 3.4-9 7.7c0 3.8 3.2 7 7.5 7.5 1 .2.9.7.7 2.1 0 .2-.2.9.8.5s5.2-3.2 7.1-5.5c1.3-1.5 1.9-3 1.9-4.6z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FooterLink({ href, label, icon, text, external, dimmed }: FooterLinkProps) {
  const className =
    "flex items-center justify-center gap-1.5 rounded-sm p-1.5 text-foreground transition hover:bg-accent hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border " +
    (dimmed ? "opacity-50 " : "");

  if (external) {
    return (
      <a aria-label={label} className={className} href={href} rel="noreferrer" target="_blank" title={label}>
        {icon}
        {text ? <span className="hidden text-xs font-medium tracking-wide sm:block">{text}</span> : null}
      </a>
    );
  }

  return (
    <Link aria-label={label} className={className} href={href} title={label}>
      {icon}
      {text ? <span className="hidden text-xs font-medium tracking-wide sm:block">{text}</span> : null}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="sticky bottom-0 z-40 -mt-24 bg-gradient-to-b from-background/0 via-background/90 to-background">
      <Container className="flex items-center justify-around gap-6 pb-[calc(var(--padding-pageMargin)/1.5)] pt-[calc(var(--padding-pageMargin)*1.5)] md:justify-between md:gap-12" size="index">
        <div className="flex items-center justify-between gap-3">
          <FooterLink external href={siteConfig.linkedinUrl} icon={<LinkedInIcon />} label="LinkedIn" />
          <FooterLink external href={siteConfig.githubUrl} icon={<GitHubIcon />} label="GitHub" />
        </div>
        <div className="flex items-center justify-between gap-3">
          <FooterLink dimmed external href="/resume.pdf" icon={<PdfIcon />} label="Download resume" text="PDF" />
          <FooterLink dimmed href="/site" icon={<InfoIcon />} label="Site info" />
          <FooterLink dimmed href="/chat" icon={<ChatIcon />} label="AI Chat" />
        </div>
      </Container>
    </footer>
  );
}
