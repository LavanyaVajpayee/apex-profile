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
        <h1 className="text-7xl font-display font-black tracking-tight mb-4">
          <span className="text-silver" style={{ textShadow: '0 0 20px hsl(var(--silver) / 0.6)' }}>VIRAT </span>
          <span className="text-neon-magenta" style={{ textShadow: '0 0 20px hsl(var(--neon-magenta) / 0.8)' }}>KOHLI</span>
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
        <div className="h-3 bg-muted rounded-full neo-inset overflow-hidden relative">
          <div 
            className="h-full bg-gradient-to-r from-neon-magenta to-neon-purple transition-all duration-1000 ease-out relative"
            style={{ 
              width: xpFilled ? '72%' : '0%',
              boxShadow: '0 0 10px hsl(var(--neon-magenta) / 0.6)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-neon-magenta">
            {xpFilled ? '72%' : '0%'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlayerHeader;
