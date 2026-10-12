import Link from "next/link";
import { engagements } from "@/data/highlights";

export function EngagementGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {engagements.map((engagement) => (
        <Link
          key={engagement.title}
          className="group flex flex-col gap-2.5 rounded-lg border border-border bg-card p-5 transition hover:border-brand/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          href={engagement.href}
        >
          <span className="text-xs font-semibold text-brand">{engagement.context}</span>
          <h3 className="font-display text-lg font-medium leading-snug text-foreground">{engagement.title}</h3>
          <p className="text-sm leading-relaxed text-muted">{engagement.summary}</p>
          <ul className="mt-auto flex flex-wrap gap-1.5 pt-1.5" aria-label="Stack">
            {engagement.tags.map((tag) => (
              <li key={tag} className="rounded border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-muted">
                {tag}
              </li>
            ))}
          </ul>
        </Link>
      ))}
    </div>
  );
}
