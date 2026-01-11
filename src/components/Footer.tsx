import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { label: "AI Websites", href: "#services" },
    { label: "Funnels", href: "#services" },
    { label: "CRM & Automation", href: "#services" },
    { label: "Lead Generation", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Pricing", href: "#pricing" },
    { label: "Case Studies", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container-wide">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">M</span>
              </div>
              <span className="font-bold text-xl">MDF Agency</span>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-6 leading-relaxed">
              Building high-converting marketing systems that generate qualified leads on autopilot.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@mdfagency.com" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                hello@mdfagency.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                (123) 456-7890
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm text-primary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm text-primary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Get marketing tips and insights delivered to your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-dark transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} MDF Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link, i) => (
              <a key={i} href={link.href} className="text-sm text-primary-foreground/50 hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
