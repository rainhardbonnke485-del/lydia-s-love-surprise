import { useState } from 'react';
import { Ticket, Utensils, Moon, Coffee, Music, Check, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const coupons = [
  {
    id: 1,
    title: "Candlelit Dinner",
    description: "One homemade dinner date, cooked with love by me.",
    icon: Utensils,
    color: "bg-rose-50 border-rose-200 text-rose-600"
  },
  {
    id: 2,
    title: "Late Night Drive",
    description: "Playlist ready, windows down, just us cruising.",
    icon: Moon,
    color: "bg-indigo-50 border-indigo-200 text-indigo-600"
  },
  {
    id: 3,
    title: "Coffee Date",
    description: "My treat. Any cafe you want. Endless conversation.",
    icon: Coffee,
    color: "bg-amber-50 border-amber-200 text-amber-700"
  },
  {
    id: 4,
    title: "Private Concert",
    description: "I'll sing for you (badly) or we dance in the living room.",
    icon: Music,
    color: "bg-purple-50 border-purple-200 text-purple-600"
  },
  {
    id: 5,
    title: "Yes Day",
    description: "I verify everything you want to do for 24 hours.",
    icon: Check,
    color: "bg-emerald-50 border-emerald-200 text-emerald-600"
  },
  {
    id: 6,
    title: "Full Body Massage",
    description: "Relax and unwind. No time limit. Pure bliss.",
    icon: Ticket,
    color: "bg-pink-50 border-pink-200 text-pink-600"
  }
];

const DateNightCouponsSection = () => {
  const [redeemed, setRedeemed] = useState<number[]>([]);

  const handleRedeem = (id: number) => {
    if (redeemed.includes(id)) return;

    setRedeemed([...redeemed, id]);
    toast.success("Coupon Redeemed! ❤️", {
      description: "Screenshot this and send it to me to claim!",
      duration: 5000,
    });
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-card/30 to-background">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[100px] -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Ticket className="w-12 h-12 text-gold mx-auto mb-4 rotate-[-10deg] animate-float" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Date Night <span className="text-secondary">Coupons</span>
          </h2>
          <p className="font-script text-2xl text-muted-foreground">
            Valid forever. Non-transferable. Redeemable with love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coupons.map((coupon) => {
            const Icon = coupon.icon;
            const isRedeemed = redeemed.includes(coupon.id);

            return (
              <div
                key={coupon.id}
                onClick={() => handleRedeem(coupon.id)}
                className={cn(
                  "relative group cursor-pointer transition-all duration-500 transform hover:-translate-y-2",
                  isRedeemed ? "opacity-60 grayscale" : "opacity-100"
                )}
              >
                {/* Coupon visuals */}
                <div className="relative overflow-hidden rounded-2xl border border-border/50 p-8 h-full flex flex-col items-center text-center bg-card/40 backdrop-blur-sm shadow-sm transition-all group-hover:shadow-glow group-hover:border-secondary/30">
                  {/* Decorative line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

                  {/* Cutout circles */}
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background border-r border-border/50" />
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background border-l border-border/50" />

                  <div className="flex-1">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-secondary/20 transition-colors">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>

                    <h3 className="font-display text-2xl font-bold mb-3 text-foreground/90 group-hover:text-secondary transition-colors">{coupon.title}</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                      {coupon.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-border/30 w-full flex items-center justify-between">
                    <span className="font-display text-xs uppercase tracking-widest text-muted-foreground">
                      {isRedeemed ? "CLAIMED" : "REDEEMABLE"}
                    </span>
                    <Heart className={cn("w-4 h-4 transition-all", isRedeemed ? "text-primary fill-primary" : "text-muted-foreground")} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DateNightCouponsSection;
