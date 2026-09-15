// Temporary dummy data — matches the shape the real backend will return later
// (room.hotel.name, room.hotel.city, room.images[], room.pricePerNight, etc.)
// Once the backend is ready, replace roomsDummyData with a real API call —
// see the commented-out version at the bottom of AllRooms.jsx for that switch.

export const roomsDummyData = [
  {
    _id: "room001",
    pricePerNight: 120,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
    ],
    hotel: {
      name: "The Grand Palace Hotel",
      city: "Karachi",
      address: "Clifton Block 4, Karachi, Pakistan",
      totalReviews: 214,
    },
  },
  {
    _id: "room002",
    pricePerNight: 85,
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800",
    ],
    hotel: {
      name: "Seaside Comfort Inn",
      city: "Karachi",
      address: "Do Darya, Karachi, Pakistan",
      totalReviews: 98,
    },
  },
  {
    _id: "room003",
    pricePerNight: 60,
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800",
    ],
    hotel: {
      name: "City Center Budget Stay",
      city: "Sukkur",
      address: "Station Road, Sukkur, Pakistan",
      totalReviews: 45,
    },
  },
  {
    _id: "room004",
    pricePerNight: 200,
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800",
    ],
    hotel: {
      name: "Skyline Business Suites",
      city: "Lahore",
      address: "Gulberg III, Lahore, Pakistan",
      totalReviews: 312,
    },
  },
];

export default roomsDummyData;