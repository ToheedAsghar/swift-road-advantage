import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mike Rodriguez',
    role: 'Owner Operator',
    location: 'Texas',
    rating: 5,
    text: 'Swift Trucking has transformed my business. I went from struggling to find loads to having consistent $2.50+/mile freight. Their 24/7 support is incredible.',
    revenue: '+47% Revenue Increase',
  },
  {
    name: 'Sarah Johnson',
    role: 'Fleet Owner',
    location: 'Ohio',
    rating: 5,
    text: 'The best decision I made was partnering with Swift. They handle everything while my drivers stay loaded. Professional, reliable, and results-driven.',
    revenue: '15 Trucks Managed',
  },
  {
    name: 'Carlos Martinez',
    role: 'Owner Operator',
    location: 'California',
    rating: 5,
    text: 'Been with Swift for 2 years now. They treat you like family and always fight for the best rates. My dispatcher knows exactly what I need.',
    revenue: '$95K Annual Revenue',
  },
  {
    name: 'David Thompson',
    role: 'Reefer Specialist',
    location: 'Florida',
    rating: 5,
    text: 'Specialized in reefer loads and Swift connects me with premium temperature-controlled freight. Quick pay and excellent communication.',
    revenue: '$3.2/mile Average',
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            What Our Drivers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real drivers who've grown their businesses with Swift Trucking's 
            professional dispatch services.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out"
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="service-card text-center max-w-lg mx-auto">
                    <Quote className="h-8 w-8 text-primary/30 mx-auto mb-4" />
                    
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground mb-6 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="border-t border-border pt-4">
                      <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.location}</p>
                      <div className="mt-2 inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                        {testimonial.revenue}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-brand-gainsboro hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-brand-gainsboro'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-brand-gainsboro hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="service-card">
              <div className="flex items-start space-x-4">
                <Quote className="h-8 w-8 text-primary/30 flex-shrink-0 mt-1" />
                
                <div className="flex-1">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <div>
                      <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.location}</p>
                    </div>
                    <div className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                      {testimonial.revenue}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};