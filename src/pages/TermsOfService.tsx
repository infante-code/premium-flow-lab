import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoHighLevelAffiliate } from "@/components/GoHighLevelAffiliate";

export default function TermsOfService() {
  return (
    <div className="min-h-screen page-background">
      <Header />
      
      <main>
        <section className="pt-32 pb-20 section-overlay">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
                Terms of Service
              </h1>
              <p className="text-muted-foreground mb-8">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>

              <div className="prose prose-invert max-w-none space-y-8">
                <section className="card-premium p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing or using MDF Agency's website and services, you agree to be bound by these 
                    Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section className="card-premium p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Services Description</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    MDF Agency provides digital marketing services including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>CRM setup and automation (GoHighLevel)</li>
                    <li>Lead generation campaigns</li>
                    <li>Paid advertising management (Meta Ads)</li>
                    <li>Sales funnel development</li>
                    <li>Website design and optimization</li>
                  </ul>
                </section>

                <section className="card-premium p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Payment Terms</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Payment terms vary based on the service package selected:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>One-time payments are due upon service commencement</li>
                    <li>Monthly subscriptions are billed at the beginning of each billing cycle</li>
                    <li>All fees are non-refundable unless otherwise specified in writing</li>
                    <li>Late payments may result in service suspension</li>
                  </ul>
                </section>

                <section className="card-premium p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Client Responsibilities</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    As a client, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Provide accurate and complete information necessary for service delivery</li>
                    <li>Grant necessary access to accounts and platforms as required</li>
                    <li>Review and approve content in a timely manner</li>
                    <li>Comply with all applicable advertising and marketing laws</li>
                    <li>Maintain your own business licenses and permits</li>
                  </ul>
                </section>

                <section className="card-premium p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Results Disclaimer</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    While we strive to deliver exceptional results, MDF Agency cannot guarantee specific 
                    outcomes from marketing campaigns. Results depend on various factors including market 
                    conditions, competition, and client engagement. Past performance does not guarantee 
                    future results.
                  </p>
                </section>

                <section className="card-premium p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All materials, strategies, and creative work developed by MDF Agency remain our 
                    intellectual property until full payment is received. Upon payment, clients receive 
                    a license to use deliverables for their business purposes. Our proprietary systems, 
                    templates, and methodologies remain our exclusive property.
                  </p>
                </section>

                <section className="card-premium p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Confidentiality</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Both parties agree to maintain confidentiality of proprietary information shared during 
                    the business relationship. This includes business strategies, customer data, and 
                    marketing plans. This obligation survives the termination of services.
                  </p>
                </section>

                <section className="card-premium p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    MDF Agency's liability is limited to the amount paid for services. We are not liable 
                    for any indirect, incidental, or consequential damages arising from the use of our 
                    services, including lost profits or business interruption.
                  </p>
                </section>

                <section className="card-premium p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Termination</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Either party may terminate services with 30 days written notice. Upon termination, 
                    client is responsible for payment of all services rendered. We reserve the right to 
                    terminate services immediately for breach of these terms.
                  </p>
                </section>

                <section className="card-premium p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions regarding these Terms of Service, please contact us at{" "}
                    <a href="mailto:hello@mdfagency.com" className="text-primary hover:underline">hello@mdfagency.com</a>.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>

        <GoHighLevelAffiliate />
      </main>

      <Footer />
    </div>
  );
}
