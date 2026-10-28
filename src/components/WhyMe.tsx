import { Zap, ShieldCheck, Cpu, Smartphone, Layers, WifiOff, FileCode2, Palette } from "lucide-react";
import { motion } from "framer-motion";

const WhyMe = () => {
  const metrics = [
    {
      stat: "40%",
      label: "Performance Boost",
      detail:
        "Reduced cold-start latency and eliminated JavaScript bridge overhead using modern React Native Architecture & Hermes engine.",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
    },
    {
      stat: "60 FPS",
      label: "Fluid UI Fluidity",
      detail:
        "Reanimated & Gesture Handler driven native UI with zero UI-thread stuttering across both budget and flagship devices.",
      icon: <Zap className="w-5 h-5 text-blue-400" />,
    },
    {
      stat: "99.9%",
      label: "Crash-Free Rate",
      detail:
        "Strict TypeScript typing, defensive runtime error boundaries, and thorough multi-device regression testing before deployment.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    },
    {
      stat: "100%",
      label: "Store Approval Pass",
      detail:
        "End-to-end Apple App Store & Google Play publishing compliance with privacy manifests and zero guideline rejections.",
      icon: <Smartphone className="w-5 h-5 text-purple-400" />,
    },
  ];

  const advantages = [
    {
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      title: "Full-Stack Mobile Ownership",
      desc: "From Figma design handoff to Firebase/Supabase database schemas, serverless cloud functions, and store deployment — I own the entire engineering lifecycle with zero agency middleman.",
    },
    {
      icon: <WifiOff className="w-5 h-5 text-blue-400" />,
      title: "Offline-First Cloud Sync",
      desc: "Apps that work seamlessly without internet connectivity and sync conflict-free when back online, using SQLite, local caching, or Firestore persistence.",
    },
    {
      icon: <Palette className="w-5 h-5 text-purple-400" />,
      title: "Pixel-Perfect Figma Conversion",
      desc: "Faithful Figma implementation with micro-interactions, fluid transitions, and responsive layouts calibrated for all iPhone and Android screen densities.",
    },
    {
      icon: <FileCode2 className="w-5 h-5 text-emerald-400" />,
      title: "Clean Architecture & 100% IP Handover",
      desc: "Modular, well-commented codebases built with Redux Toolkit / Riverpod and strict TypeScript — 100% owned by you from Day 1 with clean documentation.",
    },
  ];

  return (
    <section id="why-me" className="py-24 relative bg-transparent border-t border-white/[0.06]">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 mb-4">
            03 / Competitive Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight mb-4">
            WHY CLIENTS CHOOSE TO WORK WITH ME
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            High-impact mobile software engineering combining pixel-perfect UI fidelity, 60fps performance, and enterprise-grade architecture that scales effortlessly.
          </p>
        </div>

        {/* 4 Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#0c1222]/80 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl sm:text-4xl font-extrabold font-heading bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {m.stat}
                </span>
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
                  {m.icon}
                </div>
              </div>
              <h3 className="text-base font-bold font-heading text-white mb-2">
                {m.label}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {m.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#0c1222]/50 border border-white/[0.06] hover:border-white/15 transition-all duration-300 flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex-shrink-0 mt-0.5">
                {adv.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-white mb-1.5">
                  {adv.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyMe;

