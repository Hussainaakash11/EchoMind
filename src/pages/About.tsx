import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  Target, 
  Award,
  Mic,
  FileText,
  BarChart3,
  Download
} from "lucide-react";

const About = () => {
  const technologies = [
    { name: "OpenAI Whisper", description: "Advanced speech-to-text transcription" },
    { name: "Large Language Models", description: "AI-powered analysis and insights" },
    { name: "RAG Architecture", description: "Retrieval-Augmented Generation for accuracy" },
    { name: "React & TypeScript", description: "Modern, type-safe frontend development" },
    { name: "TailwindCSS", description: "Beautiful, responsive user interfaces" },
    { name: "Recharts", description: "Interactive data visualizations" }
  ];

  const features = [
    {
      icon: <Mic className="h-6 w-6" />,
      title: "AI Transcription",
      description: "Convert audio to accurate text with speaker identification using state-of-the-art AI models."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Sentiment Analysis", 
      description: "Understand emotional context and conversation dynamics with advanced natural language processing."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Smart Summaries",
      description: "Generate comprehensive summaries and key insights from your audio content automatically."
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Export Reports",
      description: "Download detailed analysis reports in PDF format for presentations and documentation."
    }
  ];

  const values = [
    {
      icon: <Target className="h-5 w-5" />,
      title: "Accuracy First",
      description: "We prioritize precision in transcription and analysis"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Privacy & Security", 
      description: "Your data is encrypted and processed with enterprise-grade security"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Lightning Fast",
      description: "Get insights in minutes, not hours of manual analysis"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "User-Centric",
      description: "Designed for teams and individuals who value actionable insights"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-hero rounded-2xl">
              <Brain className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About EchoMind
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing how businesses extract insights from audio conversations. 
            EchoMind combines cutting-edge AI technology with intuitive design to transform 
            raw audio into actionable intelligence.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <Card className="card-elevated max-w-4xl mx-auto text-center">
            <div className="p-8 md:p-12">
              <Award className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower organizations with AI-driven audio intelligence that reveals hidden 
                insights, improves decision-making, and accelerates business growth. We believe 
                that every conversation contains valuable data that can drive meaningful change.
              </p>
            </div>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Powerful Features for Audio Intelligence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive suite of AI tools transforms conversations into structured, 
              actionable insights for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-gradient hover:scale-105 transition-transform">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Built with Cutting-Edge Technology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              EchoMind leverages the latest advances in AI, machine learning, and 
              web technologies to deliver unparalleled performance and accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="card-gradient text-center">
                <div className="p-6">
                  <Badge variant="secondary" className="mb-3 text-sm px-3 py-1">
                    {tech.name}
                  </Badge>
                  <p className="text-muted-foreground">{tech.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and shape how we build 
              products that truly serve our users' needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-gradient text-center">
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <Card className="card-elevated">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="text-center p-8">
              <div className="text-4xl font-bold gradient-text mb-2">99.2%</div>
              <p className="text-muted-foreground">Transcription Accuracy</p>
            </div>
            <div className="text-center p-8">
              <div className="text-4xl font-bold gradient-text mb-2">10M+</div>
              <p className="text-muted-foreground">Minutes Processed</p>
            </div>
            <div className="text-center p-8">
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;