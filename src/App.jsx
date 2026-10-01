import { Routes , Route , useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Careers from './pages/Careers'
import AllRooms from './pages/AllRooms';
import HotelDetail from "./pages/HotelDetail";
import RoomDetails from "./pages/RoomDetails";
import MyBookings from "./pages/MyBookings";
import HotelReg from './components/HotelReg';
import Layout from './pages/HotelOwner/Layout';
import Dashboard from './pages/HotelOwner/Dashboard';
import AddRoom from './pages/HotelOwner/AddRooms';
import ListRooms from './pages/HotelOwner/ListRooms';
import Footer from './components/Footer'
// import ContactUs from './pages/ContactUs'
// import PrivacyPolicy from './pages/PrivacyPolicy'
// import TermsOfService from './pages/TermsOfService'
// import CookiePolicy from './pages/CookiePolicy'





function App() {
const isOwnerPath = useLocation().pathname.includes('/owner');
  return (
    <>
     {!isOwnerPath && <Navbar />}
     { false && <HotelReg/> }
       
       <div className ='min-h-[70vh]' > 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/rooms" element ={<AllRooms/>}/>
            <Route path="/rooms/:roomId" element={<RoomDetails />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/hotels/:hotelId" element={<HotelDetail />} />

            
            <Route path="/owner" element={<Layout />} >
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-rooms" element={<ListRooms />} />
</Route>

             {/* <Route path="/contact" element={<ContactUs />} />
             <Route path="/privacy" element={<PrivacyPolicy />} />
             <Route path="/terms" element={<TermsOfService />} />
             <Route path="/cookies" element={<CookiePolicy />} /> */}

    
        </Routes>
        </div>
        <Footer />
    </>
  )
}
export default App            