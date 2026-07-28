# Laporan Arsitektur & Source Code Portofolio - Fase 1-4

Proyek portofolio ini dibangun menggunakan tumpukan teknologi modern yang berpusat pada **Next.js 16 (App Router)** dan **Tailwind CSS v4** untuk memberikan performa yang cepat serta pengalaman pengembang yang optimal. Kode ditulis sepenuhnya dengan **TypeScript** guna menjamin keamanan tipe (*type safety*) dan keandalan data, sementara animasi mikro yang mulus diimplementasikan menggunakan **Framer Motion**. Secara visual, arsitektur antarmuka aplikasi ini mengadopsi prinsip desain *Minimalist*, yang terinspirasi dari fungsionalitas dan kejelasan desain *Swiss/Japanese*; menitikberatkan pada ruang kosong (*white space*), tipografi yang bersih (menggunakan *Geist Sans & Mono*), serta interaksi yang subtil untuk menciptakan kesan premium dan profesional.

---

## Konfigurasi Inti

### `postcss.config.mjs`
File ini bertindak sebagai pusat konfigurasi PostCSS yang diperlukan untuk menginisialisasi Tailwind CSS pada proyek Next.js. Karena menggunakan Tailwind v4, plugin `@tailwindcss/postcss` sudah cukup untuk menangani semua utilitas *styling* secara otomatis tanpa konfigurasi tambahan yang kompleks.

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

### `app/globals.css`
File ini adalah *stylesheet* utama aplikasi yang mengimpor *base layer* dari Tailwind CSS v4. Selain itu, file ini juga memodifikasi gaya *scrollbar* bawaan *browser* agar terlihat lebih minimalis (menyatu dengan desain premium) serta menambahkan utilitas teks bawaan tambahan.

```css
@import "tailwindcss";

@layer base {
  /* Mengatur tampilan scrollbar agar lebih minimalis (opsional namun menambah kesan premium) */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #e4e4e7; /* zinc-200 */
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #d4d4d8; /* zinc-300 */
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

---

## Entry & Layout

### `app/layout.tsx`
Sebagai *Root Layout* dari Next.js App Router, file ini membungkus keseluruhan struktur HTML dan Body aplikasi. Di sinilah *font* kustom (Geist Sans & Mono) di-load, metadata dasar SEO ditetapkan, serta kelas-kelas penyusunan dasar (seperti warna latar belakang dan teks default) disematkan untuk diterapkan secara global ke seluruh rute.

```tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siti Zulhi Nirma S | Informatics Graduate & Technology Problem Solver",
  description: "Building practical software solutions through structured problem solving, web development, and data-driven thinking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans bg-white text-zinc-950 antialiased selection:bg-blue-600 selection:text-white min-h-screen flex flex-col`}
      >
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
```

### `app/page.tsx`
Ini adalah titik masuk utama (*homepage*) aplikasi yang merender struktur *one-page scroll* secara sekuensial. Halaman ini bertugas mengorkestrasi seluruh komponen seksi-seksi portofolio (Hero, Principles, Projects, About, Journey, dan Skills) agar membentuk suatu presentasi linear yang kohesif.

```tsx
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
```

---

## Manajemen Data

### `content/data.ts`
File ini berfungsi sebagai sumber kebenaran tunggal (*Single Source of Truth*) yang menyimpan semua konten tekstual portofolio dalam bentuk objek TypeScript. Pemisahan data ini dari lapisan antarmuka UI membuat pengelolaan, pembaruan konten, dan modifikasi *copywriting* menjadi jauh lebih mudah tanpa harus merusak struktur logika komponen (CMS *approach* lokal).

```typescript
export const portfolioData = {
  hero: {
    headline: "Informatics Graduate building practical software through structured problem solving.",
    subheadline: "Building practical software solutions through structured problem solving, web development, and data-driven thinking.",
  },
  about: {
    text: "During university, I worked on several academic and real-world projects involving web application development, databases, and data analysis. These experiences strengthened my interest in understanding operational problems and building practical technology solutions.",
    philosophy: "I enjoy understanding how people work before deciding how technology should solve the problem. My approach focuses on clarity, structured data modeling, and developing reliable systems that ease daily operations."
  },
  principles: [
    {
      title: "Technology should solve real problems",
      description: "Code is only a tool. The real value lies in understanding the operational context first."
    },
    {
      title: "Simple solutions are often the best",
      description: "Avoid unnecessary engineering complexity. Build what is required, reliably and cleanly."
    },
    {
      title: "Understand users before writing code",
      description: "I enjoy understanding how people work before deciding how technology should solve the problem."
    },
    {
      title: "Build, test, and iterate",
      description: "Development is an ongoing process of feedback, refining logic, and incremental improvements."
    }
  ],
  skills: {
    core: ["PHP", "Laravel", "JavaScript", "React", "MySQL", "SQL", "Git"],
    familiar: ["Python", "Machine Learning", "REST API", "Tailwind CSS", "Data Analysis"]
  },
  journey: [
    {
      year: "2022",
      description: "Foundations of Programming, Data Structures, and Database Management."
    },
    {
      year: "2023",
      description: "Full-Stack Web Development exploration (PHP, Laravel) & Systems Analysis."
    },
    {
      year: "2024",
      description: "Real-world software development projects & Workflow Automation integration."
    },
    {
      year: "2025",
      description: "Data modeling & Machine Learning research for urban transportation systems."
    },
    {
      year: "Now",
      description: "Graduated in Informatics. Expanding engineering capabilities with modern frontend frameworks."
    }
  ],
  projects: [
    {
      id: "krl-criticality",
      title: "KRL Network Criticality Analysis",
      type: "Undergraduate Thesis Project",
      focus: ["Data Analysis", "Machine Learning", "Python", "LightGBM"],
      summary: "Evaluating the network criticality of active stations in the DAOP 1 Jabodetabek commuter rail system using machine learning models to identify key operational bottlenecks.",
      details: {
        role: "Data Analyst & Researcher",
        timeline: "2025 - 2026",
        stack: ["Python", "LightGBM", "Pandas", "Scikit-learn"],
        overview: "This project focuses on evaluating the network criticality of 94 active KRL Jabodetabek stations. The goal is to mathematically and algorithmically identify which stations act as the most critical bottlenecks in the transit network, providing data-driven insights for infrastructure prioritization.",
        problem: "Urban transit networks often suffer from cascading delays when a central node fails. The challenge was to move beyond simple passenger volume metrics and evaluate structural network importance using machine learning frameworks.",
        implementation: "I engineered a framework using Python and utilized the LightGBM machine learning model to analyze the transit graph. The process involved rigorous data cleaning, feature engineering of network topologies, and model training to predict vulnerability scores across all 94 stations.",
        challenges: "One of the main hurdles was structuring the messy transit data into a clean node-edge format suitable for predictive modeling, ensuring the LightGBM algorithm could accurately weigh the operational significance of each station without overfitting.",
        imagePlaceholder: "Architecture Graph / Network Node Diagram"
      }
    },
    {
      id: "apartment-billing",
      title: "Apartment Billing Automation Platform",
      type: "Full-Stack Web Application",
      focus: ["Laravel", "Database Design", "Baileys WhatsApp API"],
      summary: "Designing and engineering an automated billing and cashier platform to streamline property transaction workflows and resident communication.",
      details: {
        role: "Full-Stack Developer",
        timeline: "2024",
        stack: ["PHP", "Laravel", "MySQL", "Baileys (WA API)", "React"],
        overview: "A comprehensive cashier system designed specifically for apartment management. This platform digitizes the entire billing process, from generating invoices to sending automated payment reminders directly to residents.",
        problem: "Property administrators were losing hours manually tracking payments and messaging residents. Furthermore, communication was fragmented, leading to missed payments and inefficient reporting.",
        implementation: "I architected the database and built the backend using Laravel. To solve the communication bottleneck, I integrated the Baileys library to construct a custom WhatsApp API automation, allowing the system to blast invoices and receipts autonomously.",
        challenges: "A significant engineering challenge was handling WhatsApp API blocking issues. I had to implement rate-limiting, session management, and retry-logic in the backend to ensure the automated messages were delivered reliably without triggering spam filters.",
        imagePlaceholder: "System Flowchart / Database ERD"
      }
    }
  ]
};
```

---

## Komponen UI

### `components/Header.tsx`
Komponen navigasi ini diletakkan secara permanen (*fixed position*) di bagian atas *viewport*. Dengan efek *backdrop-blur*, header ini memberikan panduan navigasi *anchor* yang elegan dan memastikan visibilitas merek (nama Anda) tetap ada saat *user* menggulir situs.

```tsx
import Link from "next/link";
import { Container } from "./ui/Container";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo / Nama */}
          <Link href="/" className="text-zinc-950 font-medium tracking-tight">
            Siti Zulhi Nirma S
          </Link>

          {/* Menu Navigasi */}
          <nav className="hidden sm:flex items-center gap-6">
            <Link href="#projects" className="text-sm text-zinc-600 hover:text-zinc-950 transition-colors">
              Projects
            </Link>
            <Link href="#about" className="text-sm text-zinc-600 hover:text-zinc-950 transition-colors">
              About
            </Link>
            <Link href="#journey" className="text-sm text-zinc-600 hover:text-zinc-950 transition-colors">
              Journey
            </Link>
            <Link href="mailto:emailmu@domain.com" className="text-sm text-zinc-600 hover:text-zinc-950 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
```

### `components/HeroSection.tsx`
Sebagai impresi pertama bagi *user*, komponen ini dirender secara spesifik di sisi *client* (*"use client"*) guna memanfaatkan animasi `framer-motion` saat halaman dimuat (efek transisi ke atas secara halus). Komponen ini juga menyuguhkan pesan nilai (*value proposition*) dan ajakan bertindak (*Call to Actions*) utama.

```tsx
"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { portfolioData } from "@/content/data";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function HeroSection() {
  const { hero } = portfolioData;

  return (
    <section className="pt-40 pb-20">
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
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
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
```

### `components/AboutSection.tsx`
Komponen deskriptif ini diorkestrasi untuk memperkenalkan filosofi kerja dan latar belakang kandidat secara naratif. Dilengkapi dengan animasi *scroll-triggered* (`whileInView`) dari Framer Motion untuk menjaga interaktivitas estetika saat *viewport* mengenai area ini.

```tsx
"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { portfolioData } from "@/content/data";

export default function AboutSection() {
  const { about } = portfolioData;

  return (
    <section className="py-20 border-t border-zinc-100">
      <Container>
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-zinc-950 uppercase tracking-widest">
            About Me
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl space-y-6 text-zinc-600 leading-relaxed"
        >
          <p>{about.text}</p>
          <p className="text-zinc-950 font-medium">{about.philosophy}</p>
        </motion.div>
      </Container>
    </section>
  );
}
```

### `components/JourneySection.tsx`
Menggunakan *layout list* kronologis, komponen ini menggambarkan perjalanan karir atau edukasi dari waktu ke waktu secara vertikal. Sama halnya seperti elemen *About*, *JourneySection* menerapkan *staggered animation* berurutan melalui parameter `delay: index * 0.05` untuk impresi masuk yang lebih organik.

```tsx
"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { portfolioData } from "@/content/data";

export default function JourneySection() {
  return (
    <section id="journey" className="py-20 border-t border-zinc-100">
      <Container>
        <div className="mb-12">
          <h2 className="text-sm font-semibold text-zinc-950 uppercase tracking-widest">
            Journey
          </h2>
        </div>

        <div className="space-y-8 max-w-2xl">
          {portfolioData.journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-start gap-8"
            >
              <span className="text-sm font-mono text-zinc-500 w-12 shrink-0 pt-0.5">
                {item.year}
              </span>
              <p className="text-sm text-zinc-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

### `components/SkillsSection.tsx`
Komponen *stateless* (dieksekusi di *Server Component*) ini bertugas mengkategorisasikan dan memetakan matriks keahlian teknis (Core dan Familiar). Desain tag atau "pil" yang ringkas memungkinkan perekrut memindai (*scan*) kompetensi teknis dengan efisien.

```tsx
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
```

### `components/Footer.tsx`
Mengunci struktur paling bawah dari aplikasi web portofolio ini, Footer dirancang secara lugas dengan menampilkan *credits*, *tagline*, serta memfasilitasi tautan-tautan eksternal (GitHub, LinkedIn, Email) menggunakan tata letak *flexbox* responsif.

```tsx
import { Container } from "./ui/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-200 bg-zinc-50">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-zinc-950">Siti Zulhi Nirma S</p>
            <p className="text-xs text-zinc-500 mt-1">
              Informatics Graduate & Technology Problem Solver
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/zlhins"
              target="_blank"
              className="text-xs font-mono text-zinc-600 hover:text-zinc-950 transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/sitizulhins"
              target="_blank"
              className="text-xs font-mono text-zinc-600 hover:text-zinc-950 transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:st.zulhins@gmail.com"
              className="text-xs font-mono text-blue-600 hover:text-blue-700 transition-colors"
            >
              Email
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
```

---

## Routing Dinamis

### `app/projects/[id]/page.tsx`
File ini adalah implementasi sistem rute dinamis (Dynamic Routing) pada struktur direktori Next.js App Router (berbasis parameter `[id]`). Menggunakan `generateStaticParams`, rute untuk semua data *case study* yang ada akan dirender dan dipra-bangun saat waktu kompilasi (*build-time*) untuk menekan kecepatan akses *page load* (*Static Site Generation*). Komponen ini secara asinkron menunggu dan mengekstrak parameter URL, lalu merender struktur artikel *deep-dive* (*sidebar* metrik spesifik berdampingan dengan isi konten *prose*).

```tsx
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
