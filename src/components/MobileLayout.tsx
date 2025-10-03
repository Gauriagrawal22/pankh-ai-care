import React, { useState } from 'react';
import { Home, Calendar, Activity, TrendingUp, User, Plus, Menu, X, Heart, Apple, Smile, Watch, FileText, Settings as SettingsIcon, Bell, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { AdaptiveLogo } from './AdaptiveLogo';
import { useNavigate, useLocation } from 'react-router-dom';

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [language, setLanguage] = useState('english');
  
  const allNavItems = [
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
    { id: 'settings', label: 'Settings', icon: SettingsIcon, path: '/settings' },
  ];
  
  const bottomNavItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/dashboard' },
    { id: 'cycle', icon: Calendar, label: 'Cycle', path: '/cycle-tracking' },
    { id: 'log', icon: Plus, label: 'Log', path: '/symptoms' },
    { id: 'insights', icon: TrendingUp, label: 'Insights', path: '/ai-insights' },
    { id: 'profile', icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="min-h-screen bg-background md:hidden">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              variant="ghost"
              className="w-8 h-8 p-0"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-md overflow-hidden">
              <AdaptiveLogo className="w-8 h-8" />
            </div>
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">
              PankhAI
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="ghost"
              className="w-8 h-8 p-0"
              onClick={() => navigate('/notifications')}
            >
              <Bell className="w-5 h-5" />
            </Button>
            <ThemeToggle />
            <Button 
              size="sm" 
              variant="ghost" 
              className="w-8 h-8 p-0"
              onClick={() => navigate('/profile')}
            >
              <div className="w-6 h-6 bg-gradient-secondary rounded-full"></div>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Drawer */}
      {isSidebarOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsSidebarOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="fixed left-0 top-0 bottom-0 w-80 bg-background z-50 shadow-2xl overflow-y-auto slide-in mobile-sidebar">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden shadow-md">
                    <AdaptiveLogo className="w-10 h-10" />
                  </div>
                  <div>
                    <h2 className="font-bold text-xl text-gray-900 dark:text-white">PankhAI</h2>
                    <p className="text-xs text-muted-foreground">Your AI wellness companion</p>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Navigation Items */}
              <nav className="space-y-2 mb-8">
                {allNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        navigate(item.path);
                        setIsSidebarOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-primary text-primary-foreground shadow-soft' 
                          : 'hover:bg-primary/10 hover:text-primary'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Theme & Language */}
              <div className="pt-6 border-t border-border space-y-6">
                {/* Theme Toggle */}
                <div>
                  <p className="text-sm text-muted-foreground mb-3">Theme</p>
                  <ThemeToggle />
                </div>
                
                {/* Language Switcher */}
                <div>
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
              </div>
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <main className="pb-20">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-border">
        <div className="flex items-center justify-around py-2">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || (item.id === 'home' && location.pathname === '/');
            
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'text-primary bg-primary/10' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.id === 'log' ? (
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow -mt-6">
                      <Plus className="w-6 h-6 text-white" />
                    </div>
                  </div>
                ) : (
                  <>
                    <Icon className="w-5 h-5" />
                    <span className="text-xs font-medium">{item.label}</span>
                  </>
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default MobileLayout;