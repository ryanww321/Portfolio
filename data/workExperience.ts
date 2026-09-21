export type WorkExperienceRole = {
  title: string;
  subtitle?: string;
  startDate: string;
  endDate: string;
};

export type WorkExperience = {
  company: string;
  slug: string;
  section: "latest" | "earlier";
  description: string;
  roles: WorkExperienceRole[];
  highlights: string[];
  tools: string[];
};

export const workExperience: WorkExperience[] = [
  {
    company: "Protopixel",
    slug: "protopixel",
    section: "latest",
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
      "Scoped and shipped 7 features and fixes on SwiftPass, a passport and visa customer portal built with Next.js, React, TypeScript, and Supabase, with pull requests reviewed and merged by the project architect.",
      "Work each change from a Linear spec carrying reproduction steps, context, and acceptance criteria, drive the implementation through Claude Code and Codex, then verify the real flow in the browser for every affected role before opening a pull request linked back to its ticket.",
      "Closed a duplicate-application race condition in PostgreSQL with a partial unique index.",
      "Fixed a Supabase Storage path validation defect.",
      "Work inside a Supabase Row-Level Security model spanning five roles across traveler, partner, and staff surfaces.",
      "Implemented and pushed for review authorization-aware paginated RPCs for the applications and team views, along with access-aware advanced and saved filters.",
    ],
    tools: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Linear", "Claude Code", "Codex", "Docker (local development)"],
  },
  {
    company: "CGI",
    slug: "cgi",
    section: "latest",
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
      "Implemented the CGI Transcend® solution for the Virginia Department of Social Services by engineering guided Salesforce Omnistudio intake forms, modernizing a system managing up to 275k cases annually.",
      "Served as one of three Scrum Leads and Omnistudio Solution Architect for the Texas Department of Licensing & Regulation modernization initiative, driving Omnistudio architecture and implementation of guided licensing workflows for a system issuing up to 960k licenses annually.",
      "Led a 'Roadshow' demonstration for up to 150 Texas Department of Licensing & Regulation stakeholders, presenting sprint-over-sprint progress of a Salesforce Experience Cloud licensing portal featuring dynamic user routing logic for both authenticated and guest applicants.",
      "Collaborated on the intake architecture for the Ohio Department of Developmental Disabilities, combining Salesforce Omnistudio guided flows with Salesforce low-code tools to manage waiver programs for up to 90k individuals.",
      "Selected as 1 of 2 key resources to transition from implementation to the Managed Services team for the Ohio Department of Developmental Disabilities, entrusted with the production stability of a system serving up to 90k individuals.",
      "Consolidated multiple legacy grants-management systems for the Ohio Department of Development into a single Salesforce Public Sector Solutions instance, improving data consistency across grant-driven workflows.",
      "Designed and owned the Salesforce data architecture for the Ohio Department of Development, building the custom objects, validation rules, and page layouts behind complex grant workflows alongside the Omnistudio FlexCards, OmniScripts, DataMappers, and Integration Procedures automating grant intake and processing.",
      "Owned the Salesforce data architecture across a four-month engagement with the Massachusetts Executive Office of Education, building Omnistudio solutions for education-related workflows and managing metadata deployments between environments with Copado.",
      "Selected as a specialized technical lead during a critical stabilization phase for the Texas Department of Licensing & Regulation, entrusted to triage and debug complex UAT defects during a strategic sprint pause, directly unblocking client testing and ensuring system readiness.",
      "Designed and implemented role-based access controls for CGI Transcend® and the Virginia Department of Social Services, securing sensitive child support data (PII) across public portals and internal caseworker workflows.",
    ],
    tools: ["Salesforce", "Omnistudio", "Experience Cloud", "Copado", "Azure DevOps"],
  },
  {
    company: "Sense Corp",
    slug: "sense-corp",
    section: "earlier",
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

export const latestWork = workExperience.filter((item) => item.section === "latest");
export const earlierWork = workExperience.filter((item) => item.section === "earlier");

export function getWorkExperience(slug: string) {
  return workExperience.find((item) => item.slug === slug);
}
