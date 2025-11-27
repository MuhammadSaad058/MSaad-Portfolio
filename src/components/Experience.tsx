import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Building } from 'lucide-react';

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

  return (
    <section id="experience" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              Building innovative mobile solutions with cutting-edge technologies and delivering exceptional user experiences
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="p-8 bg-surface hover:bg-surface-elevated transition-all duration-300 border-border hover:border-primary/30 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Experience Header */}
                  <div className="lg:w-1/3 space-y-3">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-primary">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
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

                    <Badge 
                      variant={exp.type === "Current Position" ? "default" : "secondary"}
                      className={exp.type === "Current Position" ? "bg-accent text-accent-foreground" : ""}
                    >
                      {exp.type}
                    </Badge>
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
                          <li 
                            key={achievementIndex}
                            className="flex items-start gap-3 text-foreground-secondary"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline"
                            className="border-primary/30 text-primary bg-primary/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <Card className="p-8 bg-gradient-surface border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Ready for New Challenges
              </h3>
              <p className="text-foreground-secondary max-w-2xl mx-auto">
                I'm always excited to take on new projects and collaborate with innovative teams. 
                Let's build something amazing together!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;