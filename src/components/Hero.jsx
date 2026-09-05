import hotel from '../assets/hotel.png'
import clender from '../assets/clender.png'
import search from '../assets/search.png'
import cities from '../data/cities.js'

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center
    min-h-screen w-full overflow-hidden">

      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80')",
        }}
      />

      {/* Gradient overlay for readability, darker at the bottom for the form */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-5 sm:gap-6
      max-w-4xl w-full mx-auto px-5 sm:px-8 md:px-16 lg:px-24 xl:px-32
      text-white text-center pt-28 pb-16">

        <span className="flex items-center gap-2 px-4 py-1.5 text-xs sm:text-sm
        rounded-full bg-green-400/10 border border-white/30 backdrop-blur-sm
        text-green-300 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          Welcome to Our Platform
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight
        tracking-tight">
          Find Your Perfect <span className="text-green-400">Stay</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-md md:max-w-lg">
          Discover the best hotels at the best prices. Book your unforgettable
          experience today.
        </p>

        {/* Search form */}
        <form
          className="w-full max-w-5xl bg-white text-gray-600 rounded-2xl
          shadow-2xl mt-4 p-4 sm:p-5
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_0.7fr_auto]
          gap-4 lg:gap-0 lg:divide-x lg:divide-gray-200 items-end text-left"
        >
          {/* Destination */}
          <div className="flex flex-col gap-1.5 lg:px-4 lg:first:pl-0">
            <div className="flex items-center gap-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
              <img src={hotel} alt="" className="w-4 h-4 opacity-70" />
              <label htmlFor="destinationInput">Destination</label>
            </div>
            <input
              list="destinations"
              id="destinationInput"
              type="text"
              className="w-full rounded-lg border border-gray-200 px-3 py-2.5
              text-sm outline-none focus:border-green-400 focus:ring-2
              focus:ring-green-100 transition-all"
              placeholder="Where are you going?"
              required
            />
            <datalist id="destinations">
              {cities.map((city, index) => (
                <option key={index} value={city} />
              ))}
            </datalist>
          </div>

          {/* Check in */}
          <div className="flex flex-col gap-1.5 lg:px-4">
            <div className="flex items-center gap-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
              <img src={clender} alt="" className="w-4 h-4 opacity-70" />
              <label htmlFor="checkIn">Check in</label>
            </div>
            <input
              id="checkIn"
              type="date"
              className="w-full rounded-lg border border-gray-200 px-3 py-2.5
              text-sm outline-none focus:border-green-400 focus:ring-2
              focus:ring-green-100 transition-all"
            />
          </div>

          {/* Check out */}
          <div className="flex flex-col gap-1.5 lg:px-4">
            <div className="flex items-center gap-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
              <img src={clender} alt="" className="w-4 h-4 opacity-70" />
              <label htmlFor="checkOut">Check out</label>
            </div>
            <input
              id="checkOut"
              type="date"
              className="w-full rounded-lg border border-gray-200 px-3 py-2.5
              text-sm outline-none focus:border-green-400 focus:ring-2
              focus:ring-green-100 transition-all"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col gap-1.5 lg:px-4">
            <label
              htmlFor="guests"
              className="text-xs font-medium text-gray-500 uppercase tracking-wide"
            >
              Guests
            </label>
            <input
              min={1}
              max={4}
              id="guests"
              type="number"
              className="w-full rounded-lg border border-gray-200 px-3 py-2.5
              text-sm outline-none focus:border-green-400 focus:ring-2
              focus:ring-green-100 transition-all"
              placeholder="0"
            />
          </div>

          {/* Search button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-lg
            bg-green-500 hover:bg-green-600 active:scale-95 text-white
            font-medium py-3 px-6 transition-all duration-300 cursor-pointer
            w-full lg:w-auto lg:ml-4"
          >
            <img src={search} alt="" className="w-4 h-4 invert" />
            <span>Search</span>
          </button>
        </form>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2
        mt-4 text-xs sm:text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-4 h-4 rounded-full
            bg-green-400/20 text-green-400 text-[10px]">✓</span>
            Verified Hotels
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-4 h-4 rounded-full
            bg-green-400/20 text-green-400 text-[10px]">✓</span>
            Best Price Guarantee
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-4 h-4 rounded-full
            bg-green-400/20 text-green-400 text-[10px]">✓</span>
            24/7 Customer Support
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero