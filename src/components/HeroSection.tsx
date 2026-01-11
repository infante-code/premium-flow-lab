import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: TrendingUp, value: "50-100%", label: "Growth" },
  { icon: Users, value: "2-3X", label: "More Leads" },
  { icon: Zap, value: "90 Days", label: "To Results" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Animated Wave Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        
        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 2.5}s`,
              animationDuration: `${18 + i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide text-center pt-28 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-8 animate-fade-in-up">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">
              Lead Generation & Marketing Solutions
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-200">
            <span className="text-gradient">Grow Your Business</span>
            <br />
            <span className="text-foreground">with Proven Marketing Systems</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-400">
            Generate more qualified leads. Scale revenue. Join 100+ businesses making 50-100% growth in 90 days.
          </p>

          {/* Stats Cards */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in-up animation-delay-400">
            {stats.map((stat, i) => (
              <div 
                key={i}
                className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50"
              >
                <stat.icon className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <div className="font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
            <Button variant="cta" size="lg" className="group" asChild>
              <Link to="/contact">
                Apply to Work with Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#services">See How It Works</a>
            </Button>
          </div>

          {/* Limited Badge */}
          <div className="mt-10 animate-fade-in-up animation-delay-600">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium">
              <Zap className="w-4 h-4" />
              LIMITED: Only 10 new clients available this quarter
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
