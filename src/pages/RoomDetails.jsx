import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUser, useClerk } from "@clerk/clerk-react";
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

// NOTE: currently reading from roomsDummyData. Once your backend is ready,
// swap for a real API call:
//
//   import { useEffect } from "react";
//   import { roomsAPI, bookingsAPI } from "../api";
//
//   const [room, setRoom] = useState(null);
//   useEffect(() => { roomsAPI.getRoomById(roomId).then(setRoom); }, [roomId]);
//
// and in handleBook, replace the console.log with:
//   await bookingsAPI.createBooking({ roomId, checkInDate, checkOutDate, numberOfRooms: 1, guests: { adults: guests } });

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

const BOOKING_CHARGE_PERCENT = 10; // platform booking charge, same as backend

const RoomDetails = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  const room = roomsDummyData.find((r) => r._id === roomId);

  const [activeImage, setActiveImage] = useState(0);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const diff = (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);
    return diff > 0 ? Math.ceil(diff) : 0;
  }, [checkIn, checkOut]);

  if (!room) {
    return (
      <div className="pt-28 px-4 md:px-16 lg:px-24 text-center">
        <p className="text-gray-500">Room not found.</p>
      </div>
    );
  }

  const roomPrice = nights * room.pricePerNight;
  const bookingCharge = +(roomPrice * BOOKING_CHARGE_PERCENT / 100).toFixed(2);
  const totalPrice = +(roomPrice + bookingCharge).toFixed(2);

  const handleBook = (e) => {
    e.preventDefault();
    setMessage("");

    // must sign up / log in before booking
    if (!isSignedIn) {
      setMessage("Please sign up first, then log in to book this room.");
      openSignIn();
      return;
    }

    if (nights <= 0) {
      setMessage("Please select valid check-in and check-out dates.");
      return;
    }

    const maxGuests = (room.capacity?.adults || 1) + (room.capacity?.children || 0);
    if (guests > maxGuests) {
      setMessage(`This room allows a maximum of ${maxGuests} guests.`);
      return;
    }

    // TODO: replace with bookingsAPI.createBooking(...) once backend is connected
    console.log("Booking request:", {
      roomId: room._id,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      guests,
      roomPrice,
      bookingCharge,
      totalPrice,
    });
    setMessage("Booking request created! (demo mode — backend not connected yet)");
  };

  return (
    <div className="pt-28 md:pt-35 px-4 md:px-16 lg:px-24 pb-16">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="font-playfair text-3xl md:text-4xl text-gray-800">
          {room.hotel.name}{" "}
          <span className="text-base font-inter text-gray-500">({room.roomType})</span>
        </h1>
        <div className="flex items-center">
          <img src={stars} alt="rating" className="w-24" />
          <p className="ml-2 text-sm text-gray-600">{room.hotel.totalReviews}+ Reviews</p>
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <img src={location} alt="Location Icon" className="w-4" />
          <span>{room.hotel.address}</span>
        </div>
      </div>

      {/* Gallery */}
      <div className="flex flex-col lg:flex-row gap-4">
        <img
          src={room.images[activeImage]}
          alt={room.roomType}
          className="w-full lg:w-1/2 max-h-[420px] object-cover rounded-xl shadow-lg"
        />
        <div className="grid grid-cols-2 gap-4 lg:w-1/2">
          {room.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              onClick={() => setActiveImage(idx)}
              alt={`Room view ${idx + 1}`}
              className={`w-full h-40 object-cover rounded-xl cursor-pointer border-2 ${
                activeImage === idx ? "border-emerald-500" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Info + price */}
      <div className="flex flex-col md:flex-row md:justify-between gap-6 mt-10">
        <div className="max-w-2xl">
          <h2 className="font-playfair text-2xl text-gray-800 mb-2">About this room</h2>
          <p className="text-gray-600 leading-relaxed">{room.description}</p>
          <p className="text-sm text-gray-500 mt-3">
            Sleeps up to {room.capacity?.adults || 1} adults
            {room.capacity?.children ? ` and ${room.capacity.children} children` : ""}
          </p>

          <h2 className="font-playfair text-2xl text-gray-800 mt-8 mb-3">Amenities</h2>
          <div className="flex flex-wrap gap-3">
            {room.amenities?.map((amenity) => {
              const Icon = amenityIcons[amenity.toLowerCase()];
              return (
                <div
                  key={amenity}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600"
                >
                  {Icon && <Icon className="w-4 h-4 text-emerald-600" />}
                  <span>{amenity}</span>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-2xl font-medium text-emerald-600">
          ${room.pricePerNight}
          <span className="text-sm text-gray-500"> / night</span>
        </p>
      </div>

      {/* Booking form */}
      <form
        onSubmit={handleBook}
        className="mt-10 bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-xl p-6 flex flex-col md:flex-row gap-6 md:items-end"
      >
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Check-In</label>
          <input
            type="date"
            min={today}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 outline-none"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Check-Out</label>
          <input
            type="date"
            min={checkIn || today}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 outline-none"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Guests</label>
          <input
            type="number"
            min={1}
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="border border-gray-300 rounded px-3 py-2 outline-none w-24"
            required
          />
        </div>

        <button
          type="submit"
          className="px-8 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors"
        >
          Book Now
        </button>
      </form>

      {/* Price summary */}
      {nights > 0 && (
        <div className="mt-6 max-w-md text-sm text-gray-700 border rounded-xl p-5 flex flex-col gap-2">
          <div className="flex justify-between">
            <span>${room.pricePerNight} x {nights} night(s)</span>
            <span>${roomPrice}</span>
          </div>
          <div className="flex justify-between">
            <span>Booking charge ({BOOKING_CHARGE_PERCENT}%)</span>
            <span>${bookingCharge}</span>
          </div>
          <div className="flex justify-between font-semibold border-t pt-2">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
        </div>
      )}

      {message && <p className="mt-4 text-sm text-emerald-700">{message}</p>}

      <button
        onClick={() => navigate(-1)}
        className="mt-8 text-sm text-gray-500 hover:underline"
      >
        &larr; Back to rooms
      </button>
    </div>
  );
};

export default RoomDetails;