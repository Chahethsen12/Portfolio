import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set target date to February 27, 2026 at midnight
    const targetDate = new Date('2026-02-27T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Run immediately so we don't wait 1 second for the first update
    calculateTimeLeft();

    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-2xl mx-auto">
      <TimerBlock value={formatNumber(timeLeft.days)} label="Days" />
      <TimerBlock value={formatNumber(timeLeft.hours)} label="Hours" />
      <TimerBlock value={formatNumber(timeLeft.minutes)} label="Minutes" isPulse />
      <TimerBlock value={formatNumber(timeLeft.seconds)} label="Seconds" />
    </div>
  );
};

interface TimerBlockProps {
  value: string;
  label: string;
  isPulse?: boolean;
}

const TimerBlock: React.FC<TimerBlockProps> = ({ value, label, isPulse }) => (
  <div className="bg-black/40 rounded-lg p-4 border border-white/10 backdrop-blur-md shadow-inner shadow-black/50 group hover:border-primary/30 transition-colors">
    <span 
      className={`digital-number block text-4xl md:text-5xl font-bold mb-1 transition-colors ${
        isPulse ? 'text-primary animate-pulse' : 'text-white group-hover:text-primary'
      }`}
    >
      {value}
    </span>
    <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">{label}</span>
  </div>
);

export default CountdownTimer;