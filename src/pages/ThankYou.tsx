import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const planDetails = {
  "ai-power": {
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
  },
  "build-it": {
    name: "Build It",
    price: "$1,299",
    period: "/month",
    description: "Our most popular plan for serious growth",
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
  },
  "full-lead-gen": {
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
  },
};

export default function ThankYou() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedPlan = searchParams.get("plan") as keyof typeof planDetails;
  const firstName = searchParams.get("name") || "there";
  
  const plan = planDetails[selectedPlan] || planDetails["build-it"];

  return (
    <div className="min-h-screen page-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 section-overlay">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Thank You, <span className="text-gradient">{firstName}!</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Your application has been successfully submitted. Our team will review it and 
                get back to you within 24-48 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Thank You Video */}
        <section className="py-12 section-overlay">
          <div className="container-wide max-w-4xl">
            <div className="card-premium p-6 md:p-8 mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
                A Message From Our Team
              </h2>
              <div className="aspect-video rounded-xl overflow-hidden bg-secondary/50">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Thank You Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Selected Plan Details */}
        <section className="py-12 section-overlay">
          <div className="container-wide max-w-2xl">
            <div className="card-premium p-8 md:p-10 border-primary/30">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                  Your Selected Plan
                </span>
                <h2 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h2>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-4">What's Included:</h3>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </span>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Next Steps */}
              <div className="bg-secondary/50 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-3">What Happens Next?</h3>
                <ol className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">1.</span>
                    Our team will review your application within 24-48 hours
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">2.</span>
                    We'll reach out to schedule a discovery call
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">3.</span>
                    Together, we'll create a customized growth strategy
                  </li>
                </ol>
              </div>
            </div>

            {/* Back to Home */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg" asChild>
                <Link to="/">
                  Back to Home
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
