import { Play, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LaunchHeader } from "@/components/LaunchHeader";
import { LaunchFooter } from "@/components/LaunchFooter";

// Paste your Wistia video ID here (the long string in your Wistia embed URL,
// e.g. "https://fast.wistia.net/embed/iframe/abc123def" -> "abc123def").
// Leave it empty to show the placeholder until the video is ready.
const WISTIA_VIDEO_ID = "";

export default function Launch() {
  return (
    <div className="page-background min-h-screen flex flex-col">
      <LaunchHeader />
      <main className="flex-1 flex items-center justify-center pt-28 pb-16">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            {/* Launch badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary text-sm font-semibold mb-8 animate-fade-in-up">
              Build and Release Launch
            </span>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-12 animate-fade-in-up animation-delay-200">
              <span className="text-foreground">Introducing </span>
              <span className="text-gradient">Build and Release</span>
            </h1>

            {/* Video */}
            <div className="max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-400">
              {WISTIA_VIDEO_ID ? (
                <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-xl glow-primary aspect-video">
                  <iframe
                    src={`https://fast.wistia.net/embed/iframe/${WISTIA_VIDEO_ID}?videoFoam=true`}
                    title="Build and Release Launch"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              ) : (
                <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-xl glass-card aspect-video flex items-center justify-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                      <Play className="w-7 h-7 text-primary ml-1" aria-hidden="true" />
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Video coming soon
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Single CTA */}
            <div className="animate-fade-in-up animation-delay-600">
              <Button variant="cta" size="lg" className="min-w-[240px] group" asChild>
                <a href="mailto:multipledesignpromotions@gmail.com">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <LaunchFooter />
    </div>
  );
}
