import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoHighLevelAffiliate } from "@/components/GoHighLevelAffiliate";
import { CTASection } from "@/components/CTASection";
import { WebsiteTestimonials } from "@/components/WebsiteTestimonials";
import { Users, Target, Award, TrendingUp, CheckCircle2 } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy we implement is focused on measurable outcomes that impact your bottom line.",
  },
  {
    icon: Users,
    title: "Partner Approach",
    description: "We're invested in your success. Your wins are our wins, and we work alongside you as true partners.",
  },
  {
    icon: Award,
    title: "Proven Systems",
    description: "We use battle-tested marketing systems that have generated millions in revenue for our clients.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "We constantly optimize and improve, ensuring your marketing evolves with the market.",
  },
];

const team = [
  {
    name: "Marketing Strategist",
    role: "Growth Strategy",
    description: "Expert in developing comprehensive marketing strategies that drive sustainable growth.",
  },
  {
    name: "CRM Specialist",
    role: "Automation Expert",
    description: "Masters of GoHighLevel and marketing automation that nurtures leads 24/7.",
  },
  {
    name: "Paid Ads Manager",
    role: "Performance Marketing",
    description: "Data-driven ad specialists who maximize your ROI on Meta and Google.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen page-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 section-overlay">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                We Build Marketing Systems That{" "}
                <span className="text-gradient">Actually Work</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                MDF Agency was founded on a simple belief: marketing shouldn't be complicated. 
                We combine powerful lead generation strategies with intelligent CRM automation 
                to help businesses grow predictably.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 section-overlay">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We're on a mission to help 1,000 businesses achieve 50-100% growth through 
                  proven marketing systems. We believe every business deserves access to 
                  enterprise-level marketing strategies, regardless of size.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our approach combines the latest AI technology with time-tested marketing 
                  principles to create systems that generate leads, nurture prospects, and 
                  close deals—all on autopilot.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>100+ Clients Served</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>GoHighLevel Certified</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Meta Business Partner</span>
                  </div>
                </div>
              </div>
              <div className="card-premium p-8 md:p-12 text-center">
                <div className="text-5xl md:text-6xl font-bold text-gradient mb-4">100+</div>
                <div className="text-xl text-foreground mb-2">Businesses Helped</div>
                <div className="text-muted-foreground">achieve predictable growth</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 section-overlay">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <div
                  key={i}
                  className="card-premium p-6 text-center group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 section-overlay">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Expert Team at Your Service
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vetted marketing professionals who are proven to get results
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <div
                  key={i}
                  className="glass-card p-8 text-center group hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <div className="text-primary text-sm font-medium mb-4">{member.role}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WebsiteTestimonials />
        <GoHighLevelAffiliate />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
