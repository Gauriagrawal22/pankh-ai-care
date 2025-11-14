import React from 'react';
import { Brain, Apple, Activity, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useNavigate, useLocation } from 'react-router-dom';

interface QuickAIActionsProps {
  onActionClick?: (prompt: string) => void;
}

const QuickAIActions = ({ onActionClick }: QuickAIActionsProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const actions = [
    {
      id: 'analyze-day',
      label: 'Analyze My Day',
      icon: Brain,
      prompt: 'Analyze my health data for today and provide insights',
      gradient: 'from-pankhai-pink to-pankhai-orange'
    },
    {
      id: 'nutrition-plan',
      label: 'Show Nutrition Plan',
      icon: Apple,
      prompt: 'Create a personalized nutrition plan based on my cycle phase',
      gradient: 'from-pankhai-teal to-pankhai-purple'
    },
    {
      id: 'hormonal-balance',
      label: 'Check Hormonal Balance',
      icon: Activity,
      prompt: 'Analyze my hormonal balance based on symptoms and cycle data',
      gradient: 'from-pankhai-purple to-pankhai-pink'
    },
    {
      id: 'energy-analysis',
      label: 'Why is my energy low today?',
      icon: Zap,
      prompt: 'Explain why my energy levels are low and suggest improvements',
      gradient: 'from-pankhai-orange to-pankhai-teal'
    }
  ];

  const handleAction = (action: typeof actions[0]) => {
    toast({
      title: "पंखAI is analyzing...",
      description: action.label,
    });
    
    // If onActionClick is provided (we're already on AI Insights), use it
    if (onActionClick) {
      onActionClick(action.prompt);
    } 
    // Otherwise, navigate to AI Insights page with the prompt
    else if (location.pathname !== '/ai-insights') {
      navigate('/ai-insights', { state: { aiPrompt: action.prompt } });
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-muted-foreground mb-3">Quick AI Actions</h3>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Button
              key={action.id}
              variant="outline"
              size="sm"
              onClick={() => handleAction(action)}
              className={`flex-shrink-0 bg-gradient-to-r ${action.gradient} text-white border-none hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-glow`}
            >
              <Icon className="w-4 h-4 mr-2" />
              <span className="whitespace-nowrap">{action.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickAIActions;
