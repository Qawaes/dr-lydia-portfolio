import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import { motion } from "framer-motion";

// Sample Services Component





export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroSection />

      {/* Services Section */}
   

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
        <p className="text-lg mb-6">
          Join Dr. Lydia's training or book marketing support to take your SME to the next level.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition">
            Book a Free Consultation
          </button>
          <button className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition">
            Join Our Next Training
          </button>
        </div>
      </section>
    </motion.div>
  );
}
