import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Smartphone,
  ShoppingCart,
  Map,
  GraduationCap,
  Truck,
} from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MouseEvent } from "react";

const Projects = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const projects = [
    {
      title: "AR-Based E-Commerce App",
      description:
        "Revolutionary shopping experience with augmented reality technology, allowing users to visualize products in 3D before purchase.",
      icon: <ShoppingCart className="h-6 w-6" />,
      features: [
        "3D Product Visualization",
        "AR Product Preview",
        "Seamless Shopping Experience",
        "Real-time Product Interaction",
      ],
      technologies: ["React Native", "AR Kit", "3D Modeling", "TypeScript"],
      gradient: "from-purple-500 to-pink-500",
      category: "E-Commerce",
    },
    {
      title: "BuyNothings Marketplace",
      description:
        "Sustainable marketplace for buying and selling pre-owned items with integrated chat system for seamless communication.",
      icon: <Smartphone className="h-6 w-6" />,
      features: [
        "Buy & Sell Pre-owned Items",
        "Real-time Chat/Messaging",
        "User Profile Management",
        "Secure Transaction System",
      ],
      technologies: ["React Native", "Firebase", "Real-time Chat", "Redux"],
      gradient: "from-green-500 to-teal-500",
      category: "Marketplace",
    },
    {
      title: "Activity Maps",
      description:
        "Comprehensive events and places discovery app with advanced mapping, secure payments, and biometric authentication.",
      icon: <Map className="h-6 w-6" />,
      features: [
        "Google Maps Integration",
        "Event Discovery",
        "Payment Gateway Integration",
        "Biometric Authentication",
        "Push Notifications",
      ],
      technologies: [
        "React Native",
        "Google Maps API",
        "Firebase",
        "Biometric Auth",
        "Payment Integration",
      ],
      gradient: "from-blue-500 to-cyan-500",
      category: "Location-based",
    },
    {
      title: "VCROW - School Management",
      description:
        "Dual-portal application connecting schools and parents with comprehensive analytics, reporting, and payment systems.",
      icon: <GraduationCap className="h-6 w-6" />,
      features: [
        "Dual Portal (School/Parent)",
        "Firebase Integration",
        "Payment System",
        "Analytics & Reporting",
        "Real-time Communication",
      ],
      technologies: [
        "React Native",
        "Firebase",
        "Analytics",
        "Payment Gateway",
        "Redux Toolkit",
      ],
      gradient: "from-indigo-500 to-purple-500",
      category: "Education",
    },
    {
      title: "Bulky - Logistics Platform",
      description:
        "Multi-actor logistics application with smart booking system, rider assignment, and secure payment integration.",
      icon: <Truck className="h-6 w-6" />,
      features: [
        "Multi-actor System",
        "Smart Booking System",
        "Rider Assignment",
        "Secure Payment Integration",
        "Real-time Tracking",
      ],
      technologies: [
        "React Native",
        "Real-time Tracking",
        "Payment Gateway",
        "Firebase",
        "Context API",
      ],
      gradient: "from-orange-500 to-red-500",
      category: "Logistics",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-primary mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              Showcasing innovative mobile applications built with cutting-edge
              technologies and user-centric design
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  whileHover={{
                    y: -10,
                    rotateY: 5,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="h-full"
                >
                  <Card
                    className="group p-6 bg-surface hover:bg-surface-elevated transition-all duration-500 border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 overflow-hidden relative h-full"
                  >
                    {/* Gradient Overlay with enhanced animation */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      whileHover={{ scale: 1.1 }}
                    />

                    <div className="relative z-10 space-y-4">
                      {/* Project Header */}
                      <div className="flex items-start justify-between">
                        <motion.div
                          className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient} text-white`}
                          whileHover={{
                            rotate: [0, -10, 10, -10, 0],
                            scale: 1.1
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {project.icon}
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                        >
                          <Badge
                            variant="outline"
                            className="text-xs text-foreground-muted"
                          >
                            {project.category}
                          </Badge>
                        </motion.div>
                      </div>

                      {/* Project Info */}
                      <div className="space-y-3">
                        <motion.h3
                          className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          {project.title}
                        </motion.h3>
                        <p className="text-foreground-secondary text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground text-sm">
                          Key Features:
                        </h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              className="flex items-start gap-2 text-xs text-foreground-secondary"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: featureIndex * 0.1 }}
                              whileHover={{ x: 5 }}
                            >
                              <motion.div
                                className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"
                                whileHover={{ scale: 2 }}
                              />
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground text-sm">
                          Tech Stack:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: techIndex * 0.05 }}
                              whileHover={{
                                scale: 1.1,
                                y: -2
                              }}
                            >
                              <Badge
                                variant="secondary"
                                className="text-xs bg-muted/50 text-foreground-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
            >
              <Card className="p-8 bg-gradient-surface border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Have a Project in Mind?
                </h3>
                <p className="text-foreground-secondary mb-6 max-w-2xl mx-auto">
                  I'm always excited to work on innovative projects that challenge
                  me to grow and create exceptional user experiences.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 shadow-glow"
                    onClick={scrollToContact}
                  >
                    Let's Work Together
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
