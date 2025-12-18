import { useState } from 'react';
import { Heart, Calculator, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const LoveCalculatorSection = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    if (!name1 || !name2) return;

    setIsCalculating(true);
    setResult(null);

    // Fake calculation delay
    setTimeout(() => {
      setResult(100); // Always 100% ❤️
      setIsCalculating(false);
    }, 2000);
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-secondary/5">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <Calculator className="w-12 h-12 text-secondary mx-auto mb-4 animate-float" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Love <span className="text-secondary">Calculator</span>
          </h2>
          <p className="font-script text-2xl text-muted-foreground">
            Scientific proof that we are meant to be
          </p>
        </div>

        <div className="bg-card/40 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-border/50 shadow-soft max-w-2xl mx-auto relative overflow-hidden group">
          {/* Decorative glows */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors" />

          <div className="grid md:grid-cols-3 gap-8 items-center mb-10 relative z-10">
            <div className="space-y-3">
              <label className="font-display text-sm uppercase tracking-widest text-muted-foreground">Main Man</label>
              <Input
                placeholder="Name 1"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                className="text-center font-display text-xl bg-background/50 border-border/50 focus:border-secondary/50 h-14 rounded-xl"
              />
            </div>

            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center animate-pulse-glow">
                <Heart className="w-8 h-8 text-secondary fill-secondary" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="font-display text-sm uppercase tracking-widest text-muted-foreground">His Queen</label>
              <Input
                placeholder="Name 2"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                className="text-center font-display text-xl bg-background/50 border-border/50 focus:border-secondary/50 h-14 rounded-xl"
              />
            </div>
          </div>

          <Button
            onClick={handleCalculate}
            disabled={isCalculating || !name1 || !name2}
            className="w-full md:w-auto min-w-[240px] text-lg py-7 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-glow hover:scale-105 active:scale-95 transition-all group/btn"
          >
            {isCalculating ? (
              <span className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 animate-spin" /> Analyzing Connection...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Calculate Compatibility <Heart className="w-5 h-5 group-hover/btn:scale-125 transition-transform" />
              </span>
            )}
          </Button>

          {/* Result Display */}
          {result !== null && (
            <div className="mt-12 animate-fade-in-up space-y-6">
              <div className="relative inline-block">
                <span className="font-display text-8xl md:text-9xl font-bold text-glow">
                  {result}%
                </span>
                <Sparkles className="absolute -top-4 -right-8 w-10 h-10 text-gold animate-sparkle" />
              </div>

              <div className="bg-card/60 backdrop-blur-sm p-6 rounded-2xl border border-secondary/20 mx-auto max-w-md shadow-glow">
                <p className="font-script text-3xl text-foreground italic leading-relaxed">
                  "It's written in the stars... you're a perfect match! ❤️"
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoveCalculatorSection;
