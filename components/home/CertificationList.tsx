import { certifications } from "@/data/certifications";

export function CertificationList() {
  return (
    <ul className="grid gap-x-8 sm:grid-cols-2">
      {certifications.map((certification) => (
        <li key={`${certification.title}-${certification.issued}`} className="border-t border-border">
          <a
            className="flex items-baseline justify-between gap-4 py-3 text-sm transition hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            href={certification.credentialUrl}
            rel="noreferrer"
            target="_blank"
          >
            <span className="min-w-0">
              <span className="block font-medium text-foreground">{certification.title}</span>
              <span className="text-muted">{certification.issuer}</span>
            </span>
            <span className="shrink-0 font-mono text-xs tabular-nums text-muted">{certification.issued}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
