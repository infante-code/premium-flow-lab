import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export function GoHighLevelAffiliate() {
  return (
    <section className="py-16 section-overlay">
      <div className="container-wide">
        <div className="card-premium p-8 md:p-12 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Rocket className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold">Lead Generation Experts</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Fill Your Calendar with Qualified Leads?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Stop chasing leads and start attracting them. Our proven lead generation strategies help businesses like yours capture, nurture, and convert high-quality prospects into paying customers.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/50">
              <Target className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium text-foreground">Targeted Campaigns</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/50">
              <TrendingUp className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium text-foreground">Automated Follow-ups</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/50">
              <Rocket className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium text-foreground">Scalable Growth</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="cta" size="lg" className="group" asChild>
              <Link to="/contact">
                Get Your Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            No obligation • Free consultation • Results-driven approach
          </p>
        </div>
      </div>
    </section>
  );
}