import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What equipment types do you dispatch for?',
    answer: 'We dispatch for all major equipment types including dry van, reefer, flatbed, stepdeck, conestoga, box trucks, and specialized trailers. Our team has expertise across all freight categories.',
  },
  {
    question: 'How quickly can I start getting loads?',
    answer: 'Most drivers start receiving loads within 24-48 hours of completing onboarding. We verify your authority, insurance, and equipment details to get you moving as quickly as possible.',
  },
  {
    question: 'Do you charge any upfront fees?',
    answer: 'No, we have zero upfront fees, setup costs, or monthly charges. You only pay our commission percentage when we secure and you complete a load. No load, no fee.',
  },
  {
    question: 'What is your commission structure?',
    answer: 'Our commission ranges from 5-7% depending on your plan and fleet size. This includes all dispatch services, paperwork handling, broker negotiations, and support. No hidden fees.',
  },
  {
    question: 'Do I need my own authority?',
    answer: 'Yes, you need your own MC authority and insurance. We work with owner-operators and small fleets who have their own operating authority and want professional dispatch services.',
  },
  {
    question: 'How do you handle detention and lumper fees?',
    answer: 'We actively negotiate and collect detention pay when loads are delayed beyond agreed times. We also handle lumper fee arrangements and ensure these costs are covered by the shipper when possible.',
  },
  {
    question: 'What areas do you cover?',
    answer: 'We dispatch loads across all 48 contiguous states and Canada. Our extensive broker network ensures we can find profitable freight regardless of your location or preferred routes.',
  },
  {
    question: 'How often do I get paid?',
    answer: 'Payment frequency depends on your plan - weekly, bi-weekly, or daily settlements available. We handle all invoicing, follow-up, and ensure you get paid quickly and accurately.',
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about our dispatch services and how we work.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-card-foreground pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-4 text-muted-foreground leading-relaxed animate-fade-in"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="text-center mt-16">
          <div className="bg-brand-gainsboro/50 rounded-xl p-8">
            <h3 className="text-xl font-heading font-semibold text-card-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our dispatch team is available 24/7 to answer any questions about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:5551234567"
                className="bg-primary text-primary-foreground hover:bg-primary-dark px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Call (555) 123-4567
              </a>
              <a 
                href="#contact"
                className="bg-white text-primary hover:bg-gray-50 border border-primary px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};