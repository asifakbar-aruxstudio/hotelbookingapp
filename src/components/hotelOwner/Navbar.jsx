import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-3 bg-white shadow-md md:px-8 
    lg:px-16 border-b border-gray-300 transition-all w-small'>
        <Link to="/">
            <img src={logo} alt="Logo" className='h-10 w-auto object-contain' />
        </Link>
        <UserButton />
    </div>
  )
}

export default Navbar