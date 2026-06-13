'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();

  const navigation = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.services, href: '/services' },
    { name: t.nav.process, href: '/process' },
    { name: t.nav.stories, href: '/testimonials' },
    { name: t.nav.contact, href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-brand-blue-600 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:096-237-6573" className="flex items-center gap-2 hover:text-brand-gold-400 transition-colors">
              <Phone className="h-4 w-4" />
              <span>096-237-6573</span>
            </a>
            <a href="mailto:raju.rgintl@gmail.com" className="flex items-center gap-2 hover:text-brand-gold-400 transition-colors">
              <Mail className="h-4 w-4" />
              <span>raju.rgintl@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-brand-gold-400">{t.nav.tagline}</span>
            {/* Language Toggle */}
            <div className="flex items-center gap-0.5 bg-brand-blue-700 rounded-full p-0.5">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  lang === 'en'
                    ? 'bg-white text-brand-blue-700 shadow'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('ja')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  lang === 'ja'
                    ? 'bg-white text-brand-blue-700 shadow'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                日本語
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-blue-600 to-brand-blue-800 flex items-center justify-center">
              <span className="text-white font-bold text-xl">RG</span>
            </div>
            <div className="hidden sm:block">
              <span className="block text-lg font-bold text-brand-blue-800">RG International</span>
              <span className="block text-xs text-muted-foreground">Co., Ltd.</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-brand-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Button asChild className="bg-brand-gold-500 hover:bg-brand-gold-600 text-white">
              <Link href="/contact">{t.nav.apply}</Link>
            </Button>
          </div>

          {/* Mobile: language + menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="flex items-center gap-0.5 bg-brand-blue-100 rounded-full p-0.5">
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all ${
                  lang === 'en'
                    ? 'bg-brand-blue-600 text-white shadow'
                    : 'text-brand-blue-600'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('ja')}
                className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all ${
                  lang === 'ja'
                    ? 'bg-brand-blue-600 text-white shadow'
                    : 'text-brand-blue-600'
                }`}
              >
                日本語
              </button>
            </div>
            <button
              type="button"
              className="p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-brand-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-brand-gold-500 hover:bg-brand-gold-600 text-white w-full">
                <Link href="/contact">{t.nav.apply}</Link>
              </Button>
              <div className="pt-4 border-t space-y-2">
                <a href="tel:096-237-6573" className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>096-237-6573</span>
                </a>
                <a href="mailto:raju.rgintl@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>raju.rgintl@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
