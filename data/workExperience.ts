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
    company: "CGI",
    slug: "cgi",
    section: "latest",
    description: "Global IT business and consulting firm.",
    roles: [
      {
        title: "Senior Salesforce Consultant",
        startDate: "Apr 2020",
        endDate: "Feb 2026",
      },
    ],
    highlights: [
      "Developed the core CGI Transcend® child support intake intellectual property using Salesforce Omnistudio, creating an intuitive, step-by-step interactive wizard that serves as the reusable baseline for state-level implementations.",
      "Implemented the CGI Transcend® solution for the Virginia Department of Social Services by engineering guided Salesforce Omnistudio intake forms—modernizing a system managing up to 275k cases annually.",
      "Served as one of three Scrum Leads and Omnistudio Solution Architect for the Texas Department of Licensing & Regulation modernization initiative, driving Omnistudio architecture and implementation of guided licensing workflows for a system issuing up to 960k licenses annually.",
      "Led a 'Roadshow' demonstration for up to 150 Texas Department of Licensing & Regulation stakeholders, presenting sprint-over-sprint progress of a Salesforce Experience Cloud licensing portal featuring dynamic user routing logic for both authenticated and guest applicants.",
      "Collaborated on the intake architecture for the Ohio Department of Developmental Disabilities, combining Salesforce Omnistudio guided flows with Salesforce low-code tools to manage waiver programs for up to 90k individuals.",
      "Selected as 1 of 2 key resources to transition from implementation to the Managed Services team for the Ohio Department of Developmental Disabilities, entrusted with the production stability of a system serving up to 90k individuals.",
      "Selected as a specialized technical lead during a critical stabilization phase for the Texas Department of Licensing & Regulation, entrusted to triage and debug complex UAT defects during a strategic sprint pause—directly unblocking client testing and ensuring system readiness.",
      "Designed and implemented role-based access controls for CGI Transcend® and the Virginia Department of Social Services, securing sensitive child support data (PII) across public portals and internal caseworker workflows.",
      "Leveraged out-of-the-box Salesforce low-code automation for Oklahoma Adult Protective Services that streamlines investigation workflows to process up to 9k cases annually.",
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
