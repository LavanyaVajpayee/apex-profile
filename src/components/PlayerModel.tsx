import { RotateCw } from "lucide-react";

const PlayerModel = () => {
  return (
    <div className="neo-card p-8 h-[600px] flex flex-col items-center justify-center relative group">
      {/* Orbit Controls Indicator */}
      <div className="absolute top-4 right-4 flex items-center gap-2 text-muted-foreground">
        <RotateCw className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} />
        <span className="text-xs font-semibold tracking-wide">ORBIT CONTROLS</span>
      </div>

      {/* Placeholder */}
      <div className="w-full h-full border-2 border-dashed border-border/50 rounded-lg flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 flex items-center justify-center">
            <span className="text-4xl">🏏</span>
          </div>
          <div>
            <p className="text-lg font-display font-bold text-neon-cyan">3D MODEL</p>
            <p className="text-sm text-muted-foreground">Placeholder</p>
          </div>
        </div>
      </div>

      {/* Grid Lines for 3D Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </div>
  );
};

export default PlayerModel;
