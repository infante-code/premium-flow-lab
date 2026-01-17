import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/50 py-16">
      <div className="container-wide">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src={logo} 
                alt="MDF Agency" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Building high-converting marketing systems that generate qualified leads on autopilot.
            </p>
            <div className="space-y-3">
              <a href="mailto:multipledesignpromotions@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                multipledesignpromotions@gmail.com
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get marketing tips and insights delivered to your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
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
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MDF Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link, i) => (
              <Link key={i} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
