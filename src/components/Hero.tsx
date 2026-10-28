import { ArrowRight, MessageCircle, Sparkles, Smartphone, ShieldCheck, Zap, Star, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact");
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
    { value: "8+", label: "Production Apps", sub: "Live on Stores" },
    { value: "2+", label: "Years Experience", sub: "React Native & Flutter" },
    { value: "5.0", label: "Client Rating", sub: "5-Star Reviews" },
    { value: "100%", label: "Store Pass Rate", sub: "Zero Rejections" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center overflow-hidden pt-24 pb-16 lg:py-28 bg-transparent"
    >
      {/* ── Background gradient ambient orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-cyan-600/15 blur-[140px]" />
        <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-purple-600/15 blur-[160px]" />
        <div className="absolute -bottom-40 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[130px]" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── Left Column: Headlines & Call to Actions ── */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 mb-6 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span>Available for New Mobile Projects</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6 font-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              Hire Senior React Native &amp; Flutter App Developer.{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Engineered for 60FPS Velocity.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              Architecting market-ready iOS &amp; Android mobile applications and startup MVPs. From Figma UI to App Store &amp; Google Play approval in 30 days — with buttery 60fps animations, Firebase/Supabase cloud backends, and zero agency overhead.
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
                onClick={scrollToProjects}
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Explore Shipped Apps</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={scrollToEstimator}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:scale-[1.02] backdrop-blur-md"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Estimate Project Cost</span>
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

          {/* ── Right Column: Interactive Phone Mockup with Talk2Learn ── */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              className="relative w-full max-w-[340px] sm:max-w-[380px]"
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Outer ambient glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-purple-600/20 rounded-[48px] blur-2xl -z-10 animate-pulse" />

              {/* iPhone Frame */}
              <div className="relative rounded-[42px] p-3 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                {/* Dynamic Island / Speaker notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-between px-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700/60" />
                  <div className="w-2 h-2 rounded-full bg-blue-950/80" />
                </div>

                {/* Screen Container */}
                <div className="relative rounded-[32px] overflow-hidden bg-[#0d1322] aspect-[9/19.5] border border-white/10 shadow-inner group">
                  {/* Talk2Learn Hero Image */}
                  <img
                    src="/talk2learn-hero.webp"
                    alt="Talk2Learn - Live Language Exchange Mobile App"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient bottom overlay for app info */}
                  <div className="absolute inset-x-0 bottom-0 p-4 pt-12 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src="/talk2learn-logo.png"
                          alt="Logo"
                          className="w-7 h-7 rounded-lg border border-white/20 bg-slate-900 object-contain p-0.5"
                        />
                        <div>
                          <div className="text-xs font-bold text-white tracking-wide">Talk2Learn</div>
                          <div className="text-[10px] text-cyan-400 font-medium">Agora WebRTC • Live Voice &amp; Video</div>
                        </div>
                      </div>
                      <a
                        href="https://apps.apple.com/ma/app/talk2learn/id6795451031"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-md bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-[10px] font-semibold flex items-center gap-1 transition-colors border border-cyan-500/30"
                      >
                        <span>App Store</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Floating Badge 1: 60 FPS Reanimated ── */}
              <motion.div
                className="absolute -top-4 -left-6 sm:-left-10 bg-[#0c1322]/90 backdrop-blur-xl border border-cyan-500/30 p-2.5 sm:p-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-2.5 z-20"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Zap className="w-4 h-4 fill-cyan-400" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white font-heading">60 FPS Native Velocity</div>
                  <div className="text-[9px] text-slate-400">Zero Bridge Stutter</div>
                </div>
              </motion.div>

              {/* ── Floating Badge 2: App Store Approved ── */}
              <motion.div
                className="absolute -bottom-6 -right-4 sm:-right-8 bg-[#0c1322]/90 backdrop-blur-xl border border-emerald-500/30 p-2.5 sm:p-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-2.5 z-20"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white font-heading">100% App Store Pass</div>
                  <div className="text-[9px] text-emerald-400">iOS &amp; Android Certified</div>
                </div>
              </motion.div>

              {/* ── Floating Badge 3: WebRTC SFU Audio/Video ── */}
              <motion.div
                className="hidden sm:flex absolute top-1/2 -right-8 translate-y-[-50%] bg-[#0c1322]/90 backdrop-blur-xl border border-purple-500/30 px-3 py-2 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] items-center gap-2 z-20"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                <span className="text-[10px] font-semibold text-purple-300">Agora WebRTC SFU</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
