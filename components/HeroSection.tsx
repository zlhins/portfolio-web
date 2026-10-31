"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { portfolioData } from "@/content/data";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function HeroSection() {
  const { hero } = portfolioData;

  return (
    <section className="pt-16 md:pt-24 pb-20 flex flex-col justify-center min-h-[70vh]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-medium text-zinc-950 tracking-tight leading-tight text-balance mb-6">
            {hero.headline}
          </h1>
          <p className="text-lg text-zinc-600 mb-10 max-w-2xl leading-relaxed">
            {hero.subheadline}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              View Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 bg-white border border-zinc-200 text-zinc-950 px-6 py-3 rounded-md text-sm font-medium hover:bg-zinc-50 transition-colors"
            >
              Download Resume
              <Download className="w-4 h-4 text-zinc-500" />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
