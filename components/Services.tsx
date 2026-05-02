import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const serviceCategories = [
  {
    category: 'Nail Services',
    image: 'https://i.ibb.co/yBNpDcSP/image.png',
    subcategories: ['Gel Nails', 'Acrylic Nails', 'Nail Art Design', 'French Manicure', 'Ombre Nails', 'Nail Repair', 'Dip Powder Nails']
  },
  {
    category: 'Manicures',
    image: 'https://i.ibb.co/Kz65dMvy/Whats-App-Image-2026-05-02-at-6-49-27-PM-1.jpg',
    subcategories: ['Classic Manicure', 'Gel Manicure', 'Acrylic Extensions', 'Gel Polish', 'Shellac Manicure', 'Spa Manicure']
  },
  {
    category: 'Pedicures',
    image: 'https://i.ibb.co/cST08k7n/Whats-App-Image-2026-05-02-at-6-49-27-PM-4.jpg',
    subcategories: ['Classic Pedicure', 'Gel Pedicure', 'Spa Pedicure', 'Foot Massage', 'Callus Removal', 'Nail Art Pedicure']
  },
  {
    category: 'Waxing',
    image: 'https://i.ibb.co/0jdpTqpH/Whats-App-Image-2026-05-02-at-6-49-27-PM-3.jpg',
    subcategories: ['Eyebrow Waxing', 'Full Body Waxing', 'Leg Waxing', 'Arm Waxing', 'Facial Waxing', 'Threading']
  },
  {
    category: 'Facials',
    image: 'https://i.ibb.co/jPFbF57w/image.png',
    subcategories: ['HydraFacial', 'Chemical Peel', 'Acne Treatment', 'Anti-Aging Facial', 'Brightening Facial', 'Moisture Boost Facial']
  },
  {
    category: 'Lash Services',
    image: 'https://i.ibb.co/7tsC7cLy/Whats-App-Image-2026-05-02-at-6-49-27-PM.jpg',
    subcategories: ['Eyelash Extensions', 'Lash Lift & Tint', 'Lash Perming', 'Lash Tinting', 'Lash Fill', 'Lash Removal']
  },
  {
    category: 'Hair Services',
    image: 'https://i.ibb.co/Hp7bS8nt/Whats-App-Image-2026-05-02-at-6-49-27-PM-6.jpg',
    subcategories: ['Hair Styling', 'Hair Coloring', 'Highlights & Lowlights', 'Keratin Treatment', 'Hair Cutting', 'Blowout']
  },
  {
    category: 'Eyebrow Services',
    image: 'https://i.ibb.co/2JNspDZ/Whats-App-Image-2026-05-02-at-6-49-27-PM-2.jpg',
    subcategories: ['Eyebrow Threading', 'Eyebrow Microblading', 'Eyebrow Tinting', 'Eyebrow Shaping', 'Eyebrow Lamination', 'Eyebrow Design']
  },
];

const services = serviceCategories.map((cat, idx) => ({
  title: cat.category,
  description: `Premium ${cat.category.toLowerCase()} with expert care and professional products`,
  price: `from KES ${800 + idx * 300}`,
  image: cat.image,
  subcategories: cat.subcategories,
}));

export function Services() {
  const phoneNumber = '254799900267';
  
  const handleBooking = (serviceName: string) => {
    const message = `Hi! I'm interested in booking your ${serviceName} service. Could you please provide availability?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Complete Beauty Solutions
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Discover our comprehensive range of premium beauty services. From nails to lashes, waxing to facials, we have everything to make you feel glamorous.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border bg-background hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-3">
                <div className="mb-3 overflow-hidden rounded-xl aspect-[4/3] bg-muted">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardDescription className="text-foreground/70">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-primary/80">Popular Options:</p>
                  <ul className="text-xs text-foreground/60 space-y-1">
                    {service.subcategories?.slice(0, 3).map((sub, i) => (
                      <li key={i} className="flex items-center gap-1">
                        <span className="text-primary">•</span> {sub}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-3 border-t border-border space-y-3">
                  <p className="text-primary font-bold text-sm">{service.price}</p>
                  <Button
                    onClick={() => handleBooking(service.title)}
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg flex items-center justify-center gap-2"
                    size="sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
