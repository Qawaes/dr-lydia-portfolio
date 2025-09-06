import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        formData,
        "your_user_id"
      )
      .then(() => {
        setStatus("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("❌ Failed to send message. Try again."));
  };

  return (
    <motion.section
      className="relative w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100 px-6 md:px-20 py-16 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated floating circles */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-blue-300 rounded-full opacity-30"
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-60 h-60 bg-yellow-300 rounded-full opacity-20"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left: Contact Form */}
        <div>
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            Have questions, bookings, or collaboration ideas? Send us a message
            and we’ll get back to you shortly.
          </p>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-2xl flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
            {status && <p className="text-center text-sm mt-2">{status}</p>}
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-6 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-800">Contact Details</h3>
          <p className="text-gray-700">
            <span className="font-bold">Phone/WhatsApp:</span>{" "}
            <a
              href="https://wa.me/254728840848"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              +254 728 840 848
            </a>
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Email:</span> lydiakmwai@gmail.com
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Location:</span> Nairobi, Kenya
          </p>

          {/* Social Links */}
          <div className="flex gap-6 mt-6 justify-center md:justify-start text-2xl text-gray-700">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
