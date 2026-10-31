// ==========================================
// TYPE DEFINITIONS (SCHEMA)
// ==========================================

export interface MetricImpact {
  metric: string;
  before: string;
  after: string;
}

export interface TechDecision {
  technology: string;
  reason: string;
  alternativesDiscarded?: string;
}

export interface GalleryImage {
  url: string;
  alt: string;
  category: 'UI' | 'Workflow' | 'Architecture' | 'ERD' | 'Impact';
}

export interface ProjectAtAGlance {
  projectType: string;
  duration: string;
  role: string;
  teamSize: string;
  status: 'Production' | 'Development' | 'Concept' | 'Academic' | 'Ongoing' | 'Research';
  primaryTechnologies: string[];
  keyFeatures: string[];
  biggestChallenge: string;
  biggestImpact: string;
  whatILearned: string;
}

export interface ProjectCaseStudy {
  id: string;
  isFeatured: boolean;

  meta: {
    title: string;
    category: string;
    technologies: string[];
    shortDescription: string;
    repositoryUrl?: string;
    liveUrl?: string;
    demoImages?: string[];
  };

  atAGlance: ProjectAtAGlance;

  context: {
    businessContext: string;
    businessValues: string[];
    problemStatements: string[];
    objectives: string[];
  };

  systemDesign: {
    modules: string[];
    majorFeatures: string[];
    architectureNarrative: string;
    databaseDesignNarrative: string;
  };

  engineering: {
    requirementGathering: string;
    techDecisions: TechDecision[];
    challengesAndSolutions: { challenge: string; solution: string }[];
  };

  outcomes: {
    businessResults: string;
    impactMetrics: MetricImpact[];
    reflection: string;
  };

  gallery?: GalleryImage[];
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  duration: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
}

export interface SmallProject {
  id: string;
  title: string;
  description: string;
  stack: string[];
  link?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  year: string;
}

// ==========================================
// PORTFOLIO DATA
// ==========================================

export const portfolioData = {
  hero: {
    headline: "Informatics Graduate building practical software through structured problem solving.",
    subheadline: "I enjoy translating operational bottlenecks into practical, easy-to-use software solutions. Focused on clarity, data modeling, and developing reliable systems.",
    location: "West Java, Indonesia",
    availability: "Open to Work (On-site & Remote)"
  },

  about: {
    text: "During university, I worked on academic projects and contributed to a real-world web application used in daily operations. These experiences strengthened my interest in understanding how systems work, improving operational processes, and building software that reduces repetitive work through practical and reliable solutions.",
    philosophy: "Before writing code, I prefer to understand how users work, where the bottlenecks are, and what actually needs to be improved. I believe technology creates the most value when it solves real operational problems with solutions that are simple, reliable, and easy to maintain."
  },

  education: [
    {
      id: "edu-unsika",
      institution: "Universitas Singaperbangsa Karawang (UNSIKA)",
      degree: "Bachelor of Computer Science (S1) • GPA 3.81/4.00",
      period: "2022 – 2026",
      description:
        "Focused on information systems, software engineering, database management, and data analysis. Developed software projects and applied machine learning methods using Python and LightGBM for undergraduate research. Managed website administration for the university's Master's Program in Physical Education and actively participated in the UNSIKA Karate Club."
    }
  ] as Education[],

  certifications: [
    {
      id: "cert-komdigi-dl",
      name: "Fundamental Deep Learning (44 JP)",
      issuer: "Kementerian Komdigi",
      date: "August 2025"
    },
    {
      id: "cert-dqlab-python-fundamental",
      name: "Python Fundamental for Data Science",
      issuer: "DQLab",
      date: "August 2025"
    },
    {
      id: "cert-dqlab-ds-intro",
      name: "Introduction to Data Science with Python",
      issuer: "DQLab",
      date: "August 2025"
    },
    {
      id: "cert-dibimbing-web",
      name: "Web Development Series 14.0",
      issuer: "dibimbing.id",
      date: "March 2026"
    },
    {
      id: "cert-dicoding-laravel",
      name: "DevCoach 230: Web | Is Laravel dead?",
      issuer: "Dicoding Indonesia",
      date: "March 2026"
    }
  ] as Certification[],

  achievements: [
    {
      id: "ach-uns-2025",
      title: "Juara 1 Senior Female Black Belt Kata",
      event: "Sebelas Maret Open II International Karate Open Championship",
      year: "2025"
    },
    {
      id: "ach-unsika-2024",
      title: "Juara 2 Female Individual University Kata",
      event: "UNSIKA International Karate Championship",
      year: "2024"
    },
    {
      id: "ach-uny-2024",
      title: "Juara 2 Female Employee/Student Kata",
      event: "UNY Cup IX",
      year: "2024"
    }
  ] as Achievement[],

  principles: [
    {
      title: "Technology should solve real problems",
      description: "Technology is valuable when it addresses real operational challenges and improves the way people work."
    },
    {
      title: "Understand before building",
      description: "I prefer learning how users work and identifying bottlenecks before designing a technical solution."
    },
    {
      title: "Keep solutions practical",
      description: "I value solutions that are reliable, easy to maintain, and focused on solving the problem without unnecessary complexity."
    },
    {
      title: "Learn through iteration",
      description: "Good software evolves through testing, feedback, and continuous improvement rather than trying to be perfect from the start."
    }
  ],

  skills: {
    core: ["PHP", "Laravel", "JavaScript", "MySQL", "SQL", "Git", "GitHub"],
    workingKnowledge: ["React", "Next.js", "Python", "Pandas", "Streamlit", "Machine Learning", "Tailwind CSS", "REST API", "VS Code"],
    learning: ["TypeScript", "Node.js"],
    languages: ["Indonesian (Native)", "English (Professional Working)"]
  },

  journey: [
    {
      year: "2022",
      description:
        "Built strong foundations in programming, algorithms, data structures, and relational databases."
    },
    {
      year: "2023",
      description:
        "Explored web application development with PHP, Laravel, MySQL, and information systems analysis through academic projects."
    },
    {
      year: "2024",
      description:
        "Contributed to university website administration while continuing to develop web applications and software engineering skills."
    },
    {
      year: "2025",
      description:
        "Conducted machine learning research on railway network criticality and developed interactive data visualization projects."
    },
    {
      year: "2026",
      description:
        "Graduated in Informatics, completed a software development internship building operational systems, and continue learning modern web technologies."
    }
  ],

  experience: [
    {
      id: "kasir-bva-intern",
      role: "Software Developer Intern",
      organization: "PPPSRS Bogor Valley Apartment — Bogor, Indonesia",
      duration: "Jan 2026 – Feb 2026",
      description:
        "Developed an apartment operations and billing system to support daily operational processes and automate monthly billing activities, helping reduce repetitive administrative work through practical software solutions.",
      responsibilities: [
        "Analysed operational workflows to identify bottlenecks and gather user requirements for system improvements.",
        "Designed a relational database structure to support resident, billing, and payment management.",
        "Developed core application features, REST API endpoints, and performed testing, debugging, deployment, and continuous system improvements based on user feedback.",
        "Implemented automated document distribution through email and WhatsApp for invoices and digital receipts."
      ],
      technologies: [
        "Laravel",
        "PHP",
        "Blade",
        "MySQL",
        "REST API",
        "JavaScript",
        "HTML",
        "CSS",
        "Git"
      ]
    },

    {
      id: "smart-production-research",
      role: "Web Developer",
      organization: "Smart Production Precast Research Project",
      duration: "Research Project",
      description:
        "Developed a web-based system to support production data recording and operational condition monitoring for the Smart Production Precast research project.",
      responsibilities: [
        "Built web features for production data recording and operational condition monitoring using Laravel, React.js, and MySQL.",
        "Implemented an Early Warning System (EWS) that sends automated WhatsApp notifications when analysis values exceed specified thresholds.",
        "Deployed the web application to the server to support research operations."
      ],
      technologies: [
        "Laravel",
        "React.js",
        "PHP",
        "JavaScript",
        "MySQL"
      ]
    },

    {
      id: "unsika-web-admin",
      role: "Website Content Administrator",
      organization: "Master's Program in Physical Education, Universitas Singaperbangsa Karawang (UNSIKA)",
      duration: "Dec 2024 – Mar 2026",
      description:
        "Assisted the programme coordinator in maintaining the official postgraduate website by publishing news, achievements, activities, academic documents, and occasionally designing supporting visual materials.",
      responsibilities: [
        "Published news articles, academic documents, student achievements, and programme activities on the official website.",
        "Maintained website content to ensure information remained accurate and up to date according to the programme coordinator's direction.",
        "Designed supporting visual materials, such as banners, when required."
      ],
      technologies: [
        "WordPress CMS",
        "Canva"
      ]
    },

    {
      id: "karate-secretary",
      role: "Secretary",
      organization: "UNSIKA Karate Club",
      duration: "Nov 2023 – Mar 2026",
      description:
        "Supported the club's administrative and organisational activities by managing official documents and assisting the coordination of club programmes.",
      responsibilities: [
        "Prepared official letters, meeting minutes, and activity proposals.",
        "Maintained membership administration and organisational documentation.",
        "Assisted in coordinating administrative activities to support the club's daily operations."
      ]
    },

    {
      id: "international-karate-committee",
      role: "Committee Member",
      organization: "International Karate Championship",
      duration: "2024",
      description:
        "Supported the organisation of an international karate championship hosted by Universitas Singaperbangsa Karawang in collaboration with the UNSIKA Karate Club.",
      responsibilities: [
        "Assisted the organising committee in preparing and coordinating event activities.",
        "Supported administrative and operational tasks during the championship."
      ]
    }
  ] as Experience[],

  smallProjects: [
    {
      id: "sp-titanic",
      title: "Titanic Survival Prediction",
      description: "Implementasi Decision Tree untuk memprediksi probabilitas keselamatan penumpang berdasarkan data demografi.",
      stack: ["Python", "Scikit-Learn", "Pandas"]
    },
    {
      id: "sp-customer-seg",
      title: "Customer Segmentation",
      description: "Clustering K-Means untuk membagi demografi pelanggan berdasarkan perilaku daya beli.",
      stack: ["Python", "K-Means", "Seaborn"]
    },
    {
      id: "sp-mushroom",
      title: "Mushroom Classification",
      description: "Analisis klasifikasi jamur beracun menggunakan algoritma machine learning dasar.",
      stack: ["Python", "Data Cleaning"]
    },
    {
      id: "sp-skillswap",
      title: "SkillSwap Platform",
      description: "Prototipe aplikasi web pertukaran keahlian antar mahasiswa.",
      stack: ["PHP", "MySQL", "Bootstrap"]
    },
    {
      id: "sp-flowcore",
      title: "FlowCore (Concept)",
      description: "Konsep arsitektur untuk sistem manajemen tugas (Task Management).",
      stack: ["System Design", "ERD"]
    }
  ] as SmallProject[],

  projects: [
    {
      id: "apartment-operations",
      isFeatured: true,
      meta: {
        title: "Apartment Operations & Billing System",
        category: "Full-Stack Web Application",
        technologies: ["Laravel", "MySQL", "REST API", "SMTP Email", "Baileys (WA)", "PDF & Excel Generator"],
        shortDescription: "Sistem ERP mikro (Kasir BVA) di PPPSRS Bogor Valley Apartment untuk mendigitalisasi operasional apartemen (~694 unit), mengotomatisasi siklus pembuatan dan distribusi invoice serta kwitansi via Email dan WhatsApp, serta laporan keuangan harian.",
        demoImages: [
          "/images/dashboard.png",
          "/images/billing.png",
          "/images/pembayaran.png",
          "/images/laporan.png",
        ],
      },
      atAGlance: {
        projectType: "Operational Management System",
        duration: "2 Months",
        role: "Software Developer Intern",
        teamSize: "Individual",
        status: "Production",
        primaryTechnologies: ["PHP", "Laravel", "MySQL", "REST API", "SMTP"],
        keyFeatures: ["Billing & Payment (~694 Units)", "Email & WA Distribution", "PDF Generation", "Automated Excel Reports"],
        biggestChallenge: "Mengubah kebiasaan kerja staf dari memproses dokumen fisik (Excel & Print) menjadi alur kerja digital yang sepenuhnya terotomatisasi.",
        biggestImpact: "Memangkas proses pembuatan dan pengiriman Invoice bulanan serta pembuatan laporan harian dari berjam-jam menjadi hitungan menit.",
        whatILearned: "Engineering yang baik adalah yang berhasil mengurangi beban manual penggunanya, bukan sekadar menggunakan teknologi paling rumit."
      },
      context: {
        businessContext: "Dikembangkan di PPPSRS Bogor Valley Apartment (Bogor, Indonesia), proyek ini berfokus pada pengurangan pekerjaan administratif berulang dalam siklus penagihan bulanan dan pencatatan pembayaran untuk sekitar 694 unit apartemen. Sebelum sistem ini, seluruh manajemen keuangan dan komunikasi penghuni apartemen dilakukan secara manual dan terfragmentasi.",
        businessValues: [
          "Mengurangi pekerjaan manual secara signifikan dalam siklus bulanan.",
          "Mempermudah proses audit harian dengan pembuatan laporan keuangan secara instan.",
          "Mengurangi penggunaan dokumen fisik (Paperless).",
          "Mempercepat distribusi tagihan (Invoice) dan bukti pembayaran (Kwitansi)."
        ],
        problemStatements: [
          "Pembuatan invoice dan kwitansi format PDF dilakukan satu per satu via Excel secara manual.",
          "Pengiriman dokumen tagihan dan bukti bayar dilakukan satu per satu kepada penghuni.",
          "Staf harus merekap ulang data pembayaran ke file Excel baru setiap sore untuk laporan harian.",
          "Status verifikasi pembayaran dicek dan direkap secara manual tanpa dashboard terpusat.",
          "Siklus penagihan bulanan sangat menyita waktu (time-consuming)."
        ],
        objectives: [
          "Mendigitalisasi dan mengotomatisasi siklus penagihan bulanan (Invoice & Kwitansi) untuk ~694 unit apartemen.",
          "Mempercepat distribusi dokumen tagihan dan bukti pembayaran melalui Email (SMTP) dan WhatsApp (Baileys API).",
          "Menyediakan fitur unduh laporan keuangan harian (Excel) dengan satu klik."
        ]
      },
      systemDesign: {
        modules: [
          "Resident", "Unit", "Billing", "Payment", "Invoice",
          "Receipt", "Email & WA", "Dashboard", "Laporan", "Pengguna", "Pengaturan"
        ],
        majorFeatures: [
          "Operational: Resident & Unit Management (~694 Units)",
          "Operational: Billing Upload/Input & Payment Recording",
          "Automation: Automatic PDF Document Generation",
          "Automation: Bulk & Per-Unit Email / WhatsApp Distribution",
          "Automation: 1-Click Daily Financial Excel Report"
        ],
        architectureNarrative: "Sistem dibangun menggunakan arsitektur Monolith berbasis Laravel dan MySQL dengan dukungan REST API endpoint. Proses difokuskan pada otomatisasi dokumen operasional: HTML di-render menjadi PDF di backend, lalu dapat didistribusikan melalui SMTP Email maupun integrasi Baileys WA API (baik secara massal/bulk maupun per unit) untuk pengiriman Invoice dan Kwitansi pembayaran secara cepat tanpa perlu mencetak dokumen fisik.",
        databaseDesignNarrative: "Database dirancang untuk mengelola entitas operasional utama (Penghuni/Tenant, Unit, Tagihan/Billing, dan Pembayaran/Payment). Fokus desain data adalah memastikan relasi antar tabel memudahkan pemantauan status pembayaran (Lunas, Sebagian, Belum Bayar) dan penarikan laporan operasional secara cepat."
      },
      engineering: {
        requirementGathering: "Proses engineering berjalan sangat iteratif. Alurnya: Saya berdiskusi dengan pengguna -> Menemukan keluhan dan akar masalah -> Mencari solusi teknis -> Membuat fitur awal -> Pengguna mencobanya langsung -> Memberikan masukan perubahan -> Saya melakukan perbaikan -> Deploy ulang. Siklus ini berulang hingga sistem benar-benar sesuai dengan kenyataan lapangan.",
        techDecisions: [
          {
            technology: "Laravel & Blade",
            reason: "Penggunaan Blade (Server-Side Rendering) dipilih karena mempercepat waktu development dan sangat efektif untuk memproses data relasional secara langsung di server."
          },
          {
            technology: "SMTP Email & Baileys (WhatsApp API)",
            reason: "Memungkinkan operator mendistribusikan dokumen tagihan dan kwitansi PDF kepada penghuni dengan cepat, baik melalui pengiriman massal (Kirim Semua Email / Kirim Semua WA) maupun pengiriman per unit."
          },
          {
            technology: "Excel Generator",
            reason: "Format Excel adalah standar baku yang diminta manajemen. Fitur ini memungkinkan staf mengunduh rekap harian yang sudah terformat rapi (siap print/kirim) dengan satu klik, menghilangkan potensi salah ketik (human error) saat rekap manual."
          }
        ],
        challengesAndSolutions: [
          {
            challenge: "Menyesuaikan otomatisasi dengan proses verifikasi manual.",
            solution: "Membagi pengiriman menjadi batch dan opsi per baris. Operator tetap menjadi verifikator akhir, cukup melakukan klik pada antarmuka untuk memicu pengiriman."
          }
        ]
      },
      outcomes: {
        businessResults: "Mengubah total lanskap operasional administrasi. Sistem berhasil menyederhanakan alur kerja bulanan yang memakan waktu panjang menjadi proses digital yang terukur dan rapi.",
        impactMetrics: [
          { metric: "Invoice Process", before: "Excel -> Convert PDF -> Kirim satu per satu (3 orang, berhari-hari)", after: "Generate otomatis -> Bulk Email / WA (1 orang, ±10 menit kerja/hari, selesai ~2 hari)" },
          { metric: "Receipt Process", before: "Excel -> Print -> Bagikan fisik secara manual", after: "Generate otomatis -> Klik kirim -> WhatsApp (Tanpa print fisik)" },
          { metric: "Daily Reporting", before: "Rekap data manual ke file Excel baru setiap sore", after: "1-Click Download Excel dengan format baku" },
          { metric: "Operational Impact", before: "Beban kerja administratif tinggi & boros kertas", after: "Mengurangi pekerjaan manual & memantau ~694 unit secara terpusat" }
        ],
        reflection: "Melalui proyek ini, saya menyadari bahwa nilai terbesar dari sebuah software bukanlah pada seberapa kompleks teknologinya, melainkan pada kemampuannya mengembalikan waktu yang hilang akibat pekerjaan repetitif, sehingga pengguna bisa fokus pada tugas operasional yang lebih penting."
      }
    },

    {
      id: "smart-production",
      isFeatured: true,
      meta: {
        title: "Smart Production Monitoring System",
        category: "Research Project · Web Development",
        technologies: ["Laravel", "React.js", "PHP", "JavaScript", "MySQL"],
        shortDescription: "Pengembangan sistem web untuk mendukung pencatatan produksi dan pemantauan kondisi operasional pada proyek penelitian Smart Production Precast, dilengkapi Early Warning System (EWS) via WhatsApp.",
        demoImages: [
          "/images/smart-production.png"
        ]
      },
      atAGlance: {
        projectType: "Research Web Application",
        duration: "Research Project",
        role: "Web Developer",
        teamSize: "Research Team",
        status: "Research",
        primaryTechnologies: ["Laravel", "React.js", "PHP", "JavaScript", "MySQL"],
        keyFeatures: ["Production Data Recording", "Operational Condition Monitoring", "Early Warning System (WhatsApp)"],
        biggestChallenge: "Menyusun alur pencatatan data produksi dan logika pemicu peringatan dini agar informasi kondisi operasional tersampaikan secara jelas melalui antarmuka web dan notifikasi.",
        biggestImpact: "Sistem web telah berhasil dikembangkan dan di-deploy ke server untuk mendukung pencatatan produksi dan pemantauan kondisi operasional pada proyek penelitian.",
        whatILearned: "Pengembangan sistem pada proyek penelitian membutuhkan struktur data dan modularitas yang rapi agar sistem web siap mendukung tahap pengembangan berikutnya."
      },
      context: {
        businessContext: "Proyek ini merupakan pengembangan sistem web untuk mendukung pencatatan produksi dan pemantauan kondisi operasional pada proyek penelitian Smart Production Precast. Sistem web telah dikembangkan dan di-deploy ke server, sementara integrasi perangkat IoT belum terhubung pada tahap ini.",
        businessValues: [
          "Menyediakan platform web terpusat untuk pencatatan data produksi pada proyek penelitian Smart Production Precast.",
          "Memudahkan pemantauan kondisi operasional melalui antarmuka web.",
          "Menyediakan Early Warning System (EWS) yang mengirimkan notifikasi WhatsApp ketika nilai hasil analisis melewati ambang batas tertentu."
        ],
        problemStatements: [
          "Kegiatan penelitian membutuhkan sistem berbasis web untuk mencatat data produksi dan memantau kondisi operasional secara terstruktur.",
          "Diperlukan mekanisme peringatan dini (Early Warning System) secara otomatis ketika nilai hasil analisis melewati ambang batas yang ditentukan."
        ],
        objectives: [
          "Mengembangkan sistem aplikasi web untuk pencatatan data produksi dan pemantauan kondisi operasional.",
          "Mengimplementasikan Early Warning System (EWS) berbasis notifikasi WhatsApp saat nilai hasil analisis melewati ambang batas.",
          "Melakukan deployment sistem web ke server untuk kebutuhan proyek penelitian."
        ]
      },
      systemDesign: {
        modules: [
          "Production Data Recording",
          "Operational Condition Monitoring",
          "Threshold Evaluation",
          "Early Warning System (WhatsApp Notification)"
        ],
        majorFeatures: [
          "Pencatatan Data Produksi",
          "Pemantauan Kondisi Operasional",
          "Early Warning System (EWS) via Notifikasi WhatsApp"
        ],
        architectureNarrative: "Sistem dikembangkan sebagai aplikasi web menggunakan Laravel (PHP) dan React.js (JavaScript) dengan basis data MySQL. Sistem dilengkapi fitur Early Warning System (EWS) yang mengevaluasi nilai hasil analisis dan mengirimkan notifikasi WhatsApp apabila nilai tersebut melewati ambang batas tertentu. Sistem web telah dikembangkan dan di-deploy ke server, sedangkan integrasi IoT belum terhubung.",
        databaseDesignNarrative: "Basis data relasional MySQL digunakan untuk menyimpan pencatatan data produksi, data pemantauan kondisi operasional, parameter ambang batas (threshold), serta riwayat notifikasi peringatan dini."
      },
      engineering: {
        requirementGathering: "Pengembangan difokuskan pada kebutuhan proyek penelitian Smart Production Precast untuk menyediakan antarmuka pencatatan data produksi, pemantauan kondisi operasional, serta mekanisme peringatan dini.",
        techDecisions: [
          {
            technology: "Laravel & MySQL",
            reason: "Digunakan untuk membangun backend, mengelola basis data pencatatan produksi, serta menjalankan logika pengecekan ambang batas pada fitur Early Warning System."
          },
          {
            technology: "React.js",
            reason: "Digunakan untuk membangun antarmuka web yang interaktif bagi fitur pencatatan produksi dan pemantauan kondisi operasional."
          }
        ],
        challengesAndSolutions: [
          {
            challenge: "Memastikan fungsi pencatatan, pemantauan, dan peringatan dini pada sistem web dapat berjalan di server meskipun integrasi IoT belum terhubung.",
            solution: "Merancang modul input data, pemantauan kondisi operasional, dan pemicu notifikasi WhatsApp (EWS) secara modular pada aplikasi web yang telah di-deploy ke server."
          }
        ]
      },
      outcomes: {
        businessResults: "Sistem web untuk proyek penelitian Smart Production Precast telah selesai dikembangkan dan di-deploy ke server dengan fitur pencatatan produksi, pemantauan kondisi operasional, dan Early Warning System (EWS) via WhatsApp.",
        impactMetrics: [
          { metric: "Production Recording", before: "Belum tersedia sistem web khusus penelitian", after: "Tersedia modul pencatatan data produksi berbasis web" },
          { metric: "Early Warning System", before: "Pemantauan nilai analisis secara manual", after: "Notifikasi WhatsApp otomatis saat nilai melewati ambang batas" },
          { metric: "Deployment Status", before: "Tahap pengembangan", after: "Sistem web telah di-deploy ke server (integrasi IoT belum terhubung)" }
        ],
        reflection: "Proyek penelitian ini memperkaya pengalaman saya dalam membangun aplikasi web menggunakan Laravel, React.js, dan MySQL serta mengimplementasikan fitur peringatan dini otomatis."
      }
    },

    {
      id: "krl-criticality",
      isFeatured: true,
      meta: {
        title: "KRL Network Criticality Analysis & Dashboard",
        category: "Data Analytics, ML & Web App",
        technologies: ["Python", "NetworkX", "LightGBM", "Streamlit", "Pandas"],
        shortDescription: "Evaluasi tingkat kekritisan 94 stasiun KRL di DAOP 1 dari 18.297 baris jadwal operasional menggunakan pendekatan Graph Embedding (Node2Vec) dan LightGBM, disajikan dalam antarmuka web interaktif.",
        liveUrl: "https://krl-kritis-dashboard.streamlit.app/",
        demoImages: [
          "/images/krl-1.png",
          "/images/krl-2.png",
          "/images/krl-3.png",
          "/images/krl-4.png",
          "/images/krl-5.png",
          "/images/krl-6.png",
        ],
      },
      atAGlance: {
        projectType: "End-to-End Predictive Modeling & Dashboard",
        duration: "2025 - 2026",
        role: "Researcher & Developer",
        teamSize: "Individual",
        status: "Academic",
        primaryTechnologies: ["Python", "Graph Theory", "LightGBM", "Streamlit"],
        keyFeatures: ["Data Wrangling (18.297 Baris)", "Graph Modelling (94 Node, 421 Edge)", "5-Fold CV & Ablation Study", "Interactive Web Dashboard"],
        biggestChallenge: "Membersihkan data jadwal operasional yang berantakan menjadi struktur relasional node-edge yang kohesif, lalu membungkus kerumitan model tersebut ke dalam UI yang ramah pengguna.",
        biggestImpact: "Mengidentifikasi 29 stasiun prioritas kritis dan 2 articulation points dengan konsistensi ranking Spearman ρ = 0,7802 (MAE 0,3152 pp) dalam bentuk dashboard visual interaktif.",
        whatILearned: "Dalam machine learning, algoritma tidak akan berguna jika kualitas data buruk (Garbage In, Garbage Out). Dan riset yang bagus akan kehilangan potensinya jika tidak disajikan lewat antarmuka yang bisa dieksplorasi pengguna."
      },
      context: {
        businessContext: "Penelitian skripsi ini berfokus pada prediksi tingkat kekritisan stasiun KRL Jabodetabek (DAOP 1) berdasarkan karakteristik struktur jaringan perjalanan, bukan memprediksi jumlah penumpang atau gangguan perjalanan harian. Pendekatan konvensional seringkali hanya mengevaluasi berdasarkan kepadatan stasiun, sehingga proyek ini mengevaluasinya secara topologis dan mewujudkannya dalam bentuk dashboard interaktif.",
        businessValues: [
          "Memberikan wawasan kuantitatif berbasis topologi jaringan untuk memetakan 29 stasiun prioritas kritis dari 94 stasiun.",
          "Mengidentifikasi titik artikulasi (articulation points) pemutus jaringan serta simpul transit kritis.",
          "Menyediakan alat bantu visual (dashboard) untuk mengeksplorasi hasil evaluasi model, SHAP feature importance, dan ablation study."
        ],
        problemStatements: [
          "Tingkat kepentingan (kritis) sebuah stasiun tidak bisa hanya diukur dari besaran volume penumpangnya.",
          "Jadwal operasional mentah belum memiliki representasi relasi jaringan (node-edge) yang memperhitungkan struktur spasial jalur kereta.",
          "Hasil riset dan model prediktif seringkali berupa kode mentah yang sulit dieksplorasi oleh pengguna non-teknis."
        ],
        objectives: [
          "Mengolah data jadwal KRL operasional menjadi 18.297 baris jadwal bersih dan membentuk network graph (94 node stasiun dan 421 edge).",
          "Menggabungkan fitur topologi graf dengan Machine Learning (Node2Vec & LightGBM) serta melakukan evaluasi 5-Fold Cross-Validation, Feature Importance, dan Ablation Study.",
          "Mendeploy hasil analisis kekritisan untuk 94 stasiun DAOP 1 ke dalam dashboard web interaktif."
        ]
      },
      systemDesign: {
        modules: ["Data Preprocessing", "Graph Construction", "Feature Extraction", "Model Training & Ablation Study", "Web Deployment (Streamlit)"],
        majorFeatures: [
          "Timetable Parsing (18.297 Clean Rows)",
          "Graph Node-Edge Generator (94 Nodes, 421 Edges)",
          "Node2Vec Embedding & LightGBM 5-Fold CV",
          "XAI (SHAP & Feature Importance) & Ablation Study",
          "Articulation Points & Interactive Dashboard"
        ],
        architectureNarrative: "Sistem dirancang sebagai pipeline data end-to-end (KDD): Data mentah tabular diproses menggunakan Pandas hingga menghasilkan 18.297 baris jadwal bersih -> Dikonversi menjadi graf berarah menggunakan NetworkX (94 node, 421 edge) -> Ekstraksi 6 fitur topologi dan 32 fitur Node2Vec -> Di-feed ke dalam model regresi LightGBM dengan evaluasi 5-Fold Cross-Validation. Hasil analisis kemudian dihubungkan ke antarmuka Streamlit.",
        databaseDesignNarrative: "Terjadi pergeseran paradigma desain data dari Relational Rows menjadi Edge-List (Stasiun Asal -> Stasiun Tujuan, Bobot Perjalanan) yang membentuk 94 node dan 421 relasi langsung untuk kalkulasi graf sebelum dirender ke frontend."
      },
      engineering: {
        requirementGathering: "Masalah utamanya dikerucutkan bukan pada 'stasiun mana yang paling sibuk', melainkan 'stasiun mana yang secara struktur jaringan paling kritis'. Evaluasi difokuskan pada konsistensi urutan prioritas stasiun menggunakan metrik Spearman Rank (ρ) pada 5-Fold Cross-Validation.",
        techDecisions: [
          {
            technology: "Graph Theory (NetworkX)",
            reason: "Struktur matematis yang tepat untuk merepresentasikan hubungan konektivitas antar 94 stasiun dan 421 relasi langsung serta mendeteksi articulation points."
          },
          {
            technology: "Node2Vec & LightGBM",
            reason: "Digunakan untuk memodelkan prediksi tingkat kekritisan stasiun dari fitur topologi dan graph embedding dengan evaluasi 5-Fold Cross-Validation (Spearman ρ = 0,7802, MAE = 0,3152 pp)."
          },
          {
            technology: "Streamlit",
            reason: "Dipilih sebagai framework deployment untuk menjembatani model analisis dengan antarmuka web secara interaktif."
          }
        ],
        challengesAndSolutions: [
          {
            challenge: "Kualitas Data (Data Quality): Jadwal operasional mentah tidak memiliki identifikasi relasi edge yang jelas.",
            solution: "Membuat script Python dengan iterasi baris-demi-baris (row-wise iteration) untuk mem-parsing urutan stasiun keberangkatan dan kedatangan menjadi 18.297 baris jadwal bersih dan 421 edge yang valid."
          },
          {
            challenge: "Evaluasi Kontribusi Fitur: Menguji apakah penambahan fitur Node2Vec benar-benar diperlukan dibandingkan fitur topologi dasar.",
            solution: "Melakukan Ablation Study dan analisis Feature Importance (Gain, Split, SHAP): ditemukan bahwa 6 fitur topologi dasar mendominasi kontribusi model dan pada baseline mencapai Spearman ρ = 0,8281 (MAE 0,2868 pp) dibanding gabungan Topologi + Node2Vec (Spearman ρ = 0,7802, MAE 0,3152 pp)."
          }
        ]
      },
      outcomes: {
        businessResults: "Penelitian ini menghasilkan evaluasi kekritisan jaringan KRL berbasis topologi yang disajikan dalam dashboard interaktif, mengidentifikasi 29 stasiun prioritas kritis (8 Sangat Kritis, 21 Kritis) serta 2 articulation points utama (Tanah Abang dan Rangkasbitung).",
        impactMetrics: [
          { metric: "Data & Struktur Graf", before: "Jadwal Tabular Mentah (Raw Timetable)", after: "18.297 baris jadwal bersih -> 94 node & 421 edge" },
          { metric: "Evaluasi Model (5-Fold CV)", before: "Tanpa metrik pemeringkatan prediktif", after: "Spearman ρ = 0,7802 (p < 0,001), MAE = 0,3152 pp, RMSE = 0,8903 pp" },
          { metric: "Temuan Stasiun Kritis", before: "Evaluasi konvensional tanpa peran topologi", after: "29 stasiun prioritas kritis & 2 articulation points (Tanah Abang, Rangkasbitung)" },
          { metric: "Bentuk Penyerahan (Delivery)", before: "Riset Kode / Jupyter Notebook", after: "Dashboard Aplikasi Web Interaktif (Dilengkapi SHAP & Ablation Study)" }
        ],
        reflection: "Penelitian ini membuktikan prinsip 'Garbage in, garbage out'. Saya menghabiskan porsi waktu terbesar hanya untuk memoles Data Wrangling. Namun pada akhirnya, menguji model secara objektif melalui ablation study dan mendeploy hasilnya ke dalam dashboard web adalah langkah yang membuat riset ini terasa 'hidup' dan bermanfaat."
      }
    },

    {
      id: "la-crime-dashboard",
      isFeatured: true,
      meta: {
        title: "LA Crime Analytics & Interactive Dashboard",
        category: "Data Visualization & Web App",
        technologies: ["Python", "Pandas", "Streamlit", "Matplotlib"],
        shortDescription: "Proyek tim pengembangan dashboard interaktif menggunakan Streamlit untuk memvisualisasikan tren temporal, demografi, dan memetakan hotspot spasial dari 735.656 insiden kriminalitas kota Los Angeles (Jan 2020 – Mar 2025).",
        liveUrl: "https://la-crime-dashboard.streamlit.app/",
        demoImages: [
          "/images/la-crime-1.png",
          "/images/la-crime-2.png",
          "/images/la-crime-3.png",
          "/images/la-crime-4.png",
          "/images/la-crime-5.png",
          "/images/la-crime-6.png",
        ],
      },
      atAGlance: {
        projectType: "Data Visualization & Dashboard",
        duration: "1+ Months",
        role: "Team Member (Data Analysis & Dashboard)",
        teamSize: "Team",
        status: "Academic",
        primaryTechnologies: ["Python", "Pandas", "Streamlit"],
        keyFeatures: ["735.656 Incidents (Jan 2020 – Mar 2025)", "Temporal & Spatial Filtering", "Crime Category & Unknown Entity Filter", "Interactive Tabular Search"],
        biggestChallenge: "Menerjemahkan 735.656 baris data insiden kepolisian (Jan 2020 – Mar 2025) hasil pembersihan (data wrangling) menjadi visualisasi interaktif yang tetap responsif di lingkungan web menggunakan Streamlit.",
        biggestImpact: "Berhasil mentransformasi ratusan ribu baris data tabular mentah menjadi aplikasi web dinamis yang merangkum proporsi kejahatan, wilayah rawan, dan tren waktu secara jelas.",
        whatILearned: "Sebuah analisis data memberikan nilai maksimal ketika disajikan melalui antarmuka interaktif, karena memungkinkan audiens untuk menggali wawasan mereka sendiri."
      },
      context: {
        businessContext: "Proyek akademik kolaboratif (tim) ini berfokus pada pembersihan, validasi, dan analisis dataset kepolisian historis Los Angeles yang mencakup 735.656 laporan insiden pada rentang Januari 2020 – Maret 2025. Hasil pengolahan data tim diwujudkan ke dalam bentuk antarmuka dashboard interaktif agar metrik utama, tren waktu, demografi, dan lokasi kejadian dapat dieksplorasi secara dinamis.",
        businessValues: [
          "Merangkum 735.656 insiden ke dalam indikator utama (seperti 52,3% proporsi insiden serius dan 9,3% tingkat penangkapan/kasus terselesaikan).",
          "Memberikan wawasan visual mengenai area dengan laporan tertinggi (seperti Central dengan 52.099 laporan) serta pola waktu kejadian (puncak insiden pada pukul 12.00).",
          "Menyederhanakan eksplorasi data melalui filter tahun, wilayah, kategori, dan penyaringan entitas 'Unknown'."
        ],
        problemStatements: [
          "Laporan statis hasil pembersihan data tidak memungkinkan pengguna untuk memfilter rentang waktu, wilayah, atau jenis kejahatan sesuai kebutuhan mereka.",
          "Dataset kepolisian berukuran besar (735.656 insiden) sehingga sulit diinterpretasikan tanpa representasi visual yang terstruktur."
        ],
        objectives: [
          "Melakukan pembersihan data (Data Wrangling) dan validasi atribut bersama tim.",
          "Membangun antarmuka dashboard menggunakan Streamlit untuk menyajikan peta, grafik waktu, demografi, atribut kasus, dan tabel data.",
          "Memastikan performa rendering web tetap stabil saat memproses 735.656 baris data."
        ]
      },
      systemDesign: {
        modules: ["Data Processing Pipeline", "Streamlit UI/Frontend", "Spatial & Temporal Visualization", "Demographic & Case Attribute Filtering"],
        majorFeatures: [
          "Dynamic Crime Hotspot Mapping (Max 1.000 Sampled Points)",
          "Time-Series & Hourly/Daily Trend Analysis",
          "Interactive Filters (Year, Area, Category & 'Unknown' Filter)"
        ],
        architectureNarrative: "Sistem dibangun secara kolaboratif dengan pendekatan dua tahap: (1) Pembersihan, pengelompokan kategori (Serious vs. Minor Crime), dan agregasi 735.656 baris data menggunakan ekosistem Pandas, dilanjutkan dengan (2) Pengembangan antarmuka web interaktif menggunakan Streamlit yang merender dataframe bersih ke dalam 5 tab analisis.",
        databaseDesignNarrative: "Data disajikan melalui dataframe (Pandas) yang telah diagregasi (pre-aggregated) dan di-cache (@st.cache_data) untuk menjaga kecepatan muat saat pengguna menerapkan filter dinamis pada Streamlit."
      },
      engineering: {
        requirementGathering: "Fase awal proyek dikerjakan bersama tim untuk memastikan kebersihan dan konsistensi data. Setelah dataset bersih didapatkan, proses dilanjutkan dengan perancangan tata letak filter, peta, grafik waktu, demografi, dan pencarian tabel.",
        techDecisions: [
          {
            technology: "Streamlit",
            reason: "Framework yang sangat ideal untuk menjembatani pipeline pemrosesan data (Python) menjadi antarmuka web interaktif secara langsung."
          },
          {
            technology: "Pandas (Data Pre-processing)",
            reason: "Digunakan untuk membersihkan dan mengagregasi 735.656 baris data sebelum dirender oleh komponen Streamlit, menjaga performa antarmuka agar tetap responsif."
          }
        ],
        challengesAndSolutions: [
          {
            challenge: "Kepadatan Visual (Cluttered Data): Menampilkan 735.656 baris data kriminalitas serta adanya nilai 'Unknown' membuat visualisasi peta dan grafik berisiko lambat atau bias.",
            solution: "Menerapkan caching (@st.cache_data), membatasi sampel titik pada heatmap geospasial maksimal 1.000 titik agar peta tetap stabil, serta menyediakan opsi filter untuk menyembunyikan entitas 'Unknown' pada analisis atribut kasus."
          }
        ]
      },
      outcomes: {
        businessResults: "Proyek tim ini berhasil menghasilkan aplikasi dashboard analitik fungsional yang menyajikan temuan utama dari 735.656 insiden kriminalitas Los Angeles (Jan 2020 – Mar 2025) secara interaktif.",
        impactMetrics: [
          { metric: "Skala & Aksesibilitas Data", before: "Dataset mentah (Raw CSV) 735.656 baris", after: "Dashboard web interaktif (Jan 2020 – Mar 2025)" },
          { metric: "Temuan Kategori & Resolusi", before: "Belum terpetakan proporsi kasus", after: "52,3% Insiden Serius; 9,3% rasio penangkapan/kasus terselesaikan" },
          { metric: "Temuan Wilayah & Waktu", before: "Pola lokasi dan jam kejadian belum terlihat", after: "Area tertinggi di Central (52.099 laporan) & puncak kejadian pukul 12.00" }
        ],
        reflection: "Proyek kolaboratif ini mengajarkan saya bahwa kemampuan merepresentasikan data melalui antarmuka interaktif (UI/UX) sama krusialnya dengan ketelitian saat membersihkan dan memvalidasi data di belakang layar."
      }
    },

    {
      id: "eleven-hotel-scrum",
      isFeatured: true,
      meta: {
        title: "Eleven Hotel Management & Booking Engine",
        category: "Agile Project Management & Full-Stack",
        technologies: ["Next.js", "Tailwind CSS", "Sanity CMS", "Stripe", "NextAuth"],
        shortDescription: "Aplikasi manajemen reservasi hotel berbasis Next.js dengan integrasi headless CMS (Sanity) dan payment gateway (Stripe), dikembangkan oleh tim berskala besar menggunakan metodologi Scrum.",
        repositoryUrl: "https://github.com/anthrofax/eleven_hotel",
        liveUrl: "https://eleven-hotel.vercel.app/"
      },
      atAGlance: {
        projectType: "Full-Stack Web Application",
        duration: "3 Sprints",
        role: "Scrum Master & Developer",
        teamSize: "11 People",
        status: "Academic",
        primaryTechnologies: ["React", "Next.js", "Sanity", "Stripe API"],
        keyFeatures: ["Booking Engine", "Admin Dashboard (CRUD)", "Stripe Payment", "Dark Mode", "Advanced Filtering"],
        biggestChallenge: "Mensinkronisasikan 11 kepala developer dengan kemampuan teknis berbeda agar tetap selaras dengan Product Backlog dan tenggat waktu rilis Sprint.",
        biggestImpact: "Berhasil memimpin eksekusi seluruh Product Backlog dalam 3 Sprint, menghasilkan purwarupa (prototype) full-stack yang berhasil mendemonstrasikan alur pemesanan end-to-end.",
        whatILearned: "Keberhasilan sebuah software tidak hanya bergantung pada teknologi yang digunakan, melainkan pada kejelasan komunikasi, pembagian tugas yang tepat, dan disiplin metodologi (Agile/Scrum)."
      },
      context: {
        businessContext: "Proyek akademik ini dirancang untuk mensimulasikan pengembangan produk komersial dari nol. Tujuannya adalah membangun sebuah Proof of Concept (PoC) sistem yang tidak hanya mengelola inventaris kamar (Admin) tetapi juga memberikan pengalaman pemesanan yang mulus bagi pengguna (Klien).",
        businessValues: [
          "Membangun prototipe alur reservasi kamar dan layanan tambahan yang interaktif.",
          "Menyediakan dashboard administratif dasar untuk simulasi pemantauan ketersediaan kamar.",
          "Mendemonstrasikan integrasi sistem pembayaran eksternal (Payment Gateway) pada lingkungan pengujian (test environment)."
        ],
        problemStatements: [
          "Bagaimana membangun prototipe sistem reservasi end-to-end dengan integrasi pihak ketiga (CMS & Payment Gateway) dalam waktu akademik yang terbatas?",
          "Bagaimana mengelola dan memastikan 11 anggota tim developer dapat bekerja secara paralel tanpa saling menimpa kode (code conflicts) atau kehilangan arah?"
        ],
        objectives: [
          "Menerapkan kerangka kerja Scrum secara disiplin (Daily Stand-up, Sprint Review) untuk menjaga ritme kerja tim.",
          "Mengembangkan aplikasi berbasis JAMstack (Next.js + Sanity) untuk pemisahan frontend dan backend.",
          "Mengintegrasikan jalur transaksi digital menggunakan mode pengujian (test mode) Stripe API."
        ]
      },
      systemDesign: {
        modules: [
          "User Authentication (NextAuth)",
          "Room Catalog & Search Engine",
          "Booking & Checkout Transaction",
          "Additional Services Routing",
          "Admin Content Management System"
        ],
        majorFeatures: [
          "Client: Real-time Room Filtering & Sorting",
          "Client: Stripe Payment Integration",
          "Client: Dynamic UI (Light/Dark Mode)",
          "Admin: Create, Read, Update, Delete (CRUD) Room Data via Sanity Studio"
        ],
        architectureNarrative: "Aplikasi diarsiteki dengan pendekatan pemisahan (decoupled) antara frontend dan backend. Antarmuka dibangun interaktif menggunakan React/Next.js dan Tailwind CSS. Alih-alih membuat backend monolitik, sistem memanfaatkan Sanity sebagai Headless CMS untuk mengelola skema relasional (User, Kamar, Booking, Layanan Tambahan) secara on-the-fly, dipadukan dengan webhook Stripe untuk validasi pembayaran.",
        databaseDesignNarrative: "Skema data didesain terdistribusi. Data pengguna diatur melalui NextAuth, data operasional (kamar, ulasan, transaksi) direpresentasikan sebagai dokumen JSON dinamis di Sanity, memungkinkan admin hotel melakukan perubahan data tanpa menyentuh source code."
      },
      engineering: {
        requirementGathering: "Sebagai Scrum Master, fokus utama saya adalah rekayasa proses. Saya menerjemahkan visi produk ke dalam Use Case dan Class Diagram, lalu memecahnya menjadi Product Backlog yang terukur. Pekerjaan didistribusikan ke dalam 3 Sprint iteratif: (1) UI/UX & Setup Basis Data, (2) Autentikasi & Core Backend, dan (3) Integrasi Pembayaran & Finalisasi Fitur.",
        techDecisions: [
          {
            technology: "Agile / Scrum Framework",
            reason: "Satu-satunya cara rasional untuk mengelola tim beranggotakan 11 orang. Sprint backlog harian menjaga setiap anggota tim memiliki akuntabilitas dan blokade (blockers) teknis bisa segera diatasi."
          },
          {
            technology: "Sanity (Headless CMS)",
            reason: "Menghilangkan kebutuhan untuk membangun infrastruktur backend dan UI Admin dari awal, memungkinkan tim fokus pada logika bisnis frontend dan integrasi API."
          },
          {
            technology: "Stripe API",
            reason: "Standar industri untuk Payment Gateway. Mudah diintegrasikan dengan lingkungan Next.js dan menyediakan environment testing yang aman untuk transaksi simulasi."
          }
        ],
        challengesAndSolutions: [
          {
            challenge: "Kolaborasi dan Manajemen Repositori (Git) pada tim berskala 11 orang.",
            solution: "Menegakkan disiplin version control dan membagi tim ke dalam modul spesifik (Frontend Auth, UI Components, Backend Query) agar proses merge tidak saling berbenturan."
          }
        ]
      },
      outcomes: {
        businessResults: "Tim berhasil mendemonstrasikan sebuah Minimum Viable Product (MVP) yang fungsional. Proyek ini membuktikan bahwa dengan manajemen Agile yang disiplin, tim berskala besar dapat mengantarkan (deliver) fitur-fitur kompleks tepat waktu tanpa hambatan kolaborasi yang fatal.",
        impactMetrics: [
          { metric: "Project Delivery", before: "Ide konseptual", after: "Prototipe fungsional dirilis dalam 3 Sprint" },
          { metric: "Team Velocity", before: "Risiko bottleneck karena 11 anggota", after: "Pendelegasian tugas merata via Sprint Backlog" },
          { metric: "Technical Implementation", before: "Mock data statis", after: "Terintegrasi dengan Headless CMS (Sanity) & Stripe (Test Mode)" }
        ],
        reflection: "Menjadi Scrum Master menyadarkan saya bahwa hambatan terbesar dalam rekayasa perangkat lunak berskala menengah-besar bukanlah pada penulisan sintaks kode, melainkan pada manajemen manusia, sinkronisasi ekspektasi, dan memastikan seluruh tim berjalan ke arah arsitektur yang sama."
      }
    }
  ] as ProjectCaseStudy[]
};
