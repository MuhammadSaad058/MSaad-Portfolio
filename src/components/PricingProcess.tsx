import { Check, ArrowRight, ShieldCheck, Clock, Zap, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const PricingProcess = () => {
  const { t } = useLanguage();
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const tiers = [
    {
      name: "Startup MVP Sprint",
      badge: "Most Popular for Founders",
      tagline: "Turn your concept or Figma designs into a live, investor-ready mobile app fast.",
      price: "$1,800",
      priceSub: "Starting from",
      timeline: "2 to 4 Weeks",
      idealFor: "Early-stage founders, startup ideators & entrepreneurs needing fast market validation.",
      features: [
        "Cross-platform iOS & Android single codebase (React Native / Flutter)",
        "Authentication (Email, Google, Apple Sign-In & biometrics)",
        "Cloud backend setup (Firebase or Supabase)",
        "Real-time database, cloud storage & security rules",
        "Core 5–8 screens engineered with 60fps animations",
        "App Store & Google Play Store submission & approval",
        "100% source code ownership & GitHub repo transfer",
        "14-day post-launch bug warranty",
      ],
      popular: true,
      ctaText: "Launch MVP Sprint",
    },
    {
      name: "Complete Production App",
      badge: "Full-Featured Platform",
      tagline: "End-to-end full-scale mobile ecosystem with custom web admin command center.",
      price: "$3,500",
      priceSub: "Starting from",
      timeline: "4 to 8 Weeks",
      idealFor: "Funded startups, growing businesses & companies replacing legacy mobile applications.",
      features: [
        "Everything in Startup MVP Sprint",
        "10–18 production screens with complex user flows",
        "Custom React.js web admin portal & executive analytics dashboard",
        "Stripe payments, subscriptions (IAP) & automated payout splitting",
        "Hardware sensors: GPS geofencing, camera, QR/barcode scanner",
        "Push notification campaigns via FCM & Apple APNs",
        "Role-based access control (RBAC) & audit logs",
        "30-day post-launch warranty & monitoring",
      ],
      popular: false,
      ctaText: "Build Production App",
    },
    {
      name: "Dedicated Monthly Engineering",
      badge: "Continuous Velocity",
      tagline: "Your senior mobile engineer on demand for continuous sprints and feature releases.",
      price: "$1,500",
      priceSub: "Per month / flexible",
      timeline: "Ongoing Retainer",
      idealFor: "Scale-ups and product teams requiring dedicated senior velocity without agency fees.",
      features: [
        "Direct Slack / WhatsApp communication with sub-2hr response time",
        "Weekly TestFlight & Google Play Internal test releases",
        "Continuous feature delivery, API integrations & bug fixes",
        "Performance optimization (Hermes engine, Reanimated 3)",
        "App Store & Google Play compliance upgrades (new SDK targets)",
        "Zero long-term lock-in: pause or cancel anytime",
      ],
      popular: false,
      ctaText: "Hire on Retainer",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Scoping & Architecture Blueprint",
      desc: "We discuss your project goals, user personas, and target platforms (iOS & Android). I provide a comprehensive breakdown of technical architecture, recommended stack, and fixed milestone budget.",
    },
    {
      step: "02",
      title: "Fixed Milestone Proposal",
      desc: "Clear agreement with zero surprises. You get a transparent scope of work, timeline commitments, and milestone-based invoicing where you only release payments when deliverables pass testing.",
    },
    {
      step: "03",
      title: "Agile Sprints & Weekly TestFlight Builds",
      desc: "I convert Figma screens into modular TypeScript code. Every week you receive fresh interactive test builds on TestFlight & Google Play Internal to test on your own physical devices.",
    },
    {
      step: "04",
      title: "Store Approval & Full IP Handover",
      desc: "I manage Apple App Store & Google Play Store submission until official approval is secured. You receive 100% of the repository, credentials, and documentation with 14-day warranty.",
    },
  ];

  return (
    <section id="pricing" className="py-24 relative bg-transparent border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 mb-4">
            {t.pricing.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.pricing.subtitle}
          </p>

          {/* Quick Unblock Pill */}
          <div className="mt-6">
            <a
              href="https://wa.me/923346664252?text=Hi%20Saad,%20I%20would%20like%20to%20book%20a%20consultation%20call%20for%20my%20app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full transition-colors"
            >
              <span>{t.pricing.unblockPill}</span>
            </a>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                tier.popular
                  ? "bg-[#0d1628] border-2 border-cyan-500/80 shadow-[0_0_40px_rgba(6,182,212,0.2)] lg:-translate-y-2"
                  : "bg-[#0c1222]/80 border border-white/[0.08] hover:border-white/20"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                  {tier.badge}
                </div>
              )}

              <div>
                {!tier.popular && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] inline-block mb-3">
                    {tier.badge}
                  </span>
                )}
                
                <h3 className="text-2xl font-bold font-heading text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {tier.tagline}
                </p>

                {/* Price block */}
                <div className="mb-6 pb-6 border-b border-white/[0.08]">
                  <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                    {tier.priceSub}
                  </div>
                  <div className="text-4xl font-extrabold font-heading text-white tracking-tight mt-0.5">
                    {tier.price}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 mt-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Timeline: {tier.timeline}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    What's Included:
                  </div>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                      <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <button
                onClick={scrollToContact}
                className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 ${
                  tier.popular
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-[1.02]"
                    : "bg-white/[0.04] hover:bg-cyan-500 hover:text-white text-slate-200 border border-white/10 hover:border-cyan-500"
                }`}
              >
                <span>{tier.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* ── 4-Step Engagement Process ── */}
        <div className="pt-16 border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
              Execution Roadmap
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              HOW WE WORK TOGETHER (4 STEPS)
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              From our first scoping conversation to official App Store deployment in 30 days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#0c1222]/50 border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-300 relative group"
              >
                <div className="text-4xl font-extrabold font-heading text-white/10 group-hover:text-cyan-500/20 transition-colors mb-4">
                  {step.step}
                </div>
                <h4 className="text-base font-bold font-heading text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingProcess;

