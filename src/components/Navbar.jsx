import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import menuicon from '../assets/menuicon.png';
import close from '../assets/close.png';
import { useClerk, useUser, UserButton } from '@clerk/react';

const BookingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
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

  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  // FIX: previously this only ran once per route change and, on the
  // home route, kept returning the stale "prev" value — so isScrolled
  // never actually updated while scrolling. That left the navbar
  // background transparent while the link text stayed white, making
  // the links invisible against the page's own white content.
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== '/') {
        setIsScrolled(true);
      } else {
        setIsScrolled(window.scrollY > 10);
      }
    };

    handleScroll(); // evaluate immediately on mount / route change
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close mobile menu automatically when switching routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between
      px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50
      ${isScrolled
          ? 'bg-white/90 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4'
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 transition-all duration-300">
        <img
          src={logo}
          alt="Logo"
          className={`h-9 md:h-10 transition-all duration-300 ${isScrolled ? 'invert opacity-80' : ''}`}
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className={`group flex flex-col gap-0.5 transition-colors duration-300
            ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {link.name}
            <div
              className={`${isScrolled ? 'bg-gray-700' : 'bg-white'}
              h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </Link>
        ))}
        <button
          onClick={() => navigate('/owner')}
          className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer
          transition-all duration-300
          ${isScrolled ? 'text-gray-700 border-gray-400 hover:bg-gray-100' : 'text-white border-white/70 hover:bg-white/10'}`}
        >
          Dashboard
        </button>
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        <button aria-label="Search" className="p-1.5 rounded-full hover:bg-black/5 transition-all duration-300">
          <img
            src={search}
            alt="Search"
            className={`h-5 w-5 transition-all duration-300 ${isScrolled ? 'invert' : ''}`}
          />
        </button>

        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<BookingIcon />}
                onClick={() => navigate('/my-bookings')}
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            onClick={openSignIn}
            className={`px-8 py-2.5 rounded-full ml-2 font-medium transition-all duration-500
            ${isScrolled ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-100'}`}
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Right */}
      <div className="flex items-center gap-3 md:hidden">
        {user && (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<BookingIcon />}
                onClick={() => navigate('/my-bookings')}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
        <button aria-label="Open menu" onClick={() => setIsMenuOpen(true)}>
          <img
            src={menuicon}
            alt="Menu"
            className={`h-6 w-6 cursor-pointer transition-all duration-300 ${isScrolled ? 'invert' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col
        md:hidden items-center justify-center gap-6 font-medium text-gray-800
        transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <button
          aria-label="Close menu"
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={close} alt="Close" className="h-6 w-6" />
        </button>

        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-black/70 transition-colors"
          >
            {link.name}
          </Link>
        ))}

        {user && (
          <button
            onClick={() => {
              navigate('/owner');
              setIsMenuOpen(false);
            }}
            className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all"
          >
            Dashboard
          </button>
        )}

        {!user && (
          <button
            onClick={() => {
              openSignIn();
              setIsMenuOpen(false);
            }}
            className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;