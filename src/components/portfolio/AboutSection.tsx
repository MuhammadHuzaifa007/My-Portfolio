import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Rocket, Code2 } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Deep Learning Expert",
    description: "CNN, LSTM, and transformer architectures"
  },
  {
    icon: Target,
    title: "Problem Solver",
    description: "End-to-end ML pipeline development"
  },
  {
    icon: Rocket,
    title: "Production Ready",
    description: "Deployed models serving real users"
  },
  {
    icon: Code2,
    title: "Full Stack ML",
    description: "From data to deployment"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-semibold">Muhammad Huzaifa Zeb</span>, an AI & Machine Learning Engineer driven by the challenge of transforming complex data into intelligent, actionable solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With hands-on experience across <span className="text-primary">Computer Vision</span>, <span className="text-secondary">NLP</span>, and <span className="text-accent">Deep Learning</span>, I've built systems that detect fraud in real-time, recognize traffic signs for autonomous systems, and generate human-like captions from images.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What sets me apart? I don't just build models I architect complete solutions. From data preprocessing to production deployment, I ensure every ML system I create delivers measurable impact and scales reliably.
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div>
                  <div className="text-3xl font-display font-bold text-gradient">5+</div>
                  <div className="text-sm text-muted-foreground">ML Projects Deployed</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-gradient-accent">85%+</div>
                  <div className="text-sm text-muted-foreground">Model Accuracy Achieved</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Industry Internships</div>
                </div>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card 
                  key={item.title} 
                  className="bg-card/50 border-border/50 hover:border-primary/50 transition-all hover:glow-primary"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
