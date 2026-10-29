import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home, Smartphone, Mail } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "404 — Page Not Found | Muhammad Saad";
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute("content", "noindex, nofollow");
    }
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-24 bg-transparent text-slate-100 relative">
      <div className="max-w-xl mx-auto text-center relative z-10 p-8 sm:p-12 rounded-3xl bg-[#0c1222]/80 border border-cyan-500/20 backdrop-blur-xl shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-rose-400 bg-rose-500/10 border border-rose-500/20 mb-6">
          <span>HTTP Status: 404</span>
        </div>

        <h1 className="text-6xl sm:text-7xl font-black font-heading bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-500 bg-clip-text text-transparent mb-4">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl font-bold font-heading text-white mb-3">
          Route Not Found
        </h2>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
          The requested page <code className="text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded font-mono text-xs">{location.pathname}</code> does not exist or may have been relocated.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs tracking-wide shadow-lg shadow-cyan-500/25 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>

          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border border-white/[0.1] text-xs font-semibold transition-all"
          >
            <Smartphone className="w-4 h-4 text-cyan-400" />
            <span>Explore Shipped Apps</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
