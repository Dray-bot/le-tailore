'use client'

import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#EFE5DA] text-[#3E2C20] py-16 px-6 md:px-20 transition-all duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Brand Statement */}
        <div>
          <h2 className="text-3xl font-bold font-serif tracking-wide mb-4">
            Le Tailore
          </h2>
          <p className="text-sm leading-relaxed text-[#5C4433]">
            Timeless, tailored, and tasteful — where luxury meets culture. Crafted for both men and women who wear confidence.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigate</h3>
          <ul className="space-y-3 text-sm text-[#5C4433]">
            {[
              { label: 'Home', href: '#home' },
              { label: 'About', href: '#about' },
              { label: 'Services', href: '#services' },
              { label: 'Gallery', href: '#gallery' },
            ].map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="hover:text-[#C8A961] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info + Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <div className="text-sm text-[#5C4433] mb-4 space-y-2">
            <p>
              <span className="font-medium">Email:</span>{' '}
              <a
                href="mailto:hello@letailore.com"
                className="underline hover:text-[#C8A961]"
              >
                hello@letailore.com
              </a>
            </p>
            <p>
              <span className="font-medium">Phone:</span> +234 812 345 6789
            </p>
          </div>

          <div className="flex gap-4 text-2xl text-[#3E2C20]">
            <a href="#" className="hover:text-[#C8A961]">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#C8A961]">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#C8A961]">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#C8A961]">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-14 text-xs text-[#7F6756] border-t border-[#D6C1A9] pt-6 tracking-wide">
        &copy; {new Date().getFullYear()} Le Tailore. All rights reserved. Made by Dray.
      </div>
    </footer>
  )
}

export default Footer
