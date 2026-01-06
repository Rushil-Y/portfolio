import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (to) => {
    if (location.pathname === "/") {
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Navigate to home first, then scroll after a small delay
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(to);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // delay ensures the element exists
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Rushil Reddy
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <span
              onClick={() => handleScroll("hero")}
              className="px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              Home
            </span>
            <span
              onClick={() => handleScroll("about")}
              className="px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              About
            </span>
            <span
              onClick={() => handleScroll("projects")}
              className="px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              Projects
            </span>
            <span
              onClick={() => handleScroll("skills")}
              className="px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              Skills
            </span>
            <span
              onClick={() => handleScroll("contact")}
              className="px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              Contact
            </span>
            <Link
              to="/career"
              className="px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Career Highlights
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
