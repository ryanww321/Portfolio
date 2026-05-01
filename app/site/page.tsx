import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { HomeHeader } from "@/components/ui/HomeHeader";
import { IndexRow } from "@/components/ui/IndexRow";
import { IndexSection } from "@/components/ui/IndexSection";
import { Reveal } from "@/components/ui/Reveal";
import { workExperience } from "@/data/workExperience";

export const metadata: Metadata = {
  title: "Site info",
  description: "Work pages and utility links for Ryan Whitcomb's portfolio.",
};

export default function SiteInfoPage() {
  return (
    <>
      <HomeHeader />

      <section className="pb-32 pt-16">
        <Container className="flex flex-col gap-12" size="index">
          <Reveal>
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-medium tracking-normal text-foreground">Site info</h1>
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
              <IndexRow name="AI Chat" detail="In the garage while I tune a site-context chat about me." href="/chat" />
            </IndexSection>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
