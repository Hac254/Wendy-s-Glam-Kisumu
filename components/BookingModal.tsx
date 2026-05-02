'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const bookingSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number required'),
  service: z.string().min(1, 'Please select a service'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  notes: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const services = [
  'Gel Nails',
  'Acrylic Nails',
  'Nail Art Design',
  'French Manicure',
  'Pedicure',
  'Nail Repair',
  'Ombre Nails',
  'Luxury Spa',
];

const timeSlots = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    try {
      // Format booking data into WhatsApp message
      const messageText = `
🎀 *BOOKING REQUEST - Wendy's Glam* 🎀

*Customer Information:*
📝 Name: ${data.firstName} ${data.lastName}
📧 Email: ${data.email}
📱 Phone: ${data.phone}

*Appointment Details:*
💅 Service: ${data.service}
📅 Date: ${data.date}
⏰ Time: ${data.time}

${data.notes ? `*Additional Notes:*\n${data.notes}` : ''}

Looking forward to pampering you! ✨
      `.trim();

      const encodedMessage = encodeURIComponent(messageText);
      const phoneNumber = '254799900267';
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // Log for debugging
      console.log('Booking submitted:', data);

      // Open WhatsApp in new tab
      window.open(whatsappLink, '_blank');

      // Reset form and close modal
      reset();
      onClose();

      // Redirect to thank you page
      await new Promise((resolve) => setTimeout(resolve, 500));
      router.push('/thankyou');
    } catch (error) {
      console.error('Booking error:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-background rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-border">
        {/* Header */}
        <div className="sticky top-0 flex justify-between items-center p-6 border-b border-border bg-background">
          <h2 className="text-2xl font-bold text-foreground">Book Your Appointment</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                First Name
              </label>
              <input
                {...register('firstName')}
                type="text"
                placeholder="John"
                className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Last Name
              </label>
              <input
                {...register('lastName')}
                type="text"
                placeholder="Doe"
                className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email</label>
            <input
              {...register('email')}
              type="email"
              placeholder="john@example.com"
              className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
            <input
              {...register('phone')}
              type="tel"
              placeholder="+254 700 000000"
              className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Service */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Service</label>
            <select
              {...register('service')}
              className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
            )}
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Date</label>
            <input
              {...register('date')}
              type="date"
              className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.date && (
              <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>
            )}
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Time</label>
            <select
              {...register('time')}
              className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select a time</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            {errors.time && (
              <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>
            )}
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              {...register('notes')}
              placeholder="Any special requests or preferences..."
              rows={3}
              className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg font-semibold mt-6"
          >
            {isSubmitting ? 'Booking...' : 'Confirm Booking'}
          </Button>
        </form>
      </div>
    </div>
  );
}
