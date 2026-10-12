import Link from "next/link";
import { workExperience } from "@/data/workExperience";

export function ExperienceList() {
  return (
    <ul className="flex flex-col">
      {workExperience.map((work) => {
        const role = work.roles[0];

        return (
          <li key={work.slug} className="border-t border-border first:border-t-0">
            <Link
              className="group -mx-3 grid grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-x-4 gap-y-1 rounded-md px-3 py-3.5 transition hover:bg-accent-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:grid-cols-[2.5rem_minmax(0,1fr)_auto]"
              href={`/work/${work.slug}`}
            >
              <span
                aria-hidden="true"
                className="row-span-2 grid h-10 w-10 place-items-center rounded-lg border border-border bg-card font-mono text-[11px] font-medium text-brand sm:row-span-1"
              >
                {work.monogram}
              </span>
              <span className="min-w-0">
                <span className="font-semibold text-foreground">{work.company}</span>{" "}
                <span className="text-muted">
                  {role.title}
                  {role.subtitle ? `, ${role.subtitle}` : ""}
                </span>
              </span>
              <span className="font-mono text-xs tabular-nums text-muted sm:text-right">
                {role.startDate} – {role.endDate}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
