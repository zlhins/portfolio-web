import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { portfolioData } from "@/content/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = portfolioData.projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  const { meta, atAGlance, context, systemDesign, engineering, outcomes } = project;

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

          {/* Header Title */}
          <div className="mb-12 border-b border-zinc-200 pb-12">
            <span className="text-xs font-mono text-zinc-500 bg-zinc-100 px-2 py-1 rounded mb-4 inline-block">
              {meta.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-medium text-zinc-950 tracking-tight leading-tight text-balance mb-6">
              {meta.title}
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
              {meta.shortDescription}
            </p>

            {meta.liveUrl && (
              <div className="mt-6">
                <a
                  href={meta.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-950 bg-zinc-100 hover:bg-zinc-200/80 border border-zinc-200 px-4 py-2 rounded-md transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-zinc-600" />
                  <span>Live Preview</span>
                </a>
              </div>
            )}
          </div>

          {/* Project Screenshots */}
          {meta.demoImages && meta.demoImages.length > 0 && (
            <div className="mb-16">
              {meta.demoImages.length === 1 ? (
                <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-3 sm:p-5">
                  <img
                    src={meta.demoImages[0]}
                    alt={`${meta.title} Interface`}
                    className="w-full h-auto max-h-[460px] object-contain rounded-lg mx-auto"
                  />
                </div>
              ) : (
                <div className="p-4 sm:p-5 bg-zinc-50 border border-zinc-200 rounded-xl">
                  <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
                    {meta.demoImages.map((img, index) => (
                      <div
                        key={index}
                        className="relative bg-white rounded-lg border border-zinc-200/80 shadow-sm snap-start shrink-0 p-3 w-[85vw] h-auto sm:w-auto sm:h-[260px] md:h-[310px] lg:min-w-[48%] lg:flex lg:items-center lg:justify-center"
                      >
                        <img
                          src={img}
                          alt={`${meta.title} Interface ${index + 1}`}
                          className="object-contain w-full h-auto sm:w-auto sm:h-full lg:w-full lg:h-full lg:object-top"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
            {/* Project At A Glance (Sidebar for Recruiter/EM) */}
            <aside className="md:col-span-4 lg:col-span-4 space-y-8">
              <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-xl space-y-6">
                <h3 className="font-medium text-zinc-950 border-b border-zinc-200 pb-3">Project at a Glance</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs font-mono text-zinc-500 uppercase">Status</span>
                    <p className="text-sm font-medium text-zinc-950 mt-1">{atAGlance.status}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-500 uppercase">Duration</span>
                    <p className="text-sm font-medium text-zinc-950 mt-1">{atAGlance.duration}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-500 uppercase">Role</span>
                    <p className="text-sm font-medium text-zinc-950 mt-1">{atAGlance.role}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-500 uppercase">Team Size</span>
                    <p className="text-sm font-medium text-zinc-950 mt-1">{atAGlance.teamSize}</p>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono text-zinc-500 uppercase block mb-2">Primary Technologies</span>
                  <div className="flex flex-wrap gap-1.5">
                    {atAGlance.primaryTechnologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-white border border-zinc-200 px-2 py-1 rounded text-zinc-700">{tech}</span>
                    ))}
                  </div>
                </div>

                {atAGlance.keyFeatures && atAGlance.keyFeatures.length > 0 && (
                  <div>
                    <span className="text-xs font-mono text-zinc-500 uppercase block mb-2">Key Features</span>
                    <ul className="space-y-1.5">
                      {atAGlance.keyFeatures.map((feat, i) => (
                        <li key={i} className="text-xs text-zinc-700 flex items-start gap-2">
                          <span className="w-1 h-1 bg-zinc-400 rounded-full mt-1.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <span className="text-xs font-mono text-zinc-500 uppercase block mb-1">Biggest Impact</span>
                  <p className="text-sm text-zinc-700 leading-relaxed">{atAGlance.biggestImpact}</p>
                </div>
              </div>
            </aside>

            {/* Deep Dive Content */}
            <article className="md:col-span-8 lg:col-span-8 max-w-none text-zinc-600">
              {/* 1. Business Layer */}
              <h2 className="text-2xl font-medium text-zinc-950 mt-0 mb-4">1. Business Context & Value</h2>
              <p className="leading-relaxed">{context.businessContext}</p>

              <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-lg my-6 not-prose">
                <h4 className="text-sm font-medium text-blue-900 mb-3 uppercase tracking-wider">Business Value Delivered</h4>
                <ul className="space-y-2">
                  {context.businessValues.map((val, i) => (
                    <li key={i} className="flex gap-2 text-sm text-blue-800">
                      <span className="text-blue-400">✓</span> {val}
                    </li>
                  ))}
                </ul>
              </div>

              <h4 className="text-lg font-medium text-zinc-950 mb-4">The Problems</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 not-prose mb-8">
                {context.problemStatements.map((prob, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-600">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{prob}</span>
                  </li>
                ))}
              </ul>

              {context.objectives && context.objectives.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-zinc-950 mb-4">Objectives</h4>
                  <ul className="space-y-2.5">
                    {context.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-zinc-600">
                        <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 2. System Design Layer */}
              <hr className="my-10 border-zinc-200" />
              <h2 className="text-2xl font-medium text-zinc-950 mb-6">2. System Scope & Architecture</h2>

              <div className="flex flex-col gap-5 text-zinc-600 leading-relaxed">
                <p>
                  <strong className="text-zinc-950 font-semibold mr-1">Architecture Narrative:</strong>
                  {systemDesign.architectureNarrative}
                </p>
                <p>
                  <strong className="text-zinc-950 font-semibold mr-1">Database Design:</strong>
                  {systemDesign.databaseDesignNarrative}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8 not-prose">
                <div>
                  <h4 className="text-sm font-medium text-zinc-950 mb-3 border-b border-zinc-200 pb-2">System Modules</h4>
                  <ul className="space-y-1.5">
                    {systemDesign.modules.map((mod, i) => (
                      <li key={i} className="text-sm text-zinc-600 flex items-center gap-2">
                        <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                        {mod}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-zinc-950 mb-3 border-b border-zinc-200 pb-2">Major Features</h4>
                  <ul className="space-y-1.5">
                    {systemDesign.majorFeatures.map((feat, i) => (
                      <li key={i} className="text-sm text-zinc-600 flex items-center gap-2">
                        <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 3. Engineering Decisions Layer */}
              <hr className="my-10 border-zinc-200" />
              <h2 className="text-2xl font-medium text-zinc-950 mb-4">3. Engineering Decisions</h2>
              <p className="mb-6 leading-relaxed"><em>{engineering.requirementGathering}</em></p>

              <div className="grid grid-cols-1 gap-4 not-prose mb-8">
                {engineering.techDecisions.map((tech, i) => (
                  <div key={i} className="p-5 border border-zinc-200 rounded-lg bg-white shadow-sm">
                    <h4 className="font-medium text-zinc-950 text-base mb-2">Why {tech.technology}?</h4>
                    <p className="text-sm text-zinc-600 leading-relaxed mb-3">{tech.reason}</p>
                    {tech.alternativesDiscarded && (
                      <div className="bg-red-50 text-red-800 text-xs px-3 py-2 rounded-md border border-red-100">
                        <strong>Discarded Alternative:</strong> {tech.alternativesDiscarded}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <h4 className="text-lg font-medium text-zinc-950 mb-4">Technical Challenges</h4>
              <ul className="space-y-4">
                {engineering.challengesAndSolutions.map((cs, i) => (
                  <li key={i} className="text-sm leading-relaxed space-y-1">
                    <div><strong className="text-zinc-950">Challenge:</strong> {cs.challenge}</div>
                    <div><strong className="text-zinc-950">Solution:</strong> {cs.solution}</div>
                  </li>
                ))}
              </ul>

              {/* 4. Outcomes & Reflection Layer */}
              <hr className="my-10 border-zinc-200" />
              <h2 className="text-2xl font-medium text-zinc-950 mb-4">4. Impact & Reflection</h2>
              <p className="mb-6 leading-relaxed">{outcomes.businessResults}</p>

              <div className="overflow-x-auto mb-10 not-prose border border-zinc-200 rounded-lg shadow-sm">
                <table className="w-full text-sm text-left text-zinc-600">
                  <thead className="text-xs text-zinc-950 uppercase bg-zinc-50 border-b border-zinc-200">
                    <tr>
                      <th className="px-5 py-4 font-medium">Metric / Process</th>
                      <th className="px-5 py-4 font-medium">Before System</th>
                      <th className="px-5 py-4 font-medium">After Engineering</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {outcomes.impactMetrics.map((metric, i) => (
                      <tr key={i} className="bg-white">
                        <td className="px-5 py-3 font-medium text-zinc-950">{metric.metric}</td>
                        <td className="px-5 py-3 text-red-600/80">{metric.before}</td>
                        <td className="px-5 py-3 text-emerald-600 font-medium">{metric.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-zinc-900 text-zinc-300 p-6 rounded-xl not-prose">
                <h4 className="text-white font-medium mb-3">Lessons Learned</h4>
                <p className="text-sm leading-relaxed">{outcomes.reflection}</p>
                <p className="text-sm leading-relaxed mt-4 italic text-zinc-400">&ldquo;{atAGlance.whatILearned}&rdquo;</p>
              </div>
            </article>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
