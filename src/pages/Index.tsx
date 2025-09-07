import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Industries } from '@/components/Industries';
import { Process } from '@/components/Process';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>
      
      <Header />
      
      <main id="main-content">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Industries />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
