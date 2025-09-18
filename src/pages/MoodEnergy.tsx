import React, { useState } from 'react';
import { Heart, Smile, Frown, Meh, Battery, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import Navigation from '@/components/Navigation';
import MobileLayout from '@/components/MobileLayout';

const MoodEnergy = () => {
  const [moodLevel, setMoodLevel] = useState([5]);
  const [energyLevel, setEnergyLevel] = useState([6]);
  const [selectedMoods, setSelectedMoods] = useState<string[]>([]);

  const moodOptions = [
    { id: 'happy', name: 'Happy', icon: Smile, color: 'text-pankhai-teal' },
    { id: 'calm', name: 'Calm', icon: Heart, color: 'text-pankhai-purple' },
    { id: 'anxious', name: 'Anxious', icon: Frown, color: 'text-pankhai-orange' },
    { id: 'irritated', name: 'Irritated', icon: Frown, color: 'text-pankhai-pink' },
    { id: 'sad', name: 'Sad', icon: Frown, color: 'text-muted-foreground' },
    { id: 'neutral', name: 'Neutral', icon: Meh, color: 'text-muted-foreground' }
  ];

  const recentMoodData = [
    { date: '2024-01-28', mood: 4, energy: 3, notes: 'Period started, low energy' },
    { date: '2024-01-27', mood: 6, energy: 5, notes: 'Feeling better today' },
    { date: '2024-01-26', mood: 3, energy: 4, notes: 'PMS symptoms, moody' },
    { date: '2024-01-25', mood: 7, energy: 7, notes: 'Great day overall' }
  ];

  const getMoodIcon = (level: number) => {
    if (level <= 3) return <Frown className="w-5 h-5 text-pankhai-pink" />;
    if (level <= 6) return <Meh className="w-5 h-5 text-pankhai-orange" />;
    return <Smile className="w-5 h-5 text-pankhai-teal" />;
  };

  const getEnergyIcon = (level: number) => {
    if (level <= 3) return <Battery className="w-5 h-5 text-pankhai-pink" />;
    if (level <= 6) return <Sun className="w-5 h-5 text-pankhai-orange" />;
    return <Sun className="w-5 h-5 text-pankhai-teal" />;
  };

  const DesktopMoodEnergy = () => (
    <div className="min-h-screen bg-background">
      <header className="pankhai-card mx-6 mt-6 mb-8">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Mood & Energy
              </h1>
              <p className="text-sm text-muted-foreground">Track your emotional and energy patterns</p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex gap-6 mx-6">
        <Navigation />
        
        <main className="flex-1 space-y-8">
          {/* Today's Tracking */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="pankhai-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pankhai-pink" />
                  How are you feeling today?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Mood Level</span>
                    <div className="flex items-center gap-2">
                      {getMoodIcon(moodLevel[0])}
                      <span className="font-semibold">{moodLevel[0]}/10</span>
                    </div>
                  </div>
                  <Slider
                    value={moodLevel}
                    onValueChange={setMoodLevel}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Very Low</span>
                    <span>Great</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Energy Level</span>
                    <div className="flex items-center gap-2">
                      {getEnergyIcon(energyLevel[0])}
                      <span className="font-semibold">{energyLevel[0]}/10</span>
                    </div>
                  </div>
                  <Slider
                    value={energyLevel}
                    onValueChange={setEnergyLevel}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Exhausted</span>
                    <span>Energetic</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="pankhai-card">
              <CardHeader>
                <CardTitle>Mood Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {moodOptions.map((mood) => {
                    const Icon = mood.icon;
                    const isSelected = selectedMoods.includes(mood.id);
                    
                    return (
                      <button
                        key={mood.id}
                        onClick={() => {
                          setSelectedMoods(prev => 
                            prev.includes(mood.id)
                              ? prev.filter(m => m !== mood.id)
                              : [...prev, mood.id]
                          );
                        }}
                        className={`
                          p-3 rounded-xl border transition-all duration-200 flex flex-col items-center gap-2
                          ${isSelected 
                            ? 'bg-primary text-primary-foreground border-primary' 
                            : 'bg-background border-border hover:border-primary/50'
                          }
                        `}
                      >
                        <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : mood.color}`} />
                        <span className="text-sm font-medium">{mood.name}</span>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Tracking */}
          <Card className="pankhai-card">
            <CardHeader>
              <CardTitle>Recent Mood & Energy History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMoodData.map((day, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl">
                    <div className="text-sm font-medium min-w-24">{day.date}</div>
                    
                    <div className="flex items-center gap-2">
                      {getMoodIcon(day.mood)}
                      <span className="text-sm">Mood: {day.mood}/10</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {getEnergyIcon(day.energy)}
                      <span className="text-sm">Energy: {day.energy}/10</span>
                    </div>
                    
                    <div className="flex-1 text-sm text-muted-foreground">
                      {day.notes}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Insights */}
          <Card className="pankhai-card">
            <CardHeader>
              <CardTitle>Mood & Energy Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-pankhai-purple/10 rounded-xl">
                <h4 className="font-semibold text-pankhai-purple mb-2">Pattern Detected</h4>
                <p className="text-sm">Your mood typically drops 3-5 days before your period. This is normal due to hormonal changes.</p>
              </div>
              
              <div className="p-4 bg-pankhai-teal/10 rounded-xl">
                <h4 className="font-semibold text-pankhai-teal mb-2">Energy Correlation</h4>
                <p className="text-sm">Your energy levels are 30% higher during follicular phase. Plan important activities during this time.</p>
              </div>
              
              <div className="p-4 bg-pankhai-orange/10 rounded-xl">
                <h4 className="font-semibold text-pankhai-orange mb-2">Recommendation</h4>
                <p className="text-sm">Try gentle yoga or meditation during low-energy days. Your mood improves by 40% with regular exercise.</p>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-center">
            <Button size="lg" className="pankhai-button-primary">
              Save Today's Mood & Energy
            </Button>
          </div>
        </main>
      </div>
    </div>
  );

  const MobileMoodEnergy = () => (
    <div className="p-4 space-y-6">
      <Card className="pankhai-card p-4">
        <h3 className="font-semibold mb-4">Today's Check-in</h3>
        
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Mood</span>
              <div className="flex items-center gap-1">
                {getMoodIcon(moodLevel[0])}
                <span className="text-sm font-semibold">{moodLevel[0]}/10</span>
              </div>
            </div>
            <Slider
              value={moodLevel}
              onValueChange={setMoodLevel}
              max={10}
              min={1}
              step={1}
              className="w-full"
            />
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Energy</span>
              <div className="flex items-center gap-1">
                {getEnergyIcon(energyLevel[0])}
                <span className="text-sm font-semibold">{energyLevel[0]}/10</span>
              </div>
            </div>
            <Slider
              value={energyLevel}
              onValueChange={setEnergyLevel}
              max={10}
              min={1}
              step={1}
              className="w-full"
            />
          </div>
        </div>
      </Card>
      
      <Card className="pankhai-card p-4">
        <h3 className="font-semibold mb-4">Quick Mood Tags</h3>
        <div className="grid grid-cols-3 gap-2">
          {moodOptions.slice(0, 6).map((mood) => {
            const Icon = mood.icon;
            const isSelected = selectedMoods.includes(mood.id);
            
            return (
              <button
                key={mood.id}
                onClick={() => {
                  setSelectedMoods(prev => 
                    prev.includes(mood.id)
                      ? prev.filter(m => m !== mood.id)
                      : [...prev, mood.id]
                  );
                }}
                className={`
                  p-2 rounded-lg text-xs font-medium transition-all
                  ${isSelected 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted hover:bg-primary/10'
                  }
                `}
              >
                {mood.name}
              </button>
            );
          })}
        </div>
      </Card>
      
      <Card className="pankhai-card p-4">
        <h3 className="font-semibold mb-3">Today's Insight</h3>
        <div className="p-3 bg-pankhai-purple/10 rounded-lg">
          <p className="text-sm text-pankhai-purple">Your mood patterns show improvement during follicular phase. Great progress!</p>
        </div>
      </Card>
      
      <Button className="w-full pankhai-button-primary">
        Save Today's Check-in
      </Button>
    </div>
  );

  return (
    <>
      <div className="hidden md:block">
        <DesktopMoodEnergy />
      </div>
      
      <div className="md:hidden">
        <MobileLayout>
          <MobileMoodEnergy />
        </MobileLayout>
      </div>
    </>
  );
};

export default MoodEnergy;