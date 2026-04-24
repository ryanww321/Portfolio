import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
    <>
      <section className="border-b border-border py-16 sm:py-24">
        <Container size="wide">
          <Reveal>
            <SectionHeader
              eyebrow="About"
              title="Systems-minded engineering, moving from enterprise architecture into product tools."
              description="I have spent years stabilizing complex Salesforce and enterprise platforms, debugging high-pressure production issues, and translating unclear business needs into technical systems people can actually use."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_0.7fr]">
              <div className="space-y-5 text-base leading-8 text-muted">
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
              <div className="rounded-lg border border-border bg-card/70 p-5">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-soft">Current focus</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {focusAreas.map((area) => (
                    <span key={area} className="rounded-full border border-border px-3 py-2 text-sm text-foreground/85">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container size="wide">
          <Reveal>
            <SectionHeader
              eyebrow="Philosophy"
              title="The engineering bar is clarity under uncertainty."
              description="The work should leave the system easier to operate, easier to explain, and easier to change."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="divide-y divide-border rounded-lg border border-border bg-card/70">
              {principles.map((principle, index) => (
                <div key={principle} className="grid gap-4 p-5 sm:grid-cols-[4rem_1fr] sm:items-center">
                  <span className="font-mono text-xs text-accent-soft">0{index + 1}</span>
                  <p className="text-base leading-7 text-foreground/85">{principle}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border py-20 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_0.6fr] lg:items-end" size="wide">
          <Reveal>
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-accent-soft">Next step</p>
              <h2 className="font-display text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
                Building the portfolio as a product surface, not a static resume.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                The content is structured so real demos, sanitized case studies, and public writeups can be added as
                the modern engineering work matures.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <LinkButton href="/projects" variant="primary">
                Projects
              </LinkButton>
              <LinkButton href={siteConfig.linkedinUrl} external>
                LinkedIn
              </LinkButton>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
