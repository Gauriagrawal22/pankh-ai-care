import React from 'react';
import { Calendar, Heart, Moon, Droplets, Activity, Bell, Plus } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from './Navigation';
import HealthMetrics from './HealthMetrics';
import CycleChart from './CycleChart';
import QuickActions from './QuickActions';
import RecentInsights from './RecentInsights';
import MobileLayout from './MobileLayout';
import heroImage from '@/assets/pankhai-hero.jpg';

const Dashboard = () => {
  const DesktopDashboard = () => (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="pankhai-card mx-6 mt-6 mb-8">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                पंखAI
              </h1>
              <p className="text-sm text-muted-foreground">Your wellness companion</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              size="sm" 
              variant="wellness"
              className="text-white hover:scale-105 transition-all duration-300"
            >
              <Bell className="w-4 h-4 mr-2" />
              2 alerts
            </Button>
            <div className="w-10 h-10 bg-gradient-secondary rounded-full"></div>
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
            <h2 className="text-3xl font-bold text-white mb-3">
              Hello, Priya! 👋
            </h2>
            <p className="text-white/90 mb-6 max-w-md mx-auto">
              Your cycle is due in 3 days. Energy levels look great today!
            </p>
            <div className="flex justify-center gap-3">
              <Button variant="hero" size="lg" className="animate-wellness-bounce">
                <Plus className="w-4 h-4 mr-2" />
                Log Symptoms
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
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
          {/* Health Metrics */}
          <HealthMetrics />
          
          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CycleChart />
            <Card className="pankhai-chart-container">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Mood & Energy</h3>
                <Button size="sm" variant="ghost">
                  <Activity className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex items-center justify-center h-32 text-muted-foreground">
                <div className="text-center">
                  <Moon className="w-12 h-12 mx-auto mb-2 text-pankhai-purple" />
                  <p>Tracking your wellness patterns</p>
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
          <Button variant="hero" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Log Now
          </Button>
        </div>
      </Card>
      
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