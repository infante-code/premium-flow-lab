import { Bot, Cog, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Bot,
    title: "Automated Lead Capture",
    description: "Never miss a lead with 24/7 automated systems that capture, qualify, and nurture prospects.",
  },
  {
    icon: Cog,
    title: "Smart CRM Automation",
    description: "Follow-up sequences, pipeline management, and customer tracking all on autopilot.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    description: "Data-driven insights and continuous optimization to maximize your ROI and close rates.",
  },
];

export function ProblemSolutionSection() {
  return (
    <section className="py-24 section-overlay">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Transform Your Business with</span>
            <br />
            <span className="text-gradient">Lead Generation + CRM</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven systems combine powerful lead generation strategies with intelligent CRM automation to maximize your revenue growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, i) => (
            <div
              key={i}
              className="card-premium p-8 text-center group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Revenue Stats */}
        <div className="card-premium p-8 md:p-12 bg-gradient-to-r from-primary/5 via-transparent to-primary/5">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Revenue Growth Trajectory</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">2-3X</div>
              <div className="text-muted-foreground">Lead Growth</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">50-100%</div>
              <div className="text-muted-foreground">Revenue Increase</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">90 Days</div>
              <div className="text-muted-foreground">To Results</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button variant="default" size="lg" asChild>
              <a href="#services">See How It Works</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
