import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const currencies = [
  { code: "USD", label: "🇺🇸 USD", symbol: "$", rate: 1, custom: null as number | null },
  { code: "PHP", label: "🇵🇭 PHP", symbol: "₱", rate: 0, custom: 15000 },
  { code: "EUR", label: "🇪🇺 EUR", symbol: "€", rate: 0.92, custom: null },
  { code: "GBP", label: "🇬🇧 GBP", symbol: "£", rate: 0.79, custom: null },
  { code: "CAD", label: "🇨🇦 CAD", symbol: "C$", rate: 1.37, custom: null },
  { code: "AUD", label: "🇦🇺 AUD", symbol: "A$", rate: 1.52, custom: null },
  { code: "INR", label: "🇮🇳 INR", symbol: "₹", rate: 83, custom: null },
  { code: "AED", label: "🇦🇪 AED", symbol: "د.إ", rate: 3.67, custom: null },
];

const BASE_PRICE_USD = 2500;

function formatPrice(currency: typeof currencies[number]) {
  const value = currency.custom ?? Math.round(BASE_PRICE_USD * currency.rate);
  return `${currency.symbol}${value.toLocaleString()}`;
}

const plans = [
  {
    name: "Build It",
    period: "/month",
    description: "We build and automate your revenue infrastructure.",
    subtitle: "For businesses ready to operate with structure, automation, and scalable systems.",
    expandableSections: [
      {
        title: "CRM & Pipeline Infrastructure",
        items: [
          "Opportunity stages mapping",
          "Deal flow architecture",
          "Lead source tagging system",
          "Automated pipeline movement",
          "Revenue tracking inside CRM",
          "Smart lead assignment routing",
        ],
      },
      {
        title: "Custom Automation Application",
        items: [
          "Instant SMS & Email follow-ups",
          "Behavior-based nurture sequences",
          "Appointment booking workflows",
          "Confirmation & reminder system",
          "No-show reduction automation",
          "Lost lead reactivation campaigns",
          "Conditional logic automations",
          "Internal notifications for team",
        ],
      },
      {
        title: "Funnel & Conversion Assets",
        items: [
          "High-converting squeeze page",
          "Lead qualification forms",
          "Funnel structure & page flow",
          "In-house tested templates",
          "Landing page optimization checklist",
        ],
      },
      {
        title: "Attribution & Event Tracking",
        items: [
          "Lead source tracking setup",
          "UTM parameter mapping",
          "Conversion event configuration",
          "Purchase/custom event tracking from external platforms",
          "CRM-to-ad platform data syncing support",
        ],
      },
      {
        title: "Ongoing Optimization & Support",
        items: [
          "CRM system monitoring",
          "Automation testing & refinement",
          "Pipeline performance review",
          "Technical troubleshooting",
          "Private client communication channel",
        ],
      },
    ],
    cta: "Apply to Work with Us",
    ctaLink: "/contact",
    popular: true,
  },
];

function ExpandableSection({ title, items, isPopular }: { title: string; items: string[]; isPopular: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-border/50 pt-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left group"
      >
        <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <ul className="space-y-2 mt-3 pl-4">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${
                isPopular ? "bg-primary" : "bg-muted-foreground"
              }`} />
              <span className="text-xs text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function PricingSection() {
  const [currency, setCurrency] = useState(currencies[0]);

  return (
    <section id="pricing" className="py-24 section-overlay">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pricing Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the perfect plan to scale your business with our proven marketing systems
          </p>

          {/* Currency Switcher */}
          <div className="inline-flex flex-wrap justify-center gap-2 p-2 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/50">
            {currencies.map((c) => (
              <button
                key={c.code}
                onClick={() => setCurrency(c)}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                  currency.code === c.code
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 max-w-2xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-card border-2 border-primary shadow-glow scale-100 lg:scale-105"
                  : "bg-card/60 backdrop-blur-xl border border-border/50 shadow-lg hover:shadow-xl hover:border-primary/30"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8 pt-4">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold text-foreground">{formatPrice(currency)}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-foreground font-medium">{plan.description}</p>
                {('subtitle' in plan) && (
                  <p className="text-sm text-muted-foreground mt-1">{plan.subtitle}</p>
                )}
              </div>

              {/* What's Included with Expandable Sections */}
              {('expandableSections' in plan) && (
                <>
                  <div className="mb-4 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    <h4 className="text-sm font-bold text-foreground">What's Included</h4>
                  </div>

                  {/* Expandable Sections */}
                  <div className="space-y-3 mb-8">
                    {plan.expandableSections.map((section, idx) => (
                      <ExpandableSection
                        key={idx}
                        title={section.title}
                        items={section.items}
                        isPopular={plan.popular}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* CTA */}
              <Button
                variant={plan.popular ? "cta" : "outline"}
                size="lg"
                className="w-full"
                asChild
              >
                <Link to={plan.ctaLink}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
