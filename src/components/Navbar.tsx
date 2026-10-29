import { useState, useEffect } from "react";
import { Download, ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent } from "@/lib/analytics";

const Navbar = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Force dark mode */
  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);

  useEffect(() => {
    const handleActiveSectionChange = (event: Event) => {
      setActiveSection((event as CustomEvent<string>).detail);
    };
    window.addEventListener("activeSectionChange", handleActiveSectionChange);
    return () =>
      window.removeEventListener(
        "activeSectionChange",
        handleActiveSectionChange
      );
  }, []);

  const navItems = [
    { label: t.nav.projects, href: "projects" },
    { label: t.nav.services, href: "services" },
    { label: t.nav.blueprints, href: "blueprints" },
    { label: t.nav.pricing, href: "pricing" },
    { label: t.nav.about, href: "about" },
    { label: t.nav.contact, href: "contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    setIsMobileMenuOpen(false);
    if (window.location.pathname !== "/") {
      return;
    }
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const downloadCV = () => {
    trackEvent("resume_download", { source: "navbar" });
    const link = document.createElement("a");
    link.href = "/Muhammad_Saad_CV.pdf";
    link.download = "Muhammad_Saad_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="fixed top-2 sm:top-4 inset-x-0 z-50 flex justify-center px-2 sm:px-6 pointer-events-none">
      <div className="w-full max-w-7xl mx-auto pointer-events-auto">
        <nav
          className={cn(
            "rounded-full transition-all duration-300 px-3 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-1.5 sm:gap-4",
            "bg-[#070b16]/90 backdrop-blur-2xl border border-cyan-500/25 shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
          )}
        >
          {/* ── Left: Branding + Status Pill ── */}
          <a
            href="/#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 group min-w-0"
            aria-label="Muhammad Saad Portfolio Home"
          >
            {/* Glowing radar dot */}
            <div className="relative flex h-3 w-3 items-center justify-center shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-tr from-cyan-400 to-indigo-500 shadow-[0_0_10px_#06b6d4]" />
            </div>

            <div className="flex flex-col text-left min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-display font-black text-xs sm:text-sm md:text-base tracking-tight text-white group-hover:text-cyan-400 transition-colors whitespace-nowrap">
                  Muhammad Saad
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 whitespace-nowrap">
                  {t.nav.availableForHire}
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium tracking-tight hidden xl:block whitespace-nowrap">
                React Native &amp; Flutter Specialist
              </span>
            </div>
          </a>

          {/* ── Center: Nav Links (Desktop) ── */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.label}
                  href={`/#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap",
                    isActive
                      ? "text-cyan-400 bg-cyan-500/10"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                  )}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* ── Right Actions: Language + Resume + Order Your App + Menu Toggle ── */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Language Selector Dropdown */}
            <LanguageSelector variant="navbar" />

            {/* Resume button (hidden on mobile, visible from tablet up) */}
            <button
              onClick={downloadCV}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all whitespace-nowrap shrink-0"
              title="Download CV"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{t.nav.resume}</span>
            </button>

            {/* Primary Order Your App CTA (Shortened label on very small screens) */}
            <a
              href="https://wa.me/923346664252?text=Hi%20Saad,%20I%20would%20like%20to%20order%20an%20app%20project"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("contact_whatsapp", { source: "navbar_order_app" })}
              className="inline-flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold text-white bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all hover:scale-105 whitespace-nowrap shrink-0"
            >
              <span className="hidden sm:inline">{t.nav.orderApp}</span>
              <span className="sm:hidden">Order</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer shrink-0"
              aria-label="Toggle navigation"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 text-cyan-400" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </nav>

        {/* ── Mobile Navigation Drawer with Backdrop ── */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md lg:hidden pointer-events-auto"
              />

              {/* Floating Menu Drawer */}
              <motion.div
                initial={{ opacity: 0, y: -16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.96 }}
                transition={{ type: "spring", damping: 28, stiffness: 350 }}
                className="fixed top-16 sm:top-20 left-3 right-3 sm:left-6 sm:right-6 z-50 lg:hidden max-w-lg mx-auto bg-[#0a1020]/98 backdrop-blur-2xl border border-cyan-500/30 rounded-3xl p-5 shadow-2xl overflow-hidden max-h-[calc(100vh-5rem)] flex flex-col justify-between pointer-events-auto space-y-4"
              >
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                      {t.nav.availableForHire}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
                    Navigation
                  </span>
                </div>

                {/* Nav links grid */}
                <div className="grid grid-cols-2 gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={`#${item.href}`}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        "px-3 py-2.5 rounded-xl text-xs font-semibold text-center transition-colors",
                        activeSection === item.href
                          ? "text-cyan-400 bg-cyan-500/15 border border-cyan-500/40 font-bold"
                          : "text-slate-300 hover:text-white bg-white/[0.03] border border-white/[0.06]"
                      )}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                {/* Language drawer selector */}
                <LanguageSelector variant="drawer" />

                {/* Drawer CTAs */}
                <div className="pt-2 flex gap-2">
                  <button
                    onClick={downloadCV}
                    className="flex-1 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{t.nav.resume} (PDF)</span>
                  </button>
                  <a
                    href="https://wa.me/923346664252?text=Hi%20Saad,%20I%20would%20like%20to%20discuss%20a%20mobile%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl text-xs font-bold text-center text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-md shadow-emerald-500/20 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Instant WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
