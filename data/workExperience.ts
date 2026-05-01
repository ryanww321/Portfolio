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
    description: "Global IT consulting firm focused on large-scale public sector modernization.",
    roles: [
      {
        title: "Senior Salesforce Consultant",
        startDate: "2020",
        endDate: "2026",
      },
    ],
    highlights: [
      "Developed the core CGI Transcend child support intake intellectual property using Salesforce Omnistudio, creating an interactive wizard that became the reusable baseline for state-level implementations.",
      "Implemented CGI Transcend for the Virginia Department of Social Services by engineering guided Salesforce Omnistudio intake forms for a system managing up to 275k cases annually.",
      "Served as one of three Scrum Leads and Omnistudio Solution Architect for the Texas Department of Licensing & Regulation modernization initiative, supporting guided licensing workflows for a system issuing up to 960k licenses annually.",
      "Led a Roadshow demonstration for up to 150 Texas Department of Licensing & Regulation stakeholders, presenting sprint-over-sprint progress on an Experience Cloud licensing portal with dynamic routing for authenticated and guest applicants.",
      "Selected as a specialized technical lead during a Texas stabilization phase, triaging and debugging complex UAT defects to unblock client testing and improve release readiness.",
      "Designed least-privilege access controls across public portals and internal caseworker workflows, protecting sensitive child support data and PII.",
      "Executed CI/CD workflows with Copado and Azure DevOps, handling metadata packaging, conflict resolution, and post-deployment validation.",
    ],
    tools: ["Salesforce", "Omnistudio", "Experience Cloud", "Copado", "Azure DevOps"],
  },
  {
    company: "Sense Corp",
    slug: "sense-corp",
    section: "earlier",
    description: "Digital systems integration and consulting work that later transitioned into CGI.",
    roles: [
      {
        title: "Salesforce Consultant",
        startDate: "2020",
        endDate: "2021",
      },
    ],
    highlights: [
      "Executed core Salesforce configuration across client engagements, including data modeling, security, automation, and user access controls.",
      "Translated raw business requirements into functional user stories, scalable system features, and configurable Salesforce solutions aligned to stakeholder needs.",
      "Built dashboards and reports that gave leadership real-time visibility into key performance indicators.",
      "Supported Agile delivery habits across discovery, implementation, validation, and stakeholder feedback loops.",
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
        startDate: "2014",
        endDate: "2019",
      },
    ],
    highlights: [
      "Orchestrated hundreds of enterprise website builds and data migrations over a 5-year tenure, aligning DevOps and Engineering teams on seamless, zero-downtime launches.",
      "Led the platform upgrade for the Ford Elite Plus and Ford OEM Retail program for a top-ranked global dealership, managing VIP client relationships through go-live.",
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
