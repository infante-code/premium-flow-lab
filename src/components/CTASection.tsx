import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-24 section-overlay">
      <div className="container-wide">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary-dark" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(201_87%_25%/0.5)_100%)]" />
          
          {/* Glow Effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary-light/20 rounded-full blur-3xl" />

          <div className="relative z-10 px-8 py-16 md:py-24 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Scale Your Business?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Join businesses that are generating more leads and growing faster with our proven marketing systems.
            </p>
            
            <Button variant="hero" size="xl" className="group" asChild>
              <Link to="/contact">
                Apply to Work with Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <p className="mt-8 text-primary-foreground/60 text-sm">
              No long-term contracts • Flexible month-to-month • Results guaranteed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
