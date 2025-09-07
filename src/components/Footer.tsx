import { Phone, Mail, MapPin, Clock, Truck } from 'lucide-react';

const quickLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Why Choose Us', href: '#why-choose-us' },
  { name: 'How It Works', href: '#process' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
];

const services = [
  { name: 'Freight Dispatch', href: '#services' },
  { name: 'Dry Van Loads', href: '#services' },
  { name: 'Reefer Transport', href: '#services' },
  { name: 'Flatbed Services', href: '#services' },
  { name: 'Box Truck Dispatch', href: '#services' },
  { name: 'Route Optimization', href: '#services' },
];

const compliance = [
  { name: 'FMCSA Compliance', href: '#' },
  { name: 'DOT Regulations', href: '#' },
  { name: 'Safety Standards', href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Broker Agreement', href: '#' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <span className="font-heading font-bold text-xl">Swift Trucking LLC</span>
              </div>
              
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Professional dispatch services helping owner-operators and small fleets 
                maximize revenue with premium freight opportunities.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-accent" />
                  <span className="text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-accent" />
                  <span className="text-sm">dispatch@swifttrucking.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-accent mt-0.5" />
                  <span className="text-sm">123 Logistics Way<br />Dallas, TX 75201</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-accent" />
                  <span className="text-sm">24/7 Dispatch Available</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compliance & Legal */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-6">Compliance & Legal</h3>
              <ul className="space-y-3">
                {compliance.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold text-sm mb-2">Emergency Dispatch</h4>
                <p className="text-xs text-primary-foreground/80 mb-2">
                  24/7 support for urgent load issues
                </p>
                <a
                  href="tel:5551234567"
                  className="text-accent hover:text-accent-foreground font-medium text-sm"
                >
                  Call Now: (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © {currentYear} Swift Trucking LLC. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/80">
              <span>MC Authority Required</span>
              <span>•</span>
              <span>DOT Compliant</span>
              <span>•</span>
              <span>Licensed & Bonded</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-primary-foreground/10">
            <p className="text-xs text-primary-foreground/60 text-center md:text-left">
              Swift Trucking LLC is a licensed freight dispatch service. All drivers must maintain their own 
              operating authority, insurance, and DOT compliance. Rates and availability subject to market conditions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};