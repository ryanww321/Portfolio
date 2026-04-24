import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "ai-job-scanner",
    title: "AI Job Scanner",
    description:
      "A focused tool for turning noisy job descriptions into ranked fit signals, skill gaps, and tailored application notes.",
    problem:
      "Senior engineers changing domains need a faster way to compare roles without losing the nuance in each posting.",
    stack: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
    status: "in progress",
    focus: ["AI evaluation", "Product workflows", "Structured extraction"],
  },
  {
    slug: "crypto-analytics-dashboard",
    title: "Crypto Analytics Dashboard",
    description:
      "A lightweight dashboard concept for tracking wallet activity, asset exposure, and market context in one operator view.",
    problem:
      "Crypto users often jump between explorers, exchanges, and notes when they need a simple view of what changed.",
    stack: ["Next.js", "TypeScript", "Charting", "Wallet APIs"],
    status: "planned",
    focus: ["Crypto UX", "Data modeling", "Signal design"],
  },
  {
    slug: "developer-debugging-toolkit",
    title: "Developer Debugging Toolkit",
    description:
      "A structured investigation notebook for incidents, hypotheses, reproduction steps, and fix verification.",
    problem:
      "Complex production issues lose time when findings, logs, and decisions are scattered across chat threads and tickets.",
    stack: ["React", "TypeScript", "Local-first storage", "Markdown"],
    status: "in progress",
    focus: ["Debugging systems", "Incident workflows", "Knowledge capture"],
  },
  {
    slug: "automation-workflow-tool",
    title: "Automation Workflow Tool",
    description:
      "A small workflow runner for recurring operational checks, handoffs, and follow-up reminders across business systems.",
    problem:
      "Enterprise teams depend on repeatable checks, but the steps often live in memory instead of executable workflows.",
    stack: ["Node.js", "TypeScript", "Cron jobs", "API integrations"],
    status: "planned",
    focus: ["Automation", "Reliability", "Operational design"],
  },
  {
    slug: "prompt-engineering-playground",
    title: "Prompt Engineering Playground",
    description:
      "A prompt comparison workspace for testing instructions, examples, outputs, and revision history side by side.",
    problem:
      "AI workflows need a practical way to compare prompt changes before they become product behavior.",
    stack: ["Next.js", "React", "TypeScript", "Framer Motion"],
    status: "in progress",
    focus: ["AI tooling", "Evaluation", "UX prototyping"],
  },
];
