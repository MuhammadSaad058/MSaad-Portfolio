import { Download, ExternalLink, Code2, Cpu, Sparkles, MapPin, Mail, Phone, Github, Linkedin, Award, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const AboutSpecialist = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Muhammad_Saad_CV.pdf";
    link.download = "Muhammad_Saad_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const techCategories = [
    {
      name: "Mobile Frameworks",
      skills: ["React Native", "Flutter", "Expo", "Reanimated 3", "React Navigation", "GoRouter"],
      color: "border-cyan-500/30 text-cyan-300 bg-cyan-500/5",
    },
    {
      name: "Programming Languages",
      skills: ["TypeScript", "JavaScript (ES6+)", "Dart", "C++", "Python", "SQL"],
      color: "border-blue-500/30 text-blue-300 bg-blue-500/5",
    },
    {
      name: "State Management",
      skills: ["Redux Toolkit", "Zustand", "Riverpod", "BLoC", "Context API", "TanStack Query"],
      color: "border-purple-500/30 text-purple-300 bg-purple-500/5",
    },
    {
      name: "Backend & Databases",
      skills: ["Firebase Firestore", "Supabase", "Node.js REST APIs", "SQLite", "MongoDB", "Agora WebRTC SFU"],
      color: "border-emerald-500/30 text-emerald-300 bg-emerald-500/5",
    },
    {
      name: "Tools & Deployment",
      skills: ["App Store Connect", "Google Play Console", "TestFlight", "Git & GitHub", "Xcode", "Android Studio", "Stripe API"],
      color: "border-amber-500/30 text-amber-300 bg-amber-500/5",
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-transparent border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 mb-4">
            06 / Meet The Engineer
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight mb-4">
            DEDICATED SENIOR MOBILE APP SPECIALIST
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Crafting market-ready cross-platform applications at the intersection of design fidelity, scalable software architecture, and cloud engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Photo Card & Quick Links (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-64 sm:w-72 aspect-square rounded-3xl p-1.5 bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 shadow-[0_0_50px_rgba(6,182,212,0.25)] mb-6">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-[#0c1222] relative group">
                <img
                  src="/ProfilePic.png"
                  alt="Muhammad Saad"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                  <div>
                    <div className="text-lg font-bold font-heading text-white">Muhammad Saad</div>
                    <div className="text-xs text-cyan-400 font-semibold">Mobile App Developer @ Mubbits</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact & Links */}
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/MuhammadSaad058"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-cyan-500 text-slate-300 hover:text-white border border-white/10 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-saad-5b2486204"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-cyan-500 text-slate-300 hover:text-white border border-white/10 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                onClick={downloadCV}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: Bio & Core Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I'm <strong className="text-white font-semibold">Muhammad Saad</strong>, a passionate Mobile Application Software Engineer with <strong className="text-cyan-400">2+ years of professional experience</strong> engineering high-performance mobile applications for startups and enterprise clients.
              </p>
              <p className="text-slate-400">
                Holding a <strong className="text-white">BS in Software Engineering from COMSATS University Islamabad</strong>, I bridge the gap between Figma design systems and production-grade mobile engineering. My apps deliver native 60fps velocity, sub-second API roundtrips, and zero-compromise security across both iOS and Android.
              </p>
              <p className="text-slate-400">
                I specialize in real-time mobile architectures — from live Agora WebRTC audio/video streaming in <strong className="text-white">Talk2Learn</strong>, to automotive job dispatch engines in <strong className="text-white">ProperMech</strong>, to e-commerce checkout pipelines in <strong className="text-white">Souvenir Store</strong> and <strong className="text-white">SavorConnect</strong>.
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
              <div className="p-4 rounded-xl bg-[#0c1222]/60 border border-white/[0.06]">
                <div className="flex items-center gap-2 text-cyan-400 font-bold font-heading text-sm mb-1">
                  <Award className="w-4 h-4" />
                  <span>End-to-End Delivery</span>
                </div>
                <div className="text-xs text-slate-400">
                  From initial wireframes and schema design to TestFlight betas and final App Store approvals.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0c1222]/60 border border-white/[0.06]">
                <div className="flex items-center gap-2 text-purple-400 font-bold font-heading text-sm mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span>Computer Science Rigor</span>
                </div>
                <div className="text-xs text-slate-400">
                  Clean architecture, design patterns, robust error boundaries, and defensive memory profiling.
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Interactive Tech Stack Matrix ── */}
        <div className="pt-12 border-t border-white/[0.08]">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-1 block">
              Technical Arsenal
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              CORE TECHNOLOGIES &amp; FRAMEWORKS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0c1222]/60 border border-white/[0.08] hover:border-white/20 transition-all"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-slate-300 font-heading mb-3 flex items-center justify-between">
                  <span>{cat.name}</span>
                  <Code2 className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${cat.color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSpecialist;

