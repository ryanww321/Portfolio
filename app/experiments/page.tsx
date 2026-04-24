import type { Metadata } from "next";
import { ExperimentCard } from "@/components/experiments/ExperimentCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experiments } from "@/data/experiments";

export const metadata: Metadata = {
  title: "Experiments",
  description: "Small AI, automation, crypto, workflow, and developer-tool experiments by Ryan Whitcomb.",
};

export default function ExperimentsPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container size="wide">
        <Reveal>
          <SectionHeader
            eyebrow="Experiments"
            title="Small tools, sharp questions, fast feedback."
            description="This page is for prototypes that are too small to be full projects but useful enough to show taste, curiosity, and product judgment."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {experiments.map((experiment, index) => (
            <ExperimentCard key={experiment.slug} experiment={experiment} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
