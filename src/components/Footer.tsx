import { Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 overflow-hidden bg-gradient-to-b from-background to-card/50">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/10 blur-[100px]" />
      
      <div className="max-w-2xl mx-auto relative z-10 text-center">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
          <Sparkles className="w-6 h-6 text-gold" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
        </div>
        
        {/* Main text */}
        <p className="font-script text-xl sm:text-2xl text-rose mb-4">
          From a Luo man who found magic in a Kikuyu woman
        </p>
        
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-gold" />
          <Heart className="w-6 h-6 text-primary fill-primary animate-pulse" />
          <Sparkles className="w-5 h-5 text-gold" />
        </div>
        
        {/* Year */}
        <p className="text-muted-foreground text-sm mb-2">
          Christmas & New Year 2024/2025
        </p>
        
        {/* Made with love */}
        <p className="text-muted-foreground text-xs flex items-center justify-center gap-1">
          Made with <Heart className="w-3 h-3 text-primary fill-primary" /> for Lydia
        </p>
      </div>
    </footer>
  );
};

export default Footer;