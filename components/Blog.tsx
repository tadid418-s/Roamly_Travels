"use client"

import { BLOG_POSTS } from "@/constants"

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-medium mb-2" style={{ color: '#5BAF1A' }}>Our Blog</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-fakt">
            Our travel memories
          </h2>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {BLOG_POSTS.map((post) => (
            <div 
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-3">
                  {post.date}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-5">
                  <button className="flex items-center gap-2 px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6M12 6.75V9m0 0h3.75M12 9H8.25M19.5 8.25v9A2.25 2.25 0 0117.25 19.5h-10.5A2.25 2.25 0 014.5 17.25V6.75A2.25 2.25 0 016.75 4.5h6L15 6.75h1.5A3 3 0 0119.5 9z" />
                    </svg>
                    Read More
                  </button>
                </div>
              </div>
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

export default Blog
