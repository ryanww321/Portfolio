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
  primary:
    "border-accent bg-accent text-white shadow-[0_0_32px_rgba(124,92,255,0.24)] hover:bg-accent/90",
  secondary: "border-border bg-white/[0.04] text-foreground hover:border-white/25 hover:bg-white/[0.07]",
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
    "inline-flex h-11 items-center justify-center rounded-md border px-5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
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
