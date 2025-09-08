import { useState } from "react";
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
  Share2
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
  Line
} from "recharts";

const Results = () => {
  // Mock data for demonstration
  const transcriptData = [
    { speaker: "Speaker 1", time: "00:00", text: "Hello everyone, thank you for joining today's meeting. Let's start by reviewing our quarterly performance metrics." },
    { speaker: "Speaker 2", time: "00:15", text: "Thanks for having me. I'm excited to share the results we've achieved in the sales department this quarter." },
    { speaker: "Speaker 1", time: "00:30", text: "That sounds great! Before we dive in, could you give us a brief overview of the key highlights?" },
    { speaker: "Speaker 2", time: "00:45", text: "Absolutely. We've seen a 25% increase in revenue compared to last quarter, and customer satisfaction scores have improved significantly." },
    { speaker: "Speaker 3", time: "01:00", text: "Those are impressive numbers! What factors do you think contributed most to this growth?" },
    { speaker: "Speaker 2", time: "01:15", text: "I'd say the new customer onboarding process and our focus on personalized service have been game-changers." }
  ];

  const sentimentData = [
    { name: 'Positive', value: 65, color: '#10B981' },
    { name: 'Neutral', value: 25, color: '#6B7280' },
    { name: 'Negative', value: 10, color: '#EF4444' }
  ];

  const timelineData = [
    { time: '0:00', sentiment: 70 },
    { time: '2:30', sentiment: 85 },
    { time: '5:00', sentiment: 60 },
    { time: '7:30', sentiment: 90 },
    { time: '10:00', sentiment: 75 },
    { time: '12:30', sentiment: 80 }
  ];

  const keyInsights = [
    {
      title: "Overall Sentiment",
      value: "Positive",
      description: "The conversation maintained a positive tone throughout",
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      title: "Duration", 
      value: "12:34",
      description: "Total conversation length",
      icon: <Clock className="h-5 w-5" />
    },
    {
      title: "Speakers",
      value: "3",
      description: "Number of participants identified",
      icon: <Users className="h-5 w-5" />
    },
    {
      title: "Key Topics",
      value: "Sales, Growth",
      description: "Main discussion themes",
      icon: <MessageSquare className="h-5 w-5" />
    }
  ];

  const handleDownload = () => {
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'echomind-analysis-report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-hero rounded-lg mr-4">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold gradient-text">Analysis Results</h1>
                <p className="text-muted-foreground">Meeting_Recording_2024.mp3</p>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <Button variant="outline" className="flex items-center">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button onClick={handleDownload} className="btn-hero">
              <Download className="mr-2 h-4 w-4" />
              Download Report
            </Button>
          </div>
        </div>

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
              <p className="text-xs text-muted-foreground">{insight.description}</p>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="transcript" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="transcript" className="flex items-center">
              <FileText className="mr-2 h-4 w-4" />
              Transcript
            </TabsTrigger>
            <TabsTrigger value="sentiment" className="flex items-center">
              <BarChart3 className="mr-2 h-4 w-4" />
              Sentiment Analysis
            </TabsTrigger>
            <TabsTrigger value="summary" className="flex items-center">
              <Brain className="mr-2 h-4 w-4" />
              AI Summary
            </TabsTrigger>
          </TabsList>

          {/* Transcript Tab */}
          <TabsContent value="transcript">
            <Card className="card-elevated">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Full Transcript</h2>
                <Badge variant="secondary">3 Speakers Identified</Badge>
              </div>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {transcriptData.map((entry, index) => (
                  <div key={index} className="flex space-x-4 p-4 bg-secondary/30 rounded-lg">
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
                    <p className="text-sm leading-relaxed">{entry.text}</p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Sentiment Analysis Tab */}
          <TabsContent value="sentiment">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Sentiment Distribution */}
              <Card className="card-elevated">
                <h2 className="text-xl font-semibold mb-6">Overall Sentiment Distribution</h2>
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
                
                <div className="flex justify-center space-x-6 mt-4">
                  {sentimentData.map((entry, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: entry.color }}
                      ></div>
                      <span className="text-sm">
                        {entry.name}: {entry.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Sentiment Timeline */}
              <Card className="card-elevated">
                <h2 className="text-xl font-semibold mb-6">Sentiment Over Time</h2>
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
                  Sentiment scores range from 0 (negative) to 100 (positive)
                </p>
              </Card>
            </div>
          </TabsContent>

          {/* AI Summary Tab */}
          <TabsContent value="summary">
            <Card className="card-elevated">
              <h2 className="text-xl font-semibold mb-6">AI-Generated Summary</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Executive Summary</h3>
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <p className="leading-relaxed">
                      This meeting focused on quarterly performance review with particular emphasis on sales growth. 
                      The conversation maintained a positive tone throughout, with participants discussing a 25% 
                      revenue increase and improved customer satisfaction metrics. Key success factors identified 
                      include enhanced customer onboarding processes and personalized service initiatives.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Key Discussion Points</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>25% revenue increase compared to previous quarter</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Improved customer satisfaction scores</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Success of new customer onboarding process</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Focus on personalized service as a growth driver</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Recommendations</h3>
                  <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                    <p className="leading-relaxed">
                      Continue investing in customer onboarding and personalization strategies. 
                      Consider expanding successful initiatives to other departments. Monitor 
                      customer satisfaction trends to maintain positive momentum.
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

export default Results;