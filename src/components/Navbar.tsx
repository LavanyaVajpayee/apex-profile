import { Globe, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Menu */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm font-bold tracking-wider text-muted-foreground hover:text-foreground transition-colors">
              NEWS
            </a>
            <a href="#" className="text-sm font-bold tracking-wider text-neon-cyan relative">
              HERO
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-cyan"></span>
            </a>
            <a href="#" className="text-sm font-bold tracking-wider text-muted-foreground hover:text-foreground transition-colors">
              GAME INFORMATION
            </a>
            <a href="#" className="text-sm font-bold tracking-wider text-muted-foreground hover:text-foreground transition-colors">
              ESPORTS
            </a>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <span className="text-2xl font-display font-black tracking-tighter text-neon-cyan neon-glow">
              ESPN
            </span>
          </div>

          {/* Right Menu */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
              <Globe className="w-4 h-4" />
              <span className="text-xs font-semibold">EN</span>
            </Button>
            <Button 
              size="sm" 
              className="bg-neon-cyan text-background font-bold tracking-wider hover:bg-neon-cyan/90 shadow-[0_0_20px_rgba(0,234,255,0.4)] animate-pulse-glow"
            >
              <Play className="w-4 h-4 mr-1 fill-current" />
              PLAY
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
