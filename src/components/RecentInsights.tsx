import React from 'react';
import { Brain, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const RecentInsights = () => {
  const navigate = useNavigate();
  
  const insights = [
    {
      id: 1,
      type: 'recommendation',
      title: 'Optimize Your Sleep Schedule',
      description: 'Your sleep quality has improved 15% this week! Consider maintaining your current bedtime routine.',
      priority: 'high',
      icon: CheckCircle,
      timestamp: '2 hours ago',
      category: 'Sleep'
    },
    {
      id: 2,
      type: 'alert',
      title: 'PCOS Pattern Detected',
      description: 'Your symptoms suggest elevated stress levels. Try meditation and consider consulting your doctor.',
      priority: 'medium',
      icon: AlertCircle,
      timestamp: '1 day ago',
      category: 'Health Alert'
    },
    {
      id: 3,
      type: 'insight',
      title: 'Nutrition Impact Analysis',
      description: 'Foods high in omega-3 on Tuesday correlate with better mood scores. Continue this pattern!',
      priority: 'low',
      icon: TrendingUp,
      timestamp: '2 days ago',
      category: 'Nutrition'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-success text-success-foreground';
      case 'medium':
        return 'bg-warning text-warning-foreground';
      case 'low':
        return 'bg-primary text-primary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getCardBorder = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-success/30';
      case 'medium':
        return 'border-warning/30';
      case 'low':
        return 'border-primary/30';
      default:
        return 'border-border';
    }
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Brain className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">AI Insights</h2>
        </div>
        <Badge variant="outline" className="text-xs">
          पंखAI Intelligence
        </Badge>
      </div>
      
      <div className="space-y-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          
          return (
            <Card
              key={insight.id}
              className={`p-6 transition-all duration-300 hover:shadow-soft border ${getCardBorder(insight.priority)} animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg ${getPriorityColor(insight.priority)} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-sm">{insight.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {insight.category}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {insight.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {insight.timestamp}
                    </span>
                    <button 
                      className="text-xs text-primary hover:text-primary/80 font-medium"
                      onClick={() => navigate('/ai-insights')}
                    >
                      Learn more →
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      
      <div className="mt-6 text-center">
        <button 
          className="text-sm text-primary hover:text-primary/80 font-medium"
          onClick={() => navigate('/ai-insights')}
        >
          View all insights
        </button>
      </div>
    </section>
  );
};

export default RecentInsights;