import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CheckCircle, Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const plans = [
  {
    key: "ai-power",
    name: "AI Power",
    price: "$250",
    period: "one-time",
    description: "Perfect for getting started with AI-powered marketing",
    features: [
      "AI Website Redesign",
      "30 Days Free CRM Sub-account",
      "Workflow and Funnel Snapshots",
      "Free High-Converting Landing Page Checklist",
    ],
    ctaLink: "https://api.leadconnectorhq.com/widget/booking/tjNfGpgbL2FwVdVcN8K0",
  },
  {
    key: "build-it",
    name: "Build It",
    price: "$1,299",
    period: "/month",
    description: "Our most popular plan for serious growth",
    popular: true,
    features: [
      "Sub-account Inside Agency GoHighLevel",
      "Private Communication Channel",
      "Full Pipeline Setup",
      "Pipeline Automations & Integrations",
      "A2P Registration + US/CA/PR Phone Number",
      "High-Converting Squeeze Page Funnel",
      "In-house Funnel Templates",
      "Dedicated CRM Support",
      "Free High-Converting Landing Page Checklist",
    ],
    ctaLink: "https://api.leadconnectorhq.com/widget/booking/tjNfGpgbL2FwVdVcN8K0",
  },
  {
    key: "full-lead-gen",
    name: "Full Lead Generation",
    price: "$3,000",
    period: "/month",
    description: "Complete done-for-you marketing solution",
    features: [
      "AI Website Redesign",
      "Running Meta Ads (Instant Forms or Funnel)",
      "Meta Ads Management & Optimization",
      "Everything in Build It",
    ],
    ctaLink: "https://api.leadconnectorhq.com/widget/booking/tjNfGpgbL2FwVdVcN8K0",
  },
];

export default function SubmissionThankYou() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(15);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate, isPaused]);

  return (
    <div className="min-h-screen page-background">
      <Header />
      
      <main>
        {/* Success Message */}
        <section className="pt-32 pb-12 section-overlay">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Thank You!
              </h1>
              
              <p className="text-muted-foreground mb-6">
                Your submission has been received. We'll be in touch soon!
              </p>
              
              <p className="text-sm text-muted-foreground">
                Redirecting to homepage in <span className="text-primary font-semibold">{countdown}</span> seconds...
              </p>
            </div>
          </div>
        </section>

        {/* Upsell Section */}
        <section 
          className="py-16 section-overlay"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
        >
          <div className="container-wide max-w-6xl">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold">While You're Here</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Accelerate Your Growth?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Check out our marketing solutions designed to help your business thrive
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.key}
                  className={`card-premium p-6 hover:border-primary/50 transition-all duration-300 ${
                    plan.popular ? 'border-primary/30 relative' : ''
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Most Popular
                    </span>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1 mb-2">
                      <span className="text-3xl font-bold text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {plan.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                    {plan.features.length > 4 && (
                      <li className="text-sm text-primary font-medium pl-6">
                        + {plan.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"} 
                    asChild
                  >
                    <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="ghost" size="lg" asChild>
                <Link to="/">
                  Skip to Homepage
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
