import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Gift } from "lucide-react";

const POPUP_STORAGE_KEY = "checklist_popup_dismissed";
const DISMISS_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days in ms

export function ChecklistPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    ownsHighLevel: "",
    packageInterest: "",
  });

  useEffect(() => {
    // Check if popup was dismissed recently
    const dismissedAt = localStorage.getItem(POPUP_STORAGE_KEY);
    if (dismissedAt) {
      const dismissedTime = parseInt(dismissedAt, 10);
      if (Date.now() - dismissedTime < DISMISS_DURATION) {
        return; // Don't show popup
      }
    }

    // Timer trigger: 10 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    // Scroll trigger: 50%
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent >= 50) {
        setIsOpen(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Exit intent trigger
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsOpen(true);
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem(POPUP_STORAGE_KEY, Date.now().toString());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    handleClose();
    // Here you would typically send to your backend
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-primary-dark/55 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-card rounded-3xl shadow-2xl overflow-hidden animate-scale-fade-in">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary-light p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-primary-foreground" />
          </div>
          <h3 className="text-2xl font-bold text-primary-foreground mb-2">
            Free High-Converting Funnel Checklist
          </h3>
          <p className="text-primary-foreground/80 text-sm">
            Steal the exact checklist we use to turn traffic into booked appointments.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Do you own HighLevel?</Label>
            <div className="flex gap-4">
              {["Yes", "No"].map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="ownsHighLevel"
                    value={option}
                    checked={formData.ownsHighLevel === option}
                    onChange={(e) => setFormData({ ...formData, ownsHighLevel: e.target.value })}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
            {formData.ownsHighLevel === "No" && (
              <p className="text-xs text-muted-foreground mt-1">
                No worries! We'll set you up with a sub-account.
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>What package do you have in mind?</Label>
            <div className="space-y-2">
              {[
                { value: "build-it", label: "Build It (Most Popular)" },
                { value: "full-lead-gen", label: "Full Lead Generation" },
                { value: "ofm", label: "OFM" },
              ].map((option) => (
                <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="packageInterest"
                    value={option.value}
                    checked={formData.packageInterest === option.value}
                    onChange={(e) => setFormData({ ...formData, packageInterest: e.target.value })}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span className="text-sm">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <Button type="submit" variant="cta" size="lg" className="w-full">
            Get the Free Checklist
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </div>
  );
}
