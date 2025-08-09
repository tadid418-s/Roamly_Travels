"use client"

import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import { useState } from 'react'
import GlassSurface from './GlassSurface'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('EN')

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
  }

  const selectLanguage = (language: string) => {
    setCurrentLanguage(language)
    setIsLanguageDropdownOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20 relative">
          
          {/* Left Section — Logo with Glass Background */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
                             <GlassSurface
                 width={120}
                 height={40}
                 borderRadius={20}
                 borderWidth={0.05}
                 brightness={60}
                 opacity={0.9}
                 blur={8}
                 backgroundOpacity={0.4}
                 saturation={1.2}
                 className="mr-2 glass-dark"
               >
                     <div className="flex items-center gap-2">
                   <img src="/favicon.ico" alt="Roamly icon" className="w-5 h-5" />
                   <span className="text-lg lg:text-xl font-bold font-fakt tracking-wide" style={{ color: '#FFFFFF' }}>
                    Roamly
                  </span>
                 </div>
              </GlassSurface>
            </Link>
          </div>

                     {/* Center Section — Floating Glassmorphism Navigation Menu */}
           <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
                           <GlassSurface
                width="auto"
                height={50}
                borderRadius={25}
                borderWidth={0.05}
                brightness={60}
                opacity={0.9}
                blur={8}
                backgroundOpacity={0.4}
                saturation={1.2}
                 className="px-16 py-3 glass-dark"
              >
               <div className="flex items-center space-x-10">
                 {NAV_LINKS.map((link) => (
                   <Link 
                     href={link.href} 
                     key={link.key} 
                     className="text-sm font-medium text-white/90 hover:text-white transition-colors duration-200"
                   >
                     {link.label}
                   </Link>
                 ))}
               </div>
             </GlassSurface>
           </div>

          {/* Right Section — Language & Login Controls */}
          <div className="flex items-center space-x-4">
                         {/* Language Toggle */}
             <div className="hidden lg:block relative">
                               <GlassSurface
                  width={80}
                  height={40}
                  borderRadius={20}
                  borderWidth={0.05}
                  brightness={60}
                  opacity={0.9}
                  blur={8}
                  backgroundOpacity={0.4}
                  saturation={1.2}
                   className="cursor-pointer hover:opacity-80 transition-opacity duration-200 glass-dark"
                >
                 <button 
                   onClick={toggleLanguageDropdown}
                   className="w-full h-full flex items-center justify-center text-white text-sm font-medium"
                 >
                   {currentLanguage}
                   <svg className="w-4 h-4 ml-2 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                   </svg>
                 </button>
               </GlassSurface>

              {/* Language Dropdown */}
              {isLanguageDropdownOpen && (
                <div className="absolute top-full mt-2 right-0 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-lg min-w-[120px] z-50">
                  <div className="py-2">
                    <button 
                      onClick={() => selectLanguage('EN')}
                      className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors duration-200 ${
                        currentLanguage === 'EN' 
                          ? 'text-white bg-white/20' 
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      EN (English)
                    </button>
                    <button 
                      onClick={() => selectLanguage('አማ')}
                      className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors duration-200 ${
                        currentLanguage === 'አማ' 
                          ? 'text-white bg-white/20' 
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      አማ (Amharic)
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Discover Button */}
            <button className="hidden lg:flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/95 text-black font-medium shadow-lg shadow-black/20 ring-1 ring-black/5 hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <span className="text-sm">Discover</span>
              <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/20 backdrop-blur-md border-t border-white/20">
            <div className="px-6 py-4 space-y-4">
              {/* Mobile Navigation Links */}
              <div className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <Link 
                    href={link.href} 
                    key={link.key} 
                    className="block text-white/90 hover:text-white transition-colors duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-white/20 space-y-3">
                {/* Mobile Language Toggle */}
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">Language:</span>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => selectLanguage('EN')}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                        currentLanguage === 'EN' 
                          ? 'bg-white text-black' 
                          : 'bg-white/10 text-white/90 hover:bg-white/20'
                      }`}
                    >
                      EN
                    </button>
                    <button 
                      onClick={() => selectLanguage('አማ')}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                        currentLanguage === 'አማ' 
                          ? 'bg-white text-black' 
                          : 'bg-white/10 text-white/90 hover:bg-white/20'
                      }`}
                    >
                      አማ
                    </button>
                  </div>
                </div>
                
                {/* Mobile Discover Button */}
                <button className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white/95 text-black font-medium shadow-lg shadow-black/20 ring-1 ring-black/5 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                  <span className="text-sm">Discover</span>
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar