import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { IndexRow } from "@/components/ui/IndexRow";
import { IndexSection } from "@/components/ui/IndexSection";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

const principles = [
  "Make the system observable before deciding it is understood.",
  "Turn ambiguous business language into explicit states, constraints, and acceptance criteria.",
  "Prefer small shipped loops over large speculative rewrites.",
  "Design tools around the operator's next decision, not around internal architecture.",
];

const focusAreas = ["AI product workflows", "Developer tooling", "Automation systems", "Crypto UX", "Platform reliability"];

export const metadata: Metadata = {
  title: "About",
  description: "Ryan Whitcomb's background, engineering philosophy, and transition into product engineering.",
};

export default function AboutPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="flex flex-col gap-12" size="index">
        <Reveal>
          <div>
            <p className="mb-3 text-sm text-muted">About</p>
            <h1 className="text-3xl font-medium tracking-normal text-foreground">
              Enterprise systems experience, moving into modern product tools.
            </h1>
            <div className="mt-6 space-y-4 text-sm leading-7 text-foreground/75">
              <p>
                My strongest work sits at the intersection of debugging, architecture, and product judgment. I am
                comfortable with messy requirements, brittle integrations, release risk, and systems where the first
                answer is rarely the right one.
              </p>
              <p>
                The next chapter is broader product engineering: AI-enabled tools, developer workflows, automation,
                crypto-related platforms, and products where clear technical reasoning becomes part of the user
                experience.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <IndexSection title="Current focus">
            {focusAreas.map((area) => (
              <IndexRow key={area} name={area} detail="Active area for portfolio projects, experiments, and role fit." />
            ))}
          </IndexSection>
        </Reveal>

        <Reveal delay={0.1}>
          <IndexSection title="Principles">
            {principles.map((principle, index) => (
              <IndexRow key={principle} name={`0${index + 1}`} detail={principle} />
            ))}
          </IndexSection>
        </Reveal>

        <Reveal delay={0.14}>
          <IndexSection title="Next">
            <IndexRow
              name="Projects"
              detail="Building the portfolio as a product surface for real demos, sanitized case studies, and public writeups."
              href="/projects"
            />
            <IndexRow name="LinkedIn" detail="Open to product engineering teams building serious tools." href={siteConfig.linkedinUrl} external />
          </IndexSection>
        </Reveal>
      </Container>
    </section>
  );
}
