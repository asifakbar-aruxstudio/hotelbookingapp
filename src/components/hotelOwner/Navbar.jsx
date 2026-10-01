
import { Link } from 'react-router-dom'
import assets from '../../assets'
import {UserButton} from './UserButton'


const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-3 bg-white shadow-md md:px-8 
    lg:px-16 border-b border-gray-200 transition-all duration-300'>
        <Link to="/">
            <img src={assets.logo} alt="Logo" />
        </Link>
        <UserButton/>
    </div>
  )
}

export default Navbar