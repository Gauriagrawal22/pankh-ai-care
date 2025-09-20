import React, { useState } from 'react';
import { TrendingUp, Brain, MessageCircle, Sparkles, Calendar, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import MobileLayout from '@/components/MobileLayout';

const AIInsights = () => {
  const [chatMessages, setChatMessages] = useState([
    {
      type: 'ai',
      message: "Hello Priya! I've analyzed your recent data. Your cycle patterns show good regularity, but I noticed some fatigue during luteal phases. Would you like personalized recommendations?"
    },
    {
      type: 'user',
      message: "Yes, I've been feeling more tired lately. What can I do?"
    },
    {
      type: 'ai',
      message: "Based on your cycle day 26 and recent symptoms, try these: 1) Increase iron-rich foods (spinach, lentils), 2) Gentle yoga in evenings, 3) Sleep 30 minutes earlier. Your energy typically improves after day 3 of your cycle."
    }
  ]);

  const insights = [
    {
      id: 'cycle-prediction',
      title: 'Cycle Prediction Accuracy',
      description: 'Your cycle predictions are 94% accurate based on 6 months of data',
      confidence: 94,
      type: 'success',
      icon: Calendar
    },
    {
      id: 'symptom-pattern',
      title: 'Symptom Pattern Detected',
      description: 'Fatigue symptoms peak 5 days before period starts',
      confidence: 87,
      type: 'info',
      icon: Activity
    },
    {
      id: 'mood-correlation',
      title: 'Mood & Sleep Correlation',
      description: 'Poor sleep quality correlates with mood swings (85% match)',
      confidence: 85,
      type: 'warning',
      icon: Brain
    }
  ];

  const DesktopAIInsights = () => (
    <div className="min-h-screen bg-background">
      <header className="pankhai-card mx-6 mt-6 mb-8">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                पंखAI
              </h1>
              <p className="text-sm text-muted-foreground">AI Insights</p>
            </div>
          </div>
          <Button variant="wellness" size="sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Ask AI
          </Button>
        </div>
      </header>

      <div className="flex gap-6 mx-6">
        <Navigation />
        
        <main className="flex-1 space-y-8">
          <Tabs defaultValue="insights" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="insights">Smart Insights</TabsTrigger>
              <TabsTrigger value="chat">AI Chat</TabsTrigger>
              <TabsTrigger value="predictions">Predictions</TabsTrigger>
            </TabsList>

            <TabsContent value="insights" className="space-y-6">
              {/* Key Insights */}
              <div className="grid gap-6">
                {insights.map((insight) => {
                  const Icon = insight.icon;
                  return (
                    <Card key={insight.id} className="pankhai-card">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`
                            w-12 h-12 rounded-xl flex items-center justify-center
                            ${insight.type === 'success' ? 'bg-pankhai-teal/20' : ''}
                            ${insight.type === 'info' ? 'bg-pankhai-purple/20' : ''}
                            ${insight.type === 'warning' ? 'bg-pankhai-orange/20' : ''}
                          `}>
                            <Icon className={`
                              w-6 h-6
                              ${insight.type === 'success' ? 'text-pankhai-teal' : ''}
                              ${insight.type === 'info' ? 'text-pankhai-purple' : ''}
                              ${insight.type === 'warning' ? 'text-pankhai-orange' : ''}
                            `} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2">{insight.title}</h3>
                            <p className="text-muted-foreground mb-4">{insight.description}</p>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 bg-muted h-2 rounded-full overflow-hidden">
                                <div 
                                  className={`
                                    h-full rounded-full transition-all duration-500
                                    ${insight.type === 'success' ? 'bg-pankhai-teal' : ''}
                                    ${insight.type === 'info' ? 'bg-pankhai-purple' : ''}
                                    ${insight.type === 'warning' ? 'bg-pankhai-orange' : ''}
                                  `}
                                  style={{ width: `${insight.confidence}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium">{insight.confidence}%</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="chat" className="space-y-6">
              <Card className="pankhai-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Chat with AI Health Assistant
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 h-96 overflow-y-auto mb-4">
                    {chatMessages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`
                            max-w-xs p-3 rounded-xl
                            ${message.type === 'user' 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-muted text-muted-foreground'
                            }
                          `}
                        >
                          {message.message}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ask about your health patterns..."
                      className="flex-1 pankhai-input"
                    />
                    <Button>Send</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="predictions" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="pankhai-card">
                  <CardHeader>
                    <CardTitle>Next Cycle Predictions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-pankhai-pink/10 rounded-lg">
                      <span className="font-medium">Next Period</span>
                      <span className="text-pankhai-pink font-semibold">Feb 13, 2024</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-pankhai-teal/10 rounded-lg">
                      <span className="font-medium">Ovulation</span>
                      <span className="text-pankhai-teal font-semibold">Jan 30, 2024</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-pankhai-orange/10 rounded-lg">
                      <span className="font-medium">PMS Symptoms</span>
                      <span className="text-pankhai-orange font-semibold">Feb 8-12</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="pankhai-card">
                  <CardHeader>
                    <CardTitle>Symptom Forecast</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Fatigue Risk</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-muted h-2 rounded-full">
                            <div className="w-3/4 bg-pankhai-orange h-2 rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium">High</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Mood Swings</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-muted h-2 rounded-full">
                            <div className="w-1/2 bg-pankhai-purple h-2 rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium">Medium</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Energy Levels</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-muted h-2 rounded-full">
                            <div className="w-1/3 bg-pankhai-teal h-2 rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium">Low</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );

  const MobileAIInsights = () => (
    <div className="p-4 space-y-6">
      <Card className="pankhai-card p-4">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Brain className="w-5 h-5 text-primary" />
          Today's AI Insights
        </h3>
        <div className="space-y-3">
          {insights.slice(0, 2).map((insight) => (
            <div key={insight.id} className="p-3 bg-muted/30 rounded-lg">
              <h4 className="font-medium text-sm mb-1">{insight.title}</h4>
              <p className="text-xs text-muted-foreground">{insight.description}</p>
            </div>
          ))}
        </div>
      </Card>
      
      <Card className="pankhai-card p-4">
        <h3 className="font-semibold mb-4">Quick Chat</h3>
        <div className="space-y-2 mb-4">
          <div className="bg-muted p-3 rounded-lg text-sm">
            Your fatigue patterns suggest you need more iron. Try spinach and lentils today!
          </div>
        </div>
        <Button className="w-full" variant="outline">
          <MessageCircle className="w-4 h-4 mr-2" />
          Chat with AI
        </Button>
      </Card>
    </div>
  );

  return (
    <>
      <div className="hidden md:block">
        <DesktopAIInsights />
      </div>
      
      <div className="md:hidden">
        <MobileLayout>
          <MobileAIInsights />
        </MobileLayout>
      </div>
    </>
  );
};

export default AIInsights;