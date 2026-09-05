import { roomsDummyData } from "../data/roomsDummyData"
import HotelCard from "./HotelCard"

const FeatureDestinations = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 mt-20">
      <div className="flex flex-wrap justify-center gap-4">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard
            key={room.id}
            room={room}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default FeatureDestinations