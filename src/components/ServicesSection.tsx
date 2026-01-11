import { Users, Target, TrendingUp, Headphones, UserCheck, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    number: "1",
    icon: Users,
    title: "CRM and Lead Management",
    description: "We set up and optimize your CRM systems to capture, organize, and manage leads efficiently, ensuring no opportunity is missed.",
  },
  {
    number: "2",
    icon: Target,
    title: "Lead Generation",
    description: "We build proven systems for lead capture, nurturing, and conversion that deliver qualified prospects consistently.",
  },
  {
    number: "3",
    icon: TrendingUp,
    title: "Optimization & Scaling",
    description: "We monitor performance, test improvements, and scale what works to maximize your ROI and revenue growth.",
  },
];

const support = [
  {
    icon: UserCheck,
    title: "Marketing Experts",
    description: "Filling your marketing gaps with vetted marketing experts in variety of skills sets who are proven to get you results",
  },
  {
    icon: Users,
    title: "Marketing Team",
    description: "Grow your business with a completely flexible marketing team",
  },
  {
    icon: ClipboardCheck,
    title: "Audit",
    description: "Let top professionals audit your marketing activities and provide actionable recommendations to your team",
  },
  {
    icon: Headphones,
    title: "Consultation",
    description: "Get personalized guidance on integrating your marketing tools, optimizing your tech stack, and maximizing your CRM and lead generation systems",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 section-overlay">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive Marketing Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designed to generate leads and grow your revenue.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, i) => (
            <div
              key={i}
              className="card-premium p-8 group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                  {service.number}
                </div>
                <service.icon className="w-8 h-8 text-primary/60" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <Button variant="cta" size="lg" asChild>
            <Link to="/contact">Start Your Growth Journey</Link>
          </Button>
        </div>

        {/* Support Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              All the Support You Can Get from The Best Marketing Talent
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {support.map((item, i) => (
              <div
                key={i}
                className="glass-card p-6 group hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
