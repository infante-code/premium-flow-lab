import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoHighLevelAffiliate } from "@/components/GoHighLevelAffiliate";
import { CTASection } from "@/components/CTASection";
import { WebsiteTestimonials } from "@/components/WebsiteTestimonials";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen page-background">
      <Header />
      
      <main>
        <section className="pt-32 pb-20 section-overlay">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground mb-8">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>

              <div className="prose prose-invert max-w-none space-y-8">
                <section className="card-premium p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We collect information you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Name, email address, and phone number when you fill out our contact forms</li>
                    <li>Business information when you apply to work with us</li>
                    <li>Communication preferences and marketing consent</li>
                    <li>Any other information you choose to provide</li>
                  </ul>
                </section>

                <section className="card-premium p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Send you marketing communications (with your consent)</li>
                    <li>Deliver our marketing services and fulfill our contractual obligations</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section className="card-premium p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Marketing Communications</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    With your consent, we may send you promotional emails about our services, special offers, 
                    and marketing tips. You can opt-out of these communications at any time by clicking the 
                    "unsubscribe" link in any marketing email or by contacting us directly. Please note that 
                    even if you opt-out, we may still send you transactional or relationship-based communications.
                  </p>
                </section>

                <section className="card-premium p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share 
                    your information with:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Service providers who assist in our operations (e.g., CRM platforms, email services)</li>
                    <li>Professional advisors (lawyers, accountants) when necessary</li>
                    <li>Law enforcement when required by law</li>
                  </ul>
                </section>

                <section className="card-premium p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal 
                    information against unauthorized access, alteration, disclosure, or destruction. However, 
                    no method of transmission over the Internet is 100% secure.
                  </p>
                </section>

                <section className="card-premium p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Withdraw consent for marketing communications</li>
                    <li>Lodge a complaint with a supervisory authority</li>
                  </ul>
                </section>

                <section className="card-premium p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy or our data practices, please contact 
                    us at <a href="mailto:hello@mdfagency.com" className="text-primary hover:underline">hello@mdfagency.com</a>.
                  </p>
                </section>
              </div>
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
