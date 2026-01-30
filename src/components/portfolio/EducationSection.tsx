import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, ExternalLink } from "lucide-react";

const education = {
  degree: "BS Artificial Intelligence",
  institution: "Bahria University, Islamabad",
  period: "Expected Graduation: January 2026",
  focus: ["Deep Learning", "Computer Vision", "Natural Language Processing", "Machine Learning"]
};

const certifications = [
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    badge: "Professional Certificate",
    color: "primary"
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    badge: "Professional Certificate",
    color: "primary"
  },
  {
    title: "Data Visualization Using Python",
    issuer: "Great Learning",
    badge: "Certificate",
    color: "secondary"
  },
  {
    title: "The Art of Prompt Engineering",
    issuer: "IBM",
    badge: "Certificate",
    color: "accent"
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Education & <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Continuous learning is the foundation of AI excellence
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-all">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <GraduationCap className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold">{education.degree}</h3>
                    <p className="text-primary">{education.institution}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{education.period}</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-3">Key Focus Areas:</p>
                  <div className="flex flex-wrap gap-2">
                    {education.focus.map((area) => (
                      <Badge key={area} variant="outline" className="border-primary/30">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="font-display text-xl font-bold">Professional Certifications</h3>
              </div>
              
              {certifications.map((cert, index) => (
                <Card 
                  key={cert.title}
                  className="bg-card/50 border-border/50 hover:border-primary/30 transition-all"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                      <Badge 
                        variant="outline"
                        className={`${
                          cert.color === 'primary' ? 'border-primary/30 text-primary' :
                          cert.color === 'secondary' ? 'border-secondary/30 text-secondary' :
                          'border-accent/30 text-accent'
                        }`}
                      >
                        {cert.badge}
                      </Badge>
                    </div>
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

export default EducationSection;
