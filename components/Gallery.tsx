'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    title: 'Elegant Nail Art',
    category: 'Design',
    image: 'https://i.ibb.co/WNSn4zsS/Whats-App-Image-2026-05-02-at-2-23-53-PM.jpg',
  },
  {
    id: 2,
    title: 'Premium Manicure',
    category: 'Luxury',
    image: 'https://i.ibb.co/TD9sZq5q/Whats-App-Image-2026-05-02-at-2-23-54-PM-1.jpg',
  },
  {
    id: 3,
    title: 'Creative Design',
    category: 'Art',
    image: 'https://i.ibb.co/s9CzwBSb/Whats-App-Image-2026-05-02-at-2-23-54-PM-2.jpg',
  },
  {
    id: 4,
    title: 'Glamorous Nails',
    category: 'Glam',
    image: 'https://i.ibb.co/Rph9KRvt/Whats-App-Image-2026-05-02-at-2-23-54-PM.jpg',
  },
  {
    id: 5,
    title: 'Stunning Finish',
    category: 'Premium',
    image: 'https://i.ibb.co/MxF2nmww/Whats-App-Image-2026-05-02-at-2-23-55-PM-1.jpg',
  },
  {
    id: 6,
    title: 'Professional Service',
    category: 'Salon',
    image: 'https://i.ibb.co/Q3ZMKP8n/Whats-App-Image-2026-05-02-at-2-23-55-PM-2.jpg',
  },
  {
    id: 7,
    title: 'Beautiful Design',
    category: 'Art',
    image: 'https://i.ibb.co/h1w9659v/Whats-App-Image-2026-05-02-at-2-23-55-PM.jpg',
  },
  {
    id: 8,
    title: 'Luxe Collection',
    category: 'Luxury',
    image: 'https://i.ibb.co/Gfq0wrt4/Whats-App-Image-2026-05-02-at-2-23-56-PM-1.jpg',
  },
  {
    id: 9,
    title: 'Artistic Nails',
    category: 'Design',
    image: 'https://i.ibb.co/cXyrsW0v/Whats-App-Image-2026-05-02-at-2-23-56-PM-2.jpg',
  },
  {
    id: 10,
    title: 'Elegant Finish',
    category: 'Premium',
    image: 'https://i.ibb.co/SwtcRkS2/Whats-App-Image-2026-05-02-at-2-23-56-PM-3.jpg',
  },
  {
    id: 11,
    title: 'Stylish Collection',
    category: 'Glam',
    image: 'https://i.ibb.co/ZRBZw5p9/Whats-App-Image-2026-05-02-at-2-23-56-PM.jpg',
  },
  {
    id: 12,
    title: 'Perfect Manicure',
    category: 'Salon',
    image: 'https://i.ibb.co/xSRPZMqd/Whats-App-Image-2026-05-02-at-2-23-57-PM-1.jpg',
  },
  {
    id: 13,
    title: 'Creative Expression',
    category: 'Art',
    image: 'https://i.ibb.co/bMjWQ2MB/Whats-App-Image-2026-05-02-at-2-23-57-PM-2.jpg',
  },
  {
    id: 14,
    title: 'Premium Look',
    category: 'Luxury',
    image: 'https://i.ibb.co/q3NNjcrB/Whats-App-Image-2026-05-02-at-2-23-57-PM.jpg',
  },
  {
    id: 15,
    title: 'Nail Perfection',
    category: 'Design',
    image: 'https://i.ibb.co/Jw9KQ0xh/Whats-App-Image-2026-05-02-at-2-23-58-PM-1.jpg',
  },
  {
    id: 16,
    title: 'Gorgeous Finish',
    category: 'Premium',
    image: 'https://i.ibb.co/3m6C9kCJ/Whats-App-Image-2026-05-02-at-2-23-58-PM-2.jpg',
  },
  {
    id: 17,
    title: 'Fabulous Nails',
    category: 'Glam',
    image: 'https://i.ibb.co/yB4vW6vk/Whats-App-Image-2026-05-02-at-2-23-58-PM-3.jpg',
  },
  {
    id: 18,
    title: 'Expert Craftsmanship',
    category: 'Salon',
    image: 'https://i.ibb.co/Jj6Mhwjn/Whats-App-Image-2026-05-02-at-2-23-58-PM.jpg',
  },
  {
    id: 19,
    title: 'Stunning Art',
    category: 'Art',
    image: 'https://i.ibb.co/HTPhyYbK/Whats-App-Image-2026-05-02-at-2-23-59-PM-1.jpg',
  },
  {
    id: 20,
    title: 'Elegant Style',
    category: 'Luxury',
    image: 'https://i.ibb.co/NgT6vpY2/Whats-App-Image-2026-05-02-at-2-23-59-PM-2.jpg',
  },
  {
    id: 21,
    title: 'Chic Design',
    category: 'Design',
    image: 'https://i.ibb.co/DDgxnmwS/Whats-App-Image-2026-05-02-at-2-23-59-PM-3.jpg',
  },
  {
    id: 22,
    title: 'Beauty Perfection',
    category: 'Premium',
    image: 'https://i.ibb.co/7xPGxTm0/Whats-App-Image-2026-05-02-at-2-23-59-PM.jpg',
  },
  {
    id: 23,
    title: 'Glamorous Look',
    category: 'Glam',
    image: 'https://i.ibb.co/0j6CLXsz/Whats-App-Image-2026-05-02-at-2-24-00-PM-1.jpg',
  },
  {
    id: 24,
    title: 'Salon Quality',
    category: 'Salon',
    image: 'https://i.ibb.co/chynMR5j/Whats-App-Image-2026-05-02-at-2-24-00-PM-2.jpg',
  },
  {
    id: 25,
    title: 'Artistic Vision',
    category: 'Art',
    image: 'https://i.ibb.co/b49Ldnw/Whats-App-Image-2026-05-02-at-2-24-00-PM-3.jpg',
  },
  {
    id: 26,
    title: 'Luxury Finish',
    category: 'Luxury',
    image: 'https://i.ibb.co/YBFndYDy/Whats-App-Image-2026-05-02-at-2-24-00-PM.jpg',
  },
  {
    id: 27,
    title: 'Stunning Design',
    category: 'Design',
    image: 'https://i.ibb.co/gMf9qS00/Whats-App-Image-2026-05-02-at-2-24-01-PM.jpg',
  },
  {
    id: 28,
    title: 'Premium Beauty',
    category: 'Premium',
    image: 'https://i.ibb.co/Xx95HVmY/Whats-App-Image-2026-05-02-at-2-24-02-PM-1.jpg',
  },
  {
    id: 29,
    title: 'Fabulous Finish',
    category: 'Glam',
    image: 'https://i.ibb.co/n8qvqscJ/Whats-App-Image-2026-05-02-at-2-24-02-PM-2.jpg',
  },
  {
    id: 30,
    title: 'Professional Touch',
    category: 'Salon',
    image: 'https://i.ibb.co/ktdQT8X/Whats-App-Image-2026-05-02-at-2-24-02-PM-3.jpg',
  },
  {
    id: 31,
    title: 'Creative Beauty',
    category: 'Art',
    image: 'https://i.ibb.co/Y4cXjW06/Whats-App-Image-2026-05-02-at-2-24-02-PM-4.jpg',
  },
  {
    id: 32,
    title: 'Luxe Design',
    category: 'Luxury',
    image: 'https://i.ibb.co/fdVXp7Nr/Whats-App-Image-2026-05-02-at-2-24-02-PM.jpg',
  },
  {
    id: 33,
    title: 'Perfect Art',
    category: 'Design',
    image: 'https://i.ibb.co/MydcHLj4/Whats-App-Image-2026-05-02-at-2-24-03-PM-1.jpg',
  },
  {
    id: 34,
    title: 'Gorgeous Collection',
    category: 'Premium',
    image: 'https://i.ibb.co/T5WcKN2/Whats-App-Image-2026-05-02-at-2-24-03-PM-2.jpg',
  },
  {
    id: 35,
    title: 'Glam Collection',
    category: 'Glam',
    image: 'https://i.ibb.co/p5S31CR/Whats-App-Image-2026-05-02-at-2-24-03-PM-3.jpg',
  },
  {
    id: 36,
    title: 'Excellence Service',
    category: 'Salon',
    image: 'https://i.ibb.co/Z1HKVHgT/Whats-App-Image-2026-05-02-at-2-24-03-PM.jpg',
  },
  {
    id: 37,
    title: 'Inspired Design',
    category: 'Art',
    image: 'https://i.ibb.co/WvXWPGLS/Whats-App-Image-2026-05-02-at-2-24-04-PM-1.jpg',
  },
  {
    id: 38,
    title: 'Luxury Details',
    category: 'Luxury',
    image: 'https://i.ibb.co/twBDm9XX/Whats-App-Image-2026-05-02-at-2-24-04-PM.jpg',
  },
  {
    id: 39,
    title: 'Beautiful Art',
    category: 'Design',
    image: 'https://i.ibb.co/27NWwzJr/Whats-App-Image-2026-05-02-at-2-23-51-PM-1.jpg',
  },
  {
    id: 40,
    title: 'Premium Service',
    category: 'Premium',
    image: 'https://i.ibb.co/svnhLL3M/Whats-App-Image-2026-05-02-at-2-23-51-PM.jpg',
  },
  {
    id: 41,
    title: 'Glamour Style',
    category: 'Glam',
    image: 'https://i.ibb.co/cS1dcktg/Whats-App-Image-2026-05-02-at-2-23-52-PM-1.jpg',
  },
  {
    id: 42,
    title: 'Salon Expertise',
    category: 'Salon',
    image: 'https://i.ibb.co/ycwxB8kB/Whats-App-Image-2026-05-02-at-2-23-52-PM-2.jpg',
  },
  {
    id: 43,
    title: 'Artistic Creation',
    category: 'Art',
    image: 'https://i.ibb.co/MxHCp80S/Whats-App-Image-2026-05-02-at-2-23-52-PM.jpg',
  },
  {
    id: 44,
    title: 'Elegant Luxury',
    category: 'Luxury',
    image: 'https://i.ibb.co/rK2zPjcj/Whats-App-Image-2026-05-02-at-2-23-53-PM-1.jpg',
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Explore our collection of stunning nail designs and transformations.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 aspect-square cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              {/* Placeholder - shows gradient background */}
              <div className="w-full h-full bg-gradient-to-br from-primary via-accent to-secondary opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

              {/* Overlay content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:bg-black/40 transition-all duration-300">
                <h3 className="text-white font-semibold text-lg text-center group-hover:opacity-100 opacity-0 transition-opacity">
                  {image.title}
                </h3>
                <p className="text-white/80 text-sm mt-2 group-hover:opacity-100 opacity-0 transition-opacity">
                  {image.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="relative max-w-2xl w-full">
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Image container */}
              <div className="w-full aspect-square bg-gradient-to-br from-primary via-accent to-secondary rounded-xl overflow-hidden shadow-2xl">
                {/* Placeholder gradient */}
                <div className="w-full h-full" />
              </div>

              {/* Image info */}
              <div className="mt-4 text-center text-white">
                <h3 className="text-2xl font-semibold">
                  {galleryImages.find((img) => img.id === selectedImage)?.title}
                </h3>
                <p className="text-white/70 mt-2">
                  {galleryImages.find((img) => img.id === selectedImage)?.category}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
