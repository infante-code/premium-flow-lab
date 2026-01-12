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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-6">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-[95vw] sm:max-w-md md:max-w-lg bg-card rounded-2xl sm:rounded-3xl shadow-2xl border border-border overflow-hidden animate-scale-fade-in max-h-[95vh] sm:max-h-[90vh] flex flex-col">
        {/* Close Button - Always visible */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors z-50 border border-white/20"
          aria-label="Close popup"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary-light p-4 sm:p-6 text-center flex-shrink-0">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-foreground mb-1 sm:mb-2 pr-8 sm:pr-0">
            Free High-Converting Funnel Checklist
          </h3>
          <p className="text-primary-foreground/80 text-xs sm:text-sm">
            Steal the exact checklist we use to turn traffic into booked appointments.
          </p>
        </div>

        {/* Form - Scrollable */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-3 sm:space-y-4 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1 sm:space-y-2">
              <Label htmlFor="popupFirstName" className="text-sm">First Name</Label>
              <Input
                id="popupFirstName"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
                className="bg-secondary/50 h-10 sm:h-11"
              />
            </div>
            <div className="space-y-1 sm:space-y-2">
              <Label htmlFor="popupLastName" className="text-sm">Last Name</Label>
              <Input
                id="popupLastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
                className="bg-secondary/50 h-10 sm:h-11"
              />
            </div>
          </div>

          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="popupPhone" className="text-sm">Phone</Label>
            <Input
              id="popupPhone"
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="bg-secondary/50 h-10 sm:h-11"
            />
          </div>

          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="popupEmail" className="text-sm">Email</Label>
            <Input
              id="popupEmail"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-secondary/50 h-10 sm:h-11"
            />
          </div>

          <div className="space-y-1 sm:space-y-2">
            <Label className="text-sm">Do you own GoHighLevel?</Label>
            <div className="flex gap-4">
              {["Yes", "No"].map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="popupOwnsHighLevel"
                    value={option}
                    checked={formData.ownsHighLevel === option}
                    onChange={(e) => setFormData({ ...formData, ownsHighLevel: e.target.value })}
                    className="w-4 h-4 text-primary focus:ring-primary accent-primary"
                  />
                  <span className="text-sm text-foreground">{option}</span>
                </label>
              ))}
            </div>
            {formData.ownsHighLevel === "No" && (
              <p className="text-xs text-muted-foreground mt-1">
                No worries! We'll set you up with a sub-account.
              </p>
            )}
          </div>

          <div className="space-y-1 sm:space-y-2">
            <Label className="text-sm">What package interests you?</Label>
            <div className="space-y-1.5 sm:space-y-2">
              {[
                { value: "build-it", label: "Build It (Most Popular)" },
                { value: "full-lead-gen", label: "Full Lead Generation" },
                { value: "ofm", label: "OFM" },
              ].map((option) => (
                <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="popupPackageInterest"
                    value={option.value}
                    checked={formData.packageInterest === option.value}
                    onChange={(e) => setFormData({ ...formData, packageInterest: e.target.value })}
                    className="w-4 h-4 text-primary focus:ring-primary accent-primary"
                  />
                  <span className="text-sm text-foreground">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <Button type="submit" variant="cta" size="lg" className="w-full h-11 sm:h-12 text-sm sm:text-base">
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
