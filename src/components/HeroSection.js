'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#fdf8f3] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/tailor.png"
          alt="Fashion Model"
          fill
          className="object-cover object-center brightness-[0.6]"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      {/* Overlay Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl">
          Refined Style for Him & Her
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-white drop-shadow-lg max-w-2xl mx-auto">
          Where fashion meets tradition — custom outfits made to fit your story.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <Link
            href="/shop"
            className="bg-white text-[#3b2d20] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#f3e8da] transition-all duration-300"
          >
            Shop Now
          </Link>
          <Link
            href="/book"
            className="bg-[#3b2d20] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#2f241a] transition-all duration-300"
          >
            Book Appointment
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
