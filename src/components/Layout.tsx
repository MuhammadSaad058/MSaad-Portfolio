import { ReactNode } from "react";
import Navbar from "./Navbar";
import GlobalBackground from "./GlobalBackground";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#070a13] text-foreground font-sans selection:bg-cyan-500/30 selection:text-white relative overflow-x-hidden">
      {/* ── Continuous 3D Canvas Background Animation running across the entire website ── */}
      <GlobalBackground />

      {/* Floating Capsule Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout;
