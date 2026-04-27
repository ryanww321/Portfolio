"use client";

import { motion } from "framer-motion";

export function HeroLab() {
  return (
    <motion.section
      initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="pt-10 sm:pt-16"
    >
      <div className="flex flex-col gap-1.5">
        <h1 className="text-4xl font-medium tracking-normal text-foreground">Ryan Whitcomb</h1>
        <p className="text-base font-normal text-muted">Systems-minded product engineer for AI tools and automation.</p>
      </div>
      <p className="mt-8 max-w-xl text-pretty text-sm leading-7 text-foreground/75">
        I turn ambiguous operating problems into clear workflows, durable systems, and practical product surfaces.
      </p>
    </motion.section>
  );
}
