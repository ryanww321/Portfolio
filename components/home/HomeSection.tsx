import type { ReactNode } from "react";

type HomeSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function HomeSection({ id, title, children }: HomeSectionProps) {
  return (
    <section aria-labelledby={`${id}-title`} className="flex scroll-mt-8 flex-col gap-5" id={id}>
      <h2 className="font-mono text-xs uppercase tracking-[0.12em] text-muted" id={`${id}-title`}>
        {title}
      </h2>
      {children}
    </section>
  );
}
