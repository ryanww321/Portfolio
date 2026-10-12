export const siteConfig = {
  name: "Ryan Whitcomb",
  title: "Ryan Whitcomb | Salesforce, Omnistudio & Modern Web",
  description:
    "Six years delivering Salesforce and Omnistudio solutions, now building modern web apps with AI-assisted workflows.",
  url: "https://ryan-whitcomb-portfolio.vercel.app",
  githubUrl: "https://github.com/ryanww321",
  linkedinUrl: "https://www.linkedin.com/in/ryan-whitcomb",
  resumeUrl: "/resume.pdf",
  // Public contact address. While empty, the primary call to action points to LinkedIn.
  email: "",
  navItems: [
    { href: "/", label: "Home" },
    { href: "/work/protopixel", label: "Protopixel" },
    { href: "/work/cgi", label: "CGI" },
    { href: "/work/sense-corp", label: "Sense Corp" },
    { href: "/work/dealer-com", label: "Dealer.com" },
    { href: "/site", label: "Site info" },
  ],
} as const;
