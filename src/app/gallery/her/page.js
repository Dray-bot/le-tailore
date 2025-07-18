'use client'

import Image from 'next/image'

export default function ForHerGallery() {
  const images = [
    {
      src: 'https://sharonsaiddress.com/cdn/shop/products/Sharon-Said-Luxury-3D-Flowers-Black-Satin-Arabic-Evening-Dress-with-Cape-Elegant-Mermaid-Long-Women_06bbd7f1-93d9-4a00-950f-d501b985c62a.jpg?v=1705892152&width=1200',
      alt: 'Elegant black dress',
    },
    {
      src: 'https://image.made-in-china.com/202f0j00iHKbNfyJkUql/Spring-Summer-Women-Lady-Fashion-Floral-Beach-Sexy-Dress-Collection-Garment-Clothing-Custom-Clothes-Apparel-Design-Brand-Logo-Digital-Print-High-Quality.webp',
      alt: 'Floral spring outfit',
    },
    {
      src: 'https://i.pinimg.com/564x/98/ac/6a/98ac6a7427583934c8fc4eb45fb7896d.jpg',
      alt: 'Ankara style dress',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/African_Lace_VLM_04.jpg/250px-African_Lace_VLM_04.jpg',
      alt: 'Aso Oke fabric attire',
    },
    {
      src: 'https://i.pinimg.com/736x/1c/b4/19/1cb419d75d3d66f093c01ed2acb58324.jpg',
      alt: 'Luxury evening gown',
    },
    {
      src: 'https://img.freepik.com/premium-photo/mannequins-with-white-tshirts-store-sale_121837-20800.jpg',
      alt: 'Casual Chic outfit',
    },
  ]

  return (
    <main className="min-h-screen px-6 py-32 bg-[#F9F7F4]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#6B4F31]">For Her</h1>
        <p className="text-[#8B6F4D] text-lg mt-2">
          Discover elegance, confidence, and power—crafted for women.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm font-medium">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
