import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type LinkButtonVariant = "primary" | "secondary" | "ghost";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
  children: React.ReactNode;
  variant?: LinkButtonVariant;
  external?: boolean;
  disabledLabel?: string;
};

const variantClasses: Record<LinkButtonVariant, string> = {
  primary: "border-brand bg-brand text-brand-foreground hover:bg-brand/90",
  secondary: "border-border bg-card text-foreground hover:border-foreground/25",
  ghost: "border-transparent bg-transparent text-muted hover:text-foreground",
};

export function LinkButton({
  href,
  children,
  variant = "secondary",
  external,
  disabledLabel = "Coming soon",
  className,
  ...props
}: LinkButtonProps) {
  const classes = cn(
    "inline-flex h-11 items-center justify-center rounded-md border px-5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variantClasses[variant],
    className,
  );

  if (!href) {
    return (
      <span className={cn(classes, "cursor-not-allowed opacity-55")} aria-disabled="true">
        {disabledLabel}
      </span>
    );
  }

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...props}>
      {children}
    </Link>
  );
}
