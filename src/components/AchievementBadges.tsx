import { Trophy, Zap, Target, Crown, Heart } from "lucide-react";

const badges = [
  { icon: Trophy, label: "CHASE MASTER", color: "text-yellow-400", glow: "rgba(251, 191, 36, 0.4)" },
  { icon: Zap, label: "MOMENTUM BUILDER", color: "text-neon-magenta", glow: "rgba(320, 100%, 65%, 0.4)" },
  { icon: Target, label: "PRESSURE SLAYER", color: "text-red-500", glow: "rgba(239, 68, 68, 0.4)" },
  { icon: Crown, label: "KING'S FOCUS", color: "text-neon-purple", glow: "rgba(280, 100%, 70%, 0.4)" },
  { icon: Heart, label: "FITNESS BEAST", color: "text-green-400", glow: "rgba(74, 222, 128, 0.4)" },
];

const AchievementBadges = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        {badges.map((badge, index) => {
          const Icon = badge.icon;
          return (
            <div
              key={index}
              className="neo-card p-4 flex flex-col items-center gap-2 group hover:scale-105 transition-all cursor-pointer relative overflow-hidden"
              style={{
                clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                width: "100px",
                height: "100px",
                background: `linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--card)) 100%)`,
              }}
            >
              {/* Animated gradient overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, ${badge.glow} 50%, transparent 100%)`,
                  animation: 'slideGradient 0.8s ease-in-out',
                }}
              />
              
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"
                style={{
                  background: badge.glow,
                }}
              />
              
              <div className="relative z-10 flex flex-col items-center gap-2">
                <Icon className={`w-8 h-8 ${badge.color} group-hover:scale-110 transition-transform drop-shadow-lg`} />
                <span className="text-[9px] font-bold text-center leading-tight tracking-tight text-foreground">
                  {badge.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <style>{`
        @keyframes slideGradient {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default AchievementBadges;
