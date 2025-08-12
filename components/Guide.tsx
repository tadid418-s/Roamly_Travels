"use client"

import { HOW_IT_WORKS } from "@/constants"
import CustomCursor from "./CustomCursor"

const HowItWorks = () => {
  const scrollToNextSection = () => {
    if (typeof document === 'undefined') return;
    
    const nextSection = document.querySelector('#tours') || document.querySelector('#packages')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-20 bg-[#f9f9f9]">
      <CustomCursor />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row lg:gap-12 lg:items-center">
          {/* Left Side – Image Panel */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div 
              className="relative rounded-xl shadow-lg overflow-hidden group cursor-target cursor-none"
              onClick={scrollToNextSection}
            >
              <img 
                src="/img-1.png" 
                alt="Traveler exploring landscape"
                className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          </div>

          {/* Right Side – How It Works Steps */}
          <div className="lg:w-1/2 space-y-8">
            {/* Title Block */}
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-wider font-medium" style={{ color: '#5BAF1A' }}>
                How it works
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 font-fakt">
                One click for you
              </h2>
            </div>

            {/* Steps Layout */}
            <div className="space-y-6">
              {HOW_IT_WORKS.map((step, index) => (
                <div 
                  key={step.id} 
                  className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/50 hover:shadow-md transition-all duration-300 group"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-[#5BAF1A]/20 rounded-full flex items-center justify-center group-hover:bg-[#5BAF1A]/40 group-hover:shadow-sm transition-all duration-300">
                    <img 
                      src={step.icon} 
                      alt={step.title}
                      width={24}
                      height={24}
                      className="text-gray-700 transition-colors duration-300"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-[#5BAF1A]">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks