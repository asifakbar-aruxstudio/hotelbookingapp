import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  // Sidebar menu items with icons
  const sidebarData = [
    { name: "Dashboard",       path: "/owner/dashboard",       icon: "fa-solid fa-house" },           // 🏠 Home icon
    { name: "Register Hotel",  path: "/owner/register-hotel",  icon: "fa-solid fa-hotel" },           // 🏨 Hotel icon
    { name: "My Hotels",       path: "/owner/my-hotels",       icon: "fa-solid fa-building" },        // 🏢 Building icon
    { name: "Add Room",        path: "/owner/add-room",        icon: "fa-solid fa-bed" },             // 🛏️ Bed icon
    { name: "List of Rooms",   path: "/owner/list-rooms",      icon: "fa-solid fa-list" },            // 📋 List icon
    { name: "Bookings",        path: "/owner/bookings",        icon: "fa-solid fa-calendar-check" },  // 📅 Calendar check icon
    { name: "Reviews",         path: "/owner/reviews",         icon: "fa-solid fa-star" },            // ⭐ Star icon
    { name: "Settings",        path: "/owner/settings",        icon: "fa-solid fa-gear" },            // ⚙️ Gear icon
  ];

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-64"
      } h-screen bg-white text-gray-700 flex flex-col shadow-2xl transition-all duration-300 ease-in-out relative border-r border-gray-200`}
    >
      {/* Logo / Brand */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-gray-200">
        <div className="flex items-center gap-2 overflow-hidden">
          <img
            src={logo}
            alt="Logo"
            className={`${collapsed ? "h-8" : "h-10"} w-auto object-contain transition-all`}
          />
          {!collapsed && (
            <span className="text-lg font-bold tracking-wide bg-gradient-to-r from-green-500 
            to-orange-500 bg-clip-text text-transparent">
              Owner Panel
            </span>
          )}
        </div>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 bg-green-500 hover:bg-green-600 
        text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md transition"
        aria-label="Toggle sidebar">
        <i className={`fa-solid ${collapsed ? "fa-chevron-right" : "fa-chevron-left"} text-xs`}></i>
      </button>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
        {sidebarData.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `group flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 relative
               ${
                 isActive
                   ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold shadow-md"
                   : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
               }`
            }
            title={collapsed ? item.name : ""}
          >
            <i className={`${item.icon} text-lg w-6 text-center`}></i>
            {!collapsed && <span className="truncate">{item.name}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="px-4 py-4 border-t border-gray-200 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Hotel Manager</p>
          <p className="text-gray-400">All rights reserved</p>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;