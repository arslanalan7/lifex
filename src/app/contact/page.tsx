import ContactPage from './ContactClient';

export const metadata = {
  title: 'Contact – LifeX Coaching',
  description: 'Get in touch to schedule a free discovery session or ask your questions.',
  openGraph: {
    title: 'Contact LifeX',
    description: 'Reach out for personalized coaching and financial help.',
    url: 'https://lifex.live/contact',
    siteName: 'LifeX',
    images: [
      {
        url: '/lifex-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact LifeX',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact LifeX',
    description: 'Let’s connect and start your transformation.',
    images: ['/lifex-og.jpg'],
    creator: '@arslonix',
  },
};

export default function Page() {
  return <ContactPage />;
}
