import TestimonialsPage from './TestimonialsClient';

export const metadata = {
  title: 'Testimonials – LifeX Coaching',
  description: 'Read what clients are saying about their transformation journeys with LifeX.',
  openGraph: {
    title: 'Client Testimonials – LifeX Coaching',
    description: 'Real stories and experiences from people who worked with Jack.',
    url: 'https://lifex.live/testimonials',
    siteName: 'LifeX',
    images: [
      {
        url: '/lifex-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Client Testimonials',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Testimonials',
    description: 'What LifeX clients say about their journey.',
    images: ['/lifex-og.jpg'],
    creator: '@arslonix',
  },
};

export default function Page() {
  return <TestimonialsPage />;
}
