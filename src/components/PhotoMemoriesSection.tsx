import { useState } from 'react';
import { Heart, Camera } from 'lucide-react';

interface Photo {
  id: number;
  caption: string;
  hoverCaption: string;
}

const herPhotos: Photo[] = [
  { id: 1, caption: "Her Smile", hoverCaption: "The smile that melts me ❤️" },
  { id: 2, caption: "Beautiful Lydia", hoverCaption: "My Kikuyu queen 👑" },
  { id: 3, caption: "Her Light", hoverCaption: "She lights up my world ✨" },
];

const myPhotos: Photo[] = [
  { id: 1, caption: "Me", hoverCaption: "The man waiting for February 🛫" },
  { id: 2, caption: "My Heart", hoverCaption: "Ready to give it all ❤️" },
];

const PhotoMemoriesSection = () => {
  const [hoveredHer, setHoveredHer] = useState<number | null>(null);
  const [hoveredMe, setHoveredMe] = useState<number | null>(null);

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-background to-card/30">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-gold/10 blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <Camera className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Photo <span className="text-secondary">Memories</span>
          </h2>
          <p className="text-muted-foreground text-lg">Moments captured, feelings eternal</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Her card */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-secondary/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Heart className="w-6 h-6 text-secondary fill-secondary" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">Her</h3>
                <p className="text-muted-foreground text-sm">The one who stole my heart</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {herPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className={`relative overflow-hidden rounded-xl aspect-square cursor-pointer group ${
                    index === 0 ? 'col-span-2' : ''
                  }`}
                  onMouseEnter={() => setHoveredHer(photo.id)}
                  onMouseLeave={() => setHoveredHer(null)}
                >
                  {/* Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/30 flex items-center justify-center">
                    <div className="text-center">
                      <Heart className="w-8 h-8 text-foreground/50 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <span className="text-foreground/70 text-sm font-display">{photo.caption}</span>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-background/90 flex items-center justify-center transition-all duration-300 ${
                    hoveredHer === photo.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <p className="text-foreground font-script text-xl text-center px-4">{photo.hoverCaption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* My card */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-gold/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <Heart className="w-6 h-6 text-gold fill-gold" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">Me</h3>
                <p className="text-muted-foreground text-sm">The one who found his heart</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {myPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="relative overflow-hidden rounded-xl aspect-square cursor-pointer group"
                  onMouseEnter={() => setHoveredMe(photo.id)}
                  onMouseLeave={() => setHoveredMe(null)}
                >
                  {/* Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-primary/30 flex items-center justify-center">
                    <div className="text-center">
                      <Heart className="w-8 h-8 text-foreground/50 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <span className="text-foreground/70 text-sm font-display">{photo.caption}</span>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-background/90 flex items-center justify-center transition-all duration-300 ${
                    hoveredMe === photo.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <p className="text-foreground font-script text-xl text-center px-4">{photo.hoverCaption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoMemoriesSection;