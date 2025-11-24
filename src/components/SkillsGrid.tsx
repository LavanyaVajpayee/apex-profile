import { Zap, Shield, Swords, Target, Flame, TrendingUp } from "lucide-react";

const skills = [
  { icon: Zap, label: "POWER HITTING", color: "text-yellow-400" },
  { icon: Shield, label: "DEFENSE", color: "text-blue-400" },
  { icon: Swords, label: "AGGRESSION", color: "text-red-500" },
  { icon: Flame, label: "TIMING", color: "text-orange-400" },
  { icon: TrendingUp, label: "SPEED", color: "text-green-400" },
  { icon: Target, label: "PRECISION", color: "text-neon-magenta" },
];

const SkillsGrid = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-display font-black tracking-tight text-foreground">
        SKILLS
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="neo-card p-6 skill-hover-effect cursor-pointer group relative overflow-hidden"
            >
              <div className="flex flex-col items-center gap-3 relative z-10">
                <div className="relative">
                  <Icon className={`w-12 h-12 ${skill.color} group-hover:scale-110 transition-transform stroke-[2.5]`} />
                  <div className={`absolute inset-0 ${skill.color} blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                </div>
                <span className="text-xs font-bold text-center text-silver tracking-wide">
                  {skill.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsGrid;
