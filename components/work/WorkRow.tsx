import Link from "next/link";
import type { WorkExperience, WorkExperienceRole } from "@/data/workExperience";
import { cn } from "@/lib/utils";

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RoleLine({ title, subtitle, startDate, endDate, hasLink }: WorkExperienceRole & { hasLink: boolean }) {
  const end = endDate === startDate ? "" : endDate;

  return (
    <div className="flex flex-col gap-1 py-1 first:pt-0 last:pb-0 sm:flex-row sm:justify-between sm:gap-3">
      <div className="flex gap-2">
        <div className={cn("text-balance md:font-medium", hasLink && "uline")}>{title}</div>
        {subtitle ? <div className="hidden text-muted opacity-65 sm:block">{subtitle}</div> : null}
      </div>
      <div className="flex shrink-0 gap-0.5 text-muted tabular-nums sm:min-w-36 sm:justify-end">
        <div>{startDate}</div>
        {end ? <div>-</div> : null}
        {end ? <div>{end}</div> : null}
      </div>
    </div>
  );
}

export function WorkRow({ company, slug, roles, className }: WorkExperience & { className?: string }) {
  return (
    <Link
      className={cn(
        "group/workitem peer relative flex flex-col items-start gap-3 bg-clip-padding py-4 pb-6 leading-tight shadow-[inset_0_0.5px_0_var(--color-border)] transition duration-200 md:flex-row md:pb-4",
        "hover:-mx-4 hover:rounded-md hover:border-transparent hover:bg-accent-transparent/75 hover:px-4 hover:shadow-[inset_0_0.5px_1.5px_0px_#FFFFFF0A] active:bg-accent-transparent/50",
        className,
      )}
      href={`/work/${slug}`}
    >
      <div className="flex items-center gap-3 md:w-[7.5rem] md:shrink-0">
        <div className="font-medium">{company}</div>
      </div>
      <div className="flex grow flex-col self-stretch">
        {roles.map((role) => (
          <RoleLine key={`${company}-${role.title}`} hasLink {...role} />
        ))}
      </div>
      <div className="icon-size -ml-1 hidden items-center justify-center text-muted transition group-hover/workitem:text-foreground md:flex">
        <ArrowRightIcon />
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-md opacity-0 transition group-hover/workitem:opacity-100">
        <div className="absolute inset-0 rounded-md bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.05),transparent_34%),linear-gradient(120deg,transparent,rgba(255,255,255,0.025),transparent)]" />
      </div>
    </Link>
  );
}
