import { useState } from 'react';
import { Mail, X, Heart, Sparkles } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const letters = [
  {
    id: 1,
    label: "Open when you miss me...",
    content: "Whenever you miss me, just remember that I'm missing you too, probably twice as much. Close your eyes, and I'm right there with you. ❤️",
    color: "bg-rose-100"
  },
  {
    id: 2,
    label: "Open when you're sad...",
    content: "I hate that you're sad, but it's okay to feel this way. Remember your smile lights up my world. Sending you the biggest virtual hug right now! 🫂",
    color: "bg-blue-100"
  },
  {
    id: 3,
    label: "Open when you need a laugh...",
    content: "Why did the scarecrow win an award? Because he was outstanding in his field! 😂 (I promise my jokes will get better by March!)",
    color: "bg-yellow-100"
  },
  {
    id: 4,
    label: "Open when you doubt us...",
    content: "Distance is just a test to see how far love can travel. We are stronger than the miles between us. I'm not going anywhere. 🔒",
    color: "bg-purple-100"
  },
  {
    id: 5,
    label: "Open when you're happy...",
    content: "Yesss! I love seeing you happy! Your happiness is my favorite thing in the world. Save this feeling! ✨",
    color: "bg-green-100"
  },
  {
    id: 6,
    label: "Open when it's cold...",
    content: "Imagine me wrapping my arms around you and holding you tight. Warm yet? 🔥",
    color: "bg-orange-100"
  }
];

const OpenWhenSection = () => {
  const [selectedLetter, setSelectedLetter] = useState<typeof letters[0] | null>(null);

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-background to-card/30">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-gold/5 blur-[80px] -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Mail className="w-12 h-12 text-gold mx-auto mb-4 animate-float" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Open <span className="text-primary">When...</span>
          </h2>
          <p className="font-script text-2xl text-muted-foreground">
            Little reminders for every mood
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {letters.map((letter) => (
            <div
              key={letter.id}
              onClick={() => setSelectedLetter(letter)}
              className="group cursor-pointer relative"
            >
              <div className="aspect-[4/3] bg-card/40 backdrop-blur-sm rounded-2xl border border-border/50 shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-glow group-hover:border-primary/30 flex items-center justify-center p-6 sm:p-8 text-center overflow-hidden">
                {/* Decorative background heart */}
                <Heart className="absolute -right-4 -bottom-4 w-20 sm:w-24 h-20 sm:h-24 text-primary/5 transform rotate-12 transition-transform group-hover:scale-125" />

                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-colors group-hover:bg-primary/20">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-foreground/90 group-hover:text-primary transition-colors">{letter.label}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedLetter} onOpenChange={() => setSelectedLetter(null)}>
          <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-md border-primary/20 text-center p-12">
            <DialogHeader>
              <DialogTitle className="font-display text-3xl text-primary flex items-center justify-center gap-3">
                <Heart className="w-6 h-6 fill-current animate-pulse" />
                {selectedLetter?.label}
                <Heart className="w-6 h-6 fill-current animate-pulse" />
              </DialogTitle>
            </DialogHeader>
            <div className="py-8 relative">
              <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-gold animate-sparkle" />
              <p className="font-script text-3xl text-foreground leading-relaxed italic">
                "{selectedLetter?.content}"
              </p>
            </div>
            <div className="flex justify-center pt-4">
              <button
                onClick={() => setSelectedLetter(null)}
                className="font-display text-sm uppercase tracking-widest text-muted-foreground hover:text-gold transition-colors"
              >
                Close & Save for later
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default OpenWhenSection;
