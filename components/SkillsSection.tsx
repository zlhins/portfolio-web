import { Container } from "./ui/Container";
import { portfolioData } from "@/content/data";

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section className="py-20 border-t border-zinc-100">
      <Container>
        <div className="mb-12">
          <h2 className="text-sm font-semibold text-zinc-950 uppercase tracking-widest">
            Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl">
          <div>
            <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-4">
              Core Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.core.map((skill, index) => (
                <span
                  key={index}
                  className="text-sm font-medium text-zinc-950 bg-zinc-100 px-3 py-1.5 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-4">
              Familiar With
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.familiar.map((skill, index) => (
                <span
                  key={index}
                  className="text-sm text-zinc-600 border border-zinc-200 px-3 py-1.5 rounded-md"
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