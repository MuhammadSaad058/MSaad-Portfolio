import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who owns the source code and intellectual property?",
      a: "You own 100% of all code, assets, and intellectual property from Day 1. All development is conducted directly in your private GitHub repository or transferred upon milestone completion. There are zero licensing royalties, no proprietary agency locks, and no vendor dependency.",
    },
    {
      q: "How do you guarantee 60fps performance across iOS & Android?",
      a: "I write strictly typed TypeScript or Dart with React Native Reanimated and Gesture Handler, which execute UI animations natively on the UI thread without crossing the JavaScript bridge. Combined with the Hermes engine and aggressive memoization, apps launch fast and scroll buttery smooth even on budget devices.",
    },
    {
      q: "What happens if Apple or Google rejects the app submission?",
      a: "I provide an unconditional 100% store approval guarantee. If Apple or Google requests changes regarding metadata, privacy nutrition labels, or guidelines (such as Guideline 4.2 or 5.1), I resolve the issues directly and resubmit at zero additional cost until official approval is secured.",
    },
    {
      q: "Can you convert my existing Figma design into a mobile app?",
      a: "Yes. I specialize in pixel-perfect Figma-to-code conversion. I preserve every spacing rule, micro-interaction, custom font, dark/light theme specification, and responsive edge case across iPhone and Android screen densities.",
    },
    {
      q: "How do milestone billing and payments work?",
      a: "Projects are divided into 2 to 4 clear, deliverable milestones (e.g., UI Architecture, Backend Integration, Beta Release, Store Approval). You only release escrow or milestone payments once you test and approve each working build on your own device.",
    },
    {
      q: "Do you provide post-launch maintenance and warranty?",
      a: "Yes. Every project includes a 14 to 30-day post-launch warranty covering any bug fixes, crash resolutions, or compatibility adjustments. For teams requiring continuous velocity, I also offer dedicated monthly retainer engineering.",
    },
  ];

  return (
    <section id="faq" className="py-24 relative bg-transparent border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 mb-4">
            {t.faq.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight mb-4">
            {t.faq.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0c1222]/80 border border-white/[0.08] hover:border-cyan-500/30 transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4"
                >
                  <span className="text-base sm:text-lg font-bold font-heading text-white">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-cyan-500/20 text-cyan-400 border-cyan-500/40" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 sm:px-7 pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/[0.04] pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;

