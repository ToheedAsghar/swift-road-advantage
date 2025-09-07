import { UserPlus, Search, Handshake, CheckCircle, CreditCard } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Quick Onboarding',
    description: 'Submit your MC/DOT numbers, insurance, and preferences. Get approved in 24-48 hours.',
    details: ['Authority verification', 'Insurance confirmation', 'Driver profile setup', 'Equipment registration'],
  },
  {
    icon: Search,
    title: 'Load Matching',
    description: 'Our dispatch team finds high-paying loads that match your route and equipment type.',
    details: ['Route optimization', 'Rate negotiation', 'Schedule coordination', 'Backhaul planning'],
  },
  {
    icon: Handshake,
    title: 'Rate Negotiation',
    description: 'We negotiate the best rates and terms while you focus on safe, timely delivery.',
    details: ['Market rate analysis', 'Detention protection', 'Fuel surcharge inclusion', 'Payment terms'],
  },
  {
    icon: CheckCircle,
    title: 'Compliance & Tracking',
    description: 'Handle all documentation, tracking, and communication with brokers and shippers.',
    details: ['BOL management', 'Real-time tracking', 'Broker communication', 'Issue resolution'],
  },
  {
    icon: CreditCard,
    title: 'Fast Payment',
    description: 'Quick invoicing and payment processing to keep your cash flow steady.',
    details: ['Invoice generation', 'Payment tracking', 'Follow-up collection', 'Weekly settlements'],
  },
];

export const Process = () => {
  return (
    <section id="process" className="section-padding bg-section-gradient">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            How We Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 5-step process ensures you get loaded quickly with profitable freight. 
            Simple, transparent, and designed for your success.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 max-w-lg">
                  <div className="service-card">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mr-4 text-primary-foreground font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-heading font-semibold text-card-foreground">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 bg-primary rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="h-24 w-24 bg-primary rounded-full flex items-center justify-center shadow-hero lg:relative lg:z-10">
                    <step.icon className="h-12 w-12 text-primary-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white rounded-xl p-6 shadow-card">
            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-1">
                Ready to get started?
              </h3>
              <p className="text-sm text-muted-foreground">
                Join our network today and start earning more
              </p>
            </div>
            <button className="bg-primary text-primary-foreground hover:bg-primary-dark px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};