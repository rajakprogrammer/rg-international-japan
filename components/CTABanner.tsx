import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CTABanner({
  title = "Start Your Journey to Japan Today",
  subtitle = "Let RG International guide you through every step of your study or work visa application.",
  primaryButtonText = "Apply Now",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Learn More",
  secondaryButtonHref = "/services",
}: CTABannerProps) {
  return (
    <section className="bg-gradient-to-r from-brand-blue-600 to-brand-blue-800 py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">{title}</h2>
            <p className="text-brand-blue-100 text-sm lg:text-base">{subtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-brand-gold-500 hover:bg-brand-gold-600 text-white">
              <Link href={primaryButtonHref}>
                {primaryButtonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-brand-blue-800 border-white hover:bg-gray-100">
              <Link href={secondaryButtonHref}>{secondaryButtonText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
