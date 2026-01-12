import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export function GoHighLevelAffiliate() {
  return (
    <section className="py-16 section-overlay">
      <div className="container-wide">
        <div className="card-premium p-8 md:p-12 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold">Powered by GoHighLevel</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            The All-In-One Marketing Platform We Trust
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            GoHighLevel is the CRM and marketing automation platform that powers our client success. 
            Capture leads, nurture prospects, and close deals—all from one powerful platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="cta" 
              size="lg" 
              className="group"
              asChild
            >
              <a 
                href="https://www.gohighlevel.com/?fp_ref=mdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Start Your 14 Days Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            This is an affiliate link. We may earn a commission at no extra cost to you.
          </p>
        </div>
      </div>
    </section>
  );
}
