import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, BrainCircuit, Database, Cloud, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    color: "primary",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS", "React", "Node.js"]
  },
  {
    title: "ML/DL Frameworks",
    icon: BrainCircuit,
    color: "secondary",
    skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenCV", "NLTK", "Hugging Face"]
  },
  {
    title: "Data Tools",
    icon: Database,
    color: "accent",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "SQL", "MongoDB"]
  },
  {
    title: "MLOps & Deployment",
    icon: Cloud,
    color: "primary",
    skills: ["Git", "Docker", "FastAPI", "Streamlit", "REST APIs", "Linux", "CI/CD"]
  },
  {
    title: "Specializations",
    icon: Sparkles,
    color: "secondary",
    skills: ["Computer Vision", "NLP", "Deep Learning", "CNNs", "LSTMs", "Transfer Learning", "Fraud Detection"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent systems from concept to production
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="bg-card/50 border-border/50 hover:border-primary/30 transition-all group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      category.color === 'primary' ? 'bg-primary/20 text-primary' :
                      category.color === 'secondary' ? 'bg-secondary/20 text-secondary' :
                      'bg-accent/20 text-accent'
                    }`}>
                      <category.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="font-display text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline"
                        className={`${
                          category.color === 'primary' ? 'border-primary/30 hover:bg-primary/10' :
                          category.color === 'secondary' ? 'border-secondary/30 hover:bg-secondary/10' :
                          'border-accent/30 hover:bg-accent/10'
                        } transition-colors`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
