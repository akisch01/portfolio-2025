
import { ExternalLink, Github, Code2, Calendar, MapPin, Download, ZoomIn, ArrowRight, ArrowUpRight } from 'lucide-react'

export const PORTFOLIO_DATA = {
  hero: {
    fr: {
      greeting: 'Salut, je suis',
      name: 'Akisch Akpo',
      title: 'Ingénieur Software & Data',
      subtitle: 'Je transforme des idées en solutions technologiques innovantes',
      availability: 'Disponible pour une alternance de 24 mois à partir de Sept 2026',
      bio: "Passionné par l'architecture logicielle et l'ingénierie des données, je construis des systèmes évolutifs qui transforment la donnée brute en insights actionnables. Expert Full-Stack avec une spécialisation en backend robuste et analyse de données.",
      educationLabel: 'Formation',
      education: [
        'Ingénieur Informatique | EILCO (Sept. 2025 – Juil. 2028)',
        "Licence Développement d'Applications | UCAO (Oct. 2022 – Mai 2025)",
      ],
      scrollText: 'Découvrir mon travail'
    },
    en: {
      greeting: "Hi, I'm",
      name: 'Akisch Akpo',
      title: 'Software & Data Engineer',
      subtitle: 'I transform ideas into innovative technological solutions',
      availability: 'Available for 24-month internship (Sept 2026)',
      bio: 'Passionate about software architecture and data engineering, I build scalable systems that transform raw data into actionable insights. Full-Stack expert with specialization in robust backend and data analysis.',
      educationLabel: 'Education',
      education: [
        'Computer Science Engineer | EILCO (Sept. 2025 – Jul. 2028)',
        'Application Development License | UCAO (Oct. 2022 – May 2025)',
      ],
      scrollText: 'Discover my work'
    }
  },
  experience: [
    {
      title: 'Développeur & Data Assistant',
      titleEn: 'Developer & Data Assistant',
      company: 'Emiaza (CDD)',
      period: "Nov. 2024 - Aujourd'hui",
      periodEn: 'Nov. 2024 - Today',
      location: 'Caen (À distance)',
      locationEn: 'Caen (Remote)',
      description: "Conception et développement via WordPress. Analyse des données e-commerce (trafic, ventes, produits). Maintenance, optimisation des performances, automatisation de tâches et reporting SEO/UX.",
      descriptionEn: 'Design and development via WordPress. E-commerce data analysis (traffic, sales, products). Maintenance, performance optimization, task automation, and SEO/UX reporting.',
      image: '/experience/emiaza.jpg',
      link: 'https://emiaza.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Développeur Full Stack',
      titleEn: 'Full Stack Developer',
      company: 'Codeurs Pro (Freelance)',
      period: "Janv. 2023 - Aujourd'hui",
      periodEn: 'Jan. 2023 - Today',
      location: 'Lomé',
      locationEn: 'Lomé',
      description: 'Développement Front/Back et API. Gestion de bases de données MySQL et CMS. Intégration de données dynamiques et participation technique aux projets événementiels (ex: Miss UCAO).',
      descriptionEn: 'Front/Back and API development. MySQL database and CMS management. Dynamic data integration and technical participation in event projects (e.g., Miss UCAO).',
      image: '/experience/codeurs-pro.jpg',
      link: 'https://codeurspro.com',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Stagiaire Web, Java & Python',
      titleEn: 'Web, Java & Python Intern',
      company: 'CodSoft (Stage)',
      period: 'Juil. 2024 - Sept. 2024',
      periodEn: 'Jul. 2024 - Sept. 2024',
      location: 'À distance',
      locationEn: 'Remote',
      description: "Création de mini-projets web dynamiques et perfectionnement Java (OOP). Initiation au data processing en Python : automatisation, extraction et nettoyage de données.",
      descriptionEn: 'Creation of dynamic web mini-projects and Java (OOP) refinement. Introduction to data processing in Python: automation, extraction, and data cleaning.',
      image: '/experience/codsoft.jpg',
      link: 'https://www.linkedin.com/company/codsoft',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Stagiaire Dev & QA',
      titleEn: 'Dev & QA Intern',
      company: 'NumRod (Stage)',
      period: 'Juil. 2024 - Sept. 2024',
      periodEn: 'Jul. 2024 - Sept. 2024',
      location: 'Lomé',
      locationEn: 'Lomé',
      description: "Maintenance de l'application 'Vamiyi'. Développement de nouvelles fonctionnalités basées sur la donnée utilisateur. Intégration de maquettes, tests qualité (QA) et optimisation backend.",
      descriptionEn: "Maintenance of the 'Vamiyi' app. Development of new features based on user data. Mockup integration, quality assurance (QA) testing, and backend optimization.",
      image: '/experience/numrod.jpg',
      link: 'https://midjo.numrod.fr/',
      color: 'from-green-500 to-emerald-500'
    }
  ],
  projects: [
    {
      title: 'ATS Intelligent (SaaS)',
      category: ['dev', 'data'],
      role: 'Full-Stack & Data Engineer',
      descFr: "Conception d'un outil SaaS de suivi de candidatures (Next.js, Prisma, SQL). Intégration de l'API OpenAI pour l'analyse de compatibilité CV/offre et dashboard automatisé, réduisant de 40% le temps de screening.",
      descEn: 'SaaS applicant tracking tool (Next.js, Prisma, SQL). OpenAI API integration for CV/job compatibility analysis and automated dashboard, reducing screening time by 40%.',
      stack: ['Next.js', 'Prisma', 'Tailwind CSS', 'OpenAI', 'SQL'],
      image: '/projettof/suivie-de-candidature.png',
      links: [
        { label: 'Site en ligne', url: 'https://suivie.devops-office.com/', icon: 'ExternalLink' }
      ],
      gradient: 'from-blue-600 via-indigo-600 to-violet-600'
    },
    {
      title: 'Gestion Cantines Universitaires',
      category: 'dev',
      role: 'Full-Stack & Architecte',
      descFr: 'Modernisation de la gestion des repas sur campus : menus, réservations et notations. Application complète avec logique métier complexe.',
      descEn: 'Modernization of campus meal management: menus, reservations and ratings. Complete application with complex business logic.',
      stack: ['React.js', 'Django REST', 'PostgreSQL'],
      image: '/projettof/gestion-cantines.jpg',
      links: [
        { label: 'Site en ligne', url: 'https://cantine-universitaire.onrender.com/', icon: 'ExternalLink' },
        { label: 'Swagger API', url: 'https://gestion-cantine-backend.onrender.com/api/schema/swagger-ui/', icon: 'Code2' },
        { label: 'Post LinkedIn', url: 'https://www.linkedin.com/posts/akisch-akpo-8a0101279_projetdefindetudes-linkdinlocaltogo-cantineuniversitaire-activity-7336694369976000512-6COM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPTJ7gBkA22fWGZyjiSt7dFDarxto1W_AQ', icon: 'ExternalLink' }
      ],
      gradient: 'from-orange-500 via-amber-500 to-yellow-500'
    },
    {
      title: 'Monitoring Système & Alerte',
      category: 'dev',
      role: 'Ingénieur Système',
      descFr: 'Agent de surveillance (Daemon) interagissant avec le noyau Linux (/proc). Alerte mail automatique via Postfix et Dashboard temps réel.',
      descEn: 'Monitoring agent (Daemon) interacting with Linux kernel (/proc). Automatic email alerts via Postfix and real-time Dashboard.',
      stack: ['C', 'Python', 'Flask', 'Postfix', 'Linux'],
      image: '/projettof/monitoring-systeme.jpg',
      links: [
        { label: 'GitHub', url: 'https://github.com/akisch01/Systeme-monitor', icon: 'Github' },
        { label: 'Post LinkedIn', url: 'https://www.linkedin.com/posts/akisch-akpo-8a0101279_cprogramming-linux-monitoring-activity-7327384978709770240-Z7ZH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPTJ7gBkA22fWGZyjiSt7dFDarxto1W_AQ', icon: 'ExternalLink' }
      ],
      gradient: 'from-red-600 via-orange-600 to-amber-600'
    },
    {
      title: 'Banque Delta (Core Banking)',
      category: 'dev',
      role: 'Backend Developer (API)',
      descFr: "Système de gestion bancaire robuste : comptes courants/épargne, calcul d'intérêts et gestion de découvert transactionnel.",
      descEn: 'Robust banking management system: current/savings accounts, interest calculation and overdraft management.',
      stack: ['FastAPI', 'React.js', 'MySQL'],
      image: '/projettof/banque-delta.jpg',
      links: [
        { label: 'GitHub', url: 'https://github.com/akisch01/BanqueDelta', icon: 'Github' },
        { label: 'Post LinkedIn', url: 'https://www.linkedin.com/posts/akisch-akpo-8a0101279_fastapi-reactjs-mysql-activity-7336303369264766976-xs9z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPTJ7gBkA22fWGZyjiSt7dFDarxto1W_AQ', icon: 'ExternalLink' }
      ],
      gradient: 'from-emerald-600 via-green-600 to-lime-600'
    },
    {
      title: 'Plateforme Miss UCAO 2025',
      category: 'dev',
      role: 'Frontend Developer',
      descFr: "Plateforme événementielle officielle pour l'élection Miss UCAO. Architecture découplée pour la sécurité et la performance.",
      descEn: 'Official event platform for Miss UCAO election. Decoupled architecture for security and performance.',
      stack: ['React.js', 'Django', 'SQL'],
      image: '/projettof/miss-ucao-2025.jpg',
      links: [
        { label: 'Site en ligne', url: 'https://miss-ucao.onrender.com/', icon: 'ExternalLink' },
        { label: 'Post LinkedIn', url: 'https://www.linkedin.com/posts/akisch-akpo-8a0101279_missucao2025-django-reactjs-activity-7312013309614993408-oASj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPTJ7gBkA22fWGZyjiSt7dFDarxto1W_AQ', icon: 'ExternalLink' }
      ],
      gradient: 'from-yellow-500 via-orange-500 to-red-500'
    },
    {
      title: 'Analyse des Ventes (Data Eng)',
      category: 'data',
      role: 'Data Engineer',
      descFr: "Pipeline d'analyse de données : Extraction SQL, nettoyage Pandas/NumPy et visualisation des KPIs stratégiques.",
      descEn: 'Data analysis pipeline: SQL extraction, Pandas/NumPy cleaning and strategic KPI visualization.',
      stack: ['Python', 'Pandas', 'SQLite', 'Matplotlib'],
      image: '/projettof/analyse-ventes.jpg',
      links: [
        { label: 'GitHub', url: 'https://github.com/akisch01/Tp-programmation-python', icon: 'Github' },
        { label: 'Post LinkedIn', url: 'https://www.linkedin.com/posts/akisch-akpo-8a0101279_python-sqlite-pandas-activity-7326557574961508354-mcLZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPTJ7gBkA22fWGZyjiSt7dFDarxto1W_AQ', icon: 'ExternalLink' }
      ],
      gradient: 'from-slate-600 via-zinc-600 to-neutral-600'
    },
    {
      title: 'Business Intelligence Dashboard',
      category: 'data',
      role: 'BI Consultant',
      descFr: "Modélisation de données d'entreprise et création de mesures DAX avancées pour un tableau de bord décisionnel interactif.",
      descEn: 'Enterprise data modeling and advanced DAX measures for interactive decision dashboard.',
      stack: ['Power BI', 'DAX', 'Data Modeling'],
      image: '/projettof/bi-dashboard.jpg',
      links: [
        { label: 'Post LinkedIn', url: 'https://www.linkedin.com/posts/akisch-akpo-8a0101279_powerbi-datavisualization-businessintelligence-activity-7331395339570016257-HomC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPTJ7gBkA22fWGZyjiSt7dFDarxto1W_AQ', icon: 'ExternalLink' }
      ],
      gradient: 'from-amber-400 via-orange-400 to-yellow-400'
    }
  ],
  certifications: [
      {
        name: 'Certification Conception Web Reactive - freeCodeCamp',
        nameEn: 'Responsive Web Design - freeCodeCamp',
        image: '/api/certifs/Certification Conception Web Reactive freeCodeCamp.org.png',
        pdf: '/api/certifs/Certification Conception Web Reactive freeCodeCamp.org.png',
        category: 'dev'
      },
      {
        name: 'Débutez avec React - OpenClassrooms',
        nameEn: 'Get Started with React - OpenClassrooms',
        image: '/api/certifs/Certificat - OpenClassrooms - Débutez avec React.jpg',
        pdf: '/api/certifs/Certificat - OpenClassrooms - Débutez avec React.pdf',
        category: 'dev'
      },
      {
        name: 'Créez une application web avec Vue.js - OpenClassrooms',
        nameEn: 'Create a web application with Vue.js - OpenClassrooms',
        image: '/api/certifs/Certificat - OpenClassrooms0 - Créez une application web avec Vue.js.jpg',
        pdf: '/api/certifs/Certificat - OpenClassrooms0 - Créez une application web avec Vue.js.pdf',
        category: 'dev'
      },
      {
        name: 'Débutez avec Angular - OpenClassrooms',
        nameEn: 'Get Started with Angular - OpenClassrooms',
        image: '/api/certifs/Certificat - OpenClassrooms1 - Débutez avec Angular.jpg',
        pdf: '/api/certifs/Certificat - OpenClassrooms1 - Débutez avec Angular.pdf',
        category: 'dev'
      },
      {
        name: 'Débutez avec le framework Django - OpenClassrooms',
        nameEn: 'Get Started with Django Framework - OpenClassrooms',
        image: '/api/certifs/Certificat - OpenClassrooms1 - Débutez avec le framework Django.jpg',
        pdf: '/api/certifs/Certificat - OpenClassrooms1 - Débutez avec le framework Django.pdf',
        category: 'dev'
      },
      {
        name: 'Créez une application Java avec Spring Boot - OpenClassrooms',
        nameEn: 'Create a Java application with Spring Boot - OpenClassrooms',
        image: '/api/certifs/Certificat - OpenClassrooms1 - Créez une application Java avec Spring Boot.jpg',
        pdf: '/api/certifs/Certificat - OpenClassrooms1 - Créez une application Java avec Spring Boot.pdf',
        category: 'dev'
      },
      {
        name: 'Passez au Full Stack avec Node.js, Express et MongoDB - OpenClassrooms',
        nameEn: 'Go Full Stack with Node.js, Express and MongoDB - OpenClassrooms',
        image: '/api/certifs/Certificat - OpenClassrooms1 - Passez au Full Stack avec Node.js, Express et MongoDB.jpg',
        pdf: '/api/certifs/Certificat - OpenClassrooms1 - Passez au Full Stack avec Node.js, Express et MongoDB.pdf',
        category: 'dev'
      },
      {
        name: 'Implémentez vos bases de données relationnelles avec SQL - OpenClassrooms',
        nameEn: 'Implement your relational databases with SQL - OpenClassrooms',
        image: '/api/certifs/Certificat - OpenClassrooms - Implémentez vos bases de données relationnelles avec SQL.jpg',
        pdf: '/api/certifs/Certificat - OpenClassrooms - Implémentez vos bases de données relationnelles avec SQL.pdf',
        category: 'dev'
      },
      {
        name: 'Initiez-vous à Kotlin - OpenClassrooms',
        nameEn: 'Get Started with Kotlin - OpenClassrooms',
        image: '/api/certifs/Certificat - OpenClassrooms - Initiez-vous à Kotlin.jpg',
        pdf: '/api/certifs/Certificat - OpenClassrooms - Initiez-vous à Kotlin.pdf',
        category: 'dev'
      },
      {
        name: 'Perfectionnez-vous sur WordPress - OpenClassrooms',
        nameEn: 'Master WordPress - OpenClassrooms',
        image: '/api/certifs/Certificat - OpenClassrooms - Perfectionnez-vous sur WordPress.jpg',
        pdf: '/api/certifs/Certificat - OpenClassrooms - Perfectionnez-vous sur WordPress.pdf',
        category: 'dev'
      },
      {
        name: 'Utilisez ChatGPT pour améliorer votre productivité - OpenClassrooms',
        nameEn: 'Use ChatGPT to Improve Your Productivity - OpenClassrooms',
        image: '/api/certifs/Certificat - OpenClassrooms - Utilisez ChatGPT pour améliorer votre productivité.jpg',
        pdf: '/api/certifs/Certificat - OpenClassrooms - Utilisez ChatGPT pour améliorer votre productivité.pdf',
        category: 'dev'
      },
      {
        name: 'Certification Copilote - Microsoft',
        nameEn: 'Copilot - Microsoft Certification',
        image: '/api/certifs/Certification Copilote Microsoft Learn.jpg',
        pdf: '/api/certifs/Certification Copilote Microsoft Learn.pdf',
        category: 'dev'
      },
      {
        name: 'Certification Stage Java',
        nameEn: 'Java Internship Certification',
        image: '/api/certifs/certification stage Java.jpg',
        pdf: '/api/certifs/certification stage Java.pdf',
        category: 'dev'
      },
      {
        name: 'Certification Stage Python',
        nameEn: 'Python Internship Certification',
        image: '/api/certifs/certification stage Python.jpg',
        pdf: '/api/certifs/certification stage Python.pdf',
        category: 'dev'
      },
      {
        name: 'Certification Stage Web',
        nameEn: 'Web Internship Certification',
        image: '/api/certifs/certification stage Web.jpg',
        pdf: '/api/certifs/certification stage Web.pdf',
        category: 'dev'
      },
      {
        name: 'Attestation de Stage NumRod',
        nameEn: 'NumRod Internship Certificate',
        image: '/api/certifs/ATTESTATION DE STAGE numrod.jpg',
        pdf: '/api/certifs/ATTESTATION DE STAGE numrod.pdf',
        category: 'dev'
      },
      {
        name: 'Les fondements de la gestion de projet - OpenClassrooms',
        nameEn: 'Project Management Fundamentals - OpenClassrooms',
        image: '/api/certifs/CertificatDaccomplissement_Les fondements de la gestion de projet-1.jpg',
        pdf: '/api/certifs/CertificatDaccomplissement_Les fondements de la gestion de projet-1.pdf',
        category: 'dev'
      },
      {
        name: "Initiez-vous à Python pour l'analyse de données - OpenClassrooms",
        nameEn: 'Get Started with Python for Data Analysis - OpenClassrooms',
        image: "/api/certifs/Certificat - OpenClassrooms - Initiez-vous à Python pour l'analyse de données.jpg",
        pdf: "/api/certifs/Certificat - OpenClassrooms - Initiez-vous à Python pour l'analyse de données.pdf",
        category: 'data'
      },
      {
        name: "Initiez-vous à R pour l'analyse de données - OpenClassrooms",
        nameEn: 'Get Started with R for Data Analysis - OpenClassrooms',
        image: "/api/certifs/Certificat - OpenClassrooms - Initiez-vous à R pour l'analyse de données.jpg",
        pdf: "/api/certifs/Certificat - OpenClassrooms - Initiez-vous à R pour l'analyse de données.pdf",
        category: 'data'
      },
      {
        name: 'Initiez-vous au Machine Learning - OpenClassrooms',
        nameEn: 'Get Started with Machine Learning - OpenClassrooms',
        image: '/api/certifs/Certificat - OpenClassrooms0 - Initiez-vous au Machine Learning.jpg',
        pdf: '/api/certifs/Certificat - OpenClassrooms0 - Initiez-vous au Machine Learning.pdf',
        category: 'data'
      },
      {
        name: "Objectif IA : initiez-vous à l'intelligence artificielle - OpenClassrooms",
        nameEn: 'AI Goal: Get Started with Artificial Intelligence - OpenClassrooms',
        image: "/api/certifs/Certificat - OpenClassrooms - Objectif IA : initiez-vous à l'intelligence artificielle.jpg",
        pdf: "/api/certifs/Certificat - OpenClassrooms - Objectif IA : initiez-vous à l'intelligence artificielle.pdf",
        category: 'data'
      },
      {
        name: 'Certification Google Analytics',
        nameEn: 'Google Analytics Certification',
        image: '/api/certifs/Certification Google Analytics Google.jpg',
        pdf: '/api/certifs/Certification Google Analytics Google.pdf',
        category: 'data'
      },
      {
        name: 'Certification Power BI - Microsoft',
        nameEn: 'Power BI - Microsoft Certification',
        image: '/api/certifs/Certification Power Bi Microsoft Learn.jpg',
        pdf: '/api/certifs/Certification Power Bi Microsoft Learn.pdf',
        category: 'data'
      },
      {
        name: 'MATLAB Onramp - Certificate',
        nameEn: 'MATLAB Onramp - Certificate',
        image: '/api/certifs/certificate MATLAB Onramp.jpg',
        pdf: '/api/certifs/certificate MATLAB Onramp.pdf',
        category: 'data'
      },
      {
        name: 'Initiez-vous à Linux - OpenClassrooms',
        nameEn: 'Get Started with Linux - OpenClassrooms',
        image: '/api/certifs/Certificat - OpenClassrooms - Initiez-vous à Linux.jpg',
        pdf: '/api/certifs/Certificat - OpenClassrooms - Initiez-vous à Linux.pdf',
        category: 'ops'
      },
      {
        name: 'Sécurisez vos données avec la cryptographie - OpenClassrooms',
        nameEn: 'Secure Your Data with Cryptography - OpenClassrooms',
        image: '/api/certifs/Certificat - OpenClassrooms1 - Sécurisez vos données avec la cryptographie.jpg',
        pdf: '/api/certifs/Certificat - OpenClassrooms1 - Sécurisez vos données avec la cryptographie.pdf',
        category: 'ops'
      },
      {
        name: 'Optimisez la sécurité informatique grâce au monitoring - OpenClassrooms',
        nameEn: 'Optimize IT Security with Monitoring - OpenClassrooms',
        image: '/api/certifs/Certificat - OpenClassrooms1 - Optimisez la sécurité informatique grâce au monitoring.jpg',
        pdf: '/api/certifs/Certificat - OpenClassrooms1 - Optimisez la sécurité informatique grâce au monitoring.pdf',
        category: 'ops'
      },
  ]
}
