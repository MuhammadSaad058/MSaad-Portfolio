import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "C++", level: 75 },
        { name: "Python", level: 70 }
      ],
      icon: "💻",
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 95 },
        { name: "Redux", level: 90 },
        { name: "Redux Toolkit", level: 88 },
        { name: "Context API", level: 85 }
      ],
      icon: "📱",
      color: "bg-accent/10 text-accent"
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Firebase", level: 90 },
        { name: "SQL Database", level: 80 },
        { name: "MongoDB", level: 75 }
      ],
      icon: "🗄️",
      color: "bg-purple-500/10 text-purple-400"
    },
    {
      title: "Development Tools",
      skills: [
        { name: "GitHub", level: 92 },
        { name: "Selenium", level: 70 },
        { name: "Cypress", level: 68 }
      ],
      icon: "🛠️",
      color: "bg-orange-500/10 text-orange-400"
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "OOP", level: 88 },
        { name: "Data Structures & Algorithms", level: 82 }
      ],
      icon: "🧠",
      color: "bg-green-500/10 text-green-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-background">
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
              Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-primary mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks for building exceptional mobile applications
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  whileHover={{
                    y: -10,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card
                    className="p-6 bg-surface hover:bg-surface-elevated transition-all duration-300 border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 group h-full"
                  >
                    <div className="space-y-4">
                      {/* Category Header */}
                      <div className="flex items-center space-x-3">
                        <motion.div
                          className={`p-2 rounded-lg ${category.color} text-2xl`}
                          whileHover={{
                            rotate: [0, -10, 10, -10, 0],
                            scale: 1.2
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {category.icon}
                        </motion.div>
                        <h3 className="font-semibold text-foreground">{category.title}</h3>
                      </div>

                      {/* Skills with progress bars */}
                      <div className="space-y-3">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: skillIndex * 0.1 }}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm text-foreground-secondary">{skill.name}</span>
                              <span className="text-xs text-primary font-medium">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-primary rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 1,
                                  delay: skillIndex * 0.1,
                                  ease: "easeOut"
                                }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 bg-gradient-surface border-border hover:border-primary/30 transition-all duration-300">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Always Learning, Always Growing
                </h3>
                <p className="text-foreground-secondary max-w-3xl mx-auto">
                  Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, tools, and best practices
                  to deliver cutting-edge solutions that push the boundaries of mobile development.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;