import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import CookieConsent from './components/CookieConsent'
import Link from 'next/link'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Johannes Borge - Service delivery for Indie Hackers',
  description: 'Service delivery for Indie Hackers',
  openGraph: {
    title: 'Johannes Borge - Service delivery for Indie Hackers',
    description: 'Service delivery for Indie Hackers',
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
    title: 'Johannes Borge - Service delivery for Indie Hackers',
    description: 'Service delivery for Indie Hackers',
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
        <footer className="bg-surface border-t border-border">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-text-secondary text-sm">
                © {new Date().getFullYear()} Johannes Borge. All rights reserved.
              </div>
              <div className="flex gap-4">
                <Link href="/privacy" className="text-text-secondary hover:text-text-primary text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-text-secondary hover:text-text-primary text-sm">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </footer>
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
} 