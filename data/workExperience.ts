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
      "Built web-based public portals and internal caseworker applications for state agencies, replacing legacy mainframe workflows with scalable Salesforce Experience Cloud and Omnistudio solutions.",
      "Developed interactive, form-driven user workflows using Omniscripts, Flexcards, Data Mappers, Integration Procedures, Flow, conditional logic, and validation rules to improve digital intake experiences.",
      "Configured Salesforce object models, automation, permissions, and sharing logic to support secure role-based user experiences across public-facing portals and internal staff workflows.",
      "Troubleshot UAT and production issues across user flows, data mappings, integrations, permissions, and deployments, performing root cause analysis and iterative defect resolution.",
      "Partnered with product owners, business analysts, QA teams, and client stakeholders to translate requirements into user stories, demos, acceptance criteria, and production-ready platform features.",
      "Executed deployment workflows using Copado, Azure DevOps, Git, and metadata validation processes to support stable releases across complex Salesforce environments.",
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
      "Built reports and dashboards that gave leadership real-time visibility into system activity, operational performance, and key business metrics.",
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
      "Orchestrated hundreds of enterprise website builds and data migrations, coordinating cross-functional teams to deliver accurate, on-time launches for automotive dealership clients.",
      "Led platform upgrades for Ford Elite Plus and Ford OEM Retail program clients, managing VIP stakeholder relationships and launch readiness across high-visibility website implementations.",
      "Managed a team of 10 contractors and created quality checks to ensure data accuracy across multiple simultaneous website migrations.",
    ],
    tools: ["Implementation", "Data migration", "Client delivery", "QA", "Launch planning"],
  },
];

export const latestWork = workExperience.filter((item) => item.section === "latest");
export const earlierWork = workExperience.filter((item) => item.section === "earlier");

export function getWorkExperience(slug: string) {
  return workExperience.find((item) => item.slug === slug);
}
