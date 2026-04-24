"use client";

import { motion } from "framer-motion";
import type { Experiment } from "@/lib/types";
import { Badge, StatusBadge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/LinkButton";

type ExperimentCardProps = {
  experiment: Experiment;
  index?: number;
};

export function ExperimentCard({ experiment, index = 0 }: ExperimentCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ delay: index * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className="rounded-lg border border-border bg-card/70 p-5 transition hover:border-accent/30 hover:bg-card-strong"
    >
      <div className="flex items-start justify-between gap-4">
        <Badge tone="accent">{experiment.category}</Badge>
        <StatusBadge status={experiment.status} />
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold tracking-normal text-foreground">{experiment.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{experiment.description}</p>
      <div className="mt-6 space-y-4 border-t border-white/[0.08] pt-5">
        <Detail label="Tests" value={experiment.whatItTests} />
        <Detail label="Next step" value={experiment.nextStep} />
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {experiment.stack.map((item) => (
          <Badge key={item} tone="muted">
            {item}
          </Badge>
        ))}
      </div>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <LinkButton href={experiment.githubUrl} external disabledLabel="Repo planned" className="h-10 px-4">
          GitHub
        </LinkButton>
        <LinkButton href={experiment.demoUrl} external disabledLabel="Demo planned" className="h-10 px-4" variant="ghost">
          Demo
        </LinkButton>
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
