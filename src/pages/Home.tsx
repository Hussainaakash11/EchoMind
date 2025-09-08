import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Upload as UploadIcon, 
  FileText, 
  BarChart3, 
  Download, 
  Mic, 
  Brain, 
  Zap,
  Shield,
  Clock,
  Users
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const features = [
    {
      icon: <UploadIcon className="h-6 w-6" />,
      title: "Easy Upload",
      description: "Drag & drop MP3 files or browse from your device"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "AI Transcription", 
      description: "Accurate speech-to-text with speaker identification"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Sentiment Analysis",
      description: "Understand emotional context and conversation tone"
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Export Reports",
      description: "Download comprehensive analysis in PDF format"
    }
  ];

  const benefits = [
    { icon: <Zap className="h-5 w-5" />, text: "Lightning fast processing" },
    { icon: <Shield className="h-5 w-5" />, text: "Enterprise-grade security" },
    { icon: <Clock className="h-5 w-5" />, text: "Save hours of manual work" },
    { icon: <Users className="h-5 w-5" />, text: "Team collaboration tools" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                <Brain className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Turn Conversations
              <br />
              into <span className="text-accent-light">Insights</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              AI-powered audio analysis that transforms your recordings into 
              actionable business intelligence with transcription, sentiment analysis, and more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/login">
                <Button className="btn-hero text-lg px-12 py-6">
                  <Mic className="mr-2 h-5 w-5" />
                  Get Started Free
                </Button>
              </Link>
              <Button variant="outline" className="btn-hero-outline text-lg px-12 py-6 text-white border-white hover:bg-white hover:text-primary">
                Watch Demo
              </Button>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6 text-white/80">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {benefit.icon}
                  <span className="text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Powerful Features for Audio Intelligence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive suite of AI tools transforms raw audio into structured, 
              actionable insights for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-gradient text-center hover:scale-105 transition-transform">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Audio Data?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of businesses already using EchoMind to unlock 
            insights from their conversations and audio content.
          </p>
          <Link to="/login">
            <Button className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-6 shadow-lg">
              <UploadIcon className="mr-2 h-5 w-5" />
              Start Analyzing Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;