import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "huzaifazaib69@gmail.com",
    href: "mailto:huzaifazaib69@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92-331-3081659",
    href: "tel:+923313081659"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pakistan",
    href: null
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/MuhammadHuzaifa007",
    username: "@MuhammadHuzaifa007"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/muhammad-huzaifa-zeb",
    username: "muhammad-huzaifa-zeb"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              I'm always excited to discuss AI/ML projects, collaboration opportunities, or just chat about the latest in machine learning. Let's build something intelligent together.
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold mb-6">Get in Touch</h3>
              
              {contactInfo.map((item) => (
                <Card key={item.label} className="bg-card/50 border-border/50 hover:border-primary/30 transition-all">
                  <CardContent className="p-4">
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="font-medium group-hover:text-primary transition-colors">{item.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="font-medium">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social links & CTA */}
            <div className="space-y-6">
              <h3 className="font-display text-xl font-bold mb-6">Follow My Work</h3>
              
              {socialLinks.map((social) => (
                <Card key={social.label} className="bg-card/50 border-border/50 hover:border-primary/30 transition-all">
                  <CardContent className="p-4">
                    <a 
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                        <social.icon className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{social.label}</p>
                        <p className="font-medium group-hover:text-secondary transition-colors">{social.username}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}

              {/* CTA Card */}
              <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30 mt-8">
                <CardContent className="p-6 text-center">
                  <h4 className="font-display text-xl font-bold mb-2">Ready to Start a Project?</h4>
                  <p className="text-muted-foreground mb-4">
                    Let's discuss how AI can transform your business
                  </p>
                  <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 glow-primary" asChild>
                    <a href="mailto:huzaifazaib69@gmail.com">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
