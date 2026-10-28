import { useState, useMemo } from "react";
import { Calculator, MessageCircle, Send, Check, Sparkles, Smartphone, Layers, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Estimator = () => {
  const { t } = useLanguage();
  const [selectedArch, setSelectedArch] = useState<string>("marketplace");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("both");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "auth",
    "backend",
    "payments",
    "pushNotifications",
    "storeSubmission",
  ]);
  const [selectedDesign, setSelectedDesign] = useState<string>("figmaReady");

  const architectures = [
    {
      id: "marketplace",
      name: "On-Demand / Marketplace",
      desc: "Two-sided platform (Clients & Providers) with real-time bookings & orders.",
      basePrice: 1800,
      baseWeeks: 3,
    },
    {
      id: "healthHabit",
      name: "Health, Wellness & Habit",
      desc: "Gamified trackers, daily logs, recovery streaks, and subscription tiers.",
      basePrice: 1600,
      baseWeeks: 2.5,
    },
    {
      id: "communityMaps",
      name: "Community, Social & Maps",
      desc: "Geolocation discovery, interactive map pins, user reviews & check-ins.",
      basePrice: 1700,
      baseWeeks: 3,
    },
    {
      id: "ecommerce",
      name: "Mobile E-Commerce & Retail",
      desc: "Product catalogs, cart sync, Stripe/Apple Pay checkout, and order history.",
      basePrice: 1600,
      baseWeeks: 2.5,
    },
    {
      id: "audioVideo",
      name: "Live Audio & Video Rooms",
      desc: "Agora WebRTC SFU streaming, real-time presence & live speaker stages.",
      basePrice: 2000,
      baseWeeks: 3.5,
    },
    {
      id: "customMvp",
      name: "Custom Startup MVP",
      desc: "Bespoke mobile companion app or novel tech startup concept from scratch.",
      basePrice: 1500,
      baseWeeks: 2,
    },
  ];

  const platforms = [
    {
      id: "both",
      name: "Both (iOS & Android)",
      desc: "Single codebase (React Native/Flutter), saves ~40% dev cost",
      multiplier: 1.0,
      timeAdd: 0,
    },
    {
      id: "ios",
      name: "iOS Only",
      desc: "Dedicated Apple App Store target with native feel",
      multiplier: 0.85,
      timeAdd: -0.5,
    },
    {
      id: "android",
      name: "Android Only",
      desc: "Dedicated Google Play Store target across devices",
      multiplier: 0.85,
      timeAdd: -0.5,
    },
  ];

  const features = [
    {
      id: "auth",
      name: "Auth & Social Login",
      desc: "Email, Google & Apple Sign-In with biometrics",
      price: 200,
      weeks: 0.5,
    },
    {
      id: "backend",
      name: "Cloud Backend (Firebase/Supabase)",
      desc: "Real-time DB, security rules & cloud storage",
      price: 350,
      weeks: 0.5,
    },
    {
      id: "payments",
      name: "Payments & Subscriptions (Stripe/IAP)",
      desc: "Credit cards, Apple Pay & recurring subscriptions",
      price: 300,
      weeks: 0.5,
    },
    {
      id: "maps",
      name: "Google Maps & Geolocation",
      desc: "Interactive vector maps, GPS tracking & radius pins",
      price: 300,
      weeks: 0.5,
    },
    {
      id: "pushNotifications",
      name: "Push Notifications (FCM / APNs)",
      desc: "Automated push alerts, marketing & background triggers",
      price: 200,
      weeks: 0.3,
    },
    {
      id: "offlineSync",
      name: "Offline-First Sync Engine",
      desc: "Offline SQLite caching; auto-sync when back online",
      price: 400,
      weeks: 0.7,
    },
    {
      id: "adminDashboard",
      name: "Web Admin Panel (React.js)",
      desc: "Manage users, review listings, revenue charts & broadcasts",
      price: 550,
      weeks: 1.0,
    },
    {
      id: "storeSubmission",
      name: "Apple & Google Store Publishing",
      desc: "Certificates, TestFlight beta & 100% approval audit",
      price: 250,
      weeks: 0.5,
    },
  ];

  const designStatuses = [
    {
      id: "figmaReady",
      name: "Figma Designs Ready",
      desc: "Finished UI/UX ready for pixel-perfect coding",
      price: 0,
      weeks: 0,
    },
    {
      id: "wireframes",
      name: "Rough Wireframes / Sketches",
      desc: "Screen layouts sketched; need UI polish before coding",
      price: 300,
      weeks: 0.5,
    },
    {
      id: "ideaOnly",
      name: "Idea / Concept Only",
      desc: "Need full UX/UI architecture + high-converting mobile design",
      price: 600,
      weeks: 1.0,
    },
  ];

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const calculation = useMemo(() => {
    const arch = architectures.find((a) => a.id === selectedArch) || architectures[0];
    const plat = platforms.find((p) => p.id === selectedPlatform) || platforms[0];
    const design = designStatuses.find((d) => d.id === selectedDesign) || designStatuses[0];

    const featurePrice = selectedFeatures.reduce((acc, fId) => {
      const feat = features.find((f) => f.id === fId);
      return acc + (feat ? feat.price : 0);
    }, 0);

    const featureWeeks = selectedFeatures.reduce((acc, fId) => {
      const feat = features.find((f) => f.id === fId);
      return acc + (feat ? feat.weeks : 0);
    }, 0);

    const rawTotal = (arch.basePrice + featurePrice + design.price) * plat.multiplier;
    const rawWeeks = arch.baseWeeks + featureWeeks + design.weeks + plat.timeAdd;

    const formattedPrice = Math.round(rawTotal / 50) * 50;
    const roundedWeeks = Math.max(2, Math.round(rawWeeks));

    return {
      price: formattedPrice,
      weeksMin: Math.max(2, roundedWeeks - 1),
      weeksMax: roundedWeeks + 1,
    };
  }, [selectedArch, selectedPlatform, selectedFeatures, selectedDesign]);

  const whatsappMessage = useMemo(() => {
    const archName = architectures.find((a) => a.id === selectedArch)?.name;
    const platName = platforms.find((p) => p.id === selectedPlatform)?.name;
    const text = `Hi Saad, I used your portfolio cost estimator for a ${archName} (${platName}). Estimated investment is around $${calculation.price.toLocaleString()} in ${calculation.weeksMin}-${calculation.weeksMax} weeks. Let's discuss!`;
    return encodeURIComponent(text);
  }, [selectedArch, selectedPlatform, calculation]);

  return (
    <section id="estimator" className="py-24 relative bg-transparent border-t border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 mb-4">
            {t.estimator.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight mb-4">
            {t.estimator.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.estimator.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Options Column (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Step 1: Architecture */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-400 mb-4 font-heading">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-xs text-cyan-300">1</span>
                <span>Select App Architecture</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {architectures.map((arch) => (
                  <button
                    key={arch.id}
                    onClick={() => setSelectedArch(arch.id)}
                    className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                      selectedArch === arch.id
                        ? "bg-cyan-500/10 border-cyan-500/60 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                        : "bg-[#0c1222]/60 border-white/[0.08] hover:border-white/20"
                    }`}
                  >
                    <div className="font-bold font-heading text-sm text-white mb-1 flex items-center justify-between">
                      <span>{arch.name}</span>
                      {selectedArch === arch.id && <Check className="w-4 h-4 text-cyan-400" />}
                    </div>
                    <div className="text-xs text-slate-400 leading-normal">{arch.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Target Platform */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-400 mb-4 font-heading">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-xs text-cyan-300">2</span>
                <span>Target Platforms</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {platforms.map((plat) => (
                  <button
                    key={plat.id}
                    onClick={() => setSelectedPlatform(plat.id)}
                    className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                      selectedPlatform === plat.id
                        ? "bg-cyan-500/10 border-cyan-500/60 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                        : "bg-[#0c1222]/60 border-white/[0.08] hover:border-white/20"
                    }`}
                  >
                    <div className="font-bold font-heading text-sm text-white mb-1 flex items-center justify-between">
                      <span>{plat.name}</span>
                      {selectedPlatform === plat.id && <Check className="w-4 h-4 text-cyan-400" />}
                    </div>
                    <div className="text-xs text-slate-400 leading-normal">{plat.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Features */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-400 mb-4 font-heading">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-xs text-cyan-300">3</span>
                <span>Add Desired Features</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all duration-200 flex items-start gap-3 ${
                        isChecked
                          ? "bg-cyan-500/10 border-cyan-500/50"
                          : "bg-[#0c1222]/60 border-white/[0.08] hover:border-white/20"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border transition-colors ${
                          isChecked
                            ? "bg-cyan-500 border-cyan-500 text-white"
                            : "border-slate-600 bg-slate-900"
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div>
                        <div className="font-semibold text-xs text-white leading-tight">{feat.name}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5 leading-normal">{feat.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Design Readiness */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-400 mb-4 font-heading">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-xs text-cyan-300">4</span>
                <span>Design Readiness</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {designStatuses.map((ds) => (
                  <button
                    key={ds.id}
                    onClick={() => setSelectedDesign(ds.id)}
                    className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                      selectedDesign === ds.id
                        ? "bg-cyan-500/10 border-cyan-500/60 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                        : "bg-[#0c1222]/60 border-white/[0.08] hover:border-white/20"
                    }`}
                  >
                    <div className="font-bold font-heading text-sm text-white mb-1 flex items-center justify-between">
                      <span>{ds.name}</span>
                      {selectedDesign === ds.id && <Check className="w-4 h-4 text-cyan-400" />}
                    </div>
                    <div className="text-xs text-slate-400 leading-normal">{ds.desc}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Summary Card (4 cols) */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="p-7 rounded-2xl bg-[#0c1222] border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-bold uppercase tracking-wider text-cyan-300 mb-6">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Real-Time Estimate</span>
              </div>

              {/* Price Display */}
              <div className="mb-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  Estimated Investment
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
                  ${calculation.price.toLocaleString()}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Fixed-price milestone billing with 100% IP ownership
                </div>
              </div>

              {/* Timeline Display */}
              <div className="mb-6 pb-6 border-b border-white/[0.08]">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  Estimated Timeline
                </div>
                <div className="text-2xl font-bold font-heading text-cyan-400">
                  {calculation.weeksMin} to {calculation.weeksMax} Weeks
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Includes TestFlight beta &amp; store publishing
                </div>
              </div>

              {/* Included Highlights */}
              <div className="space-y-2 mb-7">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Cross-platform iOS &amp; Android single codebase</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{selectedFeatures.length} specialized features selected</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>14-day post-launch warranty &amp; support</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/923346664252?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Discuss This Estimate on WhatsApp</span>
                </a>

                <a
                  href={`mailto:msaadi252gb@gmail.com?subject=Project Estimate Inquiry&body=Hi Saad, I estimated a mobile app project with around $${calculation.price} budget in ${calculation.weeksMin}-${calculation.weeksMax} weeks. Let us talk!`}
                  className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Send Project Brief via Email</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Estimator;

