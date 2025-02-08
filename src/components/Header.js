import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function Header({ toggleSidebar }) {
  return (
    <header className="bg-[#1E3A8A] text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Maryam Heva Foundation</h1>
      <nav className="hidden md:flex space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#FFD700] font-bold" : "hover:text-[#FFD700]"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-[#FFD700] font-bold" : "hover:text-[#FFD700]"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-[#FFD700] font-bold" : "hover:text-[#FFD700]"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-[#FFD700] font-bold" : "hover:text-[#FFD700]"
          }
        >
          Contact
        </NavLink>
      </nav>
      <button className="md:hidden" onClick={toggleSidebar}>
        <FiMenu size={24} />
      </button>
    </header>
  );
}
