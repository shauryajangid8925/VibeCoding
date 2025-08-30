/**
 * File: src/components/Navbar.js
 * Purpose: College demo site – added explanatory comments for readability.
 * Note: No functional code was changed.
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoginPage from "./LoginPage";

// Arrow function / React component
const Navbar = ({ onContactOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Admissions",
    "Our Courses",
    "Facilities",
    "Placements",
    "Extra-Curricular",
    "Contact",
  ];

  const sectionIds = {
    Home: "home",
    About: "about",
    Admissions: "admissions",
    "Our Courses": "courses",
    Facilities: "facilities",
    Placements: "placements",
    "Extra-Curricular": "extracurricular",
    Contact: "contact",
  };

  // ✅ updated scroll function
  const handleScrollToSection = (id, event) => {
    event.preventDefault();
    setIsOpen(false); // close mobile menu first

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // wait for menu collapse animation
  };

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3"
            >
              <img
                src="/logos/logo1.jpg"
                alt="BMIET Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-2xl font-bold text-blue-800">
                B.M.I.E.T.
              </span>
            </motion.div>

            {/* Desktop Menu (lg and above) */}
            <div className="hidden lg:flex space-x-6 relative">
              {menuItems.map((item, index) => (
                <div key={item} className="relative">
                  {item === "Contact" ? (
                    <motion.button
                      onClick={onContactOpen}
                      className="relative text-gray-700 hover:text-blue-600 transition-colors cursor-pointer group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item}
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </motion.button>
                  ) : (
                    <motion.a
                      href={`#${sectionIds[item]}`}
                      onClick={(e) => handleScrollToSection(sectionIds[item], e)}
                      className="relative text-gray-700 hover:text-blue-600 transition-colors cursor-pointer group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item}
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </motion.a>
                  )}
                </div>
              ))}

              {/* Login (desktop only) */}
              <motion.button
                onClick={() => setIsLoginOpen(true)}
                className="relative text-gray-700 hover:text-blue-600 transition-colors cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Login
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            </div>

            {/* Mobile/Tablet Hamburger (below lg) */}
            <button
              className="lg:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
              <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
              <div className="w-6 h-0.5 bg-gray-700"></div>
            </button>
          </div>

          {/* Mobile/Tablet Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4"
              >
                <div className="flex flex-col space-y-3 py-4">
                  {menuItems.map((item) =>
                    item === "Contact" ? (
                      <button
                        key={item}
                        onClick={() => {
                          onContactOpen();
                          setIsOpen(false);
                        }}
                        className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-left cursor-pointer"
                      >
                        {item}
                      </button>
                    ) : (
                      <a
                        key={item}
                        href={`#${sectionIds[item]}`}
                        onClick={(e) =>
                          handleScrollToSection(sectionIds[item], e)
                        }
                        className="text-gray-700 hover:text-blue-600 transition-colors py-2 cursor-pointer"
                      >
                        {item}
                      </a>
                    )
                  )}
                  <button
                    onClick={() => {
                      setIsLoginOpen(true);
                      setIsOpen(false);
                    }}
                    className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-left cursor-pointer"
                  >
                    Login
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Login Modal */}
      <LoginPage isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

// Exporting the main component
export default Navbar;
