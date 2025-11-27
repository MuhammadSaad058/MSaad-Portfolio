import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Experience", href: "experience" },
    { label: "Projects", href: "projects" },
    { label: "Education", href: "education" },
    { label: "Contact", href: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled
          ? "bg-surface/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
        }
    `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-primary p-0.5 overflow-hidden">
              <div className="w-full h-full rounded-full bg-surface overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="MS"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Muhammad Saad
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
                    activeSection === item.href
                      ? "text-primary bg-surface-elevated"
                      : "text-foreground-secondary hover:text-primary hover:bg-surface-elevated"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDark(!isDark)}
              className="p-2"
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-surface/95 backdrop-blur-md rounded-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200",
                    activeSection === item.href
                      ? "text-primary bg-surface-elevated"
                      : "text-foreground-secondary hover:text-primary hover:bg-surface-elevated"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
