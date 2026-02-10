import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "huzaifazaib69@gmail.com",
    href: "mailto:huzaifazaib69@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92-331-3081659",
    href: "tel:+923313081659",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pakistan",
    href: null,
  },
];

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("https://formsubmit.co/huzaifazaib69@gmail.com", {
      method: "POST",
      body: data,
    });

    setLoading(false);
    setSubmitted(true);
    form.reset();
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              I'm always excited to discuss AI/ML projects, collaboration
              opportunities, or just chat about the latest in machine learning.
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Contact Info */}
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold mb-6">
                Get in Touch
              </h3>

              {contactInfo.map((item) => (
                <Card
                  key={item.label}
                  className="bg-card/50 border-border/50 hover:border-primary/30 transition-all"
                >
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
                          <p className="text-sm text-muted-foreground">
                            {item.label}
                          </p>
                          <p className="font-medium group-hover:text-primary transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {item.label}
                          </p>
                          <p className="font-medium">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}

              {/* Response Time */}
              <Card className="bg-gradient-to-br from-[#0b1220] via-[#0e1626] to-[#0b1220] border border-border/40 rounded-2xl mt-8">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">
                    Response Time
                  </p>
                  <p className="text-2xl font-semibold text-white">
                    Usually within 24 hours
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right: Contact Form */}
            <div>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-bold mb-6 text-center">
                    Send a Message
                  </h3>

                  {submitted ? (
                    <div className="text-center py-12">
                      <h4 className="text-2xl font-bold text-primary mb-2">
                        Thanks! 🎉
                      </h4>
                      <p className="text-muted-foreground">
                        I’ll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      {/* Hidden Config */}
                      <input
                        type="hidden"
                        name="_subject"
                        value="New Portfolio Message"
                      />
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_template" value="table" />
                      <input
                        type="text"
                        name="_honey"
                        style={{ display: "none" }}
                      />

                      <div>
                        <label className="text-sm font-medium">Name</label>
                        <Input name="name" placeholder="Your name" required />
                      </div>

                      <div>
                        <label className="text-sm font-medium">Email</label>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          required
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium">Message</label>
                        <Textarea
                          name="message"
                          placeholder="Tell me about your project or just say hello..."
                          rows={4}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 glow-primary"
                      >
                        {loading ? "Sending..." : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
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
