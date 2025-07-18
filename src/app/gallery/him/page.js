'use client'

import Image from 'next/image'

const galleryItems = [
  {
    image: 'https://i.pinimg.com/736x/8a/83/86/8a83866951ae61054388b61a9e887133.jpg',
    title: 'Classic Agbada',
    description: 'A regal brown agbada set perfect for weddings and traditional ceremonies.',
  },
  {
    image: 'https://i.pinimg.com/736x/a5/d3/29/a5d329bc7b479bf34c7b364cfe385adf.jpg',
    title: 'Smart Native',
    description: 'A modern native wear that blends comfort and style effortlessly.',
  },
  {
    image: 'https://www.larisfashionedge.com/cdn/shop/files/7C02C083-6A0D-4CC2-AD1D-65DAB5A2B9FA_1200x1200.jpg?v=1742433180',
    title: 'Senator Fit',
    description: 'Tailored senator wear made for confidence and class.',
  },
  {
    image: 'https://media.istockphoto.com/id/520611934/photo/beautiful-blue-suits-on-a-mannequin.jpg?s=612x612&w=0&k=20&c=xpu-XnwwNr3cgXd428zxTi3KrYqQ67sb2gClrDUUCTc=',
    title: 'Wedding Attire',
    description: 'For grooms or guests who want to step out in premium native.',
  },
  {
    image: 'https://media.istockphoto.com/id/1238037721/photo/full-length-male-mannequin.jpg?s=612x612&w=0&k=20&c=BR2FzJiewJDg8P6qx-1qQi42V4J9Da98KVGIzDxh4ls=',
    title: 'Casual Wear',
    description: 'Easygoing fit for hangouts, weekends, or casual outings.',
  },
  {
    image: 'https://i.pinimg.com/736x/b9/fe/63/b9fe63b82d73149f2f94cb2f2e896e0b.jpg',
    title: 'Statement Kaftan',
    description: 'A bold, luxurious kaftan that speaks volumes without saying a word.',
  },
]

export default function ForHimGallery() {
  return (
    <main className="min-h-screen px-6 py-32 bg-[#F3F4F6]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#6B4F31] mb-4">For Him</h1>
        <p className="text-[#8B6F4D] text-lg mb-10">
          Explore our curated collection of custom-tailored outfits designed exclusively for gentlemen of class.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#6B4F31]">{item.title}</h3>
                <p className="text-sm text-[#8B6F4D] mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
