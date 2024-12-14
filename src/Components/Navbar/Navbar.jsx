import { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../../assets/46098161_1885960234834375_8363858096337977344_n.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Hospital Logo */}
        <div className="flex items-center space-x-2">
          <img src="https://marketplace.canva.com/EAGKU6t2llU/2/0/1600w/canva-blue-green-white-simple-modern-medical-logo-enoKffV7vWg.jpg" alt="Hospital Logo" className="w-10 h-10" />
          <span className="text-2xl font-bold text-blue-600">
            HOSPITAL NAME 
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/add-page" className="hover:text-blue-500">
            Add New
          </Link>
          <a href="#services" className="hover:text-blue-500">
            Services
          </a>
          <a href="#doctors" className="hover:text-blue-500">
            Doctors
          </a>
          <a href="#appointments" className="hover:text-blue-500">
            Appointments
          </a>
          <div className="relative group">
            <button className="hover:text-blue-500 focus:outline-none">
              More
            </button>
            <div className="absolute hidden group-hover:block bg-white text-black shadow-lg rounded-md mt-2">
              <a href="#about-us" className="block px-4 py-2 hover:bg-gray-200">
                About Us
              </a>
              <a href="#contact" className="block px-4 py-2 hover:bg-gray-200">
                Contact
              </a>
              <a href="#careers" className="block px-4 py-2 hover:bg-gray-200">
                Careers
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleDropdown}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg py-2 text-gray-700">
          <a href="#home" className="block px-4 py-2 hover:bg-gray-200">
            Home
          </a>
          <a href="#departments" className="block px-4 py-2 hover:bg-gray-200">
            Departments
          </a>
          <a href="#services" className="block px-4 py-2 hover:bg-gray-200">
            Services
          </a>
          <a href="#doctors" className="block px-4 py-2 hover:bg-gray-200">
            Doctors
          </a>
          <a href="#appointments" className="block px-4 py-2 hover:bg-gray-200">
            Appointments
          </a>
          <a href="#about-us" className="block px-4 py-2 hover:bg-gray-200">
            About Us
          </a>
          <a href="#contact" className="block px-4 py-2 hover:bg-gray-200">
            Contact
          </a>
          <a href="#careers" className="block px-4 py-2 hover:bg-gray-200">
            Careers
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
