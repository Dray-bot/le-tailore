'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const galleryImages = [
  'https://live.staticflickr.com/65535/53737036751_4090f3b97d_z.jpg',
  'https://japannews.yomiuri.co.jp/wp-content/uploads/2024/08/eiji-20240717G0TG0TM9990083.jpg',
  'https://thumbs.dreamstime.com/b/male-female-fashion-designers-studio-meeting-discussing-fabric-swatches-male-female-fashion-designers-studio-meeting-358275010.jpg',
  'https://thumbs.dreamstime.com/b/experienced-young-male-fashion-designer-working-fabric-mannequin-sewing-fashionable-dress-sewing-experienced-386394043.jpg',
  'https://media.istockphoto.com/id/1338894463/photo/woman-shopping-in-the-mall.jpg?s=612x612&w=0&k=20&c=hPM8I7xPlDE7-buecktbPqXawgH9gqHDnkRZkq_59kE=',
  'https://media.sciencephoto.com/f0/22/11/77/f0221177-800px-wm.jpg',
]

const Gallery = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#fef9f4] to-[#f3f4f6]" id="gallery">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#1f2937] mb-14 tracking-wide">
          Our <span className="text-[#d8a76c]">Gallery</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-2xl shadow-xl border border-gray-200 bg-white"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <div className="relative group">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  width={500}
                  height={500}
                  className="object-cover w-full h-72 duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">
                    Look {index + 1}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
