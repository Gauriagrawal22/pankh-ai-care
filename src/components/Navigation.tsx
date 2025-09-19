import React, { useState } from 'react';
import { Home, Calendar, Activity, FileText, Settings, TrendingUp, Heart, Apple, Smile, Watch, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [language, setLanguage] = useState('english');
  const navigate = useNavigate();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/dashboard' },
    { id: 'cycle', label: 'Cycle Tracking', icon: Calendar, path: '/cycle-tracking' },
    { id: 'symptoms', label: 'Symptoms', icon: Activity, path: '/symptoms' },
    { id: 'insights', label: 'AI Insights', icon: TrendingUp, path: '/ai-insights' },
    { id: 'diet', label: 'Diet & Nutrition', icon: Apple, path: '/diet' },
    { id: 'mood', label: 'Mood & Energy', icon: Smile, path: '/mood-energy' },
    { id: 'wearables', label: 'Wearables', icon: Watch, path: '/wearables' },
    { id: 'games', label: 'Games', icon: TrendingUp, path: '/games' },
    { id: 'reports', label: 'Reports', icon: FileText, path: '/reports' },
    { id: 'wellness', label: 'Wellness', icon: Heart, path: '/wellness' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <aside className="w-64">
      <Card className="pankhai-card p-6">
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItem(item.id);
                  if (item.path) navigate(item.path);
                }}
                className={`pankhai-nav-item w-full text-left ${
                  isActive ? 'active' : ''
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
        
        {/* Language Switcher */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Language
          </p>
          <div className="flex gap-2">
            <button 
              onClick={() => setLanguage('english')}
              className={`px-3 py-1 text-xs rounded-lg transition-colors ${
                language === 'english' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              English
            </button>
            <button 
              onClick={() => setLanguage('hindi')}
              className={`px-3 py-1 text-xs rounded-lg transition-colors ${
                language === 'hindi' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              हिंदी
            </button>
          </div>
        </div>
      </Card>
    </aside>
  );
};

export default Navigation;