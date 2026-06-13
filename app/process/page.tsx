'use client';

import { MessageCircle, FileSearch, Search, Send, FileCheck, Plane } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import { useLanguage } from '@/context/LanguageContext';

const stepIcons = [MessageCircle, FileSearch, Search, Send, FileCheck, Plane];

export default function ProcessPage() {
  const { t } = useLanguage();
  const p = t.process;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/161401/fushimi-inari-torii-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Fushimi Inari Shrine"
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
              {p.locationBadge}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {p.title1} <span className="text-brand-gold-400">{p.title2}</span>
            </h1>
            <p className="text-lg text-white/90">{p.desc}</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-brand-blue-100 hidden lg:block" />
            <div className="space-y-12 lg:space-y-0">
              {p.steps.map((step, index) => {
                const Icon = stepIcons[index];
                return (
                  <div
                    key={index}
                    className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div
                      className={`w-full lg:w-5/12 ${
                        index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'
                      }`}
                    >
                      <div
                        className={`bg-white rounded-xl shadow-lg p-6 lg:p-8 border border-gray-100 ${
                          index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                        }`}
                      >
                        <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                          <div className="w-12 h-12 rounded-lg bg-brand-blue-100 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-brand-blue-600" />
                          </div>
                          <div className={`hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-brand-gold-500 text-white font-bold`}>
                            {index + 1}
                          </div>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-brand-blue-900 mb-3">{step.title}</h3>
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        <ul className={`space-y-2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                          {step.details.map((detail, i) => (
                            <li
                              key={i}
                              className={`flex items-center gap-2 text-sm text-muted-foreground ${
                                index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                              }`}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-400 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <div className="lg:hidden mt-4 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-brand-gold-500 text-white font-bold flex items-center justify-center">
                            {index + 1}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden lg:flex w-2/12 justify-center">
                      <div className="w-6 h-6 rounded-full bg-brand-gold-500 border-4 border-white shadow-lg z-10" />
                    </div>
                    <div className="hidden lg:block w-5/12" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-blue-900 mb-4">{p.timelineTitle}</h2>
              <p className="text-muted-foreground">{p.timelineDesc}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {p.timelines.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                  <p className="text-3xl font-bold text-brand-blue-600 mb-2">{item.duration}</p>
                  <p className="font-semibold text-brand-blue-900 mb-1">{item.type}</p>
                  <p className="text-sm text-muted-foreground">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
