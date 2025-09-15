import React from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CycleChart = () => {
  // Mock cycle data
  const days = Array.from({ length: 28 }, (_, i) => i + 1);
  const currentDay = 12;
  
  const getDayStatus = (day: number) => {
    if (day <= 5) return 'menstrual';
    if (day >= 6 && day <= 13) return 'follicular';
    if (day === 14) return 'ovulation';
    if (day >= 15 && day <= 28) return 'luteal';
    return 'neutral';
  };

  const getStatusColor = (status: string, isCurrentDay: boolean) => {
    const colors = {
      menstrual: isCurrentDay ? 'bg-pankhai-pink text-white' : 'bg-pankhai-pink-light text-pankhai-pink-dark',
      follicular: isCurrentDay ? 'bg-pankhai-teal text-white' : 'bg-pankhai-teal-light text-pankhai-teal-dark',
      ovulation: isCurrentDay ? 'bg-pankhai-orange text-white' : 'bg-pankhai-orange-light text-pankhai-orange-dark',
      luteal: isCurrentDay ? 'bg-pankhai-purple text-white' : 'bg-pankhai-purple-light text-pankhai-purple-dark',
      neutral: 'bg-muted text-muted-foreground'
    };
    return colors[status as keyof typeof colors] || colors.neutral;
  };

  return (
    <Card className="pankhai-chart-container">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Cycle Calendar</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="text-sm font-medium px-3">December 2024</span>
          <Button size="sm" variant="ghost">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Cycle Days Grid */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map((day) => {
          const status = getDayStatus(day);
          const isCurrentDay = day === currentDay;
          const colorClass = getStatusColor(status, isCurrentDay);
          
          return (
            <div
              key={day}
              className={`
                w-8 h-8 rounded-lg flex items-center justify-center text-xs font-medium
                transition-all duration-200 hover:scale-110 cursor-pointer
                ${colorClass}
                ${isCurrentDay ? 'ring-2 ring-primary/50 shadow-glow' : ''}
              `}
            >
              {day}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-pankhai-pink-light"></div>
          <span>Menstrual</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-pankhai-teal-light"></div>
          <span>Follicular</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-pankhai-orange-light"></div>
          <span>Ovulation</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-pankhai-purple-light"></div>
          <span>Luteal</span>
        </div>
      </div>
    </Card>
  );
};

export default CycleChart;