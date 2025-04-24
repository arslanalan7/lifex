import ServicesPage from './ServicesClient';

export const metadata = {
  title: 'Services – LifeX Coaching',
  description: 'Discover 1-on-1 coaching, financial planning, and digital systems that help you transform your life.',
  openGraph: {
    title: 'LifeX Services',
    description: 'Explore coaching, planning, and productivity systems.',
    url: 'https://lifex.live/services',
    siteName: 'LifeX',
    images: [
      {
        url: '/lifex-og.jpg',
        width: 1200,
        height: 630,
        alt: 'LifeX Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Coaching Services',
    description: 'Personalized coaching and financial tools tailored to your life.',
    images: ['/lifex-og.jpg'],
    creator: '@arslonix',
  },
};

export default function Page() {
  return <ServicesPage />;
}
