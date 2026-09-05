import { Routes , Route , useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
//import Rooms from './pages/Rooms'
//import Experience from './pages/Experience'
import ContactUs from './pages/ContactUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import './App.css'
import Careers from './pages/Careers'
import CookiesPolicy from './pages/CookiesPolicy'
import Policylayout from './components/Policylayout'
import TermsAndConditions from './pages/TermsAndConditions'

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
           {/* <Route path="/rooms" element={<Rooms />} /> */}
           {/* <Route path="/experience" element={<Experience />} /> */}
           <Route path="/contact" element={<ContactUs />} />
           <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/cookies" element={<CookiesPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/policy" element={<Policylayout />} />
        </Routes>
        <Routes>
          <Route path="/owner/*" element={<Policylayout />} />
        </Routes>
        </div>
        <Footer />
    </>
  )
}
export default App