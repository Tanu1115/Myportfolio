import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("mobile submit");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Message failed to send. Please try again.');
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-4 sm:px-6 md:px-10 border-t border-[#333]"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* LEFT: Contact Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let’s Work Together</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded bg-[#1a1a1a] text-white placeholder-gray-400 border border-[#444] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded bg-[#1a1a1a] text-white placeholder-gray-400 border border-[#444] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded bg-[#1a1a1a] text-white placeholder-gray-400 border border-[#444] focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-all font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT: Contact Info */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Contact Info</h2>
          <div className="space-y-5 text-[#ccc] text-base">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-white" />
              <a href="mailto:tanukharwar1115@gmail.com" className="hover:underline break-all">
                tanukharwar1115@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-white" />
              <a href="tel:+919877644783" className="hover:underline">
                +91 98776 44783
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-white" />
              Chandigarh, India
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl mt-8">
            <a
              href="https://github.com/Tanu1115"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/tanuk/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
