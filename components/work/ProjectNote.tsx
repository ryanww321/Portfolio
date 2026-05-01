export function ProjectNote() {
  return (
    <div className="flex items-start gap-3 py-1.5 pr-3 text-sm text-foreground/65">
      <div className="shrink-0 grow-0">
        <div className="text-muted tabular-nums">Soon</div>
      </div>
      <div className="flex grow gap-1.5">
        <div className="leading-relaxed">
          <span className="uline">Projects are in the garage right now.</span>
          <span className="ml-3 text-muted opacity-65">I am still tuning what deserves a proper launch.</span>
        </div>
      </div>
    </div>
  );
}
