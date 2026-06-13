'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import CTABanner from '@/components/CTABanner';
import { useLanguage } from '@/context/LanguageContext';
import { FAQ } from '@/lib/supabase';

export default function FAQPage() {
  const { t } = useLanguage();
  const f = t.faq;

  const [faqs, setFaqs] = useState<FAQ[]>([]);

  useEffect(() => {
    supabase
      .from('faqs')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })
      .then(({ data }) => setFaqs(data || []));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3784159/pexels-photo-3784159.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Japanese architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-900/90 via-brand-blue-900/80 to-brand-blue-900/90" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm text-white border border-white/30 mb-6">
              <svg className="w-4 h-4 text-brand-gold-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              {f.locationBadge}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {f.title1} <span className="text-brand-gold-400">{f.title2}</span>
            </h1>
            <p className="text-lg text-white/90">{f.desc}</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-white rounded-lg border px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold text-brand-blue-900">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            {faqs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">{f.empty}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-brand-blue-900 mb-4">{f.stillTitle}</h2>
            <p className="text-muted-foreground mb-6">{f.stillDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-gold-500 text-white font-medium rounded-lg hover:bg-brand-gold-600 transition-colors"
              >
                {f.contactUs}
              </a>
              <a
                href="mailto:raju.rgintl@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-brand-blue-600 text-brand-blue-600 font-medium rounded-lg hover:bg-brand-blue-50 transition-colors"
              >
                {f.emailUs}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
