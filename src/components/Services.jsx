import React from 'react';
import { FaCode, FaPaintBrush, FaServer } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode size={30} />,
      title: "Full Stack Web Development",
      description:
        "Building end-to-end responsive web applications using MongoDB, Express, React, and Node.js (MERN). Clean, optimized code and scalable structure.",
    },
    {
      icon: <FaPaintBrush size={30} />,
      title: "UI/UX Design",
      description:
        "Crafting visually appealing and user-friendly interfaces using HTML, CSS, EJS, and Tailwind CSS. Mobile-first design approach for better user experience.",
    },
    {
      icon: <FaServer size={30} />,
      title: "Backend & API Integration",
      description:
        "Developing secure backend APIs, authentication systems, and integrating third-party services like payment gateways, file storage, etc.",
    },
  ];

  return (
    <section id="services" className="bg-black text-white py-20 px-6 border-t border-[#333]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">My Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#111] p-6 rounded-lg shadow-md border border-[#333] hover:shadow-lg hover:border-white transition duration-300"
            >
              <div className="text-white mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-[#ccc] text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
