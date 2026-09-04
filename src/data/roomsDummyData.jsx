

export const roomsDummyData = [
  {
    id: "BK001",
    bookingId: "HTL-2026-0001",

    user: {
      id: "USR001",
      name: "Ahmed Khan",
      email: "ahmed@example.com",
      phone: "+92 300 1234567",
      avatar: "/images/users/user-1.jpg"
    },

    hotel: {
      id: 1,
      name: "Grand Lahore Hotel",
      city: "Lahore",
      province: "Punjab",
      image: "/images/hotels/lahore.jpg",
      address: "Gulberg III, Lahore"
    },

    room: {
      id: 101,
      type: "Deluxe King Room",
      roomNumber: "205",
      image: "/images/rooms/deluxe-room-1.jpg",
      guests: 2,
      beds: "1 King Bed"
    },

    booking: {
      checkIn: "2026-09-10",
      checkOut: "2026-09-13",
      nights: 3,
      adults: 2,
      children: 0,
      rooms: 1
    },

    pricing: {
      pricePerNight: 18000,
      subtotal: 54000,
      serviceFee: 2700,
      tax: 5400,
      discount: 3000,
      total: 59100,
      currency: "PKR"
    },

    payment: {
      method: "Credit Card",
      status: "Paid",
      transactionId: "TXN-847291"
    },

    status: "Confirmed",
    bookedAt: "2026-08-28T14:30:00",
    specialRequest: "Please provide a quiet room."
  },

  {
    id: "BK002",
    bookingId: "HTL-2026-0002",

    user: {
      id: "USR002",
      name: "Ayesha Malik",
      email: "ayesha@example.com",
      phone: "+92 301 7654321",
      avatar: "/images/users/user-2.jpg"
    },

    hotel: {
      id: 2,
      name: "Serena Islamabad",
      city: "Islamabad",
      province: "Islamabad Capital Territory",
      image: "/images/hotels/islamabad.jpg",
      address: "Khayaban-e-Suhrawardy, Islamabad"
    },

    room: {
      id: 102,
      type: "Executive Suite",
      roomNumber: "408",
      image: "/images/rooms/executive-suite-1.jpg",
      guests: 3,
      beds: "1 King Bed"
    },

    booking: {
      checkIn: "2026-09-15",
      checkOut: "2026-09-17",
      nights: 2,
      adults: 2,
      children: 1,
      rooms: 1
    },

    pricing: {
      pricePerNight: 28000,
      subtotal: 56000,
      serviceFee: 2800,
      tax: 5600,
      discount: 5000,
      total: 59400,
      currency: "PKR"
    },

    payment: {
      method: "JazzCash",
      status: "Paid",
      transactionId: "JC-392817"
    },

    status: "Confirmed",
    bookedAt: "2026-08-30T11:20:00",
    specialRequest: "Extra bed for child."
  },

  {
    id: "BK003",
    bookingId: "HTL-2026-0003",

    user: {
      id: "USR003",
      name: "Usman Ali",
      email: "usman@example.com",
      phone: "+92 302 9876543",
      avatar: "/images/users/user-3.jpg"
    },

    hotel: {
      id: 3,
      name: "Pearl Continental Karachi",
      city: "Karachi",
      province: "Sindh",
      image: "/images/hotels/karachi.jpg",
      address: "Club Road, Karachi"
    },

    room: {
      id: 103,
      type: "Double Room",
      roomNumber: "312",
      image: "/images/rooms/double-room-1.jpg",
      guests: 2,
      beds: "1 King Bed"
    },

    booking: {
      checkIn: "2026-08-20",
      checkOut: "2026-08-23",
      nights: 3,
      adults: 2,
      children: 0,
      rooms: 1
    },

    pricing: {
      pricePerNight: 25000,
      subtotal: 75000,
      serviceFee: 3750,
      tax: 7500,
      discount: 5000,
      total: 81250,
      currency: "PKR"
    },

    payment: {
      method: "Bank Transfer",
      status: "Paid",
      transactionId: "BT-572910"
    },

    status: "Completed",
    bookedAt: "2026-08-10T09:45:00",
    specialRequest: "Late check-in around 10 PM."
  },

  {
    id: "BK004",
    bookingId: "HTL-2026-0004",

    user: {
      id: "USR004",
      name: "Bilal Ahmed",
      email: "bilal@example.com",
      phone: "+92 303 4567890",
      avatar: "/images/users/user-4.jpg"
    },

    hotel: {
      id: 4,
      name: "Royal Palace Hotel",
      city: "Sukkur",
      province: "Sindh",
      image: "/images/hotels/sukkur.jpg",
      address: "Military Road, Sukkur"
    },

    room: {
      id: 104,
      type: "Single Room",
      roomNumber: "106",
      image: "/images/rooms/single-room-1.jpg",
      guests: 1,
      beds: "1 Single Bed"
    },

    booking: {
      checkIn: "2026-09-20",
      checkOut: "2026-09-22",
      nights: 2,
      adults: 1,
      children: 0,
      rooms: 1
    },

    pricing: {
      pricePerNight: 7000,
      subtotal: 14000,
      serviceFee: 700,
      tax: 1400,
      discount: 1000,
      total: 15100,
      currency: "PKR"
    },

    payment: {
      method: "Cash",
      status: "Pending",
      transactionId: null
    },

    status: "Pending",
    bookedAt: "2026-09-01T16:10:00",
    specialRequest: "No special request."
  },

  {
    id: "BK005",
    bookingId: "HTL-2026-0005",

    user: {
      id: "USR005",
      name: "Hina Shah",
      email: "hina@example.com",
      phone: "+92 304 1122334",
      avatar: "/images/users/user-5.jpg"
    },

    hotel: {
      id: 5,
      name: "Pearl Mountain Resort",
      city: "Murree",
      province: "Punjab",
      image: "/images/hotels/murree.jpg",
      address: "Bhurban, Murree"
    },

    room: {
      id: 105,
      type: "Family Room",
      roomNumber: "502",
      image: "/images/rooms/family-room-1.jpg",
      guests: 5,
      beds: "1 King + 2 Single Beds"
    },

    booking: {
      checkIn: "2026-10-02",
      checkOut: "2026-10-05",
      nights: 3,
      adults: 3,
      children: 2,
      rooms: 1
    },

    pricing: {
      pricePerNight: 16000,
      subtotal: 48000,
      serviceFee: 2400,
      tax: 4800,
      discount: 4000,
      total: 51200,
      currency: "PKR"
    },

    payment: {
      method: "EasyPaisa",
      status: "Paid",
      transactionId: "EP-728391"
    },

    status: "Confirmed",
    bookedAt: "2026-08-25T18:30:00",
    specialRequest: "Mountain view room preferred."
  },

  {
    id: "BK006",
    bookingId: "HTL-2026-0006",

    user: {
      id: "USR006",
      name: "Hamza Raza",
      email: "hamza@example.com",
      phone: "+92 305 9988776",
      avatar: "/images/users/user-6.jpg"
    },

    hotel: {
      id: 6,
      name: "Shangrila Resort",
      city: "Skardu",
      province: "Gilgit-Baltistan",
      image: "/images/hotels/skardu.jpg",
      address: "Lower Kachura Lake, Skardu"
    },

    room: {
      id: 106,
      type: "Deluxe King Room",
      roomNumber: "301",
      image: "/images/rooms/deluxe-room-1.jpg",
      guests: 2,
      beds: "1 King Bed"
    },

    booking: {
      checkIn: "2026-10-10",
      checkOut: "2026-10-14",
      nights: 4,
      adults: 2,
      children: 0,
      rooms: 1
    },

    pricing: {
      pricePerNight: 22000,
      subtotal: 88000,
      serviceFee: 4400,
      tax: 8800,
      discount: 8000,
      total: 93200,
      currency: "PKR"
    },

    payment: {
      method: "Credit Card",
      status: "Paid",
      transactionId: "TXN-928371"
    },

    status: "Confirmed",
    bookedAt: "2026-08-22T12:15:00",
    specialRequest: "Lake view room requested."
  },

  {
    id: "BK007",
    bookingId: "HTL-2026-0007",

    user: {
      id: "USR007",
      name: "Sara Ahmed",
      email: "sara@example.com",
      phone: "+92 306 5544332",
      avatar: "/images/users/user-7.jpg"
    },

    hotel: {
      id: 7,
      name: "Grand Hyderabad Hotel",
      city: "Hyderabad",
      province: "Sindh",
      image: "/images/hotels/hyderabad.jpg",
      address: "Autobhan Road, Hyderabad"
    },

    room: {
      id: 107,
      type: "Twin Room",
      roomNumber: "214",
      image: "/images/rooms/twin-room-1.jpg",
      guests: 4,
      beds: "2 Single Beds"
    },

    booking: {
      checkIn: "2026-08-05",
      checkOut: "2026-08-07",
      nights: 2,
      adults: 2,
      children: 2,
      rooms: 1
    },

    pricing: {
      pricePerNight: 11000,
      subtotal: 22000,
      serviceFee: 1100,
      tax: 2200,
      discount: 2000,
      total: 23300,
      currency: "PKR"
    },

    payment: {
      method: "JazzCash",
      status: "Refunded",
      transactionId: "JC-293817"
    },

    status: "Cancelled",
    bookedAt: "2026-07-28T15:40:00",
    cancelledAt: "2026-08-02T10:20:00",
    cancellationReason: "Travel plans changed."
  },

  {
    id: "BK008",
    bookingId: "HTL-2026-0008",

    user: {
      id: "USR008",
      name: "Danish Iqbal",
      email: "danish@example.com",
      phone: "+92 307 7788990",
      avatar: "/images/users/user-8.jpg"
    },

    hotel: {
      id: 8,
      name: "Executive Quetta Hotel",
      city: "Quetta",
      province: "Balochistan",
      image: "/images/hotels/quetta.jpg",
      address: "Jinnah Road, Quetta"
    },

    room: {
      id: 108,
      type: "Executive Suite",
      roomNumber: "401",
      image: "/images/rooms/executive-suite-1.jpg",
      guests: 3,
      beds: "1 King Bed"
    },

    booking: {
      checkIn: "2026-09-25",
      checkOut: "2026-09-28",
      nights: 3,
      adults: 2,
      children: 1,
      rooms: 1
    },

    pricing: {
      pricePerNight: 28000,
      subtotal: 84000,
      serviceFee: 4200,
      tax: 8400,
      discount: 7000,
      total: 89600,
      currency: "PKR"
    },

    payment: {
      method: "Bank Transfer",
      status: "Paid",
      transactionId: "BT-827361"
    },

    status: "Confirmed",
    bookedAt: "2026-08-29T13:25:00",
    specialRequest: "Airport pickup required."
  },

  {
    id: "BK009",
    bookingId: "HTL-2026-0009",

    user: {
      id: "USR009",
      name: "Maryam Noor",
      email: "maryam@example.com",
      phone: "+92 308 3344556",
      avatar: "/images/users/user-9.jpg"
    },

    hotel: {
      id: 9,
      name: "Gwadar Pearl Resort",
      city: "Gwadar",
      province: "Balochistan",
      image: "/images/hotels/gwadar.jpg",
      address: "Marine Drive, Gwadar"
    },

    room: {
      id: 109,
      type: "Deluxe Room",
      roomNumber: "208",
      image: "/images/rooms/deluxe-room-1.jpg",
      guests: 2,
      beds: "1 King Bed"
    },

    booking: {
      checkIn: "2026-09-18",
      checkOut: "2026-09-21",
      nights: 3,
      adults: 2,
      children: 0,
      rooms: 1
    },

    pricing: {
      pricePerNight: 19000,
      subtotal: 57000,
      serviceFee: 2850,
      tax: 5700,
      discount: 4000,
      total: 61550,
      currency: "PKR"
    },

    payment: {
      method: "EasyPaisa",
      status: "Paid",
      transactionId: "EP-938271"
    },

    status: "Confirmed",
    bookedAt: "2026-08-31T17:05:00",
    specialRequest: "Sea view room preferred."
  },

  {
    id: "BK010",
    bookingId: "HTL-2026-0010",

    user: {
      id: "USR010",
      name: "Owais Siddiqui",
      email: "owais@example.com",
      phone: "+92 309 6677889",
      avatar: "/images/users/user-10.jpg"
    },

    hotel: {
      id: 10,
      name: "Royal Peshawar Hotel",
      city: "Peshawar",
      province: "Khyber Pakhtunkhwa",
      image: "/images/hotels/peshawar.jpg",
      address: "University Road, Peshawar"
    },

    room: {
      id: 110,
      type: "Single Room",
      roomNumber: "115",
      image: "/images/rooms/single-room-1.jpg",
      guests: 1,
      beds: "1 Single Bed"
    },

    booking: {
      checkIn: "2026-08-15",
      checkOut: "2026-08-17",
      nights: 2,
      adults: 1,
      children: 0,
      rooms: 1
    },

    pricing: {
      pricePerNight: 7500,
      subtotal: 15000,
      serviceFee: 750,
      tax: 1500,
      discount: 1500,
      total: 15750,
      currency: "PKR"
    },

    payment: {
      method: "Cash",
      status: "Paid",
      transactionId: "CASH-0010"
    },

    status: "Completed",
    bookedAt: "2026-08-05T09:10:00",
    specialRequest: "Non-smoking room."
  }
];

