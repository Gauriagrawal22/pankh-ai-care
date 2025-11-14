import React, { useState } from 'react';
import { Watch, Smartphone, Activity, Heart, Moon, Footprints, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import MobileLayout from '@/components/MobileLayout';
import PageHeader from '@/components/PageHeader';

const Wearables = () => {
  const [connectedDevices, setConnectedDevices] = useState([
    { id: 'fitbit', name: 'Fitbit Charge 5', status: 'connected', lastSync: '2024-01-28 10:30 AM' }
  ]);

  const availableConnections = [
    { id: 'apple-health', name: 'Apple Health', icon: Heart, description: 'Sync health data from your iPhone' },
    { id: 'google-fit', name: 'Google Fit', icon: Activity, description: 'Connect your Android fitness data' },
    { id: 'samsung-health', name: 'Samsung Health', icon: Smartphone, description: 'Integrate Samsung wearables' },
  ];

  const todayData = {
    steps: 7248,
    heartRate: 72,
    sleepHours: 7.2,
    activeMinutes: 45,
    stress: 'Low',
    caloriesBurned: 1850
  };

  const weeklyInsights = [
    {
      metric: 'Sleep Quality',
      trend: 'improving',
      value: '85%',
      change: '+12%',
      insight: 'Your sleep quality improved during follicular phase'
    },
    {
      metric: 'Heart Rate Variability',
      trend: 'stable',
      value: '42ms',
      change: '+3%',
      insight: 'HRV shows good stress management'
    },
    {
      metric: 'Activity Level',
      trend: 'increasing',
      value: '8.2k steps',
      change: '+15%',
      insight: 'Great consistency in daily movement'
    }
  ];

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'improving': return 'text-pankhai-teal';
      case 'increasing': return 'text-pankhai-teal';
      case 'stable': return 'text-pankhai-purple';
      case 'decreasing': return 'text-pankhai-orange';
      default: return 'text-muted-foreground';
    }
  };

  const DesktopWearables = () => (
    <div className="min-h-screen bg-background">
      <PageHeader title="Wearable Devices" />

      <div className="flex gap-6 mx-6">
        <Navigation />
        
        <main className="flex-1 space-y-8">
          {/* Today's Wellness Snapshot */}
          <Card className="pankhai-card">
            <CardHeader>
              <CardTitle>Today's Wellness Snapshot</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <div className="flex flex-col items-center p-4 bg-pankhai-teal/10 rounded-xl">
                  <Footprints className="w-8 h-8 text-pankhai-teal mb-2" />
                  <span className="text-2xl font-bold">{todayData.steps.toLocaleString()}</span>
                  <span className="text-sm text-muted-foreground">Steps</span>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-pankhai-pink/10 rounded-xl">
                  <Heart className="w-8 h-8 text-pankhai-pink mb-2" />
                  <span className="text-2xl font-bold">{todayData.heartRate}</span>
                  <span className="text-sm text-muted-foreground">BPM</span>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-pankhai-purple/10 rounded-xl">
                  <Moon className="w-8 h-8 text-pankhai-purple mb-2" />
                  <span className="text-2xl font-bold">{todayData.sleepHours}h</span>
                  <span className="text-sm text-muted-foreground">Sleep</span>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-pankhai-orange/10 rounded-xl">
                  <Activity className="w-8 h-8 text-pankhai-orange mb-2" />
                  <span className="text-2xl font-bold">{todayData.activeMinutes}</span>
                  <span className="text-sm text-muted-foreground">Active Min</span>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-pankhai-teal/10 rounded-xl">
                  <Zap className="w-8 h-8 text-pankhai-teal mb-2" />
                  <span className="text-2xl font-bold">{todayData.stress}</span>
                  <span className="text-sm text-muted-foreground">Stress</span>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-pankhai-orange/10 rounded-xl">
                  <Activity className="w-8 h-8 text-pankhai-orange mb-2" />
                  <span className="text-2xl font-bold">{todayData.caloriesBurned}</span>
                  <span className="text-sm text-muted-foreground">Calories</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Connected Devices */}
          <Card className="pankhai-card">
            <CardHeader>
              <CardTitle>Connected Devices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {connectedDevices.map((device) => (
                  <div key={device.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-wellness rounded-lg flex items-center justify-center">
                        <Watch className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{device.name}</h4>
                        <p className="text-sm text-muted-foreground">Last sync: {device.lastSync}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-pankhai-teal/20 text-pankhai-teal">Connected</Badge>
                      <Button variant="outline" size="sm">Sync Now</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Available Connections */}
          <Card className="pankhai-card">
            <CardHeader>
              <CardTitle>Connect New Device</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableConnections.map((connection) => {
                  const Icon = connection.icon;
                  return (
                    <div key={connection.id} className="p-4 border border-border rounded-xl hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-semibold">{connection.name}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{connection.description}</p>
                      <Button className="w-full pankhai-button-primary">
                        Connect Now
                      </Button>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Weekly Insights */}
          <Card className="pankhai-card">
            <CardHeader>
              <CardTitle>Weekly Health Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyInsights.map((insight, index) => (
                  <div key={index} className="p-4 border border-border rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{insight.metric}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold">{insight.value}</span>
                        <Badge className={`${getTrendColor(insight.trend)} bg-transparent border`} variant="outline">
                          {insight.change}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{insight.insight}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );

  const MobileWearables = () => (
    <div className="p-4 space-y-6">
      <Card className="pankhai-card p-4">
        <h3 className="font-semibold mb-4">Today's Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-pankhai-teal/10 rounded-lg">
            <Footprints className="w-6 h-6 text-pankhai-teal mx-auto mb-1" />
            <p className="text-lg font-bold">{todayData.steps.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Steps</p>
          </div>
          
          <div className="text-center p-3 bg-pankhai-purple/10 rounded-lg">
            <Moon className="w-6 h-6 text-pankhai-purple mx-auto mb-1" />
            <p className="text-lg font-bold">{todayData.sleepHours}h</p>
            <p className="text-xs text-muted-foreground">Sleep</p>
          </div>
          
          <div className="text-center p-3 bg-pankhai-pink/10 rounded-lg">
            <Heart className="w-6 h-6 text-pankhai-pink mx-auto mb-1" />
            <p className="text-lg font-bold">{todayData.heartRate}</p>
            <p className="text-xs text-muted-foreground">BPM</p>
          </div>
          
          <div className="text-center p-3 bg-pankhai-orange/10 rounded-lg">
            <Activity className="w-6 h-6 text-pankhai-orange mx-auto mb-1" />
            <p className="text-lg font-bold">{todayData.activeMinutes}</p>
            <p className="text-xs text-muted-foreground">Active</p>
          </div>
        </div>
      </Card>
      
      <Card className="pankhai-card p-4">
        <h3 className="font-semibold mb-4">Connect Device</h3>
        <div className="space-y-3">
          {availableConnections.map((connection) => {
            const Icon = connection.icon;
            return (
              <button
                key={connection.id}
                className="w-full p-3 border border-border rounded-lg hover:border-primary/50 transition-colors flex items-center gap-3"
              >
                <Icon className="w-5 h-5 text-primary" />
                <div className="text-left flex-1">
                  <p className="font-medium text-sm">{connection.name}</p>
                  <p className="text-xs text-muted-foreground">{connection.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </Card>
      
      <Card className="pankhai-card p-4">
        <h3 className="font-semibold mb-3">This Week</h3>
        <div className="space-y-3">
          {weeklyInsights.slice(0, 2).map((insight, index) => (
            <div key={index} className="p-3 bg-muted/30 rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">{insight.metric}</span>
                <span className={`text-sm font-bold ${getTrendColor(insight.trend)}`}>
                  {insight.change}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">{insight.insight}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  return (
    <>
      <div className="hidden md:block">
        <DesktopWearables />
      </div>
      
      <div className="md:hidden">
        <MobileLayout>
          <MobileWearables />
        </MobileLayout>
      </div>
    </>
  );
};

export default Wearables;