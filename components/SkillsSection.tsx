import { Container } from "./ui/Container";
import { portfolioData } from "@/content/data";

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section className="py-20 border-t border-zinc-100 bg-zinc-50/50">
      <Container>
        <div className="mb-12">
          <h2 className="text-sm font-semibold text-zinc-950 uppercase tracking-widest">
            Engineering Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl">
          {/* Core */}
          <div>
            <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-5">
              Core Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.core.map((skill, index) => (
                <span
                  key={index}
                  className="text-sm font-medium text-zinc-950 bg-white border border-zinc-200 shadow-sm px-3 py-1.5 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Working Knowledge */}
          <div>
            <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-5">
              Working Knowledge
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.workingKnowledge.map((skill, index) => (
                <span
                  key={index}
                  className="text-sm text-zinc-600 border border-zinc-200 bg-transparent px-3 py-1.5 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Learning / Exploring */}
          <div>
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-5">
              Currently Learning
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.learning.map((skill, index) => (
                <span
                  key={index}
                  className="text-sm text-zinc-500 border border-dashed border-zinc-300 px-3 py-1.5 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}