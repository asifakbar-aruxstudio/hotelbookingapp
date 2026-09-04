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


