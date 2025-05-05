import AboutPage from './AboutClient';

export const metadata = {
  title: 'About Jack – LifeX Coaching',
  description: 'Discover how Jack empowers people to transform their lives with personalized coaching for better habits, financial freedom, and mindful living.',
  keywords: [
    'lifestyle coaching',
    'financial coach',
    'habit change',
    'personal coaching',
    'LifeX',
    'Jack Anderson',
    'well-being coach',
    'financial transformation',
    'accountability coaching'
  ],
  authors: [{ name: 'Jack Anderson', url: 'https://lifex.live/about' }],
  creator: 'Jack Anderson',
  publisher: 'LifeX Coaching',

  openGraph: {
    title: 'Meet Jack – Your Lifestyle & Finance Coach | LifeX',
    description: 'Explore Jack’s coaching philosophy and how he helps clients build better routines and financial habits through actionable strategies.',
    url: 'https://lifex.live/about',
    siteName: 'LifeX Coaching',
    images: [
      {
        url: '/lifex-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Jack – Lifestyle & Financial Coach',
      },
    ],
    type: 'profile',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'About Jack – LifeX Coaching',
    description: 'Who is Jack? Learn how he helps clients achieve mindful and financially empowered lives.',
    images: ['/lifex-og.jpg'],
    creator: '@arslonix',
  },

  metadataBase: new URL('https://lifex.live'),
};

export default function Page() {
  return <AboutPage />;
}
