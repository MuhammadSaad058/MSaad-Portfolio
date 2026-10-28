import { useState } from "react";
import { Apple, Play, ExternalLink, Sparkles, ChevronRight, Check, X, Bookmark, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface Project {
  id: string;
  title: string;
  roleSubtitle: string;
  category: "all" | "liveInStores" | "mobileApp" | "webApp";
  badgeType: string;
  liveStoreType: "googlePlay" | "appStore" | "both" | "production";
  iconImage: string;
  fullImage: string;
  summary: string;
  problem: string;
  solution: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
  techStack: string[];
  appStoreUrl?: string;
  playStoreUrl?: string;
  webUrl?: string;
}

const Projects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "quit-puffing",
      title: "Quit Puffing",
      roleSubtitle: "Creator & Lead Developer (Own Product) • Ongoing",
      category: "mobileApp",
      badgeType: "Mobile App",
      liveStoreType: "googlePlay",
      iconImage: "/quit-puffing-icon.webp",
      fullImage: "/quit-puffing-screen.webp",
      summary:
        "A comprehensive, interactive Flutter application designed to help smokers overcome nicotine addiction through positive reinforcement, gamification, and evidence-based biological recovery timelines.",
      problem:
        "Individuals attempting to quit smoking often suffer from high relapse rates during sudden acute cravings, lack of immediate dopamine-replacing interventions, and absent real-time biological recovery feedback.",
      solution:
        "Architected a responsive Flutter Material 3 application featuring real-time smoke-free duration tracking, financial savings calculations, 5-minute guided SOS craving battles, and a local-first virtual XP economy with progression milestones.",
      metrics: [
        { label: "Platform", value: "Google Play" },
        { label: "Rating", value: "4.9 ★" },
        { label: "Framework", value: "Flutter & Dart" },
        { label: "State", value: "Local Storage" },
      ],
      highlights: [
        "Real-time tracking of smoke-free duration, cigarettes avoided, and financial savings",
        "Evidence-based biological recovery timelines with physical health repair stages",
        "Immediate 'SOS' interventions & 5-minute interactive craving battles",
        "Virtual XP economy with cosmetic unlocks, levels, and progression trophies",
        "Robust local-first architecture for secure, 100% private offline data persistence",
      ],
      techStack: ["Flutter", "Material 3", "Local Storage", "Gamification", "State Management"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.mubbits.quit_puffing",
      webUrl: "https://quit-puffing.netlify.app/",
    },
    {
      id: "talk2learn",
      title: "Talk2Learn",
      roleSubtitle: "Lead Mobile Engineer • Ongoing",
      category: "mobileApp",
      badgeType: "Mobile App",
      liveStoreType: "both",
      iconImage: "/talk2learn-logo.png",
      fullImage: "/talk2learn-screen.webp",
      summary:
        "High-performance cross-platform language learning platform featuring live audio/video rooms, real-time presence management, and low-latency group discussions powered by Agora WebRTC SFU.",
      problem:
        "Language learners needed a spontaneous, low-latency environment to practice conversational speaking with native speakers worldwide without the friction of scheduling formal calendar calls.",
      solution:
        "Architected an Agora WebRTC SFU multi-user streaming pipeline inside Flutter with Riverpod state management. Implemented speaker stages, hand-raising queue, active audio visualizers, and seamless Google/Apple SSO.",
      metrics: [
        { label: "Architecture", value: "Flutter & Dart" },
        { label: "Voice / Video", value: "Agora WebRTC" },
        { label: "State Engine", value: "Riverpod" },
        { label: "Rating", value: "5.0 ★" },
      ],
      highlights: [
        "Architected multi-user voice and video language rooms with Agora WebRTC SFU streaming",
        "Configured Google and Apple Single Sign-On (SSO) with Firebase Authentication",
        "Real-time user presence, active speaker indicators, and room moderation controls",
        "Low-latency Riverpod reactive state management with clean GoRouter navigation",
      ],
      techStack: ["Flutter", "Dart", "Agora WebRTC", "Firebase Firestore", "Riverpod", "GoRouter"],
      appStoreUrl: "https://apps.apple.com/ma/app/talk2learn/id6795451031",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.saadTech.talk2learn",
      webUrl: "https://talk2learn-app-landing.vercel.app/",
    },
    {
      id: "medroof",
      title: "Medroof",
      roleSubtitle: "Lead Mobile Engineer • Telemedicine & Spa",
      category: "mobileApp",
      badgeType: "Mobile App",
      liveStoreType: "both",
      iconImage: "/medroof-icon.webp",
      fullImage: "/medroof-screen.webp",
      summary:
        "Comprehensive on-demand telemedicine and wellness mobile application connecting patients with licensed healthcare providers for live Agora WebRTC consultations, digital prescriptions, and on-demand spa and IV hydration treatments.",
      problem:
        "Patients struggle with long clinic queues, cumbersome appointment booking, and fragmented records when seeking quick virtual consultations or booking in-person wellness treatments.",
      solution:
        "Engineered a secure cross-platform mobile application with low-latency Agora WebRTC video/audio telemedicine consults, HIPAA-ready patient records, interactive spa treatment scheduling, automated reminders, and instant card payments.",
      metrics: [
        { label: "Platform", value: "iOS & Android" },
        { label: "Telemedicine", value: "Agora WebRTC" },
        { label: "Security", value: "HIPAA-Ready" },
        { label: "Rating", value: "5.0 ★" },
      ],
      highlights: [
        "High-definition Agora WebRTC video & audio telemedicine consultations with certified physicians",
        "Secure HIPAA-ready electronic prescriptions, patient medical records, and digital health history",
        "On-demand spa, IV hydration therapy, and wellness appointment booking with interactive scheduling",
        "Integrated secure payment checkout, automated appointment reminders, and instant in-app clinician chat",
      ],
      techStack: ["React Native", "TypeScript", "Agora WebRTC", "Firebase", "Stripe", "REST APIs"],
      appStoreUrl: "https://apps.apple.com/es/app/medroof-telemedicine-spa/id6739805332",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.medroof&hl=en",
    },
    {
      id: "souvenir-store",
      title: "Souvenir Store",
      roleSubtitle: "Full Stack Mobile Developer • E-Commerce",
      category: "mobileApp",
      badgeType: "Mobile App",
      liveStoreType: "appStore",
      iconImage: "/souvenir-screen.webp",
      fullImage: "/souvenir-screen.webp",
      summary:
        "Premium shopping mobile application on iOS designed for discovering bespoke souvenirs, personalized gifts, seamless cart checkout with Stripe, and real-time delivery status.",
      problem:
        "Shoppers faced high cart abandonment and slow page transitions on mobile web when attempting to personalize gift items and purchase with local or international cards.",
      solution:
        "Engineered a React Native iOS application with native Stripe SDK integration, animated gift packaging selectors, and persistent Redux Toolkit offline cart caching for instant zero-latency checkout.",
      metrics: [
        { label: "Platform", value: "iOS App Store" },
        { label: "Payments", value: "Stripe Checkout" },
        { label: "Framework", value: "React Native" },
        { label: "State", value: "Redux Toolkit" },
      ],
      highlights: [
        "Implemented smooth, friction-free catalog browsing with sub-second product search",
        "Integrated secure Stripe mobile SDK supporting credit/debit cards and digital wallets",
        "Engineered persistent shopping cart and wishlist synchronization across sessions",
        "100% compliant with Apple App Store Human Interface Guidelines and privacy manifests",
      ],
      techStack: ["React Native", "TypeScript", "Stripe API", "Redux Toolkit", "REST APIs"],
      appStoreUrl: "https://apps.apple.com/ma/app/souvenir-store/id6788327287",
      webUrl: "https://www.souvenir.live/",
    },
    {
      id: "propermech",
      title: "ProperMech",
      roleSubtitle: "Lead React Native Developer • 4 Months",
      category: "mobileApp",
      badgeType: "Mobile App",
      liveStoreType: "googlePlay",
      iconImage: "/propermech-screen.webp",
      fullImage: "/propermech-screen.webp",
      summary:
        "Complete automotive service mobile platform where car owners manage vehicle health records, locate nearby certified mechanics, request repair quotes, and monitor job progress live.",
      problem:
        "Car owners struggled with transparent repair pricing, verified mechanic qualifications, and live progress visibility during automotive servicing.",
      solution:
        "Built a dual-role React Native marketplace with real-time Firestore synchronization, Apple/Google single sign-on, camera image diagnostics, and background FCM push alerts.",
      metrics: [
        { label: "Platform", value: "Google Play" },
        { label: "Cloud DB", value: "Firestore Realtime" },
        { label: "Auth", value: "Apple & Google SSO" },
        { label: "Push Alerts", value: "FCM Push" },
      ],
      highlights: [
        "Real-time database syncing with Firestore for instant job status notifications",
        "Integrated camera and media library for car inspection photo uploads",
        "Google and Apple Single Sign-On (SSO) with biometrics security",
        "Streamlined navigation flows optimized with React Navigation and Redux state",
      ],
      techStack: ["React Native", "Firebase Firestore", "SSO Authentication", "FCM Notifications", "React Navigation"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.bayworks.customer",
      webUrl: "https://propermech.com/",
    },
    {
      id: "propermech-pro",
      title: "ProperMech Pro",
      roleSubtitle: "Lead Mobile & AI Developer • Field Dispatch",
      category: "mobileApp",
      badgeType: "Mobile App",
      liveStoreType: "googlePlay",
      iconImage: "/propermech-pro-screen.webp",
      fullImage: "/propermech-pro-screen.webp",
      summary:
        "Professional mobile application for automotive technicians and workshops to manage daily schedules, accept dispatch jobs, track order parts, and generate repair reports via an AI Service Writer.",
      problem:
        "Automotive technicians spent hours writing repetitive manual repair estimates, leading to dispatch delays and administrative overhead in busy repair shops.",
      solution:
        "Engineered an AI Service Writer powered by Firebase Cloud Functions that generates comprehensive repair work orders, parts checklists, and customer quotes in seconds.",
      metrics: [
        { label: "Platform", value: "Google Play" },
        { label: "AI Backend", value: "Cloud Functions" },
        { label: "Target", value: "Automotive Techs" },
        { label: "Sync", value: "Live Orders" },
      ],
      highlights: [
        "Integrated AI Service Writer via Firebase Cloud Functions for diagnostic estimates",
        "Mechanic daily dispatch queue with interactive acceptance and route tracking",
        "Cloud-synced parts inventory and labor cost calculator with automated invoices",
        "Comprehensive offline job logging with automatic sync upon reconnection",
      ],
      techStack: ["React Native", "TypeScript", "AI Cloud Functions", "Firestore", "Redux Toolkit"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.bayworks.pro&hl=en",
      webUrl: "https://propermech.com/",
    },
    {
      id: "tapwars",
      title: "Tap Wars",
      roleSubtitle: "Creator & Lead Developer • 60 FPS Gaming",
      category: "mobileApp",
      badgeType: "Mobile App",
      liveStoreType: "googlePlay",
      iconImage: "/tapwars-screen.webp",
      fullImage: "/tapwars-screen.webp",
      summary:
        "High-adrenaline tap-based mobile game featuring real-time multiplayer tournaments, animated theme switcher, global leaderboards, achievements, and low-latency Supabase state sync.",
      problem:
        "Multiplayer mobile games frequently suffer from input lag, UI stutter, and delayed score updates over cellular connections.",
      solution:
        "Utilized Reanimated 3 on the native UI thread to guarantee 60fps micro-animations, while Supabase Realtime websocket channels broadcast score states under 80ms latency.",
      metrics: [
        { label: "Frame Rate", value: "60 FPS Fluid" },
        { label: "Backend", value: "Supabase Realtime" },
        { label: "Animations", value: "Reanimated 3" },
        { label: "Theme", value: "Dark & Light" },
      ],
      highlights: [
        "Engineered buttery 60fps micro-animations with Reanimated and gesture handlers",
        "Supabase Realtime websockets for sub-100ms global leaderboards and player matches",
        "Interactive animated theme switcher with smooth transition shaders",
        "Offline achievement tracking with cloud synchronization upon game finish",
      ],
      techStack: ["React Native", "Supabase Realtime", "Reanimated 3", "TypeScript", "Tailwind CSS"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.tapwarsApp&hl=en",
      webUrl: "https://tap-wars-react.vercel.app/",
    },
    {
      id: "activity-maps",
      title: "Activity Maps",
      roleSubtitle: "Lead Mobile Architect • Geolocation",
      category: "mobileApp",
      badgeType: "Mobile App",
      liveStoreType: "both",
      iconImage: "/activity-maps-screen.webp",
      fullImage: "/activity-maps-screen.webp",
      summary:
        "Comprehensive events and local venues discovery application where contributors add places and users explore interactive maps, make reservations, and check in with barcodes.",
      problem:
        "Users struggled to find authentic local community gatherings and make instant table or ticket reservations directly from a map view.",
      solution:
        "Combined Google Maps SDK clustering with local device geolocation, biometric authentication, and in-app reservation barcodes for seamless physical admissions.",
      metrics: [
        { label: "Stores", value: "iOS & Android" },
        { label: "Mapping", value: "Google Maps API" },
        { label: "Security", value: "Biometric Auth" },
        { label: "Scanner", value: "QR / Barcode" },
      ],
      highlights: [
        "Interactive Google Maps pin clustering with live GPS radius search",
        "Biometric authentication (FaceID & Fingerprint) for rapid account security",
        "QR and barcode scanning engine for event admissions and reservations",
        "Subscription handling with secure digital payments and instant booking receipts",
      ],
      techStack: ["React Native", "Google Maps API", "Biometric Auth", "Redux", "Payment Gateway"],
      appStoreUrl: "https://apps.apple.com/us/app/activity-maps/id6757748665",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.activitymaps",
    },
    {
      id: "savorconnect",
      title: "SavorConnect",
      roleSubtitle: "Mobile Application Developer • Delivery",
      category: "mobileApp",
      badgeType: "Mobile App",
      liveStoreType: "both",
      iconImage: "/savorconnect-screen.webp",
      fullImage: "/savorconnect-screen.webp",
      summary:
        "Intuitive food delivery mobile application designed for seamless restaurant discovery, item customization, real-time GPS courier tracking, and smooth checkout via Stripe.",
      problem:
        "Customers demanded live courier location updates on Google Maps and order customization without confusing multi-step checkout friction.",
      solution:
        "Engineered live courier GPS polling with interactive driver markers, integrated Stripe credit card/wallet SDK, and designed a streamlined 3-step checkout flow.",
      metrics: [
        { label: "Stores", value: "iOS & Android" },
        { label: "Tracking", value: "Live GPS Maps" },
        { label: "Checkout", value: "Stripe & Wallets" },
        { label: "Engine", value: "React Native" },
      ],
      highlights: [
        "Integrated Google Maps API for restaurant geofencing and live courier tracking",
        "Full Stripe payment gateway integration supporting cards, Apple Pay & Google Pay",
        "Custom item modifiers, combo builders, and dietary requirement filters",
        "Push notification alerts for kitchen status, driver dispatch, and doorstep arrival",
      ],
      techStack: ["React Native", "Stripe SDK", "Google Maps API", "TypeScript", "Redux"],
      appStoreUrl: "https://apps.apple.com/us/app/savorconnect/id6736651275",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.savour_kitchen&hl=en",
    },
    {
      id: "vcrow",
      title: "VCROW",
      roleSubtitle: "Lead Full Stack Developer • EdTech",
      category: "mobileApp",
      badgeType: "Mobile App",
      liveStoreType: "googlePlay",
      iconImage: "/vcrow-screen.webp",
      fullImage: "/vcrow-screen.webp",
      summary:
        "Comprehensive dual-portal education ecosystem connecting parents and schools with real-time academic graphs, device restriction management, and curriculum question sets.",
      problem:
        "Parents lacked insight into their children's real-time academic performance and struggled to manage device screen time while encouraging educational quiz exercises.",
      solution:
        "Built a dual-portal mobile architecture where school tests and quizzes appear seamlessly on student devices, with parent analytics dashboards powered by Firestore.",
      metrics: [
        { label: "Platform", value: "Google Play" },
        { label: "Analytics", value: "Dynamic Graphs" },
        { label: "Backend", value: "Firebase Cloud" },
        { label: "Portals", value: "Parent & School" },
      ],
      highlights: [
        "Dual-portal architecture for teachers and parents with role-based permissions",
        "Interactive academic performance charts with subject-wise progress analytics",
        "In-app question set purchases and curriculum unlocking modules",
        "Device restriction rules and scheduled study notifications via Firebase",
      ],
      techStack: ["React Native", "Firebase", "Performance Analytics", "Payment Gateway", "Redux Toolkit"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.vcrow_edu",
    },
  ];

  // Exact categories matching Daniyal's reference portfolio
  const categories = [
    { id: "all", label: t.projects.categories.all },
    { id: "liveInStores", label: t.projects.categories.liveInStores },
    { id: "mobileApp", label: t.projects.categories.mobileApp },
    { id: "webApp", label: t.projects.categories.webApp },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "liveInStores") return Boolean(p.appStoreUrl || p.playStoreUrl);
    if (activeFilter === "mobileApp") return p.category === "mobileApp";
    if (activeFilter === "webApp") return Boolean(p.webUrl);
    return true;
  });

  return (
    <section id="projects" className="py-24 relative bg-transparent border-t border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Section Header with Right-Aligned Capsule Tabs (Matches Reference) ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          
          {/* Left: Section Titles */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 mb-4">
              {t.projects.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight mb-3">
              {t.projects.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Right: Rounded-Full Capsule Filter Bar (Matches Reference Exactly) ── */}
          <div className="shrink-0">
            <div className="inline-flex items-center p-1 rounded-full bg-[#0c1222]/90 border border-white/[0.1] shadow-lg backdrop-blur-xl">
              {categories.map((cat) => {
                const isActive = activeFilter === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 text-white font-bold shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* ── Projects Grid Matching Reference Portfolio Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, index) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-3xl overflow-hidden bg-[#0c1222]/80 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(0,0,0,0.6)] flex flex-col justify-between group"
              >
                {/* ── Card Content ── */}
                <div className="p-6 sm:p-7">
                  
                  {/* Top Bar: Left Type Pill | Right Store Status Pill */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
                      <Bookmark className="w-3 h-3 text-cyan-400" />
                      <span>{p.badgeType === "Mobile App" ? t.projects.badges.mobileApp : p.badgeType}</span>
                    </span>

                    {/* Live Store Pill */}
                    {p.liveStoreType === "both" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{t.projects.badges.iosAndroidLive}</span>
                      </span>
                    )}
                    {p.liveStoreType === "appStore" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                        <Apple className="w-3 h-3" />
                        <span>{t.projects.badges.appStoreLive}</span>
                      </span>
                    )}
                    {p.liveStoreType === "googlePlay" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                        <Play className="w-2.5 h-2.5 fill-current" />
                        <span>{t.projects.badges.googlePlayLive}</span>
                      </span>
                    )}
                  </div>

                  {/* Centered App Icon Visual Container (Exact Reference Aesthetic) */}
                  <div
                    onClick={() => setSelectedProject(p)}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#090e1a] border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.6)] p-2 mx-auto mb-8 flex items-center justify-center cursor-pointer group-hover:scale-105 group-hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10" />
                    <img
                      src={p.iconImage}
                      alt={p.title}
                      className="w-full h-full object-contain rounded-xl"
                      loading="lazy"
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    onClick={() => setSelectedProject(p)}
                    className="text-2xl font-bold font-heading text-white mb-1.5 group-hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    {p.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-400 mb-3">
                    {t.projectsData[p.id]?.role || p.roleSubtitle}
                  </div>

                  {/* Description snippet */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-6">
                    {t.projectsData[p.id]?.summary || p.summary}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.techStack.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold text-slate-300 bg-white/[0.03] border border-white/[0.08] px-2.5 py-1 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                    {p.techStack.length > 3 && (
                      <span className="text-[10px] font-semibold text-slate-400 bg-white/[0.02] px-2 py-1 rounded-lg border border-white/[0.04]">
                        +{p.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* ── Card Footer with Generous Padding & Clean Alignment ── */}
                <div className="px-5 sm:px-6 py-3.5 border-t border-white/[0.08] bg-white/[0.02] flex items-center justify-between mt-auto gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(p)}
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors group/btn py-1"
                  >
                    <span>{t.projects.viewCaseStudy}</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                    {p.appStoreUrl && (
                      <a
                        href={p.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-900/90 text-white border border-cyan-500/30 text-[10px] font-mono font-bold hover:scale-105 transition-all shadow-xs"
                        title="Open on Apple App Store"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Apple className="w-3 h-3 text-cyan-400" />
                        <span>{t.projects.badges.ios}</span>
                      </a>
                    )}
                    {p.playStoreUrl && (
                      <a
                        href={p.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-600/90 text-white border border-emerald-400/40 text-[10px] font-mono font-bold hover:scale-105 transition-all shadow-xs"
                        title="Open on Google Play"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>{t.projects.badges.android}</span>
                      </a>
                    )}
                    {p.webUrl && !p.appStoreUrl && !p.playStoreUrl && (
                      <a
                        href={p.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-white/[0.05] border border-cyan-500/20 text-white text-[10px] font-mono font-semibold hover:border-cyan-400 transition-all"
                        title="Open Live Web Application"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-3 h-3 text-cyan-400" />
                        <span>{t.projects.badges.live}</span>
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ── Interactive Case Study Modal ── */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-2xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-3xl rounded-3xl bg-[#0c1222] border border-cyan-500/40 shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden my-8 max-h-[90vh] flex flex-col"
              >
                {/* Modal Header */}
                <div className="p-6 sm:p-7 border-b border-white/[0.08] flex items-center justify-between bg-white/[0.02]">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 inline-block mb-1">
                      {selectedProject.badgeType === "Mobile App" ? t.projects.badges.mobileApp : selectedProject.badgeType}
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-white">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Scrollable Body */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                  
                  {/* Visual Preview + Metrics Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                    <div className="sm:col-span-5 flex justify-center">
                      <div className="w-48 aspect-[9/19] rounded-[24px] p-2 bg-slate-800 border border-white/20 shadow-2xl overflow-hidden">
                        <img
                          src={selectedProject.fullImage}
                          alt={selectedProject.title}
                          className="w-full h-full object-cover rounded-[16px]"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-7 space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        {selectedProject.metrics.map((m, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                              {m.label}
                            </div>
                            <div className="text-sm font-bold font-heading text-white mt-0.5">
                              {m.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Store Actions in Modal */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {selectedProject.appStoreUrl && (
                          <a
                            href={selectedProject.appStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-cyan-500 border border-white/10 transition-colors"
                          >
                            <Apple className="w-4 h-4" />
                            <span>{t.projects.modal.viewAppStore}</span>
                          </a>
                        )}
                        {selectedProject.playStoreUrl && (
                          <a
                            href={selectedProject.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-cyan-500 border border-white/10 transition-colors"
                          >
                            <Play className="w-4 h-4 fill-current" />
                            <span>{t.projects.modal.viewPlayStore}</span>
                          </a>
                        )}
                        {selectedProject.webUrl && (
                          <a
                            href={selectedProject.webUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>{t.projects.modal.visitLive}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Problem & Solution Breakdown */}
                  <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                    <div>
                      <h4 className="text-sm font-bold font-heading uppercase tracking-wider text-slate-200 mb-1.5">
                        {t.projects.modal.problem}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {t.projectsData[selectedProject.id]?.problem || selectedProject.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold font-heading uppercase tracking-wider text-cyan-400 mb-1.5">
                        {t.projects.modal.solution}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {t.projectsData[selectedProject.id]?.solution || selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="pt-4 border-t border-white/[0.08]">
                    <h4 className="text-sm font-bold font-heading uppercase tracking-wider text-slate-200 mb-3">
                      {t.projects.modal.highlights}
                    </h4>
                    <div className="space-y-2">
                      {(t.projectsData[selectedProject.id]?.highlights || selectedProject.highlights).map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Full Tech Stack */}
                  <div className="pt-4 border-t border-white/[0.08]">
                    <h4 className="text-sm font-bold font-heading uppercase tracking-wider text-slate-200 mb-3">
                      Complete Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-semibold px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Modal Footer */}
                <div className="p-4 sm:p-5 border-t border-white/[0.08] bg-white/[0.02] flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Need a similar application engineered for your startup?
                  </span>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  >
                    Discuss This Build
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Projects;
