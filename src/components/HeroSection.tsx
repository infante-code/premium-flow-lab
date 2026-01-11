import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/70 via-primary/50 to-primary-dark/80 animate-gradient-shift" />
      
      {/* Dark Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-light/20 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + i * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide text-center pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              AI-Powered Marketing Systems
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up animation-delay-200">
            Turn Your Traffic Into{" "}
            <span className="relative">
              <span className="relative z-10">Booked Appointments</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/40 -z-0" />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-400">
            We build high-converting funnels, automate your CRM, and generate qualified leads 
            with AI-powered marketing systems that work 24/7.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
            <Button variant="hero" size="lg" className="group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="lg">
              <Play className="w-5 h-5" />
              View Plans
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/10 animate-fade-in-up animation-delay-600">
            <p className="text-primary-foreground/60 text-sm mb-4">Trusted by growth-focused businesses</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {["50+", "2M+", "98%", "24/7"].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-primary-foreground">{stat}</div>
                  <div className="text-xs text-primary-foreground/60">
                    {["Clients Served", "Leads Generated", "Client Retention", "Automation"][i]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
