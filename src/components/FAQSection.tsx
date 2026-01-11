import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How quickly can I see results?",
    answer: "Most clients see initial improvements within 2-4 weeks, with significant results typically visible within 60-90 days of implementation.",
  },
  {
    question: "Do you work with small businesses?",
    answer: "We have solutions designed specifically for small and medium-sized businesses, starting with our AI Power package.",
  },
  {
    question: "What industries do you serve?",
    answer: "We work across all industries, with particular expertise in e-commerce, SaaS, professional services, and local businesses.",
  },
  {
    question: "Is there a long-term contract?",
    answer: "No long-term contracts required. We offer flexible month-to-month arrangements because we're confident in our results.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 section-overlay">
      <div className="container-wide max-w-3xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Quick answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="card-premium overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`} 
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 pt-0 text-muted-foreground animate-fade-in-up">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
