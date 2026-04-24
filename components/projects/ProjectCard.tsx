"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/types";
import { Badge, StatusBadge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/LinkButton";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ delay: index * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group rounded-lg border border-border bg-card/80 p-5 transition hover:border-accent/40 hover:bg-card-strong"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-display text-xl font-semibold tracking-normal text-foreground">{project.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>
        </div>
        <StatusBadge status={project.status} />
      </div>

      <div className="mt-6 border-t border-white/[0.08] pt-5">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Problem</p>
        <p className="mt-2 text-sm leading-6 text-foreground/80">{project.problem}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Badge key={item} tone="muted">
            {item}
          </Badge>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.focus.map((item) => (
          <span key={item} className="text-xs text-muted">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <LinkButton href={project.githubUrl} external disabledLabel="Repo planned" className="h-10 px-4">
          GitHub
        </LinkButton>
        <LinkButton href={project.demoUrl} external disabledLabel="Demo planned" className="h-10 px-4" variant="ghost">
          Live demo
        </LinkButton>
      </div>
    </motion.article>
  );
}
