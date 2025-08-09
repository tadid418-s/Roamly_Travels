import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Link from 'next/link'
import CurvedLoop from './CurvedLoop'

const Footer = () => {
  return (
    <footer className="bg-black text-white pb-0">
      <div className="max-container padding-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">About</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS[0].links.map((link) => (
                <li key={link}>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS[1].links.map((link) => (
                <li key={link}>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">FAQ</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS[2].links.map((link) => (
                <li key={link}>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6" style={{ color: '#D6FF6B' }}>Newsletter</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Don't miss out on the exciting world of travel - subscribe now and embark on a journey of discovery with us.
            </p>
            
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Submit
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {SOCIALS.links.map((social) => (
                <Link key={social} href="/" className="transition-colors" style={{ color: '#D6FF6B' }}>
                  <img 
                    src={social} 
                    alt="social" 
                    width={24} 
                    height={24}
                    className="filter brightness-0 invert"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            ©2023 Roamly, All Rights Reserved , Made by <a href="https://github.com/tadid418-s" className="text-white hover:text-gray-300 transition-colors">Tadiyos</a>
          </p>
        </div>
      </div>
      
      {/* Curved Loop Animation */}
      <div className="mb-0">
        <CurvedLoop 
          marqueeText="ROAMLY • TRAVEL • ADVENTURE • EXPLORE • DISCOVER • JOURNEY • WANDER • EXPERIENCE • ROAMLY • TRAVEL • ADVENTURE • EXPLORE • DISCOVER • JOURNEY • WANDER • EXPERIENCE"
          speed={1.5}
          curveAmount={0}
          direction="left"
          interactive={true}
        />
      </div>
    </footer>
  )
}

export default Footer