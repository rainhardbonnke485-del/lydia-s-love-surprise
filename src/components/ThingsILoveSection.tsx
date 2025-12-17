import { useEffect, useRef, useState } from 'react';
import { Heart, Flame, Sparkles, Shield, Lock } from 'lucide-react';

interface LoveItem {
  id: number;
  text: string;
  icon: React.ReactNode;
  color: string;
}

const loveItems: LoveItem[] = [
  { 
    id: 1, 
    text: "Your stubborn Kikuyu fire 🔥", 
    icon: <Flame className="w-6 h-6" />,
    color: "primary"
  },
  { 
    id: 2, 
    text: "Your naughty side you pretend not to have 😌", 
    icon: <Sparkles className="w-6 h-6" />,
    color: "secondary"
  },
  { 
    id: 3, 
    text: "The way you care even when you act tough", 
    icon: <Shield className="w-6 h-6" />,
    color: "gold"
  },
  { 
    id: 4, 
    text: "The way you slowly let love in…", 
    icon: <Lock className="w-6 h-6" />,
    color: "rose"
  },
];

const ThingsILoveSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loveItems.forEach((item, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, item.id]);
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string }> = {
      primary: { bg: 'bg-primary/10', border: 'border-primary/50 hover:border-primary', text: 'text-primary' },
      secondary: { bg: 'bg-secondary/10', border: 'border-secondary/50 hover:border-secondary', text: 'text-secondary' },
      gold: { bg: 'bg-gold/10', border: 'border-gold/50 hover:border-gold', text: 'text-gold' },
      rose: { bg: 'bg-rose/10', border: 'border-rose/50 hover:border-rose', text: 'text-rose' },
    };
    return colors[color] || colors.primary;
  };

  return (
    <section ref={sectionRef} className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-background to-card/20">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-secondary/10 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Heart className="w-12 h-12 text-primary fill-primary mx-auto mb-4 animate-pulse" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Things I <span className="text-primary">Love</span> About You
          </h2>
          <p className="text-muted-foreground text-lg">Every little thing that makes you, you 😏</p>
        </div>
        
        {/* Love cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {loveItems.map((item) => {
            const colors = getColorClasses(item.color);
            return (
              <div
                key={item.id}
                className={`relative overflow-hidden rounded-2xl p-6 border backdrop-blur-sm transition-all duration-500 cursor-pointer group ${
                  colors.border
                } ${colors.bg} ${
                  visibleItems.includes(item.id) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${colors.bg} blur-xl`} />
                
                <div className="relative flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full ${colors.bg} flex items-center justify-center ${colors.text}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-display text-lg text-foreground group-hover:scale-105 transition-transform origin-left">
                      {item.text}
                    </p>
                  </div>
                </div>
                
                {/* Decorative heart */}
                <Heart 
                  className={`absolute bottom-2 right-2 w-8 h-8 ${colors.text} opacity-10 group-hover:opacity-30 transition-opacity`} 
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThingsILoveSection;