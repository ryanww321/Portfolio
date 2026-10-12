import type { Metadata } from "next";
import { CertificationList } from "@/components/home/CertificationList";
import { EngagementGrid } from "@/components/home/EngagementGrid";
import { ExperienceList } from "@/components/home/ExperienceList";
import { Hero } from "@/components/home/Hero";
import { HomeSection } from "@/components/home/HomeSection";
import { ImpactStrip } from "@/components/home/ImpactStrip";
import { SiteNav } from "@/components/home/SiteNav";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <Container className="flex flex-col gap-14 pb-16 sm:gap-16" size="page">
      <div className="flex flex-col gap-10 sm:gap-12">
        <SiteNav />
        <Hero />
        <ImpactStrip />
      </div>

      <Reveal delay={0.04}>
        <HomeSection id="engagements" title="Selected engagements">
          <EngagementGrid />
        </HomeSection>
      </Reveal>

      <Reveal delay={0.06}>
        <HomeSection id="experience" title="Experience">
          <ExperienceList />
        </HomeSection>
      </Reveal>

      <Reveal delay={0.08}>
        <HomeSection id="certifications" title="Certifications">
          <CertificationList />
        </HomeSection>
      </Reveal>
    </Container>
  );
}
