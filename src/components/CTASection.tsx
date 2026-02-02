import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ghlFeatures = [
  { feature: "CRM & Pipeline Management", otherToolsCost: "$99/monthly" },
  { feature: "Unlimited Sales Funnels", otherToolsCost: "$297/monthly" },
  { feature: "Website Builder", otherToolsCost: "$29/monthly" },
  { feature: "Surveys & Forms", otherToolsCost: "$49/monthly" },
  { feature: "Email Marketing", otherToolsCost: "$99/monthly" },
  { feature: "2-Way SMS Marketing", otherToolsCost: "$99/monthly" },
  { feature: "Booking & Appointments", otherToolsCost: "$29/monthly" },
  { feature: "Workflow Automations", otherToolsCost: "$169/monthly" },
  { feature: "Courses/Products", otherToolsCost: "$99/monthly" },
  { feature: "Call Tracking", otherToolsCost: "$49/monthly" },
  { feature: "Reputation Management", otherToolsCost: "$159/monthly" },
];

export function CTASection() {
  return (
    <section className="py-24 section-overlay">
      <div className="container-wide">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary-dark" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(201_87%_25%/0.5)_100%)]" />
          
          {/* Glow Effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary-light/20 rounded-full blur-3xl" />

          <div className="relative z-10 px-6 md:px-12 py-16 md:py-24">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-primary-foreground" />
                <span className="text-primary-foreground/90 font-semibold">Powered by GoHighLevel</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Scale Your Business?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
                Replace 10+ expensive tools with one powerful platform. Here's what you get:
              </p>
            </div>

            {/* Comparison Table */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/20 hover:bg-transparent">
                      <TableHead className="text-primary-foreground font-bold text-sm uppercase tracking-wider py-4">
                        Features
                      </TableHead>
                      <TableHead className="text-primary-foreground font-bold text-sm uppercase tracking-wider text-center py-4">
                        Other Tools
                      </TableHead>
                      <TableHead className="text-primary-foreground font-bold text-sm uppercase tracking-wider text-center py-4">
                        <span className="inline-flex items-center gap-1">
                          <span className="text-yellow-300">✦</span> Included
                        </span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {ghlFeatures.map((item, index) => (
                      <TableRow 
                        key={index} 
                        className="border-white/10 hover:bg-white/5"
                      >
                        <TableCell className="text-primary-foreground/90 font-medium py-3">
                          {item.feature}
                        </TableCell>
                        <TableCell className="text-primary-foreground/60 text-center py-3">
                          {item.otherToolsCost}
                        </TableCell>
                        <TableCell className="text-center py-3">
                          <div className="flex justify-center">
                            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="text-center text-primary-foreground/60 text-sm mt-4">
                Total savings: <span className="text-primary-foreground font-semibold">$1,177+/month</span> compared to using separate tools
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <Button variant="hero" size="xl" className="group" asChild>
                  <a href="https://www.gohighlevel.com/?fp_ref=mdf" target="_blank" rel="noopener noreferrer">
                    Start Your 14-Day Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link to="/contact">
                    Talk to Our Team
                  </Link>
                </Button>
              </div>

              <p className="text-primary-foreground/60 text-sm">
                No credit card required • Cancel anytime • Full platform access
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}