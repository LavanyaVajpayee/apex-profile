import { Trophy, Zap, Target, Crown, Heart } from "lucide-react";

const badges = [
  { icon: Trophy, label: "CHASE MASTER", color: "text-yellow-400" },
  { icon: Zap, label: "MOMENTUM BUILDER", color: "text-neon-cyan" },
  { icon: Target, label: "PRESSURE SLAYER", color: "text-red-500" },
  { icon: Crown, label: "KING'S FOCUS", color: "text-purple-400" },
  { icon: Heart, label: "FITNESS BEAST", color: "text-green-400" },
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
              className="neo-card p-4 flex flex-col items-center gap-2 group hover:scale-105 transition-transform cursor-pointer"
              style={{
                clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                width: "100px",
                height: "100px",
              }}
            >
              <Icon className={`w-8 h-8 ${badge.color} group-hover:scale-110 transition-transform`} />
              <span className="text-[9px] font-bold text-center leading-tight tracking-tight text-foreground">
                {badge.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementBadges;
