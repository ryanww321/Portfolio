import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { HomeHeader } from "@/components/ui/HomeHeader";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "AI Chat",
  description: "AI chat placeholder for a future site-context model integration.",
};

export default function ChatPage() {
  return (
    <>
      <HomeHeader />

      <section className="pb-32 pt-16">
        <Container className="flex flex-col gap-12" size="index">
          <Reveal>
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-medium tracking-normal text-foreground">AI Chat</h1>
              <p className="max-w-xl text-base text-muted">
                In the garage for now. I am tuning a little site-context brain so people can ask questions about me using only the work, projects, and notes published here.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
