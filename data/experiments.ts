import type { Experiment } from "@/lib/types";

export const experiments: Experiment[] = [
  {
    slug: "agentic-ticket-triage",
    title: "Agentic Ticket Triage",
    description:
      "A prototype flow for clustering support tickets, extracting likely owners, and drafting investigation plans.",
    category: "AI",
    status: "planned",
    stack: ["TypeScript", "LLM prompts", "Structured outputs"],
    whatItTests: "Whether AI can reduce the first hour of ambiguity in production support.",
    nextStep: "Build a local demo with imported anonymized ticket examples.",
  },
  {
    slug: "release-risk-checklist",
    title: "Release Risk Checklist",
    description:
      "A compact checklist builder for release managers who need explicit rollback, persona, and data migration checks.",
    category: "Workflow",
    status: "in progress",
    stack: ["React", "Local storage", "Tailwind CSS"],
    whatItTests: "How much structure is enough to improve release quality without slowing teams down.",
    nextStep: "Add exportable Markdown summaries for pull requests and deployment notes.",
  },
  {
    slug: "wallet-activity-notes",
    title: "Wallet Activity Notes",
    description:
      "A crypto research notebook concept that attaches human-readable notes to wallet and transaction events.",
    category: "Crypto",
    status: "planned",
    stack: ["Next.js", "Wallet APIs", "TypeScript"],
    whatItTests: "Whether annotation improves sense-making for on-chain research workflows.",
    nextStep: "Mock the event model and test the note-taking interaction.",
  },
  {
    slug: "debugging-decision-log",
    title: "Debugging Decision Log",
    description:
      "A developer-tool experiment for recording hypotheses, discarded paths, and verification evidence during an investigation.",
    category: "Developer tooling",
    status: "in progress",
    stack: ["React", "Markdown", "Framer Motion"],
    whatItTests: "Whether lightweight decision logging makes incident handoffs clearer.",
    nextStep: "Add timeline grouping and copy-ready summaries.",
  },
];
