import { Github, Linkedin, Mail, Phone, MessageCircle, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "/#hero" },
    { label: "Services", href: "/#services" },
    { label: "Blueprints", href: "/#blueprints" },
    { label: "Projects", href: "/#projects" },
    { label: "Estimator", href: "/#estimator" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Experience", href: "/#experience" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="bg-transparent backdrop-blur-md border-t border-white/[0.06] pt-16 pb-12 text-slate-400 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-2xl font-bold font-heading text-white tracking-tight">
              Muhammad Saad
            </span>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Senior React Native &amp; Flutter Mobile App Developer specializing in 60fps cross-platform engineering, Agora WebRTC audio/video, and startup MVP delivery within 30 days.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/MuhammadSaad058"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-cyan-500 text-slate-300 hover:text-white border border-white/10 transition-colors"
                title="GitHub"
                aria-label="Muhammad Saad on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-saad-5b2486204"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-cyan-500 text-slate-300 hover:text-white border border-white/10 transition-colors"
                title="LinkedIn"
                aria-label="Muhammad Saad on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/923346664252"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-emerald-500 text-slate-300 hover:text-white border border-white/10 transition-colors"
                title="WhatsApp"
                aria-label="Contact Muhammad Saad on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:msaadi252gb@gmail.com"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-cyan-500 text-slate-300 hover:text-white border border-white/10 transition-colors"
                title="Email"
                aria-label="Send email to Muhammad Saad"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Summary (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Direct Contact
            </div>
            <div className="space-y-1.5 text-xs text-slate-400">
              <div>msaadi252gb@gmail.com</div>
              <div>+92 334 6664252</div>
              <div>Islamabad, Pakistan (UTC+5)</div>
            </div>
            <button
              onClick={scrollToTop}
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} Muhammad Saad. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>React Native</span>
            <span>•</span>
            <span>Flutter</span>
            <span>•</span>
            <span>Agora WebRTC</span>
            <span>•</span>
            <span>Firebase &amp; Supabase</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
