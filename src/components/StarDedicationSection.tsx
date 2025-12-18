import React, { useEffect, useState } from 'react';
import { Star, Sparkles, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const StarDedicationSection = () => {
  const [isStarClicked, setIsStarClicked] = useState(false);

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-[#050505]">
      {/* Starry Background */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
        {/* Nebulas */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px] -z-10" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[150px] -z-10" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-16">
          <Star className="w-12 h-12 text-gold mx-auto mb-4 animate-pulse" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Under the Same <span className="text-gold">Sky</span>
          </h2>
          <p className="font-script text-2xl text-gold/70">
            Even when miles apart, we look at the same stars...
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div
            onClick={() => setIsStarClicked(!isStarClicked)}
            className="relative cursor-pointer group"
          >
            {/* The Main Star: Lydia */}
            <div className="relative z-20">
              <Star
                className={cn(
                  "w-24 h-24 text-gold fill-gold transition-all duration-1000",
                  isStarClicked ? "scale-125 rotate-180 drop-shadow-[0_0_30px_rgba(255,215,0,0.8)]" : "animate-pulse"
                )}
              />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-display text-gold tracking-widest text-sm uppercase">
                The Lydia Star
              </span>
            </div>

            {/* Orbiting particles */}
            <div className={cn(
              "absolute inset-0 flex items-center justify-center transition-all duration-1000",
              isStarClicked ? "scale-150 opacity-100" : "scale-50 opacity-0"
            )}>
              <Sparkles className="w-48 h-48 text-gold/30 animate-spin-slow" />
            </div>

            {/* Glowing rings */}
            <div className={cn(
              "absolute inset-0 rounded-full border border-gold/20 transition-all duration-1000",
              isStarClicked ? "scale-[2] opacity-0" : "scale-100 opacity-100"
            )} />
            <div className={cn(
              "absolute inset-0 rounded-full border border-gold/10 transition-all duration-1000 delay-100",
              isStarClicked ? "scale-[2.5] opacity-0" : "scale-125 opacity-100"
            )} />
          </div>

          <div className={cn(
            "mt-24 bg-white/5 backdrop-blur-md border border-white/10 p-8 sm:p-12 rounded-3xl max-w-2xl transition-all duration-1000 transform",
            isStarClicked ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
          )}>
            <Heart className="w-8 h-8 text-primary fill-primary mx-auto mb-6" />
            <p className="font-display text-2xl md:text-3xl text-white mb-6 leading-relaxed">
              "Lydia, I've officially named this star after you."
            </p>
            <p className="font-script text-2xl text-gold">
              Because even on the darkest nights, you are the light that guides me back home. No matter how far Qatar is from Kenya, we are always under the same sky.
            </p>
            <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center text-gold/50 font-display text-xs tracking-tighter uppercase">
              <span>Coordinates: RA 13h 25m 12s | Dec -11°</span>
              <span>Registered: Forever</span>
            </div>
          </div>

          {!isStarClicked && (
            <p className="mt-8 text-white/40 animate-bounce font-display text-sm tracking-widest">
              CLICK THE STAR TO REVEAL DEDICATION
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default StarDedicationSection;
