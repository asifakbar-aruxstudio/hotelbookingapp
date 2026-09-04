import React from 'react'

const HotelCard = ({room , index}) => {
  return (
    <link to={`/rooms/` + room._id} onClick={()=>scrollTo(0,0)} key={room._id}> 
    <img src={room.images[0]} alt={room.name} className = 'relative max-w-70 w-full rounded-xl 
    overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]'/>
    
    { index % 2 === 0 && <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gary-800
      font-medium rounded-full "> Best Seller </p>}
    <div className="p-4 pt-5">
        <div className="flex items-center justify-between">
            <p className="font-playfair text-xl font-medium text-gray-800 "> {room.hotel.name} </p>
            <div className="flex items-center gap-1">
                <img src={assets.StarIconFilled} alt="star-icon" /> 4.5
            </div>
            <div className="flex items-center gap-1">  
            <img src={assets.locationIcon} alt="location-icon" /> 4.5
            <span> {room.hotel.address} </span>
            </div>
            <div className="flex items-center gap-1">
           <p>
            <span className="text-lg text-gray-800 ">${room.pricePerNight.toFixed(2)}
            </span> per night</p>
            <button className="px-4 py-1 text-sm font-light rounded-full 
            cursor-pointer transition-all bg-gray-100 hover:bg-gray-200">
                Book Now
            </button>
            </div>
        </div>
    </div>
    </link>  
  )
}

export default HotelCard