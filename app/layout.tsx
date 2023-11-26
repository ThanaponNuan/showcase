import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Footer } from '@/components'


export const metadata: Metadata = {
  title: 'Showcase',
  description: 'Car showcase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        </body>
        <Footer />
    </html>
  )
}
