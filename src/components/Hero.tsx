import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, Phone, Linkedin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MagneticButton from "./MagneticButton";

const Hero = () => {
  const navigate = useNavigate();

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Muhammad_Saad_CV.pdf";
    link.download = "Muhammad_Saad_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -60, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Avatar/Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full bg-gradient-primary p-1 shadow-glow relative overflow-hidden group">
              <div className="w-full h-full rounded-full bg-surface flex items-center justify-center overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Muhammad Saad"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-lg sm:text-xl font-medium text-primary mb-4 tracking-wide uppercase">
              Hello, I'm
            </h2>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Muhammad Saad
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-foreground-secondary mb-8 leading-relaxed max-w-2xl mx-auto">
              A passionate <span className="text-foreground font-semibold">React Native Developer</span> crafting
              exceptional mobile experiences with modern technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-10 text-foreground-muted"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Lahore, Pakistan</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <span>ms0601572@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              <span>+92 309 4119360</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <MagneticButton>
              <Button
                onClick={downloadCV}
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </MagneticButton>

            <MagneticButton>
              <Button
                variant="outline"
                onClick={() => navigate('/contact')}
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
