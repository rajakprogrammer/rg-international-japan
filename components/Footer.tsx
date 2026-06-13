'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  const l = f.links;

  const serviceLinks = [
    { name: l.studentVisa, href: '/services#student-visa' },
    { name: l.workVisa, href: '/services#work-visa' },
    { name: l.ssw, href: '/services#ssw-visa' },
    { name: l.language, href: '/services#language-school' },
    { name: l.jobMatching, href: '/services#job-matching' },
  ];

  const companyLinks = [
    { name: l.about, href: '/about' },
    { name: l.process, href: '/process' },
    { name: l.stories, href: '/testimonials' },
    { name: l.faq, href: '/faq' },
    { name: l.contact, href: '/contact' },
  ];

  return (
    <footer className="bg-brand-blue-900 text-white">
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
            <p className="text-sm text-brand-blue-200 mb-4">{f.desc}</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-brand-gold-400" />
                <span className="text-brand-blue-200">{f.location}</span>
              </div>
              <a href="tel:096-237-6573" className="flex items-center gap-2 text-brand-blue-200 hover:text-brand-gold-400 transition-colors">
                <Phone className="h-4 w-4" />
                <span>096-237-6573</span>
              </a>
              <a href="mailto:raju.rgintl@gmail.com" className="flex items-center gap-2 text-brand-blue-200 hover:text-brand-gold-400 transition-colors">
                <Mail className="h-4 w-4" />
                <span>raju.rgintl@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-brand-gold-400 font-semibold mb-4">{f.services}</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-brand-blue-200 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-brand-gold-400 font-semibold mb-4">{f.company}</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-brand-blue-200 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-brand-gold-400 font-semibold mb-4">{f.connect}</h3>
            <p className="text-sm text-brand-blue-200 mb-4">{f.connectDesc}</p>
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

      <div className="border-t border-brand-blue-800">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-brand-blue-300">
            © {new Date().getFullYear()} {f.copyright}
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-brand-blue-300 hover:text-white transition-colors">
              {f.privacy}
            </Link>
            <Link href="/terms" className="text-brand-blue-300 hover:text-white transition-colors">
              {f.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
