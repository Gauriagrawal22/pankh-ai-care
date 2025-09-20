import React, { useState } from 'react';
import { Calendar, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import MobileLayout from '@/components/MobileLayout';

const CycleTracking = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const cycleData = {
    lastPeriod: new Date(2024, 0, 15),
    nextPeriod: new Date(2024, 1, 13),
    cycleLength: 29,
    periodLength: 5
  };

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isPeriodDay = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return date >= cycleData.lastPeriod && 
           date < new Date(cycleData.lastPeriod.getTime() + cycleData.periodLength * 24 * 60 * 60 * 1000);
  };

  const isFertileDay = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const ovulationDate = new Date(cycleData.nextPeriod.getTime() - 14 * 24 * 60 * 60 * 1000);
    const fertileStart = new Date(ovulationDate.getTime() - 5 * 24 * 60 * 60 * 1000);
    const fertileEnd = new Date(ovulationDate.getTime() + 1 * 24 * 60 * 60 * 1000);
    return date >= fertileStart && date <= fertileEnd;
  };

  const DesktopCycleTracking = () => (
    <div className="min-h-screen bg-background">
      <header className="pankhai-card mx-6 mt-6 mb-8">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                पंखAI
              </h1>
              <p className="text-sm text-muted-foreground">Cycle Tracking</p>
            </div>
          </div>
          <Button variant="wellness" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Log Period
          </Button>
        </div>
      </header>

      <div className="flex gap-6 mx-6">
        <Navigation />
        
        <main className="flex-1 space-y-8">
          {/* Current Cycle Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="pankhai-metric-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-pankhai-pink mb-2">Days Until Period</h3>
                <p className="text-3xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">Expected Feb 13</p>
              </CardContent>
            </Card>
            
            <Card className="pankhai-metric-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-pankhai-teal mb-2">Cycle Length</h3>
                <p className="text-3xl font-bold">{cycleData.cycleLength}</p>
                <p className="text-sm text-muted-foreground">days average</p>
              </CardContent>
            </Card>
            
            <Card className="pankhai-metric-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-pankhai-purple mb-2">Current Phase</h3>
                <p className="text-lg font-semibold">Luteal</p>
                <p className="text-sm text-muted-foreground">Day 26 of cycle</p>
              </CardContent>
            </Card>
          </div>

          {/* Calendar View */}
          <Card className="pankhai-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Cycle Calendar</CardTitle>
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="font-medium min-w-32 text-center">
                  {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1">
                {/* Empty cells for days before month starts */}
                {Array.from({ length: getFirstDayOfMonth(currentDate) }).map((_, index) => (
                  <div key={index} className="p-2"></div>
                ))}
                
                {/* Days of the month */}
                {Array.from({ length: getDaysInMonth(currentDate) }).map((_, index) => {
                  const day = index + 1;
                  const isToday = new Date().getDate() === day && 
                                  new Date().getMonth() === currentDate.getMonth() &&
                                  new Date().getFullYear() === currentDate.getFullYear();
                  
                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
                      className={`
                        p-2 h-10 w-10 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary/10
                        ${isToday ? 'bg-primary text-primary-foreground' : ''}
                        ${isPeriodDay(day) ? 'bg-pankhai-pink text-white' : ''}
                        ${isFertileDay(day) ? 'bg-pankhai-teal text-white' : ''}
                      `}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
              
              <div className="flex items-center gap-6 mt-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-pankhai-pink rounded-full"></div>
                  <span>Period Days</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-pankhai-teal rounded-full"></div>
                  <span>Fertile Window</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <span>Today</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Insights */}
          <Card className="pankhai-card">
            <CardHeader>
              <CardTitle>Cycle Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-pankhai-pink/10 rounded-xl">
                <h4 className="font-semibold text-pankhai-pink mb-2">Period Prediction</h4>
                <p className="text-sm">Your next period is expected on Feb 13. Track symptoms now to get better predictions.</p>
              </div>
              
              <div className="p-4 bg-pankhai-teal/10 rounded-xl">
                <h4 className="font-semibold text-pankhai-teal mb-2">Fertility Window</h4>
                <p className="text-sm">Your fertile window was Jan 30 - Feb 4. Track intimacy and symptoms for better insights.</p>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );

  const MobileCycleTracking = () => (
    <div className="p-4 space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <Card className="pankhai-card p-4">
          <h3 className="text-sm font-medium text-pankhai-pink mb-1">Next Period</h3>
          <p className="text-2xl font-bold">3 days</p>
        </Card>
        <Card className="pankhai-card p-4">
          <h3 className="text-sm font-medium text-pankhai-teal mb-1">Cycle Day</h3>
          <p className="text-2xl font-bold">26</p>
        </Card>
      </div>
      
      <Card className="pankhai-card p-4">
        <h3 className="font-semibold mb-4">This Month</h3>
        <div className="grid grid-cols-7 gap-1 text-xs">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
            <div key={day} className="p-1 text-center font-medium text-muted-foreground">{day}</div>
          ))}
          {Array.from({ length: 28 }).map((_, i) => (
            <div key={i} className={`
              p-1 text-center rounded 
              ${i < 5 ? 'bg-pankhai-pink text-white' : ''}
              ${i >= 12 && i <= 16 ? 'bg-pankhai-teal text-white' : ''}
              ${i === 15 ? 'bg-primary text-white' : ''}
            `}>
              {i + 1}
            </div>
          ))}
        </div>
      </Card>
      
      <Button className="w-full pankhai-button-primary">
        <Plus className="w-4 h-4 mr-2" />
        Log Period Start
      </Button>
    </div>
  );

  return (
    <>
      <div className="hidden md:block">
        <DesktopCycleTracking />
      </div>
      
      <div className="md:hidden">
        <MobileLayout>
          <MobileCycleTracking />
        </MobileLayout>
      </div>
    </>
  );
};

export default CycleTracking;