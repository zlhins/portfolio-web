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
  status: 'Production' | 'Development' | 'Concept' | 'Academic' | 'Ongoing';
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
    degree: "Bachelor of Computer Science (S1)",
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
    workingKnowledge: ["React", "Next.js", "Python", "Pandas", "Machine Learning", "Tailwind CSS", "REST API", "VS Code", "Postman"],
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
    organization: "Apartment Property Management",
    duration: "Jan 2026 – Feb 2026",
    description:
      "Developed an apartment operations and billing system to support daily operational processes and automate monthly billing activities, helping reduce repetitive administrative work through practical software solutions.",
    responsibilities: [
      "Analysed operational workflows to identify bottlenecks and gather user requirements for system improvements.",
      "Designed a relational database structure to support resident, billing, and payment management.",
      "Developed core application features, performed testing, debugging, deployment, and continuous system improvements based on user feedback.",
      "Implemented automated document distribution through bulk email for invoices and WhatsApp for digital receipts."
    ],
    technologies: [
      "Laravel",
      "PHP",
      "Blade",
      "MySQL",
      "JavaScript",
      "HTML",
      "CSS",
      "Git"
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
        technologies: ["Laravel", "MySQL", "SMTP Email", "Baileys (WA)", "PDF & Excel Generator"],
        shortDescription: "Sistem ERP mikro (Kasir BVA) untuk mendigitalisasi operasional apartemen, mengotomatisasi siklus pembuatan invoice via Email, distribusi kwitansi via WhatsApp, dan laporan keuangan harian.",
        
        // TEMPLATE DUMMY ARRAY
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
        primaryTechnologies: ["PHP", "Laravel", "MySQL", "SMTP"],
        keyFeatures: ["Bulk Email Invoice", "WA Receipt Delivery", "PDF Generation", "Automated Excel Reports"],
        biggestChallenge: "Mengubah kebiasaan kerja staf dari memproses dokumen fisik (Excel & Print) menjadi alur kerja digital yang sepenuhnya terotomatisasi.",
        biggestImpact: "Memangkas proses pembuatan dan pengiriman Invoice bulanan serta pembuatan laporan harian dari berjam-jam menjadi hitungan menit.",
        whatILearned: "Engineering yang baik adalah yang berhasil mengurangi beban manual penggunanya, bukan sekadar menggunakan teknologi paling rumit."
      },
      context: {
        businessContext: "Why this project mattered: The project focused on reducing repetitive administrative work in the monthly billing cycle, allowing staff to spend less time on repetitive document handling and more time on operational tasks. Sebelum sistem ini, seluruh manajemen keuangan dan komunikasi penghuni apartemen dilakukan secara terfragmentasi.",
        businessValues: [
          "Mengurangi pekerjaan manual secara signifikan dalam siklus bulanan.",
          "Mempermudah proses audit harian dengan pembuatan laporan keuangan secara instan.",
          "Mengurangi penggunaan dokumen fisik (Paperless).",
          "Mempercepat distribusi tagihan (Invoice) dan bukti pembayaran (Kwitansi)."
        ],
        problemStatements: [
          "Pembuatan invoice dan kwitansi format PDF dilakukan satu per satu via Excel secara manual.",
          "Email tagihan dikirim satu per satu kepada penghuni.",
          "Staf harus merekap ulang data pembayaran ke file Excel baru setiap sore untuk laporan harian.",
          "Status verifikasi pembayaran dicek dan direkap secara manual tanpa dashboard terpusat.",
          "Siklus penagihan bulanan sangat menyita waktu (time-consuming)."
        ],
        objectives: [
          "Mendigitalisasi dan mengotomatisasi siklus penagihan bulanan (Invoice & Kwitansi).",
          "Mempercepat distribusi dokumen dengan pemisahan jalur: Bulk Email untuk Invoice, WhatsApp untuk Kwitansi.",
          "Menyediakan fitur unduh laporan keuangan harian (Excel) dengan satu klik."
        ]
      },
      systemDesign: {
        modules: [
          "Resident", "Unit", "Billing", "Payment", "Invoice", 
          "Receipt", "Email", "Dashboard", "Laporan", "Pengguna", "Pengaturan"
        ],
        majorFeatures: [
          "Operational: Resident & Unit Management",
          "Operational: Billing & Payment Recording",
          "Automation: Automatic PDF Document Generation",
          "Automation: Bulk Email Distribution (Invoice)",
          "Automation: 1-Click WhatsApp Delivery (Receipt)",
          "Automation: 1-Click Daily Financial Excel Report"
        ],
        architectureNarrative: "Sistem dibangun menggunakan arsitektur Monolith berbasis Laravel. Proses difokuskan pada dua jalur otomatisasi utama: (1) HTML di-render menjadi PDF di backend, lalu didistribusikan melalui Bulk Email SMTP untuk pengiriman Invoice massal; dan (2) Integrasi Baileys WA API sebagai kanal tambahan khusus untuk mengirimkan Kwitansi pembayaran secara instan tanpa perlu mencetak dokumen fisik.",
        databaseDesignNarrative: "Database dirancang untuk mengelola entitas operasional utama (Penghuni, Unit, Tagihan). Fokus desain data adalah memastikan relasi antar tabel memudahkan penarikan laporan operasional secara cepat."
      },
      engineering: {
        requirementGathering: "Proses engineering berjalan sangat iteratif. Alurnya: Saya berdiskusi dengan pengguna -> Menemukan keluhan dan akar masalah -> Mencari solusi teknis -> Membuat fitur awal -> Pengguna mencobanya langsung -> Memberikan masukan perubahan -> Saya melakukan perbaikan -> Deploy ulang. Siklus ini berulang hingga sistem benar-benar sesuai dengan kenyataan lapangan.",
        techDecisions: [
          {
            technology: "Laravel & Blade",
            reason: "Penggunaan Blade (Server-Side Rendering) dipilih karena mempercepat waktu development dan sangat efektif untuk memproses data relasional secara langsung di server."
          },
          {
            technology: "SMTP Email (Bulk Sending)",
            reason: "Dipilih sebagai jalur UTAMA distribusi Invoice. Fitur Bulk Email memungkinkan operator cukup melakukan sekali klik untuk mengirim tagihan PDF ke banyak penghuni secara otomatis dan formal."
          },
          {
            technology: "Baileys (WhatsApp API)",
            reason: "Diposisikan sebagai kanal distribusi TAMBAHAN yang difokuskan untuk pengiriman Kwitansi pembayaran agar penghuni mendapat notifikasi cepat (paperless)."
          },
          {
            technology: "Excel Generator",
            reason: "Format Excel adalah standar baku yang diminta manajemen. Fitur ini memungkinkan staf mengunduh rekap harian yang sudah terformat rapi (siap print/kirim) dengan satu klik, menghilangkan potensi salah ketik (human error) saat rekap manual."
          }
        ],
        challengesAndSolutions: [
          {
            challenge: "Menyesuaikan otomatisasi dengan proses verifikasi manual.",
            solution: "Membagi pengiriman menjadi batch. Operator tetap menjadi verifikator akhir, cukup melakukan klik pada antarmuka untuk memicu pengiriman massal harian."
          }
        ]
      },
      outcomes: {
        businessResults: "Mengubah total lanskap operasional administrasi. Sistem berhasil menyederhanakan alur kerja bulanan yang memakan waktu panjang menjadi proses digital yang terukur dan rapi.",
        impactMetrics: [
          { metric: "Invoice Process", before: "Excel -> Convert PDF -> Email satu per satu (3 orang, berhari-hari)", after: "Generate otomatis -> Bulk Email (1 orang, ±10 menit kerja/hari, selesai ~2 hari)" },
          { metric: "Receipt Process", before: "Excel -> Print -> Bagikan fisik secara manual", after: "Generate otomatis -> Klik kirim -> WhatsApp (Tanpa print fisik)" },
          { metric: "Daily Reporting", before: "Rekap data manual ke file Excel baru setiap sore", after: "1-Click Download Excel dengan format baku" },
          { metric: "Operational Impact", before: "Beban kerja administratif tinggi & boros kertas", after: "Mengurangi pekerjaan manual & mempercepat operasional bulanan" }
        ],
        reflection: "Melalui proyek ini, saya menyadari bahwa nilai terbesar dari sebuah software bukanlah pada seberapa kompleks teknologinya, melainkan pada kemampuannya mengembalikan waktu yang hilang akibat pekerjaan repetitif, sehingga pengguna bisa fokus pada tugas operasional yang lebih penting."
      }
    },
    {
      id: "krl-criticality",
      isFeatured: true,
      meta: {
        title: "Urban Transit Resilience: KRL Criticality Analysis",
        category: "Data Analytics & ML",
        technologies: ["Python", "NetworkX", "LightGBM", "Pandas"],
        shortDescription: "Evaluasi kerentanan 94 active stations in DAOP 1 menggunakan pendekatan Graph Embedding dan algoritma Machine Learning prediktif.",
        liveUrl: "https://colab.research.google.com/drive/1RbzrzWXb5XSt8vzv6-M8I4DhT8TBoGJG?usp=sharing",  
      },
      atAGlance: {
        projectType: "Data Pipeline & Predictive Modeling",
        duration: "2025 - 2026",
        role: "Researcher & Data Analyst",
        teamSize: "Individual",
        status: "Academic",
        primaryTechnologies: ["Python", "Graph Theory", "LightGBM"],
        keyFeatures: ["Data Wrangling", "Graph Feature Extraction", "Predictive Modeling"],
        biggestChallenge: "Membersihkan data jadwal operasional yang berantakan menjadi struktur relasional node-edge yang kohesif.",
        biggestImpact: "Menghasilkan kerangka evaluasi berbasis topologi jaringan, bukan sekadar metrik volume penumpang tradisional.",
        whatILearned: "Dalam machine learning, algoritma tidak akan berguna jika kualitas data (Data Quality) dan feature engineering tidak selaras dengan pemahaman domain."
      },
      context: {
        businessContext: "Jaringan transportasi urban sering mengalami penundaan berantai (cascading delays) ketika satu simpul pusat mengalami kegagalan. Pendekatan manajemen konvensional seringkali hanya mengevaluasi berdasarkan kepadatan stasiun.",
        businessValues: [
          "Memberikan wawasan kuantitatif untuk prioritas pemeliharaan infrastruktur.",
          "Mencegah dampak eksponensial dari kegagalan satu stasiun terhadap jadwal rute lain.",
          "Mendukung pengambilan keputusan berbasis data topologi struktural."
        ],
        problemStatements: [
          "Tingkat kepentingan stasiun tidak bisa hanya diukur dari volume penumpang.",
          "Ketiadaan metrik kerentanan jaringan yang memperhitungkan struktur spasial.",
          "Kesulitan dalam memetakan dampak delay yang merambat ke stasiun lain."
        ],
        objectives: [
          "Memetakan ulang jadwal KRL operasional menjadi bentuk network graph yang terstruktur.",
          "Menggabungkan metode teori graf dengan Machine Learning.",
          "Memprediksi skor kerentanan (criticality score) untuk 94 active stations in DAOP 1."
        ]
      },
      systemDesign: {
        modules: ["Data Preprocessing", "Graph Construction", "Feature Extraction", "Model Training", "Evaluation"],
        majorFeatures: [
          "Timetable Parsing Script",
          "Graph Node-Edge Generator",
          "Node2Vec Embedding",
          "Model Evaluation Metrics"
        ],
        architectureNarrative: "Pipeline data dirancang dalam arsitektur linier: Data mentah tabular diproses menggunakan Pandas -> Dikonversi menjadi graf menggunakan NetworkX -> Fitur diekstraksi menggunakan Node2Vec -> Di-feed ke dalam model regresi LightGBM.",
        databaseDesignNarrative: "Pergeseran paradigma desain data dari Relational Rows menjadi Edge-List (Stasiun Asal -> Stasiun Tujuan, Bobot Perjalanan) yang esensial untuk kalkulasi graf."
      },
      engineering: {
        requirementGathering: "Masalah utamanya dikerucutkan bukan pada 'stasiun mana yang paling sibuk', melainkan 'stasiun mana yang jika bermasalah akan paling berdampak pada jaringan secara keseluruhan'.",
        techDecisions: [
          {
            technology: "Graph Theory (NetworkX)",
            reason: "Struktur matematis yang paling akurat untuk merepresentasikan hubungan spasial dan ketergantungan antar stasiun kereta api."
          },
          {
            technology: "LightGBM",
            reason: "Cepat, ramah memori, dan efisien dalam menangani fitur berbentuk tabular dari hasil ekstraksi graf."
          }
        ],
        challengesAndSolutions: [
          {
            challenge: "Kualitas Data (Data Quality): Jadwal operasional mentah tidak memiliki identifikasi relasi edge yang jelas.",
            solution: "Membuat script Python kustom dengan iterasi baris-demi-baris (row-wise iteration) untuk mem-parsing logika stasiun keberangkatan dan kedatangan berurutan menjadi edge."
          }
        ]
      },
      outcomes: {
        businessResults: "Provides a quantitative assessment of network criticality that can support further analysis untuk mitigasi risiko penumpukan jadwal operasional.",
        impactMetrics: [
          { metric: "Pendekatan Evaluasi", before: "Passenger Volume-based", after: "Structural Topology-based" },
          { metric: "Bentuk Data Operasional", before: "Raw Tabular Timetable", after: "Structured Network Graph" }
        ],
        reflection: "Penelitian ini membuktikan prinsip 'Garbage in, garbage out'. Saya menghabiskan porsi waktu terbesar hanya untuk Data Wrangling dan Pipeline Construction."
      }
    },
    {
      id: "la-crime-dashboard",
      isFeatured: true,
      meta: {
        title: "LA Crime Data Analytics Dashboard",
        category: "Data Visualization & EDA",
        technologies: ["Python", "Pandas", "Matplotlib"],
        shortDescription: "Eksplorasi Data Analisis (EDA) kolaboratif untuk memetakan tren temporal dan spasial dari dataset kriminalitas kota Los Angeles.",
        liveUrl: "https://colab.research.google.com/drive/1l3SduTt0Vk3tZ7tQb06LfYI8r8SlNtuf?usp=sharing",
      },
      atAGlance: {
        projectType: "Data Visualization Pipeline",
        duration: "1 Month",
        role: "Data Analyst Contributor",
        teamSize: "Team",
        status: "Academic",
        primaryTechnologies: ["Python", "Pandas", "Seaborn"],
        keyFeatures: ["Data Cleaning", "Basic EDA Visualization", "Missing Value Handling"],
        biggestChallenge: "Membersihkan dataset mentah yang kotor agar siap diproses oleh anggota tim lain untuk dashboard akhir.",
        biggestImpact: "Menyediakan fondasi data yang bersih (cleaned dataframe) dan visualisasi tren awal yang valid.",
        whatILearned: "Pekerjaan 'kotor' seperti data cleaning adalah fondasi terpenting sebelum dashboard apapun bisa dibangun."
      },
      context: {
        businessContext: "Analisis historis dataset kepolisian untuk memahami tren waktu dan lokasi kejadian, guna membantu alokasi sumber daya secara konseptual.",
        businessValues: [
          "Membantu mengidentifikasi area yang memerlukan alokasi pengamanan ekstra.",
          "Mengubah baris data mentah menjadi format yang bisa diinterpretasi."
        ],
        problemStatements: [
          "Dataset kepolisian memiliki banyak nilai kosong (missing values) dan inkonsistensi pencatatan."
        ],
        objectives: [
          "Melakukan proses pembersihan data (Data Cleaning) secara komprehensif.",
          "Menyiapkan visualisasi dasar sebagai bahan eksplorasi tim."
        ]
      },
      systemDesign: {
        modules: ["Data Ingestion", "Data Cleaning", "Basic Visual Rendering"],
        majorFeatures: [
          "Handling Missing Values",
          "Crime Category Classification",
          "Temporal Trend Plotting"
        ],
        architectureNarrative: "Pemrosesan berbasis Notebook Python menggunakan ekosistem Pandas untuk membersihkan dan menyiapkan data tabular.",
        databaseDesignNarrative: "Dataframe in-memory processing."
      },
      engineering: {
        requirementGathering: "Fokus kontribusi saya adalah memastikan integritas data terjamin sebelum masuk ke fase dashboarding yang lebih kompleks.",
        techDecisions: [
          {
            technology: "Pandas",
            reason: "Sangat efisien untuk memfilter dan memanipulasi baris data tabular skala menengah."
          }
        ],
        challengesAndSolutions: [
          {
            challenge: "Banyaknya kode kejahatan (Crime Codes) yang sangat spesifik dan redundan.",
            solution: "Menyusun mapping dictionary untuk mengelompokkannya ke dalam kategori kejahatan makro agar visualisasi lebih bersih."
          }
        ]
      },
      outcomes: {
        businessResults: "Dataframe yang telah dibersihkan berhasil digunakan oleh tim untuk membangun visualisasi akhir mengenai area hotspot.",
        impactMetrics: [
          { metric: "Data Format", before: "Raw CSV with anomalies", after: "Cleaned Dataframe ready for Viz" }
        ],
        reflection: "Sebagai kontributor dalam pembersihan data, saya belajar bahwa mengkomunikasikan inkonsistensi data kepada tim jauh lebih krusial daripada langsung melompat membuat grafik visual."
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
        biggestImpact: "Berhasil mendelegasikan dan mengawal eksekusi seluruh Product Backlog dalam 3 Sprint terstruktur, menghasilkan aplikasi full-stack yang terintegrasi secara fungsional.",
        whatILearned: "Keberhasilan sebuah software tidak hanya bergantung pada teknologi yang digunakan, melainkan pada kejelasan komunikasi, pembagian tugas yang tepat, dan disiplin metodologi (Agile/Scrum)."
      },
      context: {
        businessContext: "Industri perhotelan modern membutuhkan sistem yang tidak hanya mengelola inventaris kamar (sisi Admin) tetapi juga memberikan pengalaman pemesanan yang mulus bagi tamu (sisi Klien). Proyek ini mensimulasikan pengembangan produk komersial tersebut dari nol.",
        businessValues: [
          "Mendigitalisasi seluruh alur reservasi kamar dan layanan tambahan (laundry, meals, dll).",
          "Menyediakan dashboard administratif untuk pemantauan ketersediaan kamar secara real-time.",
          "Menerapkan sistem pembayaran terintegrasi untuk konfirmasi instan."
        ],
        problemStatements: [
          "Bagaimana membangun sistem reservasi end-to-end dengan fitur yang kompleks (autentikasi, CMS, payment gateway) dalam waktu akademik yang terbatas?",
          "Bagaimana mengelola dan memastikan 11 anggota tim developer dapat bekerja secara paralel tanpa saling menimpa kode (code conflicts) atau kehilangan arah?"
        ],
        objectives: [
          "Menerapkan kerangka kerja Scrum secara disiplin (Daily Stand-up, Sprint Review) untuk menjaga ritme kerja tim.",
          "Mengembangkan aplikasi berbasis JAMstack (Next.js + Sanity) untuk performa dan skalabilitas tinggi.",
          "Mengamankan jalur transaksi digital menggunakan ekosistem Stripe."
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
        businessResults: "Tim berhasil mendemonstrasikan sebuah Minimum Viable Product (MVP) sistem manajemen hotel yang stabil, aman, dan siap pakai. Proyek ini membuktikan bahwa manajemen operasional yang baik sama pentingnya dengan kode yang efisien.",
        impactMetrics: [
          { metric: "Project Delivery", before: "Ide konseptual berskala besar", after: "Dirilis tepat waktu dalam 3 Sprint" },
          { metric: "Team Velocity", before: "Risiko bottleneck kerja karena 11 anggota", after: "Pendelegasian tugas merata berdasarkan sprint backlog" },
          { metric: "Technical Implementation", before: "Data statis", after: "Fully integrated Headless CMS & Live Payment Gateway" }
        ],
        reflection: "Menjadi Scrum Master menyadarkan saya bahwa hambatan terbesar dalam rekayasa perangkat lunak berskala menengah-besar bukanlah pada penulisan sintaks kode, melainkan pada manajemen manusia, sinkronisasi ekspektasi, dan memastikan seluruh tim berjalan ke arah arsitektur yang sama."
      }
    }

  ] as ProjectCaseStudy[]
};