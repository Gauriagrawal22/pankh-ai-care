import React, { useState } from 'react';
import { Calendar, Plus, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from './Navigation';
import HealthMetrics from './HealthMetrics';
import CycleChart from './CycleChart';
import QuickActions from './QuickActions';
import RecentInsights from './RecentInsights';
import MobileLayout from './MobileLayout';
import { ThemeToggle } from './ThemeToggle';
import { AdaptiveLogo } from './AdaptiveLogo';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import heroImage from '@/assets/pankhai-hero.jpg';
import QuickAIActions from './QuickAIActions';

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSmartInsight = () => {
    toast({
      title: "Generating insights...",
      description: "पंखAI is analyzing your daily health data",
    });
  };
  
  const handleAIAction = (prompt: string) => {
    // This would trigger AI analysis
    console.log('AI Action:', prompt);
  };
  
  const DesktopDashboard = () => (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="pankhai-card mx-6 mt-6 mb-8">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden">
              <AdaptiveLogo className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                PankhAI
              </h1>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Your AI wellness companion</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button 
              size="sm" 
              variant="wellness"
              className="text-white hover:scale-105 transition-all duration-300"
              onClick={handleSmartInsight}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Run Smart Insight
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="w-10 h-10 p-0 rounded-full hover:scale-105 transition-all duration-300"
              onClick={() => navigate('/profile')}
            >
              <div className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">P</span>
              </div>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-6 mb-8">
        <Card className="relative overflow-hidden pankhai-card">
          <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
          <img 
            src={heroImage} 
            alt="PankhAI - Women's Health Companion" 
            className="absolute inset-0 w-full h-48 object-cover mix-blend-soft-light"
          />
          <div className="relative p-8 text-center">
            <h2 className="text-3xl font-bold text-black mb-3 drop-shadow-2xl">
              Hello, Priya! 👋
            </h2>
            <p className="text-black/95 mb-6 max-w-md mx-auto text-lg drop-shadow-lg">
              Your cycle is due in 3 days. Energy levels look great today!
            </p>
            <div className="flex justify-center gap-3">
              <Button 
                variant="hero" 
                size="lg" 
                className="animate-wellness-bounce"
                onClick={() => navigate('/symptoms')}
              >
                <Plus className="w-4 h-4 mr-2" />
                Log Symptoms
              </Button>
              <Button 
                variant="hero" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => navigate('/ai-insights')}
              >
                View Insights
              </Button>
            </div>
          </div>
        </Card>
      </section>

      <div className="flex gap-6 mx-6">
        {/* Sidebar Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main className="flex-1 space-y-8">
          {/* Quick AI Actions */}
          <QuickAIActions onActionClick={handleAIAction} />
          
          {/* Health Metrics */}
          <HealthMetrics />
          
          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CycleChart />
            <Card className="pankhai-chart-container cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate('/mood-energy')}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Mood & Energy Tracking</h3>
              </div>
              <div className="flex items-center justify-center h-32 text-muted-foreground hover:text-foreground transition-colors">
                <div className="text-center">
                  <Calendar className="w-12 h-12 mx-auto mb-2 text-pankhai-purple hover:scale-110 transition-transform" />
                  <p>Track your daily wellness patterns</p>
                  <p className="text-xs mt-2 text-primary">Click to view details</p>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Quick Actions */}
          <QuickActions />
          
          {/* Recent Insights */}
          <RecentInsights />
        </main>
      </div>
    </div>
  );

  const MobileDashboard = () => (
    <div className="p-4 space-y-6">
      {/* Mobile Hero */}
      <Card className="relative overflow-hidden pankhai-card">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <img 
          src={heroImage} 
          alt="PankhAI - Women's Health Companion" 
          className="absolute inset-0 w-full h-32 object-cover mix-blend-soft-light"
        />
        <div className="relative p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            Hello, Priya! 👋
          </h2>
          <p className="text-white/90 text-sm mb-4">
            Cycle due in 3 days. Great energy today!
          </p>
          <div className="flex gap-2 justify-center">
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => navigate('/symptoms')}
            >
              <Plus className="w-4 h-4 mr-2" />
              Log Now
            </Button>
            <Button 
              variant="hero" 
              size="sm"
              onClick={handleSmartInsight}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Insights
            </Button>
          </div>
        </div>
      </Card>
      
      <QuickAIActions onActionClick={handleAIAction} />
      <HealthMetrics />
      <QuickActions />
      <CycleChart />
      <RecentInsights />
    </div>
  );

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <DesktopDashboard />
      </div>
      
      {/* Mobile Layout */}
      <div className="md:hidden">
        <MobileLayout>
          <MobileDashboard />
        </MobileLayout>
      </div>
    </>
  );
};

export default Dashboard;