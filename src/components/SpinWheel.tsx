import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RotateCcw, CheckCircle } from 'lucide-react';

const challenges = [
  { id: 1, text: "Drink 2L Water", emoji: "💧", color: "bg-blue-500" },
  { id: 2, text: "Sleep 7+ Hours", emoji: "😴", color: "bg-purple-500" },
  { id: 3, text: "Avoid Sugar", emoji: "🚫", color: "bg-red-500" },
  { id: 4, text: "Meditate 10 Min", emoji: "🧘‍♀️", color: "bg-green-500" },
  { id: 5, text: "Walk 5K Steps", emoji: "🚶‍♀️", color: "bg-orange-500" },
  { id: 6, text: "Eat Vegetables", emoji: "🥬", color: "bg-emerald-500" },
  { id: 7, text: "Take Vitamins", emoji: "💊", color: "bg-pink-500" },
  { id: 8, text: "Stretch 5 Min", emoji: "🤸‍♀️", color: "bg-yellow-500" }
];

export const SpinWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState<typeof challenges[0] | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef<HTMLDivElement>(null);

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setShowResult(false);
    setSelectedChallenge(null);

    // Random rotation (multiple full spins + random position)
    const randomIndex = Math.floor(Math.random() * challenges.length);
    const degreesPerSegment = 360 / challenges.length;
    const finalRotation = rotation + 1440 + (360 - (randomIndex * degreesPerSegment)); // 4 full spins + position
    
    setRotation(finalRotation);

    // Show result after animation
    setTimeout(() => {
      setIsSpinning(false);
      setSelectedChallenge(challenges[randomIndex]);
      setShowResult(true);
      
      // Confetti effect
      createConfetti();
    }, 3000);
  };

  const createConfetti = () => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100vw';
    confettiContainer.style.height = '100vh';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '1000';
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.style.position = 'absolute';
      confetti.style.width = '10px';
      confetti.style.height = '10px';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.animationDuration = Math.random() * 2 + 1 + 's';
      confetti.style.animationName = 'confetti-fall';
      confetti.style.animationTimingFunction = 'linear';
      confetti.style.animationFillMode = 'forwards';
      confettiContainer.appendChild(confetti);
    }

    // Add keyframes for confetti animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes confetti-fall {
        to {
          transform: translateY(100vh) rotate(360deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    // Clean up after animation
    setTimeout(() => {
      document.body.removeChild(confettiContainer);
      document.head.removeChild(style);
    }, 3000);
  };

  const acceptChallenge = () => {
    // Here you would save the challenge to the database
    setShowResult(false);
    setSelectedChallenge(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="pankhai-card">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-foreground">🎡 Daily Challenge Wheel</CardTitle>
          <p className="text-muted-foreground">Spin to get your health challenge for today!</p>
        </CardHeader>
        <CardContent className="text-center">
          {/* Wheel Container */}
          <div className="relative mx-auto mb-8" style={{ width: '320px', height: '320px' }}>
            {/* Pointer */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-primary"></div>
            </div>
            
            {/* Wheel */}
            <div 
              ref={wheelRef}
              className="relative w-80 h-80 rounded-full overflow-hidden shadow-xl border-4 border-primary/20 transition-transform duration-[3000ms] ease-out"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {challenges.map((challenge, index) => {
                const angle = (360 / challenges.length) * index;
                const nextAngle = (360 / challenges.length) * (index + 1);
                
                return (
                  <div
                    key={challenge.id}
                    className={`absolute w-full h-full ${challenge.color} opacity-80`}
                    style={{
                      clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos((angle * Math.PI) / 180)}% ${50 + 50 * Math.sin((angle * Math.PI) / 180)}%, ${50 + 50 * Math.cos((nextAngle * Math.PI) / 180)}% ${50 + 50 * Math.sin((nextAngle * Math.PI) / 180)}%)`
                    }}
                  >
                    <div 
                      className="absolute text-white font-semibold text-sm flex flex-col items-center justify-center"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) rotate(${angle + (360 / challenges.length) / 2}deg) translateY(-60px)`,
                        transformOrigin: '50% 60px'
                      }}
                    >
                      <div className="text-xl mb-1">{challenge.emoji}</div>
                      <div className="text-xs text-center leading-tight">{challenge.text}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Center Button */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <Button
                onClick={spinWheel}
                disabled={isSpinning}
                className="w-20 h-20 rounded-full bg-white text-primary hover:bg-gray-50 border-4 border-primary shadow-lg font-bold text-lg"
              >
                {isSpinning ? (
                  <RotateCcw className="w-8 h-8 animate-spin" />
                ) : (
                  'SPIN'
                )}
              </Button>
            </div>
          </div>

          {/* Result Popup */}
          {showResult && selectedChallenge && (
            <Card className="mx-auto max-w-md animate-scale-in border-2 border-primary">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">{selectedChallenge.emoji}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">🎉 You got today's challenge:</h3>
                <p className="text-lg font-semibold text-primary mb-4">{selectedChallenge.text}</p>
                <div className="space-x-3">
                  <Button onClick={acceptChallenge} className="pankhai-button">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Accept Challenge
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowResult(false)}
                  >
                    Maybe Later
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {!showResult && !isSpinning && (
            <p className="text-muted-foreground">
              Click SPIN to discover your daily health challenge! 🌟
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};