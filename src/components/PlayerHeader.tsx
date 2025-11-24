import { useEffect, useState } from "react";

const PlayerHeader = () => {
  const [xpFilled, setXpFilled] = useState(false);

  useEffect(() => {
    setTimeout(() => setXpFilled(true), 100);
  }, []);

  return (
    <div className="space-y-6">
      {/* Player Name */}
      <div>
        <h1 className="text-7xl font-display font-black tracking-tight text-foreground mb-4">
          VIRAT KOHLI
        </h1>
        <div className="space-y-1">
          <p className="text-lg font-bold text-silver tracking-wide">ALL-ROUNDER</p>
          <p className="text-lg font-bold text-silver tracking-wide">TOP ORDER BATSMAN</p>
        </div>
      </div>

      {/* XP Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-muted-foreground tracking-wider">720 XP</span>
        </div>
        <div className="h-3 bg-muted rounded-full neo-inset overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-neon-cyan to-neon-blue transition-all duration-1000 ease-out relative"
            style={{ 
              width: xpFilled ? '72%' : '0%',
              boxShadow: '0 0 10px hsl(var(--neon-cyan) / 0.6)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerHeader;
