import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const Reviews = () => {
  const reviews = [
    {
      name: "Marcus Vance",
      role: "Founder & CEO, Bayworks Inc.",
      project: "ProperMech & ProperMech Pro",
      content:
        "Saad is an extraordinary mobile engineer. He built both our customer maintenance portal and technician dispatch application with real-time Firebase syncing and an AI service writer. The app runs silky smooth at 60fps and our field mechanics love using it every day.",
      rating: 5,
      avatar: "MV",
    },
    {
      name: "Tariq Al-Mansoor",
      role: "Product Director",
      project: "Talk2Learn Audio/Video",
      content:
        "We needed low-latency multi-user voice and video rooms for our language exchange startup, and Saad integrated Agora WebRTC SFU flawlessly into Flutter. His deep grasp of Riverpod state management and store submission helped us get approved on Apple and Google on our first try.",
      rating: 5,
      avatar: "TM",
    },
    {
      name: "Zain Ul Abidin",
      role: "E-Commerce Director",
      project: "Souvenir Store iOS",
      content:
        "Saad delivered our shopping application ahead of schedule. The Stripe checkout integration is bulletproof, product filtering is instant, and the app passed Apple's strict review guidelines without a single rejection. Outstanding communication throughout the sprint.",
      rating: 5,
      avatar: "ZA",
    },
    {
      name: "Elena Rostova",
      role: "Co-Founder, CityEvents",
      project: "Activity Maps",
      content:
        "The Google Maps implementation and biometric authentication in Activity Maps are top tier. Saad is proactive, spots edge cases before they become bugs, and gives direct senior engineering insights that saved us thousands in unnecessary backend complexity.",
      rating: 5,
      avatar: "ER",
    },
  ];

  return (
    <section id="reviews" className="py-24 relative bg-transparent border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 mb-4">
            08 / Client Trust &amp; Social Proof
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight mb-4">
            WHAT FOUNDERS &amp; CLIENTS SAY
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Direct feedback from product leads, operations directors, and startup founders who have successfully built and shipped mobile apps with me.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-7 sm:p-8 rounded-2xl bg-[#0c1222]/80 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-white/10 group-hover:text-cyan-500/20 transition-colors" />
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{r.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-xs font-heading">
                  {r.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold font-heading text-white">
                    {r.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {r.role}
                  </div>
                  <div className="text-[11px] text-cyan-400 font-medium">
                    {r.project}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;

