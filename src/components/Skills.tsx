import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "C++", "Python"],
      icon: "💻",
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Mobile Development",
      skills: ["React Native", "Redux", "Redux Toolkit", "Context API"],
      icon: "📱",
      color: "bg-accent/10 text-accent"
    },
    {
      title: "Backend & Databases",
      skills: ["Firebase", "SQL Database", "MongoDB"],
      icon: "🗄️",
      color: "bg-purple-500/10 text-purple-400"
    },
    {
      title: "Development Tools",
      skills: ["GitHub", "Selenium", "Cypress"],
      icon: "🛠️",
      color: "bg-orange-500/10 text-orange-400"
    },
    {
      title: "Core Concepts",
      skills: ["OOP", "Data Structures & Algorithms"],
      icon: "🧠",
      color: "bg-green-500/10 text-green-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
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
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
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
                <Card
                  className="p-6 bg-surface hover:bg-surface-elevated transition-all duration-300 border-border hover:border-primary/30 hover:shadow-lg group h-full"
                >
                  <div className="space-y-4">
                    {/* Category Header */}
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${category.color} text-2xl`}>
                        {category.icon}
                      </div>
                      <h3 className="font-semibold text-foreground">{category.title}</h3>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
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
        </div>
      </div>
    </section>
  );
};

export default Skills;