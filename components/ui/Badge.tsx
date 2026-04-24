import type { WorkStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

type BadgeTone = "default" | "accent" | "success" | "warning" | "muted";

type BadgeProps = {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
};

const toneClasses: Record<BadgeTone, string> = {
  default: "border-border bg-card text-foreground",
  accent: "border-accent/40 bg-accent/10 text-accent-soft",
  success: "border-success/30 bg-success/10 text-success",
  warning: "border-warning/30 bg-warning/10 text-warning",
  muted: "border-border bg-white/[0.03] text-muted",
};

export function Badge({ children, tone = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center rounded-full border px-3 text-xs font-medium leading-none",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function StatusBadge({ status }: { status: WorkStatus }) {
  const tone: Record<WorkStatus, BadgeTone> = {
    planned: "muted",
    "in progress": "accent",
    live: "success",
  };

  return <Badge tone={tone[status]}>{status}</Badge>;
}
