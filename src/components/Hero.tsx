import React, { useState, useRef } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  ExternalLink,
  Smartphone,
  Star,
  CheckCircle2,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface HeroProject {
  id: string;
  name: string;
  tabLabel: string;
  category: string;
  store: string;
  rating: string;
  screen: string;
  tech: string;
  link?: string;
}

const Hero = () => {
  const { t } = useLanguage();
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  // 3D Parallax Tilt Setup matching reference portfolio
  const cardRef = useRef<HTMLDivElement>(null);
  const boundsRef = useRef<{ left: number; top: number; width: number; height: number } | null>(null);

  const rawRotX = useMotionValue(0);
  const rawRotY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  const rotX = useSpring(rawRotX, { stiffness: 280, damping: 26 });
  const rotY = useSpring(rawRotY, { stiffness: 280, damping: 26 });

  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.18) 0%, transparent 60%)`;

  const onMouseEnter = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      boundsRef.current = {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      };
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    let bounds = boundsRef.current;
    if (!bounds && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      bounds = {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      };
      boundsRef.current = bounds;
    }
    if (!bounds || bounds.width === 0 || bounds.height === 0) return;

    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    const normX = (x / bounds.width) * 2 - 1;
    const normY = (y / bounds.height) * 2 - 1;

    rawRotX.set(-normY * 11);
    rawRotY.set(normX * 13);
    glareX.set((x / bounds.width) * 100);
    glareY.set((y / bounds.height) * 100);
  };

  const onMouseLeave = () => {
    rawRotX.set(0);
    rawRotY.set(0);
    glareX.set(50);
    glareY.set(50);
    boundsRef.current = null;
  };

  // ── Muhammad Saad's actual projects for Hero phone showcase ──
  const heroProjects: HeroProject[] = [
    {
      id: "talk2learn",
      name: "Talk2Learn",
      tabLabel: t.hero.tabs.talk2learn,
      category: "Live Voice & Video SFU",
      store: "iOS & Android Live",
      rating: "5.0 ★",
      screen: "/talk2learn-hero.webp",
      tech: "Flutter • Agora WebRTC • Riverpod",
      link: "https://talk2learn-app-landing.vercel.app/",
    },
    {
      id: "quit-puffing",
      name: "Quit Puffing",
      tabLabel: t.hero.tabs.quitPuffing,
      category: "Habit & XP Gamification",
      store: "Google Play Live",
      rating: "4.9 ★",
      screen: "/quit-puffing-screen.webp",
      tech: "Flutter • Material 3 • Local DB",
      link: "https://play.google.com/store/apps/details?id=com.mubbits.quit_puffing",
    },
    {
      id: "propermech",
      name: "ProperMech",
      tabLabel: t.hero.tabs.properMech,
      category: "Automotive Service & AI Dispatch",
      store: "Google Play Live",
      rating: "4.9 ★",
      screen: "/propermech-screen.webp",
      tech: "React Native • Firestore • Cloud AI",
      link: "https://play.google.com/store/apps/details?id=com.bayworks.customer",
    },
    {
      id: "activity-maps",
      name: "Activity Maps",
      tabLabel: t.hero.tabs.activityMaps,
      category: "Local Discovery & GPS Maps",
      store: "iOS & Android Live",
      rating: "4.8 ★",
      screen: "/activity-maps-screen.webp",
      tech: "React Native • Google Maps • Biometrics",
      link: "https://activity-maps.com/",
    },
  ];

  const activeProject = heroProjects[activeHeroIndex];

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToEstimator = () => {
    const section = document.getElementById("estimator");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const stats = [
    { value: "10+", label: t.hero.appsShipped, sub: "Live on Stores" },
    { value: "3+", label: t.hero.experience, sub: "React Native & Flutter" },
    { value: "5.0", label: t.hero.clientRating, sub: "Based on 5-Star Reviews" },
    { value: "100%", label: t.hero.storePass, sub: "Zero Rejections" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center overflow-hidden pt-24 pb-16 lg:py-28 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── Left Column: Headlines & Call to Actions ── */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span>{t.hero.badge}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6 font-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              {t.hero.headlinePart1}{" "}
              <span className="block mt-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8">
                {t.hero.headlinePart2}
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              {t.hero.subheadline}
            </motion.p>

            {/* Category Stack Ticker */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8 text-[11px] uppercase tracking-wider font-semibold text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-cyan-300">React Native</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-blue-300">Flutter &amp; Dart</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-purple-300">Agora WebRTC</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-amber-300">Firebase &amp; Supabase</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-emerald-300">60 FPS Reanimated</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
            >
              <button
                type="button"
                onClick={scrollToProjects}
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 cursor-pointer active:scale-95"
              >
                <span>{t.hero.exploreApps}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={scrollToEstimator}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer active:scale-95 backdrop-blur-md"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>{t.hero.estimateCost}</span>
              </button>
            </motion.div>

            {/* Stats Counter Row */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 }}
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold font-heading bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-300 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right Column: Interactive Phone Mockup with Dynamic Filter Tabs ── */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-4 px-2">
            
            {/* ── Project Filter Tabs Above iPhone Frame (Switches Screen & Metadata) ── */}
            <div className="w-full max-w-[340px] mb-4 flex items-center justify-center gap-1.5 p-1 rounded-xl bg-[#0c1222]/90 border border-cyan-500/20 shadow-md backdrop-blur-xl">
              {heroProjects.map((item, idx) => {
                const isActive = activeHeroIndex === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveHeroIndex(idx)}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-heading font-semibold transition-all cursor-pointer truncate ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/25 font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {item.tabLabel}
                  </button>
                );
              })}
            </div>

            {/* ── 3D Interactive iPhone Container ── */}
            <div
              ref={cardRef}
              onMouseEnter={onMouseEnter}
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
              className="relative w-full max-w-[280px] sm:max-w-[310px] md:max-w-[330px] mx-auto cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                style={{
                  rotateX: rotX,
                  rotateY: rotY,
                  transformStyle: "preserve-3d",
                }}
                className="relative w-full transform-gpu will-change-transform"
              >
                {/* ── Floating Badge 1: 60 FPS Velocity (Left) ── */}
                <div
                  style={{ transform: "translateZ(45px)" }}
                  className="absolute -top-4 -left-4 sm:-left-8 z-30 px-3 py-1.5 rounded-xl bg-[#0a1020]/90 backdrop-blur-md border border-cyan-500/30 shadow-xl flex items-center gap-2 pointer-events-none"
                >
                  <div className="w-6 h-6 rounded-lg bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 font-mono text-xs font-bold shadow-[0_0_8px_rgba(6,182,212,0.3)]">
                    {"{ }"}
                  </div>
                  <div>
                    <div className="text-[11px] font-heading font-bold text-white leading-tight flex items-center gap-1">
                      <span>60 FPS Velocity</span>
                      <ExternalLink className="w-2.5 h-2.5 text-cyan-400" />
                    </div>
                    <div className="text-[9px] font-mono text-slate-400 leading-tight">
                      Native Fluidity
                    </div>
                  </div>
                </div>

                {/* ── Floating Badge 2: Zero Rejections (Right) ── */}
                <div
                  style={{ transform: "translateZ(50px)" }}
                  className="absolute -top-4 -right-4 sm:-right-8 z-30 px-3 py-1.5 rounded-xl bg-[#0a1020]/90 backdrop-blur-md border border-emerald-500/30 shadow-xl flex items-center gap-2 pointer-events-none"
                >
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[11px] font-heading font-bold text-white leading-tight">
                      Zero Rejections
                    </div>
                    <div className="text-[9px] font-mono text-slate-400 leading-tight">
                      100% App Store Pass
                    </div>
                  </div>
                </div>

                {/* ── iPhone Body ── */}
                <div className="relative rounded-[42px] p-2.5 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border-2 border-cyan-500/30 shadow-2xl shadow-cyan-950/50 mt-3 group overflow-hidden">
                  {/* Dynamic Glare Reflection */}
                  <motion.div
                    className="absolute inset-0 rounded-[42px] pointer-events-none opacity-40 transition-opacity z-30"
                    style={{ background: glareBg }}
                  />

                  {/* Screen Outer Container */}
                  <div className="relative rounded-[32px] overflow-hidden bg-black aspect-[9/18.8] w-full border border-slate-800">
                    
                    {/* Status Bar: Time & 5G */}
                    <div className="absolute top-2.5 inset-x-5 flex justify-between items-center text-[10px] font-semibold text-slate-300 z-30 pointer-events-none">
                      <span>9:41</span>
                      {/* Dynamic Island Pill */}
                      <div className="w-20 h-4 bg-black rounded-full border border-slate-800/80 mx-auto flex items-center justify-end px-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-950/60" />
                      </div>
                      <span className="text-cyan-400 font-mono text-[9px]">5G 100%</span>
                    </div>

                    {/* Screenshot Swapped Based on Active Tab Filter */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeProject.id}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.04 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="w-full h-full relative"
                      >
                        <img
                          src={activeProject.screen}
                          alt={`${activeProject.name} mobile app UI`}
                          className="w-full h-full object-cover object-top"
                          loading="eager"
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Bottom Floating Glass Card Overlay (Matches User Upload Exactly) */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`overlay-${activeProject.id}`}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.25 }}
                        className="absolute inset-x-3 bottom-3 p-3 rounded-2xl bg-[#0a1020]/92 backdrop-blur-xl border border-cyan-500/30 shadow-2xl flex flex-col gap-1 z-20 pointer-events-auto"
                      >
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-1.5 text-[9px] font-mono font-bold tracking-wider text-cyan-300 uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            {activeProject.store}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-cyan-300">
                            {activeProject.rating}
                          </span>
                        </div>
                        <div className="text-xs font-bold text-white tracking-tight truncate">
                          {activeProject.name} • {activeProject.category}
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 truncate">
                          {activeProject.tech}
                        </div>
                      </motion.div>
                    </AnimatePresence>

                  </div>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
