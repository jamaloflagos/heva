import { FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, toggleSidebar }) {
    return (
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-75 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
        onClick={toggleSidebar}
      >
        <div className="bg-white w-64 h-full shadow-lg p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-[#1E3A8A]">Maryam Heva Foundation</h2>
            <button onClick={toggleSidebar}>
              <FiX size={24} />
            </button>
          </div>
          <nav className="mt-6 space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "block text-lg text-[#1E3A8A] font-bold" : "block text-lg text-gray-700 hover:text-[#1E3A8A]"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "block text-lg text-[#1E3A8A] font-bold" : "block text-lg text-gray-700 hover:text-[#1E3A8A]"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "block text-lg text-[#1E3A8A] font-bold" : "block text-lg text-gray-700 hover:text-[#1E3A8A]"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "block text-lg text-[#1E3A8A] font-bold" : "block text-lg text-gray-700 hover:text-[#1E3A8A]"
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    );
  }
  