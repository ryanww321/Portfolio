export type ImpactStat = {
  value: string;
  label: string;
};

export type Engagement = {
  context: string;
  title: string;
  summary: string;
  tags: string[];
  href: string;
};

export const impactStats: ImpactStat[] = [
  { value: "960k", label: "licenses a year on the Texas licensing platform" },
  { value: "$83M", label: "Virginia child support modernization" },
  { value: "275k", label: "child support cases a year on the new platform" },
  { value: "10", label: "SwiftPass features and fixes shipped" },
];

export const engagements: Engagement[] = [
  {
    context: "CGI · Texas licensing",
    title: "Omnistudio Solution Architect and Scrum Lead",
    summary:
      "Designed guided licensing workflows and Experience Cloud registration and routing, and presented the opening Roadshow demo to about 150 stakeholders.",
    tags: ["Omniscripts", "Experience Cloud"],
    href: "/work/cgi",
  },
  {
    context: "CGI · Virginia child support",
    title: "Replacing a 29-year-old mainframe",
    summary:
      "Owned the data architecture, built guided Omnistudio forms and self-service components, and supported CI/CD through Copado.",
    tags: ["Data architecture", "Copado"],
    href: "/work/cgi",
  },
  {
    context: "CGI · Ohio grants",
    title: "Consolidating legacy grants systems",
    summary:
      "Designed the data architecture plus the Flexcards, Omniscripts, Data Mappers, and Integration Procedures automating grant intake.",
    tags: ["Data Mappers", "Integration Procedures"],
    href: "/work/cgi",
  },
  {
    context: "Protopixel · SwiftPass",
    title: "Modern web with AI-assisted delivery",
    summary:
      "Spec-first changes in Next.js and Supabase, built with Claude Code, verified in the browser for every role, and reviewed and merged by the project architect.",
    tags: ["Next.js", "Supabase", "Claude Code"],
    href: "/work/protopixel",
  },
];
