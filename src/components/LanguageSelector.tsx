import { useState, useRef, useEffect } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, languages, LanguageCode } from "@/context/LanguageContext";

interface LanguageSelectorProps {
  variant?: "navbar" | "drawer" | "footer";
}

const LanguageSelector = ({ variant = "navbar" }: LanguageSelectorProps) => {
  const { currentLanguage, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: LanguageCode) => {
    setLanguage(code);
    setIsOpen(false);
  };

  if (variant === "drawer") {
    return (
      <div className="space-y-2 pt-2 border-t border-white/[0.08]">
        <div className="flex items-center justify-between px-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 font-heading">
            Language / Idioma / 语言
          </span>
          <span className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">
            {languages.length} Available
          </span>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {languages.map((lang) => {
            const isSelected = currentLanguage.code === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`flex items-center justify-between p-2 rounded-xl text-left transition-all border ${
                  isSelected
                    ? "bg-cyan-500/15 border-cyan-500/50 text-cyan-300 font-bold shadow-sm shadow-cyan-500/20"
                    : "bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.08] text-slate-300"
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-base shrink-0">{lang.flag}</span>
                  <span className="text-xs truncate">{lang.nativeName}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 ml-1" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-200 shrink-0"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-sm shrink-0">{currentLanguage.flag}</span>
        <span className="uppercase text-[10px] sm:text-[11px] font-bold font-heading tracking-wider">
          {currentLanguage.code}
        </span>
        <ChevronDown
          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-cyan-400" : ""
          }`}
        />
      </button>

      {/* Dropdown Card Matching Screenshot Exact Design */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-72 rounded-2xl bg-[#0c1222]/95 backdrop-blur-2xl border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-3 z-50 overflow-hidden"
          >
            {/* Header: LANGUAGE — 5 AVAILABLE */}
            <div className="flex items-center justify-between px-2 pt-1 pb-2.5 border-b border-white/[0.08] mb-1.5">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-cyan-400 font-heading">
                LANGUAGE
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                {languages.length} AVAILABLE
              </span>
            </div>

            {/* Language Options List */}
            <div className="space-y-1">
              {languages.map((lang) => {
                const isSelected = currentLanguage.code === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleSelect(lang.code)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all ${
                      isSelected
                        ? "bg-cyan-500/15 border border-cyan-500/40 text-white font-bold shadow-sm shadow-cyan-500/20"
                        : "hover:bg-white/[0.06] text-slate-300 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-xl shrink-0 leading-none">{lang.flag}</span>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white tracking-wide">
                          {lang.nativeName}
                        </div>
                        <div className="text-[10px] text-slate-400 font-normal">
                          {lang.name}
                        </div>
                      </div>
                    </div>

                    {isSelected && (
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
