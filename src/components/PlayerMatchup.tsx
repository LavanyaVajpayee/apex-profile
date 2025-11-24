const matchups = [
  { name: "HARDIK PANDYA", percentage: 75, color: "hsl(var(--neon-cyan))" },
  { name: "ROHIT SHARMA", percentage: 95, color: "hsl(var(--neon-blue))" },
  { name: "KL RAHUL", percentage: 65, color: "hsl(var(--neon-cyan))" },
  { name: "BEN STOKES", percentage: 40, color: "hsl(var(--neon-purple))" },
  { name: "JOE ROOT", percentage: 30, color: "hsl(var(--neon-magenta))" },
];

const PlayerMatchup = () => {
  return (
    <div className="neo-card p-6 space-y-6">
      <h2 className="text-2xl font-display font-black tracking-tight text-foreground">
        PLAYER MATCHUP
      </h2>
      <div className="flex items-end justify-between gap-4 h-64">
        {matchups.map((player, index) => (
          <div key={index} className="flex flex-col items-center gap-2 flex-1">
            <div className="flex-1 w-full flex flex-col justify-end">
              <div
                className="w-full transition-all duration-1000 ease-out rounded-t-md relative"
                style={{
                  height: `${player.percentage}%`,
                  backgroundColor: player.color,
                  boxShadow: `0 0 20px ${player.color}40`,
                }}
              >
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-bold whitespace-nowrap"
                  style={{ color: player.color }}>
                  {player.percentage}%
                </span>
              </div>
            </div>
            <span className="text-[10px] font-bold text-silver tracking-wide text-center transform -rotate-45 origin-center mt-4 whitespace-nowrap">
              {player.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerMatchup;
