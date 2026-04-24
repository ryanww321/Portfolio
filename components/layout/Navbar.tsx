"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-background/80 backdrop-blur-xl">
      <Container className="flex min-h-16 flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between" size="wide">
        <Link
          href="/"
          className="font-display text-base font-semibold tracking-normal text-foreground transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Ryan Whitcomb
        </Link>
        <nav className="flex flex-wrap items-center gap-1 text-sm" aria-label="Primary navigation">
          {siteConfig.navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-muted transition hover:bg-white/[0.04] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  isActive && "bg-white/[0.06] text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
