import { supabase } from '@/lib/supabase';
import TestimonialSection from '@/components/TestimonialSection';
import CTABanner from '@/components/CTABanner';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const revalidate = 60;

async function getTestimonials() {
  const { data: testimonials } = await supabase
    .from('testimonials')
    .select('*')
    .order('created_at', { ascending: false });

  return testimonials || [];
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-brand-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-blue-900 mb-6">
              Success <span className="text-brand-gold-500">Stories</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Hear from our clients who successfully started their journey to Japan with our support. Their success is our greatest achievement.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-brand-blue-600">500+</p>
              <p className="text-sm text-muted-foreground">Successful Clients</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-brand-blue-600">98%</p>
              <p className="text-sm text-muted-foreground">Visa Success Rate</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-brand-blue-600">15+</p>
              <p className="text-sm text-muted-foreground">Countries Served</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-brand-blue-600">10+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          {testimonials.length > 0 ? (
            <TestimonialSection testimonials={testimonials} />
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No testimonials available yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-blue-900 mb-4">
              Your Success Story Starts Here
            </h2>
            <p className="text-muted-foreground mb-8">
              Join hundreds of successful clients who have started their Japan journey with RG International.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-brand-gold-500 text-white font-medium rounded-lg hover:bg-brand-gold-600 transition-colors"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
