# Ryan Whitcomb Portfolio

A compact developer portfolio for Ryan Whitcomb, built around work history, Salesforce architecture, certifications, selected projects, and a transition into AI tools, developer tooling, automation, and crypto product engineering.

The current site uses a light editorial index inspired by compact work-history pages: narrow content, quiet typography, row dividers, reusable content primitives, and subtle Framer Motion reveals. Work detail pages render resume-backed bullet points, the footer exposes the latest PDF resume, and the placeholder AI chat page is parked for a future site-context assistant.

## Tech Stack

- Next.js with App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel deployment target

## Folder Structure

```txt
app/
  about/
  case-studies/
  chat/
  experiments/
  projects/
  site/
  work/[slug]/
  layout.tsx
  page.tsx
  not-found.tsx
components/
  case-studies/
    CaseStudyCard.tsx
  experiments/
    ExperimentCard.tsx
  home/
    HeroLab.tsx
  layout/
    Footer.tsx
    Navbar.tsx
  work/
    CertificationRow.tsx
    ProjectNote.tsx
    WorkPageShell.tsx
    WorkRow.tsx
  projects/
    ProjectCard.tsx
  ui/
    Badge.tsx
    Button.tsx
    Container.tsx
    LinkButton.tsx
    Reveal.tsx
    SectionHeader.tsx
data/
  caseStudies.ts
  experiments.ts
  projects.ts
  certifications.ts
lib/
  site.ts
  types.ts
  utils.ts
public/
  resume.pdf
styles/
  globals.css
next.config.ts
postcss.config.mjs
tsconfig.json
eslint.config.mjs
```

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Development Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Content Updates

Update portfolio content in these files:

- `data/projects.ts` for project cards, statuses, stack, GitHub links, and demo links.
- `data/caseStudies.ts` for debugging stories and lessons learned.
- `data/experiments.ts` for small prototypes and tool ideas.
- `data/certifications.ts` for certifications, issuers, dates, and credential links. Salesforce certifications point to the public Trailblazer profile and the Full Stack Web Development certificate points to the Credly badge.
- `data/workExperience.ts` for homepage work rows and `/work/[slug]` resume bullet points.
- `lib/site.ts` for navigation, GitHub, LinkedIn, and site metadata.
- `public/resume.pdf` for the footer PDF resume download.

Use `planned` or `in progress` until a project has a real repository and demo. Avoid presenting unfinished ideas as completed work.

## Vercel Deployment

1. Push the repository to GitHub.
2. In Vercel, create a new project from the GitHub repository.
3. Keep the framework preset as `Next.js`.
4. Use the default build command:

```bash
npm run build
```

5. Use the default output handling for Next.js. No custom output directory is required.
6. Add environment variables later only if a project demo needs API keys.

After the first deployment, update project `demoUrl` fields in `data/projects.ts` and `data/experiments.ts` with real live links.
