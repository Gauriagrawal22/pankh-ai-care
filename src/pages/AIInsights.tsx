import React, { useState, useEffect } from 'react';
import { TrendingUp, Brain, MessageCircle, Sparkles, Calendar, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import MobileLayout from '@/components/MobileLayout';
import PageHeader from '@/components/PageHeader';
import QuickAIActions from '@/components/QuickAIActions';
import AIChat from '@/components/AIChat';
import { useToast } from '@/hooks/use-toast';
import { useLocation } from 'react-router-dom';

const AIInsights = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [isThinking, setIsThinking] = useState(false);
  const [activeTab, setActiveTab] = useState('insights');
  const [chatMessages, setChatMessages] = useState([
    {
      type: 'ai' as const,
      message: "Hello Priya! I've analyzed your recent data. Your cycle patterns show good regularity, but I noticed some fatigue during luteal phases. Would you like personalized recommendations?"
    },
    {
      type: 'user' as const,
      message: "Yes, I've been feeling more tired lately. What can I do?"
    },
    {
      type: 'ai' as const,
      message: "Based on your cycle day 26 and recent symptoms, try these: 1) Increase iron-rich foods (spinach, lentils), 2) Gentle yoga in evenings, 3) Sleep 30 minutes earlier. Your energy typically improves after day 3 of your cycle."
    }
  ]);

  // Handle incoming AI prompt from navigation
  useEffect(() => {
    const state = location.state as { aiPrompt?: string };
    if (state?.aiPrompt) {
      setActiveTab('chat');
      handleSendMessage(state.aiPrompt);
      // Clear the state to prevent re-triggering
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleSendMessage = (message: string) => {
    setChatMessages([...chatMessages, { type: 'user', message }]);
    setIsThinking(true);
    
    // Generate context-aware AI responses based on the message
    setTimeout(() => {
      let aiResponse = "That's a great question! Based on your recent data, I'd recommend...";
      
      // Check for specific prompts and provide tailored responses
      if (message.toLowerCase().includes('analyze my health data') || message.toLowerCase().includes('analyze my day')) {
        aiResponse = "📊 Based on today's analysis:\n\n✅ Cycle Day: 26 (Luteal Phase)\n✅ Mood: Stable\n⚠️ Energy: Below average (60%)\n✅ Sleep: 7.5 hours (Good)\n\n💡 Recommendations:\n• Your energy dip is normal for this cycle phase\n• Consider light exercise like yoga\n• Increase iron-rich foods (spinach, lentils)\n• Stay hydrated - aim for 8 glasses today";
      } else if (message.toLowerCase().includes('nutrition plan') || message.toLowerCase().includes('diet')) {
        aiResponse = "🍎 Personalized Nutrition Plan for Your Luteal Phase:\n\n**Breakfast:**\n• Oatmeal with berries and flaxseeds\n• Green tea\n\n**Lunch:**\n• Grilled chicken with quinoa and roasted vegetables\n• Side salad with olive oil dressing\n\n**Snacks:**\n• Handful of almonds\n• Dark chocolate (70%+ cocoa)\n\n**Dinner:**\n• Salmon with sweet potato and steamed broccoli\n\n💡 Focus: High in magnesium, B6, and omega-3s to support hormonal balance during this phase.";
      } else if (message.toLowerCase().includes('hormonal balance') || message.toLowerCase().includes('hormone')) {
        aiResponse = "🔬 Hormonal Balance Analysis:\n\n**Current Status:**\n• Progesterone: Elevated (Normal for luteal phase)\n• Estrogen: Declining (Expected)\n• Cortisol: Slightly elevated\n\n**Symptoms Correlation:**\n• Mild fatigue → Related to progesterone increase\n• Slight mood changes → Within normal range\n• Energy fluctuation → Typical for cycle day 26\n\n✅ Overall Assessment: Your hormonal patterns are healthy!\n\n💡 Suggestions:\n• Practice stress reduction (meditation, deep breathing)\n• Maintain regular sleep schedule\n• Reduce caffeine intake";
      } else if (message.toLowerCase().includes('energy low') || message.toLowerCase().includes('tired') || message.toLowerCase().includes('fatigue')) {
        aiResponse = "⚡ Energy Analysis:\n\n**Why your energy is low today:**\n\n1. **Cycle Phase Impact (40%)**: Day 26 of luteal phase - progesterone peaks naturally lower energy\n\n2. **Sleep Quality (25%)**: Last night's deep sleep was only 1.2 hours (below your 1.8hr average)\n\n3. **Nutrition Gap (20%)**: Low iron intake yesterday (only 60% of RDA)\n\n4. **Activity Level (15%)**: Below-average movement past 2 days\n\n**Quick Fixes:**\n✅ Take a 20-min power nap\n✅ Have iron-rich snack (spinach smoothie)\n✅ 10-min walk outside for natural light\n✅ Stay hydrated (you're at 40% of daily goal)\n\n💪 Energy should improve after day 3 of your next cycle!";
      }
      
      setChatMessages(prev => [...prev, {
        type: 'ai',
        message: aiResponse
      }]);
      setIsThinking(false);
    }, 2000);
  };
  
  const handleSmartInsight = () => {
    toast({
      title: "Generating insights...",
      description: "पंखAI is analyzing your daily health data",
    });
  };
  
  const handleAIAction = (prompt: string) => {
    handleSendMessage(prompt);
  };

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
      <PageHeader 
        title="AI Insights" 
        icon={
          <Button variant="wellness" size="sm" onClick={handleSmartInsight}>
            <Sparkles className="w-4 h-4 mr-2" />
            Run Smart Insight
          </Button>
        }
      />

      <div className="flex gap-6 mx-6">
        <Navigation />
        
        <main className="flex-1 space-y-8">
          <QuickAIActions onActionClick={handleAIAction} />
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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
              <AIChat 
                messages={chatMessages} 
                onSendMessage={handleSendMessage}
                isThinking={isThinking}
              />
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
        <Button className="w-full" variant="outline" onClick={() => setActiveTab('chat')}>
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