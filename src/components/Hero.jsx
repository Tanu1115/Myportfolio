import React from 'react';
import bgImage from '../assets/cover.jpg'; // ✅ Make sure image is in /assets

const Hero = () => {
  return (
    <section
      id="home"
      className="h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-5xl md:text-7xl font-extrabold text-white animate-fadeInUp opacity-0">
        Tech Excellence
      </h1>
    </section>
  );
};

export default Hero;

