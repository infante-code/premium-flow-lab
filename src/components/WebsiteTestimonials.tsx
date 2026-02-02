import { Star, ExternalLink } from "lucide-react";

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

export function WebsiteTestimonials() {
  return (
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
      </div>
    </section>
  );
}
