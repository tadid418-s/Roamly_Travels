import { FEATURED_DESTINATIONS } from "@/constants"

const FeaturedDestinations = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="space-y-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            <div className="flex flex-col justify-center lg:justify-end h-full">
              <p className="font-medium mb-2" style={{ color: '#5BAF1A' }}>About Us</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-fakt">
                Ethiopian tourism
              </h2>
            </div>
            <div className="flex items-center h-full">
              <p className="text-gray-600 lg:text-lg leading-relaxed w-full max-w-3xl">
                Roamly is a travel agency that makes it easy to explore Ethiopia’s most iconic destinations—from the Simien Highlands and Lalibela to the Omo Valley—helping you discover every highlight and hidden gem along the way.
              </p>
            </div>
          </div>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Top Left - Large */}
          <div className="md:col-span-2 md:row-span-2">
            <div className="relative rounded-lg overflow-hidden group h-full">
              <img 
                src={FEATURED_DESTINATIONS[0].image} 
                alt={FEATURED_DESTINATIONS[0].destination}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-white text-sm mb-1">
                  {FEATURED_DESTINATIONS[0].location}
                </p>
                <h3 className="text-white text-xl font-bold">
                  {FEATURED_DESTINATIONS[0].destination}
                </h3>
              </div>
            </div>
          </div>

          {/* Top Right - Small */}
          <div className="md:col-span-2">
            <div className="relative rounded-lg overflow-hidden group h-64">
              <img 
                src={FEATURED_DESTINATIONS[1].image} 
                alt={FEATURED_DESTINATIONS[1].destination}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-white text-sm mb-1">
                  {FEATURED_DESTINATIONS[1].location}
                </p>
                <h3 className="text-white text-xl font-bold">
                  {FEATURED_DESTINATIONS[1].destination}
                </h3>
              </div>
            </div>
          </div>

          {/* Bottom Left - Small */}
          <div className="md:col-span-2">
            <div className="relative rounded-lg overflow-hidden group h-64">
              <img 
                src={FEATURED_DESTINATIONS[2].image} 
                alt={FEATURED_DESTINATIONS[2].destination}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-white text-sm mb-1">
                  {FEATURED_DESTINATIONS[2].location}
                </p>
                <h3 className="text-white text-xl font-bold">
                  {FEATURED_DESTINATIONS[2].destination}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedDestinations