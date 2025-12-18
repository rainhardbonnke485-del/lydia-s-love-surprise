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

import OpenWhenSection from '@/components/OpenWhenSection';
import DateNightCouponsSection from '@/components/DateNightCouponsSection';
import LoveCalculatorSection from '@/components/LoveCalculatorSection';

import NaughtyCorner from '@/components/NaughtyCorner';

import CustomCursor from '@/components/CustomCursor';
import ReasonsWhySection from '@/components/ReasonsWhySection';
import StarDedicationSection from '@/components/StarDedicationSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
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
        <OpenWhenSection />
        <GamesSection />
        <LoveCalculatorSection />
        <StarDedicationSection />
        <NaughtyCorner />
        <ReasonsWhySection />
        <ThingsILoveSection />
        <LoveLetterSection />
        <CountdownSection />
        <DateNightCouponsSection />
        <FinalSurpriseSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;