// Temporary dummy data for hotel detail pages — matches the shape the real
// backend will return later (hotel fields + a rooms[] array via
// roomsAPI.getRoomsByHotel). Once the backend is ready, fetch the hotel with
// hotelsAPI.getHotelById(hotelId) and its rooms with
// roomsAPI.getRoomsByHotel(hotelId) instead of reading from this file.

export const hotelsDummyData = [
  {
    _id: "hotel001",
    name: "The Grand Palace Hotel",
    description:
      "A five-star hotel in the heart of the city offering spacious rooms, a rooftop pool, and easy access to major attractions. Perfect for both business and leisure travellers.",
    city: "Karachi",
    country: "Pakistan",
    address: "Clifton Block 4, Karachi, Pakistan",
    avgRating: 4.6,
    totalReviews: 214,
    amenities: ["WiFi", "Swimming Pool", "Parking", "Restaurant", "Air Conditioning", "Gym"],
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200",
    ],
    rooms: [
      {
        _id: "room001",
        roomType: "Deluxe Room",
        pricePerNight: 120,
        capacity: { adults: 2, children: 1 },
        images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"],
      },
      {
        _id: "room002",
        roomType: "Suite",
        pricePerNight: 220,
        capacity: { adults: 3, children: 2 },
        images: ["https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800"],
      },
    ],
  },
  {
    _id: "hotel002",
    name: "Seaside Comfort Inn",
    description:
      "A cozy, budget-friendly hotel just minutes from the beach. Simple, clean rooms with everything you need for a relaxed stay by the sea.",
    city: "Karachi",
    country: "Pakistan",
    address: "Do Darya, Karachi, Pakistan",
    avgRating: 4.1,
    totalReviews: 98,
    amenities: ["WiFi", "Parking", "Breakfast Included"],
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=1200",
    ],
    rooms: [
      {
        _id: "room003",
        roomType: "Standard Room",
        pricePerNight: 85,
        capacity: { adults: 2, children: 0 },
        images: ["https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800"],
      },
    ],
  },
];

export default hotelsDummyData;