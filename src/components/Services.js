'use client'

import { Scissors, Ruler, MagicWand, Needle } from 'phosphor-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: MagicWand,
    title: 'Custom Tailoring',
    desc: 'Perfectly tailored outfits crafted to fit your unique style and measurements.',
  },
  {
    icon: Scissors,
    title: 'Alterations',
    desc: 'Refined adjustments for a flawless fit on any garment you own.',
  },
  {
    icon: Needle,
    title: 'Bridal & Aso-Ebi',
    desc: 'Elegant gowns and traditional wear designed with precision and love.',
  },
  {
    icon: Ruler,
    title: 'Measurements',
    desc: 'Book a fitting session to ensure perfect sizing and expert guidance.',
  },
]

export default function Services() {
  return (
    <section className="py-24 bg-[#fdf6ee] px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4B3A2D] mb-14">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] p-8 flex flex-col items-center text-center hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
              >
                <Icon size={40} color="#4B3A2D" weight="duotone" className="mb-4" />
                <h3 className="text-xl font-semibold text-[#4B3A2D] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
