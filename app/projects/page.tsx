import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { IndexRow, InlineMeta } from "@/components/ui/IndexRow";
import { IndexSection } from "@/components/ui/IndexSection";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "AI, crypto, automation, and developer-tool projects by Ryan Whitcomb.",
};

export default function ProjectsPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="flex flex-col gap-12" size="index">
        <Reveal>
          <div>
            <p className="mb-3 text-sm text-muted">Projects</p>
            <h1 className="text-3xl font-medium tracking-normal text-foreground">Practical tools with real operating surface.</h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-foreground/70">
              A focused roadmap for AI workflows, debugging systems, automation, crypto UX, and developer tools.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <IndexSection title="Project roadmap">
            {projects.map((project) => (
              <IndexRow key={project.slug} id={project.slug} name={project.title} detail={project.description} meta={project.status}>
                <p className="mt-2 text-xs leading-5 text-muted">{project.problem}</p>
                <InlineMeta items={[...project.focus, ...project.stack]} />
              </IndexRow>
            ))}
          </IndexSection>
        </Reveal>
      </Container>
    </section>
  );
}
