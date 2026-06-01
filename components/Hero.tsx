import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Briefcase, Plane } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-50 via-white to-brand-gold-50" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue-100/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-gold-100/30 to-transparent" />

      <div className="relative container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue-100 px-4 py-2 text-sm text-brand-blue-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue-600"></span>
              </span>
              Trusted by 500+ international students & workers
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-blue-900 leading-tight">
              Your Gateway to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-600 to-brand-gold-500">
                Study and Work
              </span>{' '}
              Opportunities in Japan
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              RG International helps international students and workers achieve their goals in Japan through education support, career guidance, and visa assistance. Start your journey with us today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-gold-500 hover:bg-brand-gold-600 text-white">
                <Link href="/contact">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-blue-600 text-brand-blue-600 hover:bg-brand-blue-50">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 pt-6">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-brand-blue-600" />
                <span className="text-sm font-medium">Student Visa Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-brand-blue-600" />
                <span className="text-sm font-medium">Work Visa Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Plane className="h-5 w-5 text-brand-blue-600" />
                <span className="text-sm font-medium">SSW Support</span>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative lg:pl-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2179211/pexels-photo-2179211.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Tokyo cityscape with Mount Fuji"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900/40 to-transparent" />

              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-brand-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">RG</span>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-blue-900">RG International Co., Ltd.</p>
                    <p className="text-sm text-muted-foreground">Your trusted partner in Japan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full shadow-lg p-4 hidden lg:block">
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-blue-600">500+</p>
                <p className="text-xs text-muted-foreground">Success Stories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
