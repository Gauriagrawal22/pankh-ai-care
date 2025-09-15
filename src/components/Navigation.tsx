import React, { useState } from 'react';
import { Home, Calendar, Activity, FileText, Settings, TrendingUp, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Navigation = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'cycle', label: 'Cycle Tracking', icon: Calendar },
    { id: 'symptoms', label: 'Symptoms', icon: Activity },
    { id: 'insights', label: 'AI Insights', icon: TrendingUp },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'wellness', label: 'Wellness', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings },
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
                onClick={() => setActiveItem(item.id)}
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
          <p className="text-sm text-muted-foreground mb-3">Language</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-xs rounded-lg bg-primary text-primary-foreground">
              English
            </button>
            <button className="px-3 py-1 text-xs rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              हिंदी
            </button>
          </div>
        </div>
      </Card>
    </aside>
  );
};

export default Navigation;