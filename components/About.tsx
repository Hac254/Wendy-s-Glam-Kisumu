import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  'Expert certified beauty technicians',
  'Premium quality products & materials',
  'Hygienic & sterile equipment',
  'Personalized services for all beauty needs',
  'Luxurious and relaxing environment',
  'Competitive pricing across all services',
];

const testimonials = [
  {
    name: 'Sarah Kipchoge',
    quote: 'The best beauty salon in Kisumu! Wendy\'s Glam offers everything I need - nails, lashes, facials, and more. Simply stunning!',
    rating: 5,
  },
  {
    name: 'Grace Mwangi',
    quote: 'I love the attention to detail and the friendly service. Every visit is a pampering experience. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Jessica Ochieng',
    quote: 'Wendy\'s Glam never disappoints. Whether it\'s nails or lashes, the quality is always incredible!',
    rating: 5,
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Wendy&apos;s Glam
            </h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              Located in the heart of Kisumu, Wendy&apos;s Glam is your ultimate destination for premium beauty services. From stunning nails and luxurious facials to beautiful lashes and professional hair care, our expert team is passionate about making you feel glamorous and confident.
            </p>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              We use only the highest quality products and follow strict hygiene protocols to ensure your safety and satisfaction. Whether you&apos;re looking for a classic manicure, bold nail art, lash extensions, or any beauty service, we&apos;ve got you covered with excellence and style.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl aspect-square flex items-center justify-center">
            <div className="w-full h-full p-6">
              <img
                src="https://i.ibb.co/KjxxgtK6/image.png"
                alt="Wendy's Glam logo"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border bg-background hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-foreground/70 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
