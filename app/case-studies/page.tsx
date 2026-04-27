import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { IndexRow, InlineMeta } from "@/components/ui/IndexRow";
import { IndexSection } from "@/components/ui/IndexSection";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Debugging and systems-thinking case studies by Ryan Whitcomb.",
};

export default function CaseStudiesPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="flex flex-col gap-12" size="index">
        <Reveal>
          <div>
            <p className="mb-3 text-sm text-muted">Case studies</p>
            <h1 className="text-3xl font-medium tracking-normal text-foreground">Debugging stories that show the decision path.</h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-foreground/70">
              Client-safe drafts structured around context, root cause, fix, result, and what changed afterward.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <IndexSection title="Investigations">
            {caseStudies.map((caseStudy) => (
              <IndexRow
                key={caseStudy.slug}
                id={caseStudy.slug}
                name={caseStudy.title}
                detail={caseStudy.summary}
                meta={caseStudy.isDraft ? "draft" : "published"}
              >
                <p className="mt-2 text-xs leading-5 text-muted">{caseStudy.result}</p>
                <InlineMeta items={caseStudy.tags} />
              </IndexRow>
            ))}
          </IndexSection>
        </Reveal>
      </Container>
    </section>
  );
}
