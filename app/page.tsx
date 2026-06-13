'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTABanner from '@/components/CTABanner';
import { supabase } from '@/lib/supabase';
import TestimonialSection from '@/components/TestimonialSection';
import { useLanguage } from '@/context/LanguageContext';
import { Testimonial } from '@/lib/supabase';

export default function Home() {
  const { t } = useLanguage();
  const ts = t.testimonials;
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    supabase
      .from('testimonials')
      .select('*')
      .eq('is_featured', true)
      .order('created_at', { ascending: false })
      .limit(3)
      .then(({ data }) => setTestimonials(data || []));
  }, []);

  return (
    <div>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />

      {/* Testimonials section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue-900 mb-4">
              {ts.title1} {ts.title2}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {ts.desc}
            </p>
          </div>

          <TestimonialSection testimonials={testimonials} />

          <div className="text-center mt-8">
            <a
              href="/testimonials"
              className="inline-flex items-center text-brand-blue-600 hover:text-brand-blue-700 font-medium"
            >
              {ts.ctaDesc}
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
