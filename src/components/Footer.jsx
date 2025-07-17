import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaLocationArrow } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[white] text-[black] py-12 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-3">Tanu.dev</h2>
          <p className="text-sm leading-6">
            MERN Stack Developer passionate about building web apps that solve real-world problems.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-[gray]">Home</a></li>
            <li><a href="#about" className="hover:text-[gray]">About</a></li>
            <li><a href="#services" className="hover:text-[gray]">Services</a></li>
            <li><a href="#projects" className="hover:text-[gray]">Projects</a></li>
            <li><a href="#contact" className="hover:text-[gray]">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[black]" />
              <a href="mailto:tanukhrwar15@gmail.com">tanukhrwar15@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-[black]" />
              <a href="tel:+919877644783">+91 98776 44783</a>
            </li>
            <li className="flex items-center gap-3">
              <FaLocationArrow className="text-[black]" />
              Chandigarh, India
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Me</h3>
          <div className="flex gap-5 text-xl">
            <a href="https://www.linkedin.com/in/tanu-k-b62a42318" target="_blank" rel="noreferrer" className="hover:text-[gray]">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Tanu1115" target="_blank" rel="noreferrer" className="hover:text-[gray]">
              <FaGithub />
            </a>
            <a href="mailto:tanukharwar1115@gmail.com" className="hover:text-[gray]">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#334155] mt-10 pt-6 text-center text-sm">
        © 2025 <span className="text-black">Tech.Exllence</span> — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

