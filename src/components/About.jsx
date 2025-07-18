import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="bg-black text-white py-20 px-4 sm:px-6 md:px-10 border-t border-[#333]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center md:text-left">
          About Me
        </h2>

        {/* Intro */}
        <p className="text-[#ccc] text-base sm:text-lg leading-relaxed max-w-4xl mb-6">
          Hello! I'm <span className="text-white font-semibold">Tanu</span>, a dedicated and
          detail-oriented <span className="text-white font-semibold">MERN Stack Developer</span>{' '}
          based in India. I craft full-stack web applications using MongoDB, Express.js, React.js,
          and Node.js — optimized for performance, usability, and maintainability.
        </p>

        <p className="text-[#aaa] text-sm sm:text-base leading-7 max-w-4xl mb-10">
          My journey into development started with a passion for solving real-world problems through
          code. Over time, I’ve built and deployed scalable applications, designed intuitive user
          interfaces, and worked with REST APIs, authentication, and cloud integrations like
          Cloudinary.
        </p>

        {/* Skills */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">
            Tech Stack & Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-[#ddd]">
            {[
              'HTML5',
              'CSS3',
              'JavaScript',
              'React.js',
              'Node.js',
              'Express.js',
              'MongoDB',
              'EJS',
              'Tailwind CSS',
              'Bootstrap',
              'Git & GitHub',
              'Cloudinary',
            ].map((skill) => (
              <span
                key={skill}
                className="bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors p-2 rounded text-center"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
