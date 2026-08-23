import { Card } from '@/components/ui/card';
import { Code, Smartphone, Database, Shield } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const About = () => {
  const highlights = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Cross-Platform Expert",
      description: "Specializing in React Native for seamless iOS and Android applications"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Modern Tech Stack",
      description: "Proficient in JavaScript, TypeScript, Redux, and latest mobile development frameworks"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Backend Integration",
      description: "Expert in Firebase, API integration, and real-time functionality implementation"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security & Performance",
      description: "Focus on secure authentication, performance optimization, and thorough debugging"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-primary mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="prose prose-lg">
                <motion.p
                  className="text-foreground-secondary leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  I'm a <strong className="text-foreground">Skilled Software Developer</strong> with <strong className="text-primary">2+ years of experience</strong> building high-quality cross-platform mobile applications for iOS and Android. My passion lies in creating seamless solutions that deliver exceptional user experiences.
                </motion.p>

                <motion.p
                  className="text-foreground-secondary leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  I specialize in developing <strong className="text-foreground">scalable, performance-driven apps</strong> with a focus on 
                  <strong className="text-accent"> seamless user experiences, secure authentication, and efficient backend integration</strong>.
                </motion.p>

                <motion.p
                  className="text-foreground-secondary leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  I have a <strong className="text-foreground">proven ability</strong> to manage the <strong className="text-primary">complete app lifecycle</strong>, from initial development to successful deployment on the Apple App Store and Google Play Store.
                </motion.p>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <motion.div
                    whileHover={{
                      y: -5,
                      rotateY: 5,
                      scale: 1.02
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      className="p-6 bg-surface hover:bg-surface-elevated transition-all duration-300 border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 group h-full"
                    >
                      <div className="flex flex-col items-center text-center space-y-3">
                        <motion.div
                          className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                          whileHover={{
                            rotate: [0, -10, 10, -10, 0],
                            scale: 1.1
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {item.icon}
                        </motion.div>
                        <motion.h3
                          className="font-semibold text-foreground"
                          whileHover={{ scale: 1.05 }}
                        >
                          {item.title}
                        </motion.h3>
                        <p className="text-sm text-foreground-muted leading-relaxed">{item.description}</p>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;