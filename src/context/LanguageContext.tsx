import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type LanguageCode = "en" | "fr" | "es" | "pt" | "zh";

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
}

export const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇧🇷" },
  { code: "zh", name: "Simplified Chinese", nativeName: "简体中文", flag: "🇨🇳" },
];

export interface ProjectTranslation {
  role: string;
  summary: string;
  problem: string;
  solution: string;
  highlights: string[];
}

export interface Translations {
  nav: {
    home: string;
    services: string;
    blueprints: string;
    projects: string;
    estimator: string;
    pricing: string;
    about: string;
    faq: string;
    contact: string;
    letsTalk: string;
    availableForHire: string;
    orderApp: string;
    resume: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlinePart2: string;
    subheadline: string;
    exploreApps: string;
    estimateCost: string;
    appsShipped: string;
    experience: string;
    clientRating: string;
    storePass: string;
    tabs: {
      talk2learn: string;
      quitPuffing: string;
      properMech: string;
      activityMaps: string;
    };
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
  };
  whyMe: {
    badge: string;
    title: string;
    subtitle: string;
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    viewCaseStudy: string;
    categories: {
      all: string;
      liveInStores: string;
      mobileApp: string;
      webApp: string;
    };
    badges: {
      mobileApp: string;
      webApp: string;
      iosAndroidLive: string;
      appStoreLive: string;
      googlePlayLive: string;
      livePlatform: string;
      productionApp: string;
      ios: string;
      android: string;
      live: string;
    };
    modal: {
      problem: string;
      solution: string;
      highlights: string;
      metrics: string;
      close: string;
      visitLive: string;
      viewAppStore: string;
      viewPlayStore: string;
    };
  };
  estimator: {
    badge: string;
    title: string;
    subtitle: string;
    realTime: string;
    investment: string;
    timeline: string;
    discussWhatsApp: string;
    sendEmail: string;
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    unblockPill: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    downloadResume: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    chatWhatsApp: string;
    sendBrief: string;
  };
  projectsData: Record<string, ProjectTranslation>;
}

const translations: Record<LanguageCode, Translations> = {
  // ────────────────────────────── ENGLISH ──────────────────────────────
  en: {
    nav: {
      home: "Home",
      services: "Services",
      blueprints: "Blueprints",
      projects: "Projects",
      estimator: "Estimator",
      pricing: "Pricing",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
      letsTalk: "Instant WhatsApp",
      availableForHire: "Open for Hire",
      orderApp: "Order Your App",
      resume: "Resume",
    },
    hero: {
      badge: "Available for New Mobile Projects & Sprints",
      headlinePart1: "React Native & Mobile App Developer.",
      headlinePart2: "Engineered for 60FPS Velocity.",
      subheadline:
        "Specializing in React Native, TypeScript, JavaScript, and cross-platform mobile application development. Architecting market-ready iOS & Android apps and startup MVPs with buttery 60fps animations, Firebase/Supabase cloud backends, and zero agency overhead.",
      exploreApps: "Explore Shipped Apps",
      estimateCost: "Estimate Project Cost",
      appsShipped: "Production Apps",
      experience: "Years Experience",
      clientRating: "Client Rating",
      storePass: "Store Pass Rate",
      tabs: {
        talk2learn: "Talk2Learn",
        quitPuffing: "Quit Puffing",
        properMech: "ProperMech",
        activityMaps: "Activity Maps",
      },
    },
    services: {
      badge: "02 / End-to-End Capabilities",
      title: "SPECIALIZED APP SERVICES",
      subtitle:
        "Full-cycle mobile app and web engineering — from product architecture to App Store publishing. High-performance software designed to drive user retention, scalability, and startup success.",
    },
    whyMe: {
      badge: "03 / Competitive Advantage",
      title: "WHY CLIENTS CHOOSE TO WORK WITH ME",
      subtitle:
        "High-impact mobile software engineering combining pixel-perfect UI fidelity, 60fps performance, and enterprise-grade architecture that scales effortlessly.",
    },
    projects: {
      badge: "01 / Shipped Products & Case Studies",
      title: "FEATURED APPLICATIONS",
      subtitle:
        "Production-ready mobile applications engineered for startups and clients worldwide — with live App Store, Google Play, and enterprise deployments.",
      viewCaseStudy: "View Case Study",
      categories: {
        all: "All",
        liveInStores: "Live in Stores",
        mobileApp: "Mobile App",
        webApp: "Web App",
      },
      badges: {
        mobileApp: "Mobile App",
        webApp: "Web App",
        iosAndroidLive: "App Store & Play Live",
        appStoreLive: "App Store Live",
        googlePlayLive: "Google Play Live",
        livePlatform: "Live Platform",
        productionApp: "Production App",
        ios: "iOS",
        android: "Android",
        live: "Live",
      },
      modal: {
        problem: "The Challenge",
        solution: "Engineered Solution",
        highlights: "Key Architectural Highlights",
        metrics: "Technical Specifications & Metrics",
        close: "Close Case Study",
        visitLive: "Open Live Platform",
        viewAppStore: "Apple App Store",
        viewPlayStore: "Google Play Store",
      },
    },
    estimator: {
      badge: "04 / Transparent Pricing & Scope",
      title: "INSTANT MOBILE PROJECT ESTIMATOR",
      subtitle:
        "Select your target architecture, desired hardware features, and design status to get an instant cost and timeline estimate for your custom mobile build.",
      realTime: "Real-Time Estimate",
      investment: "Estimated Investment",
      timeline: "Estimated Timeline",
      discussWhatsApp: "Discuss This Estimate on WhatsApp",
      sendEmail: "Send Project Brief via Email",
    },
    pricing: {
      badge: "05 / Engagement Models",
      title: "TRANSPARENT FIXED PRICING",
      subtitle:
        "Simple, predictable ways to collaborate. No surprise invoices, no bloated agency markups — just direct senior engineering with weekly interactive test builds.",
      unblockPill: "Need quick unblocking? Book consultation on WhatsApp →",
    },
    about: {
      badge: "06 / Engineering Profile",
      title: "ABOUT MUHAMMAD SAAD",
      subtitle:
        "Senior Cross-Platform Mobile Engineer with 10+ shipped production applications across iOS & Android.",
      downloadResume: "Download Full CV (.PDF)",
    },
    faq: {
      badge: "09 / Client FAQ",
      title: "FREQUENTLY ASKED QUESTIONS",
      subtitle:
        "Everything you need to know about timelines, code ownership, store publishing guarantees, and engagement terms.",
    },
    contact: {
      badge: "Available Now",
      title: "LET'S BUILD YOUR NEXT MOBILE APP",
      subtitle:
        "Have a startup idea or enterprise mobile project? Reach out directly via WhatsApp for an immediate response or submit your project brief below.",
      chatWhatsApp: "Chat on WhatsApp (Direct)",
      sendBrief: "Send Project Inquiry",
    },
    projectsData: {
      "quit-puffing": {
        role: "Creator & Lead Developer (Own Product) • Ongoing",
        summary:
          "A comprehensive, interactive Flutter application designed to help smokers overcome nicotine addiction through positive reinforcement, gamification, and evidence-based biological recovery timelines.",
        problem:
          "Individuals attempting to quit smoking often suffer from high relapse rates during sudden acute cravings, lack of immediate dopamine-replacing interventions, and absent real-time biological recovery feedback.",
        solution:
          "Architected a responsive Flutter Material 3 application featuring real-time smoke-free duration tracking, financial savings calculations, 5-minute guided SOS craving battles, and a local-first virtual XP economy with progression milestones.",
        highlights: [
          "Real-time tracking of smoke-free duration, cigarettes avoided, and financial savings",
          "Evidence-based biological recovery timelines with physical health repair stages",
          "Immediate 'SOS' interventions & 5-minute interactive craving battles",
          "Virtual XP economy with cosmetic unlocks, levels, and progression trophies",
          "Robust local-first architecture for secure, 100% private offline data persistence",
        ],
      },
      talk2learn: {
        role: "Lead Mobile Engineer • Ongoing",
        summary:
          "High-performance cross-platform language learning platform featuring live audio/video rooms, real-time presence management, and low-latency group discussions powered by Agora WebRTC SFU.",
        problem:
          "Language learners needed a spontaneous, low-latency environment to practice conversational speaking with native speakers worldwide without the friction of scheduling formal calendar calls.",
        solution:
          "Architected an Agora WebRTC SFU multi-user streaming pipeline inside Flutter with Riverpod state management. Implemented speaker stages, hand-raising queue, active audio visualizers, and seamless Google/Apple SSO.",
        highlights: [
          "Architected multi-user voice and video language rooms with Agora WebRTC SFU streaming",
          "Configured Google and Apple Single Sign-On (SSO) with Firebase Authentication",
          "Real-time user presence, active speaker indicators, and room moderation controls",
          "Low-latency Riverpod reactive state management with clean GoRouter navigation",
        ],
      },
      medroof: {
        role: "Lead Mobile Engineer • Telemedicine & Spa",
        summary:
          "Comprehensive on-demand telemedicine and wellness mobile application connecting patients with licensed healthcare providers for live Agora WebRTC consultations, digital prescriptions, and on-demand spa and IV hydration treatments.",
        problem:
          "Patients struggle with long clinic queues, cumbersome appointment booking, and fragmented records when seeking quick virtual consultations or booking in-person wellness treatments.",
        solution:
          "Engineered a secure cross-platform mobile application with low-latency Agora WebRTC video/audio telemedicine consults, HIPAA-ready patient records, interactive spa treatment scheduling, automated reminders, and instant card payments.",
        highlights: [
          "High-definition Agora WebRTC video & audio telemedicine consultations with certified physicians",
          "Secure HIPAA-ready electronic prescriptions, patient medical records, and digital health history",
          "On-demand spa, IV hydration therapy, and wellness appointment booking with interactive scheduling",
          "Integrated secure payment checkout, automated appointment reminders, and instant in-app clinician chat",
        ],
      },
      "souvenir-store": {
        role: "Full Stack Mobile Developer • E-Commerce",
        summary:
          "Premium shopping mobile application on iOS designed for discovering bespoke souvenirs, personalized gifts, seamless cart checkout with Stripe, and real-time delivery status.",
        problem:
          "Shoppers faced high cart abandonment and slow page transitions on mobile web when attempting to personalize gift items and purchase with local or international cards.",
        solution:
          "Engineered a React Native iOS application with native Stripe SDK integration, animated gift packaging selectors, and persistent Redux Toolkit offline cart caching for instant zero-latency checkout.",
        highlights: [
          "Implemented smooth, friction-free catalog browsing with sub-second product search",
          "Integrated secure Stripe mobile SDK supporting credit/debit cards and digital wallets",
          "Engineered persistent shopping cart and wishlist synchronization across sessions",
          "100% compliant with Apple App Store Human Interface Guidelines and privacy manifests",
        ],
      },
      propermech: {
        role: "Lead React Native Developer • 4 Months",
        summary:
          "Complete automotive service mobile platform where car owners manage vehicle health records, locate nearby certified mechanics, request repair quotes, and monitor job progress live.",
        problem:
          "Car owners struggled with transparent repair pricing, verified mechanic qualifications, and live progress visibility during automotive servicing.",
        solution:
          "Built a dual-role React Native marketplace with real-time Firestore synchronization, Apple/Google single sign-on, camera image diagnostics, and background FCM push alerts.",
        highlights: [
          "Real-time database syncing with Firestore for instant job status notifications",
          "Integrated camera and media library for car inspection photo uploads",
          "Google and Apple Single Sign-On (SSO) with biometrics security",
          "Streamlined navigation flows optimized with React Navigation and Redux state",
        ],
      },
      "propermech-pro": {
        role: "Lead Mobile & AI Developer • Field Dispatch",
        summary:
          "Professional mobile application for automotive technicians and workshops to manage daily schedules, accept dispatch jobs, track order parts, and generate repair reports via an AI Service Writer.",
        problem:
          "Automotive technicians spent hours writing repetitive manual repair estimates, leading to dispatch delays and administrative overhead in busy repair shops.",
        solution:
          "Engineered an AI Service Writer powered by Firebase Cloud Functions that generates comprehensive repair work orders, parts checklists, and customer quotes in seconds.",
        highlights: [
          "Integrated AI Service Writer via Firebase Cloud Functions for diagnostic estimates",
          "Mechanic daily dispatch queue with interactive acceptance and route tracking",
          "Cloud-synced parts inventory and labor cost calculator with automated invoices",
          "Comprehensive offline job logging with automatic sync upon reconnection",
        ],
      },
      tapwars: {
        role: "Creator & Lead Developer • 60 FPS Gaming",
        summary:
          "High-adrenaline tap-based mobile game featuring real-time multiplayer tournaments, animated theme switcher, global leaderboards, achievements, and low-latency Supabase state sync.",
        problem:
          "Multiplayer mobile games frequently suffer from input lag, UI stutter, and delayed score updates over cellular connections.",
        solution:
          "Utilized Reanimated 3 on the native UI thread to guarantee 60fps micro-animations, while Supabase Realtime websocket channels broadcast score states under 80ms latency.",
        highlights: [
          "Engineered buttery 60fps micro-animations with Reanimated and gesture handlers",
          "Supabase Realtime websockets for sub-100ms global leaderboards and player matches",
          "Interactive animated theme switcher with smooth transition shaders",
          "Offline achievement tracking with cloud synchronization upon game finish",
        ],
      },
      "activity-maps": {
        role: "Lead Mobile Architect • Geolocation",
        summary:
          "Comprehensive events and local venues discovery application where contributors add places and users explore interactive maps, make reservations, and check in with barcodes.",
        problem:
          "Users struggled to find authentic local community gatherings and make instant table or ticket reservations directly from a map view.",
        solution:
          "Combined Google Maps SDK clustering with local device geolocation, biometric authentication, and in-app reservation barcodes for seamless physical admissions.",
        highlights: [
          "Interactive Google Maps pin clustering with live GPS radius search",
          "Biometric authentication (FaceID & Fingerprint) for rapid account security",
          "QR and barcode scanning engine for event admissions and reservations",
          "Subscription handling with secure digital payments and instant booking receipts",
        ],
      },
      savorconnect: {
        role: "Mobile Application Developer • Delivery",
        summary:
          "Intuitive food delivery mobile application designed for seamless restaurant discovery, item customization, real-time GPS courier tracking, and smooth checkout via Stripe.",
        problem:
          "Customers demanded live courier location updates on Google Maps and order customization without confusing multi-step checkout friction.",
        solution:
          "Engineered live courier GPS polling with interactive driver markers, integrated Stripe credit card/wallet SDK, and designed a streamlined 3-step checkout flow.",
        highlights: [
          "Integrated Google Maps API for restaurant geofencing and live courier tracking",
          "Full Stripe payment gateway integration supporting cards, Apple Pay & Google Pay",
          "Custom item modifiers, combo builders, and dietary requirement filters",
          "Push notification alerts for kitchen status, driver dispatch, and doorstep arrival",
        ],
      },
      vcrow: {
        role: "Lead Full Stack Developer • EdTech",
        summary:
          "Comprehensive dual-portal education ecosystem connecting parents and schools with real-time academic graphs, device restriction management, and curriculum question sets.",
        problem:
          "Parents lacked insight into their children's real-time academic performance and struggled to manage device screen time while encouraging educational quiz exercises.",
        solution:
          "Built a dual-portal mobile architecture where school tests and quizzes appear seamlessly on student devices, with parent analytics dashboards powered by Firestore.",
        highlights: [
          "Dual-portal architecture for teachers and parents with role-based permissions",
          "Interactive academic performance charts with subject-wise progress analytics",
          "In-app question set purchases and curriculum unlocking modules",
          "Device restriction rules and scheduled study notifications via Firebase",
        ],
      },
    },
  },

  // ────────────────────────────── FRENCH ──────────────────────────────
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      blueprints: "Solutions",
      projects: "Projets",
      estimator: "Estimateur",
      pricing: "Tarifs",
      about: "À Propos",
      faq: "FAQ",
      contact: "Contact",
      letsTalk: "WhatsApp Direct",
      availableForHire: "Disponible",
      orderApp: "Commander l'App",
      resume: "Mon CV",
    },
    hero: {
      badge: "Disponible pour Projets Mobiles & Sprints",
      headlinePart1: "Développeur Senior React Native & Flutter.",
      headlinePart2: "Conçu pour une Vélocité à 60 FPS.",
      subheadline:
        "Conception d'applications mobiles iOS & Android prêtes pour le marché et de MVP pour startups. Du design Figma à la publication validée sur l'App Store & Google Play en 30 jours — avec animations fluides à 60 fps, backends cloud Firebase/Supabase et zéro intermédiaire.",
      exploreApps: "Découvrir les Projets",
      estimateCost: "Estimer le Coût de l'App",
      appsShipped: "Applications Livrées",
      experience: "Années d'Expérience",
      clientRating: "Avis Clients",
      storePass: "Taux de Validation Store",
      tabs: {
        talk2learn: "Talk2Learn",
        quitPuffing: "Quit Puffing",
        properMech: "ProperMech",
        activityMaps: "Activity Maps",
      },
    },
    services: {
      badge: "02 / Compétences Clés",
      title: "SERVICES D'INGÉNIERIE MOBILE",
      subtitle:
        "Développement mobile et web complet — de l'architecture logicielle à la publication sur les stores. Logiciels haute performance conçus pour maximiser l'engagement, la scalabilité et le succès des startups.",
    },
    whyMe: {
      badge: "03 / Pourquoi Me Choisir",
      title: "POURQUOI TRAVAILLER AVEC MOI",
      subtitle:
        "Ingénierie mobile à fort impact alliant design soigné au pixel près, performances réactives à 60 fps et architecture cloud robuste qui évolue sans effort.",
    },
    projects: {
      badge: "01 / Applications Livrées & Études de Cas",
      title: "RÉALISATIONS MAJEURES",
      subtitle:
        "Applications mobiles prêtes pour la production conçues pour des startups et des entreprises mondiales — disponibles sur l'App Store, Google Play et en déploiement entreprise.",
      viewCaseStudy: "Étude de Cas",
      categories: {
        all: "Tous",
        liveInStores: "En Ligne sur les Stores",
        mobileApp: "Application Mobile",
        webApp: "Application Web",
      },
      badges: {
        mobileApp: "App Mobile",
        webApp: "App Web",
        iosAndroidLive: "En Ligne App Store & Play",
        appStoreLive: "En Ligne sur App Store",
        googlePlayLive: "En Ligne sur Google Play",
        livePlatform: "Plateforme en Ligne",
        productionApp: "App en Production",
        ios: "iOS",
        android: "Android",
        live: "En Ligne",
      },
      modal: {
        problem: "Le Défi Technique",
        solution: "Solution Développée",
        highlights: "Points Forts de l'Architecture",
        metrics: "Spécifications Techniques & Métriques",
        close: "Fermer l'Étude de Cas",
        visitLive: "Ouvrir la Plateforme en Ligne",
        viewAppStore: "Apple App Store",
        viewPlayStore: "Google Play Store",
      },
    },
    estimator: {
      badge: "04 / Devis Instantané & Périmètre",
      title: "ESTIMATEUR DE PROJET MOBILE",
      subtitle:
        "Sélectionnez votre architecture cible, les fonctionnalités matérielles souhaitées et l'état de votre design pour obtenir une estimation immédiate de budget et de calendrier.",
      realTime: "Estimation en Temps Réel",
      investment: "Investissement Estimé",
      timeline: "Délai Estimé",
      discussWhatsApp: "Discuter de ce Devis sur WhatsApp",
      sendEmail: "Envoyer le Brief par Email",
    },
    pricing: {
      badge: "05 / Modèles d'Engagement",
      title: "TARIFS FORFAITAIRES TRANSPARENTS",
      subtitle:
        "Des modalités de collaboration claires et sans surprise. Pas de factures imprévues, pas de surcoûts d'agence — uniquement un travail direct d'ingénieur senior avec versions de test chaque semaine.",
      unblockPill: "Besoin d'un déblocage rapide ? Réserver sur WhatsApp →",
    },
    about: {
      badge: "06 / Profil de l'Ingénieur",
      title: "À PROPOS DE MUHAMMAD SAAD",
      subtitle:
        "Ingénieur Mobile Senior spécialisé dans les applications multiplateformes iOS & Android avec plus de 10 applications publiées avec succès.",
      downloadResume: "Télécharger le CV (.PDF)",
    },
    faq: {
      badge: "09 / FAQ Clients",
      title: "QUESTIONS FRÉQUEMMENT POSÉES",
      subtitle:
        "Toutes les réponses à vos questions sur les délais, la propriété du code source, la garantie de validation sur les stores et les modalités de travail.",
    },
    contact: {
      badge: "Disponible Immédiatement",
      title: "CRÉONS VOTRE PROCHAINE APPLICATION",
      subtitle:
        "Vous avez une idée de startup ou un projet d'application mobile d'entreprise ? Contactez-moi directement sur WhatsApp pour une réponse rapide ou soumettez votre brief ci-dessous.",
      chatWhatsApp: "Discuter sur WhatsApp (Direct)",
      sendBrief: "Envoyer une Demande de Projet",
    },
    projectsData: {
      "quit-puffing": {
        role: "Créateur & Développeur Principal (Projet propre) • En cours",
        summary:
          "Application Flutter interactive et complète conçue pour aider les fumeurs à surmonter l'addiction grâce au renforcement positif, à la gamification et à des délais de récupération biologique validés.",
        problem:
          "Les fumeurs en sevrage subissent de fortes rechutes lors des envies aiguës en l'absence d'interventions immédiates et de suivi biologique en temps réel.",
        solution:
          "Architecture d'une application Flutter Material 3 avec suivi du temps sans tabac, économies financières calculées, batailles anti-envie guidées de 5 minutes et économie locale de points XP.",
        highlights: [
          "Suivi en temps réel de la durée sans tabac, cigarettes évitées et argent économisé",
          "Chronologie de récupération biologique basée sur des données médicales",
          "Interventions SOS immédiates et mini-jeux de 5 minutes contre les envies",
          "Économie virtuelle de points XP récompensant les paliers franchis",
          "Architecture 100% locale pour une confidentialité totale des données",
        ],
      },
      talk2learn: {
        role: "Ingénieur Mobile Principal • En cours",
        summary:
          "Plateforme d'apprentissage linguistique multiplateforme haute performance avec salons audio/vidéo en direct, présence en temps réel et streaming Agora WebRTC SFU à faible latence.",
        problem:
          "Les apprenants avaient besoin d'un espace spontané et sans latence pour pratiquer l'oral avec des locuteurs natifs sans planification complexe de créneaux.",
        solution:
          "Pipeline de streaming multi-utilisateurs Agora WebRTC SFU sous Flutter avec gestion d'état Riverpod, scènes d'intervenants, levée de main et SSO Google/Apple.",
        highlights: [
          "Salons de conversation audio/vidéo multi-utilisateurs avec Agora WebRTC SFU",
          "Authentification sécurisée SSO Google et Apple avec Firebase Auth",
          "Indicateurs de présence en direct, visualiseur audio et modération de salle",
          "Architecture réactive Riverpod ultra-fluide avec navigation GoRouter",
        ],
      },
      medroof: {
        role: "Ingénieur Mobile Principal • Télémédecine & Bien-être",
        summary:
          "Application mobile complète de télémédecine et de bien-être à la demande connectant les patients à des professionnels de santé agréés pour des consultations vidéo Agora WebRTC en direct, des ordonnances numériques et des soins spa et perfusions IV.",
        problem:
          "Les patients sont confrontés à de longues files d'attente en clinique et à des dossiers médicaux fragmentés lorsqu'ils recherchent des consultations virtuelles rapides ou réservent des soins de bien-être.",
        solution:
          "Développement d'une application mobile multiplateforme sécurisée avec consultations de télémédecine audio/vidéo Agora WebRTC à faible latence, dossiers médicaux conformes HIPAA, planification interactive des soins spa et paiements instantanés.",
        highlights: [
          "Consultations de télémédecine vidéo et audio haute définition Agora WebRTC avec des médecins certifiés",
          "Ordonnances électroniques sécurisées conformes HIPAA et historique de santé numérique des patients",
          "Réservation à la demande de soins spa, d'hydratation IV et de bien-être avec calendrier interactif",
          "Paiement numérique sécurisé, rappels de rendez-vous automatiques et messagerie instantanée avec les praticiens",
        ],
      },
      "souvenir-store": {
        role: "Développeur Mobile Full Stack • E-Commerce",
        summary:
          "Application e-commerce iOS haut de gamme pour découvrir des souvenirs personnalisés, avec paiement sécurisé Stripe et suivi de livraison en direct.",
        problem:
          "Forte baisse de conversion sur web mobile lors de la personnalisation d'articles et du paiement par carte internationale.",
        solution:
          "Développement React Native iOS avec SDK Stripe natif, sélecteurs d'emballage cadeau animés et panier d'achat persistant en cache Redux.",
        highlights: [
          "Navigation fluide dans le catalogue avec recherche de produits instantanée",
          "Intégration du SDK Stripe prenant en charge cartes bancaires et portefeuilles mobiles",
          "Synchronisation persistante du panier et de la liste de souhaits",
          "100% conforme aux directives Apple HIG et aux manifestes de confidentialité",
        ],
      },
      propermech: {
        role: "Développeur React Native Principal • 4 Mois",
        summary:
          "Plateforme automobile complète permettant aux propriétaires de gérer l'historique du véhicule, localiser des mécaniciens certifiés et suivre les réparations en direct.",
        problem:
          "Manque de transparence sur les tarifs de réparation et absence de visibilité en direct lors des interventions mécaniques.",
        solution:
          "Place de marché React Native synchronisée en temps réel avec Firestore, authentification SSO Apple/Google et alertes push FCM.",
        highlights: [
          "Synchronisation Firestore en temps réel pour notifications de statut d'intervention",
          "Téléchargement de photos d'inspection via caméra intégrée",
          "Connexion unique Google et Apple (SSO) avec sécurité biométrique",
          "Navigation optimisée avec React Navigation et gestion d'état Redux",
        ],
      },
      "propermech-pro": {
        role: "Développeur Mobile & IA • Déploiement Terrain",
        summary:
          "Application professionnelle pour mécaniciens et ateliers gérant les tournées quotidiennes, les pièces détachées et les devis assistés par IA.",
        problem:
          "Temps considérable passé à rédiger manuellement des devis répétitifs, entraînant des retards de planification.",
        solution:
          "Générateur de devis IA alimenté par Firebase Cloud Functions produisant ordres de réparation et listes de pièces en quelques secondes.",
        highlights: [
          "Assistant IA Cloud Functions pour diagnostics et devis mécaniques précis",
          "File d'attente d'interventions journalières avec itinéraire optimisé",
          "Inventaire synchronisé et calculateur de coûts avec facturation instantanée",
          "Prise en charge complète du mode hors-ligne avec synchronisation automatique",
        ],
      },
      tapwars: {
        role: "Créateur & Développeur Principal • Jeu 60 FPS",
        summary:
          "Jeu mobile multijoueur ultra-nerveux à 60 FPS avec tournois en direct, sélecteur de thèmes dynamique et synchronisation d'état Supabase en temps réel.",
        problem:
          "Les jeux d'action sur mobile souffrent fréquemment de micro-saccades et de retards de mise à jour des scores en réseau 4G/5G.",
        solution:
          "Micro-animations 60 fps gérées directement sur le thread UI avec Reanimated 3 et canaux websockets Supabase sous 80 ms.",
        highlights: [
          "Animations 60 fps d'une fluidité absolue avec Reanimated 3 et Gesture Handler",
          "Websockets Supabase Realtime pour tableaux des scores sous 100 ms",
          "Changeur de thème interactif avec shaders de transition visuelle",
          "Suivi des succès hors-ligne avec synchronisation cloud automatique",
        ],
      },
      "activity-maps": {
        role: "Architecte Mobile Principal • Géolocalisation",
        summary:
          "Application d'exploration d'événements et de lieux locaux avec carte interactive, réservations intégrées et contrôle d'accès par QR code.",
        problem:
          "Difficulté pour les utilisateurs de trouver des rassemblements locaux authentiques et de réserver immédiatement depuis une carte.",
        solution:
          "Regroupement de points d'intérêt sur Google Maps, géolocalisation haute précision et validation par code QR/barres.",
        highlights: [
          "Clustering interactif Google Maps avec recherche par rayon GPS en direct",
          "Authentification biométrique (FaceID et empreinte) pour un accès sécurisé",
          "Moteur de scan QR et code-barres pour admission rapide aux événements",
          "Paiement sécurisé avec génération immédiate de reçus et billets",
        ],
      },
      savorconnect: {
        role: "Développeur d'Applications Mobiles • Livraison",
        summary:
          "Application intuitive de livraison de repas avec géolocalisation des livreurs en temps réel, personnalisation des plats et paiement Stripe simplifié.",
        problem:
          "Exigence de localisation précise du livreur sur Google Maps et commande simplifiée sans étapes superflues.",
        solution:
          "Suivi GPS des coursiers en direct avec marqueurs animés et intégration du SDK de paiement Stripe en 3 étapes.",
        highlights: [
          "Intégration Google Maps API pour géorepérage des restaurants et suivi livreurs",
          "Passerelle Stripe complète prenant en charge cartes, Apple Pay et Google Pay",
          "Options personnalisées d'ingrédients, menus combinés et filtres alimentaires",
          "Notifications push en direct : préparation cuisine, départ livreur et arrivée",
        ],
      },
      vcrow: {
        role: "Développeur Full Stack Principal • EdTech",
        summary:
          "Écosystème éducatif à double portail reliant parents et écoles avec graphiques de performance en direct, contrôle parental et banques d'exercices.",
        problem:
          "Manque de visibilité des parents sur les résultats scolaires réels et gestion difficile du temps d'écran des enfants.",
        solution:
          "Double portail mobile pour enseignants et parents avec tableaux de bord analytiques interactifs propulsés par Firestore.",
        highlights: [
          "Architecture à double interface pour enseignants et parents avec droits dédiés",
          "Graphiques interactifs de suivi académique par matière",
          "Achat de séries d'exercices intégrées et déblocage progressif du programme",
          "Règles de restriction de temps d'écran et rappels d'étude programmés",
        ],
      },
    },
  },

  // ────────────────────────────── SPANISH ──────────────────────────────
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      blueprints: "Soluciones",
      projects: "Proyectos",
      estimator: "Calculadora",
      pricing: "Precios",
      about: "Sobre Mí",
      faq: "FAQ",
      contact: "Contacto",
      letsTalk: "WhatsApp Directo",
      availableForHire: "Disponible",
      orderApp: "Pedir App",
      resume: "Currículum",
    },
    hero: {
      badge: "Disponible para Nuevos Proyectos y Sprints Móviles",
      headlinePart1: "Desarrollador Senior React Native & Flutter.",
      headlinePart2: "Diseñado para una Velocidad de 60 FPS.",
      subheadline:
        "Arquitectura de aplicaciones móviles para iOS y Android listas para el mercado y MVP para startups. Desde el diseño en Figma hasta la publicación en App Store y Google Play en 30 días — con animaciones a 60 fps, backends Firebase/Supabase y sin costes de agencia.",
      exploreApps: "Ver Proyectos Publicados",
      estimateCost: "Calcular Coste del Proyecto",
      appsShipped: "Apps en Producción",
      experience: "Años de Experiencia",
      clientRating: "Calificación de Clientes",
      storePass: "Aprobación en Tiendas",
      tabs: {
        talk2learn: "Talk2Learn",
        quitPuffing: "Quit Puffing",
        properMech: "ProperMech",
        activityMaps: "Activity Maps",
      },
    },
    services: {
      badge: "02 / Capacidades Clave",
      title: "SERVICIOS DE DESARROLLO MÓVIL",
      subtitle:
        "Desarrollo completo de aplicaciones móviles y web — desde la arquitectura del producto hasta el despliegue en App Store y Google Play. Software de alto rendimiento enfocado en la retención y el crecimiento de startups.",
    },
    whyMe: {
      badge: "03 / Ventaja Competitiva",
      title: "POR QUÉ TRABAJAR CONMIGO",
      subtitle:
        "Ingeniería de software móvil de alto nivel que une diseño fiel al píxel, fluidez a 60 fps y arquitectura escalable para empresas.",
    },
    projects: {
      badge: "01 / Productos Publicados y Estudios de Caso",
      title: "APLICACIONES DESTACADAS",
      subtitle:
        "Aplicaciones móviles listas para producción desarrolladas para startups y clientes de todo el mundo — con lanzamientos activos en App Store, Google Play e implementaciones corporativas.",
      viewCaseStudy: "Caso de Estudio",
      categories: {
        all: "Todas",
        liveInStores: "En Tiendas",
        mobileApp: "App Móvil",
        webApp: "App Web",
      },
      badges: {
        mobileApp: "App Móvil",
        webApp: "App Web",
        iosAndroidLive: "En Vivo App Store & Play",
        appStoreLive: "En Vivo en App Store",
        googlePlayLive: "En Vivo en Google Play",
        livePlatform: "Plataforma en Vivo",
        productionApp: "App en Producción",
        ios: "iOS",
        android: "Android",
        live: "En Vivo",
      },
      modal: {
        problem: "El Reto Tecnológico",
        solution: "Solución de Ingeniería",
        highlights: "Puntos Clave de la Arquitectura",
        metrics: "Especificaciones Técnicas y Métricas",
        close: "Cerrar Caso de Estudio",
        visitLive: "Abrir Plataforma en Línea",
        viewAppStore: "Apple App Store",
        viewPlayStore: "Google Play Store",
      },
    },
    estimator: {
      badge: "04 / Estimación Inmediata de Coste",
      title: "CALCULADORA DE PROYECTO MÓVIL",
      subtitle:
        "Seleccione la arquitectura, los componentes de hardware requeridos y el estado de su diseño para obtener un cálculo inmediato de inversión y tiempo de entrega.",
      realTime: "Estimación en Tiempo Real",
      investment: "Inversión Estimada",
      timeline: "Plazo Estimado",
      discussWhatsApp: "Consultar esta Estimación por WhatsApp",
      sendEmail: "Enviar Especificación por Email",
    },
    pricing: {
      badge: "05 / Modelos de Contratación",
      title: "PRECIOS FIJOS Y TRANSPARENTES",
      subtitle:
        "Colaboración directa, predecible y sin sorpresas. Sin sobrecostes de intermediarios — solo desarrollo de nivel senior con versiones interactivas de prueba cada semana.",
      unblockPill: "¿Necesita un desbloqueo técnico urgente? Consulte por WhatsApp →",
    },
    about: {
      badge: "06 / Perfil Profesional",
      title: "ACERCA DE MUHAMMAD SAAD",
      subtitle:
        "Ingeniero Móvil Senior especializado en arquitecturas React Native y Flutter con más de 10 aplicaciones publicadas en producción.",
      downloadResume: "Descargar CV Completo (.PDF)",
    },
    faq: {
      badge: "09 / Preguntas Frecuentes",
      title: "PREGUNTAS FRECUENTES",
      subtitle:
        "Todo lo que necesita saber sobre plazos de entrega, propiedad del código fuente, garantías de publicación en tiendas y metodología de trabajo.",
    },
    contact: {
      badge: "Disponible Ahora",
      title: "CONSTRUYAMOS SU PRÓXIMA APLICACIÓN",
      subtitle:
        "¿Tiene una idea para una startup o un proyecto móvil empresarial? Escríbame por WhatsApp para una respuesta inmediata o envíe los detalles de su proyecto a continuación.",
      chatWhatsApp: "Chatear en WhatsApp (Directo)",
      sendBrief: "Enviar Solicitud de Proyecto",
    },
    projectsData: {
      "quit-puffing": {
        role: "Creador y Desarrollador Principal (Producto propio) • En curso",
        summary:
          "Aplicación interactiva en Flutter diseñada para ayudar a fumadores a superar la adicción mediante refuerzo positivo, gamificación y cronogramas de recuperación biológica probados.",
        problem:
          "Las personas sufren frecuentes recaídas ante antojos agudos debido a la falta de herramientas inmediatas y ausencia de métricas biológicas en tiempo real.",
        solution:
          "Desarrollo en Flutter Material 3 con contador de tiempo sin fumar, cálculo de ahorros, batallas interactivas SOS de 5 minutos y economía local de puntos XP.",
        highlights: [
          "Monitoreo en tiempo real de días sin fumar, cigarrillos evitados y dinero ahorrado",
          "Cronograma de recuperación biológica con etapas de regeneración física",
          "Intervenciones inmediatas SOS y minijuegos de 5 minutos contra la ansiedad",
          "Economía de XP virtual con desbloqueos cosméticos y logros",
          "Arquitectura local-first para máxima privacidad y funcionamiento offline",
        ],
      },
      talk2learn: {
        role: "Ingeniero Mobile Principal • En curso",
        summary:
          "Plataforma multiplataforma de aprendizaje de idiomas con salas de audio/video en vivo, presencia en tiempo real y streaming de baja latencia con Agora WebRTC SFU.",
        problem:
          "Los estudiantes necesitaban un entorno inmediato para practicar conversación con nativos de todo el mundo sin la fricción de agendar reuniones con días de antelación.",
        solution:
          "Canal de streaming multiusuario con Agora WebRTC SFU en Flutter con Riverpod, escenarios de oradores, fila para levantar la mano y SSO de Apple y Google.",
        highlights: [
          "Salas de práctica de voz y video multiusuario impulsadas por Agora WebRTC SFU",
          "Inicio de sesión seguro SSO con Google y Apple vía Firebase Authentication",
          "Presencia en tiempo real, visualizador de audio activo y controles de moderación",
          "Gestión de estado reactiva con Riverpod y navegación fluida con GoRouter",
        ],
      },
      medroof: {
        role: "Ingeniero Móvil Principal • Telemedicina y Spa",
        summary:
          "Aplicación móvil integral de telemedicina y bienestar que conecta a pacientes con médicos certificados para videoconsultas en vivo con Agora WebRTC, recetas electrónicas y tratamientos de spa e hidratación IV.",
        problem:
          "Los pacientes sufren largas esperas en clínicas y trámites complejos al buscar consultas médicas virtuales rápidas o reservar tratamientos de bienestar presenciales.",
        solution:
          "Desarrollo de una aplicación móvil multiplataforma segura con telemedicina de audio/video de baja latencia con Agora WebRTC, expedientes clínicos protegidos por HIPAA, agenda interactiva de citas de spa y pasarela de pago seguro.",
        highlights: [
          "Consultas de telemedicina en video y audio de alta definición con Agora WebRTC con médicos certificados",
          "Recetas electrónicas seguras compatibles con HIPAA e historial médico digital del paciente",
          "Reserva de tratamientos de spa, hidratación intravenosa y bienestar bajo demanda con calendario dinámico",
          "Cobro seguro con tarjeta, recordatorios automáticos de citas y chat directo con el especialista",
        ],
      },
      "souvenir-store": {
        role: "Desarrollador Mobile Full Stack • E-Commerce",
        summary:
          "Aplicación de compras premium para iOS orientada a regalos exclusivos y souvenirs personalizados con pasarela Stripe y seguimiento en vivo.",
        problem:
          "Abandono del carrito en navegadores móviles durante la personalización de artículos y el pago con tarjetas bancarias internacionales.",
        solution:
          "App iOS en React Native con integración nativa del SDK de Stripe, selección animada de empaque y carrito offline respaldado en Redux Toolkit.",
        highlights: [
          "Navegación ágil por el catálogo con buscador instantáneo de productos",
          "Integración segura de Stripe con soporte para tarjetas de crédito y billeteras digitales",
          "Sincronización persistente de cesta de compras y lista de favoritos",
          "100% de conformidad con las directrices HIG de Apple y políticas de privacidad",
        ],
      },
      propermech: {
        role: "Desarrollador React Native Principal • 4 Meses",
        summary:
          "Plataforma móvil automotriz donde conductores gestionan el historial del vehículo, localizan mecánicos certificados y siguen el estado de la reparación en vivo.",
        problem:
          "Dificultades para cotizar reparaciones con claridad y falta de comunicación directa durante la revisión del vehículo en el taller.",
        solution:
          "Marketplace React Native con sincronización en tiempo real en Firestore, autenticación SSO con Apple/Google y alertas push FCM.",
        highlights: [
          "Sincronización en tiempo real con Firestore para actualizaciones de estado inmediatas",
          "Subida de fotografías de inspección vehicular mediante cámara integrada",
          "Inicio de sesión único con Google y Apple respaldado por biometría",
          "Flujo de navegación optimizado mediante React Navigation y Redux",
        ],
      },
      "propermech-pro": {
        role: "Desarrollador Mobile e IA • Asignación de Servicios",
        summary:
          "App profesional para técnicos automotrices que optimiza turnos, despachos de trabajo, control de inventario y presupuestos con IA.",
        problem:
          "Los mecánicos invertían horas en generar presupuestos manuales repetitivos, causando retrasos en la atención del taller.",
        solution:
          "Motor de presupuestos con IA mediante Firebase Cloud Functions que genera órdenes de reparación y listas de refacciones en segundos.",
        highlights: [
          "Generador de diagnósticos y cotizaciones con IA mediante Cloud Functions",
          "Panel de órdenes de trabajo diarias con hoja de ruta y confirmación rápida",
          "Inventario sincronizado y cálculo de mano de obra con facturación inmediata",
          "Modo offline integral con sincronización automática al recuperar cobertura",
        ],
      },
      tapwars: {
        role: "Creador y Desarrollador Principal • Videojuego a 60 FPS",
        summary:
          "Juego móvil de reflejos 1v1 a 60 FPS con torneos multijugador en tiempo real, selector visual de temas y sincronización con Supabase.",
        problem:
          "Los juegos móviles de reacción sufren retrasos y cortes de sincronización en conexiones celulares inestables.",
        solution:
          "Microanimaciones nativas a 60 fps mediante Reanimated 3 y canales de websocket Supabase Realtime con latencia inferior a 80 ms.",
        highlights: [
          "Animaciones superfluidas a 60 fps con Reanimated 3 en el hilo nativo",
          "Conexiones websocket con Supabase Realtime para clasificaciones mundiales",
          "Selector interactivo de temas visuales con transiciones dinámicas",
          "Registro de logros offline con sincronización en la nube al finalizar partida",
        ],
      },
      "activity-maps": {
        role: "Arquitecto Mobile Principal • Geolocalización",
        summary:
          "App de descubrimiento de eventos y sitios locales con mapas interactivos, reservas instantáneas y control de acceso mediante códigos QR.",
        problem:
          "Los usuarios no encontraban actividades de ocio locales de confianza ni podían reservar entradas al instante desde un mapa.",
        solution:
          "Clustering en Google Maps SDK, geolocalización de alta precisión en el dispositivo y validación digital con código de barras.",
        highlights: [
          "Pines interactivos agrupados en Google Maps con búsqueda por radio GPS",
          "Autenticación biométrica (FaceID y huella) para máxima seguridad del usuario",
          "Lector integrado de códigos QR y de barras para control de acceso a eventos",
          "Gestión de suscripciones con pagos digitales seguros y comprobantes instantáneos",
        ],
      },
      savorconnect: {
        role: "Desarrollador de Apps Móviles • Delivery",
        summary:
          "Aplicación de entrega de comida a domicilio con seguimiento GPS en vivo de repartidores, personalización de menú y pago seguro con Stripe.",
        problem:
          "Necesidad de rastrear la ubicación del repartidor en tiempo real sobre Google Maps sin pasos de compra complicados.",
        solution:
          "Seguimiento GPS de repartidores con marcadores en vivo, pasarela de pago Stripe y proceso de compra en 3 pasos sencillos.",
        highlights: [
          "API de Google Maps para geocercas de restaurantes y seguimiento de rutas",
          "Pasarela completa de Stripe con soporte para tarjetas, Apple Pay y Google Pay",
          "Personalización de ingredientes, menús combinados y filtros dietéticos",
          "Notificaciones push para preparación, salida del repartidor y entrega",
        ],
      },
      vcrow: {
        role: "Desarrollador Full Stack Principal • EdTech",
        summary:
          "Ecosistema educativo de doble portal para colegios y familias con analíticas académicas, gestión de tiempo en pantalla y exámenes interactivos.",
        problem:
          "Familias sin visibilidad de las calificaciones de sus hijos y dificultad para conciliar el tiempo de pantalla con el estudio.",
        solution:
          "Arquitectura móvil con portales dedicados para docentes y tutores, con gráficas académicas interactivas respaldadas en Firestore.",
        highlights: [
          "Estructura de doble acceso para profesores y familias con permisos diferenciados",
          "Gráficas interactivas de evolución académica organizadas por materia",
          "Adquisición de paquetes de preguntas y desbloqueo progresivo del temario",
          "Reglas de limitación horaria y avisos de repaso escolar mediante Firebase",
        ],
      },
    },
  },

  // ────────────────────────────── PORTUGUESE ──────────────────────────────
  pt: {
    nav: {
      home: "Início",
      services: "Serviços",
      blueprints: "Soluções",
      projects: "Projetos",
      estimator: "Calculadora",
      pricing: "Preços",
      about: "Sobre",
      faq: "FAQ",
      contact: "Contato",
      letsTalk: "WhatsApp Direto",
      availableForHire: "Disponível",
      orderApp: "Pedir Aplicativo",
      resume: "Currículo",
    },
    hero: {
      badge: "Disponível para Novos Projetos Mobile & Sprints",
      headlinePart1: "Desenvolvedor Sênior React Native & Flutter.",
      headlinePart2: "Projetado para Fluidez a 60 FPS.",
      subheadline:
        "Arquitetura de aplicativos móveis iOS e Android prontos para o mercado e MVPs para startups. Do design no Figma à publicação aprovada na App Store e Google Play em 30 dias — com animações a 60 fps, backends Firebase/Supabase e sem custos de agência.",
      exploreApps: "Ver Projetos Lançados",
      estimateCost: "Calcular Custo do App",
      appsShipped: "Apps em Produção",
      experience: "Anos de Experiência",
      clientRating: "Avaliação dos Clientes",
      storePass: "Aprovação nas Lojas",
      tabs: {
        talk2learn: "Talk2Learn",
        quitPuffing: "Quit Puffing",
        properMech: "ProperMech",
        activityMaps: "Activity Maps",
      },
    },
    services: {
      badge: "02 / Habilidades Especializadas",
      title: "SERVIÇOS DE ENGENHARIA MOBILE",
      subtitle:
        "Desenvolvimento mobile e web de ponta a ponta — da arquitetura à aprovação nas lojas. Software de alto padrão desenhado para retenção, escalabilidade e sucesso de startups.",
    },
    whyMe: {
      badge: "03 / Diferencial Competitivo",
      title: "POR QUE TRABALHAR COMIGO",
      subtitle:
        "Engenharia mobile de alto impacto unindo acabamento impecável, desempenho fluido a 60 fps e infraestrutura em nuvem estável e escalável.",
    },
    projects: {
      badge: "01 / Projetos Lançados e Estudos de Caso",
      title: "APLICATIVOS EM DESTAQUE",
      subtitle:
        "Aplicativos móveis de nível de produção desenvolvidos para startups e clientes em todo o mundo — com publicações ativas na App Store, Google Play e soluções corporativas.",
      viewCaseStudy: "Estudo de Caso",
      categories: {
        all: "Todos",
        liveInStores: "Disponíveis nas Lojas",
        mobileApp: "Aplicativo Mobile",
        webApp: "Aplicativo Web",
      },
      badges: {
        mobileApp: "App Mobile",
        webApp: "App Web",
        iosAndroidLive: "Disponível na App Store & Play",
        appStoreLive: "Disponível na App Store",
        googlePlayLive: "Disponível no Google Play",
        livePlatform: "Plataforma no Ar",
        productionApp: "App em Produção",
        ios: "iOS",
        android: "Android",
        live: "Ao Vivo",
      },
      modal: {
        problem: "O Desafio",
        solution: "Solução Desenvolvida",
        highlights: "Destaques da Arquitetura",
        metrics: "Especificações Técnicas e Métricas",
        close: "Fechar Estudo de Caso",
        visitLive: "Acessar Plataforma Online",
        viewAppStore: "Apple App Store",
        viewPlayStore: "Google Play Store",
      },
    },
    estimator: {
      badge: "04 / Estimativa Rápida de Orçamento",
      title: "CALCULADORA DE PROJETO MOBILE",
      subtitle:
        "Selecione a plataforma desejada, os recursos nativos e o status do design para obter uma estimativa transparente de investimento e cronograma.",
      realTime: "Estimativa em Tempo Real",
      investment: "Investimento Estimado",
      timeline: "Prazo Estimado",
      discussWhatsApp: "Conversar sobre a Estimativa no WhatsApp",
      sendEmail: "Enviar Escopo por E-mail",
    },
    pricing: {
      badge: "05 / Modelos de Contratação",
      title: "VALORES FIXOS E TRANSPARENTES",
      subtitle:
        "Parceria direta e sem surpresas. Sem faturas extras, sem intermediários — apenas engenharia sênior com entregas testáveis semanais.",
      unblockPill: "Precisa de suporte urgente? Fale pelo WhatsApp →",
    },
    about: {
      badge: "06 / Perfil Profissional",
      title: "SOBRE MUHAMMAD SAAD",
      subtitle:
        "Engenheiro Mobile Sênior especialista em soluções multiplataforma com mais de 10 aplicativos lançados em produção para iOS e Android.",
      downloadResume: "Baixar Currículo (.PDF)",
    },
    faq: {
      badge: "09 / Perguntas Frequentes",
      title: "DÚVIDAS FREQUENTES",
      subtitle:
        "Tudo o que você precisa saber sobre prazos, entrega do código-fonte, garantia de aprovação nas lojas e dinâmica de trabalho.",
    },
    contact: {
      badge: "Disponibilidade Imediata",
      title: "VAMOS CRIAR SEU PRÓXIMO APLICATIVO",
      subtitle:
        "Tem uma ideia de negócio ou um aplicativo para sua empresa? Chame diretamente no WhatsApp para resposta rápida ou preencha o formulário abaixo.",
      chatWhatsApp: "Conversar no WhatsApp (Direto)",
      sendBrief: "Enviar Proposta de Projeto",
    },
    projectsData: {
      "quit-puffing": {
        role: "Criador e Desenvolvedor Principal (Produto próprio) • Em andamento",
        summary:
          "Aplicativo Flutter abrangente e interativo para ajudar fumantes a superar o vício através de reforço positivo, gamificação e linhas do tempo de recuperação biológica.",
        problem:
          "Usuários enfrentam altas taxas de recaída durante fissuras agudas por falta de ferramentas de apoio imediato e acompanhamento da saúde em tempo real.",
        solution:
          "Arquitetura Flutter Material 3 com contadores em tempo real, economia financeira acumulada, batalhas guiadas SOS de 5 minutos e sistema gamificado de XP local.",
        highlights: [
          "Acompanhamento em tempo real do tempo sem fumar e economia gerada",
          "Fases de recuperação biológica baseadas em evidências médicas",
          "Módulos de intervenção rápida SOS e minijogos de 5 minutos",
          "Economia virtual de XP com recompensas cosméticas e troféus",
          "Arquitetura local-first para total privacidade e persistência de dados",
        ],
      },
      talk2learn: {
        role: "Engenheiro Mobile Principal • Em andamento",
        summary:
          "Plataforma multiplataforma de alto desempenho para conversação de idiomas com salas ao vivo de áudio/vídeo e streaming de baixa latência via Agora WebRTC SFU.",
        problem:
          "Estudantes precisavam de um ambiente espontâneo e sem delay para praticar idiomas com falantes nativos sem a burocracia de agendamentos prévios.",
        solution:
          "Pipeline de streaming multiusuário Agora WebRTC SFU no Flutter com Riverpod, palcos para palestrantes, fila de participação e login único Google/Apple.",
        highlights: [
          "Salas de voz e vídeo para múltiplos participantes com Agora WebRTC SFU",
          "Autenticação unificada Google e Apple SSO com Firebase Authentication",
          "Status de presença em tempo real, visualizador sonoro e moderação de salas",
          "Gerenciamento de estado de alta performance com Riverpod e GoRouter",
        ],
      },
      medroof: {
        role: "Engenheiro Mobile Principal • Telemedicina & Spa",
        summary:
          "Aplicativo móvel completo de telemedicina e bem-estar que conecta pacientes a médicos credenciados para consultas de vídeo ao vivo via Agora WebRTC, receitas digitais e agendamento de spa e hidratação IV.",
        problem:
          "Pacientes enfrentam longas filas em consultórios e registros dispersos ao buscar teleconsultas rápidas ou agendar sessões de bem-estar e terapia IV.",
        solution:
          "Engenharia de aplicativo multiplataforma seguro com telemedicina de áudio e vídeo de baixa latência via Agora WebRTC, prontuários compatíveis com HIPAA, agendamento interativo de spa e pagamentos digitais integrados.",
        highlights: [
          "Consultas de telemedicina em áudio e vídeo de alta definição via Agora WebRTC com médicos certificados",
          "Prescrições eletrônicas seguras em conformidade com HIPAA e histórico médico digital",
          "Agendamento sob demanda de tratamentos de spa, hidratação venosa e estética com calendário interativo",
          "Pagamento seguro integrado, lembretes automáticos de consultas e chat direto com o médico",
        ],
      },
      "souvenir-store": {
        role: "Desenvolvedor Mobile Full Stack • E-Commerce",
        summary:
          "Aplicativo móvel premium para iOS dedicado a lembranças personalizadas e presentes exclusivos com checkout Stripe e rastreamento em tempo real.",
        problem:
          "Abandono frequente de compras em navegadores móveis durante a customização de produtos e pagamento com cartões bancários internacionais.",
        solution:
          "Desenvolvimento em React Native iOS com SDK nativo do Stripe, animações de embalagem para presente e carrinho persistente com Redux Toolkit.",
        highlights: [
          "Navegação fluida pelo catálogo com pesquisa instantânea de produtos",
          "Integração do SDK Stripe com cartões de crédito e carteiras digitais",
          "Sincronização offline contínua de carrinho e lista de desejos",
          "100% alinhado com as diretrizes da Apple e requisitos de privacidade",
        ],
      },
      propermech: {
        role: "Desenvolvedor React Native Principal • 4 Meses",
        summary:
          "Plataforma automotiva completa para donos de veículos gerenciarem histórico de manutenção, encontrar mecânicos credenciados e acompanhar serviços ao vivo.",
        problem:
          "Dificuldade de comparar preços justos de conserto e falta de transparência sobre o andamento dos reparos em tempo real.",
        solution:
          "Marketplace React Native com sincronização contínua no Firestore, login único Apple/Google e alertas push em segundo plano via FCM.",
        highlights: [
          "Sincronização em tempo real no Firestore para avisos rápidos de status",
          "Envio de fotos da inspeção do veículo usando a câmera do aparelho",
          "Login integrado com Google e Apple com desbloqueio biométrico",
          "Navegação ágil desenvolvida com React Navigation e estado no Redux",
        ],
      },
      "propermech-pro": {
        role: "Desenvolvedor Mobile e IA • Gestão de Campo",
        summary:
          "Aplicativo profissional para mecânicos e oficinas gerenciarem despachos de serviços, cotação de peças e relatórios gerados por IA.",
        problem:
          "Técnicos perdiam horas elaborando orçamentos manuais repetitivos, atrasando o fluxo de atendimento da oficina.",
        solution:
          "Motor de orçamentos com IA via Firebase Cloud Functions que gera ordens de serviço e listas de reposição em questão de segundos.",
        highlights: [
          "Assistente de IA Cloud Functions para geração de laudos e orçamentos",
          "Fila diária de chamados para mecânicos com rota e aceitação em um toque",
          "Controle de estoque sincronizado e cálculo de mão de obra automatizado",
          "Funcionamento offline completo com sincronização imediata pós-conexão",
        ],
      },
      tapwars: {
        role: "Criador e Desenvolvedor Principal • Jogo a 60 FPS",
        summary:
          "Jogo móvel de reflexos 1v1 fluido a 60 FPS com torneios multijugador em tempo real, temas visuais dinâmicos e sincronização instantânea via Supabase.",
        problem:
          "Jogos competitivos de reflexo sofrem com atrasos e travamentos em redes móveis de internet.",
        solution:
          "Microanimações a 60 fps na thread de UI nativa com Reanimated 3 e canais websocket Supabase com latência inferior a 80 ms.",
        highlights: [
          "Animações suaves a 60 fps desenvolvidas com Reanimated 3 e gestos nativos",
          "Canais de comunicação Supabase Realtime para disputas e placares globais",
          "Troca interativa de temas visuais com efeitos de transição dinâmicos",
          "Registro de conquistas mesmo sem sinal, atualizado na nuvem ao reconectar",
        ],
      },
      "activity-maps": {
        role: "Arquiteto Mobile Principal • Geolocalização",
        summary:
          "Aplicativo de descoberta de eventos e locais com mapas interativos, reservas em tempo real e check-in com leitor de código de barras.",
        problem:
          "Falta de um mapa centralizado para descobrir encontros comunitários e reservar ingressos sem complicação.",
        solution:
          "Agrupamento de marcações com Google Maps SDK, GPS de alta precisão e validação rápida por leitura de ingressos digitais.",
        highlights: [
          "Mapeamento interativo no Google Maps com busca por raio de distância GPS",
          "Acesso biométrico seguro com FaceID e impressão digital",
          "Leitor de QR Code e código de barras integrado para portaria de eventos",
          "Gestão de planos e ingressos com faturamento digital imediato",
        ],
      },
      savorconnect: {
        role: "Desenvolvedor de Aplicativos Mobile • Delivery",
        summary:
          "Aplicativo de delivery de refeições com rastreamento GPS de entregadores em tempo real, personalização de pratos e pagamento rápido via Stripe.",
        problem:
          "Clientes exigiam ver a rota do entregador ao vivo e demandavam um fluxo de compra direto e sem etapas confusas.",
        solution:
          "Acompanhamento ao vivo de entregadores no mapa, integração com o SDK do Stripe e fluxo de fechamento em apenas 3 toques.",
        highlights: [
          "Google Maps API para cálculo de raio de atendimento e rota dos entregadores",
          "Checkout completo no Stripe aceitando cartões, Apple Pay e Google Pay",
          "Personalização de adicionais, combos e filtros para restrições alimentares",
          "Alertas push avisando o preparo do prato, saída do motoboy e chegada",
        ],
      },
      vcrow: {
        role: "Desenvolvedor Full Stack Principal • EdTech",
        summary:
          "Ecossistema escolar de portal duplo conectando pais e colégios com relatórios de desempenho, controle parental de dispositivos e simulados.",
        problem:
          "Pais tinham dificuldade para acompanhar a evolução real dos filhos e controlar o tempo em frente às telas durante os estudos.",
        solution:
          "Estrutura com acessos específicos para responsáveis e professores com gráficos dinâmicos alimentados pelo Firestore.",
        highlights: [
          "Acessos separados para coordenação pedagógica e famílias com regras próprias",
          "Gráficos interativos para acompanhamento de rendimento por disciplina",
          "Liberação de cadernos de questões digitais com desbloqueio gradual",
          "Regras de pausa de uso do aparelho e alertas de horário de estudo",
        ],
      },
    },
  },

  // ────────────────────────────── CHINESE ──────────────────────────────
  zh: {
    nav: {
      home: "首页",
      services: "业务范畴",
      blueprints: "技术方案",
      projects: "实战案例",
      estimator: "成本测算",
      pricing: "服务定价",
      about: "关于专家",
      faq: "常见问题",
      contact: "即刻联络",
      letsTalk: "WhatsApp 直联",
      availableForHire: "接受雇佣中",
      orderApp: "即刻定制应用",
      resume: "个人履历",
    },
    hero: {
      badge: "当前开放承接全新移动端 App 研发与 Sprint 冲刺",
      headlinePart1: "雇佣资深 React Native & Flutter 跨端移动应用全栈工程师。",
      headlinePart2: "极致 60FPS 流畅体验。",
      subheadline:
        "为初创公司与商业团队架构高成熟度 iOS & Android 双端应用及商业 MVP。从 Figma 原型到 30 天内通过 App Store 与 Google Play 官方上架审核 — 搭载满帧 60fps 原生手势微动效、Firebase/Supabase 云端高可用架构，杜绝外包中介溢价。",
      exploreApps: "浏览已上线应用",
      estimateCost: "在线测算项目成本",
      appsShipped: "已上线商业应用",
      experience: "专业移动端开发年限",
      clientRating: "全平台客户五星好评",
      storePass: "应用商店过审率",
      tabs: {
        talk2learn: "Talk2Learn",
        quitPuffing: "Quit Puffing",
        properMech: "ProperMech",
        activityMaps: "Activity Maps",
      },
    },
    services: {
      badge: "02 / 核心研发能力",
      title: "移动全栈专业技术服务",
      subtitle:
        "贯穿全生命周期的移动与 Web 端研发工程 — 从软件架构选型、代码编写到双端商店发布审核。用高性能代码驱动用户留存、高并发负载与初创商业成功。",
    },
    whyMe: {
      badge: "03 / 独特竞争优势",
      title: "为何选择与我深度合作",
      subtitle:
        "高标准工程实施，将像素级保真设计、60fps 满帧性能与可无缝扩展的企业级微服务云架构融为一体。",
    },
    projects: {
      badge: "01 / 交付产品与实战案例",
      title: "精选应用作品集",
      subtitle:
        "面向全球初创企业与商业客户交付的高并发移动应用 — 均已上线 App Store、Google Play 及企业级独立分发。",
      viewCaseStudy: "查看实战案例",
      categories: {
        all: "全部项目",
        liveInStores: "双端商店上线",
        mobileApp: "移动应用",
        webApp: "Web 平台",
      },
      badges: {
        mobileApp: "移动端 App",
        webApp: "Web 应用程序",
        iosAndroidLive: "App Store & Google Play 均已上线",
        appStoreLive: "Apple App Store 上线",
        googlePlayLive: "Google Play 上线",
        livePlatform: "在线平台运行中",
        productionApp: "商用生产版本",
        ios: "iOS",
        android: "Android",
        live: "在线演示",
      },
      modal: {
        problem: "核心业务与技术痛点",
        solution: "工程架构解决方案",
        highlights: "核心技术亮点与工程突破",
        metrics: "技术规格与性能指标",
        close: "关闭案例",
        visitLive: "访问在线应用平台",
        viewAppStore: "前往 Apple App Store",
        viewPlayStore: "前往 Google Play Store",
      },
    },
    estimator: {
      badge: "04 / 透明成本与周期测算",
      title: "移动项目即时成本测算器",
      subtitle:
        "选择您的技术栈架构、硬件集成需求及当前设计稿完成度，获取即时透明的工期与预算评估。",
      realTime: "实时预算评估",
      investment: "预估总研发投入",
      timeline: "预估交付周期",
      discussWhatsApp: "通过 WhatsApp 详聊方案细节",
      sendEmail: "通过 Email 发送项目需求清单",
    },
    pricing: {
      badge: "05 / 合作模式",
      title: "透明一口价定价体系",
      subtitle:
        "清晰明了、预算可控的合作机制。绝无隐形加价与中介层层抽成 — 由资深全栈工程师直接沟通，每周交付可测试版本。",
      unblockPill: "需要紧急技术攻坚与疑难问题排查？即刻预约技术咨询 →",
    },
    about: {
      badge: "06 / 工程师档案",
      title: "关于 MUHAMMAD SAAD",
      subtitle:
        "资深全栈跨端移动架构师，拥有 10+ 款在 iOS 和 Android 官方应用商店成功上线运营的高并发商业产品。",
      downloadResume: "下载完整简历 (.PDF)",
    },
    faq: {
      badge: "09 / 常见咨询",
      title: "常见疑问解答",
      subtitle:
        "涵盖研发交付周期、100% 源码知识产权归属、应用商店过审兜底保证与合作保障流程。",
    },
    contact: {
      badge: "随时在线响应",
      title: "启动您的下一款卓越移动应用",
      subtitle:
        "无论您是探索中的初创团队还是寻求业务升级的成熟企业，欢迎直接通过 WhatsApp 即刻畅聊，或提交您的需求要点。",
      chatWhatsApp: "WhatsApp 极速联络 (直通工程师)",
      sendBrief: "提交项目需求表单",
    },
    projectsData: {
      "quit-puffing": {
        role: "独立制作人 & 核心架构师 (自研产品) • 持续运营",
        summary:
          "基于 Flutter 研发的戒烟激励式互动应用，融合正向行为心理学、拟真游戏化机制与医学验证的生物体能恢复阶段跟踪。",
        problem:
          "戒烟者在突发烟瘾发作时常因缺乏即时多巴胺替代与即刻反馈机制，导致复吸率居高不下。",
        solution:
          "采用 Flutter Material 3 体系打造零延迟无烟时长看板、资金节约复利统计、5分钟紧急 SOS 烟瘾击溃挑战与纯本地离线虚拟 XP 成就经济。",
        highlights: [
          "实时追踪戒烟累计时长、避免吸烟支数及节约财务支出",
          "科学对标的生物体质指标修复全周期阶段展示",
          "5分钟即时 SOS 烟瘾转移对抗互动模块与轻度心理游戏",
          "虚拟 XP 成就徽章奖励体系与等级解锁机制",
          "纯本地 Local-First 隐私架构，零数据外泄且全离线可用",
        ],
      },
      talk2learn: {
        role: "首席跨端移动端工程师 • 持续迭代中",
        summary:
          "高并发跨平台实时语伴语流互动系统，搭载多路超低延迟音视频即时通话连麦技术与 Agora WebRTC SFU 媒体服务器群。",
        problem:
          "外语习得者迫切需要随到随聊的超低延迟跨国语音交流空间，告别繁重呆板的日历日程预约。",
        solution:
          "在 Flutter 中深度定制 Agora WebRTC SFU 级多人语音流分发管道与 Riverpod 响应式状态流，集成麦序调度、举手连麦、声纹动态波形可视化与 Apple/Google 双端一键免密登录。",
        highlights: [
          "基于 Agora WebRTC SFU 架构落地高并发多人多语言语音视频交互空间",
          "打通 Google 与 Apple 原生 SSO 极速授权与 Firebase Auth 鉴权通道",
          "全链路实时在线状态监测、发言者动效波形与多人房管控制台",
          "Riverpod 极速响应式状态机结合严谨 GoRouter 页面路由流转",
        ],
      },
      medroof: {
        role: "首席移动端研发工程师 • 远程医疗与健康水疗",
        summary:
          "一站式按需远程医疗与健康养生移动应用，连接患者与认证执业医生，支持基于 Agora WebRTC 的高清实时音视频问诊、电子处方开具以及水疗和静脉补液预约。",
        problem:
          "患者在寻求快速线上诊疗或预约线下水疗护理时，常面临就诊排队时间漫长、预约流程繁琐及健康档案割裂的痛点。",
        solution:
          "研发跨平台高可用移动应用，集成低延迟 Agora WebRTC 音视频问诊流、符合 HIPAA 规范的数字化电子病历系统、动态日程预约日历及安全在线支付体系。",
        highlights: [
          "基于 Agora WebRTC 的高清低延迟实时音视频远程医疗会诊系统",
          "符合 HIPAA 规范的加密电子处方、病历档案与患者数字化健康档案",
          "按需水疗护理、静脉补液理疗与健康项目的交互式动态日历预约",
          "集成安全在线支付网关、自动化就诊提醒与实时医患在线即时通讯",
        ],
      },
      "souvenir-store": {
        role: "全栈跨端移动开发者 • 国际电商平台",
        summary:
          "iOS 端高端定制纪念品与礼品跨境电商平台，支持商品实时定制刻字、Stripe 国际信用卡极速结算与全链路物流进度追踪。",
        problem:
          "传统移动网页端在处理个性化礼品包装定制与跨国银行卡收单时掉单率与跳出率极高。",
        solution:
          "基于 React Native 开发 iOS 客户端，深度集成原生 Stripe SDK、礼盒包装 3D 动效渲染及基于 Redux Toolkit 的本地离线购物车缓存。",
        highlights: [
          "毫秒级商品全文检索引擎与极简顺滑的类目浏览动效",
          "无缝接入 Stripe 支付安全 SDK，全面支持国际主流信用卡与 Apple Pay",
          "多终端跨会话购物车持久化与愿望清单双向同步",
          "严格符合 Apple App Store 人机交互设计规范 (HIG) 及隐私数据保护条例",
        ],
      },
      propermech: {
        role: "资深 React Native 全栈架构师 • 4个月周期",
        summary:
          "全能型汽车维保综合生态移动平台，车主可一键查询附近认证技师、上传故障视频获取报价并实时监测现场作业工单。",
        problem:
          "车主面临汽修定损价格不透明、技师资质难以溯源以及车辆进厂后施工进度无法实时感知的痛点。",
        solution:
          "打造 React Native 双边平台，依托 Firestore 数据库实时数据管道、双端第三方免密授权、车载故障图片视频上传及后台 FCM 极速静默推送。",
        highlights: [
          "基于 Firebase Firestore 的毫秒级订单状态双向流转与实时推送",
          "原生级集成相机与相册高保真汽车定损照片即时上传组件",
          "集成 Google 与 Apple 原生 SSO 联合登录与生物特征指纹/面容加固",
          "基于 React Navigation 与 Redux 的极致页面交互与低耗电优化",
        ],
      },
      "propermech-pro": {
        role: "核心移动与 AI 算法工程师 • 现场派工系统",
        summary:
          "面向汽修技师与大型工坊打造的调度生产力应用，涵盖排班接单、配件库存联动与基于 Firebase Cloud 的 AI 智能维保定损系统。",
        problem:
          "技师耗费大量工时手工编制繁复冗长的工单报价，导致现场调度流转缓慢且人为误差率高。",
        solution:
          "通过 Firebase Cloud Functions 架构自研 AI 定损生成器，数秒内根据故障描述智能生成完整工单、耗材配件明细与工时估算。",
        highlights: [
          "集成基于 Cloud Functions 的 AI 智能定损模块与配件自动化成本核算",
          "技师当日派工智能队列流，支持一键接单与高德/谷歌导航动态路线规划",
          "云端秒级配件库存实时校验与自动核算账单报表生成引擎",
          "健全的离线断网作业机制，待信号恢复后自动发起原子性补录同步",
        ],
      },
      tapwars: {
        role: "独立制作人 & 核心研发 • 60FPS 竞技游戏",
        summary:
          "超快节奏 1v1 手速竞技竞技手游，原生 60FPS 满帧微动画引擎，搭载 Supabase Realtime 毫秒级全球积分天梯榜单与赛事实时对决。",
        problem:
          "移动端竞技游戏常因移动蜂窝网络波动产生输入卡顿、手势迟滞与比分跨屏同步延迟。",
        solution:
          "全面采用 Reanimated 3 在原生 UI 线程驱动每秒 60 帧微交互，同时利用 Supabase Realtime 双工长连接将比分网络广播延迟压至 80ms 以内。",
        highlights: [
          "借助 Reanimated 3 与 Gesture Handler 打造原生极速跟手的 60fps 震颤动效",
          "采用 Supabase Realtime 广播频道实现百毫秒级全球玩家实时对决与排行榜",
          "支持昼夜双主题动态平滑过渡微着色器效果",
          "离线成就数据持久化存储，对局结束后即刻自动向云端校验同步",
        ],
      },
      "activity-maps": {
        role: "首席移动端架构师 • LBS 高精定位地图系统",
        summary:
          "高精 LBS 本地吃喝玩乐探索与活动票务平台，融合动态聚合地图图层、在线预约及离线二维码核销验票引擎。",
        problem:
          "同城探索用户难以在常规地图上快速发现原汁原味的小众社群聚会，且缺乏在地图内一键闭环锁位购票的顺畅体验。",
        solution:
          "将 Google Maps SDK 动态标记聚合算法与手机高精 GPS、FaceID 生物识别鉴权及离线扫码凭证相结合。",
        highlights: [
          "Google Maps 海量商户与活动图钉智能聚簇及动态半径雷达探测",
          "集成 FaceID 与指纹识别生物特征鉴权，保障大额预约交易支付安全",
          "自研毫秒级高灵敏度 QR 二维码与一维条码验票核销扫描引擎",
          "无缝支持数字会员权益结算与全自动电子凭证电子收据即时签发",
        ],
      },
      savorconnect: {
        role: "移动端全栈工程师 • 智慧生鲜美食外送",
        summary:
          "高品质外卖即时送餐平台，支持菜品定制加料、配送员高频 GPS 地图轨迹动态流以及 Stripe 移动支付收银台。",
        problem:
          "消费者对骑手在地图上的实时行驶轨迹与精准预计送达时间要求严苛，且反感步骤冗长的多步结账操作。",
        solution:
          "开发骑手实时 GPS 高频打点算法结合平滑补帧平移标记，接入 Stripe 移动收银 SDK，打造仅需 3 步的极简结算漏斗。",
        highlights: [
          "集成 Google Maps API 实现餐厅电子围栏与骑手路线平滑补帧轨迹追踪",
          "全功能集成 Stripe 支付网关，完美兼容全球主流信用卡及 Apple Pay",
          "灵活定制餐品多规格选配、个性化配料组合及饮食过敏原智能过滤",
          "全链路状态 FCM 消息推送：后厨出餐、骑手取单与即将送达通知",
        ],
      },
      vcrow: {
        role: "全栈主架构师 • 智慧教育双端互联平台",
        summary:
          "家校互联双端智能教育生态平台，内置学生阶段化学情分析图表、设备网瘾防沉迷策略控制与在线智能题库刷题模块。",
        problem:
          "家长对孩子阶段性学业成长曲线缺乏客观量化数据支撑，同时在设备娱乐管控与自律刷题引导上面临痛点。",
        solution:
          "打造打通教师端与家长端的跨端互联中枢，教师布置测评秒级下发至学生终端，家长通过动态图表实时掌握知识薄弱项。",
        highlights: [
          "教师与家长双重身份架构，具备精细的 RBAC 角色权限与班级管理体系",
          "交互式学科能力图谱，直观呈现各学科阶段性提分动态与错题分布",
          "应用内试卷题库购买与根据年级进度智能阶梯式解锁课程题组",
          "支持远程设定设备免打扰学习时段与基于 Firebase 的学习计划任务提醒",
        ],
      },
    },
  },
};

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (code: LanguageCode) => void;
  t: Translations;
  languages: Language[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [langCode, setLangCode] = useState<LanguageCode>("en");

  // Load from localStorage or browser preferences
  useEffect(() => {
    const saved = localStorage.getItem("preferred_lang") as LanguageCode;
    if (saved && ["en", "fr", "es", "pt", "zh"].includes(saved)) {
      setLangCode(saved);
    }
  }, []);

  const setLanguage = (code: LanguageCode) => {
    setLangCode(code);
    localStorage.setItem("preferred_lang", code);
  };

  const currentLanguage = languages.find((l) => l.code === langCode) || languages[0];
  const t = translations[langCode] || translations.en;

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
