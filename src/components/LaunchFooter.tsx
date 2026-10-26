import logo from "@/assets/logo.png";

export function LaunchFooter() {
  return (
    <footer className="relative z-10 border-t border-border/50 bg-background/60 backdrop-blur-xl">
      <div className="container-wide py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <img src={logo} alt="MDF Agency" className="h-8 w-auto" />
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} MDF Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
