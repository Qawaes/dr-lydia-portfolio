import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profileImg from "../assets/images/profile.jpg"; // placeholder

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24">
        
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Helping SMEs Grow Through Training & Affordable Marketing Support
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Learn the basics. Let us market for you. Watch your business grow.
          </p>

          {/* Introduction */}
          <div className="bg-blue text-white-900 p-6 md:p-8 rounded-lg shadow-lg mb-6">
            <p className="text-lg md:text-xl leading-relaxed">
              Hi, I’m <strong>Dr. Lydia K. Mwai (PhD, MBA, MMSK)</strong> — a marketing expert, trainer, and SME supporter. With over 10 years of experience in teaching, training, and running successful marketing programs, I specialize in:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>SME training on branding, customer service, and digital marketing</li>
              <li>Affordable done-for-you marketing services to help small businesses attract and keep customers</li>
            </ul>
            <p className="mt-4">
              I believe that every SME can grow when equipped with the right knowledge and consistent marketing.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Book a Free Consultation
            </Link>
            <Link
              to="/services"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Join Our Next Training
            </Link>
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={profileImg}
            alt="Dr. Lydia Mwai"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-white"
          />
        </motion.div>

      </div>
    </section>
  );
}
