import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Briefcase, Plane } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image - Fukuoka Castle */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/35511835/pexels-photo-35511835.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Fukuoka Castle Japan"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-900/90 via-brand-blue-900/70 to-brand-blue-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900/60 via-transparent to-transparent" />
      </div>

      {/* Decorative Japanese pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm text-white border border-white/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold-500"></span>
              </span>
              Trusted by 500+ international students & workers
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Your Gateway to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-400 to-brand-gold-500">
                Study and Work
              </span>{' '}
              in Japan
            </h1>

            <p className="text-lg text-white/90 max-w-xl">
              Based in Fukuoka, Japan, RG International helps international students and workers achieve their dreams in Japan through education support, career guidance, and visa assistance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-gold-500 hover:bg-brand-gold-600 text-white">
                <Link href="/contact">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20 bg-transparent">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 pt-6">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-brand-gold-400" />
                <span className="text-sm font-medium text-white">Student Visa Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-brand-gold-400" />
                <span className="text-sm font-medium text-white">Work Visa Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Plane className="h-5 w-5 text-brand-gold-400" />
                <span className="text-sm font-medium text-white">SSW Support</span>
              </div>
            </div>
          </div>

          {/* Right content - Info Card */}
          <div className="relative lg:pl-8">
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/20">
              {/* Location badge */}
              <div className="absolute -top-3 left-6 bg-brand-gold-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Fukuoka, Japan
              </div>

              <div className="pt-4 space-y-6">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-brand-blue-600 mb-4">
                    <span className="text-white font-bold text-2xl">RG</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">RG International Co., Ltd.</h2>
                  <p className="text-white/80">Your trusted partner for Japan visa services</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-brand-gold-400">500+</p>
                    <p className="text-sm text-white/80">Success Stories</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-brand-gold-400">10+</p>
                    <p className="text-sm text-white/80">Years Experience</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-brand-gold-400">98%</p>
                    <p className="text-sm text-white/80">Success Rate</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-brand-gold-400">24/7</p>
                    <p className="text-sm text-white/80">Support</p>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-white/20">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <svg className="w-5 h-5 text-brand-gold-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Fukuoka City, Japan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
