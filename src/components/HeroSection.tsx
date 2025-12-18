import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      // Attempt to play automatically
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(error => {
          console.log("Autoplay prevented:", error);
          setIsPlaying(false);
        });
      }
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-secondary/20 blur-[100px] z-0" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        {/* Sparkle decorations */}
        <Sparkles className="absolute -top-8 left-1/4 w-8 h-8 text-gold animate-sparkle" style={{ animationDelay: '0s' }} />
        <Sparkles className="absolute top-0 right-1/4 w-6 h-6 text-gold animate-sparkle" style={{ animationDelay: '0.5s' }} />
        <Sparkles className="absolute -bottom-4 left-1/3 w-5 h-5 text-gold animate-sparkle" style={{ animationDelay: '1s' }} />

        {/* Main title */}
        <h1 className="font-display text-3xl sm:text-5xl md:text-7xl font-bold text-glow animate-pulse-glow mb-4 sm:mb-6">
          <span className="text-primary">Merry Christmas</span>
          <br />
          <span className="text-foreground">&</span>
          <br />
          <span className="text-gold text-glow-gold">Happy New Year</span>
          <br />
          <span className="text-secondary">Lydia</span>
          <Heart className="inline-block w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-primary fill-primary ml-2 animate-float" />
        </h1>

        {/* Subtitle */}
        <p className="font-script text-2xl sm:text-3xl md:text-4xl text-rose mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          From someone who met you by chance… and stayed by choice.
        </p>

        {/* Photo placeholder */}
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-10 rounded-full overflow-hidden shadow-glow animate-glow-pulse">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30" />
          <img
            src="/images/Lydiah1.jpg"
            alt="Beautiful Lydia"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Music button */}
        <Button
          onClick={toggleMusic}
          variant="romantic"
          size="lg"
          className="group"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 mr-2" />
          ) : (
            <Play className="w-5 h-5 mr-2" />
          )}
          {isPlaying ? "Pause Our Song" : "Play Our Song 🎵"}
        </Button>

        <audio ref={audioRef} loop>
          <source src="/wari-wakwa.mp4" type="audio/mp4" />
        </audio>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;