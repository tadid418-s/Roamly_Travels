import { STATISTICS } from "@/constants"

const Statistics = () => {
  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="max-container padding-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATISTICS.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-center mb-3">
                <img
                  src={stat.icon}
                  alt={stat.label}
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span className="text-2xl md:text-3xl font-bold text-gray-900">
                  {stat.value}
                </span>
              </div>
              <p className="text-sm text-gray-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics
