import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Debugging and systems-thinking case studies by Ryan Whitcomb.",
};

export default function CaseStudiesPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container size="wide">
        <Reveal>
          <SectionHeader
            eyebrow="Case studies"
            title="Debugging stories that show how decisions are made."
            description="These drafts are structured to make the investigation path visible: context, hypotheses, root cause, fix, result, and what changed afterward."
          />
        </Reveal>
        <div className="grid gap-5">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
