"use client";

import { motion } from "framer-motion";

export function HeroLab() {
  return (
    <motion.section
      initial={{ opacity: 0, filter: "blur(4px)", scale: 0.995 }}
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="pt-24"
    >
      <div className="flex flex-col gap-1.5">
        <h1 className="text-3xl font-medium tracking-normal text-foreground">Ryan Whitcomb</h1>
        <p className="text-base font-normal text-muted">Web Developer</p>
      </div>
    </motion.section>
  );
}
