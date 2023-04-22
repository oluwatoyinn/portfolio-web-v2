import React, { useState } from "react";
import ToggleMode from "../components/DarkMode/ToggleMode";
import HarmburgerIcon from "./icons/Harmburger";
import Image from "next/image";

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
      <nav className="relative container mx-auto md:px-20 pt-10">
        <div className="flex items-center justify-between">
          <div className="pt-2 cursor-pointer">
            <Image
              src="/logo2.PNG"
              alt="Img Logo"
              className="dark:invert"
              width={200}
              height={24}
              priority
            />
          </div>
          {/* Menu Items */}
          <div className="md:flex space-x-16 hidden">
            <a href="#" className="nav-items">
              About
            </a>
            <a href="#" className="nav-items">
              Work
            </a>
            <a href="#" className="nav-items">
              Blog
            </a>
            <a href="#" className="nav-items">
              Contact
            </a>
          </div>
          {/* <div>
            <ToggleMode /> 
          </div> */}
          <a
            href="AJAYI OLUWATOYIN VICTOR....pdf"
            // download
            target="_blank"
            className=" hidden md:block p-3 px-6 pt-2 text-white rounded-md hover:bg-white hover:text-black bg-blue-600"
          >
            Resume
          </a>

          {/* Mobile Header */}
          <button
            id="menu-btn"
            onClick={handleOpen}
            className="block hamburger md:hidden focus:outline-none mr-3"
          >
            <HarmburgerIcon />
          </button>
        </div>
        {open && (
          <div>
            <div id="menu" className="mobile_menu">
              <a href="#" className="nav-items" onClick={handleClose}>
                Home
              </a>
              <a href="#" className="nav-items" onClick={handleClose}>
                About Us
              </a>
              <a href="#" className="nav-items" onClick={handleClose}>
                About Us
              </a>
              <a href="#" className="nav-items" onClick={handleClose}>
                About Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
