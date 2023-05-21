import React, { useState } from "react"; 
import HarmburgerIcon from "./icons/Harmburger"; 

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <nav className="relative container mx-auto px-4 md:px-20 pt-10">
        <div className="flex items-center justify-between">
          <div className="pt-2 cursor-pointer"> 
             <span className="text-blue-600 font-bold text-2xl md:text-4xl">Victor Ajayi</span> <br/>
          </div>

          {/* Mobile Header */}
          <button
            id="menu-btn"
            onClick={handleOpen}
            className="block hamburger md:hidden focus:outline-none mr-3"
          >
            <HarmburgerIcon />
          </button>

          {/* Menu Items */}
          <div className="md:flex space-x-16 hidden">
            <a href="#about" className="nav-items">
              About
            </a>
            <a href="#project" className="nav-items">
              Work
            </a> 
            <a href="#contact" className="nav-items">
              Contact
            </a>
          </div>
          <a
            href="AJAYI OLUWATOYIN VICTOR....pdf"
            // download
            target="_blank"
            className="hidden md:block p-3 px-6 pt-2 text-white rounded-md hover:bg-white hover:text-black bg-blue-600"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-blue-600 p-40 text-center mt-2">
            <div
              id="menu"
              className="mobile_menu absolute top-28 left-0 right-0 bottom-0 z-50"
            >
              <a
                href="#"
                className="hover:border-b-2 hover:border-blue-600 text-xl cursor-pointer block py-4 px-6 border-b border-gray-200"
                onClick={handleClose}
              >
                Home
              </a>
              <a
                href="#"
                className="hover:border-b-2 hover:border-blue-600 text-xl cursor-pointer block py-4 px-6 border-b border-gray-200"
                onClick={handleClose}
              >
                About Us
              </a>
              <a
                href="#"
                className="hover:border-b-2 hover:border-blue-600 text-xl cursor-pointer block py-4 px-6 border-b border-gray-200"
                onClick={handleClose}
              >
                Work
              </a>
              <a
                href="#"
                className="hover:border-b-2 hover:border-blue-600 text-xl cursor-pointer block py-4 px-6 border-b border-gray-200"
                onClick={handleClose}
              >
                Blog
              </a>
              <a
                href="#"
                className="hover:border-b-2 hover:border-blue-600 text-xl cursor-pointer block py-4 px-6 border-b border-gray-200"
                onClick={handleClose}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
