import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  id: string;
  title: string;
  category: string;
  summary: string;
  technologies: string[];
}

export default function CaseStudyCard({ id, title, category, summary, technologies }: CaseStudyCardProps) {
  return (
    <Link href={`/projects/${id}`} className="group block">
      <div className="p-8 border border-zinc-200 rounded-xl bg-zinc-50 hover:bg-white transition-colors duration-300">
        <div className="mb-4">
          <span className="text-xs font-mono text-zinc-500 bg-zinc-200/50 px-2 py-1 rounded">
            {category}
          </span>
        </div>
        
        <h3 className="text-xl font-medium text-zinc-950 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-zinc-600 text-sm leading-relaxed mb-6">
          {summary}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {technologies.map((item, index) => (
            <span key={index} className="text-xs text-zinc-500 border border-zinc-200 px-2 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-zinc-950 group-hover:text-blue-600 transition-colors">
          Read Case Study
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}