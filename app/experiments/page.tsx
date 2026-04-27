import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { IndexRow, InlineMeta } from "@/components/ui/IndexRow";
import { IndexSection } from "@/components/ui/IndexSection";
import { Reveal } from "@/components/ui/Reveal";
import { experiments } from "@/data/experiments";

export const metadata: Metadata = {
  title: "Experiments",
  description: "Small AI, automation, crypto, workflow, and developer-tool experiments by Ryan Whitcomb.",
};

export default function ExperimentsPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="flex flex-col gap-12" size="index">
        <Reveal>
          <div>
            <p className="mb-3 text-sm text-muted">Experiments</p>
            <h1 className="text-3xl font-medium tracking-normal text-foreground">Small tools, sharp questions, fast feedback.</h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-foreground/70">
              Prototype-sized ideas that test product judgment before they become full projects.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <IndexSection title="Prototype queue">
            {experiments.map((experiment) => (
              <IndexRow
                key={experiment.slug}
                id={experiment.slug}
                name={experiment.title}
                detail={experiment.description}
                meta={experiment.status}
              >
                <p className="mt-2 text-xs leading-5 text-muted">{experiment.whatItTests}</p>
                <InlineMeta items={[experiment.category, ...experiment.stack]} />
              </IndexRow>
            ))}
          </IndexSection>
        </Reveal>
      </Container>
    </section>
  );
}
