import { Battery, Shield, Swords, Sparkles, Zap, Target } from "lucide-react";

const skills = [
  { icon: Battery, label: "POWER HITTING" },
  { icon: Shield, label: "DEFENSE" },
  { icon: Swords, label: "AGGRESSION" },
  { icon: Sparkles, label: "TIMING" },
  { icon: Zap, label: "SPEED" },
  { icon: Target, label: "PRECISION" },
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
              className="neo-card p-6 skill-hover-effect cursor-pointer group"
            >
              <div className="flex flex-col items-center gap-3">
                <Icon className="w-10 h-10 text-neon-cyan group-hover:scale-110 transition-transform" />
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
