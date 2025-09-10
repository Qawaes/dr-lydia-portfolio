import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import aboutImg from "../assets/images/about.jpeg";
import aboutImage2 from "../assets/images/home 2.jpeg";
import aboutImage3 from "../assets/images/about3.jpeg"

const abouts = [aboutImg, aboutImage2, aboutImage3];
const words = ["Educator", "Consultant", "Leader"];

export default function About() {
  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [currentBg, setCurrentBg] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);

  // Rotate backgrounds
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % abouts.length);
    }, 6000);
    return () => clearInterval(bgInterval);
  }, []);

  // Rotate words
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(wordInterval);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900 overflow-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentBg}
            src={abouts[currentBg]}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
            Dr. Lydia –{" "}
            <span className="text-yellow-400 inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {words[currentWord]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <motion.p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Empowering SMEs, communities, and leaders to thrive in the modern
            economy.
          </motion.p>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-20 px-6 text-center">
        {[
          { number: "10+", label: "Years of Experience" },
          { number: "10,000+", label: "SMEs Trained" },
          { number: "100+", label: "Projects Delivered" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-5xl font-extrabold text-blue-600"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
            >
              {stat.number}
            </motion.h3>
            <p className="mt-3 text-gray-700 text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Narrative Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-600 mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A Journey of Impact
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Dr. Lydia has dedicated her career to equipping individuals and
          organizations with the tools to succeed in today’s rapidly changing
          economy. From mentoring young leaders to consulting SMEs, her work has
          transformed lives and empowered communities.
        </motion.p>
      </section>

      {/* Educational Background */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-blue-600 mb-12 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Educational Background
          </motion.h2>
          <div className="relative border-l-4 border-blue-500 pl-8 space-y-10">
            {[
              {
                year: "PhD in Marketing",
                place: "Dedan Kimathi University of Technology",
                desc: "Specialized in SME branding, customer behavior, and sustainable marketing strategies.",
              },
              {
                year: "MBA in Strategic Management",
                place: "University of Nairobi",
                desc: "Focused on leadership, corporate strategy, and business growth models.",
              },
              {
                year: "BCom in Marketing",
                place: "Kenyatta University",
                desc: "Built strong foundations in consumer research, sales, and entrepreneurship.",
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                <span className="absolute -left-4 top-6 w-6 h-6 bg-blue-500 rounded-full border-4 border-white" />
                <h3 className="text-2xl font-bold text-gray-800">{edu.year}</h3>
                <p className="text-lg text-blue-600 font-semibold">{edu.place}</p>
                <p className="mt-2 text-gray-700">{edu.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-blue-600 mb-10 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Milestones & Achievements
          </motion.h2>
          <ul className="space-y-6 text-lg text-gray-800">
            {[
              "🌟 Leadership at Dedan Kimathi University of Technology",
              "📚 Published research in entrepreneurship & leadership",
              "🏆 Recognized for community-driven initiatives",
            ].map((item, i) => (
              <motion.li
                key={i}
                className="flex items-center justify-start bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-600 mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Fun Facts About Dr. Lydia
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Beyond her professional pursuits, Dr. Lydia is passionate about art,
          culture, and community development. She believes in the power of
          education, creativity, and collaboration to shape the future.
        </motion.p>
      </section>
    </div>
  );
}
