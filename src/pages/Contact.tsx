import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoHighLevelAffiliate } from "@/components/GoHighLevelAffiliate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@mdfagency.com",
    href: "mailto:hello@mdfagency.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "(123) 456-7890",
    href: "tel:+1234567890",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon-Fri: 9AM-6PM EST",
    href: null,
  },
];

export default function Contact() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    ownsHighLevel: "",
    packageInterest: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const webhookUrl = "https://services.leadconnectorhq.com/hooks/qhGjNIAUgMNa6ZkPi6pi/webhook-trigger/6bb6d538-fb85-4c6c-84e4-9b05a757fb45";
    
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          ownsHighLevel: formData.ownsHighLevel,
          packageInterest: formData.packageInterest,
          message: formData.message,
          timestamp: new Date().toISOString(),
          source: "Contact Page",
        }),
      });
      
      // Redirect to thank you page with plan details
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
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 section-overlay">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                Get in Touch
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Let's <span className="text-gradient">Grow Together</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Ready to transform your marketing? Fill out the form below and our team 
                will get back to you within 24-48 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 section-overlay">
          <div className="container-wide">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                  <p className="text-muted-foreground mb-8">
                    Have questions? Reach out to us directly or fill out the application form.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, i) => (
                    <div
                      key={i}
                      className="glass-card p-4 flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.title}</div>
                        {info.href ? (
                          <a href={info.href} className="font-medium text-foreground hover:text-primary transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <div className="font-medium text-foreground">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Note */}
                <div className="card-premium p-6 bg-primary/5 border-primary/20">
                  <h3 className="font-bold text-foreground mb-2">Limited Availability</h3>
                  <p className="text-sm text-muted-foreground">
                    We only work with 10 new clients per quarter to ensure we deliver 
                    exceptional results. Apply today to secure your spot.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <div className="card-premium p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Apply to Work with Us</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
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

                    <div className="grid sm:grid-cols-2 gap-6">
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

                    <div className="space-y-3">
                      <Label>What package interests you? *</Label>
                      <div className="space-y-3">
                        {[
                          { value: "ai-power", label: "AI Power ($250 one-time)" },
                          { value: "build-it", label: "Build It ($1,299/month) - Most Popular" },
                          { value: "full-lead-gen", label: "Full Lead Generation ($3,000/month)" },
                        ].map((option) => (
                          <label key={option.value} className="flex items-center gap-3 cursor-pointer p-3 rounded-lg border border-border hover:border-primary/50 transition-colors">
                            <input
                              type="radio"
                              name="packageInterest"
                              value={option.value}
                              checked={formData.packageInterest === option.value}
                              onChange={(e) => setFormData({ ...formData, packageInterest: e.target.value })}
                              className="w-4 h-4 text-primary focus:ring-primary accent-primary"
                              required
                            />
                            <span className={`${option.value === "build-it" ? "text-primary font-medium" : "text-foreground"}`}>
                              {option.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell us about your business (optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="What are your current marketing challenges? What are your growth goals?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
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
                          Submit Application
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      By submitting, you agree to our privacy policy. We'll never share your information.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <GoHighLevelAffiliate />
      </main>

      <Footer />
    </div>
  );
}
