"use client"

import { STATISTICS } from "@/constants"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-section.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-fakt">
          Extraordinary natural and cultural charm
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-200">
          Exploring the world with Roamly is an unforgettable adventure.
        </p>

        {/* Floating Glassmorphism Search Bar */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-full shadow-md border border-white/20 px-6 py-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Date Input */}
              <div className="flex-1 flex items-center gap-3 min-w-0">
                <svg className="w-5 h-5 text-white/80 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-white/90 font-medium text-sm whitespace-nowrap">Date</span>
                <svg className="w-4 h-4 text-white/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Vertical Divider */}
              <div className="hidden md:block w-px h-6 bg-white/20"></div>

              {/* Budget Input */}
              <div className="flex-1 flex items-center gap-3 min-w-0">
                <svg className="w-5 h-5 text-white/80 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <span className="text-white/90 font-medium text-sm whitespace-nowrap">Budget</span>
                <svg className="w-4 h-4 text-white/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Vertical Divider */}
              <div className="hidden md:block w-px h-6 bg-white/20"></div>

              {/* Guest Input */}
              <div className="flex-1 flex items-center gap-3 min-w-0">
                <svg className="w-5 h-5 text-white/80 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-white/90 font-medium text-sm whitespace-nowrap">Guest</span>
                <svg className="w-4 h-4 text-white/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Search Button */}
              <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors duration-200 flex-shrink-0">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero