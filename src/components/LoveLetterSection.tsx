import { useEffect, useRef, useState } from 'react';
import { PenTool, Heart } from 'lucide-react';

const LoveLetterSection = () => {
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
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px]" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <PenTool className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            A <span className="text-gold">Love Letter</span> For You
          </h2>
        </div>
        
        {/* Letter container */}
        <div 
          className={`relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gold/30 shadow-gold transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gold/50" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-gold/50" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-gold/50" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gold/50" />
          
          {/* Letter content */}
          <div className="space-y-6 text-center">
            <p className="font-script text-2xl sm:text-3xl text-rose">
              My Dearest Lydia,
            </p>
            
            <div className="space-y-4 font-script text-xl sm:text-2xl text-foreground/90 leading-relaxed">
              <p>
                I know you say you don't believe in love.
              </p>
              <p>
                And that's okay. I'm not here to convince you with words.
              </p>
              <p>
                I'm here to show you with <span className="text-primary">patience</span>,
                with <span className="text-gold">respect</span>,
                and with <span className="text-secondary">actions</span> that speak louder than any promise.
              </p>
              <p>
                This isn't pressure. This isn't a game.
              </p>
              <p>
                This is me, a Luo man who found magic in a Kikuyu woman,
                willing to wait until you're ready.
              </p>
            </div>
            
            <div className="pt-6">
              <Heart className="w-8 h-8 text-primary fill-primary mx-auto mb-4" />
              <p className="font-script text-2xl sm:text-3xl text-gold">
                "I'm not here to convince you about love…
              </p>
              <p className="font-script text-2xl sm:text-3xl text-primary mt-2">
                I'm here to show you."
              </p>
            </div>
            
            <p className="font-script text-xl text-muted-foreground pt-4">
              Forever waiting,
              <br />
              <span className="text-foreground">Your Person</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetterSection;