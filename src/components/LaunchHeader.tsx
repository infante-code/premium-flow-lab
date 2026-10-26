import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export function LaunchHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <div className="container-wide h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="MDF Agency home">
          <img src={logo} alt="MDF Agency" className="h-8 w-auto" />
        </Link>
        <Button variant="cta" size="sm" asChild>
          <a href="mailto:multipledesignpromotions@gmail.com">
            <Mail className="w-4 h-4" aria-hidden="true" />
            Contact Us
          </a>
        </Button>
      </div>
    </header>
  );
}
