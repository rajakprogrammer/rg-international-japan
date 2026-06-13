'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function CTABanner() {
  const { t } = useLanguage();
  const c = t.cta;

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/35511835/pexels-photo-35511835.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Japan Castle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-900/95 to-brand-blue-800/90" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs text-white border border-white/30 mb-3">
              <svg className="w-3 h-3 text-brand-gold-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              {c.location}
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">{c.title}</h2>
            <p className="text-brand-blue-100 text-sm lg:text-base">{c.subtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-brand-gold-500 hover:bg-brand-gold-600 text-white">
              <Link href="/contact">
                {c.apply}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-brand-blue-800 border-white hover:bg-gray-100">
              <Link href="/services">{c.learn}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
