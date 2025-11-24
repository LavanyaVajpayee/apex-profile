const matchups = [
  { name: "HARDIK PANDYA", percentage: 75, color: "bg-green-500" },
  { name: "ROHIT SHARMA", percentage: 95, color: "bg-neon-cyan" },
  { name: "KL RAHUL", percentage: 65, color: "bg-yellow-500" },
  { name: "BEN STOKES", percentage: 40, color: "bg-orange-500" },
  { name: "JOE ROOT", percentage: 30, color: "bg-red-500" },
];

const PlayerMatchup = () => {
  return (
    <div className="neo-card p-6 space-y-6">
      <h2 className="text-2xl font-display font-black tracking-tight text-foreground">
        PLAYER MATCHUP
      </h2>
      <div className="space-y-4">
        {matchups.map((player, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-silver tracking-wide">
                {player.name}
              </span>
              <span className="text-sm font-bold text-neon-cyan">
                {player.percentage}%
              </span>
            </div>
            <div className="h-3 bg-muted rounded-full neo-inset overflow-hidden">
              <div
                className={`h-full ${player.color} transition-all duration-1000 ease-out`}
                style={{ 
                  width: `${player.percentage}%`,
                  boxShadow: `0 0 8px ${player.color === 'bg-neon-cyan' ? 'hsl(var(--neon-cyan) / 0.6)' : 'currentColor'}`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerMatchup;
