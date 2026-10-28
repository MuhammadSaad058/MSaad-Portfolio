import { Smartphone, Sparkles, CheckCircle2, Apple, Play } from "lucide-react";

const TrustTicker = () => {
  const tickerItems = [
    {
      name: "Talk2Learn",
      category: "Agora WebRTC • Live Audio/Video",
      icon: "🎙️",
      stores: "App Store & Play Store",
      color: "text-purple-400 border-purple-500/20 bg-purple-500/5",
    },
    {
      name: "Quit Puffing",
      category: "Habit & Dopamine Gamification",
      icon: "🚭",
      stores: "Google Play Store",
      color: "text-amber-400 border-amber-500/20 bg-amber-500/5",
    },
    {
      name: "Medroof",
      category: "Telemedicine & Wellness Spa",
      icon: "🩺",
      stores: "App Store & Play Store",
      color: "text-teal-400 border-teal-500/20 bg-teal-500/5",
    },
    {
      name: "Souvenir Store",
      category: "E-Commerce • Stripe Mobile",
      icon: "🛍️",
      stores: "Apple App Store",
      color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
    },
    {
      name: "ProperMech",
      category: "On-Demand Automotive",
      icon: "🚗",
      stores: "Google Play Store",
      color: "text-amber-400 border-amber-500/20 bg-amber-500/5",
    },
    {
      name: "ProperMech Pro",
      category: "Dispatch & AI Service Writer",
      icon: "🔧",
      stores: "Google Play Store",
      color: "text-rose-400 border-rose-500/20 bg-rose-500/5",
    },
    {
      name: "Tap Wars",
      category: "60 FPS Multiplayer Reflex Game",
      icon: "⚡",
      stores: "Google Play Store",
      color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
    },
    {
      name: "Activity Maps",
      category: "Events & Venue Geolocation",
      icon: "📍",
      stores: "App Store & Play Store",
      color: "text-blue-400 border-blue-500/20 bg-blue-500/5",
    },
    {
      name: "SavorConnect",
      category: "Food Delivery & Live Tracking",
      icon: "🍔",
      stores: "App Store & Play Store",
      color: "text-orange-400 border-orange-500/20 bg-orange-500/5",
    },
    {
      name: "VCROW",
      category: "Dual-Portal School EdTech",
      icon: "🎓",
      stores: "Google Play Store",
      color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5",
    },
  ];

  // Duplicate for seamless infinite marquee loop
  const duplicated = [...tickerItems, ...tickerItems];

  return (
    <section className="py-8 bg-transparent backdrop-blur-sm border-y border-white/[0.06] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-heading">
              01 / TRUSTED SHIPPED PRODUCTION APPS
            </span>
            <span className="hidden sm:inline-block text-xs text-slate-400">
              Powering businesses, founders &amp; mobile users worldwide
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>10+ Apps Live in Apple &amp; Google Stores</span>
          </div>
        </div>
      </div>

      {/* Marquee Track with gradient edge masks */}
      <div className="relative w-full overflow-hidden mask-gradient-x pt-2">
        <div className="marquee-track flex items-center gap-4 sm:gap-6">
          {duplicated.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border backdrop-blur-md shrink-0 cursor-default transition-all duration-300 hover:scale-105 ${item.color}`}
            >
              <span className="text-xl">{item.icon}</span>
              <div>
                <div className="text-xs font-bold font-heading text-white tracking-wide">
                  {item.name}
                </div>
                <div className="text-[10px] text-slate-400 font-medium">
                  {item.category}
                </div>
              </div>
              <span className="ml-2 text-[9px] font-semibold text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded-md border border-white/[0.06] shrink-0">
                {item.stores}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustTicker;

