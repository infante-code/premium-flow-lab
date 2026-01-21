import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Gift } from "lucide-react";
export function ChecklistPopup() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    // Scroll trigger: 30% or end of page - always active
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 100;
      
      if (scrollPercent >= 30 || isAtBottom) {
        setIsOpen(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const webhookUrl = "https://services.leadconnectorhq.com/hooks/qhGjNIAUgMNa6ZkPi6pi/webhook-trigger/2ffc9d5f-cc15-4338-b2f3-0d7131db7e5a";

    try {
      const formPayload = new URLSearchParams({
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        phone: formData.phone,
        timestamp: new Date().toISOString(),
        source: "Free Checklist Popup",
      });

      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        mode: "no-cors",
        body: formPayload.toString(),
      });

      setIsOpen(false);
      navigate("/submission-thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsOpen(false);
      navigate("/submission-thank-you");
    } finally {
      setIsSubmitting(false);
    }
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
              <Label htmlFor="popupFirstName" className="text-sm">First Name *</Label>
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
              <Label htmlFor="popupLastName" className="text-sm">Last Name *</Label>
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
            <Label htmlFor="popupPhone" className="text-sm">Phone *</Label>
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
            <Label htmlFor="popupEmail" className="text-sm">Email *</Label>
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

          <Button 
            type="submit" 
            variant="cta" 
            size="lg" 
            className="w-full h-11 sm:h-12 text-sm sm:text-base"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Get the Free Checklist"}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </div>
  );
}
