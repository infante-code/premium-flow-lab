import { AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";

const problems = [
  "Your website isn't generating leads",
  "Manual follow-ups are costing you deals",
  "Paid ads aren't converting",
  "No clear marketing system in place",
];

const solutions = [
  "AI-powered websites that convert visitors into leads",
  "Automated CRM that nurtures leads 24/7",
  "Data-driven ad campaigns with real ROI",
  "Complete marketing systems built for scale",
];

export function ProblemSolutionSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Problem With Most Marketing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            You're spending money on marketing, but you're not seeing results. Sound familiar?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problems */}
          <div className="card-premium p-8 lg:p-10 bg-gradient-to-br from-destructive/5 to-transparent">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Without a System</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-destructive rounded-full" />
                  </span>
                  <span className="text-muted-foreground">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="card-premium p-8 lg:p-10 bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">With Our System</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </span>
                  <span className="text-foreground">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Arrow Transition */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-medium">
            <span>Ready to transform your marketing?</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
