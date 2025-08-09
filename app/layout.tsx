import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Roamly - Extraordinary Travel Experiences',
  description: 'Explore the world with Roamly. Discover extraordinary natural beauty, rich culture, and unforgettable adventures with our curated travel experiences.',
  authors: [
    { name: 'Roamly Team', url: 'https://roamly.com' }
  ],
  keywords: [
    'Travel', 'Adventure', 'Tourism', 'Destinations', 'Vacation', 'Booking', 'Roamly', 'Travel Packages', 'Cultural Tours', 'Nature Tours'
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Roamly - Extraordinary Travel Experiences',
    description: 'Explore the world with Roamly. Discover extraordinary natural beauty, rich culture, and unforgettable adventures.',
    url: 'https://roamly.com',
    siteName: 'Roamly',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Roamly Travel Hero Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-outfit`}>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
