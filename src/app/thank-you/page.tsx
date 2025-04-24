import ThankYouPage from './ThankYouClient';

export const metadata = {
  title: 'Thanks for Your Message – LifeX Coaching',
  description: 'Your message has been received. We will get back to you as soon as possible.',
  openGraph: {
    title: 'Thanks for Your Message – LifeX Coaching',
    description: 'Your message has been received. We will get back to you as soon as possible.',
    url: 'https://lifex.live/thank-you',
    siteName: 'LifeX',
    images: [
      {
        url: '/lifex-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Thank You for Your Message',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thanks for Your Message',
    description: 'We’ll get back to you shortly!',
    images: ['/lifex-og.jpg'],
    creator: '@arslonix',
  },
};

export default function Page() {
  return <ThankYouPage />;
}
