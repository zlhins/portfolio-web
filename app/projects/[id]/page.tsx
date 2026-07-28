import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { portfolioData } from "@/content/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id,
  }));
}

// 1. Tambahkan kata "async" di sini, dan ubah tipe params menjadi Promise
export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  // 2. Lakukan await untuk mengekstrak ID dari URL
  const resolvedParams = await params;
  
  const project = portfolioData.projects.find((p) => p.id === resolvedParams.id);

  if (!project || !project.details) {
    notFound();
  }

  const { details } = project;

  return (
    <>
      <Header />
      
      <main className="pt-32 pb-24 min-h-screen">
        <Container>
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-950 transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="mb-16 border-b border-zinc-200 pb-12">
            <span className="text-xs font-mono text-zinc-500 bg-zinc-100 px-2 py-1 rounded mb-4 inline-block">
              {project.type}
            </span>
            <h1 className="text-3xl md:text-5xl font-medium text-zinc-950 tracking-tight leading-tight text-balance mb-6">
              {project.title}
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
              {project.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
            <aside className="md:col-span-4 lg:col-span-3 space-y-8">
              <div>
                <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Role</h3>
                <p className="text-sm text-zinc-950 font-medium">{details.role}</p>
              </div>
              <div>
                <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Timeline</h3>
                <p className="text-sm text-zinc-950 font-medium">{details.timeline}</p>
              </div>
              <div>
                <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Tech Stack</h3>
                <ul className="flex flex-col gap-1.5">
                  {details.stack.map((tech, index) => (
                    <li key={index} className="text-sm text-zinc-600 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-zinc-300" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <article className="md:col-span-8 lg:col-span-9 prose prose-zinc prose-p:leading-relaxed prose-headings:font-medium max-w-none text-zinc-600">
              <h2 className="text-xl text-zinc-950 mt-0 mb-4">Overview</h2>
              <p className="mb-10">{details.overview}</p>

              <h2 className="text-xl text-zinc-950 mb-4">The Problem</h2>
              <p className="mb-10">{details.problem}</p>

              <div className="w-full aspect-video bg-zinc-50 border border-zinc-200 rounded-xl mb-10 flex flex-col items-center justify-center text-zinc-400">
                <span className="text-sm font-mono">{details.imagePlaceholder}</span>
                <span className="text-xs mt-2">(Asset integration planned for Fase 5)</span>
              </div>

              <h2 className="text-xl text-zinc-950 mb-4">Implementation & Architecture</h2>
              <p className="mb-10">{details.implementation}</p>

              <h2 className="text-xl text-zinc-950 mb-4">Engineering Challenges</h2>
              <p className="mb-10">{details.challenges}</p>
            </article>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}