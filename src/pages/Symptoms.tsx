import React, { useState } from 'react';
import { Activity, Plus, TrendingUp, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import MobileLayout from '@/components/MobileLayout';
import BackButton from '@/components/BackButton';

const Symptoms = () => {
  const navigate = useNavigate();
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const symptomCategories = {
    physical: [
      { id: 'cramps', name: 'Cramps', intensity: 'moderate' },
      { id: 'bloating', name: 'Bloating', intensity: 'mild' },
      { id: 'headache', name: 'Headache', intensity: 'severe' },
      { id: 'fatigue', name: 'Fatigue', intensity: 'moderate' }
    ],
    emotional: [
      { id: 'mood-swings', name: 'Mood Swings', intensity: 'mild' },
      { id: 'anxiety', name: 'Anxiety', intensity: 'moderate' },
      { id: 'irritability', name: 'Irritability', intensity: 'mild' }
    ],
    skin: [
      { id: 'acne', name: 'Acne Breakout', intensity: 'mild' },
      { id: 'oily-skin', name: 'Oily Skin', intensity: 'moderate' }
    ]
  };

  const recentLogs = [
    { date: '2024-01-28', symptoms: ['Cramps', 'Fatigue'], notes: 'Heavy flow day 2' },
    { date: '2024-01-27', symptoms: ['Mood Swings', 'Bloating'], notes: 'Started period' },
    { date: '2024-01-26', symptoms: ['Headache', 'Anxiety'], notes: 'Pre-period symptoms' }
  ];

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case 'mild': return 'bg-pankhai-teal/20 text-pankhai-teal';
      case 'moderate': return 'bg-pankhai-orange/20 text-pankhai-orange';
      case 'severe': return 'bg-pankhai-pink/20 text-pankhai-pink';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const DesktopSymptoms = () => (
    <div className="min-h-screen bg-background">
      <header className="pankhai-card mx-6 mt-6 mb-8">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <BackButton />
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                पंखAI
              </h1>
              <p className="text-sm text-muted-foreground">Symptom Tracking</p>
            </div>
          </div>
          <Button variant="wellness" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Log Symptoms
          </Button>
        </div>
      </header>

      <div className="flex gap-6 mx-6">
        <Navigation />
        
        <main className="flex-1 space-y-8">
          {/* Quick Add Symptoms */}
          <Card className="pankhai-card">
            <CardHeader>
              <CardTitle>Today's Symptoms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(symptomCategories).map(([category, symptoms]) => (
                <div key={category}>
                  <h3 className="font-semibold capitalize mb-3 text-pankhai-purple">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {symptoms.map((symptom) => (
                      <button
                        key={symptom.id}
                        onClick={() => {
                          setSelectedSymptoms(prev => 
                            prev.includes(symptom.id) 
                              ? prev.filter(s => s !== symptom.id)
                              : [...prev, symptom.id]
                          );
                        }}
                        className={`px-3 py-2 rounded-lg border transition-all duration-200 ${
                          selectedSymptoms.includes(symptom.id)
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'bg-background border-border hover:border-primary/50'
                        }`}
                      >
                        <span className="font-medium">{symptom.name}</span>
                        <Badge className={`ml-2 ${getIntensityColor(symptom.intensity)}`} variant="outline">
                          {symptom.intensity}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Symptom Logs */}
          <Card className="pankhai-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Logs</CardTitle>
              <Button variant="ghost" size="sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                View Trends
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentLogs.map((log, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl">
                    <div className="text-sm font-medium min-w-24">{log.date}</div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {log.symptoms.map((symptom) => (
                          <Badge key={symptom} variant="secondary">{symptom}</Badge>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">{log.notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card className="pankhai-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-pankhai-orange" />
                AI Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-pankhai-orange/10 rounded-xl">
                <h4 className="font-semibold text-pankhai-orange mb-2">Pattern Alert</h4>
                <p className="text-sm">You've logged headaches 3 days in a row. This could be related to hormonal changes. Consider tracking sleep and stress levels.</p>
              </div>
              
              <div className="p-4 bg-pankhai-teal/10 rounded-xl">
                <h4 className="font-semibold text-pankhai-teal mb-2">Recommendation</h4>
                <p className="text-sm">Your fatigue symptoms are typically highest during luteal phase. Try incorporating more iron-rich foods in your diet.</p>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );

  const MobileSymptoms = () => (
    <div className="p-4 space-y-6">
      <div className="mb-4">
        <BackButton />
      </div>
      <Card className="pankhai-card p-4">
        <h3 className="font-semibold mb-4">Quick Log</h3>
        <div className="grid grid-cols-2 gap-2">
          {Object.values(symptomCategories).flat().slice(0, 6).map((symptom) => (
            <button
              key={symptom.id}
              onClick={() => {
                setSelectedSymptoms(prev => 
                  prev.includes(symptom.id) 
                    ? prev.filter(s => s !== symptom.id)
                    : [...prev, symptom.id]
                );
              }}
              className={`p-3 rounded-lg text-sm font-medium transition-all ${
                selectedSymptoms.includes(symptom.id)
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-primary/10'
              }`}
            >
              {symptom.name}
            </button>
          ))}
        </div>
      </Card>
      
      <Card className="pankhai-card p-4">
        <h3 className="font-semibold mb-4">Today's Insights</h3>
        <div className="space-y-3">
          <div className="p-3 bg-pankhai-orange/10 rounded-lg">
            <p className="text-sm font-medium text-pankhai-orange">Pattern noticed: Fatigue increases during luteal phase</p>
          </div>
          <div className="p-3 bg-pankhai-teal/10 rounded-lg">
            <p className="text-sm font-medium text-pankhai-teal">Tip: Stay hydrated to reduce bloating</p>
          </div>
        </div>
      </Card>
      
      <Button className="w-full pankhai-button-primary">
        <Plus className="w-4 h-4 mr-2" />
        Save Today's Symptoms
      </Button>
    </div>
  );

  return (
    <>
      <div className="hidden md:block">
        <DesktopSymptoms />
      </div>
      
      <div className="md:hidden">
        <MobileLayout>
          <MobileSymptoms />
        </MobileLayout>
      </div>
    </>
  );
};

export default Symptoms;