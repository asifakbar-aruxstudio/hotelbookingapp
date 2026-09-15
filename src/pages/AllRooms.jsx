import { useNavigate } from "react-router-dom";
import { roomsDummyData } from "../data/roomsDummyData";
import stars from "../assets/stars.png";
import location from "../assets/location.png";

// NOTE: currently using roomsDummyData below. Once your backend is ready,
// swap this out for a real API call — something like:
//
//   import { useEffect, useState } from "react";
//   import { roomsAPI } from "../api";
//
//   const [rooms, setRooms] = useState([]);
//   useEffect(() => {
//     roomsAPI.getAllRooms().then((data) => setRooms(data.rooms || []));
//   }, []);
//
// then replace `roomsDummyData` below with `rooms` — everything else in
// this component (the JSX/markup) stays exactly the same, since the dummy
// data shape already matches what the backend returns.

const AllRooms = () => {
  const navigate = useNavigate();

  const goToRoom = (roomId) => {
    navigate(`/rooms/${roomId}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start
    justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24">
      <div className="w-full">
        <div className="flex flex-col items-start text-left mb-10">
          <h1 className="font-playfair text-4xl md:text-[40px]"> Hotel Rooms </h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
            Take advantage of our limited-time offers and special packages to enhance
            your stay and create unforgettable memories
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {roomsDummyData.map((room) => (
            <div key={room._id} className="flex flex-col md:flex-row gap-6 border-b pb-8">
              <img
                onClick={() => goToRoom(room._id)}
                src={room.images[0]}
                className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
                alt="Hotel Room"
                title="View Room Details"
              />

              <div className="md:w-1/2 flex flex-col gap-2">
                <p className="text-gray-500">{room.hotel.city}</p>
                <p
                  onClick={() => goToRoom(room._id)}
                  className="text-gray-800 text-3xl font-playfair cursor-pointer"
                >
                  {room.hotel.name}
                </p>
                <div className="flex items-center">
                  <img src={stars} alt="rating" className="w-20" />
                  <p className="ml-2">{room.hotel.totalReviews}+ Reviews</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 mt-2 text-sm">
                  <img src={location} alt="Location Icon" className="w-4" />
                  <span>{room.hotel.address}</span>
                </div>
                <p className="text-emerald-600 font-semibold mt-2">
                  ${room.pricePerNight} / night
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter */}
      <div className="w-full lg:w-72 lg:sticky lg:top-28">
        {/* filter UI goes here later — city, price range, amenities */}
      </div>
    </div>
  );
};

export default AllRooms;