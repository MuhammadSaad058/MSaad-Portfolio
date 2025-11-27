import { Card } from '@/components/ui/card';
import { Code, Smartphone, Database, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

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
            <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
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
                <p className="text-foreground-secondary leading-relaxed">
                  I'm a <strong className="text-foreground">skilled Software Developer</strong> with extensive expertise in
                  <strong className="text-primary"> React Native, JavaScript, TypeScript, Redux, and Firebase</strong>.
                  My passion lies in creating seamless cross-platform solutions that deliver exceptional user experiences.
                </p>

                <p className="text-foreground-secondary leading-relaxed">
                  I specialize in building mobile applications with <strong className="text-foreground">real-time functionality,
                    responsive UI design, and smooth user experience</strong>. My technical strengths include
                  <strong className="text-accent"> API integration, secure authentication, performance optimization,
                    and comprehensive debugging</strong>.
                </p>

                <p className="text-foreground-secondary leading-relaxed">
                  With a focus on <strong className="text-foreground">modern development practices</strong> and
                  <strong className="text-primary"> cutting-edge technologies</strong>, I deliver high-quality mobile
                  solutions that meet business objectives and exceed user expectations.
                </p>
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
                  <Card
                    className="p-6 bg-surface hover:bg-surface-elevated transition-all duration-300 border-border hover:border-primary/30 hover:shadow-lg group"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        {item.icon}
                      </div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-foreground-muted leading-relaxed">{item.description}</p>
                    </div>
                  </Card>
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