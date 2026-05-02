'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Phone } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  onBookingClick: () => void;
}

export function Navigation({ onBookingClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="Wendy's Glam Kisumu" 
              className="h-10 w-10 object-cover rounded-lg"
            />
            <span className="text-lg font-bold text-primary hidden sm:inline">Wendy&apos;s Glam</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact Phone */}
          <div className="hidden lg:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <Phone className="w-4 h-4" />
            <a href="tel:+254799900267" className="text-sm font-medium">
              +254 799 900 267
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-foreground" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground" />
                )}
              </button>
            )}
            <Button
              onClick={onBookingClick}
              className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white rounded-full"
            >
              Book Now
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-border pt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={() => {
                onBookingClick();
                setIsOpen(false);
              }}
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-full"
            >
              Book Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
