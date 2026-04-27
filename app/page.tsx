import Link from "next/link";
import { HeroLab } from "@/components/home/HeroLab";
import { Container } from "@/components/ui/Container";
import { IndexRow, InlineMeta } from "@/components/ui/IndexRow";
import { IndexSection } from "@/components/ui/IndexSection";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies } from "@/data/caseStudies";
import { certifications } from "@/data/certifications";
import { experiments } from "@/data/experiments";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";

const operatingRange = [
  {
    label: "Debugging",
    value: "Root-cause analysis, incident stabilization, release risk, and systems visibility.",
  },
  {
    label: "Product",
    value: "Ambiguous requirements translated into states, workflows, interfaces, and shipped behavior.",
  },
  {
    label: "Tooling",
    value: "AI workflows, developer tools, automation, crypto UX, and practical experimentation.",
  },
];

const links = [
  { label: "GitHub", value: "ryanww321", href: siteConfig.githubUrl },
  { label: "LinkedIn", value: "Ryan Whitcomb", href: siteConfig.linkedinUrl },
];

export default function HomePage() {
  const featuredProjects = projects.slice(0, 4);
  const featuredCaseStudies = caseStudies.slice(0, 2);
  const featuredExperiments = experiments.slice(0, 3);

  return (
    <div className="pb-20">
      <Container size="index">
        <HeroLab />
      </Container>

      <Container className="flex flex-col gap-12 pt-12" size="index">
        <Reveal>
          <IndexSection title="Current focus">
            {operatingRange.map((item) => (
              <IndexRow key={item.label} name={item.label} detail={item.value} />
            ))}
          </IndexSection>
        </Reveal>

        <Reveal delay={0.04}>
          <IndexSection
            title="Selected work"
            action={
              <Link className="text-muted transition hover:text-foreground" href="/projects">
                All projects
              </Link>
            }
          >
            {featuredProjects.map((project) => (
              <IndexRow
                key={project.slug}
                name={project.title}
                detail={project.description}
                href={`/projects#${project.slug}`}
                meta={project.status}
              >
                <InlineMeta items={project.focus} />
              </IndexRow>
            ))}
          </IndexSection>
        </Reveal>

        <Reveal delay={0.08}>
          <IndexSection
            title="Case studies"
            action={
              <Link className="text-muted transition hover:text-foreground" href="/case-studies">
                Read more
              </Link>
            }
          >
            {featuredCaseStudies.map((caseStudy) => (
              <IndexRow
                key={caseStudy.slug}
                name={caseStudy.title}
                detail={caseStudy.summary}
                href={`/case-studies#${caseStudy.slug}`}
                meta={caseStudy.isDraft ? "draft" : "published"}
              >
                <InlineMeta items={caseStudy.tags} />
              </IndexRow>
            ))}
          </IndexSection>
        </Reveal>

        <Reveal delay={0.12}>
          <IndexSection
            title="Experiments"
            action={
              <Link className="text-muted transition hover:text-foreground" href="/experiments">
                View all
              </Link>
            }
          >
            {featuredExperiments.map((experiment) => (
              <IndexRow
                key={experiment.slug}
                name={experiment.title}
                detail={experiment.description}
                href={`/experiments#${experiment.slug}`}
                meta={experiment.status}
              >
                <InlineMeta items={[experiment.category, ...experiment.stack]} />
              </IndexRow>
            ))}
          </IndexSection>
        </Reveal>

        <Reveal delay={0.16}>
          <IndexSection title="Certifications">
            {certifications.map((certification) => (
              <IndexRow
                key={`${certification.title}-${certification.issued}`}
                name={certification.title}
                detail={certification.issuer}
                href={certification.credentialUrl}
                external
                meta={certification.issued}
              />
            ))}
          </IndexSection>
        </Reveal>

        <Reveal delay={0.2}>
          <IndexSection title="Connect">
            {links.map((link) => (
              <IndexRow key={link.label} name={link.label} detail={link.value} href={link.href} external />
            ))}
          </IndexSection>
        </Reveal>
      </Container>
    </div>
  );
}
