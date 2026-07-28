import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import CaseStudyCard from "@/components/CaseStudyCard";
import AboutSection from "@/components/AboutSection";
import BackgroundSection from "@/components/BackgroundSection";
import JourneySection from "@/components/JourneySection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { portfolioData } from "@/content/data";

export default function Home() {
  return (
    <>
      <Header />
      
      <div className="pt-16">
        <HeroSection />
        
        <PrinciplesSection />

        <section id="projects" className="py-20 border-t border-zinc-100">
          <Container>
            <div className="mb-12">
              <h2 className="text-sm font-semibold text-zinc-950 uppercase tracking-widest">
                Engineering Case Studies
              </h2>
            </div>
            
            <div className="flex flex-col gap-6">
              {portfolioData.projects.map((project) => (
                <CaseStudyCard 
                  key={project.id}
                  id={project.id}
                  title={project.meta.title}
                  category={project.meta.category}
                  summary={project.meta.shortDescription}
                  technologies={project.meta.technologies}
                />
              ))}
            </div>
          </Container>
        </section>

        {/* Professional Experience Section */}
        <section id="experience" className="py-20 border-t border-zinc-100">
          <Container>
             <div className="mb-12">
              <h2 className="text-sm font-semibold text-zinc-950 uppercase tracking-widest">
                Experience
              </h2>
            </div>
            <div className="space-y-12">
              {portfolioData.experience.map((exp) => (
                <div key={exp.id} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
                  <div className="md:col-span-3">
                     <p className="text-sm font-mono text-zinc-500">{exp.duration}</p>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="text-lg font-medium text-zinc-950">{exp.role}</h3>
                    <p className="text-zinc-600 mb-4">{exp.organization}</p>
                    <p className="text-sm text-zinc-600 leading-relaxed mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((task, i) => (
                         <li key={i} className="text-sm text-zinc-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-1.5 shrink-0" />
                            {task}
                         </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Additional Explorations / Small Projects */}
        <section className="py-20 border-t border-zinc-100">
          <Container>
            <div className="mb-10">
              <h2 className="text-sm font-semibold text-zinc-950 uppercase tracking-widest">
                Additional Explorations
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {portfolioData.smallProjects.map((sp) => (
                <div key={sp.id} className="p-5 border border-zinc-200 rounded-lg bg-white">
                  <h3 className="font-medium text-zinc-950 mb-1">{sp.title}</h3>
                  <p className="text-sm text-zinc-600 mb-4">{sp.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {sp.stack.map((tech, i) => (
                      <span key={i} className="text-[10px] font-mono text-zinc-500 uppercase bg-zinc-100 px-1.5 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <AboutSection />

        <BackgroundSection />
        
        <JourneySection />

        <SkillsSection />
      </div>

      <Footer />
    </>
  );
}