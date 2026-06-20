'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
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
            <div className="flex flex-col gap-3">
              <a
                href="https://www.facebook.com/raju.gaire1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-fit group"
              >
                <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-200">
                  <Facebook className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm text-brand-blue-200 group-hover:text-white transition-colors">Facebook</span>
              </a>
              <a
                href="https://line.me/ti/p/U_WF9LrLgb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-fit group"
              >
                <div className="w-10 h-10 rounded-full bg-[#00B900] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-200">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349-1.089.535-2.233.535-3.434C19.9 2.862 16.306 0 11.9 0 7.494 0 3.9 2.862 3.9 6.429c0 3.151 2.77 5.783 6.516 6.318.254.055.6.168.687.387.079.199.052.51.026.71 0 0-.092.543-.111.659-.034.199-.158.779.682.425.841-.354 4.535-2.672 6.188-4.575.002-.003.004-.006.006-.009C19.141 9.33 19.365 9.863 19.365 9.863zM8.905 8.59H7.29a.37.37 0 0 1-.369-.369V5.16a.37.37 0 0 1 .369-.369.37.37 0 0 1 .369.369v2.692h1.246a.37.37 0 0 1 .369.369.37.37 0 0 1-.369.369zm1.88 0a.37.37 0 0 1-.369-.369V5.16a.37.37 0 0 1 .369-.369.37.37 0 0 1 .369.369v3.061a.37.37 0 0 1-.369.369zm4.081 0h-1.62a.37.37 0 0 1-.369-.369V5.16a.37.37 0 0 1 .369-.369.37.37 0 0 1 .369.369v.922l1.251-1.17a.37.37 0 0 1 .521.524l-.94.879.94 1.28a.37.37 0 0 1-.074.518.37.37 0 0 1-.447-.012zm-6.897-.369v-3.06a.37.37 0 0 1 .369-.369.37.37 0 0 1 .369.369v3.061a.37.37 0 0 1-.369.369.37.37 0 0 1-.369-.369z"/>
                  </svg>
                </div>
                <span className="text-sm text-brand-blue-200 group-hover:text-white transition-colors">LINE</span>
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
