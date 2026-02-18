import HeroSection from "@/components/HeroSection";
import PlatformGrid from "@/components/PlatformGrid";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <main className="min-h-screen pb-8">
      <HeroSection />
      <PlatformGrid />
      <BottomNav />
    </main>
  );
}
