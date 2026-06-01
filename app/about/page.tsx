import { Shield, Users, Target, Award, Globe, Heart } from 'lucide-react';
import CTABanner from '@/components/CTABanner';

const values = [
  {
    icon: Shield,
    title: 'Trust & Integrity',
    description: 'We operate with complete transparency and honesty in all our dealings.',
  },
  {
    icon: Users,
    title: 'Client-Centered',
    description: 'Your success is our priority. We tailor our services to your unique needs.',
  },
  {
    icon: Target,
    title: 'Goal-Oriented',
    description: 'We focus on achieving your specific goals, whether study, work, or settlement.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'We understand the challenges of international relocation and provide comprehensive support.',
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-brand-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-blue-900 mb-6">
                About <span className="text-brand-gold-500">RG International</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                RG International Co., Ltd. is a registered company in Japan dedicated to supporting international students and workers in achieving their dreams of studying, working, and building a career in Japan.
              </p>
              <p className="text-muted-foreground mb-6">
                With years of experience and a deep understanding of Japanese immigration procedures, we provide comprehensive guidance from initial consultation to successful settlement in Japan.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg bg-brand-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">RG</span>
                </div>
                <div>
                  <p className="font-semibold text-brand-blue-900">Registered Company in Japan</p>
                  <p className="text-sm text-muted-foreground">Officially recognized for visa support services</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-gold-500 text-white rounded-xl p-6 shadow-lg hidden lg:block">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm">Years of Excellence</p>
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
                <h2 className="text-2xl font-bold text-brand-blue-900">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide reliable, professional, and comprehensive support for international students and workers, making their journey to Japan smooth, successful, and stress-free. We are committed to bridging the gap between aspiring individuals and opportunities in Japan.
              </p>
            </Card>
            <Card className="p-8 border-brand-gold-300 bg-gradient-to-br from-brand-gold-50 to-white">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-8 w-8 text-brand-gold-500" />
                <h2 className="text-2xl font-bold text-brand-blue-900">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted international support company in Japan, known for our integrity, professionalism, and the success of our clients. We envision a world where international talent can seamlessly access opportunities in Japan.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-brand-blue-100 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-brand-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-brand-blue-900 mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
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
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Representative Director"
                    className="w-48 h-48 rounded-full object-cover mx-auto"
                  />
                  <div className="absolute bottom-2 right-2 w-12 h-12 rounded-full bg-brand-gold-500 flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 text-center md:text-left">
                <p className="text-brand-gold-500 font-medium mb-2">Leadership</p>
                <h2 className="text-2xl lg:text-3xl font-bold text-brand-blue-900 mb-4">
                  Gaire Raju
                </h2>
                <p className="text-muted-foreground mb-4">
                  Representative Director
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With over a decade of experience in international education and visa consulting, Gaire Raju founded RG International with a vision to provide genuine support to individuals aspiring to study and work in Japan. Under his leadership, the company has successfully helped hundreds of international students and workers achieve their dreams.
                </p>
                <div className="flex gap-4 mt-6 justify-center md:justify-start">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-brand-blue-600">500+</p>
                    <p className="text-sm text-muted-foreground">Clients Helped</p>
                  </div>
                  <div className="w-px bg-gray-200"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-brand-blue-600">98%</p>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                  </div>
                  <div className="w-px bg-gray-200"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-brand-blue-600">10+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
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

import { Card } from '@/components/ui/card';
