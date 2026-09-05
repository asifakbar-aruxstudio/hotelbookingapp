import { roomsDummyData } from "../data/roomsDummyData"
import HotelCard from "./HotelCard"
import Title from "./Title"
import { Link, useNavigate } from "react-router-dom"

const FeatureDestinations = () => {
const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 mt-20">

      <Title
        Title="Featured Destinations"
        SubTitle="Discover our most popular destinations"
        align="center"
      />
      <div className="flex flex-wrap justify-center gap-4">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard
            key={room.id}
            room={room}
            index={index}
          />
        ))}
      </div>
      <button onClick={() =>{navigate('/rooms'); scrollTo(0, 0)}} 
      className="px-4 py-2 mt-5 text-sm font-light rounded-md cursor-pointer 
       transition-all bg-green-400 hover:bg-green-600">
            <Link to="/hotels" className="text-white">
              View All Destinations
            </Link>
          </button>
    </div>
    
  )
}

export default FeatureDestinations