import { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FinalSurpriseSection = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background" />
      
      {/* Revealed glow effect */}
      {revealed && (
        <>
          <div className="absolute inset-0 bg-primary/10 animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/20 blur-[150px] animate-pulse" />
        </>
      )}
      
      <div className="max-w-2xl mx-auto relative z-10 text-center">
        {!revealed ? (
          <>
            <Sparkles className="w-12 h-12 text-gold mx-auto mb-6 animate-sparkle" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              One Last Thing...
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              If anything on this page made you feel something...
            </p>
            
            <Button
              onClick={() => setRevealed(true)}
              variant="romantic"
              size="lg"
              className="animate-glow-pulse"
            >
              <Heart className="w-5 h-5 mr-2 fill-current" />
              Click If You Feel Something ❤️
            </Button>
          </>
        ) : (
          <div className="animate-fade-in-up">
            {/* Hearts burst */}
            <div className="relative mb-8">
              {[...Array(12)].map((_, i) => (
                <Heart
                  key={i}
                  className="absolute text-primary fill-primary animate-heart-float opacity-60"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: '0',
                    width: `${16 + Math.random() * 16}px`,
                    height: `${16 + Math.random() * 16}px`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                />
              ))}
              <Heart className="w-20 h-20 text-primary fill-primary mx-auto animate-pulse" />
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Thank You, <span className="text-secondary">Lydia</span>
            </h2>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/30 shadow-glow mb-8">
              <p className="font-script text-2xl sm:text-3xl text-rose leading-relaxed">
                It's okay if you don't believe in love yet…
              </p>
              <p className="font-script text-2xl sm:text-3xl text-gold mt-4">
                I'll wait.
              </p>
            </div>
            
            <p className="text-muted-foreground">
              No pressure. No rush. Just me, here, whenever you're ready.
            </p>
            
            <div className="mt-8 flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Heart 
                  key={i} 
                  className="w-6 h-6 text-primary fill-primary animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FinalSurpriseSection;