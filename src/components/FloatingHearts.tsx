import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  left: number;
  delay: number;
  size: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const newHearts: FloatingHeart[] = [];
    for (let i = 0; i < 15; i++) {
      newHearts.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 15,
        size: 16 + Math.random() * 24,
      });
    }
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute animate-heart-float text-primary fill-primary opacity-60"
          style={{
            left: `${heart.left}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${8 + Math.random() * 8}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;