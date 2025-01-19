"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-1 z-50 bg-white rounded-md">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="h-[50px] bg-gradient-to-r bg-white flex items-center justify-between px-4 py-1 shadow-lg">
        {/* Logo */}
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src=".\thcasaplogo.png" width={100} height={150} alt="Logo" />
        </a>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden flex-start items-center justify-center p-3 w-12 h-12 text-slate-800 bg-grey-200 rounded-md shadow-md transition-transform"
          aria-label="Toggle Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black my-1.5 transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-4">
          <a href="#products" className="text-black">
            Products
          </a>
          <a href="#contact" className="text-black">
            Contact
          </a>
          <a href="#about" className="text-black">
            About
          </a>
          <a href="#cart" className="text-black">
            Cart
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-gradient-to-r bg-white shadow-md transform transition-all duration-300 ${
          isMenuOpen ? "translate-y-0 opacity-100" : "hidden"
        }`}
      >
        <nav className="flex flex-col space-y-2 p-4 text-black">
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#cart">Cart</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
