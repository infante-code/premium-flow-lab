import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, Sparkles, Zap, Clock, CheckCircle2, Star, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";

const benefits = [
  { icon: Zap, text: "AI-powered design that converts visitors into customers" },
  { icon: Clock, text: "Delivered in 1-2 weeks, not months" },
  { icon: CheckCircle2, text: "Workflow and Funnel Snapshots ready to deploy" },
  { icon: Sparkles, text: "30-day CRM sub-account included" },
];

const testimonials = [
  {
    name: "Arbor Estates",
    business: "Arbor Estates",
    quote: "The AI redesign completely transformed my outdated website. Within a week of launching, I saw a 40% increase in lead inquiries.",
    website: "https://sell.arboreestates.com/smart-real-estate-investment",
    rating: 5,
  },
  {
    name: "Elite Performer Fitness",
    business: "Elite Performer Fitness",
    quote: "I was skeptical about AI design, but the results speak for themselves. My booking rate doubled and the site looks incredible.",
    website: "https://www.eliteperformerfitness.com/",
    rating: 5,
  },
  {
    name: "Far Beyond Gifted",
    business: "Far Beyond Gifted",
    quote: "Best investment I've ever made for my business. The new website pays for itself every week with the extra customers we're getting.",
    website: "https://www.farbeyondgifted.com/",
    rating: 5,
  },
  {
    name: "Hometown Pet Care Center",
    business: "Hometown Pet Care Center",
    quote: "Our new website has been a game-changer. Customer inquiries have increased significantly since the redesign.",
    website: "https://hometownpetcarecenter.net/",
    rating: 5,
  },
  {
    name: "Built By Becker Media",
    business: "Built By Becker Media",
    quote: "The AI-powered design perfectly captured our brand. We're seeing more engagement and conversions than ever before.",
    website: "https://www.builtbybeckermedia.com/",
    rating: 5,
  },
  {
    name: "EMV Performance",
    business: "EMV Performance",
    quote: "Outstanding results from our new AI-designed website. The modern look has significantly boosted our online presence.",
    website: "https://www.emvperformance.com/",
    rating: 5,
  },
];

export default function AIRedesign() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    ownsHighLevel: "",
    packageInterest: "ai-power", // Pre-selected
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const webhookUrl = "https://services.leadconnectorhq.com/hooks/qhGjNIAUgMNa6ZkPi6pi/webhook-trigger/6bb6d538-fb85-4c6c-84e4-9b05a757fb45";
    
    try {
      const formPayload = new URLSearchParams({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        ownsHighLevel: formData.ownsHighLevel,
        packageInterest: formData.packageInterest,
        message: formData.message,
        timestamp: new Date().toISOString(),
        source: "AI Redesign Page",
      });

      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        mode: "no-cors",
        body: formPayload.toString(),
      });
      
      const params = new URLSearchParams({
        plan: formData.packageInterest,
        name: formData.firstName,
      });
      navigate(`/thank-you?${params.toString()}`);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was an issue submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen page-background">
      {/* Simple Logo Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4">
        <div className="container-wide flex justify-center">
          <img src={logo} alt="Premium Flow Lab" className="h-10" />
        </div>
      </header>

      <main>
        {/* Hero Section with Embedded Form */}
        <section className="pt-24 pb-16 section-overlay min-h-screen flex items-center">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 animate-fade-in-up">
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  AI-Powered Website Redesign
                </span>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                  Transform Your Website with{" "}
                  <span className="text-gradient">AI-Powered Design</span>
                </h1>
                
                <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                  Get a stunning, conversion-optimized website in 1-2 weeks. Our AI technology 
                  analyzes top-performing sites in your industry to create a design that actually converts.
                </p>

                {/* Benefits List */}
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-3 animate-fade-in-up"
                      style={{ animationDelay: `${300 + i * 100}ms` }}
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                {/* Price Badge */}
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass-card animate-fade-in-up" style={{ animationDelay: "700ms" }}>
                  <span className="text-muted-foreground line-through text-lg">$500</span>
                  <span className="text-3xl font-bold text-gradient">$250</span>
                  <span className="text-sm text-muted-foreground">one-time</span>
                </div>
              </div>

              {/* Right - Embedded Form */}
              <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <div className="card-premium p-8 md:p-10 glow-primary">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Get Started Today</h2>
                  <p className="text-muted-foreground mb-6">Fill out the form below and we'll be in touch within 24 hours.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                          className="bg-secondary/50 border-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                          className="bg-secondary/50 border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="bg-secondary/50 border-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="bg-secondary/50 border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Do you own GoHighLevel? *</Label>
                      <div className="flex gap-6">
                        {["Yes", "No"].map((option) => (
                          <label key={option} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="ownsHighLevel"
                              value={option}
                              checked={formData.ownsHighLevel === option}
                              onChange={(e) => setFormData({ ...formData, ownsHighLevel: e.target.value })}
                              className="w-4 h-4 text-primary focus:ring-primary accent-primary"
                              required
                            />
                            <span className="text-foreground">{option}</span>
                          </label>
                        ))}
                      </div>
                      {formData.ownsHighLevel === "No" && (
                        <p className="text-sm text-muted-foreground bg-secondary/50 p-3 rounded-lg">
                          No worries! We'll set you up with a sub-account inside our agency.
                        </p>
                      )}
                    </div>

                    {/* Pre-selected AI Power Package - Hidden but sent */}
                    <input type="hidden" name="packageInterest" value="ai-power" />

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell us about your business</Label>
                      <Textarea
                        id="message"
                        placeholder="What does your business do? What's your current website URL?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                        className="bg-secondary/50 border-border focus:border-primary resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="cta" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          Get My AI Redesign
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      🔒 Your information is secure and will never be shared.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compelling AI Copy Section */}
        <section className="py-20 section-overlay">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                Why AI-Powered Design?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Your Website is{" "}
                <span className="text-gradient">Costing You Customers</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Studies show that 75% of users judge a company's credibility based on their website design. 
                An outdated or poorly designed website isn't just ugly—it's actively driving away potential customers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="card-premium p-8 text-center">
                <div className="text-5xl font-bold text-gradient mb-3">94%</div>
                <p className="text-muted-foreground">
                  of first impressions are design-related
                </p>
              </div>
              <div className="card-premium p-8 text-center">
                <div className="text-5xl font-bold text-gradient mb-3">88%</div>
                <p className="text-muted-foreground">
                  won't return after a bad experience
                </p>
              </div>
              <div className="card-premium p-8 text-center">
                <div className="text-5xl font-bold text-gradient mb-3">3x</div>
                <p className="text-muted-foreground">
                  more leads with optimized design
                </p>
              </div>
            </div>

            <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                What Makes AI Design Different?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Data-Driven Layouts</h4>
                      <p className="text-sm text-muted-foreground">
                        AI analyzes thousands of high-converting websites to determine optimal layouts for your industry.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Conversion Psychology</h4>
                      <p className="text-sm text-muted-foreground">
                        Strategic placement of CTAs, trust signals, and content based on proven conversion principles.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Mobile-First Approach</h4>
                      <p className="text-sm text-muted-foreground">
                        Fully responsive design that looks stunning on every device, from phones to desktops.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Speed Optimized</h4>
                      <p className="text-sm text-muted-foreground">
                        Fast-loading pages that keep visitors engaged and improve your Google rankings.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">SEO-Ready Structure</h4>
                      <p className="text-sm text-muted-foreground">
                        Built with search engines in mind, helping you rank higher and get found by more customers.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">1-2 Week Delivery</h4>
                      <p className="text-sm text-muted-foreground">
                        Get your new website in weeks, not months like traditional designers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 section-overlay">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                Real Results
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Businesses That{" "}
                <span className="text-gradient">Transformed Their Online Presence</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Don't just take our word for it. See what our clients have to say about their AI-powered redesigns.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="card-premium p-6 flex flex-col">
                  {/* Embedded Website Preview */}
                  <div className="relative mb-6 rounded-lg overflow-hidden border border-border/50 bg-secondary/30">
                    <div className="aspect-[4/3] w-full">
                      <iframe
                        src={testimonial.website}
                        title={`${testimonial.business} website preview`}
                        className="w-full h-full pointer-events-auto"
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                      />
                    </div>
                    {/* Interactive overlay for mobile - tap to interact */}
                    <div className="absolute inset-0 bg-transparent hover:bg-black/5 transition-colors cursor-pointer lg:hidden" 
                         onClick={(e) => {
                           const iframe = e.currentTarget.previousElementSibling as HTMLIFrameElement;
                           if (iframe) {
                             e.currentTarget.style.display = 'none';
                           }
                         }}
                    >
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/70 text-white text-xs rounded-full">
                        Tap to interact
                      </div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-foreground text-sm mb-4 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="border-t border-border pt-4 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.business}</div>
                    </div>
                    <a 
                      href={testimonial.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Visit Site
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <div className="mt-16 text-center">
              <div className="glass-card inline-block p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Ready to Transform Your Website?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Join hundreds of businesses who have already upgraded their online presence with AI-powered design.
                </p>
                <Button 
                  variant="cta" 
                  size="lg"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <Sparkles className="w-5 h-5" />
                  Get Started for $250
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container-wide text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Premium Flow Lab. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
