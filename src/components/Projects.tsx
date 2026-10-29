import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Apple, Play, ExternalLink, Sparkles, ChevronRight, Check, X, Bookmark, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { projectsData, ProjectItem } from "@/data/projectsData";
import { trackEvent } from "@/lib/analytics";

const Projects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const openProjectModal = (p: ProjectItem) => {
    setSelectedProject(p);
    trackEvent("project_case_study_view", { project_id: p.id, project_title: p.title });
    window.history.pushState(null, "", `/projects/${p.id}`);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    window.history.pushState(null, "", "/#projects");
  };

  // Synchronize on browser back button
  useEffect(() => {
    const handlePopState = () => {
      const match = window.location.pathname.match(/\/projects\/([a-z0-9-]+)/);
      if (match && match[1]) {
        const found = projectsData.find((p) => p.id === match[1]);
        if (found) setSelectedProject(found);
      } else {
        setSelectedProject(null);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const categories = [
    { id: "all", label: t.projects.categories.all },
    { id: "liveInStores", label: t.projects.categories.liveInStores },
    { id: "mobileApp", label: t.projects.categories.mobileApp },
    { id: "webApp", label: t.projects.categories.webApp },
  ];

  const filteredProjects = projectsData.filter((p) => {
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
        
        {/* ── Section Header with Right-Aligned Capsule Tabs ── */}
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

          {/* Right: Rounded-Full Capsule Filter Bar */}
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

        {/* ── Projects Grid ── */}
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

                  {/* Centered App Icon Visual Container */}
                  <div
                    onClick={() => openProjectModal(p)}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#090e1a] border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.6)] p-2 mx-auto mb-8 flex items-center justify-center cursor-pointer group-hover:scale-105 group-hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10" />
                    <img
                      src={p.iconImage}
                      alt={p.imageAlt || p.title}
                      width={112}
                      height={112}
                      className="w-full h-full object-contain rounded-xl"
                      loading="lazy"
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    onClick={() => openProjectModal(p)}
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

                {/* ── Card Footer ── */}
                <div className="px-5 sm:px-6 py-3.5 border-t border-white/[0.08] bg-white/[0.02] flex items-center justify-between mt-auto gap-2">
                  <button
                    type="button"
                    onClick={() => openProjectModal(p)}
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors group/btn py-1 cursor-pointer"
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
                        aria-label={`${p.title} on Apple App Store`}
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
                        aria-label={`${p.title} on Google Play`}
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
                        aria-label={`${p.title} live web application`}
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
                  <div className="flex items-center gap-2">
                    <Link
                      to={`/projects/${selectedProject.id}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-colors"
                      title="Open full dedicated case study page"
                    >
                      <span>Dedicated Page</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={closeProjectModal}
                      aria-label="Close Case Study"
                      className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Modal Scrollable Body */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                  
                  {/* Visual Preview + Metrics Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                    <div className="sm:col-span-5 flex justify-center">
                      <div className="w-48 aspect-[9/19] rounded-[24px] p-2 bg-slate-800 border border-white/20 shadow-2xl overflow-hidden">
                        <img
                          src={selectedProject.fullImage}
                          alt={selectedProject.imageAlt || selectedProject.title}
                          width={192}
                          height={405}
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

                    {selectedProject.challenges && (
                      <div>
                        <h4 className="text-sm font-bold font-heading uppercase tracking-wider text-purple-400 mb-1.5">
                          Technical Challenges Solved
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                          {selectedProject.challenges}
                        </p>
                      </div>
                    )}
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
                  <Link
                    to={`/projects/${selectedProject.id}`}
                    className="text-xs text-cyan-400 hover:text-cyan-300 underline font-semibold"
                  >
                    View Full Case Study Page →
                  </Link>
                  <a
                    href="#contact"
                    onClick={closeProjectModal}
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
