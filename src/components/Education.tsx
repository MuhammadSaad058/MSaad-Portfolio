import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Education = () => {
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

  const educationData = [
    {
      degree: "BS Software Engineering",
      institution: "Comsats University Islamabad",
      location: "Islamabad, Pakistan",
      period: "2020 – 2024",
      type: "Bachelor's Degree",
      description: "Comprehensive software engineering program focused on modern development practices, algorithms, and system design.",
      highlights: [
        "Software Development Life Cycle",
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Software Testing & Quality Assurance",
        "Mobile Application Development",
        "Web Technologies",
        "Software Project Management"
      ],
      status: "Completed",
      color: "primary"
    },
    {
      degree: "FSc Pre-Engineering",
      institution: "Punjab Group of Colleges",
      location: "Pakistan",
      period: "2018 – 2020",
      type: "Intermediate",
      description: "Foundation in mathematics, physics, and chemistry, providing strong analytical and problem-solving skills.",
      highlights: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science Fundamentals",
        "Analytical Thinking",
        "Problem Solving"
      ],
      status: "Completed",
      color: "accent"
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

  return (
    <section id="education" className="py-20 bg-background-secondary">
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
              Educational <span className="bg-gradient-primary bg-clip-text text-transparent">Background</span>
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-primary mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              Strong academic foundation in software engineering and computer science, providing the knowledge base for innovative development solutions
            </p>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            className="relative space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: isMobile ? 0.2 : 0.3 }}
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

            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative"
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`absolute left-4 md:left-8 top-8 w-4 h-4 -ml-2 rounded-full ${edu.color === 'primary' ? 'bg-primary' : 'bg-accent'} shadow-glow z-10`}
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
                    boxShadow: edu.color === 'primary'
                      ? "0 20px 50px rgba(139, 92, 246, 0.2)"
                      : "0 20px 50px rgba(244, 114, 182, 0.2)"
                  } : {}}
                  transition={{ duration: 0.3 }}
                  className="ml-12 md:ml-20"
                >
                  <Card
                    className="p-6 md:p-8 bg-surface hover:bg-surface-elevated transition-all duration-300 border-border hover:border-primary/30"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Education Header */}
                      <div className="lg:w-1/3 space-y-4">
                        <div className="flex items-start gap-3">
                          <motion.div
                            className={`p-3 rounded-lg ${edu.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}
                            whileHover={!isTouchDevice ? {
                              rotate: [0, -10, 10, -10, 0],
                              scale: 1.2
                            } : {}}
                            transition={{ duration: 0.5 }}
                          >
                            <GraduationCap className="h-6 w-6" />
                          </motion.div>
                          <div className="space-y-1">
                            <motion.h3
                              className="text-xl font-bold text-foreground"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 }}
                            >
                              {edu.degree}
                            </motion.h3>
                            <p className="text-foreground-secondary font-medium">{edu.institution}</p>
                          </div>
                        </div>

                        <div className="space-y-2 text-sm text-foreground-secondary">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <motion.div
                            whileHover={!isTouchDevice ? { scale: 1.05 } : {}}
                            transition={{ duration: 0.2 }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-muted text-foreground-muted"
                            >
                              {edu.type}
                            </Badge>
                          </motion.div>
                          <motion.div
                            whileHover={!isTouchDevice ? { scale: 1.05 } : {}}
                            transition={{ duration: 0.2 }}
                            animate={{
                              boxShadow: [
                                "0 0 0px rgba(139, 92, 246, 0)",
                                "0 0 20px rgba(139, 92, 246, 0.3)",
                                "0 0 0px rgba(139, 92, 246, 0)"
                              ]
                            }}
                            className={`inline-block rounded-md`}
                          >
                            <Badge
                              variant="default"
                              className={`${edu.color === 'primary' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'}`}
                            >
                              {edu.status}
                            </Badge>
                          </motion.div>
                        </div>
                      </div>

                      {/* Education Details */}
                      <div className="lg:w-2/3 space-y-6">
                        <p className="text-foreground-secondary leading-relaxed">
                          {edu.description}
                        </p>

                        {/* Key Subjects/Highlights */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-primary" />
                            <h4 className="font-semibold text-foreground">Key Areas of Study:</h4>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {edu.highlights.map((highlight, highlightIndex) => (
                              <motion.div
                                key={highlightIndex}
                                className="flex items-start gap-2 text-foreground-secondary"
                                style={{ willChange: 'transform, opacity' }}
                                initial={{ opacity: 0, x: isMobile ? -5 : -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: isMobile ? highlightIndex * 0.03 : highlightIndex * 0.05 }}
                                whileHover={!isTouchDevice ? { x: 5 } : {}}
                              >
                                <motion.div
                                  className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"
                                  whileHover={!isTouchDevice ? { scale: 2 } : {}}
                                />
                                <span className="text-sm">{highlight}</span>
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

          {/* Additional Info */}
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
                  Continuous Learning
                </h3>
                <p className="text-foreground-secondary max-w-2xl mx-auto">
                  Beyond formal education, I'm committed to continuous learning through online courses,
                  technical documentation, and hands-on projects to stay current with the latest technologies and best practices.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;