'use client';

import { Phone, Mail, MapPin, Facebook, ExternalLink } from 'lucide-react';
import ContactForm from './ContactForm';
import BusinessHours from '@/components/BusinessHours';
import { useLanguage } from '@/context/LanguageContext';

const contactInfo = {
  companyName: 'RG International Co., Ltd.',
  representative: 'Gaire Raju',
  phone: '096-237-6573',
  mobile: '080-4690-4311',
  email: 'raju.rgintl@gmail.com',
};

// Google Maps embed for 1 Chome-10-23 Nuyamazu, Higashi Ward, Kumamoto 861-2102
const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.1!2d130.7614!3d32.8056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540f5f4b7a5a001%3A0x0!2z44CSODYxLTIxMDIg54aK5pys55yM54aK5pys5biC5p2x5Yy65LmI725nOjHkgrgxMC0yMw!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp';

const MAPS_LINK =
  'https://maps.google.com/maps?q=1+Chome-10-23+Nuyamazu,+Higashi+Ward,+Kumamoto,+861-2102,+Japan';

export default function ContactPage() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2025382/pexels-photo-2025382.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Japanese garden"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-900/90 via-brand-blue-900/80 to-brand-blue-900/90" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm text-white border border-white/30 mb-6">
              <svg className="w-4 h-4 text-brand-gold-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              {c.locationBadge}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {c.title1} <span className="text-brand-gold-400">{c.title2}</span>
            </h1>
            <p className="text-lg text-white/90">{c.desc}</p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-brand-blue-600 text-white rounded-2xl p-6 lg:p-8">
                <h2 className="text-2xl font-bold mb-6">{c.infoTitle}</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue-500 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">{c.phone}</p>
                      <a href="tel:096-237-6573" className="text-brand-blue-100 hover:text-white transition-colors">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue-500 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">{c.mobile}</p>
                      <a href="tel:080-4690-4311" className="text-brand-blue-100 hover:text-white transition-colors">
                        {contactInfo.mobile}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue-500 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">{c.email}</p>
                      <a href="mailto:raju.rgintl@gmail.com" className="text-brand-blue-100 hover:text-white transition-colors break-all">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue-500 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">{c.addressLabel} / 住所</p>
                      <p className="text-brand-blue-100 text-sm leading-relaxed mt-1">
                        {c.addressLine1}
                        {c.addressLine2 && <><br />{c.addressLine2}</>}
                        {c.addressLine3 && <><br />{c.addressLine3}</>}
                      </p>
                      <a
                        href={MAPS_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-brand-gold-300 hover:text-brand-gold-200 text-xs transition-colors"
                      >
                        <ExternalLink className="h-3 w-3" />
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-brand-blue-500">
                  <p className="text-sm text-brand-blue-100 mb-1">
                    <span className="font-semibold text-white">{c.company}</span> {contactInfo.companyName}
                  </p>
                  <p className="text-sm text-brand-blue-100">
                    <span className="font-semibold text-white">{c.representative}</span> {contactInfo.representative}
                  </p>
                </div>

                {/* Social Links */}
                <div className="mt-6 flex gap-3 flex-wrap">
                  <a
                    href="https://www.facebook.com/raju.gaire1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1877F2] text-white text-sm font-medium hover:bg-[#166FE5] hover:scale-105 transition-all duration-200 shadow-md"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </a>
                  <a
                    href="https://line.me/ti/p/U_WF9LrLgb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00B900] text-white text-sm font-medium hover:bg-[#00A000] hover:scale-105 transition-all duration-200 shadow-md"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.365 9.863c.349-1.089.535-2.233.535-3.434C19.9 2.862 16.306 0 11.9 0 7.494 0 3.9 2.862 3.9 6.429c0 3.151 2.77 5.783 6.516 6.318.254.055.6.168.687.387.079.199.052.51.026.71 0 0-.092.543-.111.659-.034.199-.158.779.682.425.841-.354 4.535-2.672 6.188-4.575.002-.003.004-.006.006-.009C19.141 9.33 19.365 9.863 19.365 9.863zM8.905 8.59H7.29a.37.37 0 0 1-.369-.369V5.16a.37.37 0 0 1 .369-.369.37.37 0 0 1 .369.369v2.692h1.246a.37.37 0 0 1 .369.369.37.37 0 0 1-.369.369zm1.88 0a.37.37 0 0 1-.369-.369V5.16a.37.37 0 0 1 .369-.369.37.37 0 0 1 .369.369v3.061a.37.37 0 0 1-.369.369zm4.081 0h-1.62a.37.37 0 0 1-.369-.369V5.16a.37.37 0 0 1 .369-.369.37.37 0 0 1 .369.369v.922l1.251-1.17a.37.37 0 0 1 .521.524l-.94.879.94 1.28a.37.37 0 0 1-.074.518.37.37 0 0 1-.447-.012zm-6.897-.369v-3.06a.37.37 0 0 1 .369-.369.37.37 0 0 1 .369.369v3.061a.37.37 0 0 1-.369.369.37.37 0 0 1-.369-.369z"/>
                    </svg>
                    LINE
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <BusinessHours />
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue-100 px-4 py-2 text-sm text-brand-blue-700 mb-4">
              <MapPin className="w-4 h-4" />
              {c.mapTitle} / 所在地
            </div>
            <h2 className="text-3xl font-bold text-brand-blue-900 mb-3">
              {c.mapSubtitle}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              {c.addressLine1}
              {c.addressLine2 && <>, {c.addressLine2}</>}
              {c.addressLine3 && <>, {c.addressLine3}</>}
            </p>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 px-5 py-2.5 bg-brand-blue-600 text-white text-sm font-medium rounded-full hover:bg-brand-blue-700 hover:scale-105 transition-all duration-200 shadow-md"
            >
              <ExternalLink className="h-4 w-4" />
              Open in Google Maps
            </a>
          </div>

          {/* Map + address card side by side on desktop */}
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {/* Map embed */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <iframe
                  src={MAPS_EMBED_URL}
                  width="100%"
                  height="440"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="RG International Co., Ltd. — Kumamoto"
                />
              </div>
            </div>

            {/* Address detail card */}
            <div className="space-y-4">
              <div className="bg-brand-blue-50 rounded-2xl p-6 border border-brand-blue-100 hover:border-brand-blue-300 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue-600 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-blue-900 text-sm">Office Address</p>
                    <p className="text-xs text-muted-foreground">事務所住所</p>
                  </div>
                </div>
                <div className="space-y-1 text-sm text-brand-blue-800 leading-relaxed">
                  <p className="font-semibold text-brand-blue-900">RG International Co., Ltd.</p>
                  <p className="text-xs text-muted-foreground">ケイ・エムデザイン</p>
                  <div className="pt-2 border-t border-brand-blue-200 mt-2">
                    <p>1 Chome-10-23 Nuyamazu</p>
                    <p>Higashi Ward</p>
                    <p>Kumamoto, 861-2102</p>
                    <p>Japan</p>
                  </div>
                  <div className="pt-2 border-t border-brand-blue-200 mt-2 text-xs text-muted-foreground">
                    <p>熊本県熊本市東区沼山津1丁目10番23号</p>
                  </div>
                </div>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 bg-brand-blue-600 text-white text-sm font-medium rounded-xl hover:bg-brand-blue-700 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Get Directions
                </a>
              </div>

              {/* Compact hours card */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-brand-gold-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span className="font-semibold text-brand-blue-900 text-sm">Business Hours</span>
                  <span className="text-xs text-muted-foreground">/ 営業時間</span>
                </div>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Mon – Fri <span className="text-xs">月〜金</span></span>
                    <span className="font-medium text-brand-blue-800">9:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Sat – Sun <span className="text-xs">土・日</span></span>
                    <span className="font-medium text-gray-400">Closed / 定休日</span>
                  </div>
                  <p className="text-xs text-muted-foreground pt-1 border-t border-gray-100 mt-1">
                    Japan Standard Time (UTC+9)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
