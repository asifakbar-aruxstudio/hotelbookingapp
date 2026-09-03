// Hotelify — Central Icon Library
// Source: Hotelify_Icons_List.pdf
// All icons use react-icons/fa (Font Awesome).

export {
  FaHotel,FaBars,FaTimes, FaUserCircle,FaSignOutAlt,FaSearch,
  // Hero / Home
  FaMapMarkerAlt,FaCalendarAlt,FaUserFriends,FaStar,FaArrowRight,FaPlay,
  // Hotel Amenities
  FaWifi,FaSwimmingPool,FaParking,FaUtensils,FaSnowflake,FaTv,FaDumbbell,FaCoffee,FaConciergeBell,FaShieldAlt,FaPaw,FaSmokingBan,
  // Hotel / Room Listing
  FaFilter,FaSortAmountDown,FaHeart,FaRegHeart,FaShareAlt,FaImages,FaBed,FaRulerCombined,FaDollarSign,
  // Booking
  FaCheckCircle,FaClock,FaTimesCircle,FaCreditCard,FaLock,FaReceipt,FaPercentage,

  // Login / Sign Up
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaEye,
  FaEyeSlash,
  FaUserTie,
  FaGoogle,

  // Customer Dashboard
  FaClipboardList,
  FaHistory,
  FaFileInvoice,
  FaDownload,

  // Hotel Owner Dashboard
  FaChartLine,
  FaPlusCircle,
  FaEdit,
  FaTrashAlt,
  FaUpload,

  // Admin / Super Dashboard
  FaUsersCog,
  FaClipboardCheck,
  FaBan,
  FaMoneyBillWave,
  FaChartPie,
  FaCog,
  FaBell,

  // Footer / General UI
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaPhone,
  FaMapMarkedAlt,
  FaChevronDown,
  FaChevronRight,
  FaSpinner,
  FaExclamationCircle,
} from "react-icons/fa";



export const cities = [
  "Lahore",
  "Faisalabad",
  "Rawalpindi",
  "Gujranwala",
  "Multan",
  "Sialkot",
  "Bahawalpur",
  "Sargodha",
  "Jhang",
  "Sheikhupura",
  "Gujrat",
  "Sahiwal",
  "Okara",
  "Kasur",
  "Rahim Yar Khan",
  "Dera Ghazi Khan",
  "Wah Cantonment",
  "Burewala",
  "Hafizabad",
  "Chiniot",
  "Kamoke",
  "Jhelum",
  "Khanewal",
  "Muzaffargarh",
  "Mandi Bahauddin",
  "Bhakkar",
  "Layyah",
  "Vehari",
  "Attock",
  "Chakwal",
  "Toba Tek Singh",
  "Narowal",
  "Pakpattan",
  "Lodhran",
  "Mianwali",
  "Khushab",
  "Rajanpur",
  "Nankana Sahib",
  "Murree",
  "Taxila",

  "Karachi",
  "Hyderabad",
  "Sukkur",
  "Larkana",
  "Nawabshah",
  "Mirpur Khas",
  "Jacobabad",
  "Shikarpur",
  "Khairpur",
  "Dadu",
  "Thatta",
  "Badin",
  "Tando Adam",
  "Tando Allahyar",
  "Tando Muhammad Khan",
  "Matiari",
  "Umerkot",
  "Sanghar",
  "Ghotki",
  "Kandhkot",
  "Kashmore",
  "Ratodero",
  "Mehar",
  "Sehwan",
  "Moro",
  "Naushahro Feroze",
  "Kotri",
  "Jamshoro",
  "Sujawal",
  "Rohri",
  "Pano Aqil",
  "Sakrand",
  "Shahdadpur",
  "Mithi",
  "Nagarparkar",

  "Peshawar",
  "Mardan",
  "Mingora",
  "Abbottabad",
  "Kohat",
  "Dera Ismail Khan",
  "Bannu",
  "Swabi",
  "Nowshera",
  "Charsadda",
  "Mansehra",
  "Haripur",
  "Chitral",
  "Timergara",
  "Karak",
  "Hangu",
  "Lakki Marwat",
  "Tank",
  "Batkhela",
  "Dir",
  "Daggar",
  "Besham",
  "Topi",
  "Takht-i-Bahi",
  "Jamrud",
  "Landi Kotal",
  "Parachinar",
  "Kabal",
  "Kalam",
  "Naran",

  "Quetta",
  "Gwadar",
  "Turbat",
  "Khuzdar",
  "Chaman",
  "Hub",
  "Sibi",
  "Zhob",
  "Loralai",
  "Dera Murad Jamali",
  "Dera Allah Yar",
  "Usta Muhammad",
  "Kharan",
  "Kalat",
  "Mastung",
  "Nushki",
  "Dalbandin",
  "Pishin",
  "Qila Saifullah",
  "Qila Abdullah",
  "Pasni",
  "Ormara",
  "Bela",
  "Panjgur",
  "Jiwani",

  "Islamabad",

  "Muzaffarabad",
  "Mirpur",
  "Rawalakot",
  "Kotli",
  "Bagh",
  "Bhimber",
  "Pallandri",
  "Hattian Bala",
  "Athmuqam",
  "Dhirkot",
  "Chakothi",

  "Gilgit",
  "Skardu",
  "Chilas",
  "Hunza",
  "Aliabad",
  "Khaplu",
  "Shigar",
  "Gahkuch",
  "Astore",
  "Nagar",
  "Gupis",
  "Yasin"
]



export const exclusiveOffers = [
  {
    id: 1,
    name: "Pearl Continental Hotel",
    city: "Karachi",
    province: "Sindh",
    location: "Clifton, Karachi",
    image: "/images/hotels/pc-karachi.jpg",
    rating: 4.7,
    reviews: 1250,
    price: 25000,
    oldPrice: 30000,
    discount: 17,
    currency: "PKR",
    rooms: 120,
    availableRooms: 15,
    type: "Luxury Hotel",
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Parking",
      "Restaurant",
      "Room Service",
      "Air Conditioning"
    ],
    description:
      "A luxurious hotel offering premium rooms, excellent dining and modern facilities in the heart of Karachi.",
    featured: true
  },

  {
    id: 2,
    name: "Serena Hotel",
    city: "Islamabad",
    province: "Islamabad Capital Territory",
    location: "Khayaban-e-Suhrawardy, Islamabad",
    image: "/images/hotels/serena-islamabad.jpg",
    rating: 4.8,
    reviews: 980,
    price: 32000,
    oldPrice: 38000,
    discount: 16,
    currency: "PKR",
    rooms: 140,
    availableRooms: 10,
    type: "Luxury Hotel",
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Spa",
      "Gym",
      "Restaurant",
      "Parking"
    ],
    description:
      "A five-star luxury hotel surrounded by beautiful gardens and offering world-class hospitality.",
    featured: true
  },

  {
    id: 3,
    name: "Avari Hotel",
    city: "Lahore",
    province: "Punjab",
    location: "Mall Road, Lahore",
    image: "/images/hotels/avari-lahore.jpg",
    rating: 4.6,
    reviews: 870,
    price: 28000,
    oldPrice: 34000,
    discount: 18,
    currency: "PKR",
    rooms: 110,
    availableRooms: 8,
    type: "Business Hotel",
    amenities: [
      "Free WiFi",
      "Restaurant",
      "Gym",
      "Swimming Pool",
      "Parking",
      "Room Service"
    ],
    description:
      "A premium hotel in Lahore offering comfortable accommodation, fine dining and business facilities.",
    featured: true
  },

  {
    id: 4,
    name: "Mövenpick Hotel",
    city: "Karachi",
    province: "Sindh",
    location: "Club Road, Karachi",
    image: "/images/hotels/movenpick-karachi.jpg",
    rating: 4.5,
    reviews: 760,
    price: 27000,
    oldPrice: 32000,
    discount: 16,
    currency: "PKR",
    rooms: 160,
    availableRooms: 20,
    type: "Luxury Hotel",
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Fitness Center",
      "Restaurant",
      "Parking",
      "Airport Shuttle"
    ],
    description:
      "A modern luxury hotel providing spacious rooms and premium services for business and leisure travelers.",
    featured: true
  },

  {
    id: 5,
    name: "Ramada Plaza",
    city: "Karachi",
    province: "Sindh",
    location: "Shahrah-e-Faisal, Karachi",
    image: "/images/hotels/ramada-karachi.jpg",
    rating: 4.4,
    reviews: 650,
    price: 22000,
    oldPrice: 27000,
    discount: 19,
    currency: "PKR",
    rooms: 130,
    availableRooms: 12,
    type: "Business Hotel",
    amenities: [
      "Free WiFi",
      "Restaurant",
      "Parking",
      "Gym",
      "Room Service",
      "Air Conditioning"
    ],
    description:
      "A comfortable business hotel conveniently located near Karachi's major commercial areas.",
    featured: true
  },

  {
    id: 6,
    name: "Luxus Grand Hotel",
    city: "Lahore",
    province: "Punjab",
    location: "Egerton Road, Lahore",
    image: "/images/hotels/luxus-lahore.jpg",
    rating: 4.7,
    reviews: 590,
    price: 18000,
    oldPrice: 23000,
    discount: 22,
    currency: "PKR",
    rooms: 80,
    availableRooms: 9,
    type: "Boutique Hotel",
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Parking",
      "Gym",
      "Room Service"
    ],
    description:
      "A stylish boutique hotel offering modern rooms and excellent hospitality in central Lahore.",
    featured: true
  },

  {
    id: 7,
    name: "Sarena Hotel Sukkur",
    city: "Sukkur",
    province: "Sindh",
    location: "Military Road, Sukkur",
    image: "/images/hotels/serena-sukkur.jpg",
    rating: 4.3,
    reviews: 320,
    price: 12000,
    oldPrice: 15000,
    discount: 20,
    currency: "PKR",
    rooms: 70,
    availableRooms: 14,
    type: "Business Hotel",
    amenities: [
      "Free WiFi",
      "Restaurant",
      "Parking",
      "Room Service",
      "Air Conditioning"
    ],
    description:
      "A comfortable hotel in Sukkur offering convenient accommodation for business and leisure travelers.",
    featured: true
  },

  {
    id: 8,
    name: "Indus Hotel",
    city: "Hyderabad",
    province: "Sindh",
    location: "Autobhan Road, Hyderabad",
    image: "/images/hotels/indus-hyderabad.jpg",
    rating: 4.2,
    reviews: 280,
    price: 10000,
    oldPrice: 13000,
    discount: 23,
    currency: "PKR",
    rooms: 60,
    availableRooms: 11,
    type: "Family Hotel",
    amenities: [
      "Free WiFi",
      "Restaurant",
      "Parking",
      "Room Service",
      "Air Conditioning"
    ],
    description:
      "A family-friendly hotel providing comfortable rooms and essential facilities in Hyderabad.",
    featured: true
  },

  {
    id: 9,
    name: "Shangrila Resort",
    city: "Skardu",
    province: "Gilgit-Baltistan",
    location: "Lower Kachura Lake, Skardu",
    image: "/images/hotels/shangrila-skardu.jpg",
    rating: 4.9,
    reviews: 1100,
    price: 30000,
    oldPrice: 36000,
    discount: 17,
    currency: "PKR",
    rooms: 50,
    availableRooms: 6,
    type: "Resort",
    amenities: [
      "Free WiFi",
      "Lake View",
      "Restaurant",
      "Parking",
      "Room Service",
      "Mountain View"
    ],
    description:
      "A scenic resort surrounded by mountains and the beautiful Lower Kachura Lake in Skardu.",
    featured: true
  },

  {
    id: 10,
    name: "Pearl Continental Bhurban",
    city: "Murree",
    province: "Punjab",
    location: "Bhurban, Murree",
    image: "/images/hotels/pc-bhurban.jpg",
    rating: 4.8,
    reviews: 920,
    price: 35000,
    oldPrice: 42000,
    discount: 17,
    currency: "PKR",
    rooms: 180,
    availableRooms: 18,
    type: "Resort",
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Spa",
      "Mountain View",
      "Restaurant",
      "Parking"
    ],
    description:
      "A luxurious mountain resort offering beautiful views, premium rooms and world-class facilities.",
    featured: true
  }
];



export const testimonials = [
  {
    id: 1,
    name: "Ahmed Khan",
    city: "Karachi",
    country: "Pakistan",
    image: "/images/users/user-1.jpg",
    rating: 5,
    title: "Excellent Hotel Booking Experience",
    review:
      "Hotelify made my hotel booking extremely easy. The hotel information was clear, the room was exactly as shown, and the booking process was very smooth.",
    stay: "Stayed in Karachi",
    date: "August 2026"
  },

  {
    id: 2,
    name: "Ayesha Malik",
    city: "Lahore",
    country: "Pakistan",
    image: "/images/users/user-2.jpg",
    rating: 5,
    title: "Beautiful Hotel and Great Service",
    review:
      "I had a wonderful experience booking through Hotelify. The hotel was clean, comfortable, and the staff were very professional. Highly recommended!",
    stay: "Stayed in Lahore",
    date: "July 2026"
  },

  {
    id: 3,
    name: "Usman Ali",
    city: "Islamabad",
    country: "Pakistan",
    image: "/images/users/user-3.jpg",
    rating: 5,
    title: "Very Easy to Use",
    review:
      "The website is simple and easy to use. I quickly found a hotel in Islamabad and completed my booking without any difficulty.",
    stay: "Stayed in Islamabad",
    date: "July 2026"
  },

  {
    id: 4,
    name: "Fatima Zahra",
    city: "Multan",
    country: "Pakistan",
    image: "/images/users/user-4.jpg",
    rating: 4,
    title: "Great Value for Money",
    review:
      "I found a very good hotel at a reasonable price. The room was comfortable and the whole booking experience was hassle-free.",
    stay: "Stayed in Multan",
    date: "June 2026"
  },

  {
    id: 5,
    name: "Bilal Ahmed",
    city: "Sukkur",
    country: "Pakistan",
    image: "/images/users/user-5.jpg",
    rating: 5,
    title: "Highly Recommended",
    review:
      "Hotelify helped me find a great hotel in Sukkur. The booking details were accurate and the hotel staff were very helpful.",
    stay: "Stayed in Sukkur",
    date: "June 2026"
  },

  {
    id: 6,
    name: "Hina Shah",
    city: "Murree",
    country: "Pakistan",
    image: "/images/users/user-6.jpg",
    rating: 5,
    title: "Perfect Family Trip",
    review:
      "We booked a family room in Murree through Hotelify and had a fantastic experience. The hotel had a beautiful view and excellent facilities.",
    stay: "Stayed in Murree",
    date: "May 2026"
  },

  {
    id: 7,
    name: "Hamza Raza",
    city: "Faisalabad",
    country: "Pakistan",
    image: "/images/users/user-7.jpg",
    rating: 4,
    title: "Smooth Booking Process",
    review:
      "Everything was straightforward from searching for a hotel to completing the booking. I would definitely use Hotelify again.",
    stay: "Stayed in Faisalabad",
    date: "May 2026"
  },

  {
    id: 8,
    name: "Sara Ahmed",
    city: "Hyderabad",
    country: "Pakistan",
    image: "/images/users/user-8.jpg",
    rating: 5,
    title: "Amazing Experience",
    review:
      "The hotel was clean, modern, and comfortable. Hotelify gave me all the information I needed before making my reservation.",
    stay: "Stayed in Hyderabad",
    date: "April 2026"
  },

  {
    id: 9,
    name: "Owais Siddiqui",
    city: "Peshawar",
    country: "Pakistan",
    image: "/images/users/user-9.jpg",
    rating: 5,
    title: "Reliable and Convenient",
    review:
      "I really liked how easy it was to compare hotels and prices. My booking was confirmed quickly and everything went perfectly.",
    stay: "Stayed in Peshawar",
    date: "April 2026"
  },

  {
    id: 10,
    name: "Maryam Noor",
    city: "Skardu",
    country: "Pakistan",
    image: "/images/users/user-10.jpg",
    rating: 5,
    title: "Amazing Stay in Skardu",
    review:
      "The hotel selection in Skardu was excellent. I found a beautiful place with mountain views and had an unforgettable trip.",
    stay: "Stayed in Skardu",
    date: "March 2026"
  },

  {
    id: 11,
    name: "Danish Iqbal",
    city: "Quetta",
    country: "Pakistan",
    image: "/images/users/user-11.jpg",
    rating: 4,
    title: "Good Hotel Options",
    review:
      "Hotelify made it easy to discover different hotels in Quetta. The information and prices helped me choose the right hotel.",
    stay: "Stayed in Quetta",
    date: "March 2026"
  },

  {
    id: 12,
    name: "Sana Tariq",
    city: "Gwadar",
    country: "Pakistan",
    image: "/images/users/user-12.jpg",
    rating: 5,
    title: "Wonderful Experience",
    review:
      "Our Gwadar trip was amazing. We found a beautiful hotel through Hotelify and the entire booking experience was excellent.",
    stay: "Stayed in Gwadar",
    date: "February 2026"
  }
];



 import {
  FaWifi,
  FaParking,
  FaSwimmingPool,
  FaUtensils,
  FaDumbbell,
  FaSpa,
  FaSnowflake,
  FaTv,
  FaConciergeBell,
  FaCar,
  FaCoffee,
  FaBath,
  FaBed,
  FaMountain,
  FaPlane,
  FaSmokingBan
} from "react-icons/fa";

export const facilitiesIcon = [
  {
    id: 1,
    name: "Free WiFi",
    icon: FaWifi
  },
  {
    id: 2,
    name: "Free Parking",
    icon: FaParking
  },
  {
    id: 3,
    name: "Swimming Pool",
    icon: FaSwimmingPool
  },
  {
    id: 4,
    name: "Restaurant",
    icon: FaUtensils
  },
  {
    id: 5,
    name: "Fitness Center",
    icon: FaDumbbell
  },
  {
    id: 6,
    name: "Spa",
    icon: FaSpa
  },
  {
    id: 7,
    name: "Air Conditioning",
    icon: FaSnowflake
  },
  {
    id: 8,
    name: "TV",
    icon: FaTv
  },
  {
    id: 9,
    name: "Room Service",
    icon: FaConciergeBell
  },
  {
    id: 10,
    name: "Airport Shuttle",
    icon: FaCar
  },
  {
    id: 11,
    name: "Coffee Shop",
    icon: FaCoffee
  },
  {
    id: 12,
    name: "Private Bathroom",
    icon: FaBath
  },
  {
    id: 13,
    name: "King Size Bed",
    icon: FaBed
  },
  {
    id: 14,
    name: "Mountain View",
    icon: FaMountain
  },
  {
    id: 15,
    name: "Airport Transfer",
    icon: FaPlane
  },
  {
    id: 16,
    name: "Non-Smoking Rooms",
    icon: FaSmokingBan
  }
];


export const userBookingDummyData = [
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

export default userBookingDummyData;