"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

// Content is server-rendered visible. The hidden starting state only applies once the
// `js` class is on <html> (see app/layout.tsx), and is skipped for reduced motion.
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      element.dataset.revealed = "true";
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        element.dataset.revealed = "true";
        observer.disconnect();
      }
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("reveal", className)} style={{ "--reveal-delay": `${delay}s` } as CSSProperties}>
      {children}
    </div>
  );
}
