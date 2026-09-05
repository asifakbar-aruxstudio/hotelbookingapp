import { Routes , Route , useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './App.css'
import Footer from './components/Footer'

function App() {
const isOwnerPath = useLocation().pathname.includes('/owner');
  return (
    <>
     {!isOwnerPath && <Navbar />}
       <div className ='min-h-[70vh]' > 
        <Routes>
           <Route path="/" element={<Home />} />
        </Routes>
        </div>
        <Footer />
    </>
  )
}

export default App
