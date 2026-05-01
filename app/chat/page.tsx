import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { IndexRow } from "@/components/ui/IndexRow";
import { IndexSection } from "@/components/ui/IndexSection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "AI Chat",
  description: "AI chat placeholder for a future local model integration.",
};

export default function ChatPage() {
  return (
    <section className="pb-32 pt-16">
      <Container className="flex flex-col gap-12" size="index">
        <Reveal>
          <div className="flex flex-col gap-6">
            <Link className="w-fit text-sm text-muted transition hover:text-foreground" href="/">
              Back
            </Link>
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-medium tracking-normal text-foreground">AI Chat</h1>
              <p className="max-w-xl text-base text-muted">In the garage for now. The right version should run on an open-source local model, not a paid cloud key.</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <IndexSection title="Plan">
            <IndexRow name="Model" detail="Use a local model through Ollama or another open-source runtime before adding a live chat box." />
            <IndexRow name="Boundary" detail="Keep resume and portfolio context local unless you explicitly decide to publish or host a model-backed endpoint." />
            <IndexRow name="Status" detail="Footer link is wired. The chat itself is intentionally not connected to a paid API." />
          </IndexSection>
        </Reveal>
      </Container>
    </section>
  );
}
