'use client';

import Link from 'next/link';
import { GraduationCap, Briefcase, FileCheck, School, Users, Languages } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';

const serviceIcons = [GraduationCap, Briefcase, FileCheck, School, Users, Languages];
const serviceHrefs = [
  '/services#student-visa',
  '/services#work-visa',
  '/services#ssw-visa',
  '/services#language-school',
  '/services#job-matching',
  '/services#settlement',
];

export default function ServicesOverview() {
  const { t } = useLanguage();
  const s = t.services;

  const serviceKeys = ['student', 'work', 'ssw', 'language', 'job', 'translation'] as const;

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue-100 px-4 py-2 text-sm text-brand-blue-700 mb-4">
            {s.sectionBadge}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue-900 mb-4">
            {s.sectionTitle}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {s.sectionDesc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceKeys.map((key, i) => {
            const Icon = serviceIcons[i];
            return (
              <Link key={key} href={serviceHrefs[i]} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-brand-blue-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-brand-blue-100 flex items-center justify-center mb-4 group-hover:bg-brand-blue-600 transition-colors">
                      <Icon className="h-6 w-6 text-brand-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-xl text-brand-blue-900 group-hover:text-brand-blue-600 transition-colors">
                      {s[key].title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {s[key].desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center text-brand-blue-600 hover:text-brand-blue-700 font-medium"
          >
            {s.viewAll}
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
