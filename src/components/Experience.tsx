import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Experience = () => {
  // Mobile detection
  const [isMobile, setIsMobile] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const experiences = [
    {
      title: "Mobile App Developer",
      company: "Mubbits",
      location: "Islamabad, Pakistan",
      period: "Oct 2024 – Present",
      type: "Current Position",
      description: "",
      achievements: [
        "Developed high-performance cross-platform mobile applications using React Native, Flutter, TypeScript, JavaScript, and Dart, delivering intuitive UI/UX, responsive layouts, and consistent user experiences across iOS and Android.",
        "Built scalable and maintainable mobile solutions by integrating RESTful APIs, Google Maps API, real-time geolocation, navigation, and location-based services for seamless backend communication and enhanced user experiences.",
        "Implemented advanced mobile features including biometric authentication, barcode/QR code scanning, push notifications, deep linking, in-app purchases, camera integration, and file handling, improving application functionality and user engagement.",
        "Leveraged Firebase and Supabase for authentication, real-time databases, cloud services, push notifications, analytics, and scalable backend infrastructure across React Native and Flutter applications.",
        "Applied modern state management solutions including Redux, Redux Toolkit, Context API, Zustand, TanStack Query (React Query) for React Native, and Provider, Riverpod, and BLoC for Flutter to build scalable, maintainable, and high-performance applications with optimized rendering.",
        "Designed reusable, modular, and scalable UI components while following clean architecture, best coding practices, and platform-specific guidelines to ensure maintainability and code quality.",
        "Performed comprehensive debugging, testing, profiling, and performance optimization using platform-specific tools, ensuring stable, secure, and reliable applications across a wide range of Android and iOS devices.",
        "Managed the complete mobile application lifecycle, including development, CI/CD support, build generation, TestFlight distribution, App Store Connect and Google Play Console releases, versioning, and successful deployment of production applications."
      ],
      technologies: ["React Native", "Flutter", "TypeScript", "JavaScript", "Dart", "Firebase", "Supabase", "Redux Toolkit", "Zustand", "Riverpod", "BLoC", "Context API", "React Query"]
    },
    {
      title: "React Native Developer",
      company: "Agronomics Pvt. Ltd.",
      location: "Islamabad, Pakistan",
      period: "Jul 2024 – Sep 2024",
      type: "Contract",
      description: "",
      achievements: [
        "Developed cross-platform mobile apps using React Native, TypeScript, JavaScript, ensuring performance, scalability.",
        "Integrated Firebase for real-time sync, implemented REST APIs with caching, error handling, optimized responsiveness.",
        "Managed state with Redux, Redux Toolkit, Context API, improving performance, scalability, and user experience."
      ],
      technologies: ["React Native", "TypeScript", "JavaScript", "Firebase", "Redux", "Context API"]
    }
  ];

  // Responsive animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.15 : 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: isMobile ? -20 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: isMobile ? 0.4 : 0.6,
        ease: [0.33, 1, 0.68, 1] as any
      }
    }
  };

  const achievementVariants = {
    hidden: { opacity: 0, x: isMobile ? -10 : -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: isMobile ? index * 0.05 : index * 0.1,
        duration: 0.3,
        ease: [0.33, 1, 0.68, 1] as any
      }
    })
  };

  return (
    <section id="experience" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-primary mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              Building innovative mobile solutions with cutting-edge technologies and delivering exceptional user experiences
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            className="relative space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: isMobile ? 0.05 : 0.1 }}
          >
            {/* Timeline Line */}
            <motion.div
              className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent"
              style={{ willChange: 'height' }}
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: isMobile ? 1 : 1.5, ease: "easeOut" }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative"
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-4 md:left-8 top-8 w-4 h-4 -ml-2 rounded-full bg-primary shadow-glow z-10"
                  style={{ willChange: 'transform' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: isMobile ? 0.15 : 0.3, duration: 0.3, ease: "easeOut" }}
                  whileHover={!isTouchDevice ? { scale: 1.5 } : {}}
                />

                <motion.div
                  style={{ willChange: 'transform' }}
                  whileHover={!isTouchDevice ? {
                    y: -5,
                    boxShadow: "0 20px 50px rgba(139, 92, 246, 0.2)"
                  } : {}}
                  transition={{ duration: 0.3 }}
                  className="ml-12 md:ml-20"
                >
                  <Card
                    className="p-6 md:p-8 bg-surface hover:bg-surface-elevated transition-all duration-300 border-border hover:border-primary/30"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Experience Header */}
                      <div className="lg:w-1/3 space-y-3">
                        <div className="space-y-2">
                          <motion.h3
                            className="text-xl font-bold text-foreground"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                          >
                            {exp.title}
                          </motion.h3>
                          <motion.div
                            className="flex items-center gap-2 text-primary"
                            whileHover={!isTouchDevice ? { x: 5 } : {}}
                            transition={{ duration: 0.2 }}
                          >
                            <Building className="h-4 w-4" />
                            <span className="font-medium">{exp.company}</span>
                          </motion.div>
                        </div>

                        <div className="space-y-2 text-sm text-foreground-secondary">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <motion.div
                          whileHover={!isTouchDevice ? { scale: 1.05 } : {}}
                          transition={{ duration: 0.2 }}
                        >
                          <Badge
                            variant={exp.type === "Current Position" ? "default" : "secondary"}
                            className={exp.type === "Current Position" ? "bg-accent text-accent-foreground" : ""}
                          >
                            {exp.type}
                          </Badge>
                        </motion.div>
                      </div>

                      {/* Experience Details */}
                      <div className="lg:w-2/3 space-y-4">
                        {exp.description ? (
                          <p className="text-foreground-secondary leading-relaxed">
                            {exp.description}
                          </p>
                        ) : null}

                        {/* Achievements */ }
                        <div className="space-y-3">
                          <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <motion.li
                                key={achievementIndex}
                                className="flex items-start gap-3 text-foreground-secondary"
                                style={{ willChange: 'transform, opacity' }}
                                custom={achievementIndex}
                                variants={achievementVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
                                whileHover={!isTouchDevice ? { x: 5 } : {}}
                              >
                                <motion.div
                                  className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"
                                  whileHover={!isTouchDevice ? { scale: 2 } : {}}
                                />
                                <span>{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-foreground">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={techIndex}
                                style={{ willChange: 'transform, opacity' }}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: isMobile ? techIndex * 0.03 : techIndex * 0.05, ease: "easeOut" }}
                                whileHover={!isTouchDevice ? {
                                  scale: 1.1,
                                  y: -2,
                                  transition: { duration: 0.2 }
                                } : {}}
                              >
                                <Badge
                                  variant="outline"
                                  className="border-primary/30 text-primary bg-primary/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
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
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              whileHover={!isTouchDevice ? { scale: 1.02 } : {}}
            >
              <Card className="p-8 bg-gradient-surface border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Ready for New Challenges
                </h3>
                <p className="text-foreground-secondary max-w-2xl mx-auto">
                  I'm always excited to take on new projects and collaborate with innovative teams.
                  Let's build something amazing together!
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;