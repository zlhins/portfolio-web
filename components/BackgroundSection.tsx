"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { portfolioData } from "@/content/data";

export default function BackgroundSection() {
  const { education, certifications } = portfolioData;

  return (
    <section className="py-20 border-t border-zinc-100">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Label Kiri */}
          <div className="md:col-span-4">
            <h2 className="text-sm font-semibold text-zinc-950 uppercase tracking-widest">
              Background
            </h2>
          </div>
          
          {/* Konten Kanan */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="md:col-span-8 space-y-16"
          >
            
            {/* Education Block */}
            <div>
              <h3 className="text-sm font-medium text-zinc-950 uppercase tracking-wider mb-6">
                Education
              </h3>
              <div className="space-y-8">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h4 className="text-zinc-950 font-medium text-lg">{edu.institution}</h4>
                    <p className="text-sm text-zinc-500 mt-1 mb-3">
                      {edu.degree} • {edu.period}
                    </p>
                    <p className="text-sm text-zinc-600 leading-relaxed max-w-2xl">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Block */}
            <div>
              <h3 className="text-sm font-medium text-zinc-950 uppercase tracking-wider mb-6">
                Certifications & Training
              </h3>
              <div className="space-y-0 border-t border-zinc-100">
                {certifications.map((cert) => (
                  <div 
                    key={cert.id} 
                    className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-4 border-b border-zinc-100"
                  >
                    <h4 className="text-zinc-950 font-medium">{cert.name}</h4>
                    <div className="text-sm text-zinc-500 flex gap-2 mt-1 sm:mt-0">
                      <span>{cert.issuer}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </Container>
    </section>
  );
}