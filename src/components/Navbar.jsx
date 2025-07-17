import React from 'react';
import mernlogo from '../assets/mernlogo.png'; // 👈 make sure to add this logo image

const Navbar = () => {
  return (
    <nav className="bg-white text-black shadow-md sticky top-0 z-50 py-5">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-3">
          <img src={mernlogo} alt="Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-extrabold tracking-wide">Tech Excellence</h1>
        </div>

        {/* Center: Nav Links */}
        <ul className="flex gap-8 font-semibold text-base">
          <li>
            <a href="#home" className="hover:text-black hover:bg-[#f3f4f6] px-3 py-1 rounded transition-all undeline">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-black hover:bg-[#f3f4f6] px-3 py-1 rounded transition-all">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-black hover:bg-[#f3f4f6] px-3 py-1 rounded transition-all">Projects</a>
          </li>
          <li>
            <a href="#services" className="hover:text-black hover:bg-[#f3f4f6] px-3 py-1 rounded transition-all">Services</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-black hover:bg-[#f3f4f6] px-3 py-1 rounded transition-all">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
