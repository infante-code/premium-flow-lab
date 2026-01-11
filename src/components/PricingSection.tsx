import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "AI Power",
    price: "$250",
    period: "one-time",
    description: "Perfect for getting started with AI-powered marketing",
    features: [
      "AI Website Redesign",
      "30 Days Free CRM Sub-account",
      "($30/month after 30 days)",
      "Build It Snapshot",
      "Free High-Converting Landing Page Checklist",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Build It",
    price: "$1,299",
    period: "/ month",
    description: "Our most popular plan for serious growth",
    features: [
      "Sub-account inside Agency GoHighLevel",
      "Private Slack Communication Channel",
      "Full Pipeline Setup",
      "Pipeline Automations & Integrations",
      "A2P Registration + US / CA / PR Phone Number",
      "High-Converting Squeeze Page Funnel",
      "In-house Funnel Templates",
      "Dedicated CRM Support",
      "Free High-Converting Landing Page Checklist",
    ],
    cta: "Build My System",
    popular: true,
  },
  {
    name: "Full Lead Generation",
    price: "$3,000",
    period: "/ month",
    description: "Complete done-for-you marketing solution",
    features: [
      "AI Website Redesign",
      "Running Meta Ads (Instant Forms or Funnel)",
      "Meta Ads Management & Optimization",
      "Everything in Build It",
    ],
    cta: "Apply to Work With Us",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pricing Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan to scale your business with our proven marketing systems.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-card border-2 border-primary shadow-glow scale-105 lg:scale-110"
                  : "bg-card border border-border shadow-lg hover:shadow-xl hover:border-primary/30"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-lg animate-pulse-glow">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8 pt-4">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? "bg-primary/20" : "bg-secondary"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-primary" : "text-muted-foreground"}`} />
                    </span>
                    <span className={`text-sm ${feature.startsWith("(") ? "text-muted-foreground italic" : "text-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "cta" : "outline"}
                size="lg"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
