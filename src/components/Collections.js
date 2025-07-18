'use client'

import { motion } from 'framer-motion'

const collections = [
  {
    title: 'Ankara Elegance',
    img: 'https://i.pinimg.com/564x/7d/6c/97/7d6c97638782e42ccdab647ecf69cd8c.jpg',
  },
  {
    title: 'Wedding Glam',
    img: 'https://richenmannequin.com/wp-content/uploads/2023/10/Richenmannequin-wedding-dress-male-and-female-mannequin-1.webp',
  },
  {
    title: 'Casual Chic',
    img: 'https://media.istockphoto.com/id/517604060/photo/two-mannequins-dressed-in-casual-clothes.jpg?s=612x612&w=0&k=20&c=gLsUo18h8vo89JTk3hsZR26mFCih-mhgZLCxw5hFVWs=',
  },
  {
    title: 'Corporate Looks',
    img: 'https://img.freepik.com/premium-photo/male-female-mannequins-bright-fashionable-clothes-from-new-autumn-winter-collection-showcase-store-style-fashion-vertical_120897-3861.jpg?w=360',
  },
]

export default function Collections() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#FFF9F2] text-center">
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-[#3A2C1E] mb-6 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Discover Our Collections
      </motion.h2>

      <motion.p
        className="text-[#5A4632] text-lg max-w-2xl mx-auto mb-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        A stunning blend of traditional African style and modern elegance — fashion that redefines both male and female wardrobes.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {collections.map((item, i) => (
          <motion.div
            key={i}
            className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#E8DCC9]"
            whileHover={{ scale: 1.03 }}
          >
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 bg-[#FFF]">
              <h3 className="text-xl font-semibold text-[#3A2C1E] group-hover:text-[#A0764E] transition-colors duration-300">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
