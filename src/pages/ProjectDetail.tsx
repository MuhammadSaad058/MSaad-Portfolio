import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projectsData, ProjectItem } from "@/data/projectsData";
import { Apple, Play, ExternalLink, ArrowLeft, Check, ShieldCheck, Zap, Sparkles, MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project: ProjectItem | undefined = projectsData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (project) {
      document.title = `${project.title} — React Native & Mobile Case Study | Muhammad Saad`;

      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", `${project.title} case study: ${project.summary}`);
      }

      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute("href", `https://m-saad-portfolio-six.vercel.app/projects/${project.id}`);
      }
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-bold font-heading text-white mb-4">Case Study Not Found</h1>
        <p className="text-slate-400 mb-8 max-w-md">
          The project case study you requested does not exist or has been relocated.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition-all shadow-lg shadow-cyan-500/20"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    );
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://m-saad-portfolio-six.vercel.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://m-saad-portfolio-six.vercel.app/#projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.title,
        "item": `https://m-saad-portfolio-six.vercel.app/projects/${project.id}`
      }
    ]
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "operatingSystem": project.liveStoreType === "appStore" ? "iOS" : project.liveStoreType === "googlePlay" ? "Android" : "iOS, Android",
    "applicationCategory": "MobileApplication",
    "description": project.summary,
    "author": {
      "@type": "Person",
      "name": "Muhammad Saad",
      "url": "https://m-saad-portfolio-six.vercel.app/"
    },
    "url": `https://m-saad-portfolio-six.vercel.app/projects/${project.id}`,
    ...(project.appStoreUrl && { "downloadUrl": project.appStoreUrl }),
    ...(project.playStoreUrl && { "downloadUrl": project.playStoreUrl })
  };

  return (
    <article className="py-28 relative bg-transparent min-h-screen">
      {/* Dynamic JSON-LD structured data for project detail */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-slate-400">
            <li>
              <Link to="/" className="hover:text-cyan-400 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <a href="/#projects" className="hover:text-cyan-400 transition-colors">
                Projects
              </a>
            </li>
            <li>/</li>
            <li className="text-cyan-300 font-semibold" aria-current="page">
              {project.title}
            </li>
          </ol>
        </nav>

        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Shipped Apps</span>
          </Link>
        </div>

        {/* Header Block */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Case Study &amp; Technical Architecture</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight leading-tight mb-4">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-cyan-300 font-medium mb-6">
            {project.roleSubtitle}
          </p>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            {project.summary}
          </p>

          {/* Store & Demo Badges */}
          <div className="flex flex-wrap gap-3 pt-6">
            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-cyan-500/30 text-xs font-mono font-bold transition-all shadow-md"
              >
                <Apple className="w-4 h-4 text-cyan-400" />
                <span>Download on App Store</span>
              </a>
            )}

            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white border border-emerald-400/40 text-xs font-mono font-bold transition-all shadow-md"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Get it on Google Play</span>
              </a>
            )}

            {project.webUrl && (
              <a
                href={project.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-cyan-300 border border-cyan-500/30 text-xs font-mono font-semibold transition-all"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" />
                <span>Visit Live Platform</span>
              </a>
            )}
          </div>
        </header>

        {/* Visual Showcase & Metrics Grid */}
        <section aria-labelledby="showcase-heading" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 p-6 sm:p-8 rounded-3xl bg-[#0c1222]/80 border border-white/[0.08] backdrop-blur-xl">
          <h2 id="showcase-heading" className="sr-only">Project Metrics and Interface Showcase</h2>

          {/* Left: Phone Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-60 sm:w-68 aspect-[9/18.8] rounded-[36px] p-2.5 bg-slate-900 border-2 border-cyan-500/30 shadow-2xl overflow-hidden relative group">
              <img
                src={project.fullImage}
                alt={project.imageAlt}
                width={300}
                height={626}
                className="w-full h-full object-cover rounded-[28px]"
                loading="eager"
              />
            </div>
          </div>

          {/* Right: Metrics & Tech Breakdown */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {m.label}
                  </div>
                  <div className="text-base sm:text-lg font-bold font-heading text-white mt-1">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Complete Tech Arsenal */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Technologies &amp; Libraries Used
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Narrative Deep Dive: Challenge, Solution, Contribution */}
        <section aria-labelledby="technical-details-heading" className="space-y-12 mb-16">
          <h2 id="technical-details-heading" className="text-2xl sm:text-3xl font-bold font-heading text-white">
            Technical Architecture &amp; Engineering Decisions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Problem */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0c1222]/60 border border-white/[0.08]">
              <h3 className="text-lg font-bold font-heading text-slate-200 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                <span>The Problem Being Solved</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0c1222]/60 border border-cyan-500/20">
              <h3 className="text-lg font-bold font-heading text-cyan-300 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>The Engineered Solution</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Challenges & Decisions */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0c1222]/60 border border-white/[0.08]">
              <h3 className="text-lg font-bold font-heading text-purple-300 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-400" />
                <span>Key Engineering Challenges</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.challenges}
              </p>
            </div>

            {/* Role & Contribution */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0c1222]/60 border border-white/[0.08]">
              <h3 className="text-lg font-bold font-heading text-emerald-300 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>My Role &amp; Contribution</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.roleAndContribution}
              </p>
            </div>
          </div>

          {/* Highlights List */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0c1222]/80 border border-white/[0.08]">
            <h3 className="text-lg font-bold font-heading text-white mb-4">
              Notable System Features &amp; Implementation Highlights
            </h3>
            <div className="space-y-3">
              {project.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Direct Conversion CTA Section */}
        <section aria-labelledby="cta-heading" className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/30 to-purple-950/40 border border-cyan-500/30 text-center relative overflow-hidden">
          <h2 id="cta-heading" className="text-2xl sm:text-3xl font-bold font-heading text-white mb-3">
            Need a Similar Application Built for Your Startup?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            I build production-grade, 60fps mobile applications with React Native and Flutter. From initial architecture to App Store submission in 2–4 weeks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/923346664252"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/20 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss Project on WhatsApp</span>
            </a>

            <a
              href="mailto:msaadi252gb@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/[0.06] hover:bg-white/[0.1] border border-cyan-500/30 transition-all"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Send Project Brief via Email</span>
            </a>
          </div>
        </section>

      </div>
    </article>
  );
};

export default ProjectDetail;
