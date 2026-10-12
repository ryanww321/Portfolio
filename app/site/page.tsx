import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SiteNav } from "@/components/home/SiteNav";
import { IndexRow } from "@/components/ui/IndexRow";
import { IndexSection } from "@/components/ui/IndexSection";
import { Reveal } from "@/components/ui/Reveal";
import { workExperience } from "@/data/workExperience";

export const metadata: Metadata = {
  title: "Site info",
  description: "Work pages and utility links for Ryan Whitcomb's portfolio.",
  alternates: { canonical: "/site" },
};

export default function SiteInfoPage() {
  return (
    <Container className="flex flex-col pb-16" size="page">
      <SiteNav />

      <section className="pt-10">
        <div className="flex flex-col gap-12">
          <Reveal>
            <div className="flex flex-col gap-2">
              <h1 className="font-display text-4xl font-bold tracking-tight text-foreground">Site info</h1>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <IndexSection title="Work">
              {workExperience.map((work) => (
                <IndexRow key={work.slug} name={work.company} detail={work.description} href={`/work/${work.slug}`} />
              ))}
            </IndexSection>
          </Reveal>

          <Reveal delay={0.1}>
            <IndexSection title="Utility">
              <IndexRow name="Resume" detail="Download the PDF resume attached for this build." href="/resume.pdf" external />
            </IndexSection>
          </Reveal>
        </div>
      </section>
    </Container>
  );
}
