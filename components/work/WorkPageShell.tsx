import Link from "next/link";
import type { ReactNode } from "react";
import { SiteNav } from "@/components/home/SiteNav";
import { Container } from "@/components/ui/Container";
import type { WorkExperience } from "@/data/workExperience";

type WorkPageShellProps = {
  work: WorkExperience;
  children: ReactNode;
};

export function WorkPageShell({ work, children }: WorkPageShellProps) {
  return (
    <Container className="flex flex-col pb-16" size="page">
      <SiteNav />

      <article className="flex flex-col gap-10 pt-6 sm:pt-10">
        <header className="flex flex-col gap-5 border-b border-border pb-8">
          <Link className="w-fit text-sm text-muted transition hover:text-foreground" href="/#experience">
            <span aria-hidden="true">← </span>All experience
          </Link>
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-border bg-card font-mono text-xs font-medium text-brand"
            >
              {work.monogram}
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground text-balance">{work.company}</h1>
          </div>
          <div className="flex flex-col gap-1">
            {work.roles.map((role) => (
              <p key={role.title} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span className="font-semibold text-foreground">
                  {role.title}
                  {role.subtitle ? <span className="font-normal text-muted">, {role.subtitle}</span> : null}
                </span>
                <span className="font-mono text-xs tabular-nums text-muted">
                  {role.startDate} – {role.endDate}
                </span>
              </p>
            ))}
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted text-pretty">{work.description}</p>
          <ul aria-label="Tools" className="flex flex-wrap gap-1.5">
            {work.tools.map((tool) => (
              <li key={tool} className="rounded border border-border bg-card px-2 py-0.5 font-mono text-[11px] text-muted">
                {tool}
              </li>
            ))}
          </ul>
        </header>

        <div className="max-w-2xl">{children}</div>
      </article>
    </Container>
  );
}
