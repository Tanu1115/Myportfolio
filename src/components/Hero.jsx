import React from 'react';
import bgImage from '../assets/cover.jpg'; // ✅ Ensure image is present in /assets

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center text-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white animate-fadeInUp">
        MERNVerse
      </h1>
    </section>
  );
};

export default Hero;
