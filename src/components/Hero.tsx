import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, Phone, Linkedin, ArrowRight, Github, Globe } from "lucide-react";
import { motion, Variants } from "framer-motion";
import MagneticButton from "./MagneticButton";

const Hero = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Muhammad_Saad_CV.pdf";
    link.download = "Muhammad_Saad_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Stagger animation for name letters
  // Stagger animation for name letters
  const nameWords = "Muhammad Saad".split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-[100px]"
        />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"
        />
        {/* Additional floating orbs */}
        <div
          className="absolute top-1/2 left-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-[80px]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Avatar/Profile with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="mb-8"
          >
            <motion.div
              className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full bg-gradient-primary p-1 shadow-glow relative overflow-hidden group"
              whileHover={{ scale: 1.05, rotate: 5 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <div className="w-full h-full rounded-full bg-surface flex items-center justify-center overflow-hidden">
                <motion.img
                  src="/ProfilePic.png"
                  alt="Muhammad Saad"
                  className="w-full h-full object-cover object-top"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h2
              className="text-lg sm:text-xl font-medium text-primary mb-4 tracking-wide uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hello, I'm
            </motion.h2>

            {/* Animated Name with stagger */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="bg-gradient-primary bg-clip-text text-transparent flex flex-wrap justify-center gap-x-3 sm:gap-x-4"
              >
                {nameWords.map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-flex">
                    {word.split("").map((letter, letterIndex) => (
                      <motion.span
                        key={`${wordIndex}-${letterIndex}`}
                        variants={letterVariants}
                        className="inline-block"
                        whileHover={{
                          scale: 1.2,
                          color: "#a855f7",
                          transition: { duration: 0.2 }
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.div>
            </h1>

            <motion.p
              className="text-xl sm:text-2xl text-foreground-secondary mb-8 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              A passionate <motion.span
                className="text-foreground font-semibold"
                whileHover={{ scale: 1.05 }}
                style={{ display: "inline-block" }}
              >
                Mobile App Developer
              </motion.span> crafting
              exceptional mobile experiences with modern technologies.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap justify-center gap-6 mb-10 text-foreground-muted"
          >
            {[
              { icon: MapPin, text: "Islamabad, Pakistan", href: "#" },
              { icon: Mail, text: "msaadi252gb@gmail.com", href: "mailto:msaadi252gb@gmail.com" },
              { icon: Phone, text: "+92 3346664252", href: "tel:+923346664252" },
              { icon: Linkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-saad-5b2486204" },
              { icon: Github, text: "GitHub", href: "https://github.com/MuhammadSaad058" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span>{item.text}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <MagneticButton>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={downloadCV}
                  size="lg"
                  className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-glow"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </motion.div>
            </MagneticButton>

            <MagneticButton>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  onClick={scrollToContact}
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </motion.div>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
