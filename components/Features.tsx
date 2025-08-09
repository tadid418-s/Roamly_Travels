import { TOUR_PACKAGES } from "@/constants"
import Button from './Button'
import DestinationCard from './DestinationCard'
import './DestinationCard.css'

const TourPackages = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold text-black uppercase font-fakt">
              OUR TOURIST DESTINATION
            </h2>
          </div>
          <p className="text-[#5BAF1A] text-lg max-w-md">
            Our tourist destinations offer an unrivaled blend of natural beauty & cultural richness.
          </p>
        </div>

        {/* Tour Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mb-12">
          {TOUR_PACKAGES.map((tour) => (
            <div key={tour.id} className="flex justify-center">
              <DestinationCard
                imageUrl={tour.image}
                duration={tour.duration}
                rating={tour.rating}
                dateRange={tour.dateRange}
                title={tour.name}
                price={tour.price}
                location={tour.location}
                enableTilt={true}
                enableMobileTilt={false}
              />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#0a0a0a] text-white font-medium hover:shadow-lg transition-all duration-300 group">
            <span className="text-sm">VIEW MORE</span>
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <svg className="w-3 h-3 text-[#0a0a0a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default TourPackages