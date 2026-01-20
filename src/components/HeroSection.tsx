import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { memo, useMemo } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: TrendingUp, value: "50-100%", label: "Growth" },
  { icon: Users, value: "2-3X", label: "More Leads" },
  { icon: Zap, value: "90 Days", label: "To Results" },
];

// Memoized floating particles to prevent re-renders
const FloatingParticles = memo(() => {
  const particles = useMemo(() => 
    [...Array(6)].map((_, i) => ({
      key: i,
      left: `${15 + i * 14}%`,
      top: `${20 + (i % 3) * 25}%`,
      delay: `${i * 3}s`,
      duration: `${20 + i * 2}s`,
    })), []
  );

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.key}
          className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float will-change-transform"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </>
  );
});

FloatingParticles.displayName = "FloatingParticles";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Using CSS for better performance */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          willChange: 'auto',
        }}
        aria-hidden="true"
      />
      
      {/* Gradient Overlay - Simplified for performance */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        <FloatingParticles />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide text-center pt-28 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-8 animate-fade-in-up">
            <Zap className="w-4 h-4 text-primary" aria-hidden="true" />
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
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 mb-10 animate-fade-in-up animation-delay-400">
            {stats.map((stat, i) => (
              <div 
                key={i}
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50"
              >
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" aria-hidden="true" />
                <div className="text-left">
                  <div className="font-bold text-foreground text-sm sm:text-base">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
            <Button variant="cta" size="lg" className="group w-full sm:w-auto min-w-[220px]" asChild>
              <Link to="/contact">
                Apply to Work with Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[220px]" asChild>
              <a href="#services">See How It Works</a>
            </Button>
          </div>

          {/* Limited Badge */}
          <div className="mt-10 animate-fade-in-up animation-delay-600">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium">
              <Zap className="w-4 h-4" aria-hidden="true" />
              LIMITED: Only 10 new clients available this quarter
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />
    </section>
  );
}
