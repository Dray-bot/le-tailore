'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Mrs. Adesuwa O.',
    role: 'Homeowner, Lekki',
    message:
      'Le Tailore made my event outfit exactly how I envisioned it. Classy, perfect fit, and stunning!',
  },
  {
    name: 'Zainab B.',
    role: 'Model, Abuja',
    message:
      'Their designs are flawless. Got so many compliments. Definitely my go-to designer now!',
  },
  {
    name: 'Chioma I.',
    role: 'Bride, Enugu',
    message:
      'They made my dream wedding dress a reality. The attention to detail is unmatched.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#fef9f4]">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4B3A2D]">
          What Our Clients Say
        </h2>
        <p className="mt-2 text-[#6B4F31] max-w-xl mx-auto">
          Real words from real people who trusted us with their style.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        loop
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="max-w-4xl mx-auto px-4"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-md"
            >
              <p className="text-lg italic text-[#4B3A2D]">“{testimonial.message}”</p>
              <div className="mt-6">
                <h4 className="text-xl font-semibold text-[#6B4F31]">{testimonial.name}</h4>
                <p className="text-sm text-[#967c61]">{testimonial.role}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
