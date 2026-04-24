# Ryan Whitcomb Portfolio

A modern developer portfolio for Ryan Whitcomb, built to present senior systems debugging, Salesforce architecture, and a transition into AI tools, developer tooling, automation, and crypto product engineering.

The site uses a minimalist dark interface, typed content files, reusable components, and subtle Framer Motion interactions. Project and case-study content is intentionally editable and marks unfinished work as `planned` or `in progress`.

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
  experiments/
  projects/
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
lib/
  site.ts
  types.ts
  utils.ts
public/
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
- `lib/site.ts` for navigation, GitHub, LinkedIn, and site metadata.

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
