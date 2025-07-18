// components/CTASection.js
'use client'

import { motion } from 'framer-motion'

const CTASection = () => {
  return (
    <section className="bg-[#6B4F31] text-white py-24 px-6 md:px-16 text-center relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6B4F31]/80 to-[#3e2e1c]/90 z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
          Ready to Elevate Your Style?
        </h2>

        <p className="text-lg md:text-xl text-[#F3F4F6] mb-8 leading-relaxed">
          Discover custom-tailored outfits designed just for you. Book a fitting or explore our premium collection today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <a
            href="#Collections"
            className="bg-[#EAB308] hover:bg-yellow-400 text-black py-3.5 px-8 rounded-2xl font-semibold shadow-lg transition-all duration-300 text-base md:text-lg"
          >
            Book a Session
          </a>
          <a
            href="#"
            className="border border-white hover:bg-white hover:text-black py-3.5 px-8 rounded-2xl font-semibold transition-all duration-300 text-base md:text-lg"
          >
            View Collection
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default CTASection
