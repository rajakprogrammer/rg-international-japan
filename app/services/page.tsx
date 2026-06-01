import { GraduationCap, Briefcase, FileCheck, School, Users, Languages, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';

const services = [
  {
    id: 'student-visa',
    icon: GraduationCap,
    title: 'Student Visa Support',
    description: 'Complete assistance for student visa applications, from choosing the right school to document preparation and submission.',
    features: [
      'Initial consultation and assessment',
      'School selection guidance',
      'Document preparation and review',
      'Certificate of Eligibility (COE) application',
      'Visa application at Japanese embassy',
      'Pre-departure briefing',
    ],
    image: 'https://images.pexels.com/photos/1436961/pexels-photo-1436961.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'work-visa',
    icon: Briefcase,
    title: 'Work Visa Support',
    description: 'Expert guidance for work visa applications, including job matching and certificate of eligibility processing.',
    features: [
      'Work visa eligibility assessment',
      'Job matching with Japanese companies',
      'Employment contract review',
      'COE application preparation',
      'Visa application support',
      'Post-arrival assistance',
    ],
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'ssw-visa',
    icon: FileCheck,
    title: 'SSW (Specified Skilled Worker) Support',
    description: 'Full support for Specified Skilled Worker visa applications, including exam preparation and registration assistance.',
    features: [
      'SSW eligibility assessment',
      'Skills test preparation support',
      'Japanese language test guidance',
      'Job matching in 14 specified industries',
      'COE and visa application',
      'Settlement assistance',
    ],
    image: 'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'language-school',
    icon: School,
    title: 'Japanese Language School Admission',
    description: 'Admission assistance to accredited Japanese language schools across Japan, from Tokyo to Osaka and beyond.',
    features: [
      'School selection based on your goals',
      'Application preparation and submission',
      'Entrance exam guidance',
      'Scholarship information',
      'Accommodation assistance',
      'Student visa support',
    ],
    image: 'https://images.pexels.com/photos/256269/pexels-photo-256269.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'job-matching',
    icon: Users,
    title: 'Job Matching & Recruitment',
    description: 'Career guidance and job matching with Japanese companies in various industries, from IT to healthcare.',
    features: [
      'Career consultation',
      'Resume and CV preparation',
      'Job search and matching',
      'Interview preparation',
      'Salary negotiation support',
      'Post-offer guidance',
    ],
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'settlement',
    icon: Languages,
    title: 'Settlement Support in Japan',
    description: 'Comprehensive support for your life in Japan, from housing to daily necessities and cultural adaptation.',
    features: [
      'Housing search assistance',
      'City registration procedures',
      'Bank account opening',
      'Health insurance setup',
      'Japanese lessons recommendations',
      'Cultural orientation',
    ],
    image: 'https://images.pexels.com/photos/2098328/pexels-photo-2098328.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-brand-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-blue-900 mb-6">
              Our <span className="text-brand-gold-500">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive support for your journey to Japan. From student visas to career placement, we guide you every step of the way with professional expertise and personalized attention.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 rounded-xl bg-brand-blue-100 flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-brand-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-brand-blue-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-brand-gold-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-brand-gold-500 hover:bg-brand-gold-600 text-white">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-72 lg:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900/30 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
