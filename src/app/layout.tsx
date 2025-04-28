import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'LifeX – Lifestyle & Finance Coaching',
  description: 'Personalized coaching to help you take control of your lifestyle and money.',
  keywords: ['lifestyle coaching', 'finance coaching', 'LifeX', 'Arslan ALAN'],
  authors: [{ name: 'Jack O.', url: 'https://lifex.live' }],
  openGraph: {
    title: 'LifeX – Lifestyle & Finance Coaching',
    description: 'Transform your life and finances with personalized coaching.',
    url: 'https://lifex.live',
    siteName: 'LifeX',
    images: [
      {
        url: '/lifex-og.jpg',
        width: 1200,
        height: 630,
        alt: 'LifeX Hero Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LifeX – Lifestyle & Finance Coaching',
    description: 'Empowering your lifestyle and finances with coaching.',
    creator: '@arslonix',
    images: ['/lifex-og.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
        {children}
        <Toaster position="top-center" reverseOrder={false} /> /*Böylece her sayfada toast bildirimlerini kullanabileceğiz.*/
      </body>
    </html>
  );
}
