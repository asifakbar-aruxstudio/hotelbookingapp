import React from 'react'
import hotel from '../assets/hotel.png'
import clender from '../assets/clender.png'
import search from '../assets/search.png'
import cities from '../data/cities.jsx'

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center 
    h-screen w-full overflow-hidden">
      
      {/* Blurred background image layer */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center scale-110 blur-sm"
        style={{ backgroundImage: `url('/pexels.jpg')` }}>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 
      max-w-4xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 text-white text-center mt-30">
        
        <span className="px-4 py-1 text-sm rounded-full bg-green-400/10 border 
        border-white/30 backdrop-blur-sm">
         Welcome to Our Platform 
        </span>

        <h1 className="text-6xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Find Your Perfect  <span className="text-green-400">Stay</span>
        </h1>

        <p className="text-base md:text-lg text-gray-200 max-w-lg">
          Discover the best hotels at the best prices.Book your unforgettable experience today.
        </p>

     {/* // form start here  */}
        <form className='bg-white text-gray-500 rounded-lg px-6 py-4 
         flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

            <div>
                <div className='flex items-center gap-2'> 
                 <img src={hotel} alt="HOTEL" className='w-4 h-4' />
                    <label htmlFor="destinationInput">Destination</label>
                </div>
                <input 
                list='destinations' 
                id="destinationInput" 
                type="text" 
                className=" rounded border border-gray-200 px-3 
                py-1.5 mt-1.5 text-sm outline-none" 
                placeholder="Type here" 
                required />
                <datalist id="destinations" className='text-sm items-center' >
                    {
                      cities.map((city, index) => (
                        <option key={index} value={city} />
                      ))
                    }
            
                    
                </datalist>
            </div>

            <div>
                <div className='flex items-center gap-2'>
                  <img src={clender} alt="CALENDAR" className='w-4 h-4' />
                  <label htmlFor="checkIn">Check in</label>
                </div>
                <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />             
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <img src={clender} alt="CALENDAR" className='w-4 h-4' />
                    <label htmlFor="checkOut">Check out</label>
                </div>
                <input id="checkOut" type="date" 
                className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                <label htmlFor="guests">Guests</label>
                <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
            </div>

            <button className='flex items-center justify-center gap-1 rounded-md bg-green-400
             py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1 hover:bg-green-600' >
                <img src={search} alt="SEARCH" className='w-4 h-4' />
                <span>Search</span>
            </button>
        </form>
{/* // form end here  */}

        <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-300">
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