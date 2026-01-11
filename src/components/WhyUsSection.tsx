import { Shield, Clock, Headphones, TrendingUp, Award, Users } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Proven Systems",
    description: "We use the same marketing systems that have generated millions in revenue for our clients.",
  },
  {
    icon: Clock,
    title: "24/7 Automation",
    description: "Your marketing never sleeps. Our automations nurture leads around the clock.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Private Slack channel with direct access to our team for all your questions.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven",
    description: "Every decision backed by real data. No guessing, just results.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Years of experience in high-converting funnels and lead generation.",
  },
  {
    icon: Users,
    title: "Partner Approach",
    description: "We're invested in your success. Your wins are our wins.",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-accent/30 to-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Built Different
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not another marketing agency. We build complete systems that generate predictable results.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="group flex gap-4 p-6 rounded-2xl bg-card/50 hover:bg-card border border-transparent hover:border-border transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
