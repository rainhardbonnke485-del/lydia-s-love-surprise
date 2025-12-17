import Snowfall from '@/components/Snowfall';
import FloatingHearts from '@/components/FloatingHearts';
import HeroSection from '@/components/HeroSection';
import OurStorySection from '@/components/OurStorySection';
import PhotoMemoriesSection from '@/components/PhotoMemoriesSection';
import DistanceSection from '@/components/DistanceSection';
import ThingsILoveSection from '@/components/ThingsILoveSection';
import LoveLetterSection from '@/components/LoveLetterSection';
import CountdownSection from '@/components/CountdownSection';
import FinalSurpriseSection from '@/components/FinalSurpriseSection';
import LoveVideoSection from '@/components/LoveVideoSection';
import GamesSection from '@/components/GamesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background effects */}
      <Snowfall />
      <FloatingHearts />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <OurStorySection />
        <PhotoMemoriesSection />
        <LoveVideoSection />
        <DistanceSection />
        <GamesSection />
        <ThingsILoveSection />
        <LoveLetterSection />
        <CountdownSection />
        <FinalSurpriseSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;