import React from 'react'

const Hero = () => {
  return (
    <div
      className="relative flex flex-col items-start justify-center h-screen w-full px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url('/hero.png')` }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start gap-6 max-w-2xl">
        <span className="px-4 py-1 rounded-full bg-white/10 border border-white/30 text-sm backdrop-blur-sm">
          🚀 Welcome to Our Platform
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Build Something <span className="text-blue-400">Amazing</span> Today
        </h1>

        <p className="text-base md:text-lg text-gray-200 max-w-lg">
          We help you create fast, scalable, and beautiful digital experiences
          that your users will love. Get started in minutes.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-all duration-300">
            Get Started
          </button>
          <button className="flex items-center gap-2 px-8 py-3 border border-white/40 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
            Learn More
            <span>→</span>
          </button>
        </div>

        <div className="flex items-center gap-6 mt-6 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span> No credit card required
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Free 14-day trial
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero