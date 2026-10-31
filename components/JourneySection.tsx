"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { portfolioData } from "@/content/data";

export default function JourneySection() {
  return (
    <section id="journey" className="py-20 border-t border-zinc-100">
      <Container>
        <div className="mb-12">
          <h2 className="text-sm font-semibold text-zinc-950 uppercase tracking-widest">
            Journey
          </h2>
        </div>

        <div className="space-y-8 max-w-2xl">
          {portfolioData.journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-start gap-8"
            >
              <span className="text-sm font-mono text-zinc-500 w-12 shrink-0 pt-0.5">
                {item.year}
              </span>
              <p className="text-sm text-zinc-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
