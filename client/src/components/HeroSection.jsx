import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import home1 from "../assets/images/home 1.jpeg";
import home2 from "../assets/images/home2.jpeg";

// Array of background images
const backgrounds = [home1, home2];

export default function HeroSection() {
  const words = [
    "Helping SMEs Grow",
    "Affordable Marketing Support",
    "Expert Training for Entrepreneurs",
  ];

  const [currentWord, setCurrentWord] = useState(0);
  const [currentBg, setCurrentBg] = useState(0);

  // Rotate headline words
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 5000);
    return () => clearInterval(wordInterval);
  }, []);

  // Rotate background images
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 6000); // change background every 5s
    return () => clearInterval(bgInterval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      {/* Animate background images sliding from right */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentBg}
          src={backgrounds[currentBg]}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentWord}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {words[currentWord]}
          </motion.h1>
        </AnimatePresence>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/contact"
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Book Consultation
          </Link>
          <Link
            to="/services"
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
