import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type IndexRowProps = {
  name: string;
  detail: ReactNode;
  meta?: string;
  href?: string;
  external?: boolean;
  muted?: boolean;
  id?: string;
  children?: ReactNode;
  className?: string;
};

export function IndexRow({ name, detail, meta, href, external, muted, id, children, className }: IndexRowProps) {
  const rowClassName = cn(
    "group/row relative flex flex-col gap-3 border-t border-border py-4 leading-tight transition duration-200 md:flex-row md:items-start",
    href &&
      "hover:-mx-3 hover:rounded-md hover:border-transparent hover:bg-card-strong/70 hover:px-3 hover:shadow-[inset_0_0.5px_0_rgba(255,255,255,0.05)]",
    muted && "text-foreground/65",
    className,
  );

  const content = (
    <>
      <div className="flex min-w-0 items-baseline gap-2 md:w-36 md:shrink-0">
        <div className="break-words font-medium text-foreground/90 transition group-hover/row:text-foreground">{name}</div>
      </div>
      <div className="min-w-0 flex-1 text-sm leading-6 text-foreground/75 transition group-hover/row:text-foreground/90">
        <div>{detail}</div>
        {children}
      </div>
      {meta ? (
        <div className="shrink-0 text-left text-sm tabular-nums text-muted md:min-w-24 md:text-right">{meta}</div>
      ) : null}
    </>
  );

  if (href && external) {
    return (
      <a id={id} className={rowClassName} href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link id={id} className={rowClassName} href={href}>
        {content}
      </Link>
    );
  }

  return (
    <div id={id} className={rowClassName}>
      {content}
    </div>
  );
}

export function InlineMeta({ items }: { items: string[] }) {
  return (
    <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-xs leading-5 text-muted">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
