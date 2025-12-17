import { useEffect, useState } from 'react';
import { Calendar, Heart } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-02-14T00:00:00'); // Valentine's Day / February meetup

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
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-background to-card/30">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Calendar className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Counting Days Until <span className="text-secondary">February</span>
          </h2>
          <p className="text-muted-foreground text-lg">When I finally get to see you ❤️</p>
        </div>
        
        {/* Countdown grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {timeUnits.map((unit, index) => (
            <div 
              key={unit.label}
              className="relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Card */}
              <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-border/50 group-hover:border-primary/50 transition-colors">
                <div className="text-center">
                  <span className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary text-glow">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <p className="text-muted-foreground text-sm sm:text-base mt-2 font-display">
                    {unit.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Message */}
        <div className="text-center">
          <Heart className="w-8 h-8 text-primary fill-primary mx-auto mb-4 animate-pulse" />
          <p className="font-script text-2xl sm:text-3xl text-rose">
            Every second brings us closer together
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;