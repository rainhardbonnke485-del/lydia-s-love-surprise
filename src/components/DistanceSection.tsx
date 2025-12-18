import { useEffect, useRef, useState } from 'react';
import { Plane, Heart, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const DistanceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Plane className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Distance but <span className="text-primary">Connected</span>
          </h2>
        </div>

        {/* Map visualization */}
        <div className="relative h-auto sm:h-80 mb-10 flex flex-col sm:block gap-8 sm:gap-0">
          {/* Connection line (Hidden on mobile) */}
          <svg className="absolute inset-0 w-full h-full hidden sm:block" viewBox="0 0 100 50" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--gold))" />
                <stop offset="50%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" />
              </linearGradient>
            </defs>
            <path
              d="M 15 25 Q 50 5 85 25"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="0.5"
              strokeDasharray={isVisible ? "none" : "4 4"}
              className={`transition-all duration-2000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{
                strokeDasharray: isVisible ? "200" : "0 200",
                strokeDashoffset: isVisible ? "0" : "200",
                transition: "stroke-dasharray 2s ease-out, stroke-dashoffset 2s ease-out",
              }}
            />
          </svg>

          {/* Qatar marker */}
          <div
            className={cn(
              "relative sm:absolute sm:left-[10%] sm:top-1/2 sm:-translate-y-1/2 transition-all duration-700",
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            )}
          >
            <div className="relative max-w-[200px] mx-auto sm:mx-0">
              <div className="absolute -inset-4 bg-gold/20 rounded-full blur-xl animate-pulse" />
              <div className="relative bg-card border border-gold/50 rounded-xl p-4 shadow-gold">
                <MapPin className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="font-display font-bold text-foreground">Qatar 🇶🇦</p>
                <p className="text-xs text-muted-foreground">Where he waits</p>
              </div>
            </div>
          </div>

          {/* Heart/Plane in middle (Hidden on mobile) */}
          <div
            className={cn(
              "hidden sm:flex absolute left-1/2 top-1/4 -translate-x-1/2 transition-all duration-1000 delay-500 items-center justify-center",
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            )}
          >
            <Heart className="w-10 h-10 text-primary fill-primary animate-pulse" />
          </div>

          <div
            className={cn(
              "hidden sm:block absolute top-[15%] transition-all duration-2000",
              isVisible ? 'left-[45%] opacity-100' : 'left-[15%] opacity-0'
            )}
          >
            <Plane className="w-6 h-6 text-gold transform rotate-45" />
          </div>

          {/* Kenya marker */}
          <div
            className={cn(
              "relative sm:absolute sm:right-[10%] sm:top-1/2 sm:-translate-y-1/2 transition-all duration-700 delay-300",
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            )}
          >
            <div className="relative max-w-[200px] mx-auto sm:mx-0">
              <div className="absolute -inset-4 bg-secondary/20 rounded-full blur-xl animate-pulse" />
              <div className="relative bg-card border border-secondary/50 rounded-xl p-4 shadow-glow">
                <MapPin className="w-8 h-8 text-secondary mx-auto mb-2" />
                <p className="font-display font-bold text-foreground">Kenya 🇰🇪</p>
                <p className="text-xs text-muted-foreground">Where she shines</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center">
          <p className="font-script text-2xl sm:text-3xl text-rose mb-4">
            "Miles apart, hearts connected."
          </p>
          <p className="font-display text-xl text-foreground">
            March is closer than it seems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DistanceSection;