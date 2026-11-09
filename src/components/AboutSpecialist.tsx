import { Download, ExternalLink, Code2, Cpu, Sparkles, MapPin, Mail, Phone, Github, Linkedin, Award, GraduationCap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent } from "@/lib/analytics";

const AboutSpecialist = () => {
  const { t } = useLanguage();

  const downloadCV = () => {
    trackEvent("resume_download", { source: "about_specialist" });
    const link = document.createElement("a");
    link.href = "/Muhammad_Saad_CV.pdf";
    link.download = "Muhammad_Saad_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const competencies = [
    "Full-Stack Web (React & Next.js)",
    "Cross-Platform Mobile (iOS & Android)",
    "AI Solutions & Agentic Workflows",
    "MVP & SaaS Sprints (30 Days)",
    "Software Architecture & REST APIs",
    "Database Modeling (SQL & NoSQL)",
    "Cloud Backends & Cloud Functions",
    "Real-Time Systems & WebRTC / Sockets",
  ];

  const techCategories = [
    {
      name: "Web Engineering",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 / CSS3", "Responsive UI"],
      color: "border-cyan-500/30 text-cyan-300 bg-cyan-500/5",
    },
    {
      name: "Cross-Platform Mobile",
      skills: ["React Native", "Flutter", "Expo", "Reanimated 3", "React Navigation", "GoRouter"],
      color: "border-blue-500/30 text-blue-300 bg-blue-500/5",
    },
    {
      name: "Backend & Cloud Databases",
      skills: ["Firebase Firestore", "Supabase", "Node.js REST APIs", "SQL / PostgreSQL", "MongoDB", "Agora WebRTC SFU"],
      color: "border-emerald-500/30 text-emerald-300 bg-emerald-500/5",
    },
    {
      name: "State Management & Architecture",
      skills: ["Redux Toolkit", "Zustand", "Riverpod", "BLoC", "Context API", "TanStack Query"],
      color: "border-purple-500/30 text-purple-300 bg-purple-500/5",
    },
    {
      name: "AI & Modern Tooling",
      skills: ["Cursor", "Google Antigravity", "GitHub Copilot", "App Store Connect", "Google Play Console", "TestFlight & CI/CD"],
      color: "border-amber-500/30 text-amber-300 bg-amber-500/5",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-24 relative bg-transparent border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 mb-4">
            {t.about.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight mb-4">
            {t.about.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* ── Main Detail Profile Card (Matching Reference Layout) ── */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0c1222]/85 backdrop-blur-xl border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.5)] mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Quote, Bio & Competencies (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              {/* Top Quote */}
              <blockquote className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight leading-snug mb-6 border-l-2 border-cyan-400 pl-4 sm:pl-5">
                &ldquo;I bridge the gap between ambitious product ideas and robust, scalable digital reality — building web, mobile, and AI solutions engineered for real-world impact.&rdquo;
              </blockquote>

              {/* Body Narrative */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                <p>
                  <strong className="text-white font-semibold">Muhammad Saad</strong> is a Software Engineer, Full-Stack Developer, and Mobile &amp; AI Solutions Builder with a Computer Science and Software Engineering background. He specializes in designing and engineering end-to-end digital products — from high-performance web applications and dashboards (React.js, Next.js) to cross-platform mobile apps (React Native, Flutter) and intelligent AI integrations.
                </p>
                <p className="text-slate-400">
                  With hands-on experience building applications from scratch and delivering 11+ production apps, Saad architects resilient backend APIs, structures optimized databases (SQL, Firebase, Supabase), implements third-party services, and deploys production systems. He combines software engineering fundamentals, modern development technologies, and AI-assisted workflows (Cursor, Google Antigravity, GitHub Copilot) to deliver practical, maintainable, and high-converting digital products.
                </p>
              </div>

              {/* Core Engineering Competencies */}
              <div>
                <span className="text-[11px] font-bold font-mono tracking-wider text-cyan-400 uppercase mb-4 block">
                  CORE ENGINEERING COMPETENCIES:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {competencies.map((comp, idx) => (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#111827]/90 border border-cyan-500/25 text-slate-200 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Photo Card, Info Rows & Action Links (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Photo Card with Overlay */}
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#070a13] relative group shadow-2xl">
                <div className="w-full aspect-[4/5] overflow-hidden relative">
                  <img
                    src="/ProfilePic.webp"
                    alt="Muhammad Saad — Software Engineer &amp; Full-Stack Developer"
                    width={500}
                    height={625}
                    className="w-full h-full object-cover object-[center_12%] transition-transform duration-500 group-hover:scale-102"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#070a13] via-[#070a13]/80 to-transparent p-5 pt-16">
                    <div className="text-lg sm:text-xl font-bold font-heading text-white tracking-tight">
                      Muhammad Saad
                    </div>
                    <div className="text-xs text-cyan-400 font-semibold mt-1">
                      Software Engineer | Full-Stack &amp; Mobile Developer
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Rows */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0c1222]/90 border border-white/[0.08] text-xs">
                  <span className="text-slate-400 font-medium">Location</span>
                  <span className="text-slate-200 font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Islamabad / Lahore, PK</span>
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0c1222]/90 border border-white/[0.08] text-xs">
                  <span className="text-slate-400 font-medium">Education</span>
                  <span className="text-slate-200 font-semibold flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>BSc Software Engineering (COMSATS)</span>
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0c1222]/90 border border-white/[0.08] text-xs">
                  <span className="text-slate-400 font-medium">Status</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                    <span>Available for Projects &amp; Sprints</span>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href="https://github.com/MuhammadSaad058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-slate-300 hover:text-white border border-white/10 hover:border-cyan-500/40 text-xs font-semibold transition-all"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-saad-5b2486204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-slate-300 hover:text-white border border-white/10 hover:border-cyan-500/40 text-xs font-semibold transition-all"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <button
                onClick={downloadCV}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{t.about.downloadResume}</span>
              </button>

            </div>

          </div>
        </div>

        {/* ── Interactive Tech Stack Matrix ── */}
        <div className="pt-4">
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
