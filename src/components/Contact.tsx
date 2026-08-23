import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, MessageCircle, Send, Github } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "msaadi252gb@gmail.com",
      href: "mailto:msaadi252gb@gmail.com",
      color: "text-primary"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "03346664252",
      href: "tel:03346664252",
      color: "text-accent"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Islamabad, Pakistan",
      href: "#",
      color: "text-purple-400"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/muhammad-saad-5b2486204",
      color: "text-blue-400"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "MuhammadSaad058",
      href: "https://github.com/MuhammadSaad058",
      color: "text-foreground"
    }
  ];

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Muhammad_Saad_CV.pdf';
    link.download = 'Muhammad_Saad_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              Ready to bring your mobile app ideas to life? Let's discuss how we can work together to create something amazing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
                <p className="text-foreground-secondary leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, innovative projects, or potential collaborations. 
                  Whether you have a specific project in mind or just want to connect, I'd love to hear from you!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="p-4 bg-surface hover:bg-surface-elevated transition-all duration-300 border-border hover:border-primary/30">
                    <a 
                      href={contact.href}
                      className="flex items-center gap-4 group"
                      onClick={contact.href === '#' ? (e) => e.preventDefault() : undefined}
                    >
                      <div className={`p-3 rounded-lg bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 ${contact.color}`}>
                        {contact.icon}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{contact.label}</p>
                        <p className="text-foreground-secondary group-hover:text-primary transition-colors duration-300">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Quick Actions</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={downloadCV}
                    className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    onClick={() => window.open('mailto:msaadi252gb@gmail.com', '_blank')}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                </div>
              </div>
            </div>

            {/* Call to Action Card */}
            <div className="space-y-6">
              <Card className="p-8 bg-gradient-surface border-border hover:border-primary/30 transition-all duration-300">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                    <MessageCircle className="h-10 w-10 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Ready to Start Your Project?
                    </h3>
                    <p className="text-foreground-secondary leading-relaxed">
                      I specialize in creating high-quality React Native applications that deliver exceptional user experiences. 
                      Let's discuss your project requirements and bring your ideas to life.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-4 bg-surface rounded-lg">
                        <p className="text-2xl font-bold text-primary">2+</p>
                        <p className="text-sm text-foreground-secondary">Years Experience</p>
                      </div>
                      <div className="p-4 bg-surface rounded-lg">
                        <p className="text-2xl font-bold text-accent">5+</p>
                        <p className="text-sm text-foreground-secondary">Projects Completed</p>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-accent hover:bg-accent-hover text-accent-foreground"
                      onClick={() => window.open('mailto:msaadi252gb@gmail.com?subject=Project Inquiry', '_blank')}
                    >
                      Start a Conversation
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Availability Status */}
              <Card className="p-6 bg-surface border-l-4 border-l-accent">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <div>
                    <p className="font-medium text-foreground">Available for New Projects</p>
                    <p className="text-sm text-foreground-secondary">Currently accepting new client work</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;