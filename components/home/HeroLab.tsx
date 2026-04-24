"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { siteConfig } from "@/lib/site";

const traceRows = [
  "trace.production.orderFlow.latency -> isolated",
  "hypothesis.permissions.branchSkip -> verified",
  "agent.eval.promptVariant.delta -> captured",
  "wallet.signal.assetExposure.change -> modeled",
  "release.check.rollbackPath -> documented",
];

export function HeroLab() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.25], [0, -48]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.55]);

  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden border-b border-border bg-background">
      <div className="lab-grid absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 w-2/3 bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.2),transparent_34rem)]" aria-hidden="true" />
      <Container
        className="relative z-10 grid min-h-[calc(100svh-4rem)] items-center gap-12 py-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.75fr)]"
        size="wide"
      >
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-accent-soft">Systems / AI / Product</p>
          <h1 className="font-display text-5xl font-semibold tracking-normal text-foreground sm:text-6xl lg:text-7xl">
            Ryan Whitcomb
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-xl leading-8 text-foreground/90 sm:text-2xl sm:leading-9">
            Senior Salesforce architect moving into modern product engineering for AI tools, developer workflows,
            automation, and crypto platforms.
          </p>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted">
            I debug complex systems, turn ambiguity into shippable technical decisions, and build tools that make
            operational work easier to reason about.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/projects" variant="primary">
              View projects
            </LinkButton>
            <LinkButton href={siteConfig.githubUrl} external>
              GitHub
            </LinkButton>
          </div>
        </motion.div>

        <motion.div style={{ y, opacity }} className="relative hidden min-h-[520px] lg:block" aria-hidden="true">
          <motion.div
            className="signal-sweep absolute left-4 top-6 h-px w-[88%]"
            animate={{ x: [-60, 36, -60], opacity: [0.25, 0.9, 0.25] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-y-10 left-10 w-px bg-gradient-to-b from-transparent via-accent/45 to-transparent" />
          <div className="absolute bottom-12 right-4 top-8 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="absolute left-0 top-16 h-72 w-72 rounded-full border border-accent/25" />
          <div className="absolute left-24 top-40 h-44 w-44 rounded-full border border-white/10" />
          <div className="absolute right-14 top-28 h-32 w-32 rounded-full border border-accent/20" />

          <div className="absolute left-12 right-4 top-24 space-y-3">
            {traceRows.map((row, index) => (
              <motion.div
                key={row}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + index * 0.12, duration: 0.45 }}
                className="grid grid-cols-[5rem_1fr] items-center border-b border-white/[0.08] pb-3 font-mono text-xs text-muted"
              >
                <span className="text-accent-soft">0{index + 1}</span>
                <span>{row}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="absolute bottom-16 left-24 h-2 w-2 rounded-full bg-accent shadow-[0_0_28px_rgba(124,92,255,0.9)]"
            animate={{ scale: [1, 1.7, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-28 top-24 h-2 w-2 rounded-full bg-accent-soft shadow-[0_0_20px_rgba(185,168,255,0.8)]"
            animate={{ scale: [1, 1.5, 1], opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute bottom-6 right-8 font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
            signal captured
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
