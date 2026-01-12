import ParticleBackground from "@/components/ParticleBackground";
import ScarcityBar from "@/components/ScarcityBar";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import PricingSection from "@/components/sections/PricingSection";
import AudienceSection from "@/components/sections/AudienceSection";
import LaunchSection from "@/components/sections/LaunchSection";
import AuthoritySection from "@/components/sections/AuthoritySection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

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
        
        <ScrollReveal>
          <ProblemSection />
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <div id="solucao">
            <SolutionSection />
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="left">
          <HowItWorksSection />
        </ScrollReveal>
        
        <ScrollReveal delay={150}>
          <div id="beneficios">
            <BenefitsSection />
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="scale">
          <div id="planos">
            <PricingSection />
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <AudienceSection />
        </ScrollReveal>
        
        
        <ScrollReveal>
          <AuthoritySection />
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <div id="faq">
            <FAQSection />
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="scale">
          <FinalCTASection />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
