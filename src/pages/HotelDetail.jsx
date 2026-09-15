import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { hotelsDummyData } from "../data/hotelsDummyData";
import stars from "../assets/stars.png";
import location from "../assets/location.png";

// NOTE: currently reading from hotelsDummyData below. Once your backend is
// ready, swap this for real API calls — something like:
//
//   import { useEffect, useState } from "react";
//   import { hotelsAPI, roomsAPI } from "../api";
//
//   const [hotel, setHotel] = useState(null);
//   const [rooms, setRooms] = useState([]);
//   useEffect(() => {
//     hotelsAPI.getHotelById(hotelId).then(setHotel);
//     roomsAPI.getRoomsByHotel(hotelId).then((data) => setRooms(data || []));
//   }, [hotelId]);
//
// everything else in this component stays the same, since the dummy data
// shape already matches what the backend returns.

const HotelDetail = () => {
  const { hotelId } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);

  const hotel = hotelsDummyData.find((h) => h._id === hotelId);

  if (!hotel) {
    return (
      <div className="pt-28 px-4 md:px-16 lg:px-24 text-center">
        <p className="text-gray-500">Hotel not found.</p>
      </div>
    );
  }

  const goToRoom = (roomId) => {
    navigate(`/rooms/${roomId}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="pt-28 md:pt-35 px-4 md:px-16 lg:px-24 pb-16">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="font-playfair text-3xl md:text-4xl text-gray-800">{hotel.name}</h1>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <img src={location} alt="Location Icon" className="w-4" />
          <span>{hotel.address}</span>
        </div>
        <div className="flex items-center">
          <img src={stars} alt="rating" className="w-24" />
          <p className="ml-2 text-sm text-gray-600">
            {hotel.avgRating} · {hotel.totalReviews}+ Reviews
          </p>
        </div>
      </div>

      {/* Image gallery */}
      <div className="flex flex-col gap-3">
        <img
          src={hotel.images[activeImage]}
          alt={hotel.name}
          className="w-full max-h-[420px] object-cover rounded-xl shadow-lg"
        />
        {hotel.images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto">
            {hotel.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                onClick={() => setActiveImage(idx)}
                className={`w-24 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                  activeImage === idx ? "border-emerald-500" : "border-transparent"
                }`}
                alt={`${hotel.name} ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Description */}
      <div className="mt-8 max-w-3xl">
        <h2 className="font-playfair text-2xl text-gray-800 mb-2">About this hotel</h2>
        <p className="text-gray-600 leading-relaxed">{hotel.description}</p>
      </div>

      {/* Amenities */}
      <div className="mt-8">
        <h2 className="font-playfair text-2xl text-gray-800 mb-3">Amenities</h2>
        <div className="flex flex-wrap gap-3">
          {hotel.amenities.map((amenity) => (
            <span
              key={amenity}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {amenity}
            </span>
          ))}
        </div>
      </div>

      {/* Rooms */}
      <div className="mt-10">
        <h2 className="font-playfair text-2xl text-gray-800 mb-4">Available Rooms</h2>
        <div className="flex flex-col gap-6">
          {hotel.rooms.map((room) => (
            <div
              key={room._id}
              className="flex flex-col md:flex-row gap-4 border rounded-xl p-4 items-center"
            >
              <img
                src={room.images[0]}
                alt={room.roomType}
                className="w-full md:w-48 h-32 object-cover rounded-lg"
              />
              <div className="flex-1">
                <p className="text-lg font-medium text-gray-800">{room.roomType}</p>
                <p className="text-sm text-gray-500">
                  {room.capacity.adults} Adults · {room.capacity.children} Children
                </p>
                <p className="text-emerald-600 font-semibold mt-1">
                  ${room.pricePerNight} / night
                </p>
              </div>
              <button
                onClick={() => goToRoom(room._id)}
                className="px-5 py-2 bg-emerald-500 text-white rounded-full text-sm hover:bg-emerald-600 transition-colors"
              >
                View & Book
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;