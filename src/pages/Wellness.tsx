import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Activity, Brain, Moon, Droplets, Target } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Wellness = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="flex">
        <Navigation />
        
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">💖 Wellness Hub</h1>
              <p className="text-muted-foreground">
                Your complete wellness dashboard for mind, body, and spirit
              </p>
            </div>

            {/* Wellness Score */}
            <Card className="pankhai-card mb-8">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                    <div className="text-white">
                      <div className="text-3xl font-bold">85</div>
                      <div className="text-sm">Wellness Score</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Great Progress! 🌟</h3>
                  <p className="text-muted-foreground">You're doing amazing. Keep up the healthy habits!</p>
                </div>
              </CardContent>
            </Card>

            {/* Wellness Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Physical Health */}
              <Card className="pankhai-card hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-foreground">Physical Health</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Exercise</span>
                      <span className="text-sm font-medium text-green-600">90%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Sleep Quality</span>
                      <span className="text-sm font-medium text-yellow-600">75%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Nutrition</span>
                      <span className="text-sm font-medium text-green-600">88%</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    View Details
                  </Button>
                </CardContent>
              </Card>

              {/* Mental Health */}
              <Card className="pankhai-card hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-secondary flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-foreground">Mental Health</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Stress Level</span>
                      <span className="text-sm font-medium text-green-600">Low</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Meditation</span>
                      <span className="text-sm font-medium text-blue-600">5 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Mood</span>
                      <span className="text-sm font-medium text-green-600">Good</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    View Details
                  </Button>
                </CardContent>
              </Card>

              {/* Hormonal Balance */}
              <Card className="pankhai-card hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-accent flex items-center justify-center">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-foreground">Hormonal Balance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Cycle Regularity</span>
                      <span className="text-sm font-medium text-green-600">Regular</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Symptom Severity</span>
                      <span className="text-sm font-medium text-yellow-600">Mild</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Energy Level</span>
                      <span className="text-sm font-medium text-green-600">High</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Wellness Goals */}
            <Card className="pankhai-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Wellness Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {[
                      { goal: "Drink 8 glasses of water daily", progress: 75, icon: Droplets },
                      { goal: "Sleep 7-8 hours every night", progress: 60, icon: Moon },
                      { goal: "Exercise 4 times per week", progress: 90, icon: Activity },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 rounded-lg border border-border">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground mb-1">{item.goal}</div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all duration-300" 
                              style={{ width: `${item.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-primary">{item.progress}%</div>
                      </div>
                    ))}
                  </div>
                  
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button className="w-full" variant="outline">
                        📝 Set New Goal
                      </Button>
                      <Button className="w-full" variant="outline">
                        📊 View Progress Report
                      </Button>
                      <Button className="w-full" variant="outline">
                        🎯 Update Goals
                      </Button>
                      <Button className="w-full pankhai-button">
                        💡 Get Wellness Tips
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Wellness;