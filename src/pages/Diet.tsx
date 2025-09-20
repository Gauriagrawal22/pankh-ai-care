import React, { useState } from 'react';
import { Apple, Plus, TrendingUp, Clock, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import MobileLayout from '@/components/MobileLayout';

const Diet = () => {
  const [selectedMeals, setSelectedMeals] = useState<string[]>([]);

  const todayMeals = [
    { id: 'breakfast', name: 'Poha with vegetables', calories: 320, time: '8:00 AM', type: 'Indian' },
    { id: 'snack1', name: 'Mixed nuts', calories: 150, time: '11:00 AM', type: 'Healthy' },
    { id: 'lunch', name: 'Dal rice with sabzi', calories: 450, time: '1:30 PM', type: 'Indian' },
    { id: 'snack2', name: 'Fruit bowl', calories: 80, time: '4:00 PM', type: 'Healthy' }
  ];

  const recommendations = [
    {
      title: 'Iron-Rich Foods',
      reason: 'Your fatigue symptoms suggest low iron levels during menstruation',
      foods: ['Spinach', 'Lentils', 'Dark chocolate', 'Pomegranate'],
      priority: 'high'
    },
    {
      title: 'Anti-Inflammatory',
      reason: 'Reduce bloating and cramps with these foods',
      foods: ['Turmeric', 'Ginger', 'Green leafy vegetables', 'Berries'],
      priority: 'medium'
    },
    {
      title: 'Hormone Balance',
      reason: 'Support healthy hormone production',
      foods: ['Flaxseeds', 'Walnuts', 'Broccoli', 'Sweet potato'],
      priority: 'medium'
    }
  ];

  const cycleNutrition = {
    menstrual: {
      phase: 'Menstrual Phase (Days 1-5)',
      focus: 'Iron & Comfort Foods',
      foods: ['Iron-rich: spinach, lentils', 'Warm foods: khichdi, soup', 'Magnesium: dark chocolate, nuts'],
      avoid: ['Excessive caffeine', 'High sodium foods']
    },
    follicular: {
      phase: 'Follicular Phase (Days 6-14)',
      focus: 'Energy & Metabolism',
      foods: ['Protein: eggs, paneer, chicken', 'Complex carbs: oats, quinoa', 'Fresh fruits and vegetables'],
      avoid: ['Refined sugar', 'Processed foods']
    },
    ovulation: {
      phase: 'Ovulation (Days 15-17)',
      focus: 'Antioxidants & Fiber',
      foods: ['Fiber-rich: whole grains, legumes', 'Antioxidants: berries, green tea', 'Healthy fats: avocado, olive oil'],
      avoid: ['Heavy, greasy foods']
    },
    luteal: {
      phase: 'Luteal Phase (Days 18-28)',
      focus: 'Mood Support & Cravings',
      foods: ['Calcium: yogurt, sesame seeds', 'B-vitamins: leafy greens', 'Complex carbs: sweet potato'],
      avoid: ['Excessive sugar', 'High caffeine']
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-pankhai-pink/20 text-pankhai-pink';
      case 'medium': return 'bg-pankhai-orange/20 text-pankhai-orange';
      case 'low': return 'bg-pankhai-teal/20 text-pankhai-teal';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const DesktopDiet = () => (
    <div className="min-h-screen bg-background">
      <header className="pankhai-card mx-6 mt-6 mb-8">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Apple className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                पंखAI
              </h1>
              <p className="text-sm text-muted-foreground">Diet & Nutrition</p>
            </div>
          </div>
          <Button variant="wellness" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Log Meal
          </Button>
        </div>
      </header>

      <div className="flex gap-6 mx-6">
        <Navigation />
        
        <main className="flex-1 space-y-8">
          <Tabs defaultValue="today" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="today">Today's Meals</TabsTrigger>
              <TabsTrigger value="recommendations">AI Recommendations</TabsTrigger>
              <TabsTrigger value="cycle-nutrition">Cycle Nutrition</TabsTrigger>
              <TabsTrigger value="insights">Diet Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="today" className="space-y-6">
              {/* Daily Summary */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="pankhai-metric-card">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-pankhai-orange mb-2">Calories</h3>
                    <p className="text-3xl font-bold">1,200</p>
                    <p className="text-sm text-muted-foreground">of 1,800 target</p>
                  </CardContent>
                </Card>
                
                <Card className="pankhai-metric-card">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-pankhai-teal mb-2">Protein</h3>
                    <p className="text-3xl font-bold">45g</p>
                    <p className="text-sm text-muted-foreground">of 60g target</p>
                  </CardContent>
                </Card>
                
                <Card className="pankhai-metric-card">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-pankhai-purple mb-2">Iron</h3>
                    <p className="text-3xl font-bold">12mg</p>
                    <p className="text-sm text-muted-foreground">of 18mg target</p>
                  </CardContent>
                </Card>
                
                <Card className="pankhai-metric-card">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-pankhai-pink mb-2">Water</h3>
                    <p className="text-3xl font-bold">6</p>
                    <p className="text-sm text-muted-foreground">of 8 glasses</p>
                  </CardContent>
                </Card>
              </div>

              {/* Meal Log */}
              <Card className="pankhai-card">
                <CardHeader>
                  <CardTitle>Today's Meals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {todayMeals.map((meal) => (
                      <div key={meal.id} className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl">
                        <div className="w-12 h-12 bg-gradient-wellness rounded-lg flex items-center justify-center">
                          <Utensils className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{meal.name}</h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {meal.time}
                            </span>
                            <span>{meal.calories} cal</span>
                            <Badge variant="outline">{meal.type}</Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recommendations" className="space-y-6">
              <Card className="pankhai-card">
                <CardHeader>
                  <CardTitle>AI Diet Recommendations</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Based on your cycle day 26 and recent fatigue symptoms
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {recommendations.map((rec, index) => (
                      <div key={index} className="p-4 border border-border rounded-xl">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-semibold text-lg">{rec.title}</h4>
                          <Badge className={getPriorityColor(rec.priority)} variant="outline">
                            {rec.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{rec.reason}</p>
                        <div className="flex flex-wrap gap-2">
                          {rec.foods.map((food) => (
                            <Badge key={food} variant="secondary">{food}</Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cycle-nutrition" className="space-y-6">
              <div className="grid gap-6">
                {Object.entries(cycleNutrition).map(([key, phase]) => (
                  <Card key={key} className={`pankhai-card ${key === 'luteal' ? 'ring-2 ring-primary/30' : ''}`}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {phase.phase}
                        {key === 'luteal' && <Badge>Current Phase</Badge>}
                      </CardTitle>
                      <p className="text-pankhai-purple font-medium">{phase.focus}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h5 className="font-medium text-pankhai-teal mb-2">Recommended Foods:</h5>
                        <ul className="space-y-1">
                          {phase.foods.map((food, index) => (
                            <li key={index} className="text-sm text-muted-foreground">• {food}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-pankhai-orange mb-2">Foods to Limit:</h5>
                        <ul className="space-y-1">
                          {phase.avoid.map((food, index) => (
                            <li key={index} className="text-sm text-muted-foreground">• {food}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="insights" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="pankhai-card">
                  <CardHeader>
                    <CardTitle>Diet Patterns</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-pankhai-teal/10 rounded-xl">
                      <h4 className="font-semibold text-pankhai-teal mb-2">Good Progress</h4>
                      <p className="text-sm">You've increased iron intake by 40% this week. Great for managing fatigue!</p>
                    </div>
                    
                    <div className="p-4 bg-pankhai-orange/10 rounded-xl">
                      <h4 className="font-semibold text-pankhai-orange mb-2">Need Attention</h4>
                      <p className="text-sm">Water intake is below target. Try setting hourly reminders.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="pankhai-card">
                  <CardHeader>
                    <CardTitle>Cycle Correlation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Craving Control</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-muted h-2 rounded-full">
                            <div className="w-3/4 bg-pankhai-teal h-2 rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium">Good</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Energy Levels</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-muted h-2 rounded-full">
                            <div className="w-1/2 bg-pankhai-orange h-2 rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium">Improving</span>
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

  const MobileDiet = () => (
    <div className="p-4 space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <Card className="pankhai-card p-4">
          <h3 className="text-sm font-medium text-pankhai-orange mb-1">Calories</h3>
          <p className="text-2xl font-bold">1,200</p>
          <p className="text-xs text-muted-foreground">of 1,800</p>
        </Card>
        <Card className="pankhai-card p-4">
          <h3 className="text-sm font-medium text-pankhai-teal mb-1">Iron</h3>
          <p className="text-2xl font-bold">12mg</p>
          <p className="text-xs text-muted-foreground">of 18mg</p>
        </Card>
      </div>
      
      <Card className="pankhai-card p-4">
        <h3 className="font-semibold mb-4">AI Recommendations</h3>
        <div className="space-y-3">
          <div className="p-3 bg-pankhai-pink/10 rounded-lg">
            <h4 className="font-medium text-sm text-pankhai-pink mb-1">Iron-Rich Foods</h4>
            <p className="text-xs text-muted-foreground">Try spinach, lentils, and dark chocolate today</p>
          </div>
          <div className="p-3 bg-pankhai-teal/10 rounded-lg">
            <h4 className="font-medium text-sm text-pankhai-teal mb-1">Hydration</h4>
            <p className="text-xs text-muted-foreground">Drink 2 more glasses of water</p>
          </div>
        </div>
      </Card>
      
      <Button className="w-full pankhai-button-primary">
        <Plus className="w-4 h-4 mr-2" />
        Log Today's Meal
      </Button>
    </div>
  );

  return (
    <>
      <div className="hidden md:block">
        <DesktopDiet />
      </div>
      
      <div className="md:hidden">
        <MobileLayout>
          <MobileDiet />
        </MobileLayout>
      </div>
    </>
  );
};

export default Diet;