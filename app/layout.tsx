import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Akisch Akpo - Ingénieur Software & Data',
  description: 'Portfolio of Akisch Akpo, Software & Data Engineer specializing in Full-Stack development and data systems',
  generator: 'Akisch Akpo',
  icons: {
    icon: [
      {
        url: '/placeholder-user.jpg', // Using user's profile pic for light theme icon
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/placeholder-user.jpg', // Using user's profile pic for dark theme icon
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/placeholder-user.jpg', // Generic fallback icon
        type: 'image/jpeg', // Ensure type matches the file
      },
    ],
    apple: '/placeholder-user.jpg', // Apple touch icon
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
