import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white">
        <img
          src="/assets/images/dr-lydia-hero.jpg"
          alt="Dr. Lydia"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Dr. Lydia – Educator, Consultant & Leader
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Empowering SMEs, communities, and leaders to thrive in the modern
            economy.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition">
              Book Consultation
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Join Training
            </button>
          </div>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-16 px-6 text-center">
        {[
          { number: "10+", label: "Years of Experience" },
          { number: "10,000+", label: "SMEs Trained" },
          { number: "100+", label: "Projects Delivered" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            className="bg-white p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-blue-600">{stat.number}</h3>
            <p className="mt-2 text-gray-700">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Narrative Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <motion.h2
          className="text-3xl font-bold text-blue-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A Journey of Impact
        </motion.h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Dr. Lydia has dedicated her career to equipping individuals and
          organizations with the tools to succeed in today’s rapidly changing
          economy. From mentoring young leaders to consulting SMEs, her work has
          transformed lives and empowered communities.
        </p>
      </section>

      {/* Milestones */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
            Milestones & Achievements
          </h2>
          <ul className="space-y-6 text-lg text-gray-800">
            <li>🌟 Leadership at Dedan Kimathi University of Technology</li>
            <li>📚 Published research in entrepreneurship & leadership</li>
            <li>🏆 Recognized for community-driven initiatives</li>
          </ul>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">
          Fun Facts About Dr. Lydia
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Beyond her professional pursuits, Dr. Lydia is passionate about art,
          culture, and community development. She believes in the power of
          education, creativity, and collaboration to shape the future.
        </p>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-400 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Work With Dr. Lydia?
        </h2>
        <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Get in Touch
        </button>
      </section>
    </div>
  );
}
