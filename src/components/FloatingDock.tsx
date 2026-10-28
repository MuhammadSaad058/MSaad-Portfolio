import { useState, useEffect } from "react";
import { MessageCircle, Calculator, ArrowUp, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingDock = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToEstimator = () => {
    const el = document.getElementById("estimator");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      <AnimatePresence>
        {!minimized ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="flex items-center gap-2 p-1.5 pl-3 rounded-full bg-[#0c1222]/90 backdrop-blur-xl border border-cyan-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
          >
            {/* Status Indicator */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 pr-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span className="hidden sm:inline-block text-[11px] font-heading font-bold text-white">
                Available for New Sprints
              </span>
            </div>

            {/* Quick Estimator */}
            <button
              onClick={scrollToEstimator}
              className="p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white transition-colors"
              title="Estimate Project Cost"
            >
              <Calculator className="w-4 h-4 text-cyan-400" />
            </button>

            {/* Direct WhatsApp CTA */}
            <a
              href="https://wa.me/923346664252?text=Hi%20Saad,%20I%20would%20like%20to%20discuss%20a%20mobile%20app%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Minimize button */}
            <button
              onClick={() => setMinimized(true)}
              className="p-1 text-slate-500 hover:text-slate-300"
              title="Minimize"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ) : (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={() => setMinimized(false)}
            className="p-3 rounded-full bg-[#0c1222] border border-cyan-500/40 text-cyan-400 shadow-xl"
            title="Open Quick Actions"
          >
            <MessageCircle className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="p-2.5 rounded-full bg-[#0c1222]/90 hover:bg-cyan-500 hover:text-white text-slate-400 border border-white/10 backdrop-blur-xl transition-all shadow-lg"
        title="Back to Top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
};

export default FloatingDock;

