import { useState, useEffect } from "react";
import { Download, ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";

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
    const handleActiveSectionChange = (event: any) => {
      setActiveSection(event.detail);
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
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Muhammad_Saad_CV.pdf";
    link.download = "Muhammad_Saad_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <div className="w-full max-w-7xl mx-auto pointer-events-auto">
        <nav
          className={cn(
            "rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between",
            "bg-[#070b16]/90 backdrop-blur-2xl border border-cyan-500/25 shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
          )}
        >
          {/* ── Left: Branding + Status Pill ── */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="flex items-center gap-3 flex-shrink-0 group"
          >
            {/* Glowing avatar dot */}
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-white text-[11px] font-heading shadow-[0_0_12px_rgba(6,182,212,0.5)]">
                MS
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#070b16] animate-pulse" />
            </div>

            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold font-heading text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                  Muhammad Saad
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-500/30">
                  {t.nav.availableForHire}
                </span>
              </div>
              <div className="text-[10px] text-slate-400 font-medium tracking-tight">
                React Native &amp; Flutter Specialist
              </div>
            </div>
          </a>

          {/* ── Center: Nav Links (Desktop) ── */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.label}
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors duration-200",
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

          {/* ── Right Actions: Language + Resume + Order Your App ── */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Selector Dropdown */}
            <LanguageSelector variant="navbar" />

            {/* Resume button */}
            <button
              onClick={downloadCV}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all"
              title="Download CV"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.nav.resume}</span>
            </button>

            {/* Primary Order Your App CTA */}
            <a
              href="https://wa.me/923346664252?text=Hi%20Saad,%20I%20would%20like%20to%20order%20an%20app%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all hover:scale-105"
            >
              <span>{t.nav.orderApp}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </nav>

        {/* ── Mobile Navigation Drawer ── */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 p-4 rounded-3xl bg-[#070b16]/95 backdrop-blur-2xl border border-cyan-500/25 shadow-2xl space-y-3"
            >
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={`#${item.href}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "px-3 py-2 rounded-xl text-xs font-semibold text-center transition-colors",
                      activeSection === item.href
                        ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/30"
                        : "text-slate-300 hover:text-white bg-white/[0.02]"
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Language drawer selector */}
              <LanguageSelector variant="drawer" />

              <div className="pt-2 flex gap-2">
                <button
                  onClick={downloadCV}
                  className="flex-1 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-white/[0.04] border border-white/10 flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Resume PDF</span>
                </button>
                <a
                  href="https://wa.me/923346664252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl text-xs font-bold text-center text-white bg-gradient-to-r from-cyan-500 to-blue-600"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
