import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { GoHighLevelAffiliate } from "@/components/GoHighLevelAffiliate";
import { Footer } from "@/components/Footer";
import { ChecklistPopup } from "@/components/ChecklistPopup";

const Index = () => {
  return (
    <div className="min-h-screen page-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <ServicesSection />
        <PricingSection />
        <FAQSection />
        <GoHighLevelAffiliate />
        <CTASection />
      </main>
      <Footer />
      <ChecklistPopup />
    </div>
  );
};

export default Index;
