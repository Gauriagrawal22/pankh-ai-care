import React from 'react';
import { TrendingUp, TrendingDown, Minus, Calendar, Droplets, Moon, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HealthMetrics = () => {
  const navigate = useNavigate();
  
  const handleMetricClick = (metricId: string) => {
    switch (metricId) {
      case 'cycle':
        navigate('/cycle-tracking');
        break;
      case 'flow':
        navigate('/cycle-tracking');
        break;
      case 'sleep':
        navigate('/wellness');
        break;
      case 'energy':
        navigate('/mood-energy');
        break;
      default:
        navigate('/dashboard');
    }
  };
  
  const metrics = [
    {
      id: 'cycle',
      label: 'Cycle Day',
      value: '12',
      unit: 'of 28',
      trend: 'neutral',
      color: 'pankhai-pink',
      icon: Calendar,
      bg: 'bg-gradient-to-r from-pankhai-pink-light to-pankhai-pink'
    },
    {
      id: 'flow',
      label: 'Flow Intensity',
      value: 'Light',
      unit: 'today',
      trend: 'down',
      color: 'pankhai-teal',
      icon: Droplets,
      bg: 'bg-gradient-to-r from-pankhai-teal-light to-pankhai-teal'
    },
    {
      id: 'sleep',
      label: 'Sleep Quality',
      value: '8.2',
      unit: 'hrs',
      trend: 'up',
      color: 'pankhai-purple',
      icon: Moon,
      bg: 'bg-gradient-to-r from-pankhai-purple-light to-pankhai-purple'
    },
    {
      id: 'energy',
      label: 'Energy Level',
      value: 'High',
      unit: 'today',
      trend: 'up',
      color: 'pankhai-orange',
      icon: Zap,
      bg: 'bg-gradient-to-r from-pankhai-orange-light to-pankhai-orange'
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-success" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-warning" />;
      default:
        return <Minus className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Today's Health Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          
          return (
            <div
              key={metric.id}
              onClick={() => handleMetricClick(metric.id)}
              className={`pankhai-metric-card animate-fade-in-up cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300`}
              data-delay={index * 100}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${metric.bg} flex items-center justify-center shadow-soft`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                {getTrendIcon(metric.trend)}
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground font-medium">
                  {metric.label}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-foreground">
                    {metric.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {metric.unit}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HealthMetrics;