// DO NOT add 'use client' here!

import './globals.css'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Le Tailore',
  description: 'Where Craft Meets Class – For Him & Her',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F5F5F5] text-[#2D2D2D]`}>
        {/* Navbar */}
        <Navbar />
        
        {/* Main Content - ensure no spacing issues */}
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
