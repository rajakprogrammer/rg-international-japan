import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RG International Co., Ltd. - Study & Work in Japan',
  description: 'Your gateway to study and work opportunities in Japan. RG International provides comprehensive support for student visas, work visas, SSW visas, language school admission, and job placement.',
  keywords: ['Japan visa', 'student visa Japan', 'work visa Japan', 'SSW visa', 'study in Japan', 'work in Japan', 'Japanese language school', 'RG International'],
  authors: [{ name: 'RG International Co., Ltd.' }],
  openGraph: {
    title: 'RG International Co., Ltd. - Study & Work in Japan',
    description: 'Your gateway to study and work opportunities in Japan. Comprehensive support for international students and workers.',
    type: 'website',
    locale: 'en_US',
    siteName: 'RG International',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RG International Co., Ltd.',
    description: 'Your gateway to study and work opportunities in Japan.',
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
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingContactButton />
      </body>
    </html>
  );
}
