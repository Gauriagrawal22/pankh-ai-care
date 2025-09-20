import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw, Award } from 'lucide-react';

export const BreathingGame = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale' | 'rest'>('inhale');
  const [timeRemaining, setTimeRemaining] = useState(4);
  const [cycle, setCycle] = useState(0);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const phases = {
    inhale: { duration: 4, next: 'hold', label: 'Breathe In', color: 'bg-blue-500' },
    hold: { duration: 4, next: 'exhale', label: 'Hold', color: 'bg-purple-500' },
    exhale: { duration: 6, next: 'rest', label: 'Breathe Out', color: 'bg-green-500' },
    rest: { duration: 2, next: 'inhale', label: 'Rest', color: 'bg-gray-400' }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive && !gameComplete) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            const currentPhase = phases[phase];
            const nextPhase = currentPhase.next as keyof typeof phases;
            
            if (phase === 'rest') {
              setCycle(prev => prev + 1);
              setScore(prev => prev + 10);
              
              if (cycle + 1 >= 5) {
                setGameComplete(true);
                setIsActive(false);
                return 0;
              }
            }
            
            setPhase(nextPhase);
            return phases[nextPhase].duration;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, phase, cycle, gameComplete]);

  const startGame = () => {
    setIsActive(true);
    setGameComplete(false);
    setCycle(0);
    setScore(0);
    setPhase('inhale');
    setTimeRemaining(4);
  };

  const pauseGame = () => {
    setIsActive(!isActive);
  };

  const resetGame = () => {
    setIsActive(false);
    setGameComplete(false);
    setCycle(0);
    setScore(0);
    setPhase('inhale');
    setTimeRemaining(4);
  };

  const currentPhaseData = phases[phase];
  const circleSize = 100 + (timeRemaining / currentPhaseData.duration) * 50;

  return (
    <Card className="pankhai-card max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-foreground">🧘‍♀️ Breathing Exercise</CardTitle>
        <p className="text-muted-foreground">Follow the circle and breathe mindfully</p>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        {/* Breathing Circle */}
        <div className="relative flex items-center justify-center h-64">
          <div 
            className={`rounded-full transition-all duration-1000 ease-in-out ${currentPhaseData.color} opacity-70 flex items-center justify-center`}
            style={{ 
              width: `${circleSize}px`, 
              height: `${circleSize}px`,
              transform: isActive ? `scale(${phase === 'inhale' ? 1.2 : phase === 'exhale' ? 0.8 : 1})` : 'scale(1)'
            }}
          >
            <div className="text-white font-bold text-lg">
              {timeRemaining}
            </div>
          </div>
          
          {/* Instructions */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="text-xl font-semibold text-foreground">
              {currentPhaseData.label}
            </div>
          </div>
        </div>

        {/* Game Stats */}
        <div className="flex justify-center gap-6 text-sm">
          <div className="text-center">
            <div className="font-semibold text-foreground">Cycle</div>
            <div className="text-primary">{cycle}/5</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-foreground">Score</div>
            <div className="text-primary">{score}</div>
          </div>
        </div>

        {/* Game Completion */}
        {gameComplete && (
          <Card className="bg-gradient-primary text-white p-4 animate-scale-in">
            <div className="text-center space-y-2">
              <Award className="w-8 h-8 mx-auto" />
              <h3 className="font-bold text-lg">Excellent Work!</h3>
              <p className="text-sm">You completed 5 breathing cycles</p>
              <p className="text-sm">Final Score: {score} points</p>
            </div>
          </Card>
        )}

        {/* Controls */}
        <div className="flex justify-center gap-3">
          {!isActive && !gameComplete && (
            <Button onClick={startGame} className="pankhai-button-primary">
              <Play className="w-4 h-4 mr-2" />
              Start
            </Button>
          )}
          
          {isActive && (
            <Button onClick={pauseGame} variant="outline">
              <Pause className="w-4 h-4 mr-2" />
              {isActive ? 'Pause' : 'Resume'}
            </Button>
          )}
          
          <Button onClick={resetGame} variant="outline">
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </div>

        {/* Instructions */}
        <div className="text-xs text-muted-foreground space-y-1">
          <p>• Blue: Breathe in slowly through your nose</p>
          <p>• Purple: Hold your breath gently</p>
          <p>• Green: Breathe out slowly through your mouth</p>
          <p>• Gray: Rest and prepare for next cycle</p>
        </div>
      </CardContent>
    </Card>
  );
};