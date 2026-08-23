import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Home, User, Code, Briefcase, FolderGit2, GraduationCap, Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import MagneticButton from "./MagneticButton";

const Sidebar = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const handleActiveSectionChange = (event: any) => {
      setActiveSection(event.detail);
    };

    window.addEventListener('activeSectionChange', handleActiveSectionChange);
    return () => window.removeEventListener('activeSectionChange', handleActiveSectionChange);
  }, []);

  const navItems = [
    { label: "Home", href: "home", icon: Home },
    { label: "About", href: "about", icon: User },
    { label: "Skills", href: "skills", icon: Code },
    { label: "Experience", href: "experience", icon: Briefcase },
    { label: "Projects", href: "projects", icon: FolderGit2 },
    { label: "Education", href: "education", icon: GraduationCap },
    { label: "Contact", href: "contact", icon: Mail },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/MuhammadSaad058", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-saad-5b2486204", label: "LinkedIn" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 bg-surface/50 backdrop-blur-xl border-r border-border p-6 z-50">
      {/* Logo Area */}
      <div className="mb-10 flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-primary p-0.5 mb-3 overflow-hidden shadow-lg">
          <div className="w-full h-full rounded-full bg-surface overflow-hidden">
            <img
              src="/ProfilePic.png"
              alt="Muhammad Saad"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
        <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          M. Saad
        </h1>
        <p className="text-xs text-foreground-muted mt-1">Software Engineer</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href;

          return (
            <a
              key={item.label}
              href={`#${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group relative overflow-hidden",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-foreground-secondary hover:text-foreground hover:bg-surface-elevated"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary/10 rounded-lg"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon className={cn("w-5 h-5 relative z-10", isActive ? "text-primary" : "group-hover:text-primary transition-colors")} />
              <span className="font-medium relative z-10">{item.label}</span>
            </a>
          );
        })}
      </nav>

      {/* Footer / Socials / Theme Toggle */}
      <div className="mt-auto pt-6 border-t border-border space-y-6">
        <div className="flex justify-center space-x-4">
          {socialLinks.map((social) => (
            <MagneticButton key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-primary transition-colors block p-2"
              >
                <social.icon className="w-5 h-5" />
              </a>
            </MagneticButton>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsDark(!isDark)}
          className="w-full flex items-center justify-center space-x-2 border-border hover:bg-surface-elevated"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
