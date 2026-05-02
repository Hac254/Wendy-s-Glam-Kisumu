import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Booking Confirmed - Bold Nails Beauty',
  description: 'Your appointment has been confirmed. Thank you for booking with Bold Nails Beauty!',
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <CheckCircle className="w-20 h-20 text-primary" />
        </div>

        <h1 className="text-4xl font-bold text-foreground mb-4">Booking Confirmed!</h1>

        <p className="text-lg text-foreground/70 mb-8">
          Thank you for booking with Wendy's Glam Kisumu. We&apos;ve received a confirmation message with all the details about your appointment.
        </p>

        <div className="bg-card rounded-lg p-6 mb-8 border border-border text-left">
          <h2 className="font-semibold text-foreground mb-4">What&apos;s Next?</h2>
          <ul className="space-y-3 text-foreground/70 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Check your WhatsApp messages for appointment confirmation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Arrive 10 minutes early on the day of your appointment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Contact us if you need to reschedule</span>
            </li>
          </ul>
        </div>

        <Link href="/">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold">
            Back to Home
          </Button>
        </Link>

        <p className="text-foreground/60 text-sm mt-6">
          Questions? Contact us at{' '}
          <a href="tel:+254700123456" className="text-primary hover:underline">
            +254 700 123456
          </a>
        </p>
      </div>
    </div>
  );
}
