import Navbar from "../../components/hotelOwner/Navbar";
import Sidebar from "../../components/hotelOwner/Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
        <Navbar />
        <div className="flex">
            <Sidebar />
            <main className="flex-1">
                {children}
            </main>
        </div>  
        </div>
  )
}

export default Layout