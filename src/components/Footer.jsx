import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import cities from '../data/cities.js'

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    path: 'M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12',
  },
  {
    name: 'Instagram',
    href: '#',
    path: 'M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.3.4.6.2 1 .5 1.4.9.4.4.7.9.9 1.4.2.5.4 1.2.4 2.3.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.2 1.8-.4 2.3a3.9 3.9 0 0 1-.9 1.4c-.4.4-.9.7-1.4.9-.5.2-1.2.4-2.3.4-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.2-2.3-.4a3.9 3.9 0 0 1-1.4-.9 3.9 3.9 0 0 1-.9-1.4c-.2-.5-.4-1.2-.4-2.3-.1-1-.1-1.4-.1-4.1s0-3.1.1-4.1c0-1.1.2-1.8.4-2.3.2-.6.5-1 .9-1.4.4-.4.9-.7 1.4-.9.5-.2 1.2-.4 2.3-.4C8.9 2 9.3 2 12 2m0 3.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6m0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2m5-8.1a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0',
  },
  {
    name: 'Twitter',
    href: '#',
    path: 'M22 5.9c-.7.3-1.5.6-2.3.7a4 4 0 0 0 1.8-2.2c-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.9 3.7 11.4 11.4 0 0 1-8.3-4.2 4 4 0 0 0 1.2 5.4c-.6 0-1.3-.2-1.8-.5v.1a4 4 0 0 0 3.2 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.8 2.8A8 8 0 0 1 2 18.6 11.3 11.3 0 0 0 8.3 20c7.5 0 11.6-6.3 11.6-11.7v-.5c.8-.6 1.5-1.3 2.1-2.1',
  },
]

const Footer = () => {
  return (
    <footer className="relative overflow-hidden px-6 md:px-16 lg:px-24 xl:px-32
    w-full text-sm text-slate-500 bg-white pt-16">

      {/* decorative watermark icon */}
      <svg
        className="hidden md:block absolute -bottom-30 -left-80 
        opacity-5 w-full h-full pointer-events-none"
        width="68" height="26" viewBox="0 0 68 26" fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_8678_1074)">
          <path d="M16.141 0C13.4854 0 10.9387 1.04871 9.06091 2.91543L2.93268 9.00761C1.05492 10.8743 0 13.4061 0 16.0461C0 21.5435 4.48289 26 10.0128 26C12.6684 26 15.2152 24.9512 17.0929 23.0845L21.3319 18.8705C21.3319 18.8705 21.3319 18.8706 21.3319 18.8705L33.6827 6.59239C34.5795 5.70086 35.7958 5.2 37.0641 5.2C39.1874 5.2 40.9876 6.57576 41.6117 8.47953L45.5096 4.60457C43.7314 1.83589 40.6134 0 37.0641 0C34.4085 0 31.8617 1.04871 29.984 2.91543L13.3943 19.4076C12.4974 20.2992 11.2811 20.8 10.0128 20.8C7.37176 20.8 5.23077 18.6716 5.23077 16.0461C5.23077 14.7852 5.73459 13.5761 6.63139 12.6845L12.7596 6.59239C13.6564 5.70086 14.8727 5.2 16.141 5.2C18.2645 5.2 20.0645 6.57582 20.6887 8.47965L24.5866 4.60466C22.8084 1.83595 19.6904 0 16.141 0Z" fill="#364153" />
          <path d="M34.3188 19.4076C33.422 20.2992 32.2056 20.8 30.9373 20.8C28.8143 20.8 27.0143 19.4246 26.39 17.5211L22.4922 21.396C24.2705 24.1643 27.3883 26 30.9373 26C33.5929 26 36.1397 24.9512 38.0175 23.0845L54.6072 6.59239C55.504 5.70086 56.7203 5.2 57.9886 5.2C60.6297 5.2 62.7707 7.32839 62.7707 9.95393C62.7707 11.2148 62.2669 12.4239 61.37 13.3155L55.2419 19.4076C54.345 20.2992 53.1287 20.8 51.8604 20.8C49.7372 20.8 47.9371 19.4243 47.3129 17.5207L43.4151 21.3957C45.1933 24.1642 48.3112 26 51.8604 26C54.516 26 57.0628 24.9512 58.9405 23.0845L65.0687 16.9924C66.9465 15.1257 68.0014 12.5939 68.0014 9.95393C68.0014 4.45652 63.5186 0 57.9886 0C55.333 0 52.7863 1.04871 50.9085 2.91543L34.3188 19.4076Z" fill="#364153" />
        </g>
        <defs>
          <clipPath id="clip0_8678_1074">
            <rect width="68" height="26" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="inline-block">
            <img src={logo} alt="Logo" className="h-20" />
          </Link>
          <p className="text-sm/7 mt-6 max-w-xs">
            Book verified hotels across Pakistan at the best prices — from budget
            stays to luxury resorts, all in one place.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="flex items-center justify-center w-9 h-9 rounded-full
                bg-slate-100 text-slate-500 hover:bg-green-500 hover:text-white
                transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
          <div className="flex flex-col space-y-2.5">
            <Link className="hover:text-green-600 transition w-fit" to="/about">About us</Link>
            <Link className="hover:text-green-600 transition w-fit" to="/careers">Careers</Link>
            <Link className="hover:text-green-600 transition w-fit" to="/contact">Contact us</Link>
            <Link className="hover:text-green-600 transition w-fit" to="/privacy">Privacy policy</Link>
          </div>
        </div>

        {/* Popular Destinations */}
        <div>
          <h2 className="font-semibold mb-5 text-gray-800">Popular Cities</h2>
          <div className="flex flex-col space-y-2.5">
            {cities.slice(0, 4).map((city, i) => (
              <Link
                key={i}
                to={`/rooms?city=${city}`}
                className="hover:text-green-600 transition w-fit"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-semibold text-gray-800 mb-5">Subscribe to our newsletter</h2>
          <div className="text-sm space-y-4 max-w-sm">
            <p>Get the latest deals and travel offers sent to your inbox weekly.</p>
            <form className="flex items-stretch" onSubmit={(e) => e.preventDefault()}>
              <input
                className="rounded-l-md bg-gray-100 outline-none w-full max-w-64
                h-11 px-3 text-sm focus:ring-2 focus:ring-green-100 transition-all"
                type="email"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-b from-green-500 to-green-600
                cursor-pointer hover:from-green-600 hover:to-green-700 transition
                px-4 h-11 text-white rounded-r-md font-medium whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between
      gap-4 py-6 border-t mt-12 border-slate-200 text-xs sm:text-sm">
        <p className="text-center">
          Copyright {new Date().getFullYear()} ©{' '}
          <Link to="/" className="hover:text-green-600 transition">Hotelify</Link>. All Rights Reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link to="/privacy" className="hover:text-green-600 transition">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-green-600 transition">Terms of Service</Link>
          <Link to="/cookies" className="hover:text-green-600 transition">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer