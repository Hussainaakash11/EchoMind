import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Download, 
  FileText, 
  BarChart3, 
  Users, 
  Clock,
  TrendingUp,
  MessageSquare,
  Brain,
  Share2,
  ArrowLeft,
  Play,
  Pause
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area
} from "recharts";

const Analysis = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("2:34");

  // Enhanced mock data for comprehensive analysis
  const transcriptData = [
    { speaker: "Speaker 1", time: "00:00", text: "Hello everyone, thank you for joining today's meeting. Let's start by reviewing our quarterly performance metrics.", confidence: 95 },
    { speaker: "Speaker 2", time: "00:15", text: "Thanks for having me. I'm excited to share the results we've achieved in the sales department this quarter.", confidence: 92 },
    { speaker: "Speaker 1", time: "00:30", text: "That sounds great! Before we dive in, could you give us a brief overview of the key highlights?", confidence: 98 },
    { speaker: "Speaker 2", time: "00:45", text: "Absolutely. We've seen a 25% increase in revenue compared to last quarter, and customer satisfaction scores have improved significantly.", confidence: 89 },
    { speaker: "Speaker 3", time: "01:00", text: "Those are impressive numbers! What factors do you think contributed most to this growth?", confidence: 94 },
    { speaker: "Speaker 2", time: "01:15", text: "I'd say the new customer onboarding process and our focus on personalized service have been game-changers.", confidence: 87 }
  ];

  const sentimentData = [
    { name: 'Positive', value: 68, color: '#10B981', count: 45 },
    { name: 'Neutral', value: 22, color: '#6B7280', count: 15 },
    { name: 'Negative', value: 10, color: '#EF4444', count: 7 }
  ];

  const emotionData = [
    { emotion: 'Joy', value: 45, color: '#F59E0B' },
    { emotion: 'Confidence', value: 38, color: '#10B981' },
    { emotion: 'Curiosity', value: 25, color: '#3B82F6' },
    { emotion: 'Concern', value: 18, color: '#EF4444' },
    { emotion: 'Surprise', value: 12, color: '#8B5CF6' }
  ];

  const timelineData = [
    { time: '0:00', sentiment: 70, energy: 60 },
    { time: '2:30', sentiment: 85, energy: 75 },
    { time: '5:00', sentiment: 60, energy: 45 },
    { time: '7:30', sentiment: 90, energy: 85 },
    { time: '10:00', sentiment: 75, energy: 70 },
    { time: '12:30', sentiment: 80, energy: 80 }
  ];

  const keyInsights = [
    {
      title: "Overall Sentiment",
      value: "68% Positive",
      description: "Above average positivity throughout",
      icon: <TrendingUp className="h-5 w-5" />,
      trend: "+12%"
    },
    {
      title: "Duration", 
      value: "12:34",
      description: "Total conversation length",
      icon: <Clock className="h-5 w-5" />,
      trend: "Optimal"
    },
    {
      title: "Speakers",
      value: "3",
      description: "Unique voices identified",
      icon: <Users className="h-5 w-5" />,
      trend: "Balanced"
    },
    {
      title: "Key Topics",
      value: "Sales, Growth",
      description: "Primary discussion themes",
      icon: <MessageSquare className="h-5 w-5" />,
      trend: "2 main"
    }
  ];

  const topics = [
    { name: "Sales Performance", mentions: 15, sentiment: 0.8 },
    { name: "Customer Satisfaction", mentions: 12, sentiment: 0.9 },
    { name: "Revenue Growth", mentions: 8, sentiment: 0.85 },
    { name: "Onboarding Process", mentions: 6, sentiment: 0.75 },
    { name: "Personalization", mentions: 4, sentiment: 0.7 }
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'echomind-comprehensive-analysis.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="flex items-center mb-4 lg:mb-0">
            <Button
              variant="ghost" 
              className="mr-4"
              onClick={() => navigate('/upload')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Upload
            </Button>
            <div className="flex items-center">
              <div className="p-3 bg-gradient-hero rounded-lg mr-4">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold gradient-text">Comprehensive Analysis</h1>
                <p className="text-muted-foreground">Meeting_Recording_2024.mp3</p>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <Button 
              variant="outline" 
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center"
            >
              {isPlaying ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
              {isPlaying ? 'Pause' : 'Play'} Audio
            </Button>
            <Button variant="outline" className="flex items-center">
              <Share2 className="mr-2 h-4 w-4" />
              Share Analysis
            </Button>
            <Button onClick={handleDownload} className="btn-hero">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Audio Player */}
        <Card className="card-elevated mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <span className="text-sm font-medium">{currentTime} / 12:34</span>
            </div>
            <div className="flex-1 mx-4">
              <Progress value={20} className="h-2" />
            </div>
            <Badge variant="secondary">High Quality</Badge>
          </div>
        </Card>

        {/* Key Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {keyInsights.map((insight, index) => (
            <Card key={index} className="card-gradient text-center">
              <div className="flex justify-center mb-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {insight.icon}
                </div>
              </div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">
                {insight.title}
              </h3>
              <p className="text-2xl font-bold mb-1">{insight.value}</p>
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">{insight.description}</p>
                <Badge variant="outline" className="text-xs">
                  {insight.trend}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Analysis Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="transcript">Transcript</TabsTrigger>
            <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
            <TabsTrigger value="topics">Topics</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="card-elevated">
                <h2 className="text-xl font-semibold mb-6">Sentiment & Energy Over Time</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={timelineData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Area 
                        type="monotone" 
                        dataKey="sentiment" 
                        stackId="1"
                        stroke="hsl(var(--primary))" 
                        fill="hsl(var(--primary))"
                        fillOpacity={0.6}
                        name="Sentiment"
                      />
                      <Area 
                        type="monotone" 
                        dataKey="energy" 
                        stackId="2"
                        stroke="hsl(var(--accent))" 
                        fill="hsl(var(--accent))"
                        fillOpacity={0.6}
                        name="Energy"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card className="card-elevated">
                <h2 className="text-xl font-semibold mb-6">Emotion Detection</h2>
                <div className="space-y-4">
                  {emotionData.map((emotion, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: emotion.color }}
                        />
                        <span className="font-medium">{emotion.emotion}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-secondary rounded-full h-2">
                          <div 
                            className="h-2 rounded-full transition-all duration-300"
                            style={{ 
                              width: `${emotion.value}%`, 
                              backgroundColor: emotion.color 
                            }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-8">{emotion.value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Transcript Tab */}
          <TabsContent value="transcript">
            <Card className="card-elevated">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Interactive Transcript</h2>
                <div className="flex space-x-2">
                  <Badge variant="secondary">3 Speakers</Badge>
                  <Badge variant="outline">96% Accuracy</Badge>
                </div>
              </div>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {transcriptData.map((entry, index) => (
                  <div key={index} className="flex space-x-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
                    <div className="flex-shrink-0">
                      <Badge variant="outline" className="text-xs">
                        {entry.time}
                      </Badge>
                    </div>
                    <div className="flex-shrink-0">
                      <Badge 
                        className={`text-xs ${
                          entry.speaker === 'Speaker 1' ? 'bg-primary' :
                          entry.speaker === 'Speaker 2' ? 'bg-accent' : 'bg-success'
                        }`}
                      >
                        {entry.speaker}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed">{entry.text}</p>
                      <div className="flex items-center mt-2">
                        <span className="text-xs text-muted-foreground">
                          Confidence: {entry.confidence}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Sentiment Tab */}
          <TabsContent value="sentiment">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="card-elevated">
                <h2 className="text-xl font-semibold mb-6">Sentiment Distribution</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sentimentData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {sentimentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="space-y-2 mt-4">
                  {sentimentData.map((entry, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: entry.color }}
                        />
                        <span className="text-sm font-medium">{entry.name}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {entry.value}% ({entry.count} segments)
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="card-elevated">
                <h2 className="text-xl font-semibold mb-6">Sentiment Timeline</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={timelineData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="sentiment" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3}
                        dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Real-time sentiment analysis across conversation timeline
                </p>
              </Card>
            </div>
          </TabsContent>

          {/* Topics Tab */}
          <TabsContent value="topics">
            <Card className="card-elevated">
              <h2 className="text-xl font-semibold mb-6">Topic Analysis</h2>
              <div className="space-y-4">
                {topics.map((topic, index) => (
                  <div key={index} className="p-4 bg-secondary/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{topic.name}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{topic.mentions} mentions</Badge>
                        <Badge 
                          className={
                            topic.sentiment > 0.8 ? 'bg-green-100 text-green-800' :
                            topic.sentiment > 0.6 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }
                        >
                          {(topic.sentiment * 100).toFixed(0)}% positive
                        </Badge>
                      </div>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="h-2 bg-primary rounded-full transition-all duration-300"
                        style={{ width: `${(topic.mentions / 15) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* AI Insights Tab */}
          <TabsContent value="insights">
            <Card className="card-elevated">
              <h2 className="text-xl font-semibold mb-6">AI-Generated Insights</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Executive Summary</h3>
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <p className="leading-relaxed">
                      This meeting demonstrated exceptional team dynamics with a consistently positive sentiment (68%) throughout the discussion. 
                      The conversation centered on quarterly performance achievements, particularly highlighting a remarkable 25% revenue increase. 
                      Key success drivers identified include enhanced customer onboarding processes and personalized service initiatives, 
                      suggesting a customer-centric approach is yielding measurable results.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Key Achievements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>25% revenue increase compared to previous quarter</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Significant improvement in customer satisfaction scores</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Successful implementation of new onboarding process</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Strong team collaboration and positive communication</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Strategic Recommendations</h3>
                  <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                    <ul className="space-y-2">
                      <li>• Scale successful onboarding practices to other departments</li>
                      <li>• Develop personalization strategies for broader customer segments</li>
                      <li>• Establish regular performance review cadence to maintain momentum</li>
                      <li>• Document and share best practices across organization</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Next Steps</h3>
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <p className="leading-relaxed">
                      Schedule follow-up meetings to track implementation of recommendations. 
                      Monitor customer satisfaction metrics monthly and revenue growth trends quarterly. 
                      Consider expanding the personalized service model to additional touchpoints in the customer journey.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analysis;