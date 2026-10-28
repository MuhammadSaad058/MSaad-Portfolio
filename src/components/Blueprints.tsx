import { Car, Flame, MapPin, ShoppingBag, Mic, Truck, Clock, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const Blueprints = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const blueprints = [
    {
      title: "On-Demand Service Marketplace",
      model: "Uber / TaskRabbit / Bayworks model",
      icon: <Car className="w-5 h-5 text-cyan-400" />,
      timeline: "3–4 Weeks",
      badge: "High Demand",
      description:
        "Two-sided platform connecting customers with service professionals. Includes live GPS tracking, provider dispatch, booking calendar, in-app messaging, and Stripe split payouts.",
      features: [
        "Real-time Google Maps driver/provider tracking",
        "Dual-role authentication (Customer & Service Provider)",
        "Automated booking dispatch with push notifications",
        "Stripe Connect escrow and instant payouts",
      ],
      tagColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
    },
    {
      title: "Real-Time Voice & Video Exchange",
      model: "Talk2Learn / Clubhouse model",
      icon: <Mic className="w-5 h-5 text-purple-400" />,
      timeline: "3–4 Weeks",
      badge: "Audio/Video SFU",
      description:
        "Interactive audio/video community platform with low-latency live rooms, speaker stages, listener audience, peer-to-peer messaging, and Agora WebRTC SFU streaming architecture.",
      features: [
        "Agora WebRTC low-latency audio/video rooms",
        "Speaker queue, raised hands & moderator controls",
        "Real-time presence & user profile status",
        "In-room live chat & gifting micro-transactions",
      ],
      tagColor: "border-purple-500/30 text-purple-400 bg-purple-500/10",
    },
    {
      title: "Gamified Habit & Learning App",
      model: "Duolingo / Noom / Fabulous model",
      icon: <Flame className="w-5 h-5 text-amber-400" />,
      timeline: "2–3 Weeks",
      badge: "High Retention",
      description:
        "High-engagement daily habit and educational tracker with streak counters, XP level progression, milestone celebration animations, and monthly premium subscription paywalls.",
      features: [
        "Streak protection, daily reminders & badge unlocks",
        "60fps Reanimated celebratory particle bursts",
        "Apple In-App Purchases & Google Play Billing tiers",
        "Interactive quiz & modular learning units",
      ],
      tagColor: "border-amber-500/30 text-amber-400 bg-amber-500/10",
    },
    {
      title: "Community & Interactive Discovery Maps",
      model: "AllTrails / Strava / Activity Maps model",
      icon: <MapPin className="w-5 h-5 text-emerald-400" />,
      timeline: "3 Weeks",
      badge: "Geolocation",
      description:
        "Location-first discovery application where users discover curated venues, hiking spots, and local events on dynamic vector maps with offline caching and community reviews.",
      features: [
        "Interactive Google Maps / Mapbox cluster pins",
        "Offline map tile caching for remote areas",
        "User-generated check-ins, photos & reviews",
        "Event registration and QR code ticket check-in",
      ],
      tagColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    },
    {
      title: "D2C Mobile E-Commerce Store",
      model: "Nike / Shopify / Souvenir Store model",
      icon: <ShoppingBag className="w-5 h-5 text-blue-400" />,
      timeline: "2–3 Weeks",
      badge: "High Conversion",
      description:
        "Frictionless mobile shopping application with high-conversion product catalogs, variant selectors, Apple Pay & Google Pay checkout, and automated shipping order tracking.",
      features: [
        "Sub-second catalog search and faceted filtering",
        "Single-tap Apple Pay & credit card checkout via Stripe",
        "Wishlist, cart sync & abandoned cart push notifications",
        "Live order shipment tracking & digital receipts",
      ],
      tagColor: "border-blue-500/30 text-blue-400 bg-blue-500/10",
    },
    {
      title: "B2B Logistics & Dispatch Platform",
      model: "Flexport / ProperMech Pro model",
      icon: <Truck className="w-5 h-5 text-rose-400" />,
      timeline: "3–4 Weeks",
      badge: "Enterprise Grade",
      description:
        "Enterprise field operations suite for technicians, warehouse staff, or delivery drivers with barcode/QR scanning, AI repair diagnosis, and offline work order logging.",
      features: [
        "Fast barcode / QR code camera scanning engine",
        "AI Service Writer for automated work summaries",
        "Offline-first work order sync with SQLite",
        "Digital customer sign-off & PDF invoice generator",
      ],
      tagColor: "border-rose-500/30 text-rose-400 bg-rose-500/10",
    },
  ];

  return (
    <section id="blueprints" className="py-24 relative bg-transparent border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 mb-4">
            Proven Startup Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight mb-4">
            STARTUP APP BLUEPRINTS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Want to build an app modeled after proven industry winners? These pre-architected solution blueprints allow us to bypass weeks of trial-and-error and launch your custom product in 2–4 weeks.
          </p>
        </div>

        {/* 6 Blueprint Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blueprints.map((bp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-2xl p-6 sm:p-7 bg-[#0c1222]/80 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
                    {bp.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${bp.tagColor}`}>
                      {bp.badge}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 bg-white/[0.03] px-2 py-0.5 rounded-md border border-white/[0.06]">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      <span>{bp.timeline}</span>
                    </span>
                  </div>
                </div>

                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  {bp.model}
                </div>
                <h3 className="text-xl font-bold font-heading text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {bp.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                  {bp.description}
                </p>

                {/* Features */}
                <div className="space-y-2 pt-4 border-t border-white/[0.06] mb-6">
                  {bp.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <button
                onClick={scrollToContact}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-white/[0.04] hover:bg-cyan-500 hover:text-white border border-white/10 hover:border-cyan-500 transition-all duration-200 flex items-center justify-center gap-1.5"
              >
                <span>Build This Model</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blueprints;

