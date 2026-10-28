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
    all: string;
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
}

const translations: Record<LanguageCode, Translations> = {
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
      availableForHire: "Available for Hire",
    },
    hero: {
      badge: "Available for New Mobile Projects",
      headlinePart1: "Hire Senior React Native & Flutter App Developer.",
      headlinePart2: "Engineered for 60FPS Velocity.",
      subheadline:
        "Architecting market-ready iOS & Android mobile applications and startup MVPs. From Figma UI to App Store & Google Play approval in 30 days — with buttery 60fps animations, Firebase/Supabase cloud backends, and zero agency overhead.",
      exploreApps: "Explore Shipped Apps",
      estimateCost: "Estimate Project Cost",
      appsShipped: "Production Apps",
      experience: "Years Experience",
      clientRating: "Client Rating",
      storePass: "Store Pass Rate",
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
      all: "All Projects (8)",
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
      badge: "06 / Meet The Engineer",
      title: "DEDICATED SENIOR MOBILE APP SPECIALIST",
      subtitle:
        "Crafting market-ready cross-platform applications at the intersection of design fidelity, scalable software architecture, and cloud engineering.",
      downloadResume: "Download Resume",
    },
    faq: {
      badge: "09 / Client FAQ",
      title: "FREQUENTLY ASKED QUESTIONS",
      subtitle:
        "Everything you need to know about working together, timelines, costs, App Store approvals, and code ownership.",
    },
    contact: {
      badge: "Available Now",
      title: "LET'S BUILD YOUR APPLICATION",
      subtitle:
        "Available for mobile contracts, full MVP development, App Store publishing, and dedicated engineering. Response time under 2 hours.",
      chatWhatsApp: "Instant Chat on WhatsApp",
      sendBrief: "Send Direct Project Brief",
    },
  },

  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      blueprints: "Modèles",
      projects: "Réalisations",
      estimator: "Estimateur",
      pricing: "Tarifs",
      about: "À Propos",
      faq: "FAQ",
      contact: "Contact",
      letsTalk: "WhatsApp Direct",
      availableForHire: "Disponible pour Mission",
    },
    hero: {
      badge: "Disponible pour Nouveaux Projets Mobiles",
      headlinePart1: "Développeur Senior React Native & Flutter.",
      headlinePart2: "Conçu pour une Vélocité à 60 FPS.",
      subheadline:
        "Conception d'applications mobiles iOS et Android prêtes pour le marché et de MVP pour startups. De la maquette Figma à l'approbation sur l'App Store en 30 jours — avec animations fluides 60fps et backends cloud Firebase/Supabase.",
      exploreApps: "Découvrir les Applications",
      estimateCost: "Estimer le Projet",
      appsShipped: "Apps Déployées",
      experience: "Ans d'Expérience",
      clientRating: "Note Clients",
      storePass: "Taux de Validation",
    },
    services: {
      badge: "02 / Expertise Complète",
      title: "SERVICES D'INGÉNIERIE MOBILE",
      subtitle:
        "Conception complète d'applications mobiles et web — de l'architecture logicielle jusqu'à la publication sur les stores. Des solutions performantes conçues pour la fidélisation des utilisateurs et la mise à l'échelle.",
    },
    whyMe: {
      badge: "03 / Avantage Concurrentiel",
      title: "POURQUOI LES CLIENTS CHOISISSENT DE TRAVAILLER AVEC MOI",
      subtitle:
        "Une ingénierie logicielle mobile d'élite alliant fidélité graphique au pixel près, performances 60fps et architecture professionnelle hautement scalable.",
    },
    projects: {
      badge: "01 / Applications Livrées & Études de Cas",
      title: "RÉALISATIONS MAJEURES",
      subtitle:
        "Applications mobiles prêtes pour la production conçues pour des startups et des entreprises mondiales — disponibles sur l'App Store, Google Play et en déploiement entreprise.",
      viewCaseStudy: "Étude de Cas",
      all: "Tous les Projets (8)",
    },
    estimator: {
      badge: "04 / Tarification Transparente & Portée",
      title: "ESTIMATEUR DE PROJET MOBILE INSTANTANÉ",
      subtitle:
        "Sélectionnez votre architecture cible, les fonctionnalités matérielles souhaitées et l'état de votre design pour obtenir une estimation immédiate des coûts et délais.",
      realTime: "Estimation en Temps Réel",
      investment: "Investissement Estimé",
      timeline: "Délai Estimé",
      discussWhatsApp: "Discuter de l'Estimation sur WhatsApp",
      sendEmail: "Envoyer le Brief par Email",
    },
    pricing: {
      badge: "05 / Modèles de Collaboration",
      title: "TARIFICATION FIXE & TRANSPARENTE",
      subtitle:
        "Des modes de collaboration simples et prévisibles. Aucune facture surprise, aucun surcoût d'agence — seulement une ingénierie senior directe avec des versions de test hebdomadaires.",
      unblockPill: "Besoin d'un déblocage rapide ? Réservez sur WhatsApp →",
    },
    about: {
      badge: "06 / L'Ingénieur",
      title: "SPÉCIALISTE MOBILE SENIOR DÉDIÉ",
      subtitle:
        "Conception d'applications multiplateformes prêtes pour le marché, au carrefour de l'excellence visuelle, d'une architecture robuste et du cloud.",
      downloadResume: "Télécharger le CV",
    },
    faq: {
      badge: "09 / FAQ Clients",
      title: "QUESTIONS FRÉQUEMMENT POSÉES",
      subtitle:
        "Tout ce que vous devez savoir sur notre collaboration, les délais, les coûts, l'approbation sur les stores et la propriété du code.",
    },
    contact: {
      badge: "Disponible Immédiatement",
      title: "CONSTRUISONS VOTRE APPLICATION",
      subtitle:
        "Disponible pour missions de développement mobile, création complète de MVP, publication sur les stores et accompagnement d'ingénierie dédié. Réponse sous 2 heures.",
      chatWhatsApp: "Discuter sur WhatsApp",
      sendBrief: "Envoyer le Brief de Projet",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      blueprints: "Plantillas",
      projects: "Proyectos",
      estimator: "Calculadora",
      pricing: "Precios",
      about: "Sobre Mí",
      faq: "FAQ",
      contact: "Contacto",
      letsTalk: "WhatsApp Directo",
      availableForHire: "Disponible para Proyectos",
    },
    hero: {
      badge: "Disponible para Nuevos Proyectos Móviles",
      headlinePart1: "Desarrollador Senior React Native y Flutter.",
      headlinePart2: "Diseñado para Velocidad a 60 FPS.",
      subheadline:
        "Arquitectura de aplicaciones móviles iOS y Android listas para el mercado y MVPs para startups. De Figma a la aprobación en App Store en 30 días — con animaciones fluidas a 60fps y backends cloud Firebase/Supabase.",
      exploreApps: "Ver Aplicaciones",
      estimateCost: "Calcular Presupuesto",
      appsShipped: "Apps Publicadas",
      experience: "Años de Experiencia",
      clientRating: "Calificación Clientes",
      storePass: "Aprobación Tiendas",
    },
    services: {
      badge: "02 / Capacidades Integrales",
      title: "SERVICIOS DE DESARROLLO DE APPS",
      subtitle:
        "Ingeniería móvil y web de ciclo completo — desde la arquitectura del producto hasta la publicación en tiendas. Software de alto rendimiento diseñado para la retención de usuarios y el éxito de startups.",
    },
    whyMe: {
      badge: "03 / Ventaja Competitiva",
      title: "POR QUÉ LOS CLIENTES ELIGEN TRABAJAR CONMIGO",
      subtitle:
        "Ingeniería de software móvil de alto impacto que combina precisión visual al pixel, rendimiento a 60fps y arquitectura profesional que escala con facilidad.",
    },
    projects: {
      badge: "01 / Productos Publicados y Estudios de Caso",
      title: "APLICACIONES DESTACADAS",
      subtitle:
        "Aplicaciones móviles listas para producción desarrolladas para startups y clientes globales — publicadas en App Store, Google Play y entornos corporativos.",
      viewCaseStudy: "Ver Estudio de Caso",
      all: "Todos los Proyectos (8)",
    },
    estimator: {
      badge: "04 / Precios Claros y Alcance",
      title: "CALCULADORA DE PROYECTO MÓVIL AL INSTANTE",
      subtitle:
        "Seleccione su arquitectura objetivo, funciones deseadas y estado del diseño para obtener un presupuesto y plazo instantáneos para su desarrollo móvil.",
      realTime: "Estimación en Tiempo Real",
      investment: "Inversión Estimada",
      timeline: "Plazo Estimado",
      discussWhatsApp: "Conversar Presupuesto en WhatsApp",
      sendEmail: "Enviar Propuesta por Email",
    },
    pricing: {
      badge: "05 / Modelos de Trabajo",
      title: "PRECIOS FIJOS Y TRANSPARENTES",
      subtitle:
        "Formas de colaboración sencillas y predecibles. Sin costes ocultos, sin comisiones de agencia — contacto directo con ingeniero senior y versiones semanales de prueba.",
      unblockPill: "¿Necesita ayuda urgente? Reserve consulta por WhatsApp →",
    },
    about: {
      badge: "06 / Conoce al Ingeniero",
      title: "ESPECIALISTA SENIOR EN APLICACIONES MÓVILES",
      subtitle:
        "Desarrollo de aplicaciones multiplataforma de vanguardia, combinando precisión visual, arquitectura escalable e ingeniería cloud.",
      downloadResume: "Descargar Currículum",
    },
    faq: {
      badge: "09 / Preguntas Frecuentes",
      title: "PREGUNTAS FRECUENTES",
      subtitle:
        "Todo lo que necesita saber sobre plazos, costes, aprobaciones en tiendas y propiedad del código fuente.",
    },
    contact: {
      badge: "Disponible Ahora",
      title: "VAMOS A CONSTRUIR SU APLICACIÓN",
      subtitle:
        "Disponible para contratos de desarrollo móvil, creación completa de MVPs, publicación en tiendas y consultoría técnica dedicada. Respuesta en menos de 2 horas.",
      chatWhatsApp: "Chatear por WhatsApp",
      sendBrief: "Enviar Resumen del Proyecto",
    },
  },

  pt: {
    nav: {
      home: "Início",
      services: "Serviços",
      blueprints: "Modelos",
      projects: "Projetos",
      estimator: "Calculadora",
      pricing: "Preços",
      about: "Sobre",
      faq: "FAQ",
      contact: "Contato",
      letsTalk: "WhatsApp Direto",
      availableForHire: "Disponível para Projetos",
    },
    hero: {
      badge: "Disponível para Novos Projetos Mobile",
      headlinePart1: "Desenvolvedor Sênior React Native e Flutter.",
      headlinePart2: "Projetado para Velocidade a 60 FPS.",
      subheadline:
        "Arquitetando aplicativos iOS e Android prontos para o mercado e MVPs para startups. Do Figma à aprovação na App Store em 30 dias — com animações a 60fps e backends cloud Firebase/Supabase.",
      exploreApps: "Explorar Aplicativos",
      estimateCost: "Estimar Orçamento",
      appsShipped: "Apps em Produção",
      experience: "Anos de Experiência",
      clientRating: "Avaliação Clientes",
      storePass: "Taxa de Aprovação",
    },
    services: {
      badge: "02 / Capacidades Completas",
      title: "SERVIÇOS ESPECIALIZADOS EM APPS",
      subtitle:
        "Engenharia completa mobile e web — da arquitetura até a publicação nas lojas. Software de alta performance projetado para retenção e crescimento.",
    },
    whyMe: {
      badge: "03 / Diferencial Competitivo",
      title: "POR QUE OS CLIENTES ESCOLHEM TRABALHAR COMIGO",
      subtitle:
        "Engenharia mobile de alto impacto combinando fidelidade visual ao pixel, performance a 60fps e arquitetura corporativa escalável.",
    },
    projects: {
      badge: "01 / Projetos Lançados e Estudos de Caso",
      title: "APLICATIVOS EM DESTAQUE",
      subtitle:
        "Aplicativos mobile prontos para produção criados para startups e empresas globais — com lançamentos na App Store e Google Play.",
      viewCaseStudy: "Ver Estudo de Caso",
      all: "Todos os Projetos (8)",
    },
    estimator: {
      badge: "04 / Preços Transparentes & Escopo",
      title: "CALCULADORA DE PROJETOS MOBILE EM TEMPO REAL",
      subtitle:
        "Selecione sua arquitetura alvo, funcionalidades desejadas e status do design para obter uma estimativa imediata de custo e prazo.",
      realTime: "Estimativa em Tempo Real",
      investment: "Investimento Estimado",
      timeline: "Prazo Estimado",
      discussWhatsApp: "Conversar no WhatsApp",
      sendEmail: "Enviar Briefing por Email",
    },
    pricing: {
      badge: "05 / Modelos de Contratação",
      title: "PREÇOS FIXOS E TRANSPARENTES",
      subtitle:
        "Formas de colaboração simples e previsíveis. Sem faturas surpresa, sem margens infladas de agência — apenas engenharia sênior direta.",
      unblockPill: "Precisa de suporte rápido? Fale no WhatsApp →",
    },
    about: {
      badge: "06 / Conheça o Engenheiro",
      title: "ESPECIALISTA MOBILE SÊNIOR DEDICADO",
      subtitle:
        "Desenvolvimento de aplicações multiplataforma de ponta, combinando precisão visual, arquitetura escalável e engenharia cloud.",
      downloadResume: "Baixar Currículo",
    },
    faq: {
      badge: "09 / Perguntas Frequentes",
      title: "PERGUNTAS FREQUENTES",
      subtitle:
        "Tudo o que você precisa saber sobre prazos, custos, aprovações nas lojas e propriedade do código.",
    },
    contact: {
      badge: "Disponível Agora",
      title: "VAMOS CONSTRUIR SEU APLICATIVO",
      subtitle:
        "Disponível para contratos de desenvolvimento mobile, criação de MVPs, publicação nas lojas e consultoria técnica dedicada. Resposta em menos de 2 horas.",
      chatWhatsApp: "Chamar no WhatsApp",
      sendBrief: "Enviar Proposta de Projeto",
    },
  },

  zh: {
    nav: {
      home: "首页",
      services: "服务体系",
      blueprints: "商业蓝图",
      projects: "实战案例",
      estimator: "费用评估",
      pricing: "明细报价",
      about: "关于专家",
      faq: "常见问答",
      contact: "立即联系",
      letsTalk: "微信/WhatsApp 对接",
      availableForHire: "随时可承接新项目",
    },
    hero: {
      badge: "随时可承接移动端研发项目",
      headlinePart1: "资深 React Native 与 Flutter 移动端开发工程师。",
      headlinePart2: "为 60FPS 极速性能而生。",
      subheadline:
        "专为初创团队打造商业级 iOS 与 Android 跨平台移动应用及 MVP。从 Figma 原型到应用商店审核通过最快 30 天交付 — 60fps 丝滑动画，Firebase/Supabase 云端架构，杜绝外包溢价。",
      exploreApps: "查看实战商业作品",
      estimateCost: "即时评估研发费用",
      appsShipped: "已上线商业应用",
      experience: "年移动研发经验",
      clientRating: "全球客户好评",
      storePass: "商店过审通过率",
    },
    services: {
      badge: "02 / 端到端全链路交付能力",
      title: "专业级移动端工程服务",
      subtitle:
        "提供全生命周期的移动端与 Web 工程开发 — 从产品底层架构到应用商店发布上架。打造高留存、强扩展、助力初创成功的优质软件。",
    },
    whyMe: {
      badge: "03 / 核心竞争优势",
      title: "为什么全球客户选择与我合作",
      subtitle:
        "融合像素级还原度、60fps 极限性能与稳健企业级架构的高标准移动端工程开发，助力产品快速起量。",
    },
    projects: {
      badge: "01 / 已上线作品与案例研究",
      title: "精选实战商业项目",
      subtitle:
        "为全球初创团队及企业量身打造的生产级移动应用 — 均已成功发布在 App Store、Google Play 或投入企业级实际应用。",
      viewCaseStudy: "查看案例详情",
      all: "全部实战项目 (8)",
    },
    estimator: {
      badge: "04 / 透明报价与研发范围",
      title: "移动项目成本即时评估器",
      subtitle:
        "选择您的目标应用架构、所需的硬件功能以及当前的设计完备度，即时获取定制化移动端开发的周期与预估投资。",
      realTime: "实时即时估算",
      investment: "预估研发预算",
      timeline: "预计交付周期",
      discussWhatsApp: "通过 WhatsApp 详聊方案",
      sendEmail: "通过邮件发送需求文档",
    },
    pricing: {
      badge: "05 / 合作模式与方案",
      title: "公开透明的固定明细报价",
      subtitle:
        "清晰、可预期的合作方式。没有突发隐形账单，杜绝外包中介溢价 — 资深工程师直接对接，每周提供真实设备测试安装包。",
      unblockPill: "需要紧急攻坚或架构评审？立即在 WhatsApp 预约咨询 →",
    },
    about: {
      badge: "06 / 了解工程师",
      title: "专注卓越的资深移动开发专家",
      subtitle:
        "立足于高保真设计还原、高可靠软件架构与云端工程的交汇点，精心打磨商业级跨平台移动应用。",
      downloadResume: "下载技术简历 (PDF)",
    },
    faq: {
      badge: "09 / 客户常见问答",
      title: "常见问题解答",
      subtitle:
        "关于合作流程、周期安排、研发费用、应用商店过审及代码知识产权归属的所有解答。",
    },
    contact: {
      badge: "立即开放合作",
      title: "携手打造您的下一个应用",
      subtitle:
        "随时可承接移动端开发合同、全套 MVP 研发、应用商店发布及长期专属工程顾问。咨询通常在 2 小时内迅速答复。",
      chatWhatsApp: "立即开启 WhatsApp 对话",
      sendBrief: "发送项目需求简报",
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
