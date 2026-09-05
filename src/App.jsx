import { Routes , Route , useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Careers from './pages/Careers'
import ContactUs from './pages/ContactUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'
import Footer from './components/Footer'

function App() {
const isOwnerPath = useLocation().pathname.includes('/owner');
  return (
    <>
     {!isOwnerPath && <Navbar />}
       <div className ='min-h-[70vh]' > 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
        </Routes>
        </div>
        <Footer />
    </>
  )
}
export default App