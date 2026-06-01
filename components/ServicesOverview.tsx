import Link from 'next/link';
import { GraduationCap, Briefcase, FileCheck, School, Users, Languages } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: GraduationCap,
    title: 'Student Visa Support',
    description: 'Complete assistance for student visa applications, from document preparation to submission.',
    href: '/services#student-visa',
  },
  {
    icon: Briefcase,
    title: 'Work Visa Support',
    description: 'Expert guidance for work visa applications, including certificate of eligibility processing.',
    href: '/services#work-visa',
  },
  {
    icon: FileCheck,
    title: 'SSW Visa Support',
    description: 'Full support for Specified Skilled Worker visa applications and exam preparation.',
    href: '/services#ssw-visa',
  },
  {
    icon: School,
    title: 'Japanese Language School',
    description: 'Admission assistance to accredited Japanese language schools across Japan.',
    href: '/services#language-school',
  },
  {
    icon: Users,
    title: 'Job Placement Support',
    description: 'Career guidance and job matching with Japanese companies in various industries.',
    href: '/services#job-matching',
  },
  {
    icon: Languages,
    title: 'Translation & Consultation',
    description: 'Professional document translation and consultation services for your journey.',
    href: '/services#translation',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue-900 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support for your journey to Japan. From student visas to career placement, we guide you every step of the way.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-brand-blue-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-brand-blue-100 flex items-center justify-center mb-4 group-hover:bg-brand-blue-600 transition-colors">
                    <service.icon className="h-6 w-6 text-brand-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-brand-blue-900 group-hover:text-brand-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center text-brand-blue-600 hover:text-brand-blue-700 font-medium"
          >
            View All Services
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
