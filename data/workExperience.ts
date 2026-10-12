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
      "Developed the core CGI Transcend® child support intake intellectual property using Salesforce Omnistudio, creating an intuitive, step-by-step interactive wizard that serves as the reusable baseline for state-level implementations.",
      "Joined Virginia's child support modernization from the start, replacing a 29-year-old mainframe with a federally certifiable Salesforce platform under a 7-year, $83M contract; owned the data architecture, built guided Omnistudio forms and Experience Cloud self-service components, and supported CI/CD through Copado for a system managing up to 275k cases annually.",
      "Served as Omnistudio Solution Architect and one of three Scrum Leads for the Texas Department of Licensing & Regulation, designing guided licensing workflows and Experience Cloud registration and post-login routing for a system issuing up to 960k licenses annually, and presented the opening Roadshow demo to roughly 150 stakeholders.",
      "Collaborated on the intake architecture for the Ohio Department of Developmental Disabilities, combining Salesforce Omnistudio guided flows with Salesforce low-code tools to manage waiver programs for up to 90k individuals.",
      "Selected as 1 of 2 key resources to transition from implementation to the Managed Services team for the Ohio Department of Developmental Disabilities, entrusted with the production stability of a system serving up to 90k individuals.",
      "Consolidated multiple legacy grants-management systems for the Ohio Department of Development into a single Salesforce Public Sector Solutions instance, improving data consistency across grant-driven workflows.",
      "Designed and owned the Salesforce data architecture for the Ohio Department of Development, building the custom objects, validation rules, and page layouts behind complex grant workflows alongside the Omnistudio FlexCards, Omniscripts, Data Mappers, and Integration Procedures automating grant intake and processing.",
      "Owned the Salesforce data architecture for the Massachusetts Executive Office of Education, building Omnistudio solutions for education workflows and managing metadata deployments across environments with Copado.",
      "Helped facilitate a UAT stabilization phase for the Texas Department of Licensing & Regulation alongside the other two Scrum Leads, coordinating 5+ engineers through 30+ complex defects while personally fixing defects, including the most complicated Omniscript ones; critical and high-severity defects cleared and UAT resumed on schedule.",
      "Designed and implemented role-based access controls for CGI Transcend® and the Virginia Department of Social Services, securing sensitive child support data (PII) across public portals and internal caseworker workflows.",
    ],
    tools: ["Salesforce", "Omnistudio", "Experience Cloud", "Copado", "Azure DevOps"],
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
      "Executed core Salesforce configuration including data modeling, security, automation, and user access controls across successive client engagements.",
      "Translated raw business requirements into functional user stories, scalable system features, and configurable Salesforce solutions aligned to stakeholder needs.",
      "Contributed to a Salesforce-based Adult Protective Services application for Oklahoma's Department of Human Services as a Salesforce Technical Analyst, supporting core data architecture, security model configuration, and release management and testing.",
      "Built actionable Dashboards and Reports that provided leadership with real-time visibility into key performance indicators, turning raw system data into useful operational insight.",
    ],
    tools: ["Salesforce", "Flow", "Reports", "Dashboards", "Agile"],
  },
  {
    company: "Dealer.com",
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
      "Orchestrated hundreds of enterprise website builds and data migrations over a 5-year tenure, aligning DevOps and Engineering teams to deliver seamless, zero-downtime launches.",
      "Led the platform upgrade for the Ford Elite Plus and Ford OEM Retail program for a top-ranked global dealership, managing VIP client relationships to execute a seamless go-live.",
      "Managed a team of 10 contractors and created clear quality checks to ensure data accuracy across multiple simultaneous migrations.",
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
