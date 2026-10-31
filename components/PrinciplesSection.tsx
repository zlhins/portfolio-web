"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { portfolioData } from "@/content/data";

export default function PrinciplesSection() {
  return (
    <section id="principles" className="py-20 border-t border-zinc-100">
      <Container>
        <div className="mb-12">
          <h2 className="text-sm font-semibold text-zinc-950 uppercase tracking-widest mb-8">
            How I Think
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {portfolioData.principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex gap-4">
                <span className="text-zinc-400 font-mono text-sm pt-1">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-zinc-950 font-medium mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
