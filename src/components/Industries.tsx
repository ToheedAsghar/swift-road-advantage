import { 
  Building2, 
  ShoppingCart, 
  Factory, 
  Hammer, 
  Truck, 
  Utensils,
  Zap,
  Package,
  Leaf,
  Car,
  Home,
  Wrench
} from 'lucide-react';

const industries = [
  {
    icon: Building2,
    title: 'Manufacturing',
    description: 'Raw materials, finished goods, and industrial equipment',
  },
  {
    icon: ShoppingCart,
    title: 'Retail & E-commerce',
    description: 'Consumer goods, electronics, and online fulfillment',
  },
  {
    icon: Factory,
    title: 'Construction',
    description: 'Building materials, heavy machinery, and construction supplies',
  },
  {
    icon: Utensils,
    title: 'Food & Beverage',
    description: 'Perishables, packaged foods, and restaurant supplies',
  },
  {
    icon: Zap,
    title: 'Energy & Oil',
    description: 'Equipment, supplies, and materials for energy sector',
  },
  {
    icon: Car,
    title: 'Automotive',
    description: 'Auto parts, vehicles, and manufacturing components',
  },
  {
    icon: Package,
    title: 'Logistics & Warehousing',
    description: 'Distribution center moves and warehouse relocations',
  },
  {
    icon: Home,
    title: 'Furniture & Home',
    description: 'Furniture, appliances, and home improvement materials',
  },
];

const equipmentTypes = [
  {
    icon: Truck,
    title: 'Dry Van',
    specs: '53\' Standard Trailers',
  },
  {
    icon: Truck,
    title: 'Reefer',
    specs: 'Temperature Controlled',
  },
  {
    icon: Truck,
    title: 'Flatbed',
    specs: 'Open Deck, 48\'-53\'',
  },
  {
    icon: Truck,
    title: 'Stepdeck',
    specs: 'Lowboy, Conestoga',
  },
  {
    icon: Package,
    title: 'Box Truck',
    specs: '16\'-26\' Straight Trucks',
  },
  {
    icon: Wrench,
    title: 'Specialized',
    specs: 'Heavy Haul, Oversized',
  },
];

export const Industries = () => {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From manufacturing to retail, we connect you with freight across all major industries. 
            Our equipment expertise ensures the right match for every load type.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-heading font-semibold text-center text-card-foreground mb-10">
            Key Industries
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className="service-card text-center group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h4 className="text-lg font-semibold text-card-foreground mb-2">
                  {industry.title}
                </h4>
                
                <p className="text-sm text-muted-foreground">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Types */}
        <div>
          <h3 className="text-2xl font-heading font-semibold text-center text-card-foreground mb-10">
            Equipment We Dispatch
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentTypes.map((equipment, index) => (
              <div
                key={equipment.title}
                className="service-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <equipment.icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground">
                      {equipment.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {equipment.specs}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-brand-gainsboro/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-card-foreground mb-4">
              Don't See Your Industry or Equipment Type?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We work with specialized freight across all industries. Contact our dispatch team 
              to discuss your specific hauling needs and equipment requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground hover:bg-primary-dark px-6 py-3 rounded-lg font-semibold transition-colors">
                Discuss My Equipment
              </button>
              <a 
                href="#contact"
                className="bg-white text-primary hover:bg-gray-50 border border-primary px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Custom Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};