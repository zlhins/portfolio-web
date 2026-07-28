"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { portfolioData } from "@/content/data";

export default function AboutSection() {
  const { about } = portfolioData;

  return (
    <section className="py-20 border-t border-zinc-100">
      <Container>
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-zinc-950 uppercase tracking-widest">
            About Me
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl space-y-6 text-zinc-600 leading-relaxed"
        >
          <p>{about.text}</p>
          <p className="text-zinc-950 font-medium">{about.philosophy}</p>
        </motion.div>
      </Container>
    </section>
  );
}