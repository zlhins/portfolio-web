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
  // ... (kode hero, about, principles, skills, journey sebelumnya) ...

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