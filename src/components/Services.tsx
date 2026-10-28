import { Smartphone, Zap, Database, Rocket, LayoutDashboard, Wrench, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const valueProps = [
    "60fps Native Fluidity",
    "Guaranteed 2-4 Wk Sprints",
    "100% IP & Source Ownership",
    "Direct Senior Engineer Access",
  ];

  const services = [
    {
      icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
      badge: "iOS & Android",
      tagline: "React Native & Flutter Engineering",
      title: "Custom Mobile App Development",
      description:
        "End-to-end cross-platform mobile development that feels 100% native. Buttery 60fps animations, offline-first data sync, hardware sensor access, and simultaneous deployment to Apple App Store and Google Play from a single codebase.",
      deliverables: [
        "Single unified codebase for iOS & Android with native feel",
        "60fps micro-animations with Reanimated & Gesture Handler",
        "Offline-first synchronization with local cache & SQLite",
        "Hardware integrations: GPS, camera, biometric auth & APNs/FCM",
        "Full source code ownership with strict TypeScript architecture",
      ],
      ctaText: "Start Mobile Project",
      borderColor: "hover:border-cyan-500/40",
      accentBg: "bg-cyan-500/10",
    },
    {
      icon: <Rocket className="w-6 h-6 text-blue-400" />,
      badge: "Rapid Launch",
      tagline: "From Wireframe to Store Release",
      title: "Startup MVP Engineering (2–4 Weeks)",
      description:
        "Got a startup concept? Validate in the real market with a high-converting MVP — complete with cross-platform mobile apps, cloud backend, user authentication, in-app purchases / Stripe, and an intuitive administrative portal.",
      deliverables: [
        "Laser-focused MVP architecture designed for high user retention",
        "Firebase / Supabase cloud database, auth, and automated storage",
        "Administrative dashboard for user management & live analytics",
        "Payment integration (Stripe, Apple IAP, Google Play Billing)",
        "100% store submission ready with TestFlight beta deployment",
      ],
      ctaText: "Build My Startup MVP",
      borderColor: "hover:border-blue-500/40",
      accentBg: "bg-blue-500/10",
    },
    {
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      badge: "Cloud Scalability",
      tagline: "Serverless, Real-time & Scalable",
      title: "Firebase & Supabase Cloud Architecture",
      description:
        "Zero-DevOps serverless cloud backend infrastructure built to effortlessly scale to hundreds of thousands of users. Real-time document databases, secure row-level security (RLS), serverless cloud functions, and robust webhook pipelines.",
      deliverables: [
        "Firebase Firestore & Realtime DB schema design & indexing",
        "Supabase PostgreSQL with Row Level Security (RLS) policies",
        "Node.js REST APIs and serverless automated Cloud Functions",
        "Third-party APIs (Google Maps, Twilio, SendGrid, RevenueCat)",
        "Push notifications delivery with FCM and Apple APNs",
      ],
      ctaText: "Integrate Backend",
      borderColor: "hover:border-emerald-500/40",
      accentBg: "bg-emerald-500/10",
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      badge: "100% Approval",
      tagline: "Apple & Google Play Compliance",
      title: "App Store Publishing & Code Rescue",
      description:
        "App rejected by Apple or struggling with first-time submission? I handle the entire submission pipeline — Apple Developer certificates, provisioning profiles, privacy manifests, Google Play policy audits, and rejection resolution.",
      deliverables: [
        "Apple Developer account & provisioning profile configuration",
        "App Store Connect metadata, privacy nutrition labels & store assets",
        "Google Play Console target API & privacy policy compliance",
        "TestFlight & Google Play Internal beta distribution setups",
        "Direct resolution of Apple Human Interface guideline issues",
      ],
      ctaText: "Publish My App",
      borderColor: "hover:border-purple-500/40",
      accentBg: "bg-purple-500/10",
    },
    {
      icon: <LayoutDashboard className="w-6 h-6 text-indigo-400" />,
      badge: "Web & SaaS",
      tagline: "Modern Responsive Portals",
      title: "React.js Web Apps & Admin Dashboards",
      description:
        "High-performance web applications, customer portals, and internal administrative dashboards built with React.js, TypeScript, and modern styling — fully responsive across mobile, tablet, and desktop screens.",
      deliverables: [
        "Modular component architecture with React 18 & strict TypeScript",
        "Ultra-responsive mobile-first layout for tablets and desktops",
        "Role-based access control (RBAC) & user permission tiers",
        "Live interactive charts, real-time tables, and data exports",
        "Optimized deployment on Vercel with automatic CI/CD pipelines",
      ],
      ctaText: "Build Web App",
      borderColor: "hover:border-indigo-500/40",
      accentBg: "bg-indigo-500/10",
    },
    {
      icon: <Wrench className="w-6 h-6 text-amber-400" />,
      badge: "Optimization",
      tagline: "Zero Stutter & Stability",
      title: "Performance Tuning & Bug Fixing",
      description:
        "Stuck with sluggish frame rates, random app crashes, or outdated dependencies? I audit and overhaul React Native codebases to restore sub-second launch times, eliminate UI thread stutter, and upgrade architecture.",
      deliverables: [
        "Flamegraph profiling & UI thread bottleneck removal",
        "Memory leak detection & render cycle reduction",
        "Hermes engine & React Native Architecture migration",
        "Crashlytics error resolution & boundary hardening",
        "Legacy package upgrades without breaking changes",
      ],
      ctaText: "Optimize My App",
      borderColor: "hover:border-amber-500/40",
      accentBg: "bg-amber-500/10",
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-transparent border-t border-white/[0.06]">
      {/* Background radial glows */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 mb-4">
            {t.services.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight mb-4">
            {t.services.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.services.subtitle}
          </p>

          {/* Value Props Bar */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-8">
            {valueProps.map((prop, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-white/[0.03] border border-white/[0.06] px-3 py-1.5 rounded-full"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>{prop}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`rounded-2xl p-6 sm:p-7 bg-[#0c1222]/70 backdrop-blur-xl border border-white/[0.08] ${service.borderColor} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between group`}
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded-xl ${service.accentBg} border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                    {service.badge}
                  </span>
                </div>

                <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                  {service.tagline}
                </div>
                <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 pt-4 border-t border-white/[0.06] mb-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Key Deliverables:
                  </div>
                  {service.deliverables.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2 text-xs text-slate-400 leading-normal">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={scrollToContact}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-white/[0.04] hover:bg-cyan-500 hover:text-white border border-white/10 hover:border-cyan-500 transition-all duration-200 flex items-center justify-center gap-1.5 group/btn"
              >
                <span>{service.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Tailored Scoping Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-2xl p-7 sm:p-9 bg-gradient-to-r from-cyan-950/40 via-blue-950/40 to-slate-900/40 border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl"
        >
          <div>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-cyan-400 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 inline-block mb-2">
              Tailored Scoping &amp; Architecture
            </span>
            <h4 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Not sure which architecture suits your project?
            </h4>
            <p className="text-slate-400 text-sm max-w-2xl mt-1.5">
              Let's discuss your timeline, features, and target platforms. I'll outline the optimal stack, MVP sprint milestones, and fixed pricing with zero obligation.
            </p>
          </div>
          <button
            onClick={scrollToContact}
            className="flex-shrink-0 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all hover:scale-105"
          >
            Let's Discuss Your Project
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;

