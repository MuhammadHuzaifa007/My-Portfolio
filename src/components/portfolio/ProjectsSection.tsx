import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingUp, AlertTriangle, Camera, MessageSquare, PawPrint, User } from "lucide-react";

const projects = [
  {
    title: "Giftnix AI Fraud Detection System",
    icon: AlertTriangle,
    category: "Final Year Project",
    problem: "E-commerce platforms lose billions annually to fraudulent transactions. Traditional rule-based systems miss sophisticated fraud patterns and generate excessive false positives.",
    approach: "Engineered a CNN-based deep learning model trained on transaction behavioral patterns. Implemented extensive feature engineering including velocity features, device fingerprinting, and user behavior sequences. Applied SMOTE and class weighting to handle severe class imbalance (99:1 ratio).",
    tech: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
    results: [
      "Achieved 94% precision with 89% recall on fraud detection",
      "Reduced false positive rate by 40% vs baseline",
      "Real-time inference pipeline processing 1000+ TPS"
    ],
    highlight: "Production-ready fraud detection with business-critical accuracy thresholds",
    color: "primary"
  },
  {
  title: "TruthLens AI-Fake News Detection System",
  icon: AlertTriangle,
  category: "NLP + LLMs",
  problem: "The rapid spread of misinformation online demands intelligent systems that not only classify fake news accurately but also provide explainable insights into bias, sensationalism, and logical inconsistencies.",
  approach: "Developed a hybrid fake news detection pipeline combining a TF-IDF + Passive Aggressive Classifier for high-precision classification with Google Gemini API for advanced reasoning. Implemented live URL scraping and article parsing using BeautifulSoup and designed explainable AI outputs highlighting bias and credibility factors.",
  tech: ["Python", "Scikit-learn", "TF-IDF", "Passive Aggressive", "Gemini API", "BeautifulSoup", "Streamlit"],
  results: [
    "High-precision fake vs real news classification",
    "Explainable AI analysis covering bias, sensationalism, and fallacies",
    "Interactive Streamlit dashboard with downloadable PDF reports"
  ],
  highlight: "Hybrid ML + LLM system focused on explainable and trustworthy AI",
  color: "primary"
},
{
  title: "StyleGPT Outfit Specialist",
  icon: MessageSquare,
  category: "LLMs + RAG",
  problem: "Generic fashion recommendation systems fail to provide personalized, context-aware outfit suggestions tailored to individual preferences, occasions, and style trends.",
  approach: "Built an AI-powered fashion recommendation assistant using LLaMA 3.2 3B with LangChain for retrieval-augmented generation (RAG). Created a custom apparel dataset, generated embeddings, and implemented a FAISS vector store for fast semantic similarity search. Designed prompt pipelines for personalized and context-aware recommendations.",
  tech: ["Python", "LLaMA 3.2", "LangChain", "FAISS", "RAG", "Embeddings", "Streamlit"],
  results: [
    "Personalized outfit recommendations using semantic search",
    "Low-latency retrieval with FAISS vector indexing",
    "Interactive Streamlit app for real-time fashion advisory"
  ],
  highlight: "End-to-end LLM + RAG system showcasing modern AI recommendation pipelines",
  color: "secondary"
},
  {
    title: "Traffic Sign Recognition System",
    icon: Camera,
    category: "Computer Vision",
    problem: "Autonomous vehicles require robust, real-time traffic sign classification that works across varying lighting conditions, occlusions, and sign degradation.",
    approach: "Built a custom CNN architecture optimized for embedded deployment. Implemented aggressive data augmentation (rotation, blur, lighting variations) to improve generalization. Applied batch normalization and dropout for regularization.",
    tech: ["Python", "TensorFlow", "CNN", "OpenCV", "Data Augmentation"],
    results: [
      "96% accuracy on German Traffic Sign Benchmark",
      "30ms inference time suitable for real-time applications",
      "Robust performance across 43 sign categories"
    ],
    highlight: "Industry-relevant CV application for intelligent transport systems",
    color: "secondary"
  },
  {
    title: "Image Caption Generator",
    icon: MessageSquare,
    category: "Deep Learning + NLP",
    problem: "Bridging the gap between visual understanding and natural language generation for accessibility applications and content automation.",
    approach: "Implemented an encoder-decoder architecture using VGG16 for visual feature extraction and LSTM for sequence generation. Fine-tuned on Flickr8k dataset with beam search decoding for improved caption quality.",
    tech: ["TensorFlow", "Keras", "LSTM", "VGG16", "Streamlit", "Beam Search"],
    results: [
      "85% BLEU score on test dataset",
      "Deployed interactive web app for real-time captioning",
      "Handles diverse image categories effectively"
    ],
    highlight: "Multi-modal AI combining vision and language understanding",
    color: "accent"
  },
  {
    title: "Gender Prediction from Facial Images",
    icon: User,
    category: "PyTorch + Deployment",
    problem: "Demographic classification from images with focus on building generalizable models that avoid common CNN pitfalls like overfitting.",
    approach: "Designed custom CNN in PyTorch with careful attention to regularization. Applied extensive preprocessing including face detection, alignment, and normalization. Implemented early stopping and learning rate scheduling.",
    tech: ["PyTorch", "CNN", "Streamlit", "Face Detection", "Model Optimization"],
    results: [
      "91% accuracy on held-out test set",
      "Robust across diverse demographics",
      "User-friendly deployment with real-time inference"
    ],
    highlight: "End-to-end PyTorch project with production deployment",
    color: "secondary"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-world ML solutions demonstrating technical depth and measurable impact
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Projects grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="bg-card/50 border-border/50 hover:border-primary/30 transition-all overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        project.color === 'primary' ? 'bg-primary/20 text-primary' :
                        project.color === 'secondary' ? 'bg-secondary/20 text-secondary' :
                        'bg-accent/20 text-accent'
                      }`}>
                        <project.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold">{project.title}</h3>
                        <Badge variant="outline" className="mt-1">{project.category}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Problem */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">THE PROBLEM</h4>
                    <p className="text-muted-foreground">{project.problem}</p>
                  </div>

                  {/* Approach */}
                  <div>
                    <h4 className="text-sm font-semibold text-secondary mb-2">MY APPROACH</h4>
                    <p className="text-muted-foreground">{project.approach}</p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-accent mb-2">TECH STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-muted">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      RESULTS & IMPACT
                    </h4>
                    <ul className="space-y-2">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1.5">•</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlight */}
                  <div className={`p-4 rounded-lg ${
                    project.color === 'primary' ? 'bg-primary/10 border border-primary/20' :
                    project.color === 'secondary' ? 'bg-secondary/10 border border-secondary/20' :
                    'bg-accent/10 border border-accent/20'
                  }`}>
                    <p className="text-sm font-medium">
                      💡 {project.highlight}
                    </p>
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

export default ProjectsSection;
