import Link from "next/link";
import type { ReactNode } from "react";
import type { WorkExperience, WorkExperienceRole } from "@/data/workExperience";

type WorkPageShellProps = {
  work: WorkExperience;
  children: ReactNode;
};

function ChevronLeftIcon() {
  return (
    <svg aria-hidden="true" className="icon-size" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path d="m15 6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WorkRole({ title, startDate, endDate }: WorkExperienceRole) {
  const formattedEnd = endDate === startDate ? "" : endDate.slice(2);

  return (
    <div className="flex w-full justify-between gap-3 border-t border-border py-3 first:border-t-0">
      <div className="text-balance font-medium text-muted">{title}</div>
      <div className="flex min-w-24 justify-end gap-1 text-muted tabular-nums">
        <span>{startDate}</span>
        {formattedEnd ? <span>-</span> : null}
        {formattedEnd ? <span>{formattedEnd}</span> : null}
      </div>
    </div>
  );
}

export function WorkPageShell({ work, children }: WorkPageShellProps) {
  return (
    <>
      <header className="sticky top-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center bg-gradient-to-b from-background via-background/75 to-background/0 p-[var(--padding-pageMargin)] transition-colors duration-300 md:p-[max(var(--padding-pageMargin),5vh)]">
        <div className="flex justify-start sm:-ml-1.5">
          <Link
            className="flex h-9 items-center gap-1 rounded-full bg-card/70 px-3 font-medium text-foreground shadow-[inset_0_0_0_1px_var(--color-border),0_12px_40px_-24px_var(--color-foreground)] transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border"
            href="/"
          >
            <ChevronLeftIcon />
            <span>Home</span>
          </Link>
        </div>

        <nav className="flex items-center justify-center gap-3 text-base font-medium" aria-label="Breadcrumb">
          <Link className="text-muted transition hover:text-foreground" href="/">
            Work
          </Link>
          <ChevronRightIcon />
          <span className="text-foreground/15">{work.company}</span>
        </nav>

        <div />
      </header>

      <article className="z-0 flex flex-col items-center px-[var(--padding-pageMargin)] pb-32 text-[16px]">
        <section className="mx-auto flex w-full max-w-xl flex-col items-center pb-[5vh] pt-[12vh]">
          <h1 className="text-center text-5xl font-semibold leading-tight tracking-normal text-foreground text-balance">{work.company}</h1>
          <div className="flex w-full flex-col items-stretch pt-12 text-sm">
            {work.roles.map((role) => (
              <WorkRole key={role.title} {...role} />
            ))}
          </div>
        </section>

        <div className="mx-auto flex w-full max-w-2xl flex-col gap-12">{children}</div>
      </article>
    </>
  );
}
