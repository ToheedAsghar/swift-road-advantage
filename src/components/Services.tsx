import { Truck, Package, Snowflake, Building, Box, Wrench } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Freight Dispatch',
    description: 'Complete load booking and dispatch services with real-time tracking and communication.',
  },
  {
    icon: Package,
    title: 'Dry Van',
    description: 'Standard enclosed trailer loads for general freight, retail goods, and packaged products.',
  },
  {
    icon: Truck,
    title: 'Flatbed',
    description: 'Construction materials, machinery, and oversized freight requiring specialized handling.',
  },
  {
    icon: Snowflake,
    title: 'Reefer',
    description: 'Temperature-controlled transportation for food, pharmaceuticals, and perishable goods.',
  },
  {
    icon: Building,
    title: 'Stepdeck/Conestoga',
    description: 'Specialized trailers for tall or awkward cargo that requires extra clearance.',
  },
  {
    icon: Box,
    title: 'Box Truck',
    description: 'Local and regional deliveries with smaller box trucks for residential and commercial needs.',
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-section-gradient">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our Dispatch Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in all types of freight to keep your trucks loaded and profitable. 
            Our experienced dispatch team works around the clock to secure the best paying loads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-card-foreground">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <div className="mt-4 pt-4 border-t border-border/50">
                <span className="text-sm font-medium text-primary hover:text-primary-dark cursor-pointer">
                  Learn More →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Ready to Start Hauling Better Loads?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Join hundreds of drivers who've increased their revenue with our professional dispatch services. 
              No setup fees, no long-term contracts.
            </p>
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};