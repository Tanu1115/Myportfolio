// src/pages/Contact.jsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong, please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-10 px-4 md:px-20 bg-white text-black">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full border px-4 py-2 rounded h-40"
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
