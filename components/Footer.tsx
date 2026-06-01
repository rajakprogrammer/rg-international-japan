import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Student Visa Support', href: '/services#student-visa' },
    { name: 'Work Visa Support', href: '/services#work-visa' },
    { name: 'SSW Support', href: '/services#ssw-visa' },
    { name: 'Language School', href: '/services#language-school' },
    { name: 'Job Matching', href: '/services#job-matching' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Process', href: '/process' },
    { name: 'Success Stories', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-blue-900 text-white">
      {/* Main footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                <span className="text-brand-blue-800 font-bold text-xl">RG</span>
              </div>
              <div>
                <span className="block text-lg font-bold">RG International</span>
                <span className="block text-xs text-brand-blue-200">Co., Ltd.</span>
              </div>
            </div>
            <p className="text-sm text-brand-blue-200 mb-4">
              Your trusted partner for studying and working in Japan. We provide comprehensive support for international students and workers.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-brand-gold-400" />
                <span className="text-brand-blue-200">Japan</span>
              </div>
              <a href="tel:096-237-6573" className="flex items-center gap-2 text-brand-blue-200 hover:text-brand-gold-400 transition-colors">
                <Phone className="h-4 w-4" />
                <span>096-237-6573</span>
              </a>
              <a href="mailto:raju.rgint1@gmail.com" className="flex items-center gap-2 text-brand-blue-200 hover:text-brand-gold-400 transition-colors">
                <Mail className="h-4 w-4" />
                <span>raju.rgint1@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-brand-gold-400 font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-brand-blue-200 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-brand-gold-400 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-brand-blue-200 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-brand-gold-400 font-semibold mb-4">Connect With Us</h3>
            <p className="text-sm text-brand-blue-200 mb-4">
              Follow us on social media for the latest updates and news about studying and working in Japan.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-blue-800 flex items-center justify-center hover:bg-brand-gold-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-blue-800 flex items-center justify-center hover:bg-brand-gold-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-blue-800 flex items-center justify-center hover:bg-brand-gold-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-blue-800">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-brand-blue-300">
            © {new Date().getFullYear()} RG International Co., Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-brand-blue-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-brand-blue-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
