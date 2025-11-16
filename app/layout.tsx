import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'BrightHomeAuras - Smart Indoor Gardening Devices & Accessories',
  description: 'Transform your home into a thriving garden with smart grow lights, automated watering systems, sensors, and climate control. Join 50,000+ successful indoor gardeners.',
  keywords: 'smart garden, grow lights, indoor plants, automated watering, plant sensors, home gardening, LED grow lights, smart agriculture',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon-32x32.jpg',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: '/apple-touch-icon.jpg',
  },
}

export const viewport: Viewport = {
  themeColor: '#4A5D4E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
