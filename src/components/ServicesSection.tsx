import { Globe, Zap, Users, Target } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "AI Websites",
    description: "Modern, conversion-optimized websites powered by AI that turn visitors into leads automatically.",
    features: ["Responsive Design", "SEO Optimized", "Lead Capture"],
  },
  {
    icon: Zap,
    title: "High-Converting Funnels",
    description: "Strategic landing pages and funnels designed to guide prospects through your sales process.",
    features: ["A/B Testing", "Conversion Tracking", "Mobile First"],
  },
  {
    icon: Users,
    title: "CRM & Automations",
    description: "Automated follow-ups, pipeline management, and lead nurturing that works 24/7.",
    features: ["GoHighLevel", "Email/SMS Flows", "Pipeline Setup"],
  },
  {
    icon: Target,
    title: "Paid Ads & Lead Generation",
    description: "Data-driven Meta and Google ad campaigns that generate qualified leads consistently.",
    features: ["Meta Ads", "Instant Forms", "Lead Quality"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-accent/30">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need to Scale
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From AI-powered websites to fully automated marketing systems, we handle everything so you can focus on closing deals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group card-premium p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, j) => (
                  <span
                    key={j}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
