import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onBookingClick: () => void;
}

export function Hero({ onBookingClick }: HeroProps) {
  const handleViewGallery = () => {
    const gallerySection = document.getElementById('gallery');
    gallerySection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
          Be Bold,  <span className="text-primary">Be Beautiful</span><u> Be You.</u>
        </h1>
        <p className="text-lg sm:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto text-pretty">
          Welcome to Wendy's Glam Kisumu, Your ultimate destination for premium beauty services. From stunning nails to luxurious skincare, lashes, and more.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={onBookingClick}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg font-semibold inline-flex items-center justify-center gap-2"
          >
            Book Appointment <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            onClick={handleViewGallery}
            className="px-8 py-6 rounded-full text-lg font-semibold border-primary text-primary hover:bg-primary/5"
          >
            View Gallery
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-3 gap-6 mt-16 text-center">
          <div>
            <p className="text-3xl font-bold text-primary">1000+</p>
            <p className="text-foreground/60 text-sm">Happy Clients</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">40+</p>
            <p className="text-foreground/60 text-sm">Services</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">5★</p>
            <p className="text-foreground/60 text-sm">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
