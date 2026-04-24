import type { Metadata } from "next";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "AI, crypto, automation, and developer-tool projects by Ryan Whitcomb.",
};

export default function ProjectsPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container size="wide">
        <Reveal>
          <SectionHeader
            eyebrow="Projects"
            title="A practical roadmap for modern product engineering."
            description="Each project is data-driven from `data/projects.ts`, so titles, status, links, stack, and positioning can be updated without rewriting the page layout."
          />
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
