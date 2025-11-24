import Navbar from "@/components/Navbar";
import PlayerHeader from "@/components/PlayerHeader";
import AchievementBadges from "@/components/AchievementBadges";
import PlayerMatchup from "@/components/PlayerMatchup";
import SkillsGrid from "@/components/SkillsGrid";
import StatsTable from "@/components/StatsTable";
import SignatureQuote from "@/components/SignatureQuote";
import LoreSection from "@/components/LoreSection";
import PlayerModel from "@/components/PlayerModel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            <PlayerHeader />
            <AchievementBadges />
            <PlayerMatchup />
            <StatsTable />
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <PlayerModel />
            <SkillsGrid />
            <SignatureQuote />
          </div>
        </div>
        
        {/* Lore Section - Full Width */}
        <div className="mt-12">
          <LoreSection />
        </div>
      </main>
    </div>
  );
};

export default Index;
