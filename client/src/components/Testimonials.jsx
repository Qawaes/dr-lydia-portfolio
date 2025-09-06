import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample testimonials data
const testimonials = [
  {
    name: "Jane Mwangi",
    title: "Small Retailer, Nyeri",
    text: "Before Dr. Lydia’s training, I only posted randomly. Now I have a strategy and new customers every week!",
    image: "/sample-images/jane.jpg", // replace with actual image later
  },
  {
    name: "Alice Wanjiku",
    title: "Salon Owner, Nairobi",
    text: "Her team set up my WhatsApp Business and Facebook page. I now get inquiries daily without stress.",
    image: "/sample-images/alice.jpg",
  },
  {
    name: "Peter Otieno",
    title: "Restaurant Owner, Kisumu",
    text: "The marketing strategies I learned boosted my sales in just one month!",
    image: "/sample-images/peter.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">
        What People Say
      </h2>

      <div className="max-w-3xl mx-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center gap-4"
          >
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 shadow-md"
            />
            <p className="text-gray-700 italic mb-2">"{testimonials[current].text}"</p>
            <h3 className="text-lg font-semibold text-blue-600">{testimonials[current].name}</h3>
            <p className="text-gray-500 text-sm">{testimonials[current].title}</p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="flex justify-center mt-6 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                current === index ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
