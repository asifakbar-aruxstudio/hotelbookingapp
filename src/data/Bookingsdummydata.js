// Temporary booking data + tiny localStorage helpers, used until the backend is ready.
//
// Shape matches what the real backend's Booking model returns (populated):
//   _id, user{fullName,email,avatar}, hotel{name,city,address}, room{roomType,images},
//   checkInDate, checkOutDate, numberOfRooms, guests, roomPrice, bookingCharge,
//   totalPrice, status, paymentStatus
//
// customerId / hotel.ownerId are only for the demo filtering. "demo" means
// "show this booking to any logged-in customer / owner". With the real backend
// you don't filter on the frontend at all:
//   customer -> GET /api/v1/bookings/my-bookings   (backend returns only their own)
//   owner    -> GET /api/v1/bookings/hotel/:hotelId (backend returns only that hotel's)

const STORAGE_KEY = "hotelify_bookings";

export const bookingsDummyData = [
  {
    _id: "b001",
    customerId: "demo",
    user: { fullName: "Ahmed Khan", email: "ahmed@example.com", avatar: "https://i.pravatar.cc/100?img=33" },
    hotel: { _id: "hotel001", ownerId: "demo", name: "The Grand Palace Hotel", city: "Karachi", address: "Clifton Block 4, Karachi, Pakistan" },
    room: { _id: "room001", roomType: "Double Bed", images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"] },
    checkInDate: "2026-10-12",
    checkOutDate: "2026-10-15",
    numberOfRooms: 1,
    guests: 2,
    roomPrice: 360,
    bookingCharge: 36,
    totalPrice: 396,
    status: "confirmed",
    paymentStatus: "paid",
  },
  {
    _id: "b002",
    customerId: "demo",
    user: { fullName: "Sara Ali", email: "sara@example.com", avatar: "https://i.pravatar.cc/100?img=47" },
    hotel: { _id: "hotel002", ownerId: "demo", name: "Seaside Comfort Inn", city: "Karachi", address: "Do Darya, Karachi, Pakistan" },
    room: { _id: "room002", roomType: "Single Bed", images: ["https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800"] },
    checkInDate: "2026-11-02",
    checkOutDate: "2026-11-04",
    numberOfRooms: 1,
    guests: 1,
    roomPrice: 170,
    bookingCharge: 17,
    totalPrice: 187,
    status: "pending",
    paymentStatus: "unpaid",
  },
  {
    _id: "b003",
    customerId: "demo",
    user: { fullName: "Bilal Raza", email: "bilal@example.com", avatar: "https://i.pravatar.cc/100?img=15" },
    hotel: { _id: "hotel004", ownerId: "demo", name: "Skyline Business Suites", city: "Lahore", address: "Gulberg III, Lahore, Pakistan" },
    room: { _id: "room004", roomType: "Luxury Room", images: ["https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800"] },
    checkInDate: "2026-07-10",
    checkOutDate: "2026-07-13",
    numberOfRooms: 1,
    guests: 2,
    roomPrice: 600,
    bookingCharge: 60,
    totalPrice: 660,
    status: "completed",
    paymentStatus: "paid",
  },
  {
    _id: "b004",
    customerId: "demo",
    user: { fullName: "Hina Malik", email: "hina@example.com", avatar: "" },
    hotel: { _id: "hotel003", ownerId: "demo", name: "City Center Budget Stay", city: "Sukkur", address: "Station Road, Sukkur, Pakistan" },
    room: { _id: "room003", roomType: "Single Bed", images: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800"] },
    checkInDate: "2026-08-20",
    checkOutDate: "2026-08-21",
    numberOfRooms: 1,
    guests: 1,
    roomPrice: 60,
    bookingCharge: 6,
    totalPrice: 66,
    status: "cancelled",
    paymentStatus: "refunded",
  },
];

export const loadBookings = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    // ignore and fall back to the dummy data
  }
  return bookingsDummyData;
};

export const saveBookings = (bookings) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  } catch {
    // storage unavailable — bookings just won't persist
  }
};

// call this from RoomDetails after a successful "Book Now" so it shows up in My Bookings
export const addBooking = (booking) => {
  saveBookings([booking, ...loadBookings()]);
};