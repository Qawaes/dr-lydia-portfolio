import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import AboutSection from "../components/AboutSection";
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section with background image + changing words */}
      <HeroSection />

      {/* About Section snippet (Dr. Lydia introduction) */}
      {/* <section className="bg-gray-50 py-24 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
        {/* Left content */}
        {/* <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
            Hi, I’m Dr. Lydia K. Mwai (PhD, MBA, MMSK)
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I’m a marketing expert, trainer, and SME supporter with over 10 years of experience in teaching, training, and running successful marketing programs. I specialize in SME training on branding, customer service, and digital marketing, as well as affordable done-for-you marketing services.
          </p>
         
        </div> */}

        {/* Right content */}
        {/* <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/src/assets/images/profile.jpeg" // replace with your image
            alt="Dr. Lydia"
            className="w-64 h-64 md:w-80 md:h-80 rounded-lg object-cover shadow-2xl border-4 border-white"
          />
        </div>
      </section> */} 
      <AboutSection />


      {/* Testimonials Section */}
      <Testimonials />
    </motion.div>
  );
}
