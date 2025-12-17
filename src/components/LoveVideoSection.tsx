import { useState } from 'react';
import { Play, Heart, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LoveVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <Music className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">
            Our Love Song 🎵
          </h2>
          <p className="font-script text-2xl text-secondary">
            Every love story has a soundtrack...
          </p>
        </div>

        {/* Video Container */}
        <div className="relative group">
          <div className="aspect-video rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 bg-card">
            {/* Replace this src with your actual video URL or embed */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative">
              {!isPlaying ? (
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/90 flex items-center justify-center mx-auto mb-6 cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/50 group-hover:animate-pulse"
                    onClick={() => setIsPlaying(true)}>
                    <Play className="w-12 h-12 text-primary-foreground ml-2" />
                  </div>
                  <p className="text-foreground/80 font-display text-xl">Click to play our song</p>
                  <p className="text-muted-foreground text-sm mt-2">Add your video URL here</p>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/2Vv-BfVoq4g?autoplay=1"
                  title="Love Song"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>

          {/* Decorative hearts */}
          <Heart className="absolute -top-4 -left-4 w-8 h-8 text-primary animate-pulse" fill="currentColor" />
          <Heart className="absolute -bottom-4 -right-4 w-8 h-8 text-secondary animate-pulse" fill="currentColor" />
          <Heart className="absolute top-1/2 -right-6 w-6 h-6 text-accent animate-bounce" fill="currentColor" />
        </div>

        {/* Song suggestions */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Perfect - Ed Sheeran', 'All of Me - John Legend', 'Suzanna - Sauti Sol', 'These Arms - Otis'].map((song, i) => (
            <div key={i} className="bg-card/50 backdrop-blur-sm rounded-xl p-4 text-center border border-primary/20 hover:border-primary/50 transition-colors cursor-pointer hover:scale-105 transform duration-300">
              <Music className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-sm text-foreground/80">{song}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveVideoSection;
