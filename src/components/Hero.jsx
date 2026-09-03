import React from 'react'

const Hero = () => {
  return (
    <div className="relative flex flex-col items-start justify-center 
    h-screen w-full overflow-hidden">
      
      {/* Blurred background image layer */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center scale-110 blur-sm"
        style={{ backgroundImage: `url('/pexels.jpg')` }}>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative mt-45 z-10 flex flex-col items-start gap-6 
      max-w-2xl px-6 md:px-16 lg:px-24 xl:px-32 text-white">
        
        <span className="px-4 py-1 text-sm rounded-full bg-green-400/10 border 
        border-white/30 backdrop-blur-sm">
         Welcome to Our Platform 
        </span>

        <h1 className="text-6xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Find Your Perfect  <span className="text-green-400">Stay</span>
        </h1>

        <p className="text-base md:text-lg text-gray-200 max-w-lg">
          Discover the best hotels at the best prices. 
          Book your unforgettable experience today.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
          <button className="px-8 py-3 bg-green-400 hover:bg-green-600 rounded-full font-medium transition-all duration-300">
            Get Started
          </button>
          <button className="flex items-center gap-2 px-8 py-3 border border-white/40 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
            Learn More
            <span>→</span>
          </button>
        </div>

        <div className="flex items-center gap-6 mt-6 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Verified Hotels
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>  Best Price Guarantee
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Hero