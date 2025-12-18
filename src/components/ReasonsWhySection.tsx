import React, { useState } from 'react';
import { Heart, Sparkles, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const reasons = [
  "The way your eyes light up when you're excited.",
  "Your incredible strength and resilience.",
  "How you make me feel like the luckiest man just by talking to me.",
  "Your beautiful, contagious laugh.",
  "The way you care for the people you love.",
  "Your stubbornness (it's actually cute, I promise).",
  "How you look in the morning, even if you don't believe it.",
  "The way you say my name.",
  "Your passion for the things you believe in.",
  "How you challenge me to be a better person.",
  "The peace I feel when we're just talking about nothing.",
  "Your kindness to strangers.",
  "The way you handle my Luo drama with grace.",
  "Your intelligence and sharp wit.",
  "How you've chosen to stay, even when distance is hard.",
  "Because you are my 'Wari Wakwa'.",
  "The way you make Qatar feel less lonely.",
  "How you're both my best friend and my queen.",
  "Your beautiful Kikuyu roots and how proud you are of them.",
  "Simply because you are you, and that's enough for me forever."
];

const ReasonsWhySection = () => {
  const [randomReason, setRandomReason] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomReason = () => {
    setIsAnimating(true);
    setRandomReason(null);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * reasons.length);
      setRandomReason(reasons[randomIndex]);
      setIsAnimating(false);
    }, 600);
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-card/30 to-background">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <Heart className="w-12 h-12 text-primary mx-auto mb-4 animate-float" fill="currentColor" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Reasons Why <span className="text-secondary">I Love You</span>
          </h2>
          <p className="font-script text-2xl text-muted-foreground">
            A few of the million things that make you special...
          </p>
        </div>

        <div className="bg-card/40 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-border/50 shadow-glow relative overflow-hidden group">
          <Sparkles className="absolute top-4 right-4 text-gold/30 w-8 h-8 group-hover:animate-sparkle" />
          <Sparkles className="absolute bottom-4 left-4 text-primary/30 w-6 h-6 group-hover:animate-sparkle" />

          <div className="min-h-[150px] flex items-center justify-center mb-8">
            {randomReason ? (
              <p className={cn(
                "font-display text-2xl md:text-3xl text-foreground leading-relaxed transition-all duration-500",
                isAnimating ? "scale-90 opacity-0" : "scale-100 opacity-100"
              )}>
                "{randomReason}"
              </p>
            ) : (
              <p className="font-script text-3xl text-muted-foreground italic">
                Click the heart to reveal a reason...
              </p>
            )}
          </div>

          <Button
            onClick={getRandomReason}
            disabled={isAnimating}
            variant="romantic"
            size="lg"
            className="rounded-full px-10 py-8 text-xl font-display tracking-widest group shadow-glow hover:shadow-primary/40 transition-all"
          >
            <RefreshCw className={cn("w-6 h-6 mr-3 transition-transform duration-700", isAnimating ? "rotate-180" : "group-hover:rotate-180")} />
            {randomReason ? "One More Reason" : "Discover Why"}
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.slice(0, 6).map((reason, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-card/20 border border-border/30 hover:border-primary/30 transition-all text-left">
              <p className="text-sm text-foreground/80 italic leading-relaxed">"{reason}"</p>
            </div>
          ))}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center italic text-primary font-display">
            And {reasons.length - 6} more reasons tucked in my heart...
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonsWhySection;
