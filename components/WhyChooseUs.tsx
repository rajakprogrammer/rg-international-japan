'use client';

import { CheckCircle, Award, Users, Shield, Clock, HeartHandshake } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const reasonIcons = [Shield, Users, Clock, HeartHandshake];
const reasonKeys = ['registered', 'team', 'guidance', 'track'] as const;

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const w = t.why;

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2340882/pexels-photo-2340882.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Japan cityscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/95" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/35511835/pexels-photo-35511835.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Japan Castle"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-gold-500 rounded-xl shadow-xl p-6 hidden lg:block">
              <div className="text-center text-white">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm">{w.yearsExp}</p>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 bg-brand-blue-600 text-white rounded-xl shadow-xl px-4 py-3 hidden lg:block">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-gold-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-sm font-medium">{w.location}</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue-100 px-4 py-2 text-sm text-brand-blue-700 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue-600"></span>
                </span>
                {w.badge}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue-900 mb-4">
                {w.title1} <span className="text-brand-gold-500">{w.title2}</span>
              </h2>
              <p className="text-muted-foreground">{w.desc}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasonKeys.map((key, i) => {
                const Icon = reasonIcons[i];
                return (
                  <div key={key} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-brand-blue-100 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-brand-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-blue-900 mb-1">{w[key].title}</h3>
                      <p className="text-sm text-muted-foreground">{w[key].desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-6 pt-4 border-t">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">{w.visaSuccess}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-brand-gold-500" />
                <span className="text-sm font-medium">{w.verified}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-brand-blue-600" />
                <span className="text-sm font-medium">{w.clients}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
