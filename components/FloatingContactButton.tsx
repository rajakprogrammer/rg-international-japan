'use client';

import { useState } from 'react';
import { MessageCircle, X, Phone, Mail, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact options popup */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl p-4 w-64 animate-in fade-in slide-in-from-bottom-2 duration-200 border border-gray-100">
          <h3 className="font-semibold text-brand-blue-800 mb-3 text-sm">Contact Us</h3>
          <div className="space-y-2">
            <a
              href="https://www.facebook.com/raju.gaire1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 rounded-xl hover:bg-blue-50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Facebook</p>
                <p className="text-xs text-muted-foreground">Message on Facebook</p>
              </div>
            </a>

            <a
              href="https://line.me/ti/p/U_WF9LrLgb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 rounded-xl hover:bg-green-50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#00B900] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349-1.089.535-2.233.535-3.434C19.9 2.862 16.306 0 11.9 0 7.494 0 3.9 2.862 3.9 6.429c0 3.151 2.77 5.783 6.516 6.318.254.055.6.168.687.387.079.199.052.51.026.71 0 0-.092.543-.111.659-.034.199-.158.779.682.425.841-.354 4.535-2.672 6.188-4.575.002-.003.004-.006.006-.009C19.141 9.33 19.365 9.863 19.365 9.863zM8.905 8.59H7.29a.37.37 0 0 1-.369-.369V5.16a.37.37 0 0 1 .369-.369.37.37 0 0 1 .369.369v2.692h1.246a.37.37 0 0 1 .369.369.37.37 0 0 1-.369.369zm1.88 0a.37.37 0 0 1-.369-.369V5.16a.37.37 0 0 1 .369-.369.37.37 0 0 1 .369.369v3.061a.37.37 0 0 1-.369.369zm4.081 0h-1.62a.37.37 0 0 1-.369-.369V5.16a.37.37 0 0 1 .369-.369.37.37 0 0 1 .369.369v.922l1.251-1.17a.37.37 0 0 1 .521.524l-.94.879.94 1.28a.37.37 0 0 1-.074.518.37.37 0 0 1-.447-.012zm-6.897-.369v-3.06a.37.37 0 0 1 .369-.369.37.37 0 0 1 .369.369v3.061a.37.37 0 0 1-.369.369.37.37 0 0 1-.369-.369z"/>
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">LINE</p>
                <p className="text-xs text-muted-foreground">Message us on LINE</p>
              </div>
            </a>

            <a
              href="tel:096-237-6573"
              className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-brand-blue-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Call Us</p>
                <p className="text-xs text-muted-foreground">096-237-6573</p>
              </div>
            </a>

            <a
              href="mailto:raju.rgintl@gmail.com"
              className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-brand-gold-500 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Email</p>
                <p className="text-xs text-muted-foreground">raju.rgintl@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Main FAB button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className={`w-14 h-14 rounded-full shadow-lg transition-all duration-200 ${
          isOpen
            ? 'bg-gray-600 hover:bg-gray-700'
            : 'bg-brand-gold-500 hover:bg-brand-gold-600'
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </Button>
    </div>
  );
}
