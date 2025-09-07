import { Clock, FileText, Network, Route, DollarSign, Headphones } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '24/7 Dispatch Support',
    description: 'Round-the-clock dispatch team available whenever you need assistance, load updates, or emergency support.',
  },
  {
    icon: FileText,
    title: 'Complete Paperwork Handling',
    description: 'We manage all BOLs, rate confirmations, invoicing, and documentation so you can focus on driving.',
  },
  {
    icon: Network,
    title: 'Extensive Broker Network',
    description: 'Direct relationships with over 1,000 brokers and shippers for consistent, high-paying loads.',
  },
  {
    icon: Route,
    title: 'Route Optimization',
    description: 'Smart routing and backhaul coordination to minimize deadhead miles and maximize profits.',
  },
  {
    icon: DollarSign,
    title: 'Detention & Lumper Support',
    description: 'We fight for your detention pay and handle lumper fee negotiations to protect your bottom line.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Dispatcher',
    description: 'Each driver gets a personal dispatcher who knows your preferences, routes, and equipment.',
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Why Drivers Choose
              <span className="block text-primary">Swift Trucking</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're not just another dispatch company. We're your business partners, 
              committed to your success with personalized service and proven results.
            </p>

            <div className="space-y-6">
              {features.slice(0, 3).map((feature, index) => (
                <div key={feature.title} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.slice(3).map((feature, index) => (
              <div
                key={feature.title}
                className="service-card text-center"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-brand-gainsboro rounded-2xl p-8">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$85K+</div>
              <div className="text-sm text-muted-foreground">Average Driver Revenue</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2.1</div>
              <div className="text-sm text-muted-foreground">Loads Per Week</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">72hrs</div>
              <div className="text-sm text-muted-foreground">Average Setup Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Driver Retention Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};