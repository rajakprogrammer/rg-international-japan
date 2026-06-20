'use client';

import { GraduationCap, Briefcase, FileCheck, School, Users, Languages, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import { useLanguage } from '@/context/LanguageContext';

const serviceIcons = [GraduationCap, Briefcase, FileCheck, School, Users, Languages];
const serviceIds = ['student-visa', 'work-visa', 'ssw-visa', 'language-school', 'job-matching', 'settlement'];
const serviceImages = [
  'https://images.pexels.com/photos/5416070/pexels-photo-5416070.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/2179211/pexels-photo-2179211.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1252504/pexels-photo-1252504.jpeg?auto=compress&cs=tinysrgb&w=800',
];
const serviceItemKeys = ['studentVisa', 'workVisa', 'sswVisa', 'languageSchool', 'jobMatching', 'settlement'] as const;

export default function ServicesPage() {
  const { t } = useLanguage();
  const sp = t.servicesPage;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Japan scenery"
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
              {sp.locationBadge}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {sp.title1} <span className="text-brand-gold-400">{sp.title2}</span>
            </h1>
            <p className="text-lg text-white/90">{sp.desc}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {serviceItemKeys.map((key, index) => {
              const Icon = serviceIcons[index];
              const service = sp.items[key];
              return (
                <div
                  key={serviceIds[index]}
                  id={serviceIds[index]}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 rounded-xl bg-brand-blue-100 flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-brand-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-brand-blue-900 mb-4">{service.title}</h2>
                    <p className="text-muted-foreground mb-6">{service.desc}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, fi) => (
                        <li key={fi} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-brand-gold-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="bg-brand-gold-500 hover:bg-brand-gold-600 text-white">
                      <Link href="/contact">{sp.getStarted}</Link>
                    </Button>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                      <img
                        src={serviceImages[index]}
                        alt={service.title}
                        className="w-full h-72 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900/40 to-transparent transition-opacity duration-300 group-hover:opacity-60" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
