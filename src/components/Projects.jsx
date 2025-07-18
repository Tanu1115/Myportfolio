
import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: "Bookify - Bookstore Ecommerce Website",
      description:
        "Bookify is a fully functional e-commerce platform for books. It features user authentication, shopping cart functionality, and a secure admin dashboard for managing inventory. Designed with a clean UI using EJS templating, it's powered by MongoDB and Node.js.",
      tech: "HTML, CSS, EJS, MongoDB, Node.js, Express.js, Cloudinary",
      live: "#",
      github: "https://github.com/yourusername/bookify"
    }
  ];

  return (
    <section
      id="projects"
      className="bg-black text-white py-20 px-4 sm:px-6 md:px-10 lg:px-20 border-t border-[#333]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12 text-white text-center md:text-left">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-[#111] p-6 rounded-2xl shadow-lg border border-[#222] hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-[#ccc] mb-4 text-sm sm:text-base">
                {project.description}
              </p>

              <p className="text-sm text-[#aaa] mb-4">
                <span className="font-medium text-white">Tech Used:</span>{" "}
                {project.tech}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white text-white px-4 py-2 rounded-lg font-medium hover:bg-white hover:text-black transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
