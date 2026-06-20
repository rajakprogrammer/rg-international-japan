'use client';

import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from './ContactForm';
import { useLanguage } from '@/context/LanguageContext';

const contactInfo = {
  companyName: 'RG International Co., Ltd.',
  representative: 'Gaire Raju',
  phone: '096-237-6573',
  mobile: '080-4690-4311',
  email: 'raju.rgintl@gmail.com',
};

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

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-brand-blue-600 text-white rounded-2xl p-6 lg:p-8 h-full">
                <h2 className="text-2xl font-bold mb-6">{c.infoTitle}</h2>
                <div className="space-y-6">
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
                      <a href="mailto:raju.rgintl@gmail.com" className="text-brand-blue-100 hover:text-white transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue-500 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">{c.location}</p>
                      <p className="text-brand-blue-100">{c.locationVal}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue-500 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">{c.hours}</p>
                      <p className="text-brand-blue-100">{c.hoursWeek}</p>
                      <p className="text-brand-blue-100">{c.hoursSat}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-brand-blue-500">
                  <p className="text-sm text-brand-blue-100 mb-2">
                    <span className="font-semibold text-white">{c.company}</span> {contactInfo.companyName}
                  </p>
                  <p className="text-sm text-brand-blue-100">
                    <span className="font-semibold text-white">{c.representative}</span> {contactInfo.representative}
                  </p>
                </div>
                {/* Social Links */}
                <div className="mt-6 flex gap-3">
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
            </div>
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-brand-blue-900 mb-2">{c.mapTitle}</h2>
            <p className="text-muted-foreground">{c.locationVal}</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13455.84758678761!2d130.68537!3d32.7925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3546946bd26bfc39%3A0x95d51efc9c0e9f9e!2sFukuoka%2C%20Japan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
