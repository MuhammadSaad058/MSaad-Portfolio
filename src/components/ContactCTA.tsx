import { useState } from "react";
import { MessageCircle, Mail, Phone, MapPin, Download, Send, CheckCircle2, ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const ContactCTA = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Mobile App MVP",
    budget: "$2,000 - $4,000",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Muhammad_Saad_CV.pdf";
    link.download = "Muhammad_Saad_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name} (${formData.projectType})`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget Range: ${formData.budget}\n\nProject Brief:\n${formData.message}`
    );
    window.open(`mailto:msaadi252gb@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-transparent border-t border-white/[0.06]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 mb-4">
            Available Now
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight mb-4">
            LET'S BUILD YOUR APPLICATION
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Available for mobile contracts, full MVP development, App Store publishing, and dedicated engineering. Response time under 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-[#0c1222]/80 border border-white/[0.08] backdrop-blur-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold font-heading text-white mb-2">
                  Direct Engineering Access
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Have a question, wireframe, or urgent store publishing deadline? Reach out directly — no agency sales reps, just direct senior mobile engineering.
                </p>
              </div>

              {/* Instant WhatsApp CTA */}
              <a
                href="https://wa.me/923346664252?text=Hi%20Saad,%20I%20have%20a%20mobile%20app%20project%20and%20would%20like%20to%20discuss"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all flex items-center justify-center gap-2.5 hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Instant Chat on WhatsApp</span>
              </a>

              {/* Direct Channels */}
              <div className="space-y-3 pt-2">
                <a
                  href="mailto:msaadi252gb@gmail.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Email</div>
                    <div className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                      msaadi252gb@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+923346664252"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Phone</div>
                    <div className="text-xs font-semibold text-slate-200 group-hover:text-blue-300 transition-colors">
                      +92 334 6664252
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Location</div>
                    <div className="text-xs font-semibold text-slate-200">
                      Islamabad, Pakistan (UTC+5) • Remote Worldwide
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Resume button */}
              <button
                onClick={downloadCV}
                className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-slate-300 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Professional CV (PDF)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Project Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0c1222]/80 border border-white/[0.08] backdrop-blur-xl">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider font-heading mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Send Direct Project Brief</span>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold font-heading text-white">Inquiry Initialized!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Your email client has opened with your brief pre-filled. You can also chat directly on WhatsApp for an immediate response.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#080d19] border border-white/10 text-white text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@startup.io"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#080d19] border border-white/10 text-white text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Project Type
                      </label>
                      <div className="relative">
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-2.5 pr-10 rounded-xl bg-[#080d19] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors appearance-none cursor-pointer"
                        >
                          <option value="Startup MVP Sprint (2-4 Weeks)">Startup MVP Sprint (2-4 Weeks)</option>
                          <option value="Complete Production Mobile App">Complete Production Mobile App</option>
                          <option value="Agora Audio/Video WebRTC App">Agora Audio/Video WebRTC App</option>
                          <option value="App Store Code Rescue / Publishing">App Store Code Rescue / Publishing</option>
                          <option value="Dedicated Monthly Retainer">Dedicated Monthly Retainer</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-cyan-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Estimated Budget
                      </label>
                      <div className="relative">
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-2.5 pr-10 rounded-xl bg-[#080d19] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors appearance-none cursor-pointer"
                        >
                          <option value="$1,500 - $2,500">$1,500 - $2,500</option>
                          <option value="$2,500 - $4,500">$2,500 - $4,500</option>
                          <option value="$4,500 - $8,000">$4,500 - $8,000</option>
                          <option value="$8,000+">$8,000+</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-cyan-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Project Details / Features Overview *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your app idea, key features, target deadline, and whether you have Figma designs ready..."
                      className="w-full px-4 py-3 rounded-xl bg-[#080d19] border border-white/10 text-white text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
                  >
                    <span>Send Project Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactCTA;

