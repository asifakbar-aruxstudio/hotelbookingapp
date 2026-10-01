import { NavLink } from "react-router-dom";


const Sidebar = () => {
  
  const sidebarData = [
    { name: "Dashboard", path: "/owner/dashboard" , icon: "fa-solid fa-house" },
    { name: "Add room", path: "/owner/add-room", icon: "fa-solid fa-bed" },
    { name: "List of rooms", path: "/owner/list-rooms", icon: "fa-solid fa-list" }

  ];

    return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
     {sidebarData.map((item, index) => (
        <NavLink 
          key={index}
          to={item.path}
          className="flex items-center p-4 hover:bg-gray-600"
        >
          <i className={item.icon}></i>
          <span className="ml-3">{item.name}</span>
        </NavLink>
      ))}

    </div>
  )
}

export default Sidebar