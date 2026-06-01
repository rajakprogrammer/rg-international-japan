'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Process', href: '/process' },
  { name: 'Success Stories', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <a href="mailto:raju.rgint1@gmail.com" className="flex items-center gap-2 hover:text-brand-gold-400 transition-colors">
              <Mail className="h-4 w-4" />
              <span>raju.rgint1@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-brand-gold-400">Your Gateway to Japan</span>
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
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
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
              <Link href="/contact">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-brand-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-brand-gold-500 hover:bg-brand-gold-600 text-white w-full">
                <Link href="/contact">Apply Now</Link>
              </Button>

              {/* Mobile contact info */}
              <div className="pt-4 border-t space-y-2">
                <a href="tel:096-237-6573" className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>096-237-6573</span>
                </a>
                <a href="mailto:raju.rgint1@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>raju.rgint1@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
