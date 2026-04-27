import { cn } from "@/lib/utils";

type IndexSectionProps = {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export function IndexSection({ title, action, children, className }: IndexSectionProps) {
  return (
    <section className={cn("flex flex-col gap-4", className)}>
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-sm font-normal text-muted">{title}</h2>
        {action ? <div className="shrink-0 text-sm">{action}</div> : null}
      </div>
      <div>{children}</div>
    </section>
  );
}
