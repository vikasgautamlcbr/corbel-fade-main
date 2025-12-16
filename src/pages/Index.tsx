import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { AboutSection } from '@/components/AboutSection';
import { PartnershipSection } from '@/components/PartnershipSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { InvestmentApproachSection } from '@/components/InvestmentApproachSection';
import { ValueCreationSection } from '@/components/ValueCreationSection';
import { TeamSection } from '@/components/TeamSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <PartnershipSection />
        <InvestmentApproachSection />
        <ValueCreationSection />
        <PortfolioSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
