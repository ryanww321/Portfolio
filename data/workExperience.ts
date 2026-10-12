export type WorkExperienceRole = {
  title: string;
  subtitle?: string;
  startDate: string;
  endDate: string;
};

export type WorkExperience = {
  company: string;
  slug: string;
  section: "salesforce" | "modernWeb" | "earlier";
  description: string;
  roles: WorkExperienceRole[];
  highlights: string[];
  tools: string[];
};

export const workExperience: WorkExperience[] = [
  {
    company: "Protopixel",
    slug: "protopixel",
    section: "modernWeb",
    description:
      "SwiftPass is a passport and visa customer portal serving travelers, partner businesses, and review staff.",
    roles: [
      {
        title: "Freelance Developer",
        subtitle: "SwiftPass",
        startDate: "Mar 2026",
        endDate: "Present",
      },
    ],
    highlights: [
      "Scoped and shipped 10 features and fixes on SwiftPass, a passport and visa customer portal built with Next.js, React, TypeScript, and Supabase, with pull requests reviewed and merged by the project architect.",
      "Wrote a Linear spec for each change with reproduction steps, context, and acceptance criteria, drove the implementation through Claude Code and Codex, and verified the real flow in the browser for every affected role before opening a pull request linked to its ticket.",
      "Closed a duplicate-application race condition with a PostgreSQL partial unique index and fixed a Supabase Storage path validation defect.",
      "Fixed document downloads for full admins on files tied to stale profile paths, keeping access checks intact for every other role, with regression tests that failed before the fix and pass after.",
      "Implemented authorization-aware paginated RPCs for the applications and team views, along with access-aware advanced and saved filters, and opened them for review.",
    ],
    tools: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Linear", "Claude Code", "Codex", "Docker (local development)"],
  },
  {
    company: "CGI",
    slug: "cgi",
    section: "salesforce",
    description: "Global IT business and consulting firm.",
    roles: [
      {
        title: "Senior Salesforce Consultant",
        startDate: "Jun 2021",
        endDate: "Feb 2026",
      },
    ],
    highlights: [
      "Served as Omnistudio Solution Architect and one of three Scrum Leads for the Texas Department of Licensing & Regulation, designing guided licensing workflows and Experience Cloud registration and post-login routing for a system issuing up to 960k licenses annually, and presented the opening Roadshow demo to roughly 150 stakeholders.",
      "Helped facilitate a UAT stabilization phase for the Texas Department of Licensing & Regulation alongside the other two Scrum Leads, coordinating 5+ engineers through 30+ complex defects while personally fixing defects, including the most complicated Omniscript ones; critical and high-severity defects cleared and UAT resumed on schedule.",
      "Owned the Salesforce data architecture for the Massachusetts Executive Office of Education, building Omnistudio solutions for education workflows and managing metadata deployments across environments with Copado.",
      "Joined Virginia's child support modernization from the start, replacing a 29-year-old mainframe with a federally certifiable Salesforce platform under a 7-year, $83M contract; owned the data architecture, built guided Omnistudio forms and Experience Cloud self-service components, and supported CI/CD through Copado for a system managing up to 275k cases annually.",
      "Helped design role-based access controls for CGI Transcend® and the Virginia Department of Social Services, protecting sensitive child support data (PII) across public portals and internal caseworker workflows.",
      "Extended CGI Transcend®, CGI's Salesforce case management product, for child support: owned the data architecture, extended the Omnistudio layer for state-specific configuration, and built AppExchange packages reused across state implementations.",
      "Joined the Ohio Department of Development's consolidation of multiple legacy grants systems into one Salesforce Public Sector Solutions instance, and designed and owned its data architecture alongside the Omnistudio Flexcards, Omniscripts, Data Mappers, and Integration Procedures automating grant intake.",
      "Staffed on the Ohio Department of Developmental Disabilities program from the very start, helping establish its Salesforce platform, including the Individual Service Plan rollout and guided Omnistudio flows for waiver programs serving up to 90k individuals, then selected as 1 of 2 to roll the org into Managed Services and production support.",
    ],
    tools: ["Salesforce", "Omnistudio", "Experience Cloud", "Flow", "Copado", "Azure DevOps"],
  },
  {
    company: "Sense Corp",
    slug: "sense-corp",
    section: "salesforce",
    description: "Boutique consulting firm acquired by CGI.",
    roles: [
      {
        title: "Salesforce Consultant",
        startDate: "Apr 2020",
        endDate: "Jun 2021",
      },
    ],
    highlights: [
      "Began the Ohio Department of Developmental Disabilities implementation in August 2020, translating program requirements into user stories and Salesforce configuration; the engagement continued after CGI acquired Sense Corp.",
      "Contributed to a Salesforce-based Adult Protective Services application for Oklahoma's Department of Human Services as a Salesforce Technical Analyst, supporting core data architecture, security model configuration, and release management and testing.",
      "Built reports and dashboards giving leadership visibility into key performance indicators.",
    ],
    tools: ["Salesforce", "Flow", "Reports", "Dashboards", "Agile"],
  },
  {
    company: "Dealer.com (Cox Automotive)",
    slug: "dealer-com",
    section: "earlier",
    description: "Automotive digital marketing platform for car dealerships.",
    roles: [
      {
        title: "Implementation Project Lead",
        startDate: "Oct 2014",
        endDate: "Dec 2019",
      },
    ],
    highlights: [
      "Delivered roughly 300 enterprise website implementations over five years, carrying 20 to 30 dealer accounts at once through 60 to 90 day builds and coordinating launches to zero downtime.",
      "Led the Ford Elite Plus and Ford OEM Retail platform upgrade for a top-ranked global dealership through go-live.",
      "Managed a team of up to 10 contractors across simultaneous dealer migrations.",
    ],
    tools: ["Implementation", "Data migration", "Client delivery", "QA", "Launch planning"],
  },
];

export const salesforceWork = workExperience.filter((item) => item.section === "salesforce");
export const modernWebWork = workExperience.filter((item) => item.section === "modernWeb");
export const earlierWork = workExperience.filter((item) => item.section === "earlier");

export function getWorkExperience(slug: string) {
  return workExperience.find((item) => item.slug === slug);
}
