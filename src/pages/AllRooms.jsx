import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { roomsDummyData } from "../data/roomsDummyData";
import stars from "../assets/stars.png";
import location from "../assets/location.png";
import {
  FaWifi,
  FaSwimmingPool,
  FaParking,
  FaUtensils,
  FaSnowflake,
  FaTv,
  FaDumbbell,
  FaCoffee,
} from "react-icons/fa";

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
// then replace `roomsDummyData` below with `rooms` — the filter logic below
// reads room.roomType and room.pricePerNight, which the real backend
// already returns in this exact shape, so nothing else needs to change.

const amenityIcons = {
  wifi: FaWifi,
  "swimming pool": FaSwimmingPool,
  parking: FaParking,
  restaurant: FaUtensils,
  "air conditioning": FaSnowflake,
  tv: FaTv,
  gym: FaDumbbell,
  "breakfast included": FaCoffee,
};

const roomTypeOptions = ["Single Bed", "Double Bed", "Luxury Room", "Family Suite"];

const priceRangeOptions = [
  { label: "$0 to $100", min: 0, max: 100 },
  { label: "$100 to $200", min: 100, max: 200 },
  { label: "$200 to $300", min: 200, max: 300 },
  { label: "$300+", min: 300, max: Infinity },
];

const sortOptions = [
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest First", value: "newest" },
];

const AllRooms = () => {
  const navigate = useNavigate();

  const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [sortBy, setSortBy] = useState("");

  const goToRoom = (roomId) => {
    navigate(`/rooms/${roomId}`);
    window.scrollTo(0, 0);
  };

  const toggleRoomType = (type) => {
    setSelectedRoomTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const togglePriceRange = (label) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  const clearFilters = () => {
    setSelectedRoomTypes([]);
    setSelectedPriceRanges([]);
    setSortBy("");
  };

  const filteredRooms = useMemo(() => {
    let result = [...roomsDummyData];

    // Room Type filter — must-have because this is the primary way guests
    // narrow down what kind of room they want (single/double/suite etc.)
    if (selectedRoomTypes.length > 0) {
      result = result.filter((room) => selectedRoomTypes.includes(room.roomType));
    }

    // Price Range filter — must-have, price is the #1 booking decision factor
    if (selectedPriceRanges.length > 0) {
      result = result.filter((room) => {
        return selectedPriceRanges.some((label) => {
          const range = priceRangeOptions.find((r) => r.label === label);
          return room.pricePerNight >= range.min && room.pricePerNight < range.max;
        });
      });
    }

    // Sort — must-have, lets guests order by budget or recency
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.pricePerNight - b.pricePerNight);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.pricePerNight - a.pricePerNight);
    } else if (sortBy === "newest") {
      result.reverse();
    }

    return result;
  }, [selectedRoomTypes, selectedPriceRanges, sortBy]);

  const hasActiveFilters =
    selectedRoomTypes.length > 0 || selectedPriceRanges.length > 0 || sortBy;

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start
    justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 gap-10">
      <div className="w-full">
        <div className="flex flex-col items-start text-left mb-10">
          <h1 className="font-playfair text-4xl md:text-[40px]"> Hotel Rooms </h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
            Take advantage of our limited-time offers and special packages to enhance
            your stay and create unforgettable memories
          </p>
        </div>

        {filteredRooms.length === 0 && (
          <p className="text-gray-500">No rooms match your filters.</p>
        )}

        <div className="flex flex-col gap-8">
          {filteredRooms.map((room) => (
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

                {/* Amenities */}
                {room.amenities?.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-3">
                    {room.amenities.map((amenity) => {
                      const Icon = amenityIcons[amenity.toLowerCase()];
                      return (
                        <div
                          key={amenity}
                          className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-xs text-gray-600"
                        >
                          {Icon && <Icon className="w-3.5 h-3.5 text-emerald-600" />}
                          <span>{amenity}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                <p className="text-emerald-600 font-semibold mt-2">
                  ${room.pricePerNight} / night
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter */}
      <div className="w-full lg:w-72 lg:sticky lg:top-28 border border-gray-200 rounded-xl">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <p className="text-base font-medium text-gray-800">FILTERS</p>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-xs text-emerald-600 hover:underline"
            >
              CLEAR
            </button>
          )}
        </div>

        <div className="px-5 py-4 border-b border-gray-200">
          <p className="font-medium text-gray-700 mb-3">Room Type</p>
          <div className="flex flex-col gap-3">
            {roomTypeOptions.map((type) => (
              <label key={type} className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedRoomTypes.includes(type)}
                  onChange={() => toggleRoomType(type)}
                  className="w-4 h-4 accent-emerald-500"
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <div className="px-5 py-4 border-b border-gray-200">
          <p className="font-medium text-gray-700 mb-3">Price Range</p>
          <div className="flex flex-col gap-3">
            {priceRangeOptions.map((range) => (
              <label key={range.label} className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedPriceRanges.includes(range.label)}
                  onChange={() => togglePriceRange(range.label)}
                  className="w-4 h-4 accent-emerald-500"
                />
                {range.label}
              </label>
            ))}
          </div>
        </div>

        <div className="px-5 py-4">
          <p className="font-medium text-gray-700 mb-3">Sort By</p>
          <div className="flex flex-col gap-3">
            {sortOptions.map((option) => (
              <label key={option.value} className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer">
                <input
                  type="radio"
                  name="sortBy"
                  checked={sortBy === option.value}
                  onChange={() => setSortBy(option.value)}
                  className="w-4 h-4 accent-emerald-500"
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;