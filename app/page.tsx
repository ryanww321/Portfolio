import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { ExperimentCard } from "@/components/experiments/ExperimentCard";
import { HeroLab } from "@/components/home/HeroLab";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { caseStudies } from "@/data/caseStudies";
import { experiments } from "@/data/experiments";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";

const operatingRange = [
  {
    label: "Production debugging",
    value: "Root-cause analysis, incident stabilization, release risk, and systems visibility.",
  },
  {
    label: "Product engineering",
    value: "Ambiguous requirements translated into states, workflows, interfaces, and shipped behavior.",
  },
  {
    label: "Modern tooling",
    value: "AI workflows, developer tools, automation, crypto UX, and practical experimentation.",
  },
];

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const featuredCaseStudies = caseStudies.slice(0, 2);
  const featuredExperiments = experiments.slice(0, 3);

  return (
    <>
      <HeroLab />

      <section className="border-b border-border py-16 sm:py-20">
        <Container size="wide">
          <Reveal>
            <div className="grid gap-8 md:grid-cols-3">
              {operatingRange.map((item) => (
                <div key={item.label} className="border-l border-border pl-5">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-soft">{item.label}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container size="wide">
          <Reveal>
            <SectionHeader
              eyebrow="Projects"
              title="Tools and product ideas with real engineering surface area."
              description="The current portfolio is intentionally honest: unfinished ideas are marked as planned or in progress, with the architecture ready for real demos as each project ships."
              action={<LinkButton href="/projects">All projects</LinkButton>}
            />
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-white/[0.025] py-20 sm:py-24">
        <Container size="wide">
          <Reveal>
            <SectionHeader
              eyebrow="Debugging"
              title="Case studies built around investigation, not buzzwords."
              description="These are editable, client-safe drafts for turning enterprise debugging work into concise stories a product engineering team can evaluate."
              action={<LinkButton href="/case-studies">Read case studies</LinkButton>}
            />
          </Reveal>
          <div className="grid gap-5">
            {featuredCaseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container size="wide">
          <Reveal>
            <SectionHeader
              eyebrow="Experiments"
              title="Small prototypes for the next engineering direction."
              description="AI, automation, crypto, and developer-tool experiments that can grow into focused product demos."
              action={<LinkButton href="/experiments">View experiments</LinkButton>}
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredExperiments.map((experiment, index) => (
              <ExperimentCard key={experiment.slug} experiment={experiment} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_0.6fr] lg:items-end" size="wide">
          <Reveal>
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-accent-soft">Contact</p>
              <h2 className="font-display text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
                Open to product engineering teams building serious tools.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                Best fit: AI tooling, developer platforms, automation-heavy products, crypto infrastructure, and teams
                that value clear debugging under pressure.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <LinkButton href={siteConfig.githubUrl} external variant="primary">
                GitHub
              </LinkButton>
              <LinkButton href={siteConfig.linkedinUrl} external>
                LinkedIn
              </LinkButton>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
