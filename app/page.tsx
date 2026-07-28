import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import CaseStudyCard from "@/components/CaseStudyCard";
import AboutSection from "@/components/AboutSection";
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
                Selected Work
              </h2>
            </div>
            
            <div className="flex flex-col gap-6">
              {portfolioData.projects.map((project) => (
                <CaseStudyCard 
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  type={project.type}
                  summary={project.summary}
                  focus={project.focus}
                />
              ))}
            </div>
          </Container>
        </section>

        <AboutSection />
        
        <JourneySection />

        <SkillsSection />
      </div>

      <Footer />
    </>
  );
}