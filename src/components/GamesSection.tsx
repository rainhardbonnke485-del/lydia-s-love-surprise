import { useState } from 'react';
import { Heart, Sparkles, Star, Gift, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const GamesSection = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [spinResult, setSpinResult] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const loveCards = [
    { id: 1, emoji: '❤️', pair: 1 },
    { id: 2, emoji: '💕', pair: 2 },
    { id: 3, emoji: '💖', pair: 3 },
    { id: 4, emoji: '❤️', pair: 1 },
    { id: 5, emoji: '💕', pair: 2 },
    { id: 6, emoji: '💖', pair: 3 },
  ];

  const wheelOptions = [
    "I'll cook for you 👨‍🍳",
    "Netflix & cuddles 🎬",
    "Dance with me 💃",
    "Kiss attack! 💋",
    "Morning coffee date ☕",
    "Write you a poem 📝",
    "Spa day together 💆",
    "Stargazing night 🌟",
  ];

  const handleCardFlip = (id: number) => {
    if (flippedCards.length === 2 || matchedPairs.includes(id) || flippedCards.includes(id)) return;
    
    const newFlipped = [...flippedCards, id];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      const card1 = loveCards.find(c => c.id === first);
      const card2 = loveCards.find(c => c.id === second);
      
      if (card1?.pair === card2?.pair) {
        setMatchedPairs([...matchedPairs, first, second]);
        setFlippedCards([]);
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setSpinResult(null);
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * wheelOptions.length);
      setSpinResult(wheelOptions[randomIndex]);
      setIsSpinning(false);
    }, 2000);
  };

  const resetGame = () => {
    setFlippedCards([]);
    setMatchedPairs([]);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Sparkles className="w-12 h-12 text-accent mx-auto mb-4 animate-pulse" />
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">
            Let's Play Together 🎮
          </h2>
          <p className="font-script text-2xl text-secondary">
            Fun games for two hearts...
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Memory Match Game */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
            <h3 className="font-display text-2xl text-primary mb-6 flex items-center gap-2">
              <Heart className="w-6 h-6" fill="currentColor" />
              Love Memory Match
            </h3>
            
            <div className="grid grid-cols-3 gap-3 mb-6">
              {loveCards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => handleCardFlip(card.id)}
                  className={`aspect-square rounded-xl cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                    flippedCards.includes(card.id) || matchedPairs.includes(card.id)
                      ? 'bg-gradient-to-br from-primary/30 to-secondary/30 rotate-0'
                      : 'bg-gradient-to-br from-primary to-secondary rotate-y-180'
                  } flex items-center justify-center text-4xl border-2 border-primary/30 shadow-lg`}
                >
                  {flippedCards.includes(card.id) || matchedPairs.includes(card.id) 
                    ? card.emoji 
                    : '💝'}
                </div>
              ))}
            </div>

            {matchedPairs.length === 6 && (
              <div className="text-center animate-fade-in">
                <p className="text-accent font-display text-xl mb-4">You won! Just like you won my heart! 💖</p>
                <Button variant="romantic" onClick={resetGame}>Play Again</Button>
              </div>
            )}
          </div>

          {/* Love Wheel */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
            <h3 className="font-display text-2xl text-primary mb-6 flex items-center gap-2">
              <Gift className="w-6 h-6" />
              Spin the Love Wheel
            </h3>
            
            <div className="relative flex flex-col items-center">
              <div className={`w-48 h-48 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mb-6 shadow-xl shadow-primary/30 ${isSpinning ? 'animate-spin' : ''}`}>
                <div className="w-40 h-40 rounded-full bg-card flex items-center justify-center">
                  <Star className="w-16 h-16 text-accent animate-pulse" fill="currentColor" />
                </div>
              </div>
              
              <Button variant="romantic" onClick={spinWheel} disabled={isSpinning} className="mb-4">
                {isSpinning ? 'Spinning...' : 'Spin for Love!'} 💫
              </Button>

              {spinResult && (
                <div className="animate-fade-in text-center bg-primary/10 rounded-xl p-4 border border-primary/30">
                  <p className="text-foreground font-display text-lg">{spinResult}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to action - Love Quiz */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl p-8 border border-primary/30 max-w-2xl mx-auto">
            <h3 className="font-display text-3xl text-primary mb-4">Ready for the Ultimate Test? 💕</h3>
            <p className="text-foreground/80 mb-6">Take our special love quiz and discover how well we connect...</p>
            <Link to="/love-quiz">
              <Button variant="romantic" size="lg" className="group">
                Start Love Quiz 
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
