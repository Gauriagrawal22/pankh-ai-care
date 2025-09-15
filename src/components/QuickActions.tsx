import React from 'react';
import { Plus, Camera, Thermometer, Activity, Coffee, Pill } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const QuickActions = () => {
  const actions = [
    {
      id: 'symptoms',
      label: 'Log Symptoms',
      description: 'Track how you feel',
      icon: Plus,
      color: 'bg-gradient-primary',
      textColor: 'text-white'
    },
    {
      id: 'photo',
      label: 'Photo Log',
      description: 'Visual tracking',
      icon: Camera,
      color: 'bg-gradient-secondary',
      textColor: 'text-white'
    },
    {
      id: 'temperature',
      label: 'Temperature',
      description: 'Basal body temp',
      icon: Thermometer,
      color: 'bg-gradient-wellness',
      textColor: 'text-white'
    },
    {
      id: 'exercise',
      label: 'Exercise',
      description: 'Log workout',
      icon: Activity,
      color: 'bg-pankhai-teal',
      textColor: 'text-white'
    },
    {
      id: 'nutrition',
      label: 'Nutrition',
      description: 'Track meals',
      icon: Coffee,
      color: 'bg-pankhai-orange',
      textColor: 'text-white'
    },
    {
      id: 'medication',
      label: 'Medication',
      description: 'Pills & supplements',
      icon: Pill,
      color: 'bg-pankhai-purple',
      textColor: 'text-white'
    }
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Quick Actions</h2>
        <Button variant="ghost" size="sm" className="text-primary">
          View all
        </Button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          
          return (
            <Card
              key={action.id}
              className="p-6 hover:scale-105 transition-all duration-300 cursor-pointer border border-border/50 hover:border-primary/30 hover:shadow-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center shadow-soft`}>
                  <Icon className={`w-6 h-6 ${action.textColor}`} />
                </div>
                
                <div>
                  <h3 className="font-semibold text-sm mb-1">
                    {action.label}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {action.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default QuickActions;