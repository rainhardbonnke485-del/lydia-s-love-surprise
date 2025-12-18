import { useState, useRef, useEffect } from 'react';
import { Flame, Lock, Zap, Heart, Sparkles, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const naughtyStaff = [
  {
    id: 1,
    title: "The 'Nasty' Pass",
    description: "Good for one full night of unrestrained indulgence. I verify everything you want.",
    icon: Flame,
    flavor: "No rules. No limits. Just us."
  },
  {
    id: 2,
    title: "Midnight Caress",
    description: "Every inch of your beautiful body, worshipped with slow, deep kisses.",
    icon: Sparkles,
    flavor: "I've been dreaming of this since Qatar."
  },
  {
    id: 3,
    title: "The Surprise Package",
    description: "I have something very special waiting for you in March. You'll be begging for more.",
    icon: Lock,
    flavor: "A Luo man knows how to treat his Kikuyu queen."
  },
  {
    id: 4,
    title: "Wari Wakwa Vibes",
    description: "Dancing close while our song plays... then taking it to the bedroom and give you some spooning.",
    icon: Zap,
    flavor: "Fast or slow, it's all about you."
  }
];

const NaughtyCorner = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [redeemed, setRedeemed] = useState<number[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleUnlock = () => setIsUnlocked(!isUnlocked);

  const handleRedeem = (id: number) => {
    if (redeemed.includes(id)) return;
    setRedeemed([...redeemed, id]);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-transparent">
      {/* Background Video - Always playing in background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90 transition-opacity duration-1000"
        >
          <source src="/images/lethabomwepu_2000833051631276314.mp4" type="video/mp4" />
        </video>

        {/* Subtler Overlays for maximum clarity while maintaining text readability */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-tr from-crimson/10 via-transparent to-primary/5" />
      </div>

      {/* Decorative glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-crimson/5 blur-[150px] -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-4">
            <Lock className={cn("w-12 h-12 transition-all duration-500", isUnlocked ? "text-primary opacity-0 scale-50" : "text-gold")} />
            <Flame className={cn("absolute inset-0 w-12 h-12 text-primary transition-all duration-500", isUnlocked ? "opacity-100 scale-110" : "opacity-0 scale-50")} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary italic">Naughty</span> Corner
          </h2>
          <p className="font-script text-2xl text-muted-foreground max-w-xl mx-auto">
            "For the naughty and nasty queen who stole my heart... and my sanity." ❤️🔥
          </p>
        </div>

        {!isUnlocked ? (
          <div className="flex justify-center">
            <div className="bg-card/40 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-border/50 text-center max-w-md shadow-glow hover:border-primary/30 transition-all group">
              <EyeOff className="w-10 h-10 sm:w-12 sm:h-12 text-muted-foreground mx-auto mb-6 group-hover:text-primary transition-colors" />
              <h3 className="font-display text-xl sm:text-2xl mb-4 text-foreground/90">Curiosity killed the cat...</h3>
              <p className="text-muted-foreground mb-8 text-xs sm:text-sm">But satisfaction brought it back. Are you ready for the naughty truth?</p>
              <Button
                onClick={toggleUnlock}
                className="bg-primary hover:bg-crimson text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 font-display text-base sm:text-lg tracking-widest shadow-glow w-full sm:w-auto"
              >
                UNLOCK THE FIRE 🔥
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 animate-fade-in-up">
            {naughtyStaff.map((item) => (
              <div
                key={item.id}
                onClick={() => handleRedeem(item.id)}
                className={cn(
                  "relative group cursor-pointer bg-card/60 backdrop-blur-sm rounded-2xl border border-primary/20 p-6 sm:p-8 transition-all duration-500 hover:shadow-glow hover:border-primary/50",
                  redeemed.includes(item.id) ? "border-primary bg-primary/5" : ""
                )}
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 transition-all group-hover:bg-primary/20 group-hover:rotate-6">
                    <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed mb-4 italic">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-gold fill-gold" />
                      <span className="font-script text-base sm:text-lg text-gold">{item.flavor}</span>
                    </div>
                  </div>
                </div>

                {redeemed.includes(item.id) && (
                  <div className="absolute top-4 right-4 animate-bounce">
                    <Heart className="w-6 h-6 text-primary fill-primary" />
                  </div>
                )}

                {/* Decorative glow */}
                <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        )}

        {isUnlocked && (
          <div className="text-center mt-12">
            <button
              onClick={toggleUnlock}
              className="font-display text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2 mx-auto"
            >
              <Eye className="w-4 h-4" /> Hide our secrets
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NaughtyCorner;
