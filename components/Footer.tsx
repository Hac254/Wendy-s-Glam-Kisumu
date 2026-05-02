import { Mail, Phone, MapPin, Instagram, TrendingUp } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Wendy's Glam Kisumu" 
                className="h-8 w-8 object-cover rounded-lg"
              />
              <span className="text-lg font-bold text-primary">Wendy&apos;s Glam</span>
            </div>
            <p className="text-foreground/60 text-sm mb-4">
              Premium beauty services in Kisumu. Nails, lashes, facials, hair & more.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/wendysglamkisumu/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://www.tiktok.com/@kisumu_makeup_artist?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                aria-label="TikTok"
              >
                <TrendingUp className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Nails & Manicures
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Lash Services
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Facials & Skincare
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Hair & Waxing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:+254799900267" className="text-foreground/60 text-sm hover:text-primary transition-colors">
                    +254 799 900 267
                  </a>
                  <p className="text-foreground/60 text-sm text-xs mt-1">WhatsApp Available</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground/60 text-sm">hello@wendysglamkisumu.co.ke</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground/60 text-sm">Opposite Kisumu Polytechnic, Kisumu, Kenya</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="font-semibold text-foreground mb-4">Find Us</h3>
          <div className="rounded-xl overflow-hidden aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.6848486522817!2d34.75897!3d-0.1066904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa5c9a4b9d9d9%3A0x1234567890abcdef!2sKisumu%20Polytechnic!5e0!3m2!1sen!2ske!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wendy's Glam Location"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border bg-background/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-foreground/60 text-sm">
            &copy; 2024 Wendy&apos;s Glam Kisumu. All rights reserved. | Premium Beauty Services.
          </p>
        </div>
      </div>
    </footer>
  );
}
