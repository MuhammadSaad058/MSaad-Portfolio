import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "React Native Developer",
      company: "Mubbits",
      location: "Islamabad, Pakistan",
      period: "Oct 2024 – Present",
      type: "Current Position",
      description: "Leading cross-platform mobile application development with focus on advanced integrations and performance optimization.",
      achievements: [
        "Built cross-platform apps with React Native, TypeScript, and JavaScript",
        "Integrated Google Maps API for location-based features",
        "Implemented biometric authentication for enhanced security",
        "Developed barcode scanning functionality",
        "Set up push notifications system",
        "Integrated multiple payment gateways",
        "Optimized app performance using Redux & Context API"
      ],
      technologies: ["React Native", "TypeScript", "JavaScript", "Redux", "Google Maps API", "Biometric Auth", "Payment Gateways"]
    },
    {
      title: "React Native Developer",
      company: "Agronomics Pvt. Ltd.",
      location: "Islamabad, Pakistan",
      period: "Jul 2024 – Sep 2024",
      type: "Contract",
      description: "Developed robust mobile applications with comprehensive backend integration and state management optimization.",
      achievements: [
        "Built cross-platform applications with React Native",
        "Implemented comprehensive Firebase integration",
        "Optimized state management with Redux Toolkit",
        "Utilized Context API for efficient data flow",
        "Delivered high-quality mobile solutions within tight deadlines"
      ],
      technologies: ["React Native", "Firebase", "Redux Toolkit", "Context API", "JavaScript"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.4
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
            viewport={{ once: true }}
          >
            {/* Timeline Line */}
            <motion.div
              className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative"
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-0 md:left-8 top-8 w-4 h-4 -ml-2 rounded-full bg-primary shadow-glow z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.5 }}
                />

                <motion.div
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 50px rgba(139, 92, 246, 0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                  className="ml-0 md:ml-20"
                >
                  <Card
                    className="p-8 bg-surface hover:bg-surface-elevated transition-all duration-300 border-border hover:border-primary/30"
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
                            whileHover={{ x: 5 }}
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
                          whileHover={{ scale: 1.05 }}
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
                        <p className="text-foreground-secondary leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <motion.li
                                key={achievementIndex}
                                className="flex items-start gap-3 text-foreground-secondary"
                                custom={achievementIndex}
                                variants={achievementVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                whileHover={{ x: 5 }}
                              >
                                <motion.div
                                  className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"
                                  whileHover={{ scale: 2 }}
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
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: techIndex * 0.05 }}
                                whileHover={{
                                  scale: 1.1,
                                  y: -2,
                                  transition: { duration: 0.2 }
                                }}
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
              whileHover={{ scale: 1.02 }}
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