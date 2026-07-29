"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, ImageIcon, ChevronDown } from "lucide-react";

interface CaseStudyCardProps {
  id: string;
  title: string;
  category: string;
  summary: string;
  technologies: string[];
  liveUrl?: string;
  repositoryUrl?: string;
  demoImages?: string[]; // Berubah menjadi Array of Strings
}

export default function CaseStudyCard({ 
  id, 
  title, 
  category, 
  summary, 
  technologies, 
  liveUrl, 
  repositoryUrl, 
  demoImages 
}: CaseStudyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group block">
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

        {/* Action Bar */}
        <div className="flex flex-wrap items-center gap-5 pt-5 border-t border-zinc-200">
          <Link href={`/projects/${id}`} className="flex items-center gap-2 text-sm font-medium text-zinc-950 hover:text-blue-600 transition-colors">
            Read Case Study
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>

          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-950 transition-colors">
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Preview</span>
            </a>
          )}

          {/* {repositoryUrl && (
            <a href={repositoryUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-950 transition-colors">
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Repository</span>
            </a>
          )} */}

          {/* Tombol Drawer (Hanya muncul jika ada array gambar) */}
          {demoImages && demoImages.length > 0 && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-950 transition-colors ml-auto"
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>{isExpanded ? "Tutup UI" : "Lihat UI"}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
            </button>
          )}
        </div>

        {/* Expandable Drawer untuk Multiple Screenshots */}
        {demoImages && demoImages.length > 0 && (
          <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
            <div className="overflow-hidden">
              
              {/* Wadah Horizontal Scroll */}
              <div className="flex gap-4 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {demoImages.map((img, index) => (
                  <div 
                    key={index} 
                    // PENGGABUNGAN 3 ATURAN:
                    // 1. HP: w-[85vw] h-auto 
                    // 2. Tablet: sm:w-auto sm:h-[260px] md:h-[300px]
                    // 3. Laptop: lg:min-w-[45%] lg:h-[300px] lg:flex lg:items-center lg:justify-center
                    className="relative bg-white rounded-xl border border-zinc-200/70 shadow-sm snap-start shrink-0 p-3 sm:p-4 w-[85vw] h-auto sm:w-auto sm:h-[260px] md:h-[300px] lg:min-w-[45%] lg:flex lg:items-center lg:justify-center"
                  >
                    <img 
                      src={img} 
                      alt={`${title} Interface ${index + 1}`}
                      // PENYESUAIAN GAMBAR:
                      // 1. HP: w-full h-auto (Menghindari blank atas/bawah)
                      // 2. Tablet: sm:w-auto sm:h-full (Memeluk gambar kiri/kanan)
                      // 3. Laptop: lg:w-full lg:h-full lg:object-top (Persis kode ideal Anda)
                      className="grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer object-contain w-full h-auto sm:w-auto sm:h-full lg:w-full lg:h-full lg:object-top"
                    />
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        )}

      </div>
    </div>
  );
}