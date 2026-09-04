import {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import menuicon from '../assets/menuicon.png';
import close from '../assets/close.png';
import { useClerk , useUser ,UserButton  } from '@clerk/react';
import { useNavigate , useLocation } from 'react-router-dom';


const BookingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Experience', path: '/experience' },
        { name: 'About', path: '/about' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const {openSignIn} = useClerk();
    const { user } = useUser();
    const navigate = useNavigate();
    const location = useLocation();



    useEffect(() => {
        if(location.pathname !== '/') {
            setIsScrolled(true);
            return;
        }else{
            setIsScrolled(false);
        }
         setIsScrolled(window.scrollY > 10);

        const handleScroll = () => {
            setIsScrolled(prev => location.pathname !== '/' ? true : prev );
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    return (
            <nav className={`fixed top-0 left-0 w-full flex items-center 
            justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50
             ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : 
             "py-4 md:py-6"}`}>
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 transition-all duration-300">
                    <img src={logo} alt="Logo"
                    className={`h-15 ${isScrolled && "invert opacity-80"}`} />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <Link key={i} to={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </Link>
                    ))}
                    <button  onClick = {() => navigate('/owner')} className={`border px-4 py-1 text-sm font-light 
                        rounded-full cursor-pointer 
                        ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>
                        Dashboard
                    </button>
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">

                      <img src={search} alt="Search" className={`h-8 w-8 rounded-full
                         ${isScrolled ? "invert" : ""} transition-all duration-300`} />                
                   
                   {user ? 
                   (<UserButton> 
                    <UserButton.MenuItems>
                        <UserButton.Action label="My Booking " labelIcon={<BookingIcon/>}
                         onClick={() => navigate('/my-bookings')} />
                    </UserButton.MenuItems>
                   </UserButton>)
                   :
                   (<button onClick={openSignIn} className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 
                    ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}>
                        Login
                    </button>) 
                   }
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    {
                    user && <UserButton> 
                    <UserButton.MenuItems>
                        <UserButton.Action label="My Booking " labelIcon={<BookingIcon/>}
                         onClick={() => navigate('/my-bookings')} />
                    </UserButton.MenuItems>
                   </UserButton>
                }
                    <img src={menuicon} alt="Menu" onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`} 
                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"/>
                </div>

                {/* Mobile Menu */}
                
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <img src={close} alt="Close" className="h-6 w-6" />
                    </button>

                    {navLinks.map((link, i) => (
                        <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </Link>
                    ))}

                    { user && <button  onClick = {() => navigate('/owner')} className="border px-4 py-1 text-sm font-light 
                    rounded-full cursor-pointer transition-all">
                        Dashboard
                    </button> }


                    { !user && <button  onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                        Login
                    </button> }
                </div>
            </nav>
    );
}

export default Navbar;