import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from './components/Navbar'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
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
        url: '/lifex-og.jpg', // 🔁 public klasöründe bu görseli ekle
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
