'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="bg-[#FDF8F3] py-16 px-4 sm:px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-[#6B4F31] tracking-tight leading-tight">
          About Le Tailore
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed sm:leading-9 text-[#3B3B3B] mb-4 sm:mb-6">
          At <span className="font-semibold text-[#A67C52]">Le Tailore</span>, fashion isn’t just stitched fabric — 
          it’s an art form, a statement, and a lifestyle. We don't just tailor clothes; we tailor confidence.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#4A4A4A] max-w-3xl mx-auto mb-4 sm:mb-6">
          With roots in elegance and a vision rooted in the now, Le Tailore crafts designs that blend culture, 
          creativity, and personality. From clean, classic menswear silhouettes to bold, expressive women's fashion, 
          every piece is cut and sewn with intentionality.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#4A4A4A] max-w-3xl mx-auto">
          Whether you're dressing for a milestone moment or just stepping out in style, Le Tailore is where 
          your story meets fashion — made to measure, made to inspire.
        </p>
      </motion.div>
    </section>
  )
}

export default About
