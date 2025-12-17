import { useEffect, useState, useRef } from 'react';
import { MessageCircle, Heart, Video, Moon } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'her' | 'me';
  delay: number;
}

const messages: Message[] = [
  { id: 1, text: "Hey, I saw your profile on Telegram 👀", sender: 'me', delay: 0 },
  { id: 2, text: "Oh? And what made you message me? 😏", sender: 'her', delay: 0.5 },
  { id: 3, text: "Something about your smile... couldn't resist", sender: 'me', delay: 1 },
  { id: 4, text: "Smooth talker from Qatar 🇶🇦", sender: 'her', delay: 1.5 },
  { id: 5, text: "This Luo man sees something special in this Kikuyu woman 🇰🇪", sender: 'me', delay: 2 },
  { id: 6, text: "Video call tonight?", sender: 'me', delay: 2.5 },
  { id: 7, text: "Fine... but I don't believe in love, remember that", sender: 'her', delay: 3 },
  { id: 8, text: "Yet... you don't believe in love YET ❤️", sender: 'me', delay: 3.5 },
];

const OurStorySection = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            messages.forEach((msg, index) => {
              setTimeout(() => {
                setVisibleMessages((prev) => [...prev, msg.id]);
              }, index * 800);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="relative py-20 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[100px]" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <MessageCircle className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            How <span className="text-primary">Telegram</span> Changed Everything
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A chance connection across continents. Qatar 🇶🇦 to Kenya 🇰🇪. Distance meant nothing when hearts started talking.
          </p>
        </div>
        
        {/* Story highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 text-center hover:border-primary/50 transition-colors">
            <Video className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="font-display text-xl font-semibold mb-2">Video Calls</h3>
            <p className="text-muted-foreground text-sm">Hours of talking, laughing, and getting to know each other</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 text-center hover:border-gold/50 transition-colors">
            <Moon className="w-10 h-10 text-gold mx-auto mb-3" />
            <h3 className="font-display text-xl font-semibold mb-2">Late Nights</h3>
            <p className="text-muted-foreground text-sm">Different time zones couldn't keep us apart</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 text-center hover:border-secondary/50 transition-colors">
            <Heart className="w-10 h-10 text-secondary mx-auto mb-3" />
            <h3 className="font-display text-xl font-semibold mb-2">Love Knocking</h3>
            <p className="text-muted-foreground text-sm">She says she doesn't believe... but love found a way</p>
          </div>
        </div>
        
        {/* Chat animation */}
        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/30 max-w-lg mx-auto">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border/30">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Our Chat</p>
              <p className="text-xs text-muted-foreground">Where it all began...</p>
            </div>
          </div>
          
          <div className="space-y-4 min-h-[300px]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'} transition-all duration-500 ${
                  visibleMessages.includes(msg.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl ${
                    msg.sender === 'me'
                      ? 'bg-primary text-primary-foreground rounded-br-sm'
                      : 'bg-muted text-foreground rounded-bl-sm'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;