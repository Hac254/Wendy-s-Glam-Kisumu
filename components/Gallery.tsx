'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    title: 'Nail Design 01',
    category: 'Nail Art',
    image: 'https://i.ibb.co/WNSn4zsS/Whats-App-Image-2026-05-02-at-2-23-53-PM.jpg',
  },
  {
    id: 2,
    title: 'Nail Design 02',
    category: 'Manicure',
    image: 'https://i.ibb.co/TD9sZq5q/Whats-App-Image-2026-05-02-at-2-23-54-PM-1.jpg',
  },
  {
    id: 3,
    title: 'Nail Design 03',
    category: 'Nail Art',
    image: 'https://i.ibb.co/s9CzwBSb/Whats-App-Image-2026-05-02-at-2-23-54-PM-2.jpg',
  },
  {
    id: 4,
    title: 'Nail Design 04',
    category: 'Gel Nails',
    image: 'https://i.ibb.co/Rph9KRvt/Whats-App-Image-2026-05-02-at-2-23-54-PM.jpg',
  },
  {
    id: 5,
    title: 'Nail Design 05',
    category: 'Manicure',
    image: 'https://i.ibb.co/MxF2nmww/Whats-App-Image-2026-05-02-at-2-23-55-PM-1.jpg',
  },
  {
    id: 6,
    title: 'Nail Design 06',
    category: 'Salon Work',
    image: 'https://i.ibb.co/Q3ZMKP8n/Whats-App-Image-2026-05-02-at-2-23-55-PM-2.jpg',
  },
  {
    id: 7,
    title: 'Nail Design 07',
    category: 'Nail Art',
    image: 'https://i.ibb.co/h1w9659v/Whats-App-Image-2026-05-02-at-2-23-55-PM.jpg',
  },
  {
    id: 8,
    title: 'Nail Design 08',
    category: 'Acrylic Nails',
    image: 'https://i.ibb.co/Gfq0wrt4/Whats-App-Image-2026-05-02-at-2-23-56-PM-1.jpg',
  },
  {
    id: 9,
    title: 'Nail Design 09',
    category: 'Nail Art',
    image: 'https://i.ibb.co/cXyrsW0v/Whats-App-Image-2026-05-02-at-2-23-56-PM-2.jpg',
  },
  {
    id: 10,
    title: 'Nail Design 10',
    category: 'Manicure',
    image: 'https://i.ibb.co/SwtcRkS2/Whats-App-Image-2026-05-02-at-2-23-56-PM-3.jpg',
  },
  {
    id: 11,
    title: 'Nail Design 11',
    category: 'Gel Nails',
    image: 'https://i.ibb.co/ZRBZw5p9/Whats-App-Image-2026-05-02-at-2-23-56-PM.jpg',
  },
  {
    id: 12,
    title: 'Nail Design 12',
    category: 'Salon Work',
    image: 'https://i.ibb.co/xSRPZMqd/Whats-App-Image-2026-05-02-at-2-23-57-PM-1.jpg',
  },
  {
    id: 13,
    title: 'Nail Design 13',
    category: 'Nail Art',
    image: 'https://i.ibb.co/bMjWQ2MB/Whats-App-Image-2026-05-02-at-2-23-57-PM-2.jpg',
  },
  {
    id: 14,
    title: 'Nail Design 14',
    category: 'Acrylic Nails',
    image: 'https://i.ibb.co/q3NNjcrB/Whats-App-Image-2026-05-02-at-2-23-57-PM.jpg',
  },
  {
    id: 15,
    title: 'Nail Design 15',
    category: 'Nail Art',
    image: 'https://i.ibb.co/Jw9KQ0xh/Whats-App-Image-2026-05-02-at-2-23-58-PM-1.jpg',
  },
  {
    id: 16,
    title: 'Nail Design 16',
    category: 'Manicure',
    image: 'https://i.ibb.co/3m6C9kCJ/Whats-App-Image-2026-05-02-at-2-23-58-PM-2.jpg',
  },
  {
    id: 17,
    title: 'Nail Design 17',
    category: 'Gel Nails',
    image: 'https://i.ibb.co/yB4vW6vk/Whats-App-Image-2026-05-02-at-2-23-58-PM-3.jpg',
  },
  {
    id: 18,
    title: 'Nail Design 18',
    category: 'Salon Work',
    image: 'https://i.ibb.co/Jj6Mhwjn/Whats-App-Image-2026-05-02-at-2-23-58-PM.jpg',
  },
  {
    id: 19,
    title: 'Nail Design 19',
    category: 'Nail Art',
    image: 'https://i.ibb.co/HTPhyYbK/Whats-App-Image-2026-05-02-at-2-23-59-PM-1.jpg',
  },
  {
    id: 20,
    title: 'Nail Design 20',
    category: 'Acrylic Nails',
    image: 'https://i.ibb.co/NgT6vpY2/Whats-App-Image-2026-05-02-at-2-23-59-PM-2.jpg',
  },
  {
    id: 21,
    title: 'Nail Design 21',
    category: 'Nail Art',
    image: 'https://i.ibb.co/DDgxnmwS/Whats-App-Image-2026-05-02-at-2-23-59-PM-3.jpg',
  },
  {
    id: 22,
    title: 'Nail Design 22',
    category: 'Manicure',
    image: 'https://i.ibb.co/7xPGxTm0/Whats-App-Image-2026-05-02-at-2-23-59-PM.jpg',
  },
  {
    id: 23,
    title: 'Nail Design 23',
    category: 'Gel Nails',
    image: 'https://i.ibb.co/0j6CLXsz/Whats-App-Image-2026-05-02-at-2-24-00-PM-1.jpg',
  },
  {
    id: 24,
    title: 'Nail Design 24',
    category: 'Salon Work',
    image: 'https://i.ibb.co/chynMR5j/Whats-App-Image-2026-05-02-at-2-24-00-PM-2.jpg',
  },
  {
    id: 25,
    title: 'Nail Design 25',
    category: 'Nail Art',
    image: 'https://i.ibb.co/b49Ldnw/Whats-App-Image-2026-05-02-at-2-24-00-PM-3.jpg',
  },
  {
    id: 26,
    title: 'Nail Design 26',
    category: 'Acrylic Nails',
    image: 'https://i.ibb.co/YBFndYDy/Whats-App-Image-2026-05-02-at-2-24-00-PM.jpg',
  },
  {
    id: 27,
    title: 'Nail Design 27',
    category: 'Nail Art',
    image: 'https://i.ibb.co/gMf9qS00/Whats-App-Image-2026-05-02-at-2-24-01-PM.jpg',
  },
  {
    id: 28,
    title: 'Nail Design 28',
    category: 'Manicure',
    image: 'https://i.ibb.co/Xx95HVmY/Whats-App-Image-2026-05-02-at-2-24-02-PM-1.jpg',
  },
  {
    id: 29,
    title: 'Nail Design 29',
    category: 'Gel Nails',
    image: 'https://i.ibb.co/n8qvqscJ/Whats-App-Image-2026-05-02-at-2-24-02-PM-2.jpg',
  },
  {
    id: 30,
    title: 'Nail Design 30',
    category: 'Salon Work',
    image: 'https://i.ibb.co/ktdQT8X/Whats-App-Image-2026-05-02-at-2-24-02-PM-3.jpg',
  },
  {
    id: 31,
    title: 'Nail Design 31',
    category: 'Nail Art',
    image: 'https://i.ibb.co/Y4cXjW06/Whats-App-Image-2026-05-02-at-2-24-02-PM-4.jpg',
  },
  {
    id: 32,
    title: 'Nail Design 32',
    category: 'Acrylic Nails',
    image: 'https://i.ibb.co/fdVXp7Nr/Whats-App-Image-2026-05-02-at-2-24-02-PM.jpg',
  },
  {
    id: 33,
    title: 'Nail Design 33',
    category: 'Nail Art',
    image: 'https://i.ibb.co/MydcHLj4/Whats-App-Image-2026-05-02-at-2-24-03-PM-1.jpg',
  },
  {
    id: 34,
    title: 'Nail Design 34',
    category: 'Manicure',
    image: 'https://i.ibb.co/T5WcKN2/Whats-App-Image-2026-05-02-at-2-24-03-PM-2.jpg',
  },
  {
    id: 35,
    title: 'Nail Design 35',
    category: 'Gel Nails',
    image: 'https://i.ibb.co/p5S31CR/Whats-App-Image-2026-05-02-at-2-24-03-PM-3.jpg',
  },
  {
    id: 36,
    title: 'Nail Design 36',
    category: 'Salon Work',
    image: 'https://i.ibb.co/Z1HKVHgT/Whats-App-Image-2026-05-02-at-2-24-03-PM.jpg',
  },
  {
    id: 37,
    title: 'Nail Design 37',
    category: 'Nail Art',
    image: 'https://i.ibb.co/WvXWPGLS/Whats-App-Image-2026-05-02-at-2-24-04-PM-1.jpg',
  },
  {
    id: 38,
    title: 'Nail Design 38',
    category: 'Acrylic Nails',
    image: 'https://i.ibb.co/twBDm9XX/Whats-App-Image-2026-05-02-at-2-24-04-PM.jpg',
  },
  {
    id: 39,
    title: 'Nail Design 39',
    category: 'Nail Art',
    image: 'https://i.ibb.co/27NWwzJr/Whats-App-Image-2026-05-02-at-2-23-51-PM-1.jpg',
  },
  {
    id: 40,
    title: 'Nail Design 40',
    category: 'Manicure',
    image: 'https://i.ibb.co/svnhLL3M/Whats-App-Image-2026-05-02-at-2-23-51-PM.jpg',
  },
  {
    id: 41,
    title: 'Nail Design 41',
    category: 'Gel Nails',
    image: 'https://i.ibb.co/cS1dcktg/Whats-App-Image-2026-05-02-at-2-23-52-PM-1.jpg',
  },
  {
    id: 42,
    title: 'Nail Design 42',
    category: 'Salon Work',
    image: 'https://i.ibb.co/ycwxB8kB/Whats-App-Image-2026-05-02-at-2-23-52-PM-2.jpg',
  },
  {
    id: 43,
    title: 'Nail Design 43',
    category: 'Nail Art',
    image: 'https://i.ibb.co/MxHCp80S/Whats-App-Image-2026-05-02-at-2-23-52-PM.jpg',
  },
  {
    id: 44,
    title: 'Nail Design 44',
    category: 'Acrylic Nails',
    image: 'https://i.ibb.co/rK2zPjcj/Whats-App-Image-2026-05-02-at-2-23-53-PM-1.jpg',
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentImage = galleryImages[currentIndex];
  const selectedImageData = galleryImages.find((img) => img.id === selectedImage);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

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

        {/* Slideshow Gallery */}
        <div className="relative max-w-5xl mx-auto">
          <div
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 w-full max-w-md mx-auto aspect-[4/5] cursor-pointer shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]"
            onClick={() => setSelectedImage(currentImage.id)}
          >
            <img
              src={currentImage.image}
              alt="Gallery image"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-sm text-white/80">Tap to view full image</p>
            </div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white text-foreground rounded-full p-2 shadow-lg transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goToNext();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white text-foreground rounded-full p-2 shadow-lg transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 overflow-x-auto pb-2">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border transition-all ${
                  index === currentIndex
                    ? 'scale-105 border-primary shadow-lg'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <img
                  src={image.image}
                  alt="Gallery thumbnail"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="relative w-full max-w-lg">
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Image container */}
              <div className="overflow-hidden rounded-3xl bg-white/5 shadow-2xl ring-1 ring-white/10">
                <img
                  src={selectedImageData?.image}
                  alt="Full view image"
                  className="mx-auto max-h-[70vh] w-full object-contain bg-black/20"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
