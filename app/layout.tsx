import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Johannes Borge - Solo Founder & SaaS Builder',
  description: 'Helping indie hackers and SaaS builders turn their ideas into reality through accountability, technical expertise, and strategic guidance.',
  openGraph: {
    title: 'Johannes Borge - Solo Founder & SaaS Builder',
    description: 'Helping indie hackers and SaaS builders turn their ideas into reality through accountability, technical expertise, and strategic guidance.',
    images: [
      {
        url: '/images/profile.PNG',
        width: 1200,
        height: 630,
        alt: 'Johannes Borge',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Johannes Borge - Solo Founder & SaaS Builder',
    description: 'Helping indie hackers and SaaS builders turn their ideas into reality through accountability, technical expertise, and strategic guidance.',
    images: ['/images/profile.PNG'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
} 