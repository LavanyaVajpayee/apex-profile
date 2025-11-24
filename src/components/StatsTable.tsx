import { Button } from "@/components/ui/button";

const stats = [
  { label: "Matches", value: "254" },
  { label: "Runs", value: "12,344" },
  { label: "Average", value: "58.07" },
  { label: "Strike Rate", value: "93.54" },
  { label: "Centuries", value: "43" },
  { label: "Fifties", value: "62" },
];

const StatsTable = () => {
  return (
    <div className="neo-card p-6 space-y-6">
      <h2 className="text-2xl font-display font-black tracking-tight text-foreground">
        STATS
      </h2>
      <div className="space-y-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 border-b border-border/30 last:border-0"
          >
            <span className="text-sm font-semibold text-silver tracking-wide">
              {stat.label}
            </span>
            <span className="text-lg font-bold text-neon-cyan">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-4">
        <Button 
          variant="outline" 
          className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background font-bold tracking-wider shadow-[0_0_10px_rgba(0,234,255,0.3)] hover:shadow-[0_0_20px_rgba(0,234,255,0.6)] transition-all"
        >
          FULL SEASON RESULT
        </Button>
      </div>
    </div>
  );
};

export default StatsTable;
