import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Example testimonials data
const testimonials = [
  {
    name: "Jane Mwangi",
    image: "/src/assets/images/testimonial1.jpg", // replace with actual
    text: "Dr. Lydia transformed our SME marketing strategy. Highly recommend her trainings!"
  },
  {
    name: "Samuel Otieno",
    image: "/src/assets/images/testimonial2.jpg",
    text: "Thanks to her consulting, our customer engagement increased by 50% in 3 months."
  },
  {
    name: "Grace Wanjiru",
    image: "/src/assets/images/testimonial3.jpg",
    text: "Her approach is practical, actionable, and very affordable for small businesses."
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <section className="bg-blue-50 py-24">
      <div className="container mx-auto px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-12">
          What People Say
        </h2>

        <div className="relative max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center gap-4"
            >
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-20 h-20 rounded-full object-cover shadow-md"
              />
              <p className="text-gray-700 text-lg italic">"{testimonials[index].text}"</p>
              <h3 className="text-blue-600 font-semibold mt-2">{testimonials[index].name}</h3>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
