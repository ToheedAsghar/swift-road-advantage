import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Basic Dispatch',
    percentage: '7%',
    description: 'Perfect for new drivers getting started',
    features: [
      'Load finding & booking',
      'Basic rate negotiation',
      'Paperwork handling',
      'Weekly settlements',
      'Email support',
      'Standard broker network',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    percentage: '6%',
    description: 'Most popular for established operators',
    features: [
      'Priority load matching',
      'Advanced rate negotiation',
      'Complete paperwork handling',
      'Bi-weekly settlements',
      '24/7 phone & text support',
      'Premium broker network',
      'Route optimization',
      'Detention pay assistance',
      'Fuel card discounts',
    ],
    popular: true,
  },
  {
    name: 'Fleet Premium',
    percentage: '5%',
    description: 'For fleet owners with 5+ trucks',
    features: [
      'Dedicated dispatch team',
      'Custom rate negotiations',
      'Full back-office support',
      'Daily settlements available',
      'Dedicated account manager',
      'Exclusive freight access',
      'Advanced route planning',
      'Full detention/lumper support',
      'Fuel optimization',
      'Fleet management tools',
      'Custom reporting',
      'Priority customer service',
    ],
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-brand-gainsboro/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No hidden fees, no setup costs, no long-term contracts. 
            You only pay a percentage when we get you loaded and paid.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`service-card relative ${
                plan.popular 
                  ? 'ring-2 ring-primary shadow-hero scale-105' 
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-heading font-semibold text-card-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  <span className="text-5xl font-bold text-primary">{plan.percentage}</span>
                  <span className="text-lg text-muted-foreground ml-2">commission</span>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Only pay when you get paid
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary-dark text-primary-foreground'
                    : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                }`}
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-card-foreground mb-4">
              What's Included in Every Plan
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-card-foreground mb-2">No Setup Fees</h4>
                <p className="text-muted-foreground">Get started immediately with zero upfront costs</p>
              </div>
              
              <div className="text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-card-foreground mb-2">No Contracts</h4>
                <p className="text-muted-foreground">Cancel anytime with 30-day notice</p>
              </div>
              
              <div className="text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-card-foreground mb-2">Quick Setup</h4>
                <p className="text-muted-foreground">Start hauling loads within 24-48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};