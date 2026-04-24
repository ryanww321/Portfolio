import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, action, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between", className)}>
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-accent-soft">{eyebrow}</p>
        ) : null}
        <h2 className="font-display text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">{title}</h2>
        {description ? <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
