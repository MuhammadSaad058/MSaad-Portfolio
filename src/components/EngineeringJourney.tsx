import { Briefcase, Calendar, MapPin, Building, GraduationCap, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const EngineeringJourney = () => {
  const experiences = [
    {
      role: "Mobile App Developer",
      company: "Mubbits",
      location: "Islamabad, Pakistan",
      period: "Oct 2024 – Present",
      status: "Current Position",
      description:
        "Leading cross-platform mobile engineering for startup clients worldwide using React Native and Flutter. Architecting high-converting UI/UX, low-latency live streaming, and robust backend integrations.",
      highlights: [
        "Architected scalable mobile solutions integrating Agora WebRTC, Google Maps API, and real-time geolocation.",
        "Implemented biometric authentication, barcode/QR scanning, push notifications, and in-app purchase billing.",
        "Utilized Firebase & Supabase for authentication, Firestore sync, cloud functions, and real-time messaging.",
        "Managed the full lifecycle: build pipelines, TestFlight distribution, Apple App Store & Google Play releases.",
      ],
      technologies: ["React Native", "Flutter", "TypeScript", "Dart", "Agora WebRTC", "Firebase", "Supabase", "Riverpod", "Redux Toolkit"],
    },
    {
      role: "React Native Developer",
      company: "Agronomics Pvt. Ltd.",
      location: "Islamabad, Pakistan",
      period: "Jul 2024 – Sep 2024",
      status: "Contract",
      description:
        "Developed cross-platform mobile applications using React Native, TypeScript, and JavaScript, focusing on responsiveness and offline data synchronization.",
      highlights: [
        "Integrated Firebase real-time database and REST APIs with caching and error boundaries.",
        "Engineered global state management with Redux Toolkit and Context API.",
        "Optimized render cycles and layout performance across budget Android devices.",
      ],
      technologies: ["React Native", "TypeScript", "JavaScript", "Firebase", "Redux Toolkit"],
    },
  ];

  const education = [
    {
      degree: "BS Software Engineering",
      institution: "COMSATS University Islamabad",
      period: "2020 – 2024",
      location: "Islamabad, Pakistan",
      highlights: "Core studies in Mobile Application Development, Data Structures & Algorithms, Object-Oriented Software Engineering, and Database Management Systems.",
    },
    {
      degree: "FSc Pre-Engineering",
      institution: "Punjab Group of Colleges",
      period: "2018 – 2020",
      location: "Pakistan",
      highlights: "Strong foundational training in Mathematics, Physics, and analytical logic.",
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-transparent border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 mb-4">
            07 / Career Progression
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight mb-4">
            ENGINEERING JOURNEY
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Track record of architecting and shipping high-impact mobile solutions across fast-paced product studios and software engineering teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Work Experience (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2 text-sm font-bold font-heading uppercase tracking-wider text-cyan-400 mb-6">
              <Briefcase className="w-4 h-4" />
              <span>Professional Experience</span>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 sm:p-7 rounded-2xl bg-[#0c1222]/80 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold font-heading text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold mt-0.5">
                        <Building className="w-3.5 h-3.5" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {exp.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs text-slate-400 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location}</span>
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    {exp.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400 leading-normal">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                    {exp.technologies.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold text-slate-300 bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Academic Rigor (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-sm font-bold font-heading uppercase tracking-wider text-purple-400 mb-6">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Foundations</span>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-[#0c1222]/60 border border-white/[0.06] hover:border-purple-500/30 transition-all"
                >
                  <div className="text-xs font-semibold text-purple-400 mb-1">
                    {edu.period}
                  </div>
                  <h4 className="text-lg font-bold font-heading text-white">
                    {edu.degree}
                  </h4>
                  <div className="text-sm font-medium text-slate-300 mb-3">
                    {edu.institution}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {edu.highlights}
                  </p>
                </motion.div>
              ))}

              {/* Continuous Mastery Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/20 to-blue-950/20 border border-cyan-500/20">
                <h5 className="text-sm font-bold font-heading text-white mb-1.5">
                  Continuous Engineering Mastery
                </h5>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Active practitioner of the latest mobile paradigms — React Native Architecture, Hermes engine tuning, Agora WebRTC SFU scaling, and App Store privacy requirements.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EngineeringJourney;

