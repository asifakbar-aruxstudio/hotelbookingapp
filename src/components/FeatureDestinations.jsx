import React from 'react'
import roomsDummyData  from "roomsDummyData"
import HotelCard from "./HotelCard"
const FeatureDestinations = () => {
  return (
    <div>    
<div>
     {roomsDummyData.slice(0.4).map((room,index)=>(
        <HotelCard key={room._id} room={room} index={index}  />
     ))}
</div>
    </div>
  )
}

export default FeatureDestinations