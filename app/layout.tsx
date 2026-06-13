import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RG International Co., Ltd. - Study & Work in Japan | Fukuoka',
  description: 'Based in Fukuoka, Japan, RG International provides comprehensive support for student visas, work visas, SSW visas, language school admission, and job placement in Japan.',
  keywords: ['Japan visa', 'student visa Japan', 'work visa Japan', 'SSW visa', 'study in Japan', 'work in Japan', 'Japanese language school', 'RG International', 'Fukuoka'],
  authors: [{ name: 'RG International Co., Ltd.' }],
  openGraph: {
    title: 'RG International Co., Ltd. - Study & Work in Japan | Fukuoka',
    description: 'Based in Fukuoka, Japan - Your gateway to study and work opportunities in Japan. Comprehensive support for international students and workers.',
    type: 'website',
    locale: 'en_US',
    siteName: 'RG International',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RG International Co., Ltd. - Fukuoka, Japan',
    description: 'Your gateway to study and work opportunities in Japan. Based in Fukuoka.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingContactButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
