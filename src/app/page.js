// This is a SERVER COMPONENT by default — don't add 'use client' here
'use client'
import HeroSection from '@/components/HeroSection'
import About from '@/components/About'
import Services from '@/components/Services'
import Collections from '@/components/Collections'
import Testimonials from '@/components/Testimonials'
import Gallery from '@/components/GallerySection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <Collections />
      <Testimonials />
      <Gallery />
      <CTASection />
      <Footer />
    </>
  )
}
