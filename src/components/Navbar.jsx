import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState(0);

  const handleScroll = (to) => {
    if (location.pathname === "/") {
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsOpen(false);
      }
    }
  };

  // Animate menu height when opening/closing
  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        setMenuHeight(menuRef.current.scrollHeight);
      } else {
        setMenuHeight(0);
      }
    }
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Rushil Reddy
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["hero", "about", "projects", "skills", "contact"].map(
              (section) => (
                <span
                  key={section}
                  onClick={() => handleScroll(section)}
                  className="px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
              )
            )}
            <Link
              to="/career"
              className="px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Career Highlights
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown with slide animation */}
      <div
        ref={menuRef}
        style={{ maxHeight: `${menuHeight}px` }}
        className="md:hidden overflow-hidden transition-max-height duration-300 ease-in-out bg-white border-t border-gray-200"
      >
        <div className="flex flex-col px-4 py-2 space-y-2">
          {["hero", "about", "projects", "skills", "contact"].map((section) => (
            <span
              key={section}
              onClick={() => handleScroll(section)}
              className="px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
          ))}
          <Link
            to="/career"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 text-gray-700 hover:text-blue-600"
          >
            Career Highlights
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
