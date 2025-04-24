import AboutPage from './AboutClient';

export const metadata = {
  title: 'About – LifeX Coaching',
  description: 'Learn more about Jack and his mission to help people improve their lifestyle and financial well-being.',
  openGraph: {
    title: 'About Jack – LifeX',
    description: 'Meet the lifestyle and finance coach behind LifeX.',
    url: 'https://lifex.live/about',
    siteName: 'LifeX',
    images: [
      {
        url: '/lifex-og.jpg',
        width: 1200,
        height: 630,
        alt: 'About LifeX Coach',
      },
    ],
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About – LifeX Coaching',
    description: 'Learn more about Jack’s background and experience.',
    images: ['/lifex-og.jpg'],
    creator: '@arslonix',
  },
};

export default function Page() {
  return <AboutPage />;
}
