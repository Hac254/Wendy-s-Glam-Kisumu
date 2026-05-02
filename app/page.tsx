'use client';

import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Gallery } from '@/components/Gallery';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';
import { BookingModal } from '@/components/BookingModal';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="bg-background text-foreground">
      <Navigation onBookingClick={() => setIsBookingOpen(true)} />

      <Hero onBookingClick={() => setIsBookingOpen(true)} />

      <Services />

      <Gallery />

      <About />

      <Footer />

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  );
}
