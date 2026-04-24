"use client";

import { motion } from "framer-motion";
import type { CaseStudy } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
  index?: number;
};

export function CaseStudyCard({ caseStudy, index = 0 }: CaseStudyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-lg border border-border bg-card/70 p-5 transition hover:border-white/20 hover:bg-card-strong"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {caseStudy.isDraft ? <Badge tone="accent">editable draft</Badge> : null}
            {caseStudy.tags.map((tag) => (
              <Badge key={tag} tone="muted">
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="font-display text-2xl font-semibold tracking-normal text-foreground">{caseStudy.title}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{caseStudy.summary}</p>
        </div>
      </div>

      <div className="mt-7 border-t border-white/[0.08] pt-5">
        <Detail label="Context" value={caseStudy.context} />
      </div>

      <div className="mt-7 grid gap-5 md:grid-cols-2">
        <Detail label="Problem" value={caseStudy.problem} />
        <Detail label="Root cause" value={caseStudy.rootCause} />
        <Detail label="Solution" value={caseStudy.solution} />
        <Detail label="Result" value={caseStudy.result} />
      </div>

      <div className="mt-7 grid gap-6 border-t border-white/[0.08] pt-6 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Approach</p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-foreground/80">
            {caseStudy.approach.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Lessons learned</p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-foreground/80">
            {caseStudy.lessons.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{label}</p>
      <p className="mt-2 text-sm leading-6 text-foreground/80">{value}</p>
    </div>
  );
}
