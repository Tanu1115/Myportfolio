import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-20 px-6 border-t border-[#333]">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>

        {/* Intro */}
        <p className="text-[#ccc] text-lg leading-7">
          Hello! I'm <span className="text-white font-semibold">Tanu</span>, a dedicated and detail-oriented <span className="text-white font-semibold">MERN Stack Developer</span> based in India. I craft full-stack web applications using MongoDB, Express.js, React.js, and Node.js — optimized for performance, usability, and maintainability.
        </p>

        <p className="text-[#aaa] text-md mt-4 leading-6">
          My journey into development started with a passion for solving real-world problems through code. Over time, I’ve built and deployed scalable applications, designed intuitive user interfaces, and worked with REST APIs, authentication, and cloud integrations like Cloudinary.
        </p>

        {/* Skills */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4 text-white">Tech Stack & Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-[#ddd]">
            <span className="bg-[#1a1a1a] p-2 rounded">HTML5</span>
            <span className="bg-[#1a1a1a] p-2 rounded">CSS3</span>
            <span className="bg-[#1a1a1a] p-2 rounded">JavaScript</span>
            <span className="bg-[#1a1a1a] p-2 rounded">React.js</span>
            <span className="bg-[#1a1a1a] p-2 rounded">Node.js</span>
            <span className="bg-[#1a1a1a] p-2 rounded">Express.js</span>
            <span className="bg-[#1a1a1a] p-2 rounded">MongoDB</span>
            <span className="bg-[#1a1a1a] p-2 rounded">EJS</span>
            <span className="bg-[#1a1a1a] p-2 rounded">Tailwind CSS</span>
            <span className="bg-[#1a1a1a] p-2 rounded">Bootstrap</span>
            <span className="bg-[#1a1a1a] p-2 rounded">Git & GitHub</span>
            <span className="bg-[#1a1a1a] p-2 rounded">Cloudinary</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
