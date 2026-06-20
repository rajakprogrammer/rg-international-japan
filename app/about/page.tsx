'use client';

import { Shield, Users, Target, Award, Globe } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';

const valueIcons = [Shield, Users, Target, Globe];
const valueKeys = ['trust', 'client', 'goal', 'global'] as const;

export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/29914700/pexels-photo-29914700.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Japan Castle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-900/95 via-brand-blue-900/85 to-brand-blue-900/70" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm text-white border border-white/30 mb-6">
                <svg className="w-4 h-4 text-brand-gold-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                {a.locationBadge}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                {a.title1} <span className="text-brand-gold-400">{a.title2}</span>
              </h1>
              <p className="text-lg text-white/90 mb-6">{a.desc1}</p>
              <p className="text-white/80 mb-6">{a.desc2}</p>
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="w-16 h-16 rounded-lg bg-brand-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">RG</span>
                </div>
                <div>
                  <p className="font-semibold text-white">{a.registered}</p>
                  <p className="text-sm text-white/80">{a.registeredSub}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-brand-gold-400 mb-2">500+</p>
                    <p className="text-white/80">{a.studentsHelped}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-brand-gold-400 mb-2">98%</p>
                    <p className="text-white/80">{a.successRate}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-brand-gold-400 mb-2">10+</p>
                    <p className="text-white/80">{a.yearsExp}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-brand-gold-400 mb-2">15+</p>
                    <p className="text-white/80">{a.partnerSchools}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 border-brand-blue-200 bg-gradient-to-br from-brand-blue-50 to-white">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-brand-blue-600" />
                <h2 className="text-2xl font-bold text-brand-blue-900">{a.missionTitle}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{a.missionText}</p>
            </Card>
            <Card className="p-8 border-brand-gold-300 bg-gradient-to-br from-brand-gold-50 to-white">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-8 w-8 text-brand-gold-500" />
                <h2 className="text-2xl font-bold text-brand-blue-900">{a.visionTitle}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{a.visionText}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue-900 mb-4">{a.valuesTitle}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{a.valuesDesc}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueKeys.map((key, i) => {
              const Icon = valueIcons[i];
              return (
                <Card key={key} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-brand-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-brand-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-blue-900 mb-2">{a.values[key].title}</h3>
                  <p className="text-sm text-muted-foreground">{a.values[key].desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Representative Director */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="relative inline-block">
                  <img
                    src="/image.png"
                    alt="Gaire Raju - Representative Director"
                    className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg border-4 border-brand-gold-400 transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-2 right-2 w-12 h-12 rounded-full bg-brand-gold-500 flex items-center justify-center shadow-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 text-center md:text-left">
                <p className="text-brand-gold-500 font-medium mb-2">{a.leaderLabel}</p>
                <h2 className="text-2xl lg:text-3xl font-bold text-brand-blue-900 mb-4">{a.leaderName}</h2>
                <p className="text-muted-foreground mb-4">{a.leaderTitle}</p>
                <p className="text-muted-foreground leading-relaxed">{a.leaderDesc}</p>
                <div className="flex gap-4 mt-6 justify-center md:justify-start">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-brand-blue-600">500+</p>
                    <p className="text-sm text-muted-foreground">{a.clientsHelped}</p>
                  </div>
                  <div className="w-px bg-gray-200"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-brand-blue-600">98%</p>
                    <p className="text-sm text-muted-foreground">{a.successRate}</p>
                  </div>
                  <div className="w-px bg-gray-200"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-brand-blue-600">10+</p>
                    <p className="text-sm text-muted-foreground">{a.yearsExp}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
