'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when navigating
  const handleMobileNavClick = (href) => {
    setMenuOpen(false)
  }

  return (
    <header className="fixed w-full z-50 bg-white/60 backdrop-blur-xl border-b border-[#f0eae0] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-4xl font-black text-[#4e2c1e] tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          Le Tailore
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-base font-medium text-[#4e2c1e]">
          <Link href="/" className="hover:text-[#d28a7c] transition">Home</Link>

          <div
            className="relative group"
            onMouseEnter={() => setGalleryOpen(true)}
            onMouseLeave={() => setGalleryOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#d28a7c] transition">
              Gallery <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {galleryOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 left-0 bg-white rounded-lg shadow-xl border border-[#ecdcd2] p-3 w-44 z-50"
                >
                  <Link href="/gallery/him" className="block px-4 py-2 hover:bg-[#fdf2e7] rounded text-sm">For Him</Link>
                  <Link href="/gallery/her" className="block px-4 py-2 hover:bg-[#fdf2e7] rounded text-sm">For Her</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/book" className="hover:text-[#d28a7c] transition">Book Now</Link>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden text-[#4e2c1e] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-lg px-6 pt-4 pb-6 rounded-b-xl shadow-md space-y-3"
          >
            <Link
              href="/"
              onClick={() => handleMobileNavClick('/')}
              className="block text-[#4e2c1e] text-lg font-medium"
            >
              Home
            </Link>
            <Link
              href="/gallery/him"
              onClick={() => handleMobileNavClick('/gallery/him')}
              className="block text-[#4e2c1e] text-lg font-medium"
            >
              Gallery – For Him
            </Link>
            <Link
              href="/gallery/her"
              onClick={() => handleMobileNavClick('/gallery/her')}
              className="block text-[#4e2c1e] text-lg font-medium"
            >
              Gallery – For Her
            </Link>
            <Link
              href="/book"
              onClick={() => handleMobileNavClick('/book')}
              className="block text-[#4e2c1e] text-lg font-medium"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
