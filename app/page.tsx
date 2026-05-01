import { HeroLab } from "@/components/home/HeroLab";
import { CertificationRow } from "@/components/work/CertificationRow";
import { ProjectNote } from "@/components/work/ProjectNote";
import { WorkRow } from "@/components/work/WorkRow";
import { Container } from "@/components/ui/Container";
import { IndexSection } from "@/components/ui/IndexSection";
import { Reveal } from "@/components/ui/Reveal";
import { certifications } from "@/data/certifications";
import { earlierWork, latestWork } from "@/data/workExperience";

export default function HomePage() {
  return (
    <div className="pb-32">
      <Container size="index">
        <HeroLab />

        <div className="flex flex-col gap-12 pt-12">
          <Reveal delay={0.04}>
            <IndexSection title="Latest">
              {latestWork.map((work) => (
                <WorkRow key={work.slug} {...work} />
              ))}
            </IndexSection>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex flex-col gap-12">
              <IndexSection title="Earlier">
                {earlierWork.map((work) => (
                  <WorkRow key={work.slug} className="text-foreground/65" {...work} />
                ))}
              </IndexSection>

              <IndexSection title="Certifications">
                {certifications.map((certification) => (
                  <CertificationRow key={`${certification.title}-${certification.issued}`} {...certification} />
                ))}
              </IndexSection>

              <IndexSection title="Projects">
                <ProjectNote />
              </IndexSection>
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
