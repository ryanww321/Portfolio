import type { Certification } from "@/lib/types";

export function CertificationRow({ title, issuer, issued, credentialUrl }: Certification) {
  return (
    <a
      className="group/cert flex w-full flex-col py-1.5 text-sm leading-relaxed text-foreground/65 transition hover:text-foreground sm:flex-row sm:gap-3"
      href={credentialUrl}
      target="_blank"
      rel="noreferrer"
    >
      <div className="min-w-0 md:flex">
        <div className="truncate">{title}</div>
      </div>
      <div className="flex shrink-0 grow gap-1 text-muted tabular-nums">
        <div className="grow truncate opacity-65">{issuer}</div>
        <div className="shrink-0 text-right opacity-65">{issued}</div>
      </div>
    </a>
  );
}
