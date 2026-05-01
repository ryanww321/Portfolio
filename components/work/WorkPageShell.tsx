import Link from "next/link";
import type { ReactNode } from "react";
import type { WorkExperience, WorkExperienceRole } from "@/data/workExperience";
import { HomeHeader } from "@/components/ui/HomeHeader";

type WorkPageShellProps = {
  work: WorkExperience;
  children: ReactNode;
};

function ChevronRightIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WorkRole({ title, startDate, endDate }: WorkExperienceRole) {
  const formattedEnd = endDate === startDate ? "" : endDate;

  return (
    <div className="flex w-full flex-col gap-1 border-t-[0.5px] border-border py-3 first:border-t-0 sm:flex-row sm:justify-between sm:gap-3">
      <div className="text-balance font-medium text-foreground/65">{title}</div>
      <div className="flex shrink-0 gap-1 text-foreground/65 tabular-nums sm:min-w-36 sm:justify-end">
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
      <HomeHeader>
        <nav className="flex items-center justify-center gap-3 text-base font-medium" aria-label="Breadcrumb">
          <Link className="text-muted transition hover:text-foreground" href="/">
            Work
          </Link>
          <ChevronRightIcon />
          <span className="text-foreground/65">{work.company}</span>
        </nav>
      </HomeHeader>

      <article className="z-0 flex flex-col items-center px-[var(--padding-pageMargin)] pb-32 text-[16px]">
        <section className="mx-auto flex w-full max-w-xl flex-col items-center pb-[5vh] pt-[8vh]">
          <h1 className="text-center text-4xl font-medium leading-tight tracking-normal text-foreground text-balance">{work.company}</h1>
          <div className="flex w-full flex-col items-stretch pt-9 text-sm">
            {work.roles.map((role) => (
              <WorkRole key={role.title} {...role} />
            ))}
          </div>
        </section>

        <div className="mx-auto w-full max-w-2xl justify-center">{children}</div>
      </article>
    </>
  );
}
