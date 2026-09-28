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
  FaStar,
  FaRegStar,
  FaInfoCircle,
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
//
// Reviews: later load them from the backend (GET /api/v1/reviews/hotel/:hotelId)
// and post new ones with POST /api/v1/reviews. Until then they live in local state.

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

// sample reviews used until the backend Review API is connected
const sampleReviews = [
  {
    id: "r1",
    name: "Ahmed Khan",
    rating: 5,
    comment: "Very clean room and the staff was helpful. Check-in was quick and the bed was comfortable.",
    date: "2026-08-12",
  },
  {
    id: "r2",
    name: "Sara Ali",
    rating: 4,
    comment: "Good location and value for money. WiFi could be a little faster, but overall a nice stay.",
    date: "2026-07-28",
  },
  {
    id: "r3",
    name: "Bilal Raza",
    rating: 4,
    comment: "Nice room with a good view. Breakfast was decent. Would stay here again.",
    date: "2026-07-05",
  },
];

const StarRating = ({ value }) => (
  <div className="flex items-center gap-0.5 text-amber-400">
    {[1, 2, 3, 4, 5].map((n) =>
      n <= value ? <FaStar key={n} className="w-4 h-4" /> : <FaRegStar key={n} className="w-4 h-4" />
    )}
  </div>
);

const RoomDetails = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { isSignedIn, user } = useUser();
  const { openSignIn } = useClerk();

  const room = roomsDummyData.find((r) => r._id === roomId);

  const [activeImage, setActiveImage] = useState(0);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState("");

  const [reviews, setReviews] = useState(sampleReviews);
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState("");
  const [reviewMessage, setReviewMessage] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const diff = (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);
    return diff > 0 ? Math.ceil(diff) : 0;
  }, [checkIn, checkOut]);

  const averageRating = useMemo(() => {
    if (reviews.length === 0) return 0;
    return (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  }, [reviews]);

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

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    `${room.hotel.name}, ${room.hotel.address}`
  )}&output=embed`;

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

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviewMessage("");

    if (!isSignedIn) {
      setReviewMessage("Please sign up first, then log in to leave a review.");
      openSignIn();
      return;
    }

    if (!newComment.trim()) {
      setReviewMessage("Please write a comment before submitting.");
      return;
    }

    // TODO: replace with a POST to /api/v1/reviews once backend is connected
    setReviews((prev) => [
      {
        id: `r${Date.now()}`,
        name: user?.fullName || user?.firstName || "Guest",
        rating: newRating,
        comment: newComment.trim(),
        date: new Date().toISOString().split("T")[0],
      },
      ...prev,
    ]);
    setNewComment("");
    setNewRating(5);
    setReviewMessage("Thanks for your feedback!");
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
          <p className="ml-2 text-sm text-gray-600">
            {averageRating} · {reviews.length} Reviews
          </p>
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

      {/* Google Map */}
      <div className="mt-12">
        <h2 className="font-playfair text-2xl text-gray-800 mb-3">Location</h2>
        <p className="text-sm text-gray-500 mb-3">{room.hotel.address}</p>
        <iframe
          title={`${room.hotel.name} location`}
          src={mapSrc}
          className="w-full h-72 md:h-96 rounded-xl border-0 shadow-lg"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      {/* Customer reviews */}
      <div className="mt-12">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="font-playfair text-2xl text-gray-800">Guest Reviews</h2>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaStar className="text-amber-400" />
            <span>{averageRating} ({reviews.length} reviews)</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 max-w-3xl">
          {reviews.map((review) => (
            <div key={review.id} className="border rounded-xl p-4">
              <div className="flex items-center justify-between">
                <p className="font-medium text-gray-800">{review.name}</p>
                <p className="text-xs text-gray-400">{review.date}</p>
              </div>
              <StarRating value={review.rating} />
              <p className="text-sm text-gray-600 mt-2">{review.comment}</p>
            </div>
          ))}
        </div>

        {/* Add a review */}
        <form
          onSubmit={handleReviewSubmit}
          className="mt-6 max-w-3xl border rounded-xl p-5 flex flex-col gap-3"
        >
          <p className="font-medium text-gray-800">Share your experience</p>
          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-600">Rating</label>
            <select
              value={newRating}
              onChange={(e) => setNewRating(Number(e.target.value))}
              className="border border-gray-300 rounded px-3 py-1.5 outline-none text-sm"
            >
              {[5, 4, 3, 2, 1].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "star" : "stars"}
                </option>
              ))}
            </select>
          </div>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment about this room..."
            rows={3}
            className="border border-gray-300 rounded px-3 py-2 outline-none text-sm resize-none"
          />
          <button
            type="submit"
            className="self-start px-6 py-2 bg-emerald-500 text-white rounded-full text-sm hover:bg-emerald-600 transition-colors"
          >
            Submit Review
          </button>
          {reviewMessage && <p className="text-sm text-emerald-700">{reviewMessage}</p>}
        </form>
      </div>

      {/* Common message at the bottom (edit the text to match your real policies) */}
      <div className="mt-12 flex gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-5 max-w-3xl">
        <FaInfoCircle className="text-emerald-600 w-5 h-5 mt-0.5 shrink-0" />
        <div className="text-sm text-gray-700">
          <p className="font-medium text-gray-800 mb-1">Important Information</p>
          <ul className="list-disc pl-5 flex flex-col gap-1">
            <li>Please sign up and log in before booking a room.</li>
            <li>A valid ID is required at check-in.</li>
            <li>A {BOOKING_CHARGE_PERCENT}% booking charge is added to every booking.</li>
            <li>The rest of the payment goes directly to the hotel.</li>
          </ul>
        </div>
      </div>

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