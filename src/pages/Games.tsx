import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, RotateCcw } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { SpinWheel } from '@/components/SpinWheel';
import { BreathingGame } from '@/components/BreathingGame';

const Games = () => {
  const [showSpinWheel, setShowSpinWheel] = useState(false);
  const [showBreathingGame, setShowBreathingGame] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="pankhai-card mx-6 mt-6 mb-8">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Play className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                पंखAI
              </h1>
              <p className="text-sm text-muted-foreground">Your wellness companion</p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <Navigation />
        
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">🎮 Games & Challenges</h1>
              <p className="text-muted-foreground">
                Make your health journey fun with interactive games and daily challenges
              </p>
            </div>

            {showSpinWheel ? (
              <div className="mb-6">
                <Button 
                  onClick={() => setShowSpinWheel(false)}
                  variant="outline"
                  className="mb-4"
                >
                  ← Back to Games
                </Button>
                <SpinWheel />
              </div>
            ) : showBreathingGame ? (
              <div className="mb-6">
                <Button 
                  onClick={() => setShowBreathingGame(false)}
                  variant="outline"
                  className="mb-4"
                >
                  ← Back to Games
                </Button>
                <BreathingGame />
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {/* Daily Spin Wheel Card */}
                <Card className="pankhai-card group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                      <RotateCcw className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground">Daily Spin Wheel</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground">
                      Complete daily challenges to earn rewards & streaks
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Today's streak: 🔥 3 days</div>
                      <div className="text-sm text-muted-foreground">Rewards earned: 🏆 12 points</div>
                    </div>
                    <Button 
                      onClick={() => setShowSpinWheel(true)}
                      className="pankhai-button w-full"
                      size="lg"
                    >
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Spin Now
                    </Button>
                  </CardContent>
                </Card>

                {/* Relax & Focus Game Card */}
                <Card className="pankhai-card group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-secondary flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground">Relax & Focus Game</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground">
                      Follow the rhythm to reduce stress & gain points
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Best score: ⭐ 850 points</div>
                      <div className="text-sm text-muted-foreground">Sessions completed: 🧘‍♀️ 15</div>
                    </div>
                    <Button 
                      onClick={() => setShowBreathingGame(true)}
                      variant="secondary" 
                      size="lg"
                      className="w-full"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Start Breathing
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Challenge Progress */}
            {!showSpinWheel && !showBreathingGame && (
              <div className="mt-8">
                <Card className="pankhai-card">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">Current Challenge Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                            💧
                          </div>
                          <div>
                            <div className="font-medium text-foreground">Drink 2L Water</div>
                            <div className="text-sm text-muted-foreground">Progress: 1.2L / 2L</div>
                          </div>
                        </div>
                        <div className="text-primary font-semibold">60%</div>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                            🚶‍♀️
                          </div>
                          <div>
                            <div className="font-medium text-foreground">Walk 5K Steps</div>
                            <div className="text-sm text-muted-foreground">Progress: 3,200 / 5,000</div>
                          </div>
                        </div>
                        <div className="text-primary font-semibold">64%</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Games;