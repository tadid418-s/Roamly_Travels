"use client"

import { TESTIMONIALS } from "@/constants"
import { useState, useEffect } from 'react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000) // Change testimonial every 8 seconds

    return () => clearInterval(interval)
  }, [currentIndex])

  const currentTestimonial = TESTIMONIALS[currentIndex]

  return (
    <section className="py-32 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-fakt">
            What Our Users Say
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Left Side - Profile and Navigation */}
            <div className="flex-shrink-0 flex flex-col items-center">
              {/* Profile Picture */}
              <img 
                src={currentTestimonial.image} 
                alt={currentTestimonial.name}
                className="w-20 h-20 rounded-full object-cover mb-4 transition-all duration-700 ease-in-out"
              />
              
              {/* Name and Title */}
              <div className="text-center mb-6 transition-all duration-700 ease-in-out">
                <h3 className="text-lg font-bold text-gray-900 mb-1 transition-all duration-700 ease-in-out">
                  {currentTestimonial.name}
                </h3>
                <p className="text-sm text-gray-600 transition-all duration-700 ease-in-out">
                  {currentTestimonial.title}
                </p>
              </div>
              
              {/* Navigation Arrows */}
              <div className="flex items-center gap-6">
                <button 
                  onClick={prevTestimonial}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  disabled={currentIndex === 0}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side - Testimonial Text */}
            <div className="flex-1 relative">
              {/* Large Quote Mark */}
              <div className="absolute -top-4 -left-2 text-gray-200 text-6xl font-serif transition-all duration-700 ease-in-out">
                "
              </div>
              
              {/* Testimonial Content */}
              <p className="text-lg text-gray-800 leading-relaxed relative z-10 transition-all duration-700 ease-in-out">
                {currentTestimonial.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials