import React, { useState } from 'react';
import mernlogo from '../assets/mernlogo.png';
import { Menu, X } from 'lucide-react'; // Hamburger & close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black shadow-md sticky top-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img src={mernlogo} alt="Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-extrabold tracking-wide">Tech Excellence</h1>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 font-semibold text-base">
          <li><a href="#home" className="hover:bg-gray-100 px-3 py-1 rounded">Home</a></li>
          <li><a href="#about" className="hover:bg-gray-100 px-3 py-1 rounded">About</a></li>
          <li><a href="#projects" className="hover:bg-gray-100 px-3 py-1 rounded">Projects</a></li>
          <li><a href="#services" className="hover:bg-gray-100 px-3 py-1 rounded">Services</a></li>
          <li><a href="#contact" className="hover:bg-gray-100 px-3 py-1 rounded">Contact</a></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-2 font-semibold text-base bg-white shadow">
          <li><a href="#home" className="block hover:bg-gray-100 px-3 py-2 rounded">Home</a></li>
          <li><a href="#about" className="block hover:bg-gray-100 px-3 py-2 rounded">About</a></li>
          <li><a href="#projects" className="block hover:bg-gray-100 px-3 py-2 rounded">Projects</a></li>
          <li><a href="#services" className="block hover:bg-gray-100 px-3 py-2 rounded">Services</a></li>
          <li><a href="#contact" className="block hover:bg-gray-100 px-3 py-2 rounded">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
