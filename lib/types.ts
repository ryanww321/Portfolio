export type WorkStatus = "planned" | "in progress" | "live";

export type Project = {
  slug: string;
  title: string;
  description: string;
  problem: string;
  stack: string[];
  status: WorkStatus;
  githubUrl?: string;
  demoUrl?: string;
  focus: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  context: string;
  approach: string[];
  rootCause: string;
  solution: string;
  result: string;
  lessons: string[];
  tags: string[];
  isDraft?: boolean;
};

export type ExperimentCategory = "AI" | "Automation" | "Crypto" | "Developer tooling" | "Workflow";

export type Experiment = {
  slug: string;
  title: string;
  description: string;
  category: ExperimentCategory;
  status: WorkStatus;
  stack: string[];
  whatItTests: string;
  nextStep: string;
  githubUrl?: string;
  demoUrl?: string;
};
