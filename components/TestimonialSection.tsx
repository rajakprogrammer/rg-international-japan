import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Testimonial } from '@/lib/supabase';

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialSection({ testimonials }: TestimonialSectionProps) {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id} className="relative">
          <CardContent className="pt-6">
            {/* Quote icon */}
            <Quote className="absolute top-4 right-4 h-8 w-8 text-brand-gold-200" />

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < testimonial.rating
                      ? 'text-brand-gold-400 fill-brand-gold-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Review */}
            <p className="text-muted-foreground mb-6 leading-relaxed">
              "{testimonial.review}"
            </p>

            {/* Author info */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-brand-blue-100 flex items-center justify-center">
                <span className="text-brand-blue-600 font-semibold text-lg">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.country}</p>
              </div>
            </div>

            {/* Service tag */}
            <div className="mt-4 pt-4 border-t">
              <span className="inline-block text-xs bg-brand-blue-50 text-brand-blue-700 px-3 py-1 rounded-full">
                {testimonial.service_used}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
