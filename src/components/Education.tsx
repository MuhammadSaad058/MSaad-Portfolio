import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
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

  return (
    <section id="education" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Educational <span className="bg-gradient-primary bg-clip-text text-transparent">Background</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              Strong academic foundation in software engineering and computer science, providing the knowledge base for innovative development solutions
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <Card 
                key={index}
                className="p-8 bg-surface hover:bg-surface-elevated transition-all duration-300 border-border hover:border-primary/30 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Education Header */}
                  <div className="lg:w-1/3 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-3 rounded-lg ${edu.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}>
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
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
                      <Badge 
                        variant="secondary"
                        className="bg-muted text-foreground-muted"
                      >
                        {edu.type}
                      </Badge>
                      <Badge 
                        variant="default"
                        className={`${edu.color === 'primary' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'}`}
                      >
                        {edu.status}
                      </Badge>
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
                          <div 
                            key={highlightIndex}
                            className="flex items-start gap-2 text-foreground-secondary"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <Card className="p-8 bg-gradient-surface border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Continuous Learning
              </h3>
              <p className="text-foreground-secondary max-w-2xl mx-auto">
                Beyond formal education, I'm committed to continuous learning through online courses, 
                technical documentation, and hands-on projects to stay current with the latest technologies and best practices.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;