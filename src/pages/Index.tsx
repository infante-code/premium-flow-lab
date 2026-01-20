import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { ChecklistPopup } from "@/components/ChecklistPopup";

// Lazy load below-the-fold sections for faster initial load
const ProblemSolutionSection = lazy(() => import("@/components/ProblemSolutionSection").then(m => ({ default: m.ProblemSolutionSection })));
const ServicesSection = lazy(() => import("@/components/ServicesSection").then(m => ({ default: m.ServicesSection })));
const PricingSection = lazy(() => import("@/components/PricingSection").then(m => ({ default: m.PricingSection })));
const FAQSection = lazy(() => import("@/components/FAQSection").then(m => ({ default: m.FAQSection })));
const GoHighLevelAffiliate = lazy(() => import("@/components/GoHighLevelAffiliate").then(m => ({ default: m.GoHighLevelAffiliate })));
const CTASection = lazy(() => import("@/components/CTASection").then(m => ({ default: m.CTASection })));

// Minimal loading placeholder
const SectionLoader = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen page-background">
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={<SectionLoader />}>
          <ProblemSolutionSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <PricingSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FAQSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <GoHighLevelAffiliate />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CTASection />
        </Suspense>
      </main>
      <Footer />
      <ChecklistPopup />
    </div>
  );
};

export default Index;
