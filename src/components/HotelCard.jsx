import { Link } from 'react-router-dom'
import stars from '../assets/stars.png'
import location from '../assets/location.png'

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={`/rooms/${room.id}`}
      onClick={() => scrollTo(0, 0)}
      className="block"
    >
      <div className="relative max-w-70 w-full rounded-xl overflow-hidden 
      bg-gray-200 text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]">

        {/* Room Image */}
        <img
          src={room.room?.image}
          alt={room.hotel?.name}
          className="w-full h-48 object-cover"
        />

        {/* Best Seller */}
        {index % 2 === 0 && (
          <p className="absolute top-3 left-3 px-3 py-1 text-xs bg-white text-gray-800 font-medium rounded-full">
            Best Seller
          </p>
        )}

        <div className="p-4 pt-5">

          {/* Hotel Name + Rating */}
          <div className="flex items-center justify-between">
            <p className="font-playfair text-xl font-medium text-gray-800">
              {room.hotel?.name}
            </p>

            <div className="flex items-center gap-1">
              <img
                src={stars}
                alt="star-icon"
                className="w-4 h-4"
              />
              <span>4.5</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 mt-2">
            <img
              src={location}
              alt="location-icon"
              className="w-4 h-4"
            />
            <span>{room.hotel?.address}</span>
          </div>

          {/* Price + Button */}
          <div className="flex items-center justify-between mt-4">
            <p>
              <span className="text-lg text-gray-800">
                Rs. {room.pricing?.pricePerNight?.toLocaleString()}
              </span>{' '}
              per night
            </p>

            <button
              type="button"
              className="px-4 py-1 text-sm font-light rounded-md cursor-pointer 
              transition-all bg-green-200 hover:bg-green-400"
            >
              Book Now
            </button>
          </div>

        </div>
      </div>
    </Link>
  )
}
export default HotelCard