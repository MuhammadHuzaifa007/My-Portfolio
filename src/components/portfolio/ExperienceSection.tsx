import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Machine Learning Engineer Intern",
    company: "Eziline Software House Pvt Ltd",
    location: "Rawalpindi, Pakistan",
    period: "July 2024 – October 2024",
    type: "Internship",
    achievements: [
      "Developed and deployed ML models for prediction and classification tasks, improving client decision-making processes",
      "Built NLP applications for text classification and sentiment analysis, processing 10K+ documents",
      "Engineered computer vision solutions using OpenCV for real-time image processing and object detection",
      "Fine-tuned deep learning models with TensorFlow & Keras, achieving 15% accuracy improvement over baselines",
      "Collaborated with cross-functional team to integrate AI models into production software systems"
    ],
    skills: ["TensorFlow", "OpenCV", "NLP", "Python", "Keras"]
  },
  {
    title: "Machine Learning Engineer",
    company: "Code Alpha",
    location: "Remote",
    period: "May 2024",
    type: "Contract",
    achievements: [
      "Built image-to-caption generator using encoder-decoder architecture, achieving 85% accuracy on benchmark dataset",
      "Developed spam email detection system using NLP techniques (Count Vectorization, Multinomial Naive Bayes) with 97% precision",
      "Created AI-powered Tic Tac Toe game implementing minimax algorithm with alpha-beta pruning"
    ],
    skills: ["Deep Learning", "NLP", "LSTM", "VGG16", "Streamlit"]
  },
  {
    title: "IT Intern (Networks, Systems & Operations)",
    company: "Mari Energies Ltd",
    location: "Daharki, Pakistan",
    period: "August 2025 – September 2025",
    type: "Internship",
    achievements: [
      "Gained hands-on experience with enterprise networking infrastructure (Cisco switches, VLANs, port security)",
      "Assisted in data center operations and monitoring using PRTG, ensuring 99.9% uptime",
      "Supported VoIP/IP telephony systems and SAP ERP operational processes",
      "Observed IT support for critical industrial field operations in energy sector environment"
    ],
    skills: ["Networking", "Cisco", "SAP ERP", "PRTG", "Data Center Ops"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building real-world AI solutions across diverse industries
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.title + exp.company}
                  className={`relative ${index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%]'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 hidden md:block" />
                  
                  <Card className={`bg-card/50 border-border/50 hover:border-primary/30 transition-all ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <CardHeader className="pb-2">
                      <div className={`flex flex-col gap-2 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                        <Badge variant="outline" className="w-fit border-primary/30 text-primary">
                          {exp.type}
                        </Badge>
                        <h3 className="font-display text-xl font-bold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground text-sm">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-muted text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
