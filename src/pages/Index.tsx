import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import TrustTicker from "@/components/TrustTicker";
import Services from "@/components/Services";
import WhyMe from "@/components/WhyMe";
import CodeVelocity from "@/components/CodeVelocity";
import Blueprints from "@/components/Blueprints";
import Projects from "@/components/Projects";
import Estimator from "@/components/Estimator";
import PricingProcess from "@/components/PricingProcess";
import AboutSpecialist from "@/components/AboutSpecialist";
import EngineeringJourney from "@/components/EngineeringJourney";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import FloatingDock from "@/components/FloatingDock";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "services",
        "why-me",
        "blueprints",
        "projects",
        "estimator",
        "pricing",
        "about",
        "experience",
        "reviews",
        "faq",
        "contact",
      ];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    (window as any).currentActiveSection = activeSection;
    window.dispatchEvent(
      new CustomEvent("activeSectionChange", { detail: activeSection })
    );
  }, [activeSection]);

  return (
    <div className="scroll-smooth bg-transparent text-slate-100 min-h-screen relative selection:bg-cyan-500/30 selection:text-cyan-200">
      <Hero />
      <TrustTicker />
      <Services />
      <WhyMe />
      <CodeVelocity />
      <Blueprints />
      <Projects />
      <Estimator />
      <PricingProcess />
      <AboutSpecialist />
      <EngineeringJourney />
      <Reviews />
      <FAQ />
      <ContactCTA />
      <Footer />
      <FloatingDock />
    </div>
  );
};

export default Index;
