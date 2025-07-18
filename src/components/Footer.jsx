import React from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaLocationArrow,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 px-4 sm:px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Tanu.dev</h2>
          <p className="text-sm leading-6 text-gray-700">
            MERN Stack Developer passionate about building web apps that solve real-world problems.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            <li><a href="#home" className="hover:text-gray-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-gray-500 transition">About</a></li>
            <li><a href="#services" className="hover:text-gray-500 transition">Services</a></li>
            <li><a href="#projects" className="hover:text-gray-500 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-800">
            <li className="flex items-center gap-3">
              <FaEnvelope />
              <a href="mailto:tanukharwar1115@gmail.com" className="hover:underline break-all">
                tanukharwar1115@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone />
              <a href="tel:+919877644783" className="hover:underline">
                +91 98776 44783
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaLocationArrow />
              Chandigarh, India
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
          <div className="flex gap-5 text-xl text-gray-800">
            <a
              href="https://www.linkedin.com/in/tanu-k-b62a42318"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Tanu1115"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:tanukharwar1115@gmail.com"
              className="hover:text-gray-500 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-10 pt-6 text-center text-sm text-gray-700">
        © 2025 <span className="font-semibold">MERNVerse</span> — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
