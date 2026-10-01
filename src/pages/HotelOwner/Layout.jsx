import Navbar from "../components/hotelOwner/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
        <Navbar />
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout