import ParticleBackground from "@/components/ParticleBackground";
import ScarcityBar from "@/components/ScarcityBar";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import AudienceSection from "@/components/sections/AudienceSection";
import LaunchSection from "@/components/sections/LaunchSection";
import AuthoritySection from "@/components/sections/AuthoritySection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Background effects */}
      <ParticleBackground />
      
      {/* Fixed elements */}
      <ScarcityBar />
      <Header />
      <FloatingCTA />

      {/* Main content */}
      <main>
        <HeroSection />
        <ProblemSection />
        <div id="solucao">
          <SolutionSection />
        </div>
        <HowItWorksSection />
        <div id="beneficios">
          <BenefitsSection />
        </div>
        <AudienceSection />
        <div id="vip">
          <LaunchSection />
        </div>
        <AuthoritySection />
        <div id="faq">
          <FAQSection />
        </div>
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
